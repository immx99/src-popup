
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
        showDckgServiceItem(data);		 
    }
  })
 
  document.querySelector(".popup").classList.add("active");
  $(document).ready(function(){
    $(".fullscreen-container").fadeTo(200,1);
  });
}




function calculate () {
  let rate=document.getElementById("rate").value;
  let	qty = document.getElementById("qty").value;
	let rateFactor=document.getElementById("rateFactor").value;
  let charge=0;
  charge=formatNumber(parseFloat(rate.replace(/,/g, ""))*parseInt(qty)*parseInt(rateFactor.split("%")[0])/100);
  // console.log("rate=" + parseFloat(rate.replace(/,/g, "")) + "\n");
  // console.log("qty=" + parseInt(qty));
  // console.log("qty=" + parseInt(rateFactor.split("%")[0]));
  // console.log("charge=" + charge + "\n");
  document.getElementById("charge").value=charge;
  return charge;
}

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function overtimeCmb(work,value) {
  var htmlString=""; 
  if (work=="t") {
          htmlString +="<select name='workingTime' id='workingTime' onchange='return percent();'>";
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
          htmlString +="<select name='workingDay' id='workingDay' onchange='return percent();'>";
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

  
  // $(document).ready(function () {	
  // var htmlPage=document.getElementById("container").outerHTML;
  // document.getElementById('htmlpage').value= htmlPage;
  // )};
  // var data = $('.form-dockage').serialize();	

function percent() {	

  if (document.getElementById("workingTime").value=='07:30 - 16:30' && 	document.getElementById("workingDay").value=='Normal Working Day') {
    document.getElementById("rateFactor").value='110%';
  }
  if (document.getElementById("workingTime").value=='07:30 - 16:30' && 	document.getElementById("workingDay").value=='Saturday, Sunday & Official Holiday') {
    document.getElementById("rateFactor").value='210%';
  }
  if (document.getElementById("workingTime").value=='16:30 - 20:00' && 	document.getElementById("workingDay").value=='Normal Working Day') {
    document.getElementById("rateFactor").value='135%';
  }
  if (document.getElementById("workingTime").value=='16:30 - 20:00' && 	document.getElementById("workingDay").value=='Saturday, Sunday & Official Holiday') {
    document.getElementById("rateFactor").value='210%';
  }
  if (document.getElementById("workingTime").value=='16:30 - 20:00' && 	document.getElementById("workingDay").value=='Normal Working Day') {
    document.getElementById("rateFactor").value='135%';
  }
  if (document.getElementById("workingTime").value=='16:30 - 20:00' && 	document.getElementById("workingDay").value=='Saturday, Sunday & Official Holiday') {
    document.getElementById("rateFactor").value='210%';
  }

  if (document.getElementById("workingTime").value=='20:00 - 24:00' && 	document.getElementById("workingDay").value=='Normal Working Day') {
    document.getElementById("rateFactor").value='160%';
  }
  if (document.getElementById("workingTime").value=='20:00 - 24:00' && 	document.getElementById("workingDay").value=='Saturday, Sunday & Official Holiday') {
    document.getElementById("rateFactor").value='210%';
  }

  if (document.getElementById("workingTime").value=='24:00 - 07:30' && 	document.getElementById("workingDay").value=='Normal Working Day') {
   document.getElementById("rateFactor").value='210%';
  }
  if (document.getElementById("workingTime").value=='24:00 - 07:30' && 	document.getElementById("workingDay").value=='Saturday, Sunday & Official Holiday') {
    document.getElementById("rateFactor").value='310%';
  }
  // console.log("String=" + str);
  calculate();
  // document.getElementById("charge").value=calculate();
}	


function showDckgServiceItem(data1) {
  let htmlString="";
  let dckgData="";
  htmlString+='<div class="card">';
  htmlString+='<div class="card-header">';
  htmlString+='<h4 id="judul">DOCKAGE </h4>';
  htmlString+='</div>';
  htmlString+='<div class="card-body">';
  htmlString+='<form  method="POST"  id="serviceItemForm" class="serviceItemFrom">'
  htmlString+='<table width=98% id="tblServiceItem">';
  htmlString+="<tr><td colspan='2' align='left' width='50%'>";
  htmlString+='<label for="grossTon">Gross Ton or Displacement</label> </td> <td align="left" align="left">';
  htmlString+='<select name="grossTonSelect"" id="grossTonSelect" onchange="return setRate();">';
  for(i=0; i < data1.DockageData.length; i++) {
      htmlString += "<option  value='" + data1.DockageData[i].grossTon  + "'>" + 
      data1.DockageData[i].grossTon + " </option>";

  }
  htmlString+="</select></td></tr>";

  htmlString+='<tr><td colspan="2"><label for="typeOfVessel">Type of Vessel</label> </td>';
  htmlString+='<td><select name="typeOfVessel" id="typeOfVessel">';
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
  htmlString+='<tr><td><select name="serviceItem" id="serviceItem" onchange="return setRate();">';
  htmlString+= '<option value="DCKG11">Docking & Undocking</option>';
  htmlString+= '<option value="DCKG12">Rate per Day</option>';
  htmlString+= '<option value="DCKG13">Tug Boat Assistance</option>';
  htmlString+="</select></td>";
  htmlString+='<td align="right" width="2%"><label for="rateUnit">Rp.</label></td>';

  htmlString+="<td><input type='text' id='rate' name='rate' value='" + 
                        formatNumber(data1.DockageData[0].docking) + "' size='10' readonly> </td></tr>";

  htmlString+='<tr><td colspan="2"><label for="qty">Quantity</label></td>';   
  htmlString+='<td><button type="button" id="minusBtn" class="btn btn-success btn-sm" disabled>-</button>';                 
  htmlString+="<input type='text' id='qty' name='qty' value='1' onchange='return calculate();'  size='1' >";
  htmlString+='<button type="button" id="plusBtn" class="btn btn-success btn-sm">+</button></td></tr>'; 

  htmlString+="<tr><td colspan='2'><input type='checkbox' id='serviceItemCheckBox' name='serviceItemCheckBox' value ='no' onclick='showHideField()'>";
  htmlString+='<label for="workingTime">Working Time</label></td>';
  htmlString+='<td style="visibility:collapse">' + overtimeCmb("t","dckgDocking") + overtimeCmb("d","dckgDocking") +'</td></tr>';
  
  htmlString+='<tr><td colspan="2"><label for="rateFactor">Rate Factor</label></td>';
  htmlString+="<td><input type='text' id='rateFactor' name='rateFactor' value='100%' size='4' readonly> </td></tr>";
  htmlString+='<tr><td><label for="charge">Charge</label></td>';
  htmlString+='<td align="right" width="2%"><label for="rateUnit">Rp.</label></td>';
  htmlString+="<td><input type='text' id='charge' name='charge' value='" + formatNumber(data1.DockageData[0].docking) + "' size='10' readonly> </td></tr>";
  htmlString+="</table>" ;            
  htmlString+='</div>';//end-card-body
  htmlString+='<div class="card-footer">';
  htmlString+='<button type="button" id="proceedBtn" class="btn btn-primary float-right">Proceed</button>';
  htmlString+='</div>';  //end-card-footers
  htmlString+='</form>';
  htmlString+='</div>';  //end-card
  
  document.querySelector(".popup .form").innerHTML=htmlString;
  
  $(document).ready(function () {	
    $('#minusBtn').click(function () {	
      let qty=parseInt(document.getElementById("qty").value);
      console.log("plusBtnClick=" +qty);
      
      qty--;
      document.getElementById("qty").value=qty;
      if (qty==1) {
        $('#minusBtn').attr("disabled","true");
      } 
      calculate();
    });
    
    $('#plusBtn').click(function () {
      let qty=	parseInt(document.getElementById("qty").value);
      // console.log(qty);
      qty++;
      document.getElementById("qty").value=qty;
      if (qty>1) {
        $('#minusBtn').removeAttr("disabled");
      }
      // console.log("plusBtnClick=" +qty);
      // console.log(qty);
      calculate();
    });
  });  
  
  // console.log(htmlString);
  return htmlString;
}

function setRate() {
  let grossTonIdx=document.getElementById("grossTonSelect").selectedIndex
  let serviceItemIdx=document.getElementById("serviceItem").selectedIndex
  $.ajax({
    url:'dckgData.json',
    dataType:'json',
    type:'get',
    cache: false,
    success: function(data) {
      switch (serviceItemIdx) {
        case 0:
          document.getElementById("rate").value=formatNumber(data.DockageData[grossTonIdx].docking);
          break;
        case 1:
          document.getElementById("rate").value=formatNumber(data.DockageData[grossTonIdx].rate);
          break;
        case 2:
          document.getElementById("rate").value=formatNumber(data.DockageData[grossTonIdx].tugboat);
          break;
      }
      calculate();
    }
  })
  
  // document.getElementById("charge").value=calculate();
}

function showHideField() {
  if (document.getElementById("serviceItemCheckBox").checked) {
    document.getElementById("workingTime").style.visibility="visible";
    document.getElementById("workingDay").style.visibility="visible";
    document.getElementById("rateFactor").value="110%";
  
  } else {
    document.getElementById("workingTime").value='07:30 - 16:30';
    document.getElementById("workingDay").value='Normal Working Day';
    document.getElementById("workingTime").style.visibility="hidden";
    document.getElementById("workingDay").style.visibility="hidden";
    document.getElementById("rateFactor").value="100%";
  }
  calculate();
  // document.getElementById("charge").value=calculate();
}
 

function showLoginForm() {
  let htmlString="";
  htmlString+="<h2>Login</h2>";
  htmlString+='<div class="form-element">';
  htmlString+='<label for="email">Username</label>';
  htmlString+='<input type="text" id="email" placeholder="Enter Your Email Address"> </div> ';
  htmlString+='<div class="form-element">  <label for="password">Password</label>  <input type="password" id="password" placeholder="Enter your password"></div>';
  htmlString+='<div class="form-element"> <input type="checkbox" id="remember-me"> <label for="remember-me">Remember Me</label></div>';
  htmlString+='<div class="form-element"> <button>Sign in</button> </div>';
  htmlString+='<div class="form-element"><a href="#">Forgot Password?</a></div>';
  document.querySelector(".popup .form").innerHTML=htmlString;
  return htmlString;
}

