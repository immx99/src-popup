<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

</head>
<body>
  
    <div class="card">
    <div class="card-header">
        <h4 id="judul">OPEN PROPOSAL</h4>
    </div>
    <div class="card-body">
        <form  method="POST" id="openProp" class="openProp">
        <?php
            include("connection.php");
            // $conn=new mysqli('localhost','root','imMx010m','src');
            $sql="select distinct propid from proposals where changer='imam' order by propid desc ";
            echo " My Proposal ID is: ";
            $result = $conn->query($sql);
            // echo $result;
            //echo $result->num_rows
            echo "<select name='propid' id='propid'>";
            $i=1;
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {					
                    $propID=$row["propid"];
                    echo $propID;
                    echo "<option  value='" . $propID . "'>" . $propID . "</option>";
                    echo $i+=1;
                }
            } else {
                echo "Your transaction is not found. Please, create New File";
            }
            echo '</select >';
        ?>
        
    </div>
    <div class="card-footer">
        <button type="button" id= "openPropBtn" class="btn btn-info float-right">Open</button>
        </form>
    </div> 
    
    <script>
        $("#openPropBtn").removeClass("disabled");// 
        $("#openPropBtn").addClass("active");// for 2nd li disable
        $(document).ready(function () {
            $('#openPropBtn').click(function () {		
                $('#openPropBtn').attr("disabled","true");
        
                // $(document).ready(function () {	
                // var htmlPage=document.getElementById("container").outerHTML;
                // document.getElementById('htmlpage').value= htmlPage;
                // )};
                var data = $('.openProp').serialize();	
                // var formData = new FormData(document.getElementsByName('openProp-form')[0]);// yourForm: form selector        
            //   console.log("sukses1");
                // document.getElementById('htmlpage').reset();	
                // ?service=docking&act=save_data'
                $.ajax({
                    type: 'POST',
                    url: 'php/display-webpage.php',
                    data: data,
                    success: function(result){
                        // console.log(data + "   sukses open form");
                        // alert(data);
                        $("#container").html(result);
                        // document.getElementById('dckgSaveBtn').innerHTML ="btn btn-info float-right tombol-simpan";
                        
                    }
                });  
            });
        });    
    </script>
    
</body>
</html>


