<script type="text/javascript">
<!--
// ServerIsOn (Page came from server not local)
serverIsOn = true;
// 
function fnDebugParameterInit() 
{
	var tempSelected = false;
	var elementObject =  document.createElement('input');
	//
	////////////////////////////////////////////////
	// Toggled Variables
	////////////////////////////////////////////////
	elementObject = document.getElementById('formImgLoadUseEventHandler');
	if (!elementObject) { return; }
	// ** Javascript Parameter Init Blocks **
	if (imgLoadUseEventHandler) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formImgLoadUseInner');
	if (imgLoadUseInner) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formImgLoadEventTest');
	if (imgLoadEventTest) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formImgLoadUseDOM');
	if (imgLoadUseDOM) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// User Interface Features
	// Control image display using mouse hover
	elementObject = document.getElementById('formEventMouseOverEnabled');
	if (eventMouseOverEnabled) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Animation Control
	elementObject = document.getElementById('formMoveIsOn');
	if (moveIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formFilterIsOn');
	if (filterIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formFilterResizeIsOn');
	if (filterResizeIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formTimerUseTime');
	if (timerUseTime) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Timer and Event Logging
	elementObject = document.getElementById('formDebugTimer');
	if (debugTimer) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formDebugTimerMove');
	if (debugTimerMove) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formDebugTimerTransition');
	if (debugTimerTransition) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formDebugTimerDetail');
	if (debugTimerDetail) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formDebugLogEvents'); 
	if (debugLogEvents) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Debugger Control
	elementObject = document.getElementById('formErrorUseDebugOnError'); // enter debugger on errors
	if (errorUseDebugOnError) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formErrorUseDebugOnAll'); // enter debugger after any message
	if (errorUseDebugOnAll) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formDebugIsOn');
	if (debugIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formDebugDoAlert');
	if (debugDoAlert) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Page Load Optimaization
	elementObject = document.getElementById('formJavaLoadDelay');
	if (javaLoadDelay) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formBodyImageLoadDelay');
	if (bodyImageLoadDelay) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = document.getElementById('formMenuImageLoadDelay');
	if (menuImageLoadDelay) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Fields with values
	////////////////////////////////////////////////
	tempSelected = false;
	elementObject =  document.createElement('option');
	////////////////////////////////////////////////
	// Browser
	elementObject = document.getElementById('formBrowser_MSIE');
	if (browserIsIE) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formBrowser_Chrome');
	if (browserIsCH) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formBrowser_FireFox');
	if (browserIsFF) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formBrowser_Safari');
	if (browserIsSA) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formBrowser_Opera');
	if (browserIsOP) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formBrowser_Netscape');
	if (browserIsNE) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { document.getElementById('formBrowser_FireFox').selected = true; }
	//
	tempSelected = false;
	////////////////////////////////////////////////
	// Debug Control
	elementObject = document.getElementById('formErrorDebugLevel_errorDidNotOccur'); 
	if (errorDebugLevel ==  errorDidNotOccur) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formErrorDebugLevel_errorComment'); 
	if (errorDebugLevel ==  errorComment) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formErrorDebugLevel_errorWarn'); 
	if (errorDebugLevel ==  errorWarn) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formErrorDebugLevel_errorSevere'); 
	if (errorDebugLevel ==  errorSevere) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formErrorDebugLevel_errorFatal'); 
	if (errorDebugLevel ==  errorFatal) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { document.getElementById('formErrorDebugLevel_errorSevere').selected = true; }
	//
	elementObject =  document.createElement('input');
	////////////////////////////////////////////////
	// Menu Image Size
	elementObject = document.getElementById('formOObjImageSizeSmall');
	elementObject.value = oObjImageSizeSmall;
	//
	ementObject = document.getElementById('formOObjImageSizeLarge');
	elementObject.value = oObjImageSizeLarge;
	//
	elementObject = document.getElementById('formOObjImageSizeRatio');
	elementObject.value = oObjImageSizeRatio;
	//
	////////////////////////////////////////////////
	// Animation Control
	////////////////////////////////////////////////
	// Movement Duration
	elementObject = document.getElementById('formElementMoveDuration');
	elementObject.value = elementMoveDuration;
	//
	elementObject = document.getElementById('formElementMoveStepMax');
	elementObject.value = elementMoveStepMax;
	//
	elementObject = document.getElementById('formElementMoveInterval'); 
	elementObject.value = elementMoveInterval;
	//
	elementObject = document.getElementById('formElementMoveDelay');
	elementObject.value = elementMoveDelay;
	//
	////////////////////////////////////////////////
	// Filter / Transition Duration
	elementObject = document.getElementById('formFilterDuration'); 
	elementObject.value = filterDuration;
	// 
	elementObject = document.getElementById('formFilterStepMax');
	elementObject.value = filterStepMax;
	//
	elementObject = document.getElementById('formFilterInterval'); 
	elementObject.value = filterInterval;
	//
	elementObject = document.getElementById('formFilterDelay');
	elementObject.value = filterDelay;
	//
	elementObject = document.getElementById('formFilterDurationAdjustment'); 
	elementObject.value = filterDurationAdjustment;
	//
	elementObject =  document.createElement('option');
	tempSelected = false;
	////////////////////////////////////////////////
	// Timer control by Item or Menu Group
	elementObject = document.getElementById('formTimerMethod_timerMethodGroup');
	if (timerMethod == timerMethodGroup) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formTimerMethod_timerMethodItem');
	if (timerMethod == timerMethodItem) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { document.getElementById('formTimerMethod_timerMethodGroup').selected = true; }
	//
	tempSelected = false;
	////////////////////////////////////////////////
	// Transitions started by Method call or by altering filter value or visibility
	elementObject = document.getElementById('formFilterMethod_filterMethodPlay');
	if (timerMethod == timerMethodGroup) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formFilterMethod_filterMethodVisible');
	if (timerMethod == timerMethodItem) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { document.getElementById('formFilterMethod_filterMethodPlay').selected = true; }
	//
	tempSelected = false;
	////////////////////////////////////////////////
	// Manner by which images move across the screen
	elementObject = document.getElementById('formElementMoveMethod_elementMoveMethodDirect');
	if (elementMoveMethod == elementMoveMethodDirect) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formElementMoveMethod_elementMoveMethodSlideDown');
	if (elementMoveMethod == elementMoveMethodSlideDown) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formElementMoveMethod_elementMoveMethodSlideSide');
	if (elementMoveMethod == elementMoveMethodSlideSide) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = document.getElementById('formElementMoveMethod_elementMoveMethodRandom');
	if (elementMoveMethod == elementMoveMethodRandom) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { document.getElementById('formElementMoveMethod_elementMoveMethodRandom').selected = true; }
    //
    debugStateLoadFirst = false;
	//
}
</script>