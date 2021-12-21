
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
                  <li> <a href="#link5">a. Fresh Water Supply</a> </li>
                  <li> <a href="#link6">b. Compressed Air Supply</a> </li>
                  <li> <a href="#link6">c. Pilotage</a> </li>
                  <li> <a href="#link5">d. Fire Guard</a> </li>
                  <li> <a href="#link6">e. Watchman</a> </li>
                  <li> <a href="#link6">f. Diver Service</a> </li>
                  <li> <a href="#link5">g. Garbage Disposal</a> </li>
                  <li> <a href="#link6">h. Oil Storing in Barge</a> </li>
                  <li> <a href="#link6">i. Flat Top Barge (in Shipyard Area)</a> </li>
                  <li> <a href="#link5">j. Telephone</a> </li>
                  <li> <a href="#link6">k. Fire Precaution</a> </li>
                  <li> <a href="#link6">l. Staging</a> </li>
                  <li> <a href="#link5">m. Ventilation </li>
                  <li> <a href="#link6">n. Bilge Pumps</a> </li>
                  <li> <a href="#link6">o. Ballast Water</a> </li>
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
          case "all":
            //   $("#liGeneral").removeClass("active");// 
            //   $("#liGeneral").addClass("disabled");// for 2nd li disable  
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
              break;
      }
    }
    function enableSideMenu(str) {
     
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
              document.getElementById('side-menu-floating').style.color="black";
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
          case "all":
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
              break;
      }
    }
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
      $.get("php/renewalPropForm.php",function(data) {
          $("#container").html(data);
      
      });
    }
  
    function floatingClick() {
      // alert("Floating in menu file");
      // enableSideMenu("all");
      disableSideMenu("floating");
      // $.get("php/floating.php",function(data) {
      //      $("#floating").html(data);
       
      //   });
    }


  </script>
  <div id="container" class="container"></div>  
  <div id="button-panel" class="button-panel"></div>
  <script src="js/script.js"></script>
  </body>
</html>