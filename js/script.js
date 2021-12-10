
var iDckg=0;
var iFloat=0;
var iMoor=0;
var dckgTotal=0;
var totalFloat=0;
var totalMoor=0;
var grandTotal=0;
var selectedData="Up to 300/Docking & Undocking/warship";
var title="";
var serviceID="dockage";
var newDockageAccess=true;
var newFloatingAccess=true;
var newMooringAccess=true;
var newServiceAccess=true;
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
    }
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
  // let serviceItem;
  // console.log(srcData);
  grossTon=selectedData.split("/")[0];
  serviceItem=selectedData.split("/")[1];
  typeOfVessel=selectedData.split("/")[2];
  var j=0
  var htmlGrossTonString="";
  var htmlServiceDataString="";
  var htmlRateString="";
  htmlGrossTonString+='<table width=98% id="tblServiceItem">';
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
      
        htmlGrossTonString+="</select></td></tr>";
        htmlRateString+="<td><input type='text' id='rate' name='rate' value='" + 
            formatNumber(srcData.DockageData[j].docking) + "' size='10' readonly onchange='return calculate();'> </td></tr>";
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
        var str=document.getElementById("container").outerHTML
        if (str.indexOf("FLOATING CHARGE")==-1) {
            titleA="FLOATING CHARGE IN SHIPYARD AREA";
            title="a. " + title;
        } else {
            title="b. " + title;
        }
        if (grossTon=="Up to 300" || grossTon=="301 - 500") {
            grossTon="Up to 500";
        }
        htmlGrossTonString+='<select name="grossTonSelect" id="grossTonSelect" onchange="return setRate(\'floating\');">';
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
      
        htmlGrossTonString+="</select></td></tr>";
        htmlRateString+="<td><input type='text' id='rate' name='rate' value='" + 
        formatNumber(srcData.FloatingData[j].rate) + "' size='10' readonly onchange='return calculate();'> </td></tr>";
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
        htmlServiceDataString+=htmlStr.split("|")[2];

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

  htmlString+="<tr><td colspan='2'><input type='checkbox' id='serviceItemCheckBox' name='serviceItemCheckBox' value ='no' onclick='showHideField()'>";
  htmlString+='<label for="workingTime">Working Time</label></td>';
  htmlString+='<td style="visibility:collapse">' + overtimeCmb("t","dckgDocking") + overtimeCmb("d","dckgDocking") +'</td></tr>';
  
  htmlString+='<tr><td colspan="2"><label for="rateFactor">Rate Factor</label></td>';
  htmlString+="<td><input type='text' id='rateFactor' name='rateFactor' value='100%' size='4' readonly> </td></tr>";
  htmlString+='<tr><td><label for="charge">Charge</label></td>';
  htmlString+='<td align="right" width="2%"><label for="rateUnit">Rp.</label></td>';
  htmlString+="<td><input type='text' id='charge' name='charge' value='" + formatNumber(srcData.DockageData[j].docking) + "' size='10' readonly> </td></tr>";
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
          str=document.getElementById("container").outerHTML;

          if (str.indexOf("card-footer")==-1) {
              newAccess=true;
              newServiceAccess=false;
              htmlString=proceedClick(serviceID,newAccess);
              document.getElementById("container").innerHTML=htmlString.split("|")[0];
              document.getElementById("button-panel").innerHTML=htmlString.split("|")[1];;
          } else {
              newAccess=false;
              // document.querySelector("#container .card-footer").insertAdjacentHTML("beforebegin", proceedClick(newAccess)); 
              str=proceedClick(serviceID,newAccess);
              if ( parseInt(str.split("|")[3])==1) {
                  newServiceAccess=true;
              } else {
                  newServiceAccess=false;
              }
              console.log("newService Access=" + newServiceAccess + "=======" + parseInt(str.split("|")[3]));
    
              if (newServiceAccess==true) {
                  // if (serviceID=="floating") { 
                  //   document.querySelector("#container #grandTotal").insertAdjacentHTML("beforebegin", str.split("|")[4]);
                  // }
                  document.querySelector("#container #grandTotal").insertAdjacentHTML("beforebegin", str.split("|")[0]);    //new service item
                  document.querySelector("#container #grandTotal").insertAdjacentHTML("beforebegin", str.split("|")[1]);   //service Total 
                  newServiceAccess=false;
              } else {
                  if (serviceID=="dockage") {
  
                      document.getElementById("dockageTotal").insertAdjacentHTML("beforebegin", str.split("|")[0]);
                      document.getElementById("dockageTotal").innerHTML="";
                      document.getElementById("dockageTotal").innerHTML=str.split("|")[1];
                  }
                  if (serviceID=="floating") { 
                    document.getElementById("floatingTotal").insertAdjacentHTML("beforebegin", str.split("|")[0]);
                    document.getElementById("floatingTotal").innerHTML="";
                      document.getElementById("floatingTotal").innerHTML=str.split("|")[1];
                  }
                  if (serviceID=="mooring") { 
                    document.getElementById("mooringTotal").insertAdjacentHTML("beforebegin", str.split("|")[0]);
                    document.getElementById("mooringTotal").innerHTML="";
                    document.getElementById("mooringTotal").innerHTML=str.split("|")[1];
                 }
              
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
            
            $("#tblServiceItemsData").on('click','.btnDelete',function(){
                var deleteRate=parseFloat(unformatNumber($(this).closest('table').find('#charge').text()));
                console.log($(this).closest('tr').index());
                var serviceID=$(this).closest('tr').find('#tdServiceID').text();
                console.log(newCount);
                console.log(deleteRate);
                console.log(serviceID);
                if (newCount) {
                   switch (serviceID) {
                        case "dockage":
                            console.log($(this).closest('.card-body').find("#tdDockageTotal").text());
                            dckgTotal=unformatNumber($(this).closest('.card-body').find("#tdDockageTotal").text());
                            // console.log(document.getElementById("tdDockageTotal").outerHTML);
                            dckgTotal-=deleteRate;
                            document.getElementById("tdDockageTotal").innerHTML=formatNumber(dckgTotal);
                            // console.log("dckgTotal=" + dckgTotal);
                            console.log($(this).closest('.card-body').find("#tdDockageCount").text());
                            console.log($(this).closest('.card-body').find("#tdDockageCount").text().split(" ")[4]);
                            iDckg=parseInt($(this).closest('.card-body').find("#tdDockageCount").text().split(" ")[4]) - 1;
                            // var iDckgx=document.getElementById("tdDockageCount").outerHTML;
                            // console.log("iDckgX=" + iDckgx);
                            document.getElementById("tdDockageCount").innerHTML= 'Dockage Charge Total: ( ' + iDckg.toString() + ' )';
                            break;
                        case "floating":
                            break;
                        case "mooring":
                            break;
                    }
                    console.log($(this).closest('.card-body').find("#tdGrandTotal").text());
                    grandTotal=unformatNumber($(this).closest('.card-body').find("#tdGrandTotal").text());
                    grandTotal-=deleteRate;
                    // // console.log( dckgTotal );
                    // console.log(grandTotal);
                    document.getElementById("tdGrandTotal").innerHTML=formatNumber(grandTotal);
                    newCount=false;
                }
                $(this).closest('table').remove();
                // newCount=true;
          });
           
      });
            
    });
  });  
  newCount=true;
  // console.log(htmlString);
  return 0;
}

function mooring(grossTon,srcData,serviceItem) {
    var j=0
    var htmlGrossTonString="";
    var htmlServiceDataString="";
    var htmlRateString=""; 
    title="For Mooring and Unmooring Operation";
    var str=document.getElementById("container").outerHTML
    if (str.indexOf("FLOATING CHARGE")==-1) {
        titleA="FLOATING CHARGE IN SHIPYARD AREA";
        title="a. " + title;
    } else {
        title="b. " + title;
    }
    if (grossTon=="Up to 300" || grossTon=="301 - 500") {
        grossTon="Up to 500";
    }
    htmlGrossTonString+='<select name="grossTonSelect" id="grossTonSelect" onchange="return setRate(\'mooring\');">';
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

    htmlGrossTonString+="</select></td></tr>";
    htmlRateString+="<td><input type='text' id='rate' name='rate' value='" + 
    formatNumber(srcData.FloatingData[j].mooring_rate) + "' size='10' readonly onchange='return calculate();'> </td></tr>";  //umpan pertama
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
    return htmlGrossTonString + "|" + htmlRateString + "|" + htmlServiceDataString;
}

function proceedClick(serviceID,newAccess) {
  let htmlString="";
  let htmlTotalString="";
  let htmlButtonString="";
  let htmlGrandTotalString="";
  let htmlSpecialTitleString="";
  let countServiceItem=0;
  var str=document.getElementById("container").outerHTML;
  if (newAccess==true) {
     
      htmlString+='<div class="card">';
      htmlString+='<table  width=50% id="tblStaticData">';
      htmlString+="<tr><td>Gross Ton or Displacement</td><td size='1'>:</td>"; 
      htmlString+='<td width="50%" style="text-align:left;">' + document.getElementById("grossTonSelect").value + "</td></tr>";
      htmlString+="<tr><td>Type of Vessel</td><td size='1'>:</td>";
      htmlString+='<td width="50%" style="text-align:left;">' + document.getElementById("typeOfVessel").value + "</td></tr>";
      htmlString+='</table>';
      if ( serviceID=="floating" || serviceID=="mooring") {
          htmlString+='<div class="card-header">';
          htmlString+='<h4 id="title">FLOATING CHARGE IN SHIPYARD AREA</h4>';
          htmlString+='</div>';
      }
      htmlString+='<div class="card-header">';
      htmlString+='<h4 id="title">' + title + '</h4>';
      htmlString+='</div>';
      htmlString+='<div class="card-body">';
      
      htmlString+='<table width=98% id="tblServiceItemsData">';
      htmlString+='<tr><td width="80%" style="font-size:18px" >' + document.getElementById("serviceItem").value + '</td>';
      htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
      htmlString+= "<td style='text-align:right' id='charge'>" + document.getElementById("charge").value + "</td></tr>";  
      htmlString+='<tr><td width="80%" style="font-size:14px;">' + document.getElementById("qty").value + " Qty - @ Rp. ";
      htmlString+= document.getElementById("rate").value;
      if (document.getElementById("workingTime").style.visibility=="visible") {
          htmlString+= " with Working Time at " + document.getElementById("workingTime").value + "  on  " +  document.getElementById("workingDay").value ;
          htmlString+= " and rate factor is "  + document.getElementById("rateFactor").value ;
      }
      htmlString+='</td><td id="tdServiceID">' + serviceID + '</td>'; // style="visibility:collapse"
      htmlString+='<td class="edit-and-delete-column">'; 
      htmlString+= '<div class="edit-and-delete-div"><button type="button" class="btn btn-default btn-sm" ><span class="glyphicon glyphicon-pencil"> Edit </span></button>';
      htmlString+='<button type="button" class="btn btn-default btn-sm btnDelete"><span class="glyphicon glyphicon-trash"> Delete </span></button>';
      htmlString+='</div></td></tr></table>';
      htmlString+="<div id='" + serviceID + "Total'>";
      htmlString+='<table width=98% id=' + serviceID + 'TblTotal">';
     
      // console.log(serviceID);
      switch (serviceID) {
          case "dockage":
              iDckg++;
              htmlString+='<tr><td width="80%" style="text-align:right" id="tdDockageCount">Dockage Charge Total: ( ' + iDckg + ' )</td>';
              htmlString+="<td size='1'  style='text-align:right'>Rp. </td>";
              dckgTotal+=unformatNumber(document.getElementById("charge").value);  
              htmlString+= "<td style='text-align:right'  id='tdDockageTotal'>" + document.getElementById("charge").value + "</td></tr>"; 
              
              break; 
          case "floating":
              iFloat++;
            
              htmlString+='<tr><td width="80%" style="text-align:right" id="tdFloatingCount">Floating Charge Total: ( ' + iFloat + ' )</td>';
              totalFloat+=unformatNumber(document.getElementById("charge").value);  
              htmlString+= "<td style='text-align:right' id='tdFloatingTotal'>" + formatNumber(totalFloat) + "</td></tr>";  
              break;
          case "mooring":
              iMoor++;
            
              htmlString+='<tr><td width="80%" style="text-align:right" id="tdMooringCount">Mooring Charge Total: ( ' + iMoor + ' )</td>';
              totalMoor+=unformatNumber(document.getElementById("charge").value);  
              htmlString+= "<td style='text-align:right' id='tdMooringTotal'>" + formatNumber(totalMoor) + "</td></tr>";  
              break;
     }
     
      htmlString+='</table>';
      htmlString+="</div>"; ///end div service Total
      htmlString+="<div id='grandTotal'>";
      htmlString+='<table width=98% id="tblGrandTotal">';
      htmlString+='<tr><td width="80%" style="text-align:right" ><b>Grand Total</b></td>';
      htmlString+="<td size='1'  style='text-align:right'>Rp. </td>";
      grandTotal+=parseFloat(unformatNumber(document.getElementById("charge").value));  
      htmlString+="<td style='text-align:right' id='tdGrandTotal'><b>" + document.getElementById("charge").value + "</b></td></tr></table>";
      htmlString+='</div>';  //end grand total
      htmlString+='</div>';  //end card-body   
      newServiceItemAccess=false;   
     
      htmlString+='<div class="card-footer">';
      // htmlString+='<button type="button" id= "dckgDeleteBtn" class="btn btn-warning float-right">Delete</button>';
      htmlButtonString+='<div class="d-grid gap-2 d-md-flex justify-content-md-end">';
      htmlButtonString+='<button type="button" id= "addBtn" class="btn btn-success  me-md-2 float-right"><span class="glyphicon glyphicon-plus"  aria-hidden="true"> Add </span></button>';
      htmlButtonString+='<button type="button" id="saveBtn" class="btn btn-info me-md-2 float-right"><span class="glyphicon glyphicon-floppy-saved"  aria-hidden="true"> Save </span></button>';
      htmlButtonString+='<button type="button" id="savePrintBtn" class="btn btn-info me-md-2 float-right"><span class="glyphicon glyphicon-print"  aria-hidden="true"> Save & Print </span></button>';
     
      // htmlString+='<button type="button" id= "dckgEditBtn" class="btn btn-info float-right" disabled>Edit</button>';
      htmlString+='</div>';  //end-card-footers
      htmlString+='</div>';  //end-card
      switch(serviceID) {
        case "dockage":
            newDockageAccess=false;
            break;
        case "floating":
            newFloatingAccess=false;
            break;
        case "mooring":
            newMooringAccess=false;
            break;
      }
      htmlString+="|" + htmlButtonString;
  } else {
    //  htmlTotalString+="<div id='" + serviceID + "Total'>";
    //  htmlTotalString+="<table width='98%' id='" + serviceID + "TblTotal'>";
     switch (serviceID) {
        case "dockage":
            iDckg++;
            dckgTotal+=unformatNumber(document.getElementById("charge").value);
            if ( newDockageAccess==true) {
              htmlString+='<div class="card-header">';
              htmlString+='<h4 id="title">' + title + '</h4>';
              htmlString+='</div>';
              // htmlString+='<div class="card-body">';
              newDockageAccess=false;
              htmlTotalString+="<div id='dockageTotal'>";
              htmlTotalString+='<table width=98% id="dockageTblTotal">';
              htmlTotalString+='<tr><td width="80%" style="text-align:right" id="tdDockageCount">Dockage Charge Total: ( ' + iDckg + ' )</td>';
              htmlTotalString+="<td size='1'  style='text-align:right'>Rp. </td>"
              htmlTotalString+= "<td style='text-align:right'  id='tdDockageTotal'>" + formatNumber(dckgTotal) + "</td></tr></table></div>"; //dengan div total baru
              countServiceItem=iDckg;
            } else {
             
              htmlTotalString+='<table width=98% id="dockageTblTotal">';
              htmlTotalString+='<tr><td width="80%" style="text-align:right" id="tdDockageCount">Dockage Charge Total: ( ' + iDckg + ' )</td>';
              htmlTotalString+="<td size='1'  style='text-align:right'>Rp. </td>"
              htmlTotalString+= "<td style='text-align:right'  id='tdDockageTotal'>" + formatNumber(dckgTotal) + "</td></tr></table>";  //tanpa div
              countServiceItem=iDckg;
            }
            break;
        case "floating":
            iFloat++;
            totalFloat+=unformatNumber(document.getElementById("charge").value);
            if ( newFloatingAccess==true ) {
                if (str.indexOf("FLOATING CHARGE")==-1) {          
                    htmlString+='<div class="card-header">';
                    htmlString+='<h4 id="title">FLOATING CHARGE IN SHIPYARD AREA</h4>';
                    htmlString+='</div>';
                }
                htmlString+='<div class="card-header">';
                htmlString+='<h4 id="title">' + title + '</h4>';
                htmlString+='</div>';
                // htmlString+='<div class="card-body">';
                htmlTotalString+="<div id='floatingTotal'>"; 
                htmlTotalString+='<table width=98% id="floatingTblTotal">';
                htmlTotalString+='<tr><td width="80%" style="text-align:right" >Floating Charge Total: ( ' + iFloat + ' )</td>';
                htmlTotalString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlTotalString+= "<td style='text-align:right'>" + formatNumber(totalFloat) + "</td></tr></table></div>"; 
                countServiceItem=iFloat;
                newFloatingAccess=false;
            } else {
                htmlTotalString+='<table width=98% id="floatingTblTotal">';
                htmlTotalString+='<tr><td width="80%" style="text-align:right" >Floating Charge Total: ( ' + iFloat + ' )</td>';
                htmlTotalString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlTotalString+= "<td style='text-align:right'>" + formatNumber(totalFloat) + "</td></tr></table>"; 
                countServiceItem=iFloat;
            }
           
            break;
        case "mooring":
          iMoor++;
          totalMoor+=unformatNumber(document.getElementById("charge").value);
            if ( newMooringAccess==true) {
                if (str.indexOf("FLOATING CHARGE")==-1) {  
                    htmlString+='<div class="card-header">';
                    htmlString+='<h4 id="title">FLOATING CHARGE IN SHIPYARD AREA</h4>';
                    htmlString+='</div>';
                }
                htmlString+='<div class="card-header">';
                htmlString+='<h4 id="title">' + title + '</h4>';
                htmlString+='</div>';
                htmlString+="<div id='" + serviceID + "Total'>"; 
                htmlTotalString+='<table width=98% id="mooringTblTotal">';
                htmlTotalString+='<tr><td width="80%" style="text-align:right" >Mooring Charge Total: ( ' + iMoor + ' )</td>';
                htmlTotalString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlTotalString+= "<td style='text-align:right'>" + formatNumber(totalMoor) + "</td></tr></table></div>"; 
                countServiceItem=iMoor;
                newMooringAccess=false;
            } else {
                htmlTotalString+='<table width=98% id="mooringTblTotal">';
                htmlTotalString+='<tr><td width="80%" style="text-align:right" >Mooring Charge Total: ( ' + iMoor + ' )</td>';
                htmlTotalString+="<td size='1'  style='text-align:right'>Rp. </td>"
                htmlTotalString+= "<td style='text-align:right'>" + formatNumber(totalMoor) + "</td></tr></table>"; 
                countServiceItem=iMoor;
            }
           
           
            break;

     }
     
      htmlString+='<table  width=98% id="tblServiceItemsData">';
      htmlString+='<tr><td width="80%" style="font-size:18px" >' + document.getElementById("serviceItem").value + '</td>';
      htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
      htmlString+= "<td style='text-align:right'>" + document.getElementById("charge").value + "</td></tr>";  
      htmlString+='<tr><td  width="80%" style="font-size:14px;">' + document.getElementById("qty").value + " Qty - @ Rp. ";
      htmlString+= document.getElementById("rate").value;
      if (document.getElementById("workingTime").style.visibility=="visible") {
          htmlString+= " with Working Time at " + document.getElementById("workingTime").value + "  on  " +  document.getElementById("workingDay").value ;
          htmlString+= " and rate factor is "  + document.getElementById("rateFactor").value ;
      }
  
      htmlString+='</td><td id="tdServiceID">' + serviceID + '</td>'; // style="visibility:collapse"
      htmlString+='<td class="edit-and-delete-column">'; 
      htmlString+= '<div class="edit-and-delete-div"><button type="button" class="btn btn-default btn-sm" ><span class="glyphicon glyphicon-pencil"> Edit </span></button>';
      htmlString+='<button type="button" class="btn btn-default btn-sm btnDelete"><span class="glyphicon glyphicon-trash"> Delete </span></button>';
      htmlString+='</div></td></tr></table>';   //0 --htmlString
     
      htmlString+="|";
      htmlString+=  htmlTotalString;     //1 ----htmlTotalString
      htmlString+='</table>';
      htmlString+="|" ;
      grandTotal+=parseFloat(unformatNumber(document.getElementById("charge").value));
      // htmlString+="<div id='grandTotal'>";
      htmlString+='<table width=98% id="tblGrandTotal">';
      htmlString+='<tr><td width="80%" style="text-align:right" ><b>Grand Total</b></td>';
      htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
      htmlString+="<td style='text-align:right' id='tdGrandTotal'><b>" + formatNumber(grandTotal) + "</b></td></tr></table>";
      // htmlString+='</div>';  //end grand total  -- 2 ---GrandTotal
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
            console.log(grossTonIdx);
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

