
<?php   
    // include "DBConnect.php";
    include ("connection.php");
    $webPage=$_POST['web_page'];
    $propID=$_POST['prop_id'];
    echo "propid= " . $propID . "\n";
    echo "webpage=" . $webPage . "\n";
    $insert="INSERT INTO proposals(PROPID,WEB_PAGE, NEWEST_DATA,CHANGER,CHANGE_NBR,CHANGED) values ('" . $propID . "','";
    if (strlen($webPage)>0) {
        $insert .= $webPage . "','Y','imam',0, now())";
        // echo  $insert;
        if ($conn->query($insert) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
          
        $conn->close();
    }
?>