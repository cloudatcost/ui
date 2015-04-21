////////////////////////////////////////////////////////////////////
////////
//////// Global Variables
////////
////////////////////////////////////////////////////////////////////

//////////// OS CSS Dropbox Holder
var AvailOS
//////////// Modal green/red colors
var HEADcolor = "#62c462";
var DANGcolor = "#d9534f";

//////////////////////////////////
$(document).ready(function() {
	$('[rel="popover"]').popover();
});
////////////////////////////////////////////////////////////////////
////////
//////// Reverse DNS / Hostname
////////
////////////////////////////////////////////////////////////////////

//// Reverse DNS / Hostname Modal Window
function RDNS(ID, Nam, P){
	var TIT = '<i class="fa fa-exchange fa-2x"></i>&nbsp;&nbsp;<font size="4">Reverse DNS</font>';
	var BOD = '<table cellpadding="1" cellspacing="2" width="100%"><tbody><tr><td width="120" align="right">Current Domain:</td><td><a href="http://'+Nam+'" target="_blank">'+Nam+'</a></td></tr><tr><td width="120" align="right">Change To:</td><td><input class="form-control" type="text" placeholder="New Domain Name" id="inputRDNS"></td></tr></tbody></table><br><br><br>';
	var Btn="<button type='button' class='btn btn-success' id='editnameBTN' onclick='RDNSdbCONFIRM("+ID+", \""+P+"\");'>Continue</button>&nbsp;<button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button>";
	LoadModal(TIT, BOD, Btn);
}
//////// Reverse DNS / Hostname Continue to Script
function RDNSdbCONFIRM(ID, P){
	//$('#SubqueModal').subModal('hide');
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4){
			///////////////////////
			///// Return Alert Message
			if(xmlhttp.responseText == 0){
				document.getElementById("SUBmodal").innerHTML = "Domain is invalid";
				document.getElementById("lowMod").innerHTML = '';
				document.getElementById("SUBmodalOKbtn").setAttribute("onclick", "");
				document.getElementById("SUBmodalOKbtn").setAttribute("class", "btn btn-success");
				document.getElementById("SUBmodalOKbtn").setAttribute("data-dismiss", "submodal");
				$('#SubqueModal').subModal('show');
				document.getElementById("inputRDNS").focus();
			}else{
			var TIT = '<i class="fa fa-exchange fa-2x"></i>&nbsp;&nbsp;<font size="4">Reverse DNS</font>';
			var BOD = xmlhttp.responseText;
			var Btn="<button type='button' class='btn btn-success' id='bootdelayBTN' onclick='alertOK(1);'>Ok</button>";
			LoadModal(TIT, BOD, Btn);
			}
		}
	}
	
	xmlhttp.open("GET","panel/_config/changeHostname.php?sid="+ID+"&p="+P+"&hn="+document.getElementById("inputRDNS").value);
	xmlhttp.send();
}
////////////////////////////////////////////////////////////////////
////////
//////// Rename Server
////////
////////////////////////////////////////////////////////////////////
function EDSN(ID, Nam){
	var TIT = '<i class="fa fa-edit fa-2x"></i>&nbsp;&nbsp;<font size="4">Rename Your Server</font>';
	var BOD = '<table cellpadding="1" cellspacing="2" width="100%"><tbody><tr><td width="120" align="right">Current Name:</td><td>'+Nam+'</td></tr><tr><td width="120" align="right">Change To:</td><td><input class="form-control" type="text" placeholder="Enter Server Name" id="RENserver" maxlength="30"></td></tr></tbody></table>';
	var Btn="<button type='button' class='btn btn-success'  onclick='EDSNgo("+ID+");'>Continue</button>&nbsp;<button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button>";
	LoadModal(TIT, BOD, Btn);
}
//// Rename Server GO
function EDSNgo(ID){
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	var Nnam = document.getElementById("RENserver").value

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4){
			///////////////////////
			///// Return Alert Message
			var TIT = '<i class="fa fa-edit fa-2x"></i>&nbsp;&nbsp;<font size="4">Rename Your Server</font>';
				var BOD = "Server Name Updated";
				var Btn="<button type='button' class='btn btn-success' onclick='alertOK(1);'>Ok</button>";
				LoadModal(TIT, BOD, Btn);
			}
	}
	
	xmlhttp.open("GET","panel/_config/ServerName.php?ND="+ID+"&NN="+Nnam);
	xmlhttp.send();
}
////////////////////////////////////////////////////////////////////
////////
//////// My Inventory
////////
////////////////////////////////////////////////////////////////////
function MYINV(ID, Nam, CRM){
	var TIT = '<i class="fa fa-list-ul fa-2x"></i>&nbsp;&nbsp;<font size="4">Inventory Items</font>';
	var BOD = '<table cellpadding="1" cellspacing="2" width="100%"><tbody><tr><td width="200" align="right"> </td><td> </td></tr><tr><td width="200" align="right">Additional IPs:</td><td>0 - 0 Remaining</td></tr></tbody><table cellpadding="1" cellspacing="2" width="100%"><tbody><tr><td width="200" align="right"> </td><td> </td></tr><tr><td width="200" align="right"> Additional Storage:</td><td>0 GB - 0 GB Remaining</td></tr></tbody><table cellpadding="1" cellspacing="2" width="100%"><tbody><tr><td width="200" align="right"> </td><td> </td></tr><tr><td width="200" align="right"> cPanel Licenses:</td><td>0 - 0 Remaining</td></tr></tbody>';
	var BOD3 = '<table cellpadding="1" cellspacing="2" width="100%"><tbody><tr><td width="120" align="right"> </td><td> </td></tr><tr><td width="120" align="right">cPanel Licenses:</td><td>0 - 0 Remaining</td></tr></tbody><br>';
	var BOD4 = '<table cellpadding="1" cellspacing="2" width="100%"><tbody><tr><td width="120" align="right"> </td><td> </td></tr><tr><td width="120" align="right">API Access:</td><td>Disabled</td></tr></tbody></table><br>';
	var Btn = "<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>";
	LoadModal(TIT, BOD, Btn);
}

////////////////////////////////////////////////////////////////////
////////
//////// Change Server Mode
////////
////////////////////////////////////////////////////////////////////
function EDSRM(ID, Nam, CRM){
	var TIT = '<i class="fa fa-edit fa-2x"></i>&nbsp;&nbsp;<font size="4">Change Server Run Mode</font>';
	var BOD = '<table cellpadding="1" cellspacing="2" width="100%"><tbody><tr><td width="120" align="right"> </td><td> </td></tr><tr><td width="120" align="right">Select Mode:</td><td><select id="SRMserver" class="form-control" > <option value="Safe" selected="true">Safe Mode - Shutdown after 7 Days</option><option value="Normal">Normal - Leave Powered On</option></select></td></tr></tbody></table>';
	var Btn="<button type='button' class='btn btn-success'  onclick='EDSRMgo("+ID+");'>Continue</button>&nbsp;<button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button>";
	LoadModal(TIT, BOD, Btn);
}
//// Rename Server GO
function EDSRMgo(ID){
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	var SRMnam = document.getElementById("SRMserver").value

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4){
			///////////////////////
			///// Return Alert Message
			var TIT = '<i class="fa fa-edit fa-2x"></i>&nbsp;&nbsp;<font size="4">Change Server Run Mode</font>';
				var BOD = "Server Mode Updated";
				var Btn="<button type='button' class='btn btn-success' onclick='alertOK(1);'>Ok</button>";
				LoadModal(TIT, BOD, Btn);
			}
	}
	
	xmlhttp.open("GET","panel/_config/ServerRunMode.php?ND="+ID+"&RM="+SRMnam);
	xmlhttp.send();
}
////////////////////////////////////////////////////////////////////
////////
//////// API Functions
////////
////////////////////////////////////////////////////////////////////
function apiGen(){
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4){
			///////////////////////
			///// Return Alert Message
				document.getElementById("APIgen").innerHTML = xmlhttp.responseText
			}
	}
	
	xmlhttp.open("GET","panel/_config/APIfunc.php");
	xmlhttp.send();
};
////////////////////////////////////////////////////////////////////
////////
//////// My Server Notes
////////
////////////////////////////////////////////////////////////////////

//// My Server Notes
function addNote(Nam, ID){
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4){
			///////////////////////
			///// Return Alert Message
			var TIT = '<i class="fa fa-pencil-square-o fa-2x"></i>&nbsp;&nbsp;<font size="4">Server Notes</font>';
			var BOD = '<table cellpadding="1" cellspacing="2" width="100%"><tbody><tr><td width="120" align="right"><textarea id="MyNotes" maxlength="100" class="form-control" rows="3">'+xmlhttp.responseText+'</textarea></td></tr></tbody></table>';
			var Btn="<button type='button' class='btn btn-success' onclick='noteCONFIRM("+ID+");'>Continue</button>&nbsp;<button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button>";
			LoadModal(TIT, BOD, Btn);
			}
	}
	
	xmlhttp.open("GET","panel/_config/myNotes.php?ND="+ID);
	xmlhttp.send();
}

//// My Server Notes Update
function noteCONFIRM(ID){
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4){
			///////////////////////
			///// Return Alert Message
				var TIT = '<i class="fa fa-pencil-square-o fa-2x"></i>&nbsp;&nbsp;<font size="4">Server Notes</font>';
				var BOD = "Server Note Added!";
				var Btn="<button type='button' class='btn btn-success' onclick='alertOK();'>Ok</button>";
				LoadModal(TIT, BOD, Btn);
			}
	}
	var NT = document.getElementById("MyNotes").value
	
	xmlhttp.open("GET","panel/_config/myNotes.php?ND="+ID+"&NOT="+NT);
	xmlhttp.send();
}
////////////////////////////////////////////////////////////////////
////////
//////// Domain Names
////////
////////////////////////////////////////////////////////////////////

//// Load Domain Names'
function EDOM(){
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4){
			$('a[rel=tooltip]').tooltip();
			///////////////////////
			///// Return Alert Message
			var TIT = '<i class="fa fa-globe fa-2x"></i>&nbsp;&nbsp;<font size="4">Domain Names</font>';
			var BOD = '<table cellpadding="1" cellspacing="2" width="100%"><tbody><tr><td width="120" align="right">Add Domain:</td><td><input class="form-control" type="text" placeholder="New Domain Name" id="inputEDOM"></td><td><input class="form-control" type="text" placeholder="IP address" id="inputIP"></td></tr><tr><td colspan="2"></td><td align="right"><button type="button" class="btn btn-small btn-success" id="addDMbtn" onclick="addDOM();">Add</button>&nbsp;<button type="button" class="btn btn-small btn-default" data-dismiss="modal">Cancel</button></td></tr><tr><td colspan="2"><br></td></tr><tr><td colspan="3" id="DOMtd">'+xmlhttp.responseText;
			var Btn="";
			
			LoadModal(TIT, BOD, Btn);
	
		}
	}
	
	xmlhttp.open("GET","panel/_config/myDomains.php");
	xmlhttp.send();
}

////////////////////////////////////////////////////////////////////
////////
//////// Reimage/Delete
////////
////////////////////////////////////////////////////////////////////

//// Reimage Collect Available OS' and build CSS DropBox
function LoadAvailOS(Type, ID, SSN){

	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4){
			AvailOS = xmlhttp.responseText // Load var AvailOS with available OS' from db
			PreLoadModalReDe(Type, ID)
		}
	}

	xmlhttp.open("GET","panel/_config/packageRetrieve.php?TYP=OSonly&sid="+ID+"&vmname="+SSN);
	xmlhttp.send();

	PreLoadModalReDe(Type, ID)
}
//// Reimage/Delete Modal Window
function PreLoadModalReDe(Type, ID){
	/// Type: 0 = Delete Volume, 1 = Re-image
	if(Type==0){
		var Nam=document.getElementById("ServerLeft_"+ID).innerHTML
		var TIT = '<i class="fa fa-trash-o fa-2x"></i>&nbsp;&nbsp;<font size="4">Delete Server</font>';
		var BOD = '<h2>Are you sure you want to <font color="#b94a48">Delete</font> this server?</h2>Server #'+ID+'\'s Current State:';
		var Btn="<button type='button' class='btn btn-default' data-dismiss='modal'>No</button><button type='button' class='btn btn-danger' onclick='OSdbCONFIRM();'>Yes</button>";
		LoadModal(TIT, BOD+Nam, Btn);
	}
	if(Type==1){
		var Nam=document.getElementById("ServerLeft_"+ID).innerHTML
		var TIT = '<i class="fa fa-eraser fa-2x"></i>&nbsp;&nbsp;<font size="4">Re-image Server</font>';
		var BOD = '<h2>Are you sure you want to <font color="'+HEADcolor+'">Re-image</font> this server?<br>This process will <font color="#b94a48">Delete ALL data</font> from this server</h2>Server #'+ID+'\'s Current State:';
		var SOS = "<div class='btn-group closed' align='left' id='DropBox'><a class='btn btn-success' href='#'><i class='fa fa-eraser fa-fw'></i>&nbsp;&nbsp;Select New OS</a><a class='btn btn-success dropdown-toggle' data-toggle='dropdown' href='#'><span class='fa fa-caret-down'></span></a><ul class='dropdown-menu'>"+AvailOS+"</ul></div>&nbsp;";
		var Btn="<button type='button' class='btn btn-danger' id='reimageBTN' onclick='OSdbCONFIRM();' disabled>Continue</button><button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button>";
		LoadModal(TIT, BOD+Nam, SOS+Btn);
	}
}
//// Redraw Reimage CSS Dropbox based on Choice
function OSdb(OSid, OS, SSN, ID){
	document.getElementById("reimageBTN").removeAttribute("disabled")
	document.getElementById("reimageBTN").setAttribute("onclick", "OSdbCONFIRM("+OSid+", \""+OS+"\", \""+SSN+"\", \""+ID+"\");")

	var OSsel = AvailOS.split("<li>")
	var TG = "";

	if(OSid == 9){
		TG = "<a class='btn btn-success' href='#'><i class='fa fa-windows'></i>&nbsp;&nbsp;"+OS+"</a><a class='btn btn-success dropdown-toggle' data-toggle='dropdown' href='#'><span class='fa fa-caret-down'></span></a><ul class='dropdown-menu'>";
		for (var i = 0; i < OSsel.length; i++) {
			TG += "<li>"+OSsel[i]+"</li>";
		}
		TG += "</ul>";
	}else{
		TG = "<a class='btn btn-success' href='#'><i class='fa fa-linux'></i>&nbsp;&nbsp;"+OS+"</a><a class='btn btn-success dropdown-toggle' data-toggle='dropdown' href='#'><span class='fa fa-caret-down'></span></a><ul class='dropdown-menu'>";
		for (var i = 0; i < OSsel.length; i++) {
			TG += "<li>"+OSsel[i]+"</li>";
		}
		TG += "</ul>";
	}
	document.getElementById("DropBox").innerHTML = TG
}
//////// Reimage OS Confirm. Require Password Verify
function OSdbCONFIRM(OSid, OS, SSN, ID){
	document.getElementById("SUBmodal").innerHTML = "A fresh copy of "+OS+" will be installed on Server:<br>"+SSN+"<br>Verify your PANEL password to continue the Re-image process";
	document.getElementById("lowMod").innerHTML = '<div class="input-group"><span class="input-group-addon"><i class="fa fa-key fa-fw"></i></span><input class="form-control" type="password" id="inputPSSWD" placeholder="Password"></div>';
	document.getElementById("SUBmodalOKbtn").setAttribute("onclick", "OSpwCONFIRM("+OSid+", \""+OS+"\", \""+SSN+"\", \""+ID+"\");");
	$('#SubqueModal').subModal('show');
}
//////// Reimage OS Confirmed. Verify Password before relay to OSdbCONFIRMED
function OSpwCONFIRM(OSid, OS, SSN, ID){
	if(document.getElementById("inputPSSWD").value == ""){
		document.getElementById("inputPSSWD").focus();
		return false;
	}
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4){
			xmlhttp.responseText==0 ? alert("The Password you entered is incorrect\n\nIt must be verified before Re-image will continue") : OSdbCONFIRMED(OSid, OS, SSN, ID);
		}
	}
	
	xmlhttp.open("GET","panel/_config/passConfirm.php?p="+document.getElementById("inputPSSWD").value);
	xmlhttp.send();
}
//////// Reimage OS Confirmed and Password Verified Continue to Re-Image
function OSdbCONFIRMED(OSid, OS, SSN, ID){
	$('#SubqueModal').subModal('hide');
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4){
			OSdbCOMPRE(SSN, ID, true);
			document.getElementById("ModifyIco_"+ID).setAttribute('class', "fa fa-cog fa-spin")
			document.getElementById("PanelTitle_"+ID).innerHTML = '<i class="fa fa-spinner fa-spin"></i>&nbsp;&nbsp;Re-imaging - Powering Down'
			toggleDrawers(ID, 0);
			///////////////////////
			///// Return Alert Message
			var TIT = '<i class="fa fa-eraser fa-2x"></i>&nbsp;&nbsp;<font size="4">Re-image Server</font>';
			var BOD = xmlhttp.responseText;
			var Btn="<button type='button' class='btn btn-success' id='bootdelayBTN' onclick='alertOK();'>Ok</button>";
			LoadModal(TIT, BOD, Btn);
		}
	}
	
	xmlhttp.open("GET","panel/_config/packageRetrieve.php?TYP=OSreimage&sid="+ID+"&vmname="+SSN+"&os="+OSid);
	xmlhttp.send();
}

function OSdbCOMPRE(SSN, ID, CHK){
	CHK ? setTimeout(function(){OSdbCOMCHECK(SSN, ID)},50000) : setTimeout(function(){OSdbCOMCHECK(SSN, ID)},20000);
}

function OSdbCOMDONE(){
	location.reload();
}
//////// Reimage OS Check Complete
function OSdbCOMCHECK(SSN, ID){
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4){
			if(xmlhttp.responseText=="1"){
				///// Return Alert Message
				document.getElementById("PanelTitle_"+ID).innerHTML = '<i class="fa fa-check"></i>&nbsp;&nbsp;Re-image complete!'
				var TIT = '<i class="fa fa-eraser fa-2x"></i>&nbsp;&nbsp;<font size="4">Re-image Server</font>';
				var BOD = "Re-image complete!";
				var Btn="<button type='button' class='btn btn-success' id='bootdelayBTN' onclick='OSdbCOMDONE();'>Ok</button>";
				LoadModal(TIT, BOD, Btn);
			}else{
				document.getElementById("PanelTitle_"+ID).innerHTML = xmlhttp.responseText;
				OSdbCOMPRE(SSN, ID); // Check every 30 for completion
			}
		}
	}
	
	xmlhttp.open("GET","panel/_config/packageRetrieve.php?TYP=OScheck&sid="+ID+"&vmname="+SSN+"&os=NA");
	xmlhttp.send();
}

////////////////////////////////////////////////////////////////////
////////
//////// Upgrade Hardware
////////
////////////////////////////////////////////////////////////////////

//// Hardware Upgrade Modal Window
function PreLoadModalUpgrade(ID, NaM, RM, HD){
	var Nam=document.getElementById("ServerLeft_"+ID).innerHTML+'<table cellpadding="1" cellspacing="2" width="100%"><tbody><tr><td width="120" align="right">RAM:</td><td>'+RM+'GB</td></tr><tr><td width="120" align="right">HDD:</td><td>'+HD+'GB</td></tr></tbody></table>';
	var TIT = '<i class="fa fa-level-up fa-2x"></i>&nbsp;&nbsp;<font size="4">Upgrade Hardware</font>';
	var BOD = '<h2>To <font color="'+HEADcolor+'">Upgrade Hardware</font> for this server<br>Choose your RAM and/or Drive Space below</h2>Server #'+ID+'\'s Current State:';
	var RAM = "<div class='btn-group closed' align='left' id='RAMDropBox'>";
	var HDD = "<div class='btn-group closed' align='left' id='HDDDropBox'>";
	if(RM==2){
		RAM += RAM02+"</div>&nbsp;";
	}
	if(HD==10){
		HDD += HDD10+"</div>&nbsp;";
	}
	//
	if(RM==4){
		RAM += RAM04+"</div>&nbsp;";
	}
	if(HD==40){
		HDD += HDD120+"</div>&nbsp;";
	}
	//
	if(RM==8){
		RAM += RAM08+"</div>&nbsp;";
	}
	if(HD==120){
		HDD += HD120+"</div>&nbsp;";
	}
	//
	if(RM==16){
		RAM += RAM16+"</div>&nbsp;";
	}
	if(HD==500){
		HDD += HD500+"</div>&nbsp;";
	}
	//
	if(RM==32){
		RAM += RAM32+"</div>&nbsp;";
	}
	if(HD==1000){
		HDD += HD1TB+"</div>&nbsp;";
	}
	//

	var Btn="<button type='button' class='btn btn-success' id='upgradeBTN' onclick='UPdbCONFIRM();' disabled>Continue</button><button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button>";
	
	LoadModal(TIT, BOD+Nam, RAM+HDD+Btn);
}
function UPdbCONFIRM(){
 	//document.getElementById("SUBmodalOKbtn").setAttribute("onclick", "UPdbCONFIRM();");
	$('#SubqueModal').subModal('show');
}
//////// Redraw Upgrade CSS Dropbox based on Choice
function UPdb(Type, OSid){
	document.getElementById("upgradeBTN").removeAttribute("disabled")
	if(Type == 1){
		if(OSid == 1){
			document.getElementById("RAMDropBox").innerHTML = RAM02;
		}
		if(OSid == 2){
			document.getElementById("RAMDropBox").innerHTML = RAM04;
		}
		if(OSid == 3){
			document.getElementById("RAMDropBox").innerHTML = RAM08;
		}
		if(OSid == 4){
			document.getElementById("RAMDropBox").innerHTML = RAM16;
		}
		if(OSid == 5){
			document.getElementById("RAMDropBox").innerHTML = RAM32;
		}
	}
	if(Type == 2){
		if(OSid == 1){
			document.getElementById("HDDDropBox").innerHTML = HDD10;
		}
		if(OSid == 2){
			document.getElementById("HDDDropBox").innerHTML = HDD40;
		}
		if(OSid == 3){
			document.getElementById("HDDDropBox").innerHTML = HD120;
		}
		if(OSid == 4){
			document.getElementById("HDDDropBox").innerHTML = HD500;
		}
		if(OSid == 5){
			document.getElementById("HDDDropBox").innerHTML = HD1TB;
		}
	}
}

////////////////////////////////////////////////////////////////////
////////
//////// Power Cycle
////////
////////////////////////////////////////////////////////////////////

//// Power Cycle Modal Window
function PowerCycle(C, V, ID, N){
		var Nam=document.getElementById("ServerLeft_"+ID).innerHTML
		
		if(C == 0){
			var TIT = '<font size="4"><i class="fa fa-power-off fa-2x"></i>&nbsp;&nbsp;Power OFF</font>';
			var BOD = 'Continue to Power <font color="'+DANGcolor+'">OFF</font> this server?';
			var Btn="<button type='button' class='btn btn-danger' id='bootdelayBTN' onclick='PowerCycleGo(\""+C+"\", \""+V+"\", \""+ID+"\", \""+N+"\");'>Yes</button><button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button>";
		}
		if(C == 1){
			var TIT = '<i class="fa fa-power-off fa-2x"></i>&nbsp;&nbsp;<font size="4">Power ON</font>';
			var BOD = 'Continue to Power <font color="'+HEADcolor+'">ON</font> this server?';
			var Btn="<button type='button' class='btn btn-success' id='bootdelayBTN' onclick='PowerCycleGo(\""+C+"\", \""+V+"\", \""+ID+"\", \""+N+"\");'>Yes</button><button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button>";
		}
		if(C == 2){
			var TIT = '<i class="fa fa-power-off fa-2x"></i>&nbsp;&nbsp;<font size="4">REBOOT</font>';
			var BOD = 'Continue to <font color="'+HEADcolor+'">REBOOT</font> this server?';
			var Btn="<button type='button' class='btn btn-success' id='bootdelayBTN' onclick='PowerCycleGo(\""+C+"\", \""+V+"\", \""+ID+"\", \""+N+"\");'>Yes</button><button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button>";
		}
	LoadModal(TIT, BOD, Btn);
}
//// Power Cycle Confirmed Continue to Power Cycle
function PowerCycleGo(C, V, ID, N){
	document.getElementById("PowerIco_"+ID).setAttribute('class', "fa fa-cog fa-spin")
	if(C==0){
		document.getElementById("PanelTitle_"+ID).innerHTML = '<i class="fa fa-spinner fa-spin"></i>&nbsp;&nbsp;Powering Down'
	}
	if(C==1){
		document.getElementById("PanelTitle_"+ID).innerHTML = '<i class="fa fa-spinner fa-spin"></i>&nbsp;&nbsp;Powering Up'
	}
	if(C==2){
		document.getElementById("PanelTitle_"+ID).innerHTML = '<i class="fa fa-refresh fa-spin"></i>&nbsp;&nbsp;Rebooting'
	}
	toggleDrawers(ID, 0);
	$('#queModal').modal('hide');
	
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4){
			location.reload();
		}
	}

	xmlhttp.open("GET","panel/_config/powerCycle.php?sid="+ID+"&vmname="+V+"&cycle="+C);
	xmlhttp.send();
}
//////// ReBuild Installation
function rebuildFailed(ID){
	//$('#SubqueModal').subModal('hide');
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4){
			///// Disable and close drawer
			document.getElementById("PanelTitle_"+ID).innerHTML = '<i class="fa fa-refresh fa-spin"></i></font>&nbsp;&nbsp;Rebuilding Installation'
			document.getElementById("Reboot_"+ID).setAttribute('class', 'disabled')
			document.getElementById("PowerOff_"+ID).setAttribute('class', 'disabled')
			document.getElementById("Console_"+ID).setAttribute('disabled', true)
			document.getElementById("PowerOn_"+ID).removeAttribute('class')
			toggleDrawers(ID, 0, 1);
			///////////////////////
			///// Return Alert Message
			var TIT = '<i class="fa fa-eraser fa-2x"></i>&nbsp;&nbsp;<font size="4">Re-image Server</font>';
			var BOD = 'Your server is being re-imaged<br>This process should take 2-3 minutes to complete';
			var Btn="<button type='button' class='btn btn-success' id='bootdelayBTN' onclick='alertOK();'>Ok</button>";
			LoadModal(TIT, BOD, Btn);
		}
	}
	
	xmlhttp.open("GET","panel/_config/rebuildServer.php?sid="+ID);
	xmlhttp.send();
}
////////////////////////////////////////////////////////////////////
////////
//////// Login / Forgot Password
////////
////////////////////////////////////////////////////////////////////
function panelLogin(){
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4){
			///////////////////////
			///// Return Alert Message
			if(xmlhttp.responseText == "continue"){
				window.location.href = "index.php";
			}else{
				///// Return Alert Message
				var TIT = '<i class="fa fa-sign-in fa-2x"></i>&nbsp;&nbsp;<font size="4">Members Login</font>';
				var BOD = "Login credentials are incorrect";
				var Btn="<button type='button' class='btn btn-success' id='bootdelayBTN' onclick='alertOK();'>Ok</button>";
				LoadModal(TIT, BOD, Btn);
			}
		}
	}

	xmlhttp.open("GET","panel/_config/loginCheck.php?u="+document.getElementById("LoginUser").value+"&p="+document.getElementById("LoginPass").value);
	xmlhttp.send();
}

////////////////////////////////////////////////////////////////////
////////
//////// Misc. Functions
////////
////////////////////////////////////////////////////////////////////

//// Global Modal Window Builder
function LoadModal(T, B, Btn, ST, MDL){
	ST ? document.getElementById("SubTitle").innerHTML = ST : "";
	document.getElementById("modalTitle").innerHTML = T;
	document.getElementById("modalBody").innerHTML = B;
	document.getElementById("btns").innerHTML = Btn;
	MDL ? $('#'+MDL).modal('show') : $('#queModal').modal('show');
}

//// Standard Success Alert. Ok to close modal
function alertOK(RE){
	$('#queModal').modal('hide');
  /*
	location.reload();
	if(RE){
		location.reload();
	}*/
}

//// Open/Close Panels
function toggleDrawers(ID, TOG, NO){
	NO ? "" : $('#Body_'+ID).collapse('toggle');
	toggleButtons(ID, TOG);
}
//// Toggle Panel Header Buttons
function toggleButtons(ID, TOG){
// 0=disable ALL, 1=enable ALL, 3=Powered Off State, 4=Powered On State
	if(TOG == 0){
		document.getElementById("Info_"+ID).setAttribute('disabled', true)
		document.getElementById("Power_"+ID).setAttribute('disabled', true)
		document.getElementById("PowerDrp_"+ID).setAttribute('disabled', true)
		document.getElementById("Modify_"+ID).setAttribute('disabled', true)
		document.getElementById("ModifyDrp_"+ID).setAttribute('disabled', true)
		document.getElementById("Console_"+ID).setAttribute('disabled', true)
	}
	if(TOG == 1){
		document.getElementById("Info_"+ID).removeAttribute('disabled')
		document.getElementById("Power_"+ID).removeAttribute('disabled')
		document.getElementById("PowerDrp_"+ID).removeAttribute('disabled')
		document.getElementById("Modify_"+ID).removeAttribute('disabled')
		document.getElementById("ModifyDrp_"+ID).removeAttribute('disabled')
		document.getElementById("Console_"+ID).removeAttribute('disabled')
	}
	if(TOG == 3){
		document.getElementById("Info_"+ID).removeAttribute('disabled')
		document.getElementById("Power_"+ID).removeAttribute('disabled')
		document.getElementById("PowerDrp_"+ID).removeAttribute('disabled')
		document.getElementById("Modify_"+ID).setAttribute('disabled', true)
		document.getElementById("ModifyDrp_"+ID).setAttribute('disabled', true)
		document.getElementById("Console_"+ID).setAttribute('disabled', true)
	}
	if(TOG == 4){
		document.getElementById("Info_"+ID).removeAttribute('disabled')
		document.getElementById("Power_"+ID).removeAttribute('disabled')
		document.getElementById("PowerDrp_"+ID).removeAttribute('disabled')
		document.getElementById("Modify_"+ID).removeAttribute('disabled')
		document.getElementById("ModifyDrp_"+ID).removeAttribute('disabled')
		document.getElementById("Console_"+ID).removeAttribute('disabled')
	}
}

// Popup window code
function newPopup(url) {
	popupWindow = window.open(
		url,'popUpWindow','height=700,width=800,left=10,top=3,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes')
}

