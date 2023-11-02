// type= "text/javascript">

function DebugParameterSet(elementPassed, varNamePassed, varValuePassed) {
	// ** Javascript Parameter Set Blocks **
	if (varValuePassed == 'Toggle') {
		//
		// Toggled Variables
		switch (varNamePassed) {
			// Event Capture and Page Write Methodology
			case 'imgLoadUseEventHandler':
				if (elementPassed.checked) { imgLoadUseEventHandler = false; } else { imgLoadUseEventHandler = true; }
				break;
			case 'imgLoadUseInner':
				if (elementPassed.checked) { imgLoadUseInner = false; } else { imgLoadUseInner = true; }
				break;
			case 'imgLoadEventTest':
				if (elementPassed.checked) { imgLoadEventTest = false; } else { imgLoadEventTest = true; }
				break;
			case 'imgLoadUseDOM':
				if (elementPassed.checked) { imgLoadUseDOM = false; } else { imgLoadUseDOM = true; }
				break;
			// User Interface Features
			case 'eventMouseOverEnabled':
				// Control image display using mouse hover
				if (elementPassed.checked) { eventMouseOverEnabled = false; } else { eventMouseOverEnabled = true; }
				break;
			// Animation Control
			case 'moveIsOn':
				if (elementPassed.checked) { moveIsOn = false; } else { moveIsOn = true; }
				break;
			case 'filterIsOn':
				if (elementPassed.checked) { filterIsOn = false; } else { filterIsOn = true; }
				break;
			case 'filterResizeIsOn':
				if (elementPassed.checked) { filterResizeIsOn = false; } else { filterResizeIsOn = true; }
				break;
			case 'timerUseTime':
				if (elementPassed.checked) { timerUseTime = false; } else { timerUseTime = true; }
				break;
			// Timer and Event Logging
			case 'ConsoleLogTimer':
				if (elementPassed.checked) { ConsoleLogTimer = false; } else { ConsoleLogTimer = true; }
				break;
			case 'ConsoleLogTimerMove':
				if (elementPassed.checked) { ConsoleLogTimerMove = false; } else { ConsoleLogTimerMove = true; }
				break;
			case 'ConsoleLogTimerTransition':
				if (elementPassed.checked) { ConsoleLogTimerTransition = false; } else { ConsoleLogTimerTransition = true; }
				break;
			case 'ConsoleLogTimerDetail':
				if (elementPassed.checked) { ConsoleLogTimerDetail = false; } else { ConsoleLogTimerDetail = true; }
				break;
			case 'ConsoleLogEvents':
				if (elementPassed.checked) { ConsoleLogEvents = false; } else { ConsoleLogEvents = true; }
				break;
			// Debugger Control
			case 'errorUseDebugOnError': // enter debugger on errors
				if (elementPassed.checked) { errorUseDebugOnError = false; } else { errorUseDebugOnError = true; }
				break;
			case 'errorUseDebugOnAll': // enter debugger after any message
				if (elementPassed.checked) { errorUseDebugOnAll = false; } else { errorUseDebugOnAll = true; }
				break;
			//
			case 'debugIsOn':
				if (elementPassed.checked) { debugIsOn = false; } else { debugIsOn = true; }
				break;
			case 'debugDoAlert':
				if (elementPassed.checked) { debugDoAlert = false; } else { debugDoAlert = true; }
				break;
			// Page Load Optimaization
			case 'loadDelayJava':
				if (elementPassed.checked) { loadDelayJava = false; } else { loadDelayJava = true; }
				break;
			case 'loadDelayBodyImage':
				if (elementPassed.checked) { loadDelayBodyImage = false; } else { loadDelayBodyImage = true; }
				break;
			case 'loadDelayMenuImage':
				if (elementPassed.checked) { loadDelayMenuImage = false; } else { loadDelayMenuImage = true; }
				break;
			//
			default:
				break;
		}
		//
	} else {
		// Fields with values
		switch (varNamePassed) {
			// Browser
			////////////////////////////////////////////////
			case 'Browser':
				// Browser Type
				browserType = '';
				browserVs = 0;
				browserVsMajor = 0;
				browserVsMinor = 0;
				browserLayoutCompatable = false;
				//
				browserAnimationIsIe = false;
				browserAnimationIsMozilla = false;
				//
				browserEventsIsFf = false;
				// booleans
				browserIsTEST = false;
				browserIsIE = false;
				browserIsCH = false;
				browserIsFF = false;
				browserIsSA = false;
				browserIsOP = false;
				browserIsNE = false;
				//
				switch (varValuePassed) {
					case 'Firefox': browserIsFF = true; browserType = varValuePassed;
						browserAnimationIsMozilla = true; browserEventsIsFf = true;
						break;
					case 'Chrome': browserIsCH = true; browserType = varValuePassed;
						browserAnimationIsMozilla = true; browserEventsIsFf = false;
						break;
					case 'Opera': browserIsOP = true; browserType = varValuePassed;
						browserAnimationIsMozilla = true; browserEventsIsFf = false;
						break;
					case 'Netscape': browserIsNE = true; browserType = varValuePassed;
						browserAnimationIsMozilla = true; browserEventsIsFf = true;
						break;
					case 'Safari': browserIsSA = true; browserType = varValuePassed;
						browserAnimationIsMozilla = true; browserEventsIsFf = true;
						break;
					case 'MSIE': browserIsIE = true; browserType = varValuePassed;
						browserAnimationIsMozilla = true; browserEventsIsFf = false;
						break;
					default:
						browserIsIE = true; browserType = 'MSIE';
						browserAnimationIsMozilla = true; browserEventsIsFf = false;
						break;
				}
				break;

			// Debug Control
			////////////////////////////////////////////////
				case 'errorDebugLevel':
				switch (varValuePassed) {
					case 'errorDidNotOccur': errorDebugLevel = errorDidNotOccur;
						break;
					case 'errorIsComment': errorDebugLevel = errorIsComment;
						break;
					case 'errorIsWarning': errorDebugLevel = errorIsWarning;
						break;
					case 'errorIsSevere': errorDebugLevel = errorIsSevere;
						break;
					case 'errorIsFatal': errorDebugLevel = errorIsFatal;
						break;
					default:
						errorDebugLevel = errorIsSevere;
						break;
				}
				break;

			// Menu Image Size
			////////////////////////////////////////////////
			case 'oObjImageSizeSmall':
				var temp = parseInt(varValuePassed);
				if (temp && temp > 5) {
					oObjImageSizeSmall = varValuePassed;
				}
				break;
			//
			case 'oObjImageSizeLarge':
				var temp = parseInt(varValuePassed);
				if (temp && temp > 10) {
					oObjImageSizeLarge = varValuePassed;
				}
				break;
			//
			case 'oObjImageSizeRatio':
				var temp = parseInt(varValuePassed);
				if (temp && temp > 0 && temp < 10) {
					oObjImageSizeRatio = varValuePassed;
				}
				break;

			// Animation Control
			////////////////////////////////////////////////
			// Movement Duration
			case 'elementMoveDuration':
				var temp = parseInt(varValuePassed);
				if (temp && temp >= 0) {
					elementMoveDuration = varValuePassed;
					elMoveStepsPerSecond = elMoveStepMax / elementMoveDuration;
				}
				break;
			//
			case 'elMoveStepMax':
				var temp = parseInt(varValuePassed);
				if (temp && temp >= 0) {
					elMoveStepMax = varValuePassed;
					elMoveStepsPerSecond = elMoveStepMax / elementMoveDuration;
				}
				break;
			//
			case 'elementMoveInterval':
				var temp = parseInt(varValuePassed);
				if (temp && temp >= 0) {
					elementMoveInterval = varValuePassed;
				}
				break;
			//
			case 'elementMoveDelay':
				var temp = parseInt(varValuePassed);
				if (temp && temp >= 0) {
					elementMoveDelay = varValuePassed;
				}
				break;

			// Filter / Transition Duration
			////////////////////////////////////////////////
			case 'filterMoveDuration':
				var temp = parseInt(varValuePassed);
				if (temp && temp >= 0) {
					filterMoveDuration = varValuePassed;
					// clear Adjustment to avoid overriding user entry later
					filterMoveDurationAdjustment = 0;
					filterStepsPerSecond = filterStepMax / filterDuration;
					filterDurationOverride = true;
				}
				break;
			//
			case 'filterMoveStepMax':
				var temp = parseInt(varValuePassed);
				if (temp && temp >= 0) {
					filterMoveStepMax = varValuePassed;
					filterStepsPerSecond = filterStepMax / filterDuration;
					filterDurationOverride = true;
				}
				break;
			//
			case 'filterMoveInterval':
				var temp = parseInt(varValuePassed);
				if (temp && temp >= 0) {
					filterMoveInterval = varValuePassed;
					filterDurationOverride = true;
				}
				break;
			//
			case 'filterMoveDelay':
				var temp = parseInt(varValuePassed);
				if (temp && temp >= 0) {
					filterMoveDelay = varValuePassed;
					filterDurationOverride = true;
				}
				break;
			// Usually filterDuration is the same as
			// elementDuration plus an adjustment.
			// a non-zero value indicates this
			// feature is on. Usually this adjustment
			// is one additional second.
			case 'filterMoveDurationAdjustment':
				var temp = parseInt(varValuePassed);
				if (temp && temp >= 0) {
					filterMoveDurationAdjustment = varValuePassed;
					if (filterDurationAdjustment) { filterDuration = elementMoveDuration + filterDurationAdjustment; }
					filterDurationOverride = true;
				}
				break;

			// Function todo
			////////////////////////////////////////////////
			// case 'function'
			//   case 'name', line, col, stuff...

			// Timer control by Item or Menu Group
			////////////////////////////////////////////////
			case 'timerMethod':
				switch (varValuePassed) {
					case 'timerMethodGroup':
						timerMethod = timerMethodGroup;
						break;
					case 'timerMethodItem':
						timerMethod = timerMethodItem;
						break;
					default:
						timerMethod = timerMethodGroup;
						break;
				}
				break;

			// Transitions started by Method call
			////////////////////////////////////////////////
			// or by altering filter value or visibility
			case 'filterMethod':
				switch (varValuePassed) {
					case 'filterMethodPlay':
						filterMethod = filterMethodPlay;
						break;
					case 'filterMethodVisible':
						filterMethod = filterMethodVisible;
						break;
					default:
						filterMethod = filterMethodPlay;
						break;
				}
				break;

			// Manner by which images move across the screen
			////////////////////////////////////////////////
			case 'elementMoveMethod':
				switch (varValuePassed) {
					case 'elementMoveMethodDirect':
						elementMoveMethod = elementMoveMethodDirect;// Slide diagonally to destination
						break;
					case 'elementMoveMethodSlideDown':
						elementMoveMethod = elementMoveMethodSlideDown;// Slide down, then sideways
						break;
					case 'elementMoveMethodSlideSide':
						elementMoveMethod = elementMoveMethodSlideSide;// Slide sideways, then down
						break;
					case 'elementMoveMethodRandom':
					default:
						elementMoveMethod = elementMoveMethodRandom;// Use random choice each time
						break;
				}
				break;
			//
			default:
				break;
		}
		//
	}
	//
}

var script_state = "Mdm Standard Paramater Set function loaded";
if (debugLoadIsOn) { debugger; }
