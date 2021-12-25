
var iDckg=0;
var iFloat=0;
var iMoor=0;
var iDbr=0;   //Dock Block Removal
var iBafc=0;
var dckgTotal=0;
var floatTotal=0;
var moorTotal=0;
var dbrTotal=0;
var bafcTotal=0;
var grandTotal=0;
// var selectedData="Up to 300/Docking & Undocking/warship";
var title="";
var serviceID="dockage";
var newDockageAccess=true;
var newFloatingAccess=true;
var newMooringAccess=true;
var newServiceAccess=true;
var newDbrAccess=true;
var newBafcAccess=true;
var newCount=true;
document.querySelector(".popup-service-item .si-close-btn").addEventListener("click",function() {
  document.querySelector(".popup-service-item").classList.remove("active");
  $(document).ready(function(){
    $(".fullscreen-container").fadeOut(200);
  }); 
});

document.querySelector(".popup-login .close-btn").addEventListener("click",function() {
  document.querySelector(".popup-login").classList.remove("active");
  $(document).ready(function(){
    $(".fullscreen-container").fadeOut(200);
  }); 
});

function enableBtn (btn) {
    switch (btn) {
        case "add":
            $("#addBtn").removeClass("disabled");// 
            $("#addBtn").addClass("actived");// for 2nd li disable 
            break;
        case "save":  
            $("#saveBtn").removeClass("disabled");// 
            $("#saveBtn").addClass("actived");// for 2nd li disable 
            break; 
        case "save":  
            $("#printBtn").removeClass("disabled");// 
            $("#printBtn").addClass("actived");// for 2nd li disable 
            break; 
        case "all":
            $("#addBtn").removeClass("disabled");// 
            $("#addBtn").addClass("actived");// for 2nd li disable 
            $("#saveBtn").removeClass("disabled");// 
            $("#saveBtn").addClass("actived");// for 2nd li disable 
            $("#printBtn").removeClass("disabled");// 
            $("#printBtn").addClass("actived");// for 2nd li disable 
            break; 
    }
    
}

function disableBtn (btn) {
    switch (btn) {
      case "add":
          $("#addBtn").removeClass("active");// 
          $("#addBtn").addClass("disabled");// for 2nd li disable 
          break;
      case "save":
          $("#saveBtn").removeClass("active");// 
          $("#saveBtn").addClass("disabled");// for 2nd li disable 
          break;
      case "print":
          $("#printBtn").removeClass("active");// 
          $("#printBtn").addClass("disabled");// for 2nd li disable 
          break;
      case "all":
          $("#addBtn").removeClass("active");// 
          $("#addBtn").addClass("disabled");// for 2nd li disable 
          $("#saveBtn").removeClass("active");// 
          $("#saveBtn").addClass("disabled");// for 2nd li disable 
          $("#printBtn").removeClass("active");// 
          $("#printBtn").addClass("disabled");// for 2nd li disable 
          break;
      }
}


function loginClick() {
  showLoginForm();
  document.querySelector(".popup-login").classList.add("active");
  $(document).ready(function(){
    $(".fullscreen-container").fadeTo(200,1);
  });
}



function side_menu_click(srvID) {
    let htmlString="";
    switch (srvID) {
      case "dockage":
        // console.log("dockageClick");
        serviceID="dockage";
        disableSideMenu("dockage");
        break;
      case "floating":
        serviceID="floating";
        disableSideMenu("floating");
        break;
      case "mooring":
        serviceID="mooring";
        disableSideMenu("mooring");
        break;
      case "dbr":
        serviceID="dbr";
        disableSideMenu("dbr");
        break;
      case "bafc":
        serviceID="bafc";
        disableSideMenu("bafc");
        break;
    }
    enableBtn("all");
    newServiceAccess=true;
    $.ajax({
      url:'src_data.json',
      dataType:'json',
      type:'get',
      cache: false,
      success: function(data) {
          htmlString=showServiceItem(srvID,data,selectedData);		 
          // console.log("htmlString=" + htmlString);  
          // alert(data)  ; 
      }
    })
  
    document.querySelector(".popup-service-item").classList.add("active");
    $(document).ready(function(){
      $(".fullscreen-container").fadeTo(200,1);
    });
}




function calculate () {
  let rate=document.getElementById("rate").value;
  let	qty = document.getElementById("qty").value;
	let rateFactor=document.getElementById("rateFactor").value;
  let charge=0;
  // console.log("rate=" + rate.replace(/\./g, "").split(",")[0] + "\n");
  if ( !document.getElementById("rate").value) {
      rate="0";
  }
  charge=formatNumber(parseFloat(rate.replace(/\./g, "").split(",")[0])*parseInt(qty)*parseInt(rateFactor.split("%")[0])/100);
  if ( !document.getElementById("rate").readonly && parseFloat(rate.replace(/\./g, "").split(",")[0])!=0 ) {
      document.getElementById("rate").value=formatNumber(parseFloat(rate.replace(/\./g, "").split(",")[0]));
  }
 
  // console.log("qty=" + parseInt(qty));
  // console.log("qty=" + parseInt(rateFactor.split("%")[0]));
  // console.log("charge=" + charge + "\n");
  document.getElementById("charge").value=charge;
  return charge;
}

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ",-"
}

function unformatNumber(str) {
	return parseFloat(str.replace(/\./g, "").split(",")[0]);
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


function showServiceItem(serviceID,srcData,selectedData) {
  // console.log(selectedData);
  // console.log("serviceID=" + serviceID);
  let htmlString="";
  let dckgData="";
  let grossTon;
  let serviceItem;
  let typeOfVessel;
  var rate=0;
  var charge=0;
  // let serviceItem;
  // console.log(srcData);
  var str=document.getElementById("container").outerHTML;
  // console.log("String=" + str);
  if (str.indexOf("Gross Ton")==-1) {
      grossTon=selectedData.split("/")[0];
      serviceItem=selectedData.split("/")[1];
      typeOfVessel=selectedData.split("/")[3];
  } else {
     grossTon=document.getElementById("grossTon").innerHTML;
     typeOfVessel=document.getElementById("typeOfVessel").innerHTML;
  }
  //  
  var j=0
  var htmlGrossTonString="";
  var htmlServiceDataString="";
  var htmlRateString="";
  htmlGrossTonString+='<table width=98% id="grossTonTbl">';
  htmlGrossTonString+="<tr><td colspan='2' align='left' width='50%'>";
  htmlGrossTonString+='<label for="grossTon">Gross Ton or Displacement</label> </td> <td align="left" align="left">'
 
  switch (serviceID) {
    case "dockage":
        title="DOCKAGE";
        htmlGrossTonString+='<select name="grossTonSelect" id="grossTonSelect" onchange="return setRate(\'dockage\');">';
  
        for(i=0; i < srcData.DockageData.length; i++) {
          if (srcData.DockageData[i].grossTon==grossTon){      
              htmlGrossTonString += "<option  value='" + srcData.DockageData[i].grossTon  + "' selected>" + 
              srcData.DockageData[i].grossTon + " </option>";
              j=i;
          } else {
              htmlGrossTonString  += "<option  value='" + srcData.DockageData[i].grossTon  + "'>" + 
              srcData.DockageData[i].grossTon + " </option>";
          }
        }
        rate=srcData.DockageData[j].docking
        htmlGrossTonString+="</select></td></tr>";
        htmlRateString+="<td><input type='text' id='rate' name='rate' value='" + 
            formatNumber(rate) + "' size='10' readonly onchange='return calculate();'> </td></tr>";
        htmlServiceDataString+='<tr><td><select name="serviceItem" id="serviceItem" onchange="return setRate(\'dockage\');">';
       
        for (let i=0; i<srcData.DockageItemData.length;i++) {
            if (serviceItem==srcData.DockageItemData[i].service_item) {
              htmlServiceDataString+= '<option value="' + srcData.DockageItemData[i].service_item + '" selected>' + srcData.DockageItemData[i].service_item + '</option>';
            } else {
              htmlServiceDataString+= '<option value="' + srcData.DockageItemData[i].service_item + '">' + srcData.DockageItemData[i].service_item + '</option>';
            }
          
        }
        htmlServiceDataString+="</select></td>";
       
        break;
    case "floating":
        title="For time spending shipyard areas, floating days to be charged (Excluded Port Authority wharfage charges)";
        
        if (str.indexOf("FLOATING CHARGE") == -1) {
            titleA="FLOATING CHARGE IN SHIPYARD AREA";
            title="a. " + title;
        } else {
            title="b. " + title;
        }
        if (grossTon=="Up to 300" || grossTon=="301 - 500") {
            grossTon="Up to 500";
        }
        // alert("Gross Ton: " + str.indexOf("Gross Ton"));
        if (str.indexOf("Gross Ton") == -1) {
            htmlGrossTonString+='<select name="grossTonSelect" id="grossTonSelect" onchange="return setRate(\'floating\');">';
        } else {
            htmlGrossTonString+='<select name="grossTonSelect" id="grossTonSelect" onchange="return setRate(\'floating\');" disabled>';
        }
        for(i=0; i < srcData.FloatingData.length; i++) {
          if (srcData.FloatingData[i].grossTon==grossTon){      
              htmlGrossTonString += "<option  value='" + srcData.FloatingData[i].grossTon  + "' selected>" + 
              srcData.FloatingData[i].grossTon + " </option>";
              j=i;
          } else {
              htmlGrossTonString  += "<option  value='" + srcData.FloatingData[i].grossTon  + "'>" + 
              srcData.FloatingData[i].grossTon + " </option>";
          }
        }
        rate=srcData.srcData.FloatingData[j].rate
        htmlGrossTonString+="</select></td></tr>";
        htmlRateString+="<td><input type='text' id='rate' name='rate' value='" + 
        formatNumber(rate) + "' size='10' readonly onchange='return calculate();'> </td></tr>";
        htmlServiceDataString+='<tr><td><select name="serviceItem" id="serviceItem" onchange="return setRate(\'floating\');">';
        // console.log(htmlServiceDataString);
        for (let i=0; i<srcData.FloatingItemData.length;i++) {
            if (serviceItem==srcData.FloatingItemData[i].service_item) {
                htmlServiceDataString+= '<option value="' + srcData.FloatingItemData[i].service_item + '" selected>' + srcData.FloatingItemData[i].service_item + '</option>';
            } else {
                htmlServiceDataString+= '<option value="' + srcData.FloatingItemData[i].service_item + '">' + srcData.FloatingItemData[i].service_item + '</option>';
            }
          
        }
        htmlServiceDataString+="</select></td>";
        break;
      case "mooring":
        var htmlStr=mooring(grossTon,srcData,serviceItem);
        htmlGrossTonString+=htmlStr.split("|")[0];
        htmlRateString+=htmlStr.split("|")[1];
        htmlServiceDataString+=htmlStr.split("|")[3];
        break;
      case "dbr":
        var htmlStr=dbr(grossTon,srcData,serviceItem);
        htmlGrossTonString+=htmlStr.split("|")[0];
        htmlRateString+=htmlStr.split("|")[1];
        htmlServiceDataString+=htmlStr.split("|")[3];
        break;
      case "bafc":
        var htmlStr=bafc(grossTon,srcData,serviceItem);
        htmlGrossTonString+=htmlStr.split("|")[0];
        htmlRateString+=htmlStr.split("|")[1];
        htmlServiceDataString+=htmlStr.split("|")[3];
        break;
}
  // htmlString+='<div class="card">';
  // htmlString+='<div class="card-header">';
  // htmlString+='<h4 id="judulA">' + titleA + '</h4>';
  // htmlString+='</div>';
  htmlString+='<div class="card-header">';
  htmlString+='<h4 id="judul">' + title + '</h4>';
  htmlString+='</div>';
  htmlString+='<div class="card-body">';
  htmlString+= htmlGrossTonString;
 
  htmlString+='<tr><td colspan="2"><label for="typeOfVessel">Type of Vessel</label> </td>';
  if (str.indexOf("Gross Ton") != -1) {
      htmlString+='<td><select name="typeOfVessel" id="typeOfVessel" disabled>';
  } else {
      htmlString+='<td><select name="typeOfVessel" id="typeOfVessel">';
  }
  if (typeOfVessel=="warship") {
      htmlString+= '<option value="warship" selected>warship</option>';
  } else {
      htmlString+= '<option value="warship">warship</option>';
  }
  if (typeOfVessel=="ferry roro") {
     htmlString+= '<option value="ferry roro" selected>ferry roro</option>';
  } else {
      htmlString+= '<option value="ferry roro">ferry roro</option>';
  }
  if (typeOfVessel=="workship") {
      htmlString+= '<option value="workship" selected>workship</option>';
  } else {
      htmlString+= '<option value="workship">workship</option>';
  }
  if (typeOfVessel=="tugboat") {
      htmlString+= '<option value="tugboat" selected>tugboat</option>';
  } else {
      htmlString+= '<option value="tugboat">tugboat</option>';
  }
  if (typeOfVessel=="dredger") {
      htmlString+= '<option value="dredger" selected>dredger</option>';
  } else {
      htmlString+= '<option value="dredger">dredger</option>';
  }
  if (typeOfVessel=="yacht") {
      htmlString+= '<option value="yacht" selected>yacht</option>';
  } else {
      htmlString+= '<option value="yacht">yacht</option>';
  }
  if (typeOfVessel=="barge") {
      htmlString+= '<option value="barge" selected>barge</option>';
  } else {
      htmlString+= '<option value="barge">barge</option>';
  }
  if (typeOfVessel=="catamaran") {
      htmlString+= '<option value="catamaran" selected>catamaran</option>';
  } else {
     htmlString+= '<option value="catamaran">catamaran</option>';
  }
  if (typeOfVessel=="double skin/hull") {
      htmlString+='<option value="double skin/hull" selected>double skin/hull</option></select>' + "</td></tr>"; 
  } else {
      htmlString+='<option value="double skin/hull">double skin/hull</option></select>' + "</td></tr>"; 
  }
 
  htmlString+=htmlServiceDataString;
  // htmlString+='<tr><td><label for="dckgDocking">Docking & Undocking</label></td>'
  // htmlString+='<tr><td><select name="serviceItem" id="serviceItem" onchange="return setRate();">';
  // htmlString+= '<option value="Docking & Undocking">Docking & Undocking</option>';
  // htmlString+= '<option value="Rate per Day">Rate per Day</option>';
  // htmlString+= '<option value="Tug Boat Assistance">Tug Boat Assistance</option>';
  // htmlString+="</select></td>";
  htmlString+='<td align="right" width="2%"><label for="rateUnit">Rp.</label></td>';
  htmlString+=htmlRateString;
 

  htmlString+='<tr><td colspan="2"><label for="qty">Quantity</label></td>';   
  htmlString+='<td><button type="button" id="minusBtn" class="btn btn-danger btn-sm" disabled>-</button>';                 
  htmlString+="<input type='text' id='qty' name='qty' value='1' onchange='return calculate();'  size='1' >";
  htmlString+='<button type="button" id="plusBtn" class="btn btn-success btn-sm">+</button></td></tr>'; 
  if (serviceID != "bafc") {
      htmlString+="<tr><td colspan='2'><input type='checkbox' id='serviceItemCheckBox' name='serviceItemCheckBox' value ='no' onclick='showHideField()'>";
      htmlString+='<label for="workingTime">Working Time</label></td>';
      htmlString+='<td style="visibility:collapse">' + overtimeCmb("t","dckgDocking") + overtimeCmb("d","dckgDocking") +'</td></tr>';   
  } else {
      htmlString+='<tr><td><label for="rentalTime">Rental Time</label></td><td></td>';
      htmlString+=htmlStr.split("|")[4] + "</tr>";
      htmlString+="<tr><td></td>" + htmlStr.split("|")[5] + "</tr>";
     
  }
  if (rate==0) {
      rate=parseFloat(htmlStr.split("|")[2]);
  }
  console.log(rate);
  htmlString+='<tr><td colspan="2"><label for="rateFactor">Rate Factor</label></td>';
  htmlString+="<td><input type='text' id='rateFactor' name='rateFactor' value='100%' size='4' readonly> </td></tr>";
  htmlString+='<tr><td><label for="charge">Charge</label></td>';
  htmlString+='<td align="right" width="2%"><label for="rateUnit">Rp.</label></td>';
  htmlString+="<td><input type='text' id='charge' name='charge' value='" + formatNumber(rate) + "' size='10' readonly> </td></tr>";
  htmlString+="</table>" ;            
  htmlString+='</div>';//end-card-body
  htmlString+='<div class="card-footer">';
  htmlString+='<button type="button" id="proceedBtn" class="btn btn-primary float-right">Proceed</button>';
  htmlString+='</div>';  //end-card-footers
  // htmlString+='</form>';
  htmlString+='</div>';  //end-card
  
  document.querySelector(".popup-service-item .si-form").innerHTML=htmlString;
  
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
    $('#proceedBtn').click(function () {
          let str;
          let newAccess;
          let htmlString="";
          $(document).ready(function(){
            $(".fullscreen-container").fadeOut(200);
          }); 
          document.querySelector(".popup-service-item").classList.remove("active");  
          // document.getElementById("container").insertAdjacentHTML("afterend",proceedClick());
          str=document.getElementById("container").innerHTML;

          if (str.indexOf("card-body")==-1) {
              newAccess=true;
              newServiceAccess=false;
              htmlString=proceedClick(serviceID,newAccess);
            //   var htmlSaveString='<form  method="POST"  id="webpage-form" class="webpage-form">';
            //   htmlSaveString+="<input id='webpage-input' type='textarea' value=''>";
            //   htmlSaveString+="<input id='propid' type='text' value='00000299'>";
              document.getElementById("container").innerHTML=htmlString.split("|")[0];
            //   document.getElementById("card").insertAdjacentHTML("afterend",htmlSaveString);
              document.getElementById("button-panel").innerHTML=htmlString.split("|")[1];
            //   htmlSaveString="</form>";
            //   document.getElementById("button-panel").insertAdjacentHTML("afterend",htmlSaveString);
          } else {
              newAccess=false;
              // document.querySelector("#container .card-footer").insertAdjacentHTML("beforebegin", proceedClick(newAccess)); 
              str=proceedClick(serviceID,newAccess);
              if ( parseInt(str.split("|")[3])==1) {
                  newServiceAccess=true;
              } else {
                  newServiceAccess=false;
              }
              // console.log("newService Access=" + newServiceAccess + "=======" + parseInt(str.split("|")[3]));
    
              if (newServiceAccess==true) {
                  // if (serviceID=="floating") { 
                  //   document.querySelector("#container #grandTotal").insertAdjacentHTML("beforebegin", str.split("|")[4]);
                  // }
                  document.querySelector("#container #end-service-div").insertAdjacentHTML("beforebegin", str.split("|")[0]);    //new service item
                  document.querySelector("#container #end-service-div").insertAdjacentHTML("beforebegin", str.split("|")[1]);   //service Total 
                  newServiceAccess=false;
              } else {
                  switch (serviceID) {
                      case "dockage":
                          $('#dockageTbl tr:last').after(str.split("|")[0]);
                          document.getElementById("dockageTotal").innerHTML=str.split("|")[1];
                          break;
                      case "floating":
                          $('#floatingTbl tr:last').after(str.split("|")[0]);
                          document.getElementById("floatingTotal").innerHTML=str.split("|")[1];
                          break;
                      case "mooring":
                          $('#mooringTbl tr:last').after(str.split("|")[0]);
                          document.getElementById("mooringTotal").innerHTML=str.split("|")[1];
                          break;
                      case "dbr":
                          $('#dbrTbl tr:last').after(str.split("|")[0]);
                          document.getElementById("dbrTotal").innerHTML=str.split("|")[1];
                          break;
                      case "bafc":
                          $('#bafcTbl tr:last').after(str.split("|")[0]);
                          document.getElementById("bafcTotal").innerHTML=str.split("|")[1];
                          break;
                  }
                //   if (serviceID=="dockage") {
                //       $('#dockageTbl tr:last').after(str.split("|")[0]);
                //       document.getElementById("dockageTotal").innerHTML=str.split("|")[1];
                //   }
                //   if (serviceID=="floating") { 
                //       $('#floatingTbl tr:last').after(str.split("|")[0]);
                //       document.getElementById("floatingTotal").innerHTML=str.split("|")[1];
                //   }
                //   if (serviceID=="mooring") { 
                //       $('#mooringTbl tr:last').after(str.split("|")[0]);
                //       document.getElementById("mooringTotal").innerHTML=str.split("|")[1];
                //   }
                //   if (serviceID=="dbr") { 
                //     $('#dbrTbl tr:last').after(str.split("|")[0]);
                //     document.getElementById("dbrTotal").innerHTML=str.split("|")[1];
                // }
             }
              
              document.getElementById("grandTotal").innerHTML= str.split("|")[2]; 
              // console.log("subtotal=" + str.split("|")[1]);
              
              // document.getElementById("card-footer").insertAdjacentHTML("beforebegin", proceedClick(newAccess));
            
          }
            
          $(document).ready(function(){
            $('#addBtn').click(function () {
                // console.log("clickADD");
                document.querySelector(".popup-service-item").classList.add("active");
                $(document).ready(function(){
                  $(".fullscreen-container").fadeTo(200,1);
                });
            });
            $('#printBtn').click(function () {
                // console.log("clickPrint");
                // document.querySelector(".popup-service-item").classList.add("active");
                // generatePDF();
                // var divContents = $("#card").html();
                // document.querySelector(".edit-and-delete-div").style.display = 'none';
                var keepContents=document.getElementById("container").innerHTML;
                var ele = document.getElementsByClassName('edit-and-delete-div');
                for (var i = 0; i < ele.length; i++ ) {
                    ele[i].style.display = "none";
                }
                var divContents =document.getElementById("container").innerHTML;
                var printWindow = window.open('', '', 'height=400,width=800');
                // var elementHandler = {
                //     '.edit-and-delete-div': function (element, renderer) {
                //       return true;
                //     }
                //   };
                printWindow.document.write('<html><head><title>Print it!</title><link rel="stylesheet" type="text/css" href="style.css" media="print" />');
                printWindow.document.write('<style type="text/css">.style1{width: 100%;}</style>');
                printWindow.document.write('</head><body >');
                printWindow.document.write(divContents);
                printWindow.document.write('</body></html>');
               
                setTimeout(function () {
                    printWindow.document.close();
                }, 250);
                document.getElementById("container").innerHTML=keepContents;
                printWindow.print();
                
                return true;
                
                // // $(document).ready(function(){
                //   $(".fullscreen-container").fadeTo(200,1);
                // });
                // var win = window.open('','printwindow');
                // win.document.write('<html><head><title>Print it!</title><link rel="stylesheet" type="text/css" href="styles.css"></head><body>');
                // win.document.write($("#content").html());
                // win.document.write('</body></html>');
                // win.print();
                // win.close();
                // demoFromHTML();
                // var doc = new jsPDF();           
                // var elementHandler = { 
                //     '.edit-and-delete-div': function (element, renderer) { 
                //         return true; 
                //     } 
                // }; 
                // var source = window.document.getElementById("container"); 
                // doc.fromHTML( 
                //     source, 
                //     15, 
                //     15, 
                //     { 
                //     'width': 180,'elementHandlers': elementHandler 
                //     }); 
                
                // doc.output("dataurlnewwindow");    

            });
            $('#saveBtn').click(function () {
               
                var webpage = $('#card').html();
                var propid="0000299";
                $.ajax({
                    method: "POST",
                    url: 'php/insert_data.php',
                    data: {web_page: webpage, prop_id: propid},
                }).done (function(response) {
                    alert("suksess");
                  }).fail(function( jqXHR, textStatus ) {
                    alert("gagal");
                  });
               

            });
           
            $("#dockageTbl").on('click','.btnDelete',function(){
                console.log(newCount);
                var rowIndex=$(this).closest('tr').index();
                // var serviceID=$(this).closest('tr').find('#tdServiceID').text();
                var deleteRate=parseFloat(unformatNumber($("#dockageTbl").children().children()[rowIndex-1].children[2].innerHTML));
                if (deleteRate) { 
                    // var deleteRate=parseFloat(unformatNumber($(this).closest('table').find('#charge').text()));
                    // var deleteRate= $row.find('td:eq(' + ($(this).closest('td').index() - 1) + ')').text();;
                    console.log($("#dockageTbl").children().children()[rowIndex-1].children[2].innerHTML);
                   
                    // $row.find('td:eq(' + ($(this).closest('td').index() + 1) + ')').text();
                    console.log("Deleted Rate= " + deleteRate);
                    console.log("Dockage Total= " + $(this).closest('#dockage-div').find("#tdDockageTotal").text());
                    dckgTotal=unformatNumber($(this).closest('#dockage-div').find("#tdDockageTotal").text());
                    // console.log(document.getElementById("tdDockageTotal").outerHTML);
                    dckgTotal-=deleteRate;
                   
                    console.log("dckgTotal setelah dikurangi=" + dckgTotal);
                    console.log("Dockage Count= " + $(this).closest('#dockage-div').find("#tdDockageCount").text());
                    console.log("Dockage Count= " + $(this).closest('#dockage-div').find("#tdDockageCount").text().split(" ")[4]);
                    iDckg=parseInt($(this).closest('#dockage-div').find("#tdDockageCount").text().split(" ")[4]) - 1;
                    // var iDckgx=document.getElementById("tdDockageCount").outerHTML;
                    console.log("iDckg=" + iDckg);
                    if ( iDckg > 0) {
                        document.getElementById("tdDockageCount").innerHTML= 'Dockage Charge Total: ( ' + iDckg.toString() + ' )';
                        document.getElementById("tdDockageTotal").innerHTML=formatNumber(dckgTotal);
                        document.getElementById("dockageTbl").deleteRow(rowIndex);
                        document.getElementById("dockageTbl").deleteRow(rowIndex-1);
                    }  else {
                        document.getElementById("dockage-div").innerHTML="";
                        newDockageAccess=true;
                        newAccess=true;
                        disableBtn("add");
                        enableSideMenu("all");
                    }
                    
                    // console.log("Grand Total =" + $(this).closest('.card-body').find("#tdGrandTotal").text());
                    // console.log("Grand Total =" + document.getElementById("#tdGrandTotal").outerHTML);
                    console.log("Grand Total =" +  document.querySelector("#container #tdGrandTotal").innerHTML);
                    // document.querySelector(".popup-service-item .si-close-btn")
                    // grandTotal=unformatNumber(document.ge("#tdGrandTotal").innerHTML);
                    grandTotal-=deleteRate;
                    console.log("Grand Total setelah dikurangi =" + grandTotal);
                    if (grandTotal>0 ) {
                        document.getElementById("tdGrandTotal").innerHTML=formatNumber(grandTotal);
                       
                    } else {
                        document.getElementById("container").innerHTML="";
                        newDockageAccess=true;
                        // disableBtn("all");
                        document.getElementById("button-panel").innerHTML="";
                        enableSideMenu("all");

                    }
                    // // console.log( dckgTotal );
                    // console.log(grandTotal);
                    

                  
                    // newCount=false;
                          
                }
              
            });

            $("#floatingTbl").on('click','.btnDelete',function(){
              console.log(newCount);
              var rowIndex=$(this).closest('tr').index();
              // var serviceID=$(this).closest('tr').find('#tdServiceID').text();
              var deleteRate=parseFloat(unformatNumber($("#floatingTbl").children().children()[rowIndex-1].children[2].innerHTML));
              if (deleteRate) { 
                  // var deleteRate=parseFloat(unformatNumber($(this).closest('table').find('#charge').text()));
                  // var deleteRate= $row.find('td:eq(' + ($(this).closest('td').index() - 1) + ')').text();;
                  console.log($("#floatingTbl").children().children()[rowIndex-1].children[2].innerHTML);
                
                  // $row.find('td:eq(' + ($(this).closest('td').index() + 1) + ')').text();
                  console.log("Deleted Rate= " + deleteRate);
                  console.log("floating Total= " + $(this).closest('#floating-div').find("#tdFloatingTotal").text());
                  dckgTotal=unformatNumber($(this).closest('#floating-div').find("#tdFloatingTotal").text());
                  // console.log(document.getElementById("tdfloatingTotal").outerHTML);
                  floatTotal-=deleteRate;
                
                  console.log("floatTotal setelah dikurangi=" + floatTotal);
                  console.log("floating Count= " + $(this).closest('#floating-div').find("#tdFloatingCount").text());
                  console.log("floating Count= " + $(this).closest('#floating-div').find("#tdFloatingCount").text().split(" ")[4]);
                  iFloat=parseInt($(this).closest('#floating-div').find("#tdFloatingCount").text().split(" ")[4]) - 1;
                  // var iDckgx=document.getElementById("tdfloatingCount").outerHTML;
                  console.log("iFloat=" + iFloat);
                  if ( iFloat > 0) {
                      document.getElementById("tdFloatingCount").innerHTML= 'Floating Charge Total: ( ' + iFloat.toString() + ' )';
                      document.getElementById("tdFloatingTotal").innerHTML=formatNumber(floatTotal);
                      document.getElementById("floatingTbl").deleteRow(rowIndex);
                      document.getElementById("floatingTbl").deleteRow(rowIndex-1);
                  }  else {
                      document.getElementById("floating-div").innerHTML="";
                      newFloatingAccess=true;
                      disableBtn("add");
                      enableSideMenu("all");
                  }
                  
                  // console.log("Grand Total =" + $(this).closest('.card-body').find("#tdGrandTotal").text());
                  // console.log("Grand Total =" + document.getElementById("#tdGrandTotal").outerHTML);
                  console.log("Grand Total =" +  document.querySelector("#container #tdGrandTotal").innerHTML);
                  // document.querySelector(".popup-service-item .si-close-btn")
                  // grandTotal=unformatNumber(document.ge("#tdGrandTotal").innerHTML);
                  grandTotal-=deleteRate;
                  console.log("Grand Total setelah dikurangi =" + grandTotal);
                  if (grandTotal>0 ) {
                      document.getElementById("tdGrandTotal").innerHTML=formatNumber(grandTotal);
                    
                  } else {
                      document.getElementById("container").innerHTML="";
                      document.getElementById("button-panel").innerHTML="";
                      newFloatingAccess=true;
                      newAccess=true;

                      enableSideMenu("all")
                  }
                  // // console.log( dckgTotal );
                  // console.log(grandTotal);
                  

                
                  // newCount=false;
                        
              }
            
             });
        
            $("#mooringTbl").on('click','.btnDelete',function(){
              console.log(newCount);
              var rowIndex=$(this).closest('tr').index();
              // var serviceID=$(this).closest('tr').find('#tdServiceID').text();
              var deleteRate=parseFloat(unformatNumber($("#mooringTbl").children().children()[rowIndex-1].children[2].innerHTML));
              if (deleteRate) { 
                  // var deleteRate=parseFloat(unformatNumber($(this).closest('table').find('#charge').text()));
                  // var deleteRate= $row.find('td:eq(' + ($(this).closest('td').index() - 1) + ')').text();;
                  console.log($("#mooringTbl").children().children()[rowIndex-1].children[2].innerHTML);
                
                  // $row.find('td:eq(' + ($(this).closest('td').index() + 1) + ')').text();
                  console.log("Deleted Rate= " + deleteRate);
                  console.log("mooring Total= " + $(this).closest('#mooring-div').find("#tdMooringTotal").text());
                  dckgTotal=unformatNumber($(this).closest('#mooring-div').find("#tdMooringTotal").text());
                  // console.log(document.getElementById("tdMooringTotal").outerHTML);
                  moorTotal-=deleteRate;
                
                  console.log("floatTotal setelah dikurangi=" + moorTotal);
                  console.log("mooring Count= " + $(this).closest('#mooring-div').find("#tdMooringCount").text());
                  console.log("mooring Count= " + $(this).closest('#mooring-div').find("#tdMooringCount").text().split(" ")[4]);
                  iMoor=parseInt($(this).closest('#mooring-div').find("#tdMooringCount").text().split(" ")[4]) - 1;
                  // var iDckgx=document.getElementById("tdMooringCount").outerHTML;
                  console.log("iMoor=" + iMoor);
                  if ( iMoor > 0) {
                      document.getElementById("tdMooringCount").innerHTML= 'mooring Charge Total: ( ' + iMoor.toString() + ' )';
                      document.getElementById("tdMooringTotal").innerHTML=formatNumber(moorTotal);
                      document.getElementById("mooringTbl").deleteRow(rowIndex);
                      document.getElementById("mooringTbl").deleteRow(rowIndex-1);
                  }  else {
                      document.getElementById("mooring-div").innerHTML="";
                      newMooringAccess=true;
                      disableBtn("add");
                      enableSideMenu("all");
                  }
                  
                  // console.log("Grand Total =" + $(this).closest('.card-body').find("#tdGrandTotal").text());
                  // console.log("Grand Total =" + document.getElementById("#tdGrandTotal").outerHTML);
                  console.log("Grand Total =" +  document.querySelector("#container #tdGrandTotal").innerHTML);
                  // document.querySelector(".popup-service-item .si-close-btn")
                  // grandTotal=unformatNumber(document.ge("#tdGrandTotal").innerHTML);
                  grandTotal-=deleteRate;
                  console.log("Grand Total setelah dikurangi =" + grandTotal);
                  if (grandTotal>0 ) {
                      document.getElementById("tdGrandTotal").innerHTML=formatNumber(grandTotal);
                    
                  } else {
                      document.getElementById("container").innerHTML="";
                      document.getElementById("button-panel").innerHTML="";
                      newMooringAccess=true;
                      newAccess=true;
                      enableSideMenu("all")
                  }
                  // // console.log( dckgTotal );
                  // console.log(grandTotal);
                  

                
                  // newCount=false;
                        
              }
            
        });
      
      });
           
    });
  });  
  
  // console.log(htmlString);
  return 0;
}

function bafc(grossTon,srcData,serviceItem) {
  var j=0
  var htmlGrossTonString="";
  var htmlServiceDataString="";
  var htmlRateString=""; 
  var rate=srcData.boat_and_floating_crane[j].rate
  title="Boat and Floating Crane";
  var str=document.getElementById("container").innerHTML;
  var str1="";
  if (str.indexOf("TUG BOAT AND CRANES HIRE")==-1) {
      titleA="TUG BOAT AND CRANES HIRE";
      title="a. " + title;
  } else {
      str1=document.getElementById("bafc-div").innerHTML;
      if (str.indexOf("b. ")==-1) {
        title="b. " + title;
      }
      if (str.indexOf("a. ")!=-1 && str.indexOf("b. ")!=-1) {
          title="c. " + title;
      }
  }
 
  if (str.indexOf("Gross Ton") != -1) {
      htmlGrossTonString+='<select name="grossTonSelect" id="grossTonSelect" onchange="return setRate(\'bafc\');" disabled>';
  } else {
      htmlGrossTonString+='<select name="grossTonSelect" id="grossTonSelect" onchange="return setRate(\'bafc\');">';
  }
  
  for(i=0; i < srcData.DockageData.length; i++) {
    if (srcData.DockageData[i].grossTon==grossTon){      
        htmlGrossTonString += "<option  value='" + srcData.FloatingData[i].grossTon  + "' selected>" + 
        srcData.DockageData[i].grossTon + " </option>";
        j=i;
    } else {
        htmlGrossTonString  += "<option  value='" + srcData.DockageData[i].grossTon  + "'>" + 
        srcData.DockageData[i].grossTon + " </option>";
    }
  }

  htmlGrossTonString+="</select></td></tr>";
  htmlRateString+="<td><input type='text' id='rate' name='rate' value='" + 
  formatNumber(rate) + "' size='10' readonly onchange='return calculate();'> </td></tr>";  //umpan pertama
  htmlServiceDataString+='<tr><td><select name="serviceItem" id="serviceItem" style="font-weight: bold;" onchange="return setRate(\'bafc\');" style="visibility:visible;">';
  
  while (i<96) {
      if (serviceItem==srcData.boat_and_floating_crane[i].service_item) {
          htmlServiceDataString+= '<option value="' + srcData.boat_and_floating_crane[i].service_item + '" selected>' + srcData.boat_and_floating_crane[i].service_item + '</option>'; 
      } else {
          htmlServiceDataString+= '<option value="' + srcData.boat_and_floating_crane[i].service_item + '">' + srcData.boat_and_floating_crane[i].service_item + '</option>';
      }
      i+=8;
  }
  htmlServiceDataString+="</select></td>";
  var htmlRentalTimeString='<td><select  id="workingTime" onchange="return setRate(\'bafc\');" style="visibility:visible;">';
  htmlRentalTimeString+= '<option value="08.00 - 16.00">08.00 - 16.00</option>';
  htmlRentalTimeString+= '<option value="16.00 - 20.00">16.00 - 20.00</option>';
  htmlRentalTimeString+= '<option value="20.00 - 24.00">20.00 - 24.00</option>';
  htmlRentalTimeString+= '<option value="24.00 - 08.00">24.00 - 08.00</option>';
  htmlRentalTimeString+="</select></td>";
  var htmlRentalDayString='<td></td><td><select id="workingDay" onchange="return setRate(\'bafc\');">';
  htmlRentalDayString+= '<option value="Monday up to Friday">Monday up to Friday</option>';
  htmlRentalDayString+= '<option value="Saturday & Sunday/Holiday">Saturday & Sunday/Holiday</option>';
  htmlRentalDayString+="</select></td>";

  return htmlGrossTonString + "|" + htmlRateString  + "|" + rate + "|" + htmlServiceDataString + "|" + htmlRentalTimeString + "|" + htmlRentalDayString;
}

function dbr(grossTon,srcData,serviceItem) {
    var j=0
    var rate=srcData.dock_block_removal[j].rate;
    var htmlGrossTonString="";
    var htmlServiceDataString="";
    var htmlRateString=""; 
    var str=document.getElementById("container").innerHTML;
    title="DOCK BLOCK REMOVAL";
    if (str.indexOf("Gross Ton") != -1) {
        htmlGrossTonString+='<select name="grossTonSelect" id="grossTonSelect" onchange="return setRate(\'dbr\');" disabled>';
    } else {
        htmlGrossTonString+='<select name="grossTonSelect" id="grossTonSelect" onchange="return setRate(\'dbr\');">';
    }
    for(i=0; i < srcData.DockageData.length; i++) {
      if (srcData.DockageData[i].grossTon==grossTon){      
          htmlGrossTonString += "<option  value='" + srcData.DockageData[i].grossTon  + "' selected>" + 
          srcData.DockageData[i].grossTon + " </option>";
      } else {
          htmlGrossTonString  += "<option  value='" + srcData.DockageData[i].grossTon  + "'>" + 
          srcData.DockageData[i].grossTon + " </option>";
      }
    }
    htmlGrossTonString+="</select></td></tr>";
   
   htmlRateString+="<td><input type='text' id='rate' name='rate' value='" + 
   formatNumber(rate) + "' size='10' readonly onchange='return calculate();'> </td></tr>";  //umpan pertama
    htmlServiceDataString+='<tr><td><select name="serviceItem" id="serviceItem" onchange="return setRate(\'dbr\');">';
    // console.log(htmlServiceDataString);
    for (let i=0; i<srcData.dock_block_removal.length;i++) {
        if (serviceItem==srcData.dock_block_removal[i].service_item) {
            htmlServiceDataString+= '<option value="' + srcData.dock_block_removal[i].service_item + '" selected>' + srcData.dock_block_removal[i].service_item + '</option>';
        } else {
            htmlServiceDataString+= '<option value="' + srcData.dock_block_removal[i].service_item + '">' + srcData.dock_block_removal[i].service_item + '</option>';
        }
      
    }
    htmlServiceDataString+="</select></td>";
    return htmlGrossTonString + "|" + htmlRateString + "|" + rate+ "|" + htmlServiceDataString ;
}


function mooring(grossTon,srcData,serviceItem) {
    var j=0
    var htmlGrossTonString="";
    var htmlServiceDataString="";
    var htmlRateString=""; 
    title="For Mooring and Unmooring Operation";
    var str=document.getElementById("container").innerHTML;
    if (str.indexOf("FLOATING CHARGE")==-1) {
        titleA="FLOATING CHARGE IN SHIPYARD AREA";
        title="a. " + title;
    } else {
        title="b. " + title;
    }
    if (grossTon=="Up to 300" || grossTon=="301 - 500") {
        grossTon="Up to 500";
    }
    if (str.indexOf("Gross Ton") != -1) {
        htmlGrossTonString+='<select name="grossTonSelect" id="grossTonSelect" onchange="return setRate(\'mooring\');" disabled>';
    } else {
        htmlGrossTonString+='<select name="grossTonSelect" id="grossTonSelect" onchange="return setRate(\'mooring\');">';
    }
    
    for(i=0; i < srcData.FloatingData.length; i++) {
      if (srcData.FloatingData[i].grossTon==grossTon){      
          htmlGrossTonString += "<option  value='" + srcData.FloatingData[i].grossTon  + "' selected>" + 
          srcData.FloatingData[i].grossTon + " </option>";
          j=i;
      } else {
          htmlGrossTonString  += "<option  value='" + srcData.FloatingData[i].grossTon  + "'>" + 
          srcData.FloatingData[i].grossTon + " </option>";
      }
    }
    rate = srcData.FloatingData[j].mooring_rate;
    htmlGrossTonString+="</select></td></tr>";
    htmlRateString+="<td><input type='text' id='rate' name='rate' value='" + 
    formatNumber(rate) + "' size='10' readonly onchange='return calculate();'> </td></tr>";  //umpan pertama
    htmlServiceDataString+='<tr><td><select name="serviceItem" id="serviceItem" onchange="return setRate(\'mooring\');">';
    // console.log(htmlServiceDataString);
    for (let i=0; i<srcData.MooringItemData.length;i++) {
        if (serviceItem==srcData.MooringItemData[i].service_item) {
            htmlServiceDataString+= '<option value="' + srcData.MooringItemData[i].service_item + '" selected>' + srcData.MooringItemData[i].service_item + '</option>';
        } else {
            htmlServiceDataString+= '<option value="' + srcData.MooringItemData[i].service_item + '">' + srcData.MooringItemData[i].service_item + '</option>';
        }
      
    }
    htmlServiceDataString+="</select></td>";
    return htmlGrossTonString + "|" + htmlRateString + "|" + rate + "|" + htmlServiceDataString;
}

function proceedClick(serviceID,newAccess) {
  let htmlString="";
  let htmlTotalString="";
  let htmlButtonString="";
  let htmlGrandTotalString="";
  let htmlSpecialTitleString="";
  let countServiceItem=0;
  var str=document.getElementById("container").innerHTML;
  if (newAccess==true) {
     
      htmlString+='<div id="card" class="card">'; //card parent
      htmlString+='<div class="card-body">'; //card body parent
      htmlString+='<table  width=50% id="tblStaticData">';
      htmlString+="<tr><td>Gross Ton or Displacement</td><td size='1'>:</td>"; 
      htmlString+='<td id="grossTon" width="50%" style="text-align:left;">' + document.getElementById("grossTonSelect").value + "</td></tr>";
      htmlString+="<tr><td>Type of Vessel</td><td size='1'>:</td>";
      htmlString+='<td id="typeOfVessel" width="50%" style="text-align:left;">' + document.getElementById("typeOfVessel").value + "</td></tr>";
      htmlString+='</div>';  //end card-body parent
     
      htmlString+='</table>';
      htmlString+='<div id="' + serviceID + '-div">';
      htmlString+='<div class="card">'; //begin card child
      if ( serviceID=="floating" || serviceID=="mooring") {
          htmlString+='<div class="card-header">';
          htmlString+='<h4 id="title">FLOATING CHARGE IN SHIPYARD AREA</h4>';
          htmlString+='</div>';
      }

      if (serviceID=="bafc") {
          titleA="TUG BOAT AND CRANES HIRE";
          // title="a. " + title;
          htmlString+='<div class="card-header">';
          htmlString+='<h4 id="title">' + titleA + '</h4>';
          htmlString+='</div>';
      }
     
      htmlString+='<div class="card-header">'; //begin card-header chile
      htmlString+='<h4 id="title">' + title + '</h4>';
      htmlString+='</div>'; //end card-header child
      htmlString+='<div class="card-body">'; //begin card-body child
      
      htmlString+='<table width=98% id="' +  serviceID + 'Tbl">';
      htmlString+='<tr><td width="80%" style="font-size:18px" >' + document.getElementById("serviceItem").value + '</td>';
      htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
      htmlString+= "<td style='text-align:right' id='charge'>" + document.getElementById("charge").value + "</td></tr>";  
      htmlString+='<tr><td width="80%" style="font-size:14px;">' + document.getElementById("qty").value + " Qty - @ Rp. ";
      htmlString+= document.getElementById("rate").value;
    
      if (document.getElementById("workingTime").style.visibility=="visible") {
          htmlString+= " with Working Time at " + document.getElementById("workingTime").value + "  on  " +  document.getElementById("workingDay").value ;
          htmlString+= " and rate factor is "  + document.getElementById("rateFactor").value ;
      }
      // htmlString+='</td><td id="tdServiceID">' + serviceID + '</td>'; // style="visibility:collapse"
      htmlString+='</td><td></td>';
      htmlString+='<td class="edit-and-delete-column">'; 
      htmlString+= '<div class="edit-and-delete-div"><button type="button" class="btn btn-default btn-sm" ><span class="glyphicon glyphicon-pencil"> Edit </span></button>';
      htmlString+='<button type="button" class="btn btn-default btn-sm btnDelete"><span class="glyphicon glyphicon-trash"> Delete </span></button>';
      htmlString+='</div></td></tr></table>';
      htmlString+="<div id='" + serviceID + "Total'>";
      htmlString+='<table width=98% id="' + serviceID + 'TblTotal">';
     
      // console.log(serviceID);
      switch (serviceID) {
          case "dockage":
              iDckg++;
              htmlString+='<tr><td width="80%" style="text-align:right" id="tdDockageCount">Dockage Charge Total: ( ' + iDckg + ' )</td>';
              htmlString+="<td size='1'  style='text-align:right'>Rp. </td>";
              dckgTotal+=unformatNumber(document.getElementById("charge").value);  
              htmlString+= "<td style='text-align:right'  id='tdDockageTotal'>" + document.getElementById("charge").value + "</td></tr>"; 
              newDockageAccess=false;
              break; 
          case "floating":
              iFloat++;
              htmlString+='<tr><td width="80%" style="text-align:right" id="tdFloatingCount">Floating Charge Total: ( ' + iFloat + ' )</td>';
              floatTotal+=unformatNumber(document.getElementById("charge").value);  
              htmlString+= "<td style='text-align:right' id='tdFloatingTotal'>" + formatNumber(floatTotal) + "</td></tr>"; 
              newFloatingAccess=false; 
              break;
          case "mooring":
              iMoor++;
              htmlString+='<tr><td width="80%" style="text-align:right" id="tdMooringCount">Mooring Charge Total: ( ' + iMoor + ' )</td>';
              moorTotal+=unformatNumber(document.getElementById("charge").value);  
              htmlString+= "<td style='text-align:right' id='tdMooringTotal'>" + formatNumber(moorTotal) + "</td></tr>";  
              newMooringAccess=false;
              break;
          case "dbr":
              iDbr++;
              htmlString+='<tr><td width="80%" style="text-align:right" id="tdDbrCount">Dock Block Removal Charge Total: ( ' + iDbr + ' )</td>';
              dbrTotal+=unformatNumber(document.getElementById("charge").value);  
              htmlString+= "<td style='text-align:right' id='tdDbrTotal'>" + formatNumber(dbrTotal) + "</td></tr>";  
              newDbrAccess=false;
              break;
          case "bafc":
              iBafc++;
              htmlString+='<tr><td width="80%" style="text-align:right" id="tdBafcCount">Boat and Floating Crane Rental Charge Total: ( ' + iBafc + ' )</td>';
              bafcTotal+=unformatNumber(document.getElementById("charge").value);  
              htmlString+= "<td style='text-align:right' id='tdDbrTotal'>" + formatNumber(bafcTotal) + "</td></tr>";  
              newBafcAccess=false;
              break;
     }
     
      htmlString+='</table>';  //end table service Total
      htmlString+="</div></div>"; //end div service Total & end div service
      htmlString+='</div>';  //end card-body child
      htmlString+='</div>';  //end-card child
      htmlString+="<div id='end-service-div'></div>"; //#end-service-div
      htmlString+='<div class="card-footer">'; //card body parent
      htmlString+="<div id='grandTotal'>";
      htmlString+='<table width=98% id="tblGrandTotal">';
      htmlString+='<tr><td width="80%" style="text-align:right" ><b>Grand Total</b></td>';
      htmlString+="<td size='1'  style='text-align:right'><b>Rp. </b></td>";
      grandTotal+=parseFloat(unformatNumber(document.getElementById("charge").value));  
      htmlString+="<td style='text-align:right' id='tdGrandTotal'><b>" + document.getElementById("charge").value + "</b></td></tr></table>";
      htmlString+='</div></div>';  //end grand total and end card-body perent
     
      newServiceItemAccess=false;   
     
      // htmlString+='<div class="card-footer">';
      // htmlString+='<button type="button" id= "dckgDeleteBtn" class="btn btn-warning float-right">Delete</button>';
      htmlButtonString+='<div class="d-grid gap-2 d-md-flex justify-content-md-end">';
      htmlButtonString+='<button type="button" id= "addBtn" class="btn btn-success  me-md-2 float-right"><span class="glyphicon glyphicon-plus"  aria-disabled="true"> Add </span></button>';
      htmlButtonString+='<button type="button" id="excelBtn" class="btn btn-primary me-md-2 float-right"> Export to Excel </span></button>';
      htmlButtonString+='<button type="button" id="saveBtn" class="btn btn-primary me-md-2 float-right"><span class="glyphicon glyphicon-floppy-saved"  aria-disabled="true"> Save </span></button>';
      htmlButtonString+='<button type="button" id="printBtn" class="btn btn-primary me-md-2 float-right"><span class="glyphicon glyphicon-print"  aria-disabled="true"> Print </span></button>';
     
      // htmlString+='<button type="button" id= "dckgEditBtn" class="btn btn-info float-right" disabled>Edit</button>';
      // htmlString+='</div>';  //end-card-footers
     
      // switch(serviceID) {
      //   case "dockage":
      //       newDockageAccess=false;
      //       break;
      //   case "floating":
      //       newFloatingAccess=false;
      //       break;
      //   case "mooring":
      //       newMooringAccess=false;
      //       break;
      //   case "dbr":
      //       newDbrAccess=false;
      //       break;
      //   case "bafc":
      //       newBafcAccess=false;
      //       break;
      // }
      htmlString+="|" + htmlButtonString;
  } else {
    //  htmlTotalString+="<div id='" + serviceID + "Total'>";
    //  htmlTotalString+="<table width='98%' id='" + serviceID + "TblTotal'>";
     switch (serviceID) {
        case "dockage":
            iDckg++;
            dckgTotal+=unformatNumber(document.getElementById("charge").value);
            if ( newDockageAccess==true) {   //buat card baru
                htmlString+='<div id="dockage-div">'
                htmlString+='<div class="card">';  //begin dockage card child
                htmlString+='<div class="card-header">';
                htmlString+='<h4 id="title">' + title + '</h4>';
                htmlString+='</div>';
                htmlString+='<div class="card-body">'; //begin dockage card-body child
                htmlString+='<table  width=98% id="dockageTbl">';
                htmlString+='<tr><td width="80%" style="font-size:18px" >' + document.getElementById("serviceItem").value + '</td>';
                htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlString+= "<td style='text-align:right'>" + document.getElementById("charge").value + "</td></tr>";  
                htmlString+='<tr><td  width="80%" style="font-size:14px;">' + document.getElementById("qty").value + " Qty - @ Rp. ";
                htmlString+= document.getElementById("rate").value;
                
                if (document.getElementById("workingTime").style.visibility=="visible") {
                    htmlString+= " with Working Time at " + document.getElementById("workingTime").value + "  on  " +  document.getElementById("workingDay").value ;
                    htmlString+= " and rate factor is "  + document.getElementById("rateFactor").value ;
                }
                // htmlString+='</td><td id="tdServiceID">' + serviceID + '</td>'; // style="visibility:collapse"
                htmlString+='</td><td></td>';
                htmlString+='<td class="edit-and-delete-column">'; 
                htmlString+= '<div class="edit-and-delete-div"><button type="button" class="btn btn-default btn-sm" ><span class="glyphicon glyphicon-pencil"> Edit </span></button>';
                htmlString+='<button type="button" class="btn btn-default btn-sm btnDelete"><span class="glyphicon glyphicon-trash"> Delete </span></button>';
                htmlString+='</div></td></tr>';   //0 --htmlString
                htmlString+='</table>';
               
                
                htmlString+="<div id='dockageTotal'>";
                htmlString+='<table width=98% id="dockageTblTotal">';
                htmlString+='<tr><td width="80%" style="text-align:right" id="tdDockageCount">Dockage Charge Total: ( ' + iDckg + ' )</td>';
                htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlString+= "<td style='text-align:right'  id='tdDockageTotal'>" + formatNumber(dckgTotal) + "</td></tr></table></div>"; //dengan div total baru
                htmlString+='</div></div></div>'; //end card-body, end card dan end dockage-div
                countServiceItem=iDckg;
                newDockageAccess=false;
            } else {
                htmlString+='<tr><td width="80%" style="font-size:18px" >' + document.getElementById("serviceItem").value + '</td>';
                htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlString+= "<td style='text-align:right'>" + document.getElementById("charge").value + "</td></tr>";  
                htmlString+='<tr><td  width="80%" style="font-size:14px;">' + document.getElementById("qty").value + " Qty - @ Rp. ";
                htmlString+= document.getElementById("rate").value;
                if (document.getElementById("workingTime").style.visibility=="visible") {
                    htmlString+= " with Working Time at " + document.getElementById("workingTime").value + "  on  " +  document.getElementById("workingDay").value ;
                    htmlString+= " and rate factor is "  + document.getElementById("rateFactor").value ;
                }
            
                // htmlString+='</td><td id="tdServiceID">' + serviceID + '</td>'; // style="visibility:collapse"
                htmlString+='</td><td></td>';
                htmlString+='<td class="edit-and-delete-column">'; 
                htmlString+= '<div class="edit-and-delete-div"><button type="button" class="btn btn-default btn-sm" ><span class="glyphicon glyphicon-pencil"> Edit </span></button>';
                htmlString+='<button type="button" class="btn btn-default btn-sm btnDelete"><span class="glyphicon glyphicon-trash"> Delete </span></button>';
                htmlString+='</div></td></tr>';   //0 --htmlString
                htmlTotalString+='<table width=98% id="dockageTblTotal">';
                htmlTotalString+='<tr><td width="80%" style="text-align:right" id="tdDockageCount">Dockage Charge Total: ( ' + iDckg + ' )</td>';
                htmlTotalString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlTotalString+= "<td style='text-align:right'  id='tdDockageTotal'>" + formatNumber(dckgTotal) + "</td></tr></table>";  //tanpa div
                countServiceItem=iDckg;
            }
            break;
        case "floating":
            iFloat++;
            floatTotal+=unformatNumber(document.getElementById("charge").value);
            if ( newFloatingAccess==true ) {
                htmlString+='<div id="floating-div">'
                htmlString+='<div class="card">';  //begin floating card child
                if (str.indexOf("FLOATING CHARGE")==-1) {          
                    htmlString+='<div class="card-header">';
                    htmlString+='<h4 id="title">FLOATING CHARGE IN SHIPYARD AREA</h4>';
                    htmlString+='</div>';
                }
                htmlString+='<div class="card-header">';
                htmlString+='<h4 id="title">' + title + '</h4>';
                htmlString+='</div>';
                htmlString+='<div class="card-body">'; //begin floating card-body child
                htmlString+='<table  width=98% id="floatingTbl">';
                htmlString+='<tr><td width="80%" style="font-size:18px" >' + document.getElementById("serviceItem").value + '</td>';
                htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlString+= "<td style='text-align:right'>" + document.getElementById("charge").value + "</td></tr>";  
                htmlString+='<tr><td  width="80%" style="font-size:14px;">' + document.getElementById("qty").value + " Qty - @ Rp. ";
                htmlString+= document.getElementById("rate").value;
               
                if (str.length>0) {
                   
                    if (document.getElementById("grossTonSelect").value=="Up to 500" && 
                      document.getElementById("grossTon").innerHTML=="Up to 300") {
                        htmlString+=" Gross Ton: Up to 500 ";
                    }
                }
                if (document.getElementById("workingTime").style.visibility=="visible") {
                    htmlString+= " with Working Time at " + document.getElementById("workingTime").value + "  on  " +  document.getElementById("workingDay").value ;
                    htmlString+= " and rate factor is "  + document.getElementById("rateFactor").value ;
                }
            
                // htmlString+='</td><td id="tdServiceID">' + serviceID + '</td>'; // style="visibility:collapse"
                htmlString+='</td><td></td>';
                htmlString+='<td class="edit-and-delete-column">'; 
                htmlString+= '<div class="edit-and-delete-div"><button type="button" class="btn btn-default btn-sm" ><span class="glyphicon glyphicon-pencil"> Edit </span></button>';
                htmlString+='<button type="button" class="btn btn-default btn-sm btnDelete"><span class="glyphicon glyphicon-trash"> Delete </span></button>';
                htmlString+='</div></td></tr>';   //0 --htmlString
                htmlString+='</table>';
                htmlString+="<div id='floatingTotal'>"; 
                htmlString+='<table width=98% id="floatingTblTotal">';
                htmlString+='<tr><td width="80%" style="text-align:right" id="tdFloatingCount">Floating Charge Total: ( ' + iFloat + ' )</td>';
                htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlString+= "<td style='text-align:right' id='tdFloatingTotal'>" + formatNumber(floatTotal) + "</td></tr></table></div>"; 
                htmlString+='</div></div></div>'; //end card-body, end card dan end floating-div
                countServiceItem=iFloat;
                newFloatingAccess=false;
            } else {
                htmlString+='<tr><td width="80%" style="font-size:18px" >' + document.getElementById("serviceItem").value + '</td>';
                htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlString+= "<td style='text-align:right'>" + document.getElementById("charge").value + "</td></tr>";  
                htmlString+='<tr><td  width="80%" style="font-size:14px;">' + document.getElementById("qty").value + " Qty - @ Rp. ";
                htmlString+= document.getElementById("rate").value;
                
                if (str.length>0) {
                   
                    if (document.getElementById("grossTonSelect").value=="Up to 500" && 
                      document.getElementById("grossTon").innerHTML=="Up to 300") {
                        htmlString+=" Gross Ton: Up to 500 ";
                    }
                }
                if (document.getElementById("workingTime").style.visibility=="visible") {
                    htmlString+= " with Working Time at " + document.getElementById("workingTime").value + "  on  " +  document.getElementById("workingDay").value ;
                    htmlString+= " and rate factor is "  + document.getElementById("rateFactor").value ;
                }
            
                // htmlString+='</td><td id="tdServiceID">' + serviceID + '</td>'; // style="visibility:collapse"
                htmlString+='</td><td></td>';
                htmlString+='<td class="edit-and-delete-column">'; 
                htmlString+= '<div class="edit-and-delete-div"><button type="button" class="btn btn-default btn-sm" ><span class="glyphicon glyphicon-pencil"> Edit </span></button>';
                htmlString+='<button type="button" class="btn btn-default btn-sm btnDelete"><span class="glyphicon glyphicon-trash"> Delete </span></button>';
                htmlString+='</div></td></tr>';   //0 --htmlString
                  htmlTotalString+='<table width=98% id="floatingTblTotal">';
                  htmlTotalString+='<tr><td width="80%" style="text-align:right" id="tdFloatingCount">Floating Charge Total: ( ' + iFloat + ' )</td>';
                  htmlTotalString+="<td size='1'  style='text-align:right'>Rp. </td>"
                  htmlTotalString+= "<td style='text-align:right' id='tdFloatingTotal'>" + formatNumber(floatTotal) + "</td></tr></table>"; 
                  countServiceItem=iFloat;
            }
           
            break;
        case "mooring":
            iMoor++;
            moorTotal+=unformatNumber(document.getElementById("charge").value);
            if ( newMooringAccess==true) {
                htmlString+='<div id="mooring-div">'
                htmlString+='<div class="card">';  //begin floating card child
                if (str.indexOf("FLOATING CHARGE")==-1) {  
                    htmlString+='<div class="card-header">';
                    htmlString+='<h4 id="title">FLOATING CHARGE IN SHIPYARD AREA</h4>';
                    htmlString+='</div>';
                }
                htmlString+='<div class="card-header">';
                htmlString+='<h4 id="title">' + title + '</h4>';
                htmlString+='</div>';
                htmlString+='<div class="card-body">'; //begin dockage card-body child
                htmlString+='<table  width=98% id="mooringTbl">';
                htmlString+='<tr><td width="80%" style="font-size:18px" >' + document.getElementById("serviceItem").value + '</td>';
                htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlString+= "<td style='text-align:right'>" + document.getElementById("charge").value + "</td></tr>";  
                htmlString+='<tr><td  width="80%" style="font-size:14px;">' + document.getElementById("qty").value + " Qty - @ Rp. ";
                htmlString+= document.getElementById("rate").value;
                if (str.length>0) {
                  if (document.getElementById("grossTonSelect").value=="Up to 500" && 
                    document.getElementById("grossTon").innerHTML=="Up to 300") {
                      htmlString+=" Gross Ton: Up to 500 ";
                  }
                }
                if (document.getElementById("workingTime").style.visibility=="visible") {
                    htmlString+= " with Working Time at " + document.getElementById("workingTime").value + "  on  " +  document.getElementById("workingDay").value ;
                    htmlString+= " and rate factor is "  + document.getElementById("rateFactor").value ;
                }
            
                // htmlString+='</td><td id="tdServiceID">' + serviceID + '</td>'; // style="visibility:collapse"
                htmlString+='</td><td></td>';
                htmlString+='<td class="edit-and-delete-column">'; 
                htmlString+= '<div class="edit-and-delete-div"><button type="button" class="btn btn-default btn-sm" ><span class="glyphicon glyphicon-pencil"> Edit </span></button>';
                htmlString+='<button type="button" class="btn btn-default btn-sm btnDelete"><span class="glyphicon glyphicon-trash"> Delete </span></button>';
                htmlString+='</div></td></tr>';   //0 --htmlString
                htmlString+='</table>';
               
                htmlString+="<div id='" + serviceID + "Total'>"; 
                htmlString+='<table width=98% id="mooringTblTotal">';
                htmlString+='<tr><td width="80%" style="text-align:right" id="tdMooringCount">Mooring Charge Total: ( ' + iMoor + ' )</td>';
                htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlString+= "<td style='text-align:right' id='tdMooringTotal'>" + formatNumber(moorTotal) + "</td></tr></table></div>"; 
                htmlString+='</div></div></div>'; //end card-body, end card dan end floating-div
                countServiceItem=iMoor;
                newMooringAccess=false;
            } else {
                htmlString+='<tr><td width="80%" style="font-size:18px" >' + document.getElementById("serviceItem").value + '</td>';
                htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlString+= "<td style='text-align:right'>" + document.getElementById("charge").value + "</td></tr>";  
                htmlString+='<tr><td  width="80%" style="font-size:14px;">' + document.getElementById("qty").value + " Qty - @ Rp. ";
                htmlString+= document.getElementById("rate").value;
                if (str.length>0) {
                  if (document.getElementById("grossTonSelect").value=="Up to 500" && 
                     document.getElementById("grossTon").innerHTML=="Up to 300") {
                      htmlString+=" Gross Ton: Up to 500 ";
                  }
                }
                if (document.getElementById("workingTime").style.visibility=="visible") {
                    htmlString+= " with Working Time at " + document.getElementById("workingTime").value + "  on  " +  document.getElementById("workingDay").value ;
                    htmlString+= " and rate factor is "  + document.getElementById("rateFactor").value ;
                }
            
                // htmlString+='</td><td id="tdServiceID">' + serviceID + '</td>'; // style="visibility:collapse"
                htmlString+='</td><td></td>';
                htmlString+='<td class="edit-and-delete-column">'; 
                htmlString+= '<div class="edit-and-delete-div"><button type="button" class="btn btn-default btn-sm" ><span class="glyphicon glyphicon-pencil"> Edit </span></button>';
                htmlString+='<button type="button" class="btn btn-default btn-sm btnDelete"><span class="glyphicon glyphicon-trash"> Delete </span></button>';
                htmlString+='</div></td></tr>';   //0 --htmlString
                htmlTotalString+='<table width=98% id="mooringTblTotal">';
                htmlTotalString+='<tr><td width="80%" style="text-align:right" id="tdMooringCount" >Mooring Charge Total: ( ' + iMoor + ' )</td>';
                htmlTotalString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlTotalString+= "<td style='text-align:right' id='tdMooringTotal'>" + formatNumber(moorTotal) + "</td></tr></table>"; 
                countServiceItem=iMoor;
            }
            break;
        case "dbr":
            iDbr++;
            dbrTotal+=unformatNumber(document.getElementById("charge").value);
            if ( newDbrAccess==true) {
                htmlString+='<div id="dbr-div">'
                htmlString+='<div class="card">';  //begin floating card child
              
                htmlString+='<div class="card-header">';
                htmlString+='<h4 id="title">DOCK BLOCK REMOVAL</h4>';
                htmlString+='</div>';
              
                htmlString+='<div class="card-body">'; //begin dbr card-body child
                htmlString+='<table  width=98% id="dbrTbl">';
                htmlString+='<tr><td width="80%" style="font-size:18px" >' + document.getElementById("serviceItem").value + '</td>';
                htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlString+= "<td style='text-align:right'>" + document.getElementById("charge").value + "</td></tr>";  
                htmlString+='<tr><td  width="80%" style="font-size:14px;">' + document.getElementById("qty").value + " Qty - @ Rp. ";
                htmlString+= document.getElementById("rate").value;
                if (document.getElementById("workingTime").style.visibility=="visible") {
                  htmlString+= " with Working Time at " + document.getElementById("workingTime").value + "  on  " +  document.getElementById("workingDay").value ;
                  htmlString+= " and rate factor is "  + document.getElementById("rateFactor").value ;
                }
                htmlString+='</td><td></td>';
                htmlString+='<td class="edit-and-delete-column">'; 
                htmlString+= '<div class="edit-and-delete-div"><button type="button" class="btn btn-default btn-sm" ><span class="glyphicon glyphicon-pencil"> Edit </span></button>';
                htmlString+='<button type="button" class="btn btn-default btn-sm btnDelete"><span class="glyphicon glyphicon-trash"> Delete </span></button>';
                htmlString+='</div></td></tr>';   //0 --htmlString
                htmlString+='</table>';
                
                htmlString+="<div id='" + serviceID + "Total'>"; 
                htmlString+='<table width=98% id="dbrTblTotal">';
                htmlString+='<tr><td width="80%" style="text-align:right" id="tdDbrCount">Dock Block Removal Charge Total: ( ' + iDbr + ' )</td>';
                htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlString+= "<td style='text-align:right' id='tdDbrTotal'>" + formatNumber(dbrTotal) + "</td></tr></table></div>"; 
                htmlString+='</div></div></div>'; //end card-body, end card dan end floating-div
                countServiceItem=iDbr;
                newDbrAccess=false;
            } else {
                htmlString+='<tr><td width="80%" style="font-size:18px" >' + document.getElementById("serviceItem").value + '</td>';
                htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlString+= "<td style='text-align:right'>" + document.getElementById("charge").value + "</td></tr>";  
                htmlString+='<tr><td  width="80%" style="font-size:14px;">' + document.getElementById("qty").value + " Qty - @ Rp. ";
                htmlString+= document.getElementById("rate").value;
                
                if (document.getElementById("workingTime").style.visibility=="visible") {
                    htmlString+= " with Working Time at " + document.getElementById("workingTime").value + "  on  " +  document.getElementById("workingDay").value ;
                    htmlString+= " and rate factor is "  + document.getElementById("rateFactor").value ;
                }
            
                // htmlString+='</td><td id="tdServiceID">' + serviceID + '</td>'; // style="visibility:collapse"
                htmlString+='</td><td></td>';
                htmlString+='<td class="edit-and-delete-column">'; 
                htmlString+= '<div class="edit-and-delete-div"><button type="button" class="btn btn-default btn-sm" ><span class="glyphicon glyphicon-pencil"> Edit </span></button>';
                htmlString+='<button type="button" class="btn btn-default btn-sm btnDelete"><span class="glyphicon glyphicon-trash"> Delete </span></button>';
                htmlString+='</div></td></tr>';   //0 --htmlString
                htmlTotalString+='<table width=98% id="dbrTblTotal">';
                htmlTotalString+='<tr><td width="80%" style="text-align:right" id="tdDbrCount" >Dock Block Removal Charge Total: ( ' + iDbr + ' )</td>';
                htmlTotalString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlTotalString+= "<td style='text-align:right' id='tdDbrTotal'>" + formatNumber(dbrTotal) + "</td></tr></table>"; 
                countServiceItem=iDbr;
            }
            break;
        case "bafc":
          iBafc++;
          bafcTotal+=unformatNumber(document.getElementById("charge").value);
          if ( newBafcAccess==true) {
              htmlString+='<div id="bafc-div">'
              htmlString+='<div class="card">';  //begin floating card child
              if (str.indexOf("TUG BOAT AND CRANES HIRE")==-1) {
                  titleA="TUG BOAT AND CRANES HIRE";
                  // title="title;
                  htmlString+='<div class="card-header">';
                  htmlString+='<h4 id="title">' + titleA + '</h4>';
                  htmlString+='</div>';
                  htmlString+='<div class="card-header">';
                  htmlString+='<h4 id="title">' + title + '</h4>';
                  htmlString+='</div>';
              }
              // } else {
              //     str1=document.getElementById("bafc-div").innerHTML;
              //     if (str.indexOf("b. ")==-1) {
              //       title="b. " + title;
              //       htmlString+='<div class="card-header">';
              //       htmlString+='<h4 id="title">' + title + '</h4>';
              //       htmlString+='</div>';
              //     }
              //     if (str.indexOf("b. ")!=-1 && str.indexOf("c. ")==-1) {
              //         title="c. " + title;
              //         htmlString+='<div class="card-header">';
              //         htmlString+='<h4 id="title">' + title + '</h4>';
              //         htmlString+='</div>';
              //     }
              // }
              
            
              htmlString+='<div class="card-body">'; //begin dbr card-body child
              htmlString+='<table  width=98% id="bafcTbl">';
              htmlString+='<tr><td width="80%" style="font-size:18px" >' + document.getElementById("serviceItem").value + '</td>';
              htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
              htmlString+= "<td style='text-align:right'>" + document.getElementById("charge").value + "</td></tr>";  
              htmlString+='<tr><td  width="80%" style="font-size:14px;">' + document.getElementById("qty").value + " Qty - @ Rp. ";
              htmlString+= document.getElementById("rate").value;
              if (document.getElementById("workingTime").style.visibility=="visible") {
                htmlString+= " with Working Time at " + document.getElementById("workingTime").value + "  on  " +  document.getElementById("workingDay").value ;
                htmlString+= " and rate factor is "  + document.getElementById("rateFactor").value ;
              }
              htmlString+='</td><td></td>';
              htmlString+='<td class="edit-and-delete-column">'; 
              htmlString+= '<div class="edit-and-delete-div"><button type="button" class="btn btn-default btn-sm" ><span class="glyphicon glyphicon-pencil"> Edit </span></button>';
              htmlString+='<button type="button" class="btn btn-default btn-sm btnDelete"><span class="glyphicon glyphicon-trash"> Delete </span></button>';
              htmlString+='</div></td></tr>';   //0 --htmlString
              htmlString+='</table>';
              
              htmlString+="<div id='" + serviceID + "Total'>"; 
              htmlString+='<table width=98% id="bafcTblTotal">';
              htmlString+='<tr><td width="80%" style="text-align:right" id="tdBafcCount">Boat and Floating Crane Rental Charge Total: ( ' + iBafc + ' )</td>';
              htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
              htmlString+= "<td style='text-align:right' id='tdBafcTotal'>" + formatNumber(bafcTotal) + "</td></tr></table></div>"; 
              htmlString+='</div></div></div>'; //end card-body, end card dan end floating-div
              countServiceItem=iBafc;
              newBafcAccess=false;
          } else {
              htmlString+='<tr><td width="80%" style="font-size:18px" >' + document.getElementById("serviceItem").value + '</td>';
              htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
              htmlString+= "<td style='text-align:right'>" + document.getElementById("charge").value + "</td></tr>";  
              htmlString+='<tr><td  width="80%" style="font-size:14px;">' + document.getElementById("qty").value + " Qty - @ Rp. ";
              htmlString+= document.getElementById("rate").value;
              
              if (document.getElementById("workingTime").style.visibility=="visible") {
                  htmlString+= " with Working Time at " + document.getElementById("workingTime").value + "  on  " +  document.getElementById("workingDay").value ;
                  htmlString+= " and rate factor is "  + document.getElementById("rateFactor").value ;
              }
          
              // htmlString+='</td><td id="tdServiceID">' + serviceID + '</td>'; // style="visibility:collapse"
              htmlString+='</td><td></td>';
              htmlString+='<td class="edit-and-delete-column">'; 
              htmlString+= '<div class="edit-and-delete-div"><button type="button" class="btn btn-default btn-sm" ><span class="glyphicon glyphicon-pencil"> Edit </span></button>';
              htmlString+='<button type="button" class="btn btn-default btn-sm btnDelete"><span class="glyphicon glyphicon-trash"> Delete </span></button>';
              htmlString+='</div></td></tr>';   //0 --htmlString
              htmlTotalString+='<table width=98% id="bafcTblTotal">';
              htmlTotalString+='<tr><td width="80%" style="text-align:right" id="tdBafcCount" >Boat and Floating Crane Rental Charge Total: ( ' + iBafc + ' )</td>';
              htmlTotalString+="<td size='1'  style='text-align:right'>Rp. </td>"
              htmlTotalString+= "<td style='text-align:right' id='tdBafcTotal'>" + formatNumber(bafcTotal) + "</td></tr></table>"; 
              countServiceItem=iBafc;
          }
          break;
  
     }
     
      // htmlString+='<table  width=98% id="tblServiceItemsData">';
  
     
      htmlString+="|";
      htmlString+=  htmlTotalString;     //1 ----htmlTotalString
      htmlString+='</table>';
      htmlString+="|" ;
      grandTotal+=parseFloat(unformatNumber(document.getElementById("charge").value));
      // htmlString+="<div id='grandTotal'>";
      htmlString+='<table width=98% id="tblGrandTotal">';
      htmlString+='<tr><td width="80%" style="text-align:right" ><b>Grand Total</b></td>';
      htmlString+="<td size='1'  style='text-align:right'><b>Rp. </b></td>"
      htmlString+="<td style='text-align:right' id='tdGrandTotal'><b>" + formatNumber(grandTotal) + "</b></td></tr></table>";
      // htmlString+='</div>';  //end grand total  -- 2 ---GrandTotal e

      htmlString+= "|" + countServiceItem;   //--3 --- jumlah Service yang tercetak
      // htmlString+= "|" + htmlSpecialTitleString;
  }
 
//  console.log(htmlString);
     
  return htmlString;

}


function setRate(serviceID) {
  // console.log("SI=" + serviceID);
  let grossTonIdx=document.getElementById("grossTonSelect").selectedIndex
  let serviceItemIdx=document.getElementById("serviceItem").selectedIndex
  var rowTblIdx=0;
  $.ajax({
    url:'src_data.json',
    dataType:'json',
    type:'get',
    cache: false,
    success: function(data) {
      switch (serviceID) {
          case "dockage":
              switch (serviceItemIdx) {
                case 0:
                  document.getElementById("rate").value=formatNumber(data.DockageData[grossTonIdx].docking);
                  document.getElementById("rate").setAttribute('readonly', true);
                  document.getElementById("rate").style.backgroundColor="white";
                  break;
                case 1:
                  document.getElementById("rate").value=formatNumber(data.DockageData[grossTonIdx].rate);
                  document.getElementById("rate").setAttribute('readonly', true);
                  document.getElementById("rate").style.backgroundColor="white";
                  break;
                case 2:
                  document.getElementById("rate").value=formatNumber(data.DockageData[grossTonIdx].tugboat);
                  document.getElementById("rate").setAttribute('readonly', true);
                  document.getElementById("rate").style.backgroundColor="white";
                  break;
                 
                default:
                  document.getElementById("rate").value="";
                  // document.getElementById("rate").setAttribute('readonly', false);
                  document.getElementById("rate").removeAttribute("readonly");
                  document.getElementById("rate").style.backgroundColor="yellow";
                  // htmlString+="<td><input type='text' id='rate' name='rate' value='" + 
                  //               formatNumber(srcData.DockageData[j].docking) + "' size='10' readonly> </td></tr>";
        
                  break;
              }
           
              break;
          case "floating":
            console.log(grossTonIdx);
              switch (serviceItemIdx) {
                  case 0:
                      document.getElementById("rate").value=formatNumber(data.FloatingData[grossTonIdx].rate);
                      document.getElementById("rate").setAttribute('readonly', true);
                      document.getElementById("rate").style.backgroundColor="white";
                      break;
                 
                  default:
                      document.getElementById("rate").value="";
                      document.getElementById("rate").removeAttribute("readonly");
                      document.getElementById("rate").style.backgroundColor="yellow";
              }
              break;
          case "mooring":
            // console.log(grossTonIdx);
              switch (serviceItemIdx) {
                  case 0:
                      document.getElementById("rate").value=formatNumber(data.FloatingData[grossTonIdx].mooring_rate);
                      document.getElementById("rate").setAttribute('readonly', true);
                      document.getElementById("rate").style.backgroundColor="white";
                      break;
                  case 1:
                      document.getElementById("rate").value=formatNumber(data.FloatingData[grossTonIdx].mooring_tugboat);
                      document.getElementById("rate").setAttribute('readonly', true);
                      document.getElementById("rate").style.backgroundColor="white";
                      break;
                  default:
                      document.getElementById("rate").value="";
                      document.getElementById("rate").removeAttribute("readonly");
                      document.getElementById("rate").style.backgroundColor="yellow";
              }
              break; 
          case "dbr":
              document.getElementById("rate").value=formatNumber(data.dock_block_removal[serviceItemIdx].rate);
              document.getElementById("rate").setAttribute('readonly', true);
              document.getElementById("rate").style.backgroundColor="white";
              break;
          case "bafc":
              rowTblIdx=serviceItemIdx*8;
              console.log(document.getElementById("workingDay").value);
              console.log(document.getElementById("workingTime").value);
              for (let i=rowTblIdx; i<rowTblIdx+8; i++ ) {
                  console.log(data.boat_and_floating_crane[i].working_day);
                  console.log(data.boat_and_floating_crane[i].working_time);
                  if (document.getElementById("workingDay").value==data.boat_and_floating_crane[i].working_day 
                    && document.getElementById("workingTime").value==data.boat_and_floating_crane[i].working_time) {
                      document.getElementById("rateFactor").value=data.boat_and_floating_crane[i].rate_factor + "%";
                      document.getElementById("rate").value=formatNumber(data.boat_and_floating_crane[i].rate);
                      i=rowTblIdx+8;
                  }
              }
              
              document.getElementById("rate").setAttribute('readonly', true);
              document.getElementById("rate").style.backgroundColor="white";
              break;


      }
     
      calculate();
    }
  })
  
  // document.getElementById("charge").value=calculate();
}

function SomeDeleteRowFunction(btndel) {
  if (typeof(btndel) == "object") {
      var deleteRate=unformatNumber($(btndel).closest('table').find('#charge').text());
      alert($(btndel).closest('table').find('#charge').text());
      dckgTotal-=deleteRate;
      grandTotal-=deleteRate;
      console.log( dckgTotal );
      console.log(grandTotal);
      console.log($(btndel).closest('table').rowIndex);
      $(btndel).closest("table").remove();
  } else {
      return false;
  }
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
  document.querySelector(".popup-login .form").innerHTML=htmlString;
  return htmlString;
}

function demoFromHTML() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    source = $('#container')[0];
    console.log("masuk pak Eko");
    // we support special element handlers. Register them with jQuery-style 
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors 
    // (class, of compound) at this time.
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '.edit-and-delete-div': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    };
    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
        source, // HTML string or DOM elem ref.
        margins.left, // x coord
        margins.top, { // y coord
            'width': margins.width, // max width of content on PDF
            'elementHandlers': specialElementHandlers
        },

        function (dispose) {
            // dispose: object with X, Y of the last line add to the PDF 
            //          this allow the insertion of new lines after html
            pdf.save('Test.pdf');
        }, margins
    );
}


function generatePDF() {

    // Choose the element that our invoice is rendered in.
    const element = document.getElementById("card");

    // clone the element
    var clonedElement = element.cloneNode(true);

    // change display of cloned element 
    $(clonedElement).css("display", "block");

    // Choose the clonedElement and save the PDF for our user.
    html2pdf(clonedElement);

    // remove cloned element
    clonedElement.remove();
}