
	<style type="text/css">
		h2 {
		  font-size: 15px;
		}
	</style>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
   
   <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> -->
 <script>

    // propID=document.getElementById("counter").value;

    // window.onload = function(){
    // 	propNbr = document.getElementById("storage").getAttribute("counter");
    // 	alert(propNbr);
    // }
    // propNbr = document.getElementById("storage").getAttribute("counter");
    // propID="0".repeat(7-propID.length) + propID;
    // console.log("propID="+propID);
    var selectedData="Up to 300/Docking & Undocking/warship";
 </script>


 <!-- partial:index.partial.html -->
 

<div class="menu-div">
    <div class="corner">
        <table width=90% height=100%>
            <tr><td width=25%><div style="border:5px; solid black; border-radius: 20px;">
                <img src="assets/icons/icons8-computer-64.png" width="60" height="60"></div></td>
                <td width=65%>  
                    <!-- Actual search box -->
                    <!-- <div class="main"> -->
                    <div class="input-group">
    <input type="text" class="form-control" placeholder="Search or jump ..">
    <div class="input-group-append">
      <button class="btn btn-secondary" type="button">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
                    <!-- </div> -->
              </td>
            </tr>
        </table>
    </div>

    <nav class="menu">
      <ol>
          <li class="menu-item">
            <a href="#0">Proposal</a>
            <ol class="sub-menu">
              <li class="menu-item active" id="liCreateNew" ><a href="index.php?newfile=yes&renewal=no&open=no">Create New</a></li> 
              <li class="menu-item active" id="liRenewal"><a  href="index.php?newfile=yes&renewal=yes&open=no">Renewal</a></li>
              <li class="menu-item active" id="liOpenProp"><a href="javascript:void(0)" onclick="openClick()">Open</a></li>
              <li class="menu-item"><a href="#0">Close</a></li>
              <li class="menu-item"><a href="index.php">Logout</a></li>
            </ol>
          </li>
          <li class="menu-item"><a href="index.html">Home</a></li>
          <li class="menu-item"><a href="#0">Report</a></li>
          <li class="menu-item"><a href="#0">Admin</a></li>
          <li class="menu-item"><a href="#0">Contact</a></li>
          <li class="menu-item"><a href="#0">About</a></li>
          <li class="menu-item"><a href="javascript:void(0)" onclick="loginClick()">Login</a></li>
      </ol>
    </nav>
</div>

    <div class="side-menu">
      <div id="side-menu-title">
        <p align="center">Services</p>
      </div>
      <ul class="file-tree">
          <li><a href="#">A. General</a>
            <ul>
              <li><a href="#link2">Overtime Rate for General Service</a> 
              </li>
              <li class='active' id='liDockage'><a id='side-menu-dockage' class='nav-link dockage' href='javascript:void(0)' onclick='side_menu_click("dockage")'>1. Dockage</a> </li>
              <li><a href="#">2. Floating Charges in Shipyard Area</a>
              <ul>
                <li class='active' id='liFloating'><a id='side-menu-floating' class='nav-link floating'
                    href='javascript:void(0);' onclick='side_menu_click("floating")'>a. For time spending shipyards areas, floating days to be
                    charged (Excluded Port Authority wharfage charges)</a> </li>
                <li> <a a id='side-menu-mooring' class='nav-link mooring'
                    href='javascript:void(0);' onclick='side_menu_click("mooring")'>b. For Mooring and Unmooring Operation</a> </li>
              </ul>
              </li>
              <li  class='active' id='liDbr'> <a id='side-menu-dbr' class='nav-link dbr'
                    href='javascript:void(0);' onclick='side_menu_click("dbr")'>3. Dock Block Removal</a> </li>
              <li><a href="#">4. Tug Boat and Cranes Hire</a> 
                <ul>
                <li  class='active' id='liBafc'> <a id='side-menu-bafc' class='nav-link bafc'
                    href='javascript:void(0);' onclick='side_menu_click("bafc")'>a. Boat and Floating Crane</a> </li>
                  <li> <a href="#link6">b. Dock and Mobile Crane</a> </li>
                  <li> <a href="#link6">c. Forklift</a> </li>
                </ul>
              </li>
              <li><a href="#">5. Electric Power Supply</a> 
                <ul>
                  <li> <a href="#link5">a. Connecting and Disconecting Shore Power</a> </li>
                  <li> <a href="#link6">b. Electric Current for Temporary Lighting (docking or floating)</a> </li>
                  <li> <a href="#link6">c. Power Consumption</a> </li>
                </ul>
              </li>
              <li><a href="#">6. Other Sevices</a> 
                <ul>
                   <li class='active' id='liFws'> <a id='side-menu-fws' class='nav-link fws'
                        href='javascript:void(0);' onclick='side_menu_click("fws")'>a. Fresh Water Supply</a> </li>
                    <li class='active' id='liCas'> <a id='side-menu-cas' class='nav-link cas'
                        href='javascript:void(0);' onclick='side_menu_click("cas")'>b. Compressed Air Supply</a> </li>
                    <li class='active' id='liPilotage'> <a id='side-menu-pilotage' class='nav-link pilotage'
                        href='javascript:void(0);' onclick='side_menu_click("pilotage")'>c. Pilotage</a> </li>
                    <li class='active' id='liFg'> <a id='side-menu-fg' class='nav-link fg'
                        href='javascript:void(0);' onclick='side_menu_click("fg")'>d. Fire Guard</a> </li>
                    <li class='active' id='liWatchman'> <a id='side-menu-watchman' class='nav-link watchman'
                        href='javascript:void(0);' onclick='side_menu_click("watchman")'>e. Watchman</a> </li>
                    <li class='active' id='liDs'> <a id='side-menu-ds' class='nav-link ds'
                        href='javascript:void(0);' onclick='side_menu_click("ds")'>f. Diver Service</a> </li>
                    <li class='active' id='liGd'> <a id='side-menu-gd' class='nav-link gd'
                        href='javascript:void(0);' onclick='side_menu_click("gd")'>g. Garbage Disposal</a> </li>
                    <li class='active' id='liOsib'> <a id='side-menu-osib' class='nav-link osib'
                        href='javascript:void(0);' onclick='side_menu_click("osib")'>h. Oil Storing in Barge</a> </li>
                    <li class='active' id='liFtb'> <a id='side-menu-ftb' class='nav-link ftb'
                        href='javascript:void(0);' onclick='side_menu_click("ftb")'>i. Flat Top Barge (in Shipyard Area)</a> </li>
                    <li class='active' id='liTlp'> <a id='side-menu-tlp' class='nav-link tlp'
                        href='javascript:void(0);' onclick='side_menu_click("tlp")'>j. Telephone</a> </li>
                    <li class='active' id='liFp'> <a id='side-menu-fp' class='nav-link fp'
                        href='javascript:void(0);' onclick='side_menu_click("fp")'>k. Fire Precaution</a> </li>
                    <li class='active' id='liStaging'> <a id='side-menu-staging' class='nav-link staging'
                        href='javascript:void(0);' onclick='side_menu_click("staging")'>l. Staging</a> </li>
                    <li class='active' id='liVentilation'> <a id='side-menu-vetilation' class='nav-link ventilation'
                        href='javascript:void(0);' onclick='side_menu_click("ventilation")'>m. Ventilation </li>
                    <li class='active' id='liBp'> <a id='side-menu-bp' class='nav-link bp'
                        href='javascript:void(0);' onclick='side_menu_click("bp")'>n. Bilge Pumps</a> </li>
                    <li class='active' id='liBw'> <a id='side-menu-bw' class='nav-link bw'
                        href='javascript:void(0);' onclick='side_menu_click("bw")'>o. Ballast Water</a> </li>
                </ul>
              </li>
            </ul>
            

          <li><a href="#">B. Hull Cleaning & Painting Works</a>
            <ul>
              <li> <a href="#link5">1. Scrapping, Sanblasting and Painting</a> </li>
              <li> <a href="#link6">2. Draft & Plinsoll Mark, Waterline, Ship's Name & Registered Port, Company's Name</a> </li>
              <li> <a href="#link7">3. Cleaning and Painting of Cofferdam (Owner's Paint)</a> </li>
              <li> <a href="#link8">4. Cleaning and Painting Tank Top</a> </li>
              <li> <a href="#link8">5. Cleaning Hold and Engine Bilge</a> </li>
            </ul>
          </li>
          <li><a href="#">C. Anchor Cables Works</a>
            <ul>
              <li> <a href="#link5">1. Anchor and Chain</a> </li>
              <li> <a href="#link6">2. Chain Locker</li>
            </ul>
          </li>
          <li><a href="#">D. Shafting Works</a>
            <ul>
              <li> <a href="#link5">1. Measuring Tailshaft Clearence (per shaft)</a> </li>
              <li> <a href="#link6">2. Shaft Withdrawl (per shaft)</a> </li>
              <li> <a href="#link7">3. Crack Testing of Shaft Key Way</a> </li>
              <li> <a href="#link8">4. Stern Gland</a> </li>
              <li> <a href="#link8">5. Lineshaft Bearing</a> </li>
              <li> <a href="#link5">6. Remove and Refit Propeller</a> </li>
              <li> <a href="#link6">7. Propeller Polishing</a> </li>
              <li> <a href="#link7">8. Static Balancing of Propeller</a> </li>
            </ul>
          </li>
          <li><a href="#">E. Rudder Works</a>
            <ul>
              <li> <a href="#link5">1. Rudder Measure</a> </li>
              <li> <a href="#link6">2. Rudder Inspection</a></li>
              <li> <a href="#link6">3. Stuffing Box Repacking (Owner's Packing)</a></li>
            </ul>
          </li>
          <li><a href="#">F. Anodes</a>
            <ul>
              <li> <a href="#link5">1. Hull Anodes</a> </li>
              <li> <a href="#link6">2. Tank Anodes</a></li>
            </ul>
          </li>
          <li><a href="#">G. Sea Chest & Sea Valves</a>
            <ul>
              <li> <a href="#link5">1. Sea Chest</a> </li>
              <li> <a href="#link6">2. Sea Valves/Overboard Discharge Valves</a></a></li>
              <li> <a href="#link6">3. Stop Valves</a></li>
              <li> <a href="#link6">4. Scupper Valves/Storm Valves</a></li>
            </ul>
          </li>
          <li><a href="#">H. Hull Construction Works</a>
            <ul>
              <li> <a href="#link5">1. Shell Plate Renewal (Flat Welding Construction)</a> </li>
              <li> <a href="#link6">2. Welding</li>
              <li> <a href="#link6">3. Doubling of Steel Plates (6mm thickness plate</a>)</li>
              <li> <a href="#link6">4. Eye Plate</a></li>
            </ul>
          </li>
          <li><a href="#">I. Piping Works</a>
            <ul>
              <li> <a href="#link5">1. Renewal Straight Steel Pipes</a> </li>
              <li> <a href="#link6">2. Bending of Pipes (Per Bend)</a></li>
              <li> <a href="#link6">3. Renewal of Steel Pipe Clamps (Per Piece) </a></li>
              <li> <a href="#link6">4. Renewal of Pipe Flange (Steel) per Piece</a></li>
            </ul>
          </li> 
          <li><a href="#">J. Tank Works</a>
            <ul>
              <li> <a href="#link5">1. Cleaning of Water Tank</a> </li>
              <li> <a href="#link6">2. Cleaning of Oil Tank</a> </li>
              <li> <a href="#link7">3. Cleaning of Cargo Tank and Void Tanks</a> </li>
              <li> <a href="#link8">4. Cleaning of Sewage Tank</a> </li>
              <li> <a href="#link8">5. Cement Washing (Including Cement)</a> </li>
              <li> <a href="#link5">6. Manholes</a> </li>
              <li> <a href="#link6">7. Bottom Plugs</a> </li>
              <li> <a href="#link7">8. Removal Mud and Sludge</a> </li>
              <li> <a href="#link6">9. Internal Inspection</a> </li>
              <li> <a href="#link7">10. Painting per Coat for Inside of Tank (Excluded Assistance Work)</a> </li>

            </ul>
          </li> 
          <li><a href="#">K. Inspection & Testing Works</a>
            <ul>
              <li> <a href="#link5">1. Tank Test</a> </li>
              <li> <a href="#link6">2. Hose Test and Watertight Test</a></li>
              <li> <a href="#link6">3. Ultrasonic Test </a></li>
              <li> <a href="#link6">4. Gas Free Inspection</a></li>
              <li> <a href="#link6">5. Megger Test for Main Switchboard (per vessel)</a></li>
            </ul>
          </li> 
      </ul>
  </div>
  <!-- <script src="https://code.jquery.com/jquery-1.12.4.min.js" type = "text/javascript"></script>  -->
  <script src="js/file-explore.js" type = "text/javascript"></script> 
  <script>
  $(document).ready(function() {
              $(".file-tree").filetree();
            });
  </script>
  <div class="fullscreen-container">
    <div class="popup-login" id="popup-login">
        <div class="close-btn">&times;</div>
        <div class="form">
            <h2>Login</h2>
            <div class="form-element">
                <label for="email">Username</label>
                <input type="text" id="email" placeholder="Enter Your Email Address">    
            </div>
            <div class="form-element">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password">    
            </div>
            <div class="form-element">
                <input type="checkbox" id="remember-me">    
                <label for="remember-me">Remember Me</label>
            </div>
            <div class="form-element">
                <button>Sign in</button>
            </div>
            <div class="form-element">
                <a href="#">Forgot Password?</a>
            </div>
        </div>
    </div> 
    <div class="popup-service-item" id="popup-service-item">
     <div class="si-close-btn">&times;</div>
        <div class="si-form">
            
        </div>
    </div>
  </div>  
  
  
  
  <script>
 
 
    function openClick() {
      $("#liCreateNew").removeClass("active");// 
      $("#liCreateNew").addClass("disabled");// for 2nd li disable  
      $("#liOpenProp").removeClass("active");// 
      $("#liOpenProp").addClass("disabled");// for 2nd li disable  
      $("#liRenewal").removeClass("active");
      $("#liRenewal").addClass("disabled");
      document.getElementById('liCreateNew').style.color="grey"; //tidak jalan
      document.getElementById("storage").value="xxxxxxx/no/no/yes"
      $.get("php/openprop-form.php",function(data) {
          $("#container").html(data);
      
      });
    }
    function renewalClick() {
      $("#liCreateNew").removeClass("active");// 
      $("#liCreateNew").addClass("disabled");// for 2nd li disable  
      $("#liOpenProp").removeClass("active");// 
      $("#liOpenProp").addClass("disabled");// for 2nd li disable  
      $("#liRenewal").removeClass("active");
      $("#liRenewal").addClass("disabled");
      document.getElementById('liCreateNew').style.color="grey"; //tidak jalan
      // document.getElementById("storage").value="xxxxxxx/no/yes/yes"
      $.get("php/renewalprop-form.php",function(data) {
          $("#container").html(data);
      
      });
    }
  
  </script>


<?php
if (isset($_GET["newfile"])) {
    $newFile=$_GET["newfile"];
    $renewal=$_GET["renewal"];
    $open=$_GET["open"];
    // if (strlen(trim($_GET["propID"]))<1 ) {
    if ($newFile=="yes" || $renewal=="yes") {
    //   $propID=$_GET["propid"];
    //   if ( $propID==null) {
      //  echo "new file= " . $newFile;
        $myCounterFile= fopen("counter.txt", "r") or die("Unable to open file!");
            $propNbr=fgets($myCounterFile);
            $propNbr+=1;
        fclose( $myCounterFile);
        $myCounterFile= fopen("counter.txt", "w") or die("Unable to open file!");
            fwrite($myCounterFile, $propNbr);
        fclose( $myCounterFile);
        $propID=str_repeat("0",7-(strlen((String) $propNbr))) . (String) $propNbr;
        // echo "propID =" . $propID;
      
    } else {
        $newFile="no";
        $propID="xxxxxxx";
        $open="no";
    }
} else {
    // echo "masuk";
    $newFile="no";
    $renewal="no";
    $propID="xxxxxxx";
    $open="no";
}
  // echo "propID=" . $propID;
?>
 
 <!-- <span id="storage" propid="<?php // $propID; ?>" newFile="<?php //echo $newfile; ?>"></span> -->
 <input type='hidden' id='storage' name='storage' value='<?php echo $propID . "|" . $newFile . "|" . $renewal . "|" . $open;?>'>
 
 <script>
 
   
   
    var propID = "";
    var newFile = "";
    // window.onload = function(){
    //     propNbr = document.getElementById("storage").getAttribute("counter");
    //     console.log("propNbr=" + propNbr);
    //     alert("propNbr=" + propNbr);
    //     newFile = document.getElementById("storage").getAttribute("newfile");
    //     propID="0".repeat(7-propNbr.length) + propNbr;
    //     alert("propID=" + propID);
    // }
    propID = document.getElementById("storage").value.split("|")[0];
    // alert("propID=" + propID);()
    newFile= document.getElementById("storage").value.split("|")[1];
    renewal= document.getElementById("storage").value.split("|")[2];
    console.log("newfile=" + newFile);
    if (newFile=="yes") {
        // alert("masuk new file yes");
        enableSideMenu("all");
        $("#liCreateNew").removeClass("active");// 
        $("#liCreateNew").addClass("disabled");// for 2nd li disable  
        $("#liOpenProp").removeClass("active");// 
        $("#liOpenProp").addClass("disabled");// for 2nd li disable  
        $("#liRenewal").removeClass("active");
        $("#liRenewal").addClass("disabled");
        document.getElementById('liCreateNew').style.color="grey"; //tidak jalan
        propID="0".repeat(7-propID.length) + propID;
        // alert("propID=" + propID);
        if (renewal=="yes") {
            renewalClick();
        } else {
            // side_menu_click("dockage");
        }
       
    } else {
        // alert("masuk disable menu");
        disableSideMenu("all");
    }

    function enableSideMenu(str) {
      alert("masuk enable atas");
      switch (str) {	
          case 'dockage':
              $("#liDockage").removeClass("disabled");// 
              $("#liDockage").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-dockage').style.color="black";
              break;
          case "floating":
              $("#liFloating").removeClass("disabled");// 
              $("#liFloating").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-floating').style.color="black";
              break;
          case "mooring":
              $("#liMooring").removeClass("disabled");// 
              $("#liMooring").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-mooring').style.color="black";
              break;
          case "dbr":
              $("#liDbr").removeClass("disabled");// 
              $("#liDbr").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-dbr').style.color="black";
              break;
          case "bafc":
              $("#liBafc").removeClass("disabled");// 
              $("#liBafc").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-bafc').style.color="black";
              break;
          case "fws":
              $("#liFws").removeClass("disabled");// 
              $("#liFws").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-fws').style.color="black";
              break;

          case "cas":
              $("#liCas").removeClass("disabled");// 
              $("#liCas").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-cas').style.color="black";
              break;
          case "pilotage":
              $("#liPilotage").removeClass("disabled");// 
              $("#liPilotage").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-pilotage').style.color="black";
              break;
          case "fg":
              $("#liFg").removeClass("disabled");// 
              $("#liFg").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-fg').style.color="black";
              break;
          case "watchman":
              $("#liWatchman").removeClass("disabled");// 
              $("#liWatchman").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-watchman').style.color="black";
              break;
          case "ds":
              $("#liDs").removeClass("disabled");// 
              $("#liDs").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-ds').style.color="black";
              break;
          // case "gd":
          //     $("#liGd").removeClass("disabled");// 
          //     $("#liGd").addClass("enabled");// for 2nd li enable  
          //     document.getElementById('side-menu-gd').style.color="black";
          //     break;
          // case "osib":
          //     $("#liOsib").removeClass("disabled");// 
          //     $("#liOsib").addClass("enabled");// for 2nd li enable  
          //     document.getElementById('side-menu-fosib').style.color="black";
          //     break;
          // case "ftb":
          //     $("#liFtb").removeClass("disabled");// 
          //     $("#liFtb").addClass("enabled");// for 2nd li enable  
          //     document.getElementById('side-menu-ftb').style.color="black";
          //     break;
          // case "tlp":
          //     $("#liTlp").removeClass("disabled");// 
          //     $("#liTlp").addClass("enabled");// for 2nd li enable  
          //     document.getElementById('side-menu-tlp').style.color="black";
          //     break;
          // case "fp":
          //     $("#liFp").removeClass("disabled");// 
          //     $("#liFp").addClass("enabled");// for 2nd li enable  
          //     document.getElementById('side-menu-fp').style.color="black";
          //     break;
          // case "staging":
          //     $("#liStaging").removeClass("disabled");// 
          //     $("#liStaging").addClass("enabled");// for 2nd li enable  
          //     document.getElementById('side-menu-staging').style.color="black";
          //     break;
          // case "ventilation":
          //     $("#liVentilation").removeClass("disabled");// 
          //     $("#liVentilation").addClass("enabled");// for 2nd li enable  
          //     document.getElementById('side-menu-ventilation').style.color="black";
          //     break;
          // case "bp":
          //     $("#liBp").removeClass("disabled");// 
          //     $("#liBp").addClass("enabled");// for 2nd li enable  
          //     document.getElementById('side-menu-bp').style.color="black";
          //     break;
          // case "bw":
          //     $("#liBw").removeClass("disabled");// 
          //     $("#liBw").addClass("enabled");// for 2nd li enable  
          //     document.getElementById('side-menu-bw').style.color="black";
          //     break;
          case "all":
              alert ("masuk enable all");
              $("#liDockage").removeClass("disabled");// 
              $("#liDockage").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-dockage').style.color="black";
              $("#liFloating").removeClass("disabled");// 
              $("#liFloating").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-floating').style.color="black";
              $("#liDbr").removeClass("disabled");// 
              $("#liDbr").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-dbr').style.color="black";
              $("#liBafc").removeClass("disabled");// 
              $("#liBafc").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-bafc').style.color="black";
              $("#liFws").removeClass("disabled");// 
              $("#liFws").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-fws').style.color="black";
              $("#liCas").removeClass("disabled");// 
              $("#liCas").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-cas').style.color="black";
    
              $("#liPilotage").removeClass("disabled");// 
              $("#liPilotage").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-pilotage').style.color="black";
  
              $("#liFg").removeClass("disabled");// 
              $("#liFg").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-fg').style.color="black";
            
              // $("#liWatchman").removeClass("disabled");// 
              // $("#liWatchman").addClass("enabled");// for 2nd li enable  
              // document.getElementById('side-menu-watchman').style.color="black";
   
              $("#liDs").removeClass("disabled");// 
              $("#liDs").addClass("enabled");// for 2nd li enable  
              document.getElementById('side-menu-ds').style.color="black";
         
              // $("#liGd").removeClass("disabled");// 
              // $("#liGd").addClass("enabled");// for 2nd li enable  
              // document.getElementById('side-menu-gd').style.color="black";
          
              // $("#liOsib").removeClass("disabled");// 
              // $("#liOsib").addClass("enabled");// for 2nd li enable  
              // document.getElementById('side-menu-fosib').style.color="black";
       
              // $("#liFtb").removeClass("disabled");// 
              // $("#liFtb").addClass("enabled");// for 2nd li enable  
              // document.getElementById('side-menu-ftb').style.color="black";
        
              // $("#liTlp").removeClass("disabled");// 
              // $("#liTlp").addClass("enabled");// for 2nd li enable  
              // document.getElementById('side-menu-tlp').style.color="black";
      
              // $("#liFp").removeClass("disabled");// 
              // $("#liFp").addClass("enabled");// for 2nd li enable  
              // document.getElementById('side-menu-fp').style.color="black";
       
              // $("#liStaging").removeClass("disabled");// 
              // $("#liStaging").addClass("enabled");// for 2nd li enable  
              // document.getElementById('side-menu-staging').style.color="black";
        
              // $("#liVentilation").removeClass("disabled");// 
              // $("#liVentilation").addClass("enabled");// for 2nd li enable  
              // document.getElementById('side-menu-ventilation').style.color="black";
         
              // $("#liBp").removeClass("disabled");// 
              // $("#liBp").addClass("enabled");// for 2nd li enable  
              // document.getElementById('side-menu-bp').style.color="black";
  
              // $("#liBw").removeClass("disabled");// 
              // $("#liBw").addClass("enabled");// for 2nd li enable  
              // document.getElementById('side-menu-bw').style.color="black";
              break;
      }
    }

    function disableSideMenu(str) {
      enableSideMenu("all");
      switch (str) {	
          case 'dockage':
              $("#liDockage").removeClass("active");// 
              $("#liDockage").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-dockage').style.color="grey";
              break;
          case 'floating':
              $("#liFloating").removeClass("active");// 
              $("#liFloating").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-floating').style.color="grey";
              break;
          case 'mooring':
              $("#liMooring").removeClass("active");// 
              $("#liMooring").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-mooring').style.color="grey";
              break;  
          case 'dbr':
              $("#liDbr").removeClass("active");// 
              $("#liDbr").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-dbr').style.color="grey";
              break;      
          case 'bafc':
              $("#liBafc").removeClass("active");// 
              $("#liBafc").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-bafc').style.color="grey";
              break;    
          case 'fws':
              $("#liFws").removeClass("active");// 
              $("#liFws").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-fws').style.color="grey";
              break;       
          case 'cas':
              $("#liCas").removeClass("active");// 
              $("#liCas").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-cas').style.color="grey";
              break;       
          case 'pilotage':
              $("#liPilotage").removeClass("active");// 
              $("#liPilotage").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-pilotage').style.color="grey";
              break;    
          case 'fg':
              $("#liFg").removeClass("active");// 
              $("#liFg").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-fg').style.color="grey";
              break;     
          // case 'watchman':
          //     $("#liWatchman).removeClass("active");// 
          //     $("#liWatchman").addClass("disabled");// for 2nd li disable  
          //     document.getElementById('side-menu-watchman').style.color="grey";
          //     break; 
          case 'ds':
              $("#liDs").removeClass("active");// 
              $("#liDs").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-ds').style.color="grey";
              break;    
          // case 'gd':
          //     $("#liGd").removeClass("active");// 
          //     $("#liGd").addClass("disabled");// for 2nd li disable  
          //     document.getElementById('side-menu-gd').style.color="grey";
          //     break;   
          // case 'osib':
          //     $("#liOsib).removeClass("active");// 
          //     $("#liOsib").addClass("disabled");// for 2nd li disable  
          //     document.getElementById('side-menu-osib').style.color="grey";
          //     break; 
          // case 'ftb':
          //     $("#liFtb").removeClass("active");// 
          //     $("#liFtb").addClass("disabled");// for 2nd li disable  
          //     document.getElementById('side-menu-ftb').style.color="grey";
          //     break;    
          // case 'tlp':
          //     $("#liTlp").removeClass("active");// 
          //     $("#liTlp").addClass("disabled");// for 2nd li disable  
          //     document.getElementById('side-menu-tlp').style.color="grey";
          //     break;  
          // case 'fp':
          //     $("#liFp").removeClass("active");// 
          //     $("#liFp").addClass("disabled");// for 2nd li disable  
          //     document.getElementById('side-menu-fp').style.color="grey";
          //     break;  
          // case 'staging':
          //     $("#liStaging").removeClass("active");// 
          //     $("#liStaging").addClass("disabled");// for 2nd li disable  
          //     document.getElementById('side-menu-staging').style.color="grey";
          //     break;       
          // case 'ventilation':
          //     $("#liVentilation").removeClass("active");// 
          //     $("#liVentilation").addClass("disabled");// for 2nd li disable  
          //     document.getElementById('side-menu-ventilation').style.color="grey";
          //     break;  
          // case 'bp':
          //     $("#liBp").removeClass("active");// 
          //     $("#liBp").addClass("disabled");// for 2nd li disable  
          //     document.getElementById('side-menu-bp').style.color="grey";
          //     break;   
          // case 'bw':
          //     $("#liBw").removeClass("active");// 
          //     $("#liBw").addClass("disabled");// for 2nd li disable  
          //     document.getElementById('side-menu-bw').style.color="grey";
          //     break;                                                                                                           
          case "all":
              $("#liDockage").removeClass("active");// 
              $("#liDockage").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-dockage').style.color="grey";
              $("#liFloating").removeClass("active");// 
              $("#liFloating").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-floating').style.color="grey";
              $("#liDbr").removeClass("active");// 
              $("#liDbr").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-dbr').style.color="grey";
              $("#liBafc").removeClass("active");// 
              $("#liBafc").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-bafc').style.color="grey";
              $("#liFws").removeClass("active");// 
              $("#liFws").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-fws').style.color="grey";
              $("#liCas").removeClass("active");// 
              $("#liCas").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-cas').style.color="grey";
              $("#liPilotage").removeClass("active");// 
              $("#liPilotage").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-pilotage').style.color="grey";
              $("#liFg").removeClass("active");// 
              $("#liFg").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-fg').style.color="grey";  
              // $("#liWatchman).removeClass("active");// 
              // $("#liWatchman").addClass("disabled");// for 2nd li disable  
              // document.getElementById('side-menu-watchman').style.color="grey";
              $("#liDs").removeClass("active");// 
              $("#liDs").addClass("disabled");// for 2nd li disable  
              document.getElementById('side-menu-ds').style.color="grey";
              // $("#liGd").removeClass("active");// 
              // $("#liGd").addClass("disabled");// for 2nd li disable  
              // document.getElementById('side-menu-gd').style.color="grey"; 
              // $("#liOsib).removeClass("active");// 
              // $("#liOsib").addClass("disabled");// for 2nd li disable  
              // document.getElementById('side-menu-osib').style.color="grey";
              // $("#liFtb").removeClass("active");// 
              // $("#liFtb").addClass("disabled");// for 2nd li disable  
              // document.getElementById('side-menu-ftb').style.color="grey";
              // $("#liTlp").removeClass("active");// 
              // $("#liTlp").addClass("disabled");// for 2nd li disable  
              // document.getElementById('side-menu-tlp').style.color="grey"; 
              // $("#liFp").removeClass("active");// 
              // $("#liFp").addClass("disabled");// for 2nd li disable  
              // document.getElementById('side-menu-fp').style.color="grey";
       
              // $("#liStaging").removeClass("active");// 
              // $("#liStaging").addClass("disabled");// for 2nd li disable  
              // document.getElementById('side-menu-staging').style.color="grey";
        
              // $("#liVentilation").removeClass("active");// 
              // $("#liVentilation").addClass("disabled");// for 2nd li disable  
              // document.getElementById('side-menu-ventilation').style.color="grey";
       
              // $("#liBp").removeClass("active");// 
              // $("#liBp").addClass("disabled");// for 2nd li disable  
              // document.getElementById('side-menu-bp').style.color="grey";
       
              // $("#liBw").removeClass("active");// 
              // $("#liBw").addClass("disabled");// for 2nd li disable  
              // document.getElementById('side-menu-bw').style.color="grey";      
              // break;
      }
    }
 
 
 </script>


  <div id="container" class="container"></div>  
  <div id="button-panel" class="button-panel"></div>
  <script src="js/script.js"></script>
  </body>
</html>