
document.querySelector(".popup .close-btn").addEventListener("click",function() {
  document.querySelector(".popup").classList.remove("active");
  $(document).ready(function(){
    $(".fullscreen-container").fadeOut(200);
  }); 
});

function loginClick() {
  showLoginForm();
  document.querySelector(".popup").classList.add("active");
  $(document).ready(function(){
    $(".fullscreen-container").fadeTo(200,1);
  });
}

function dckgDockingClick() {
  
  $.ajax({
    url:'dckgData.json',
    dataType:'json',
    type:'get',
    cache: false,
    success: function(data) {
        showDckgServiceItem(data,"DCKG11");		 
    }
  })
 
  document.querySelector(".popup").classList.add("active");
  $(document).ready(function(){
    $(".fullscreen-container").fadeTo(200,1);
  });
}

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function overtimeCmb(work,str,value) {
  var htmlString=""; 
  if (work=="t") {
          htmlString +="<select name='" + str + "WorkTime' id='" + str + "WorkTime' onchange='return percent(\"" + str + "\");'>";
          //console.log(htmlString);
          // htmlString += "<option  value='07:30 - 16:30'>" +
          // "07:30 -  16:30" + " selected </option>";
          
          switch (value) {
                  case  '16:30 - 20:00':  
                          htmlString += "<option  value='07:30 - 16:30' selected >" +
                                  "07:30 -  16:30" + " </option>";     
                          htmlString += "<option  value='16:30 - 20:00'>" + 
                                  "16:30 - 20:00" + " </option>";
                          htmlString += "<option  value='20:00 - 24:00'>" + 
                                                  "20:00 - 24:00" + " </option>";
                          htmlString += "<option  value='24:00 - 07:30'>" + 
                                                  "24:00 - 07:30" + " </option>";	
                          break;	
                  case  '20:00 - 24:00':  
                          htmlString += "<option  value='07:30 - 16:30'>" +
                                  "07:30 -  16:30" + " </option>";     
                          htmlString += "<option  value='16:30 - 20:00'>" + 
                          "16:30 - 20:00" + " </option>";
                          htmlString += "<option  value='20:00 - 24:00' selected >" + 
                                                  "20:00 - 24:00" + "</option>";
                          htmlString += "<option  value='24:00 - 07:30'>" + 
                                                  "24:00 - 07:30" + " </option>";	
                          break;	
                  case  '24:00 - 07:30':  
                          htmlString += "<option  value='07:30 - 16:30'>" +
                                  "07:30 -  16:30" + " </option>";     
                          htmlString += "<option  value='16:30 - 20:00'>" + 
                          "16:30 - 20:00" + " </option>";
                          htmlString += "<option  value='20:00 - 24:00'>" + 
                                                  "20:00 - 24:00" + "  </option>";
                          htmlString += "<option  value='24:00 - 07:30' selected>" + 
                                                  "24:00 - 07:30" + "</option>";	
                          break;	
                  default:
                          htmlString += "<option  value='07:30 - 16:30' selected >" +
                                  "07:30 -  16:30" + "</option>";     
                          htmlString += "<option  value='16:30 - 20:00'>" + 
                          "16:30 - 20:00" + " </option>";
                          htmlString += "<option  value='20:00 - 24:00'>" + 
                                                  "20:00 - 24:00" + " </option>";
                          htmlString += "<option  value='24:00 - 07:30'>" + 
                                                  "24:00 - 07:30" + " </option>";	
                                    
                  
          }

          
          
  } else {
          htmlString +="<select name='" + str + "WorkDay' id='" + str + "WorkDay' onchange='return percent(\"" + str + "\");'>";
          //console.log(htmlString);
          switch (value) {
                  case 'Saturday, Sunday & Official Holiday':
                          htmlString += "<option  value='Normal Working Day' >" +
                                                  "Normal Working Day" + " </option>";	
                          htmlString += "<option  value='Saturday, Sunday & Official Holiday'  selected>" + 
                                          "Saturday, Sunday & Official Holiday" + "</option>";
                          break;
                  default:
                          htmlString += "<option  value='Normal Working Day' selected>" +
                                                  "Normal Working Day" + " </option>";	
                          htmlString += "<option  value='Saturday, Sunday & Official Holiday'>" + 
                                          "Saturday, Sunday & Official Holiday" + "</option>";
          }        
  }		
  htmlString+="</select>"; 
  return 	htmlString;																		
}

function percent(str) {	
if (str.indexOf("OT")!=-1) {
str=str.replace("OT","");
}
var workTimeId= str + "WorkTime";
var workDayId = str + "WorkDay";
var percentId = str + "Percent";
/*console.log(workTimeId);
console.log(workDayId);
console.log(percentId);
*/
if (document.getElementById(workTimeId).value=='07:30 - 16:30' && 	document.getElementById(workDayId).value=='Normal Working Day') {
document.getElementById(percentId).value='110';
}
if (document.getElementById(workTimeId).value=='07:30 - 16:30' && 	document.getElementById(workDayId).value=='Saturday, Sunday & Official Holiday') {
document.getElementById(percentId).value='210';
}
if (document.getElementById(workTimeId).value=='16:30 - 20:00' && 	document.getElementById(workDayId).value=='Normal Working Day') {
document.getElementById(percentId).value='135';
}
if (document.getElementById(workTimeId).value=='16:30 - 20:00' && 	document.getElementById(workDayId).value=='Saturday, Sunday & Official Holiday') {
document.getElementById(percentId).value='210';
}
if (document.getElementById(workTimeId).value=='16:30 - 20:00' && 	document.getElementById(workDayId).value=='Normal Working Day') {
document.getElementById(percentId).value='135';
}
if (document.getElementById(workTimeId).value=='16:30 - 20:00' && 	document.getElementById(workDayId).value=='Saturday, Sunday & Official Holiday') {
document.getElementById(percentId).value='210';
}

if (document.getElementById(workTimeId).value=='20:00 - 24:00' && 	document.getElementById(workDayId).value=='Normal Working Day') {
document.getElementById(percentId).value='160';
}
if (document.getElementById(workTimeId).value=='20:00 - 24:00' && 	document.getElementById(workDayId).value=='Saturday, Sunday & Official Holiday') {
document.getElementById(percentId).value='210';
}

if (document.getElementById(workTimeId).value=='24:00 - 07:30' && 	document.getElementById(workDayId).value=='Normal Working Day') {
document.getElementById(percentId).value='210';
}
if (document.getElementById(workTimeId).value=='24:00 - 07:30' && 	document.getElementById(workDayId).value=='Saturday, Sunday & Official Holiday') {
document.getElementById(percentId).value='310';
}
  // console.log("String=" + str);
switch (str) {
  case "dckgDocking":
    calculate(1);
    break;
  case "dckgPerDay":
    calculate(2);
    break;
  case "dckgTugboat":
    calculate(3);
    break;
  case "dckgTugboatOT":
    calculate(3);
    break;
  case "dckgTypeOfVessel":
    calculate(4);
    break;	
  case "dckgMotorBoat":
    calculate(5);
    break;	
  case "dckgSpecArranged":
    calculate(6);
    break;	
  case "dckgCargoOnBoard":
    calculate(7);
    break;	
  case "dckgOccupDock":
    calculate(8);
    break;	
}
}	


function showDckgServiceItem(data1,dckgID) {
  let htmlString="";
  let dckgData="";
  htmlString+='<div class="card">';
  htmlString+='<div class="card-header">';
  htmlString+='<h4 id="judul">DOCKAGE </h4>';
  htmlString+='</div>';
  htmlString+='<div class="card-body">';
  htmlString+='<form  method="POST"  id="dockageForm" class="form-dockage">'
  htmlString+='<table width=98% id="tblDockageGrosston">';
  htmlString+="<tr><td colspan='2' align='left' width='50%'>";
  
  
  htmlString+='<label for="dckgGrossTon">Gross Ton or Displacement</label> </td> <td align="left" align="left">';
  htmlString+='<select name="dckgGrossTon" id="grossTonSelect" onchange="return allRate();">';
  for(i=0; i < data1.DockageData.length; i++) {
      htmlString += "<option  value='" + data1.DockageData[i].grossTon  + "'>" + 
      data1.DockageData[i].grossTon + " </option>";

  }
  htmlString+="</select></td></tr>";

  htmlString+='<tr><td colspan="2"><label for="dckgTypeOfVessel">Type of Vessel</label> </td>';
  htmlString+='<td><select name="dckgTypeOfVessel" id="dckgTypeOfVessel">';
  htmlString+= '<option value="warship">warship</option>';
  htmlString+= '<option value="ferry roro">ferry roro</option>';
  htmlString+= '<option value="workship">workship</option>';
  htmlString+= '<option value="tugboat">tugboat</option>';
  htmlString+= '<option value="dredger">dredger</option>';
  htmlString+= '<option value="yacht">yacht</option>';
  htmlString+= '<option value="barge">barge</option>';
  htmlString+= '<option value="catamaran">catamaran</option>';
  htmlString+='<option value="double skin/hull">double skin/hull</option></select>' + "</td>";
  
  // htmlString+='<tr><td><label for="dckgDocking">Docking & Undocking</label></td>'
  htmlString+='<tr><td><select name="dckgServiceItem" id="dckgServiceItem" onchange="">';
  htmlString+= '<option value="DCKG11">Docking & Undocking</option>';
  htmlString+= '<option value="DCKG12">Rate per Day</option>';
  htmlString+= '<option value="DCKG13">Tag Boat Assistance</option>';
  htmlString+="</select></td>";
  htmlString+='<td align="right" width="2%"><label for="dckgRateUnit">Rp.</label></td>';

  htmlString+="<td><input type='text' id='dckgDockingRate' name='dckgDockingRate' value='" + 
                        formatNumber(data1.DockageData[0].docking) + "' size='10' readonly> </td></tr>";

  htmlString+='<tr><td colspan="2"><label for="dckQty">Quantity</label></td>';                    
  htmlString+="<td><input type='text' id='dckgDockingQty' name='dckgDockingQty' value='1' onchange='return calculate(1);'  size='2' ></td></tr>";
  htmlString+="<tr><td colspan='2'><input type='checkbox' id='dckgCargoOnBoardOTCheckBox' name='dckgCargoOnBoardOTCheckBox' value ='no' onclick='showHideField(\"dckgCargoOnBoardOT\")'>";
  htmlString+='<label for="workingTime">Working Time</label></td>';
  htmlString+='<td>' + overtimeCmb("t","dckgDocking") + overtimeCmb("d","dckgDocking") +'</td></tr>';
  htmlString+='<tr><td colspan="2"><label for="rateFactor">Rate Factor</label></td>';
  htmlString+="<td><input type='text' id='dckgRateFactor' name='dckgRateFactor' value='100%' size='4' readonly> </td></tr>";
  htmlString+="</table>" ;            
  htmlString+='</div>';//end-card-body
  htmlString+='<div class="card-footer">';
  htmlString+='<button type="button" id="dckgSaveBtn" class="btn btn-primary float-right">Proceed</button>';
  htmlString+='</div>';  //end-card-footers
  htmlString+='</form>';
  htmlString+='</div>';  //end-card
  switch (dckgID) {
    case "DCKG11":
      document.querySelector(".popup .form").innerHTML=htmlString;
  }
  console.log(htmlString);
  return htmlString;
}

function showLoginForm() {
  let htmlString="";
  htmlString+="<h2>Login</h2>";
  htmlString+='<div class="form-element">';
  htmlString+='<label for="email">Username</label>';
  htmlString+='<input type="text" id="email" placeholder="Enter Your Email Address"> </div> ';
  htmlString+=' <div class="form-element">  <label for="password">Password</label>  <input type="password" id="password" placeholder="Enter your password"></div>';
  htmlString+=' <div class="form-element"> <input type="checkbox" id="remember-me"> <label for="remember-me">Remember Me</label></div>';
  htmlString+='<div class="form-element"> <button>Sign in</button> </div>';
  htmlString+='<div class="form-element"><a href="#">Forgot Password?</a></div>';
  document.querySelector(".popup .form").innerHTML=htmlString;
  return htmlString;
}