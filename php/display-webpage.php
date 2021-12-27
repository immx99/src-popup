
<?php
    include("connection.php");
    $propID=$_POST['propid'];
    // $propID="0000143";
    if (strlen(trim($propID))>0) {
       
        // $conn=new mysqli('localhost','root','imMx010m','src');
        $sql="select WEB_PAGE " . 
            "from proposals where propid='$propID' and changer='imam' and id=(select max(id) from proposals where propid='$propID')";
        // echo $sql . "\n\n\n";
            // and service_index= (select min(service_index) " .
        $result = $conn->query($sql);
        // echo $result;
        // echo $result->num_rows;
        if ($result->num_rows > 0) {   
            while($row = $result->fetch_assoc()) {   
                // $webPage=$row['WEB_PAGE'];
                echo "<input type='textarea' id='storage2' style='visibility:collapse' name='storage2' value='" . $row['WEB_PAGE'] . "'>";
            }
            
        }
    }
  
?>


<script>
    // console.log(document.getElementById("storage2").value);
    // var htmlString=document.getElementById("storage2").value;
    document.getElementById("container").innerHTML=document.getElementById("storage2").value;
    document.getElementById("storage2").value=document.getElementById("tdPropID").innerHTML;
    // alert(document.getElementById("container").innerHTML);
    var htmlButtonString='<div class="d-grid gap-2 d-md-flex justify-content-md-end">';
    htmlButtonString+='<button type="button" id= "addBtn" class="btn btn-success  me-md-2 float-right"><span class="glyphicon glyphicon-plus"  aria-disabled="true"> Add </span></button>';
    htmlButtonString+='<button type="button" id="excelBtn" class="btn btn-primary me-md-2 float-right"> Export to Excel </span></button>';
    htmlButtonString+='<button type="button" id="saveBtn" class="btn btn-primary me-md-2 float-right"><span class="glyphicon glyphicon-floppy-saved"  aria-disabled="true"> Save </span></button>';
    htmlButtonString+='<button type="button" id="printBtn" class="btn btn-primary me-md-2 float-right"><span class="glyphicon glyphicon-print"  aria-disabled="true"> Print </span></button>';
    document.getElementById("button-panel").innerHTML=htmlButtonString;
    enableSideMenu("all");
    disableBtn("all");
    grandTotal=unformatNumber(document.getElementById("tdGrandTotal").innerHTML.split(">")[1].split("<")[0]);
    // alert("Grand Total=" + grandTotal);
    if (document.getElementById("container").innerHTML.indexOf("DOCKAGE")!=-1) {
            iDckg=parseInt(document.getElementById("tdDockageCount").innerHTML.split("( ")[1].split(" ")[0]);
            dckgTotal=unformatNumber(document.getElementById("tdDockageTotal").innerHTML);
    }
    if (document.getElementById("container").innerHTML.indexOf("shipyards area")!=-1) {
            iFloat=parseInt(document.getElementById("tdFloatingCount").innerHTML.split("( ")[1].split(" ")[0]);
            floatTotal=unformatNumber(document.getElementById("tdFloatingTotal").innerHTML);
    }
    if (document.getElementById("container").innerHTML.indexOf("Mooring")!=-1) {
            iMoor=parseInt(document.getElementById("tdMoorCount").innerHTML.split("( ")[1].split(" ")[0]);
            moorTotal=unformatNumber(document.getElementById("tdMoorTotal").innerHTML);
    }
    if (document.getElementById("container").innerHTML.indexOf("Dock Block Removal")!=-1) {
            iDbr=parseInt(document.getElementById("tdDbrCount").innerHTML.split("( ")[1].split(" ")[0]);
            dbrTotal=unformatNumber(document.getElementById("tdDbrTotal").innerHTML);
    }
    if (document.getElementById("container").innerHTML.indexOf("Boat and Floating Crane")!=-1) {
            iBafc=parseInt(document.getElementById("tdBafcCount").innerHTML.split("( ")[1].split(" ")[0]);
            bafcTotal=unformatNumber(document.getElementById("tdBafcTotal").innerHTML);
    }

</script>


