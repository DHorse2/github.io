// text/javascript
// ServerIsOn (Page came from server not local)
serverIsOn = true;
FormElementSyncDone = false;
//
function FormElementSyncOld()
{
	// todo console
	if (FormElementSync) { return; }
	FormElementSyncDone = true;
	var tempSelected = false;
	var elementObject = document.createElement('input');
	//
	////////////////////////////////////////////////
	// todo NEW debug toggles
	////////////////////////////////////////////////
	// Toggled Variables
	////////////////////////////////////////////////
	elementObject = ElementGetFromId('formImgLoadUseEventHandler');
	if (!elementObject) { return; }
	// ** Javascript Parameter Init Blocks **
	if (imgLoadUseEventHandler) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = ElementGetFromId('formImgLoadUseInner');
	if (imgLoadUseInner) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = ElementGetFromId('formImgLoadEventTest');
	if (imgLoadEventTest) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = ElementGetFromId('formImgLoadUseDOM');
	if (imgLoadUseDOM) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// User Interface Features
	// Control image display using mouse hover
	elementObject = ElementGetFromId('formEventMouseOverEnabled');
	if (eventMouseOverEnabled) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Animation Control
	elementObject = ElementGetFromId('formMoveIsOn');
	if (moveIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = ElementGetFromId('formFilterIsOn');
	if (filterIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = ElementGetFromId('formFilterResizeIsOn');
	if (filterResizeIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = ElementGetFromId('formTimerUseTime');
	if (timerUseTime) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Timer and Event Logging
	elementObject = ElementGetFromId('formDebugTimer');
	if (debugTimer) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = ElementGetFromId('formDebugTimerMove');
	if (debugTimerMove) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = ElementGetFromId('formDebugTimerTransition');
	if (debugTimerTransition) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = ElementGetFromId('formDebugTimerDetail');
	if (debugTimerDetail) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = ElementGetFromId('formDebugLogEvents');
	if (debugLogEvents) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Debugger Control
	elementObject = ElementGetFromId('formErrorUseDebugOnError');// enter debugger on errors
	if (errorUseDebugOnError) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = ElementGetFromId('formErrorUseDebugOnAll');// enter debugger after any message
	if (errorUseDebugOnAll) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = ElementGetFromId('formDebugIsOn');
	if (debugIsOn) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = ElementGetFromId('formDebugDoAlert');
	if (debugDoAlert) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Page Load Optimaization
	elementObject = ElementGetFromId('formJavaLoadDelay');
	if (loadDelayJava) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = ElementGetFromId('formBodyImageLoadDelay');
	if (loadDelayBodyImage) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	elementObject = ElementGetFromId('formMenuImageLoadDelay');
	if (loadDelayMenuImage) { elementObject.checked = true; } else { elementObject.checked = false; }
	//
	////////////////////////////////////////////////
	// Fields with values
	////////////////////////////////////////////////
	tempSelected = false;
	elementObject = document.createElement('option');
	////////////////////////////////////////////////
	// Browser
	elementObject = ElementGetFromId('formBrowser_TEST');
	if (browserIsTEST) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = ElementGetFromId('formBrowser_MSIE');
	if (browserIsIE) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = ElementGetFromId('formBrowser_Chrome');
	if (browserIsCH) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = ElementGetFromId('formBrowser_FireFox');
	if (browserIsFF) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = ElementGetFromId('formBrowser_Safari');
	if (browserIsSA) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = ElementGetFromId('formBrowser_Opera');
	if (browserIsOP) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = ElementGetFromId('formBrowser_Netscape');
	if (browserIsNE) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { ElementGetFromId('formBrowser_FireFox').selected = true; }
	//
	tempSelected = false;
	////////////////////////////////////////////////
	// Debug Control
	elementObject = ElementGetFromId('formErrorDebugLevel_errorDidNotOccur');
	if (errorDebugLevel == errorDidNotOccur) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = ElementGetFromId('formErrorDebugLevel_errorIsComment');
	if (errorDebugLevel == errorIsComment) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = ElementGetFromId('formErrorDebugLevel_errorIsWarning');
	if (errorDebugLevel == errorIsWarning) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = ElementGetFromId('formErrorDebugLevel_errorIsSevere');
	if (errorDebugLevel == errorIsSevere) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = ElementGetFromId('formErrorDebugLevel_errorIsFatal');
	if (errorDebugLevel == errorIsFatal) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { ElementGetFromId('formErrorDebugLevel_errorIsSevere').selected = true; }
	//
	elementObject = document.createElement('input');
	////////////////////////////////////////////////
	// Menu Image Size
	elementObject = ElementGetFromId('formOObjImageSizeSmall');
	elementObject.value = oObjImageSizeSmall;
	//
	ementObject = ElementGetFromId('formOObjImageSizeLarge');
	elementObject.value = oObjImageSizeLarge;
	//
	elementObject = ElementGetFromId('formOObjImageSizeRatio');
	elementObject.value = oObjImageSizeRatio;
	//
	////////////////////////////////////////////////
	// Animation Control
	////////////////////////////////////////////////
	// Movement Duration
	elementObject = ElementGetFromId('formElementMoveDuration');
	elementObject.value = elementMoveDuration;
	//
	elementObject = ElementGetFromId('formelMoveStepMax');
	elementObject.value = elMoveStepMax;
	//
	elementObject = ElementGetFromId('formElementMoveInterval');
	elementObject.value = elementMoveInterval;
	//
	elementObject = ElementGetFromId('formElementMoveDelay');
	elementObject.value = elementMoveDelay;
	//
	////////////////////////////////////////////////
	// Filter / Transition Duration
	elementObject = ElementGetFromId('formFilterDuration');
	elementObject.value = filterDuration;
	//
	elementObject = ElementGetFromId('formFilterStepMax');
	elementObject.value = filterStepMax;
	//
	elementObject = ElementGetFromId('formFilterInterval');
	elementObject.value = filterInterval;
	//
	elementObject = ElementGetFromId('formFilterDelay');
	elementObject.value = filterDelay;
	//
	elementObject = ElementGetFromId('formFilterDurationAdjustment');
	elementObject.value = filterDurationAdjustment;
	//
	elementObject = document.createElement('option');
	tempSelected = false;
	////////////////////////////////////////////////
	// Timer control by Item or Menu Group
	elementObject = ElementGetFromId('formTimerMethod_timerMethodGroup');
	if (timerMethod == timerMethodGroup) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = ElementGetFromId('formTimerMethod_timerMethodItem');
	if (timerMethod == timerMethodItem) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { ElementGetFromId('formTimerMethod_timerMethodGroup').selected = true; }
	//
	tempSelected = false;
	////////////////////////////////////////////////
	// Transitions started by Method call or by altering filter value or visibility
	elementObject = ElementGetFromId('formFilterMethod_filterMethodPlay');
	if (timerMethod == timerMethodGroup) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = ElementGetFromId('formFilterMethod_filterMethodVisible');
	if (timerMethod == timerMethodItem) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { ElementGetFromId('formFilterMethod_filterMethodPlay').selected = true; }
	//
	tempSelected = false;
	////////////////////////////////////////////////
	// Manner by which images move across the screen
	elementObject = ElementGetFromId('formelementMoveMethod_elementMoveMethodDirect');
	if (elementMoveMethod == elementMoveMethodDirect) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = ElementGetFromId('formelementMoveMethod_elementMoveMethodSlideDown');
	if (elementMoveMethod == elementMoveMethodSlideDown) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = ElementGetFromId('formelementMoveMethod_elementMoveMethodSlideSide');
	if (elementMoveMethod == elementMoveMethodSlideSide) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	//
	elementObject = ElementGetFromId('formelementMoveMethod_elementMoveMethodRandom');
	if (elementMoveMethod == elementMoveMethodRandom) { tempSelected = elementObject.selected = true; } else { elementObject.selected = false; }
	// default
	if (!tempSelected) { ElementGetFromId('formelementMoveMethod_elementMoveMethodRandom').selected = true; }
    //
    loadFirstDebugState = false;
	//
}
// ..................................................................................... _//
script_state = "Mdm Standard Parameter Initialization function loaded.";
if (debugLoadIsOn) { debugger; }
