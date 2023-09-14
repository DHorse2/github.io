// text/javascript
// ServerIsOn (Page came from server not local)
serverIsOn = true;
//
function fnDebugParameterInit()
{
	var tempSelected = false;
	var elementObject = document.createElement('input');
	//
	////////////////////////////////////////////////
	// Toggled Variables
	////////////////////////////////////////////////
	elementObject = fnElementGetFromId('formImgLoadUseEventHandler');
	if (!elementObject) { return; }
	// ** Javascript Parameter Init Blocks **
	if (imgLoadUseEventHandler) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = fnElementGetFromId('formImgLoadUseInner');
	if (imgLoadUseInner) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = fnElementGetFromId('formImgLoadEventTest');
	if (imgLoadEventTest) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = fnElementGetFromId('formImgLoadUseDOM');
	if (imgLoadUseDOM) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// User Interface Features
	// Control image display using mouse hover
	elementObject = fnElementGetFromId('formEventMouseOverEnabled');
	if (eventMouseOverEnabled) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Animation Control
	elementObject = fnElementGetFromId('formMoveIsOn');
	if (moveIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = fnElementGetFromId('formFilterIsOn');
	if (filterIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = fnElementGetFromId('formFilterResizeIsOn');
	if (filterResizeIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = fnElementGetFromId('formTimerUseTime');
	if (timerUseTime) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Timer and Event Logging
	elementObject = fnElementGetFromId('formDebugTimer');
	if (debugTimer) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = fnElementGetFromId('formDebugTimerMove');
	if (debugTimerMove) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = fnElementGetFromId('formDebugTimerTransition');
	if (debugTimerTransition) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = fnElementGetFromId('formDebugTimerDetail');
	if (debugTimerDetail) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = fnElementGetFromId('formDebugLogEvents');
	if (debugLogEvents) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Debugger Control
	elementObject = fnElementGetFromId('formErrorUseDebugOnError');// enter debugger on errors
	if (errorUseDebugOnError) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = fnElementGetFromId('formErrorUseDebugOnAll');// enter debugger after any message
	if (errorUseDebugOnAll) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = fnElementGetFromId('formDebugIsOn');
	if (debugIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = fnElementGetFromId('formDebugDoAlert');
	if (debugDoAlert) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Page Load Optimaization
	elementObject = fnElementGetFromId('formJavaLoadDelay');
	if (javaLoadDelay) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = fnElementGetFromId('formBodyImageLoadDelay');
	if (bodyImageLoadDelay) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = fnElementGetFromId('formMenuImageLoadDelay');
	if (menuImageLoadDelay) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Fields with values
	////////////////////////////////////////////////
	tempSelected = false;
	elementObject = document.createElement('option');
	////////////////////////////////////////////////
	// Browser
	elementObject = fnElementGetFromId('formBrowser_TEST');
	if (browserIsTEST) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = fnElementGetFromId('formBrowser_MSIE');
	if (browserIsIE) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = fnElementGetFromId('formBrowser_Chrome');
	if (browserIsCH) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = fnElementGetFromId('formBrowser_FireFox');
	if (browserIsFF) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = fnElementGetFromId('formBrowser_Safari');
	if (browserIsSA) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = fnElementGetFromId('formBrowser_Opera');
	if (browserIsOP) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = fnElementGetFromId('formBrowser_Netscape');
	if (browserIsNE) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { fnElementGetFromId('formBrowser_FireFox').selected = true; }
	//
	tempSelected = false;
	////////////////////////////////////////////////
	// Debug Control
	elementObject = fnElementGetFromId('formErrorDebugLevel_errorDidNotOccur');
	if (errorDebugLevel == errorDidNotOccur) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = fnElementGetFromId('formErrorDebugLevel_errorComment');
	if (errorDebugLevel == errorComment) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = fnElementGetFromId('formErrorDebugLevel_errorWarn');
	if (errorDebugLevel == errorWarn) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = fnElementGetFromId('formErrorDebugLevel_errorSevere');
	if (errorDebugLevel == errorSevere) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = fnElementGetFromId('formErrorDebugLevel_errorFatal');
	if (errorDebugLevel == errorFatal) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { fnElementGetFromId('formErrorDebugLevel_errorSevere').selected = true; }
	//
	elementObject = document.createElement('input');
	////////////////////////////////////////////////
	// Menu Image Size
	elementObject = fnElementGetFromId('formOObjImageSizeSmall');
	elementObject.value = oObjImageSizeSmall;
	//
	ementObject = fnElementGetFromId('formOObjImageSizeLarge');
	elementObject.value = oObjImageSizeLarge;
	//
	elementObject = fnElementGetFromId('formOObjImageSizeRatio');
	elementObject.value = oObjImageSizeRatio;
	//
	////////////////////////////////////////////////
	// Animation Control
	////////////////////////////////////////////////
	// Movement Duration
	elementObject = fnElementGetFromId('formElementMoveDuration');
	elementObject.value = elementMoveDuration;
	//
	elementObject = fnElementGetFromId('formElementMoveStepMax');
	elementObject.value = elementMoveStepMax;
	//
	elementObject = fnElementGetFromId('formElementMoveInterval');
	elementObject.value = elementMoveInterval;
	//
	elementObject = fnElementGetFromId('formElementMoveDelay');
	elementObject.value = elementMoveDelay;
	//
	////////////////////////////////////////////////
	// Filter / Transition Duration
	elementObject = fnElementGetFromId('formFilterDuration');
	elementObject.value = filterDuration;
	//
	elementObject = fnElementGetFromId('formFilterStepMax');
	elementObject.value = filterStepMax;
	//
	elementObject = fnElementGetFromId('formFilterInterval');
	elementObject.value = filterInterval;
	//
	elementObject = fnElementGetFromId('formFilterDelay');
	elementObject.value = filterDelay;
	//
	elementObject = fnElementGetFromId('formFilterDurationAdjustment');
	elementObject.value = filterDurationAdjustment;
	//
	elementObject = document.createElement('option');
	tempSelected = false;
	////////////////////////////////////////////////
	// Timer control by Item or Menu Group
	elementObject = fnElementGetFromId('formTimerMethod_timerMethodGroup');
	if (timerMethod == timerMethodGroup) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = fnElementGetFromId('formTimerMethod_timerMethodItem');
	if (timerMethod == timerMethodItem) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { fnElementGetFromId('formTimerMethod_timerMethodGroup').selected = true; }
	//
	tempSelected = false;
	////////////////////////////////////////////////
	// Transitions started by Method call or by altering filter value or visibility
	elementObject = fnElementGetFromId('formFilterMethod_filterMethodPlay');
	if (timerMethod == timerMethodGroup) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = fnElementGetFromId('formFilterMethod_filterMethodVisible');
	if (timerMethod == timerMethodItem) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { fnElementGetFromId('formFilterMethod_filterMethodPlay').selected = true; }
	//
	tempSelected = false;
	////////////////////////////////////////////////
	// Manner by which images move across the screen
	elementObject = fnElementGetFromId('formElementMoveMethod_elementMoveMethodDirect');
	if (elementMoveMethod == elementMoveMethodDirect) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = fnElementGetFromId('formElementMoveMethod_elementMoveMethodSlideDown');
	if (elementMoveMethod == elementMoveMethodSlideDown) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = fnElementGetFromId('formElementMoveMethod_elementMoveMethodSlideSide');
	if (elementMoveMethod == elementMoveMethodSlideSide) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = fnElementGetFromId('formElementMoveMethod_elementMoveMethodRandom');
	if (elementMoveMethod == elementMoveMethodRandom) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { fnElementGetFromId('formElementMoveMethod_elementMoveMethodRandom').selected = true; }
    //
    debugStateLoadFirst = false;
	//
}
// ..................................................................................... _//
var script_state = "MdmParamInit loaded";
