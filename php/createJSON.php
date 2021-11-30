<?php
    include("connection.php");
       
    // $conn=new mysqli('localhost','root','imMx010m','src');
    
    // CREATE RATE DATA JSON
    $sql="SELECT * from dockage_rate";
    $dckgData=array();
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {      
            $dckgData[] = array (
                'grossTon' => $row['GROSS_TON'],
                'docking'=>$row['DOCKING'],
                'rate'=>$row['RATE_PER_DAY'],
                'tugboat'=>$row['TUGBOAT_ASSISTANCE']
            );
        }
    }

    $dckgDataR["DockageData"]=  $dckgData ;
    $rateDckgDataJSON=json_encode($dckgDataR) . "\n";

    $sql="SELECT * from FLOATING_IN_SHIPYARD_AREA_RATE";
    $floatingData=array();
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {  
            $floatingData[] = array (
                'grossTon' => $row['GROSS_TON'],
                'rate'=>$row['TS_RATE_PER_DAY'],
                'mooring_rate'=>$row['MOORING_RATE'],
                'mooring_tugboat'=>$row['MOORING_TUGBOAT_ASSISTANCE']
            );
        }
    }
    
    $floatingDataR["FloatingData"]=  $floatingData ;
    $rateFloatingDataJSON=json_encode($floatingDataR);
    // echo $rateFloatingDataJSON;

    // CREATE SERVICE ITEM JSON
    $sql="select service_item from service_item where service_name='Dockage'";
        // echo $sql . "\n\n\n";
        // and service_index= (select min(service_index) " .
    $result = $conn->query($sql);
    // echo $result;
    // echo $result->num_rows;
    if ($result->num_rows > 0) {   
        // $serviceItemData= array();
        $arr=array();
    
        while($row = $result->fetch_assoc()) {
            $arr[]=array("service_item"=>$row["service_item"]); 
        }
        // echo $arr;
        $arrR["DockageItemData"]=  $arr ;
        $serviceItemJSON= json_encode( $arrR);   
        // echo $serviceDataCol;
        // echo "JSON=" . json_encode($arr);
        // echo $serviceDatas[1].service;
        // echo "DataX= " . $serviceDatasX . "\n";\
        // echo $serviceDataJSON . "\n";
        
    }

    $myIPsFile = fopen("rate_data.json", "w") or die("Unable to open file!");
    fwrite($myIPsFile, $rateDckgDataJSON);
    fclose($myIPsFile);
   
    $myIPsFile = fopen("rate_data.json", "a") or die("Unable to open file!");
    fwrite($myIPsFile, $rateFloatingDataJSON);
    fclose($myIPsFile);

    $myIPsFile = fopen("service_item.json", "w") or die("Unable to open file!");
    fwrite($myIPsFile, $serviceItemJSON);
    fclose($myIPsFile);
?>