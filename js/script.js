var iDckg=0;
var iFloat=0;
var totalDckg=0;
var totalFloat=0;
var grandTotal=0;
var selectedData="Up to 300/Docking & Undocking/warship";
var title="";
var serviceID="dockage";
var newDockageAccess=true;
var newFloatingAccess=true;
var newServiceAccess=true;

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
  console.log("serviceID=" + serviceID);
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
        
        title="a. For time spending shipyard areas, floating days to be charged (Excluded Port Authority wharfage charges)";

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
        console.log(htmlServiceDataString);
        for (let i=0; i<srcData.FloatingItemData.length;i++) {
            if (serviceItem==srcData.FloatingItemData[i].service_item) {
                htmlServiceDataString+= '<option value="' + srcData.FloatingItemData[i].service_item + '" selected>' + srcData.FloatingItemData[i].service_item + '</option>';
            } else {
                htmlServiceDataString+= '<option value="' + srcData.FloatingItemData[i].service_item + '">' + srcData.FloatingItemData[i].service_item + '</option>';
            }
          
        }
        htmlServiceDataString+="</select></td>";
        break;
}
  htmlString+='<div class="card">';
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
    $('#proceedBtn').click(function () {
          let str;
          let newAccess;
         
          $(document).ready(function(){
            $(".fullscreen-container").fadeOut(200);
          }); 
          document.querySelector(".popup").classList.remove("active");  
          // document.getElementById("container").insertAdjacentHTML("afterend",proceedClick());
          str=document.getElementById("container").outerHTML;

          if (str.indexOf("card-footer")==-1) {
              newAccess=true;
              newServiceAccess=false;
              document.getElementById("container").innerHTML=proceedClick(serviceID,newAccess);
          } else {
              newAccess=false;
              // document.querySelector("#container .card-footer").insertAdjacentHTML("beforebegin", proceedClick(newAccess)); 
              str=proceedClick(serviceID,newAccess);
              if ( parseInt(str.split("|")[3])>1) {
                  newServiceAccess=false;
              }
              // console.log("newService Access=" + newServiceAccess);
    
              if (newServiceAccess==true) {
                  document.querySelector("#container #grandTotal").insertAdjacentHTML("beforebegin", str.split("|")[0]); 
                  // document.querySelector("#container #grandTotal").insertAdjacentHTML("beforebegin", str.split("|")[1]); 
                  newServiceAccess=false;
              } else {
                  if (serviceID=="dockage") {
                      // document.querySelector("#container #dockageTotal").insertAdjacentHTML("beforebegin", str.split("|")[0]);
                      document.getElementById("dockageTotal").insertAdjacentHTML("beforebegin", str.split("|")[0]);
                      document.getElementById("dockageTotal").innerHTML=str.split("|")[1];
                  }
                  if (serviceID=="floating") { 
                     document.querySelector("#container #floatingTotal").insertAdjacentHTML("beforebegin", str.split("|")[0]);
                     document.getElementById("floatingTotal").innerHTML=str.split("|")[1];
                  }
              
              }
              document.getElementById("grandTotal").innerHTML= str.split("|")[2]; 
              // console.log("subtotal=" + str.split("|")[1]);
              
              // document.getElementById("card-footer").insertAdjacentHTML("beforebegin", proceedClick(newAccess));
            
          }
            
          $(document).ready(function(){
            $('#addBtn').click(function () {
              // console.log("clickADD");
              document.querySelector(".popup").classList.add("active");
              $(document).ready(function(){
                $(".fullscreen-container").fadeTo(200,1);
              });
            });
          });
            
    });
  });  
  
  // console.log(htmlString);
  return 0;
}

function proceedClick(serviceID,newAccess) {
  let htmlString="";
  let htmlTotalString="";
  let htmlGrandTotalString="";
  let countServiceItem=0;
  if (newAccess==true) {
     
      htmlString+='<div class="card">';
      htmlString+='<table  width=50% id="tblStaticData">';
      htmlString+="<tr><td>Gross Ton or Displacement</td><td size='1'>:</td>"; 
      htmlString+='<td width="50%" style="text-align:left;">' + document.getElementById("grossTonSelect").value + "</td></tr>";
      htmlString+="<tr><td>Type of Vessel</td><td size='1'>:</td>";
      htmlString+='<td width="50%" style="text-align:left;">' + document.getElementById("typeOfVessel").value + "</td></tr>";
      htmlString+='</table>';
     
      htmlString+='<div class="card-header">';
      htmlString+='<h4 id="title">' + title + '</h4>';
      htmlString+='</div>';
      htmlString+='<div class="card-body">';
      
      htmlString+='<table width=98% id="tblServiceItemsData">';
      htmlString+='<tr><td width="80%" style="font-size:18px" >' + document.getElementById("serviceItem").value + '</td>';
      htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
      htmlString+= "<td style='text-align:right'>" + document.getElementById("charge").value + "</td></tr>";  
      htmlString+='<tr><td colspan="3" width="80%" style="font-size:14px;">' + document.getElementById("qty").value + " Qty - @ Rp. ";
      htmlString+= document.getElementById("rate").value;
      if (document.getElementById("workingTime").style.visibility=="visible") {
          htmlString+= " with Working Time at " + document.getElementById("workingTime").value + "  on  " +  document.getElementById("workingDay").value ;
          htmlString+= " and rate factor is "  + document.getElementById("rateFactor").value ;
      }
      htmlString+='</table>';
      htmlString+="<div id='" + serviceID + "Total'>";
      htmlString+='<table width=98% id=' + serviceID + 'TblTotal">';
     
      // console.log(serviceID);
      switch (serviceID) {
          case "dockage":
              iDckg++;
              htmlString+='<tr><td width="80%" style="text-align:right" >Dockage Charge Total: ( ' + iDckg + ' )</td>';
              htmlString+="<td size='1'  style='text-align:right'>Rp. </td>";
              totalDckg+=unformatNumber(document.getElementById("charge").value);  
              htmlString+= "<td style='text-align:right'>" + document.getElementById("charge").value + "</td></tr>"; 
              
              break; 
          case "floating":
              iFloat++;
              htmlString+='<tr><td width="80%" style="text-align:right" >Floating Charge Total: ( ' + iFloat + ' )</td>';
              totalFlt+=unformatNumber(document.getElementById("charge").value);  
              htmlString+= "<td style='text-align:right'>" + formatNumber(totalFlt) + "</td></tr>";  
              break;
     }
     
      htmlString+='</table>';
      htmlString+="</div>"; ///end div service Total
      htmlString+="<div id='grandTotal'>";
      htmlString+='<table width=98% id="tblGrandTotal">';
      htmlString+='<tr><td width="80%" style="text-align:right" >Grand Total</td>';
      htmlString+="<td size='1'  style='text-align:right'>Rp. </td>";
      grandTotal+=parseFloat(unformatNumber(document.getElementById("charge").value));  
      htmlString+="<td style='text-align:right'>" + document.getElementById("charge").value + "</td></tr></table>";
      htmlString+='</div>';  //end grand total
      htmlString+='</div>';  //end card-body   
      newServiceItemAccess=false;   
     
      htmlString+='<div class="card-footer">';
      // htmlString+='<button type="button" id= "dckgDeleteBtn" class="btn btn-warning float-right">Delete</button>';
      htmlString+='<button type="button" id="saveBtn" class="btn btn-info float-right">Save</button>';
      htmlString+='<button type="button" id="savePrintBtn" class="btn btn-info float-right">Save & Print</button>';
      htmlString+='<button type="button" id= "addBtn" class="btn btn-success float-right">Add</button>';
      // htmlString+='<button type="button" id= "dckgEditBtn" class="btn btn-info float-right" disabled>Edit</button>';
      htmlString+='</div>';  //end-card-footers
      switch(serviceID) {
        case "dockage":
            newDockageAccess=false;
            break;
        case "floating":
            newFloatingAccess=false;
            break;
    }
  } else {
    
     switch (serviceID) {
        case "dockage":
            if ( newDockageAccess==true) {
              htmlString+='<div class="card-header">';
              htmlString+='<h4 id="title">' + title + '</h4>';
              htmlString+='</div>';
              htmlString+='<div class="card-body">';
              newDockageAccess=false;
            }
            iDckg++;
            totalDckg+=unformatNumber(document.getElementById("charge").value);
           
            htmlTotalString+='<table width=98% id="dockageTotal">';
            htmlTotalString+='<tr><td width="80%" style="text-align:right" >Dockage Charge Total: ( ' + iDckg + ' )</td>';
            htmlTotalString+="<td size='1'  style='text-align:right'>Rp. </td>"
            htmlTotalString+= "<td style='text-align:right'>" + formatNumber(totalDckg) + "</td></tr>"; 
            countServiceItem=iDckg;
            break;
        case "floating":
            if ( newFloatingAccess==true) {
              htmlString+='<div class="card-header">';
              htmlString+='<h4 id="title">' + title + '</h4>';
              htmlString+='</div>';
              htmlString+='<div class="card-body">';
              newFloatingAccess=false;
            }
            iFloat++;
            totalFloat+=unformatNumber(document.getElementById("charge").value);
            htmlTotalString+='<table width=98% id="floatingTotal">';
            htmlTotalString+='<tr><td width="80%" style="text-align:right" >Floating Charge Total: ( ' + iFloat + ' )</td>';
            htmlTotalString+="<td size='1'  style='text-align:right'>Rp. </td>"
            htmlTotalString+= "<td style='text-align:right'>" + formatNumber(totalFloat) + "</td></tr>"; 
            countServiceItem=iFloat;
            break;
     }

      htmlString+='<table  width=98% id="tblServiceItemsData">';
      htmlString+='<tr><td width="80%" style="font-size:18px" >' + document.getElementById("serviceItem").value + '</td>';
      htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
      htmlString+= "<td style='text-align:right'>" + document.getElementById("charge").value + "</td></tr>";  
      htmlString+='<tr><td colspan="3" width="80%" style="font-size:14px;">' + document.getElementById("qty").value + " Qty - @ Rp. ";
      htmlString+= document.getElementById("rate").value;
      if (document.getElementById("workingTime").style.visibility=="visible") {
          htmlString+= " with Working Time at " + document.getElementById("workingTime").value + "  on  " +  document.getElementById("workingDay").value ;
          htmlString+= " and rate factor is "  + document.getElementById("rateFactor").value ;
      }
      htmlString+= "</td>"; 
     
      htmlString+='</table>';
      htmlString+='</div>';  //end-card
      htmlString+="|";
      htmlString+=  htmlTotalString;   
      htmlString+='</table>';
      htmlString+="|" ;
      grandTotal+=parseFloat(unformatNumber(document.getElementById("charge").value));
      htmlString+="<div id='grandTotal'>";
      htmlString+='<table width=98% id="tblGrandTotal">';
      htmlString+='<tr><td width="80%" style="text-align:right" >Grand Total</td>';
      htmlString+="<td size='1'  style='text-align:right'>Rp. </td>"
      htmlString+="<td style='text-align:right'>" + formatNumber(grandTotal) + "</td></tr></table>";
      htmlString+='</div>';  //end grand total
      htmlString+= "|" + countServiceItem;

  }
 
  // 
     
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

