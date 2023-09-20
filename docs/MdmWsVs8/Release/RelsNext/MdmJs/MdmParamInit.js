// text/javascript
// ServerIsOn (Page came from server not local)
serverIsOn = true;
//
function DebugParameterInit()
{
	var tempSelected = false;
	var elementObject = document.createElement('input');
	//
	////////////////////////////////////////////////
	// Toggled Variables
	////////////////////////////////////////////////
	elementObject = StdElementGetFromId('formImgLoadUseEventHandler');
	if (!elementObject) { return; }
	// ** Javascript Parameter Init Blocks **
	if (imgLoadUseEventHandler) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = StdElementGetFromId('formImgLoadUseInner');
	if (imgLoadUseInner) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = StdElementGetFromId('formImgLoadEventTest');
	if (imgLoadEventTest) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = StdElementGetFromId('formImgLoadUseDOM');
	if (imgLoadUseDOM) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// User Interface Features
	// Control image display using mouse hover
	elementObject = StdElementGetFromId('formEventMouseOverEnabled');
	if (eventMouseOverEnabled) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Animation Control
	elementObject = StdElementGetFromId('formMoveIsOn');
	if (moveIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = StdElementGetFromId('formFilterIsOn');
	if (filterIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = StdElementGetFromId('formFilterResizeIsOn');
	if (filterResizeIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = StdElementGetFromId('formTimerUseTime');
	if (timerUseTime) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Timer and Event Logging
	elementObject = StdElementGetFromId('formDebugTimer');
	if (debugTimer) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = StdElementGetFromId('formDebugTimerMove');
	if (debugTimerMove) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = StdElementGetFromId('formDebugTimerTransition');
	if (debugTimerTransition) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = StdElementGetFromId('formDebugTimerDetail');
	if (debugTimerDetail) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = StdElementGetFromId('formDebugLogEvents');
	if (debugLogEvents) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Debugger Control
	elementObject = StdElementGetFromId('formErrorUseDebugOnError');// enter debugger on errors
	if (errorUseDebugOnError) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = StdElementGetFromId('formErrorUseDebugOnAll');// enter debugger after any message
	if (errorUseDebugOnAll) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = StdElementGetFromId('formDebugIsOn');
	if (debugIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = StdElementGetFromId('formDebugDoAlert');
	if (debugDoAlert) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Page Load Optimaization
	elementObject = StdElementGetFromId('formJavaLoadDelay');
	if (loadDelayJava) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = StdElementGetFromId('formBodyImageLoadDelay');
	if (loadDelayBodyImage) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = StdElementGetFromId('formMenuImageLoadDelay');
	if (loadDelayMenuImage) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Fields with values
	////////////////////////////////////////////////
	tempSelected = false;
	elementObject = document.createElement('option');
	////////////////////////////////////////////////
	// Browser
	elementObject = StdElementGetFromId('formBrowser_TEST');
	if (browserIsTEST) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = StdElementGetFromId('formBrowser_MSIE');
	if (browserIsIE) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = StdElementGetFromId('formBrowser_Chrome');
	if (browserIsCH) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = StdElementGetFromId('formBrowser_FireFox');
	if (browserIsFF) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = StdElementGetFromId('formBrowser_Safari');
	if (browserIsSA) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = StdElementGetFromId('formBrowser_Opera');
	if (browserIsOP) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = StdElementGetFromId('formBrowser_Netscape');
	if (browserIsNE) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { StdElementGetFromId('formBrowser_FireFox').selected = true; }
	//
	tempSelected = false;
	////////////////////////////////////////////////
	// Debug Control
	elementObject = StdElementGetFromId('formErrorDebugLevel_errorDidNotOccur');
	if (errorDebugLevel == errorDidNotOccur) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = StdElementGetFromId('formErrorDebugLevel_errorComment');
	if (errorDebugLevel == errorComment) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = StdElementGetFromId('formErrorDebugLevel_errorWarn');
	if (errorDebugLevel == errorWarn) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = StdElementGetFromId('formErrorDebugLevel_errorSevere');
	if (errorDebugLevel == errorSevere) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = StdElementGetFromId('formErrorDebugLevel_errorFatal');
	if (errorDebugLevel == errorFatal) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { StdElementGetFromId('formErrorDebugLevel_errorSevere').selected = true; }
	//
	elementObject = document.createElement('input');
	////////////////////////////////////////////////
	// Menu Image Size
	elementObject = StdElementGetFromId('formOObjImageSizeSmall');
	elementObject.value = oObjImageSizeSmall;
	//
	ementObject = StdElementGetFromId('formOObjImageSizeLarge');
	elementObject.value = oObjImageSizeLarge;
	//
	elementObject = StdElementGetFromId('formOObjImageSizeRatio');
	elementObject.value = oObjImageSizeRatio;
	//
	////////////////////////////////////////////////
	// Animation Control
	////////////////////////////////////////////////
	// Movement Duration
	elementObject = StdElementGetFromId('formElementMoveDuration');
	elementObject.value = elementMoveDuration;
	//
	elementObject = StdElementGetFromId('formElementMoveStepMax');
	elementObject.value = elementMoveStepMax;
	//
	elementObject = StdElementGetFromId('formElementMoveInterval');
	elementObject.value = elementMoveInterval;
	//
	elementObject = StdElementGetFromId('formElementMoveDelay');
	elementObject.value = elementMoveDelay;
	//
	////////////////////////////////////////////////
	// Filter / Transition Duration
	elementObject = StdElementGetFromId('formFilterDuration');
	elementObject.value = filterDuration;
	//
	elementObject = StdElementGetFromId('formFilterStepMax');
	elementObject.value = filterStepMax;
	//
	elementObject = StdElementGetFromId('formFilterInterval');
	elementObject.value = filterInterval;
	//
	elementObject = StdElementGetFromId('formFilterDelay');
	elementObject.value = filterDelay;
	//
	elementObject = StdElementGetFromId('formFilterDurationAdjustment');
	elementObject.value = filterDurationAdjustment;
	//
	elementObject = document.createElement('option');
	tempSelected = false;
	////////////////////////////////////////////////
	// Timer control by Item or Menu Group
	elementObject = StdElementGetFromId('formTimerMethod_timerMethodGroup');
	if (timerMethod == timerMethodGroup) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = StdElementGetFromId('formTimerMethod_timerMethodItem');
	if (timerMethod == timerMethodItem) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { StdElementGetFromId('formTimerMethod_timerMethodGroup').selected = true; }
	//
	tempSelected = false;
	////////////////////////////////////////////////
	// Transitions started by Method call or by altering filter value or visibility
	elementObject = StdElementGetFromId('formFilterMethod_filterMethodPlay');
	if (timerMethod == timerMethodGroup) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = StdElementGetFromId('formFilterMethod_filterMethodVisible');
	if (timerMethod == timerMethodItem) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { StdElementGetFromId('formFilterMethod_filterMethodPlay').selected = true; }
	//
	tempSelected = false;
	////////////////////////////////////////////////
	// Manner by which images move across the screen
	elementObject = StdElementGetFromId('formElementMoveMethod_elementMoveMethodDirect');
	if (elementMoveMethod == elementMoveMethodDirect) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = StdElementGetFromId('formElementMoveMethod_elementMoveMethodSlideDown');
	if (elementMoveMethod == elementMoveMethodSlideDown) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = StdElementGetFromId('formElementMoveMethod_elementMoveMethodSlideSide');
	if (elementMoveMethod == elementMoveMethodSlideSide) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = StdElementGetFromId('formElementMoveMethod_elementMoveMethodRandom');
	if (elementMoveMethod == elementMoveMethodRandom) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { StdElementGetFromId('formElementMoveMethod_elementMoveMethodRandom').selected = true; }
    //
    loadFirstDebugState = false;
	//
}
// ..................................................................................... _//
script_state = "Mdm Standard Parameter Initialization function loaded.";
if (debugLoadIsOn) { debugger; }
