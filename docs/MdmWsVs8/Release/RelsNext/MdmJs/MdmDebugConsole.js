// Section Console function (s)

// Body ViewToggle - Console
// ..................................................................................... _//
function fnBodyConsoleToggle(ConsoleBlockPassed) {
	var checkBoxSize = false;
	var checkNoVisibleDebug = false;
	var checkNoVisibleConsole = false;
	var checkLogMode = false;
	var checkLogModeSeeEvents = false;
	var checkLogModeSeeErrors = false;
	var boxStyleSaved = '';
	// Body Element Creation
	if (javaLoadFirst) { fnElementObjectCreate(); }
	//
	switch (ConsoleBlockPassed) {
		//
		case 'ConsoleMouseOver':
			if (eventMouseOverEnabled) {
				eventMouseOverEnabled = false;
				fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Mouse Over Menus is OFF',
					'fnBodyConsoleToggle', 8307, null, null,
					errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				elBodyConsoleMouseOverToggle.style.borderColor = ButtonIsOffColor;
			} else {
				eventMouseOverEnabled = true;
				fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Mouse Over Menus is ON',
					'fnBodyConsoleToggle', 8314, null, null,
					errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
					elBodyConsoleMouseOverToggle.style.borderColor = ButtonIsOnColor;
			}
			//
			break;
		//
		case 'ConsoleError':
			if (elBodyConsoleBox.style.display != 'block') {
				boxStyleSaved = elBodyConsoleErrorBox.style.display;
				fnBodyConsoleToggle('ConsoleAll');
				elBodyConsoleErrorBox.style.display = boxStyleSaved;
			} else {
				if (elBodyConsoleErrorBox.style.display != 'block') {
					elBodyConsoleErrorBox.style.display = 'block';
					elBodyConsoleErrorToggle.style.borderColor = ButtonIsOnColor;
				} else {
					elBodyConsoleErrorBox.style.display = 'none';
					elBodyConsoleErrorToggle.style.borderColor = ButtonIsOffColor;
				}
			}
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleEvent':
			if (elBodyConsoleBox.style.display != 'block') {
				boxStyleSaved = elBodyConsoleEventBox.style.display;
				fnBodyConsoleToggle('ConsoleAll');
				elBodyConsoleEventBox.style.display = boxStyleSaved;
			} else {
				if (elBodyConsoleEventBox.style.display != 'block') {
					elBodyConsoleEventBox.style.display = 'block';
					elBodyConsoleEventToggle.style.borderColor = ButtonIsOnColor;
					elBodyConsoleErrorBox.style.width = '31%';
				} else {
					elBodyConsoleEventBox.style.display = 'none';
					elBodyConsoleEventToggle.style.borderColor = ButtonIsOffColor;
					elBodyConsoleErrorBox.style.width = '64%';
				}
			}
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleState':
			if (elBodyConsoleBox.style.display != 'block') {
				if (debugStateLoadFirst) { fnDebugParameterInit(); }
				boxStyleSaved = elBodyConsoleStateBox.style.display;
				fnBodyConsoleToggle('ConsoleAll');
				elBodyConsoleStateBox.style.display = boxStyleSaved;
			} else {
				if (elBodyConsoleStateBox.style.display != 'block') {
					elBodyConsoleStateBox.style.display = 'block';
					elBodyConsoleStateTextBox.style.display = 'block';
					elBodyConsoleStateToggle.style.borderColor = ButtonIsOnColor;
				} else {
					elBodyConsoleStateBox.style.display = 'none';
					elBodyConsoleStateTextBox.style.display = 'none';
					elBodyConsoleStateToggle.style.borderColor = ButtonIsOffColor;
				}
			}
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleTest':
			if (elBodyConsoleBox.style.display != 'block') {
				boxStyleSaved = elBodyConsoleTestBox.style.display;
				fnBodyConsoleToggle('ConsoleAll');
				elBodyConsoleTestBox.style.display = boxStyleSaved;
			}
			//
			if (elBodyConsoleTestBox.style.display != 'block') {
				elBodyConsoleTestBox.style.display = 'block';
				elBodyConsoleTestTextBox.style.display = 'block';
				elBodyConsoleTestToggle.style.borderColor = ButtonIsOnColor;
			}
			// execute test
			fnErrorOccured(eventCurr, DoNotUseDebug, DoNotUseSingeLine,
				'This is a test message for checking the console display...',
				'fnBodyConsoleToggle', 8225, elBodyConsoleTestBox, elBodyConsoleTestBox,
				errorSevere, errorDoDisplayTag, errorDoAlert);
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleClear':
			elBodyConsoleErrorTextBox.innerHTML = '';
			fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
				'Error and Log Console has been cleared...',
				'fnBodyConsoleToggle', 8235, null, null,
				errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
			//
			elBodyConsoleClearToggle.style.backgroundColor = '';
			elBodyConsoleClearToggle.style.color = '';
			elBodyConsoleClearToggle.style.borderColor = '';
			errorSeverityHighest = 0;
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		// ..................................................................................... _//
		//
		case 'ConsoleDebug':
			if (elBodyConsoleDebugMainToggles.style.display != 'block') {
				debugTimerMove = true;
				elBodyConsoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
				debugTimerTransition = true;
				elBodyConsoleDebugTransitionToggle.style.borderColor = ButtonIsOnColor;
				debugTimerDetail = true;
				elBodyConsoleDebugDetailToggle.style.borderColor = ButtonIsOnColor;
				errorUseDebugOnAll = true;
				elBodyConsoleDebugAllToggle.style.borderColor = ButtonIsOnColor;
				errorUseDebugOnError = true;
				elBodyConsoleDebugOnErrorToggle.style.borderColor = ButtonIsOnColor;
				// errorUseDebugOnError = true;
				// elBodyConsoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
				debugLogEvents = true;
				elBodyConsoleDebugEventsToggle.style.borderColor = ButtonIsOnColor;
				//
				fnBodyConsoleShow(DoNotUseHide, DoUseDebug);
				//
				if (elBodyConsoleBox.style.display != 'block') {
					fnBodyConsoleToggle('ConsoleAll');
				}
				//
				if (errorUseDebugOnAll || errorUseDebugOnError) { errorUseDebugOnError = true; } else { errorUseDebugOnError = false; }
				if (debugTimerMove || debugTimerTransition) { debugTimer = true; } else { debugTimer = false; }
				//
				checkLogMode = true;
				checkLogModeSeeErrors = true;
				checkLogModeSeeEvents = true;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				checkNoVisibleDebug = true;
				//
			} else {
				//
				debugTimerMove = false;
				elBodyConsoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
				debugTimerTransition = false;
				elBodyConsoleDebugTransitionToggle.style.borderColor = ButtonIsOffColor;
				debugTimerDetail = false;
				elBodyConsoleDebugDetailToggle.style.borderColor = ButtonIsOffColor;
				errorUseDebugOnAll = false;
				elBodyConsoleDebugAllToggle.style.borderColor = ButtonIsOffColor;
				errorUseDebugOnError = false;
				elBodyConsoleDebugOnErrorToggle.style.borderColor = ButtonIsOffColor;
				// errorUseDebugOnError = false;
				// elBodyConsoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
				debugLogEvents = false;
				elBodyConsoleDebugEventsToggle.style.borderColor = ButtonIsOffColor;
				//
				fnBodyConsoleShow(DoUseHide, DoUseDebug);
				// elBodyConsoleDebugToggles.style.display = 'none';
				elBodyConsoleDebugToggle.style.borderColor = ButtonIsOffColor;
				fnBodyConsoleDebugButtons = false;
			}
			break;
		//
		case 'ConsoleDebugMove':
			if (debugTimerMove) {
				debugTimerMove = false;
				fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug Move is OFF',
					'fnBodyConsoleToggle', 8307, null, null,
					errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				elBodyConsoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
			} else {
				debugTimerMove = true;
				fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug Move is ON',
					'fnBodyConsoleToggle', 8314, null, null,
					errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				elBodyConsoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
				checkLogMode = true;
			}
			//
			if (debugTimerMove || debugTimerTransition) { debugTimer = true; } else { debugTimer = false; }
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleDebugTransition':
			if (debugTimerTransition) {
				debugTimerTransition = false;
				fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug Transition is OFF',
					'fnBodyConsoleToggle', 8331, null, null,
					errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				elBodyConsoleDebugTransitionToggle.style.borderColor = ButtonIsOffColor;
			} else {
				debugTimerTransition = true;
				fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug Transition is ON',
					'fnBodyConsoleToggle', 8338, null, null,
					errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				elBodyConsoleDebugTransitionToggle.style.borderColor = ButtonIsOnColor;
				checkLogMode = true;
			}
			//
			if (debugTimerMove || debugTimerTransition) { debugTimer = true; } else { debugTimer = false; }
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleDebugDetail':
			if (debugTimerDetail) {
				debugTimerDetail = false;
				fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug Detail is OFF',
					'fnBodyConsoleToggle', 8355, null, null,
					errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				elBodyConsoleDebugDetailToggle.style.borderColor = ButtonIsOffColor;
			} else {
				debugTimerDetail = true;
				fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug Detail is ON',
					'fnBodyConsoleToggle', 8362, null, null,
					errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				elBodyConsoleDebugDetailToggle.style.borderColor = ButtonIsOnColor;
				checkLogMode = true;
			}
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleDebugOnError':
			if (errorUseDebugOnError) {
				errorUseDebugOnError = false;
				fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug On Error in debugger is OFF',
					'fnBodyConsoleToggle', 8377, null, null,
					errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				elBodyConsoleDebugOnErrorToggle.style.borderColor = ButtonIsOffColor;
			} else {
				errorUseDebugOnError = true;
				fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug On Error in debugger is ON',
					'fnBodyConsoleToggle', 8384, null, null,
					errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				elBodyConsoleDebugOnErrorToggle.style.borderColor = ButtonIsOnColor;
				checkLogMode = true;
			}
			checkLogModeSeeEvents = false;
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleDebugAll':
			if (errorUseDebugOnAll) {
				errorUseDebugOnAll = false;
				fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug All messages in debugger is OFF',
					'fnBodyConsoleToggle', 8399, null, null,
					errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				elBodyConsoleDebugAllToggle.style.borderColor = ButtonIsOffColor;
			} else {
				errorUseDebugOnAll = true;
				fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug All messages in debugger is ON',
					'fnBodyConsoleToggle', 8406, null, null,
					errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				if (!errorUseDebugOnError) { fnBodyConsoleToggle('ConsoleDebugOnError'); }
				elBodyConsoleDebugAllToggle.style.borderColor = ButtonIsOnColor;
				checkLogMode = true;
			}
			//
			checkLogModeSeeEvents = false;
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleDebugEvents':
			if (debugLogEvents) {
				debugLogEvents = false;
				fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug (Mouse) Events is OFF',
					'fnBodyConsoleToggle', 8423, null, null,
					errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				elBodyConsoleDebugEventsToggle.style.borderColor = ButtonIsOffColor;
			} else {
				debugLogEvents = true;
				fnErrorOccured(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug (Mouse) Events is ON',
					'fnBodyConsoleToggle', 8430, null, null,
					errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				elBodyConsoleDebugEventsToggle.style.borderColor = ButtonIsOnColor;
				checkLogMode = true;
			}
			//
			checkLogModeSeeEvents = true;
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		default:
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
	}
	// ..................................................................................... _//
	//
	if (checkLogMode) {
		if (checkLogModeSeeErrors) {
			if (elBodyConsoleErrorBox.style.display != 'block') { fnBodyConsoleToggle('ConsoleError'); }
		} else {
			// if (elBodyConsoleErrorBox.style.display = 'block') { fnBodyConsoleToggle('ConsoleError'); }
		}
		if (checkLogModeSeeEvents) {
			if (elBodyConsoleEventBox.style.display != 'block') { fnBodyConsoleToggle('ConsoleEvent'); }
		} else {
			// if (elBodyConsoleEventBox.style.display = 'block') { fnBodyConsoleToggle('ConsoleEvent'); }
		}
		if (elBodyConsoleStateBox.style.display = 'block') { fnBodyConsoleToggle('ConsoleState'); }
	}
	//
	// Check if any Console Box settings are on or content is visible
	if (checkNoVisibleConsole) {
		if (elBodyConsoleErrorBox.style.display != 'block'
			&& elBodyConsoleEventBox.style.display != 'block'
			&& elBodyConsoleStateBox.style.display != 'block'
		) {
			elBodyConsoleBox.style.display = 'none';
			fnBodyConsoleShow(DoHide = true, DoDebug = false);
			checkBoxSize = false;
		} else {
			fnBodyConsoleShow(DoHide = false, DoDebug = false);
		}
		//
	}
	// Check if any Debugs settings are on or content is visible
	if (checkNoVisibleDebug) {
		if (elBodyConsoleDebugToggles.style.display != 'block'
			&& !debugTimerMove
			&& !debugTimerTransition
			&& !debugTimerDetail
			&& !errorUseDebugOnError
			&& !errorUseDebugOnAll
			&& !debugLogEvents
		) {
			// 			&& !errorUseDebugOnError
			fnBodyConsoleShow(DoHide = true, DoDebug = true);
			checkBoxSize = false;
		} else {
			fnBodyConsoleShow(DoHide = false, DoDebug = true);
		}
	}
	//
	switch (ConsoleBlockPassed) {
		case 'ConsoleAll':
			checkBoxSize = true;
			// Toggle Test 1 - Buttons Visible
			if (fnBodyConsoleBoxButtons) {
				if (elBodyConsoleBox.style.display != 'block') {
					//
					if (debugStateLoadFirst) { fnDebugParameterInit(); }
					//
					// elBodyConsoleTop.style.display = 'block';
					//
					elBodyConsoleBox.style.display = 'block';
					//
					fnBodyConsoleShow(DoNotUseHide, DoNotUseDebug);
					//
					if (elBodyConsoleErrorBox.style.display != 'block'
						&& elBodyConsoleEventBox.style.display != 'block'
						&& elBodyConsoleStateBox.style.display != 'block') {
						elBodyConsoleErrorBox.style.display = 'block';
						elBodyConsoleEventBox.style.display = 'block';
						elBodyConsoleStateBox.style.display = 'block';
						elBodyConsoleStateTextBox.style.display = 'block';
						elBodyConsoleStateTextBox.style.display = 'block';
						elBodyConsoleTestBox.style.display = 'block';
						elBodyConsoleTestTextBox.style.display = 'block';
						elBodyConsoleTestToggle.style.display = 'block';
						elBodyConsoleClearToggle.style.display = 'block';
					}
					//
					if (elBodyConsoleErrorBox.style.display = 'block') {
						elBodyConsoleErrorToggle.style.borderColor = ButtonIsOnColor;
					} else { elBodyConsoleErrorToggle.style.borderColor = ButtonIsOffColor; }
					//
					if (elBodyConsoleEventBox.style.display = 'block') {
						elBodyConsoleEventToggle.style.borderColor = ButtonIsOnColor;
					} else { elBodyConsoleEventToggle.style.borderColor = ButtonIsOffColor; }
					//
					if (elBodyConsoleStateBox.style.display = 'block') {
						elBodyConsoleStateToggle.style.borderColor = ButtonIsOnColor;
					} else { elBodyConsoleStateToggle.style.borderColor = ButtonIsOffColor; }
					//
					// Toggle Test 2 - Display Not Window Visible
				} else if (elBodyConsoleBox.style.display = 'block') {
					// elBodyConsoleTop.style.display = 'none';
					//
					elBodyConsoleBox.style.display = 'none';
					//
					fnBodyConsoleShow(DoUseHide, DoNotUseDebug);
					//
				}
				//
				// Toggle Test 2 - Display Window Visible
			} else {
				//
				elBodyConsoleBox.style.display = 'block';
				//
				fnBodyConsoleShow(DoNotUseHide, DoNotUseDebug);
			}
		default:
			break;
	}
	//
	if (elBodyConsoleStateBox.style.display = 'block') {
		// State visible
		if (elBodyConsoleErrorBox.style.display != 'block') {
			// State visible, no Error visible
			if (elBodyConsoleEventBox.style.display != 'block') {
				// State visible, no Error & Event visible
				elBodyConsoleStateBox.style.left = '2%';
				elBodyConsoleStateBox.style.width = '97%';
			} else {
				// State & Event, no Error visible
				elBodyConsoleEventBox.style.left = '2%';
				elBodyConsoleEventBox.style.width = '31%';
				//
				elBodyConsoleStateBox.style.left = '35%';
				elBodyConsoleStateBox.style.width = '64%';
			}
		} else {
			// State & Error visible
			if (elBodyConsoleEventBox.style.display != 'block') {
				// State & Error visible, no Event visible
				elBodyConsoleErrorBox.style.left = '2%';
				elBodyConsoleErrorBox.style.width = '64%';
				//
				elBodyConsoleStateBox.style.left = '68%';
				elBodyConsoleStateBox.style.width = '31%';
				//
			} else {
				// State, Error & Event visible
				elBodyConsoleErrorBox.style.left = '2%';
				elBodyConsoleErrorBox.style.width = '31%';
				//
				elBodyConsoleEventBox.style.left = '35%';
				elBodyConsoleEventBox.style.width = '31%';
				//
				elBodyConsoleStateBox.style.left = '68%';
				elBodyConsoleStateBox.style.width = '31%';
			}
		}
	} else {
		// State not visible
		if (elBodyConsoleErrorBox.style.display != 'block') {
			// no State & Error visible
			if (elBodyConsoleEventBox.style.display != 'block') {
				// nothing visible, no State, Error & Event visible
			} else {
				// Event visible, no State & Error visible
				elBodyConsoleEventBox.style.left = '2%';
				elBodyConsoleEventBox.style.width = '97%';
			}
		} else {
			// Error visible, no State visible
			if (elBodyConsoleEventBox.style.display != 'block') {
				// Error visible, no State & Event visible
				elBodyConsoleErrorBox.style.left = '2%';
				elBodyConsoleErrorBox.style.width = '97%';
			} else {
				// Error & Event visible, no State visible
				elBodyConsoleErrorBox.style.left = '2%';
				elBodyConsoleErrorBox.style.width = '46%';
				//
				elBodyConsoleEventBox.style.left = '52%';
				elBodyConsoleEventBox.style.width = '46%';
				//
			}
		}
	}
}
// Body ViewToggle - Console
function fnBodyConsoleShow(DoHide, DoDebug) {
	//............................................................---//
	// Body Element Creation
	if (javaLoadFirst) { fnElementObjectCreate(); }
	//............................................................---//
	//
	if (DoDebug) {
		// Process Console Box Action
		if (DoHide) {
			fnBodyConsoleDebugButtons = false;
			// BodyConsoleDebugToggles.style.display = 'none';
			elBodyConsoleDebugMainToggles.style.display = 'none';
			elBodyConsoleDebugTypesToggles.style.display = 'none';
		} else {
			fnBodyConsoleDebugButtons = true;
			// BodyConsoleDebugToggles.style.display = 'block';
			elBodyConsoleDebugMainToggles.style.display = 'block';
			elBodyConsoleDebugTypesToggles.style.display = 'block';
		}
		if (elBodyConsoleDebugToggles.style.display != 'block'
			&& !debugTimerMove
			&& !debugTimerTransition
			&& !debugTimerDetail
			&& !errorUseDebugOnError
			&& !errorUseDebugOnAll
			&& !debugLogEvents
		) {
			// 			&& !errorUseDebugOnError
			elBodyConsoleDebugToggle.style.borderColor = ButtonIsOffColor;
		} else {
			elBodyConsoleDebugToggle.style.borderColor = ButtonIsOnColor;
		}
	} else {
		//
		// Process Console Box Action
		if (DoHide) {
			fnBodyConsoleBoxButtons = false;
			elBodyConsoleLogToggles.style.display = 'none';
			elBodyConsoleAuxillaryToggles.style.display = 'none';
		} else {
			fnBodyConsoleBoxButtons = true;
			elBodyConsoleLogToggles.style.display = 'block';
			elBodyConsoleAuxillaryToggles.style.display = 'block';
		}
		if (elBodyConsoleBox.style.display != 'block'
		) {
			/*
			&& elBodyConsoleErrorBox.style.display != 'block'
			&& elBodyConsoleEventBox.style.display != 'block'
			&& elBodyConsoleStateBox.style.display != 'block'
		*/
			elBodyConsoleToggle.style.borderColor = ButtonIsOffColor;
		} else {
			elBodyConsoleToggle.style.borderColor = ButtonIsOnColor;
		}
		//
	}
}
// Debug
///////////////////////////////////////////////
// Layout Next
function fnDebugStart(debugOptionPassed, debugMessagePassed) {
    if (!debugIsOn) { return; }
    if (debugDoAlert) {
        alert("Ready to debug: " + debugMessagePassed + "(" + debugOptionPassed + ")");
    } else {
        if (browserIsTEST) {
            debugger;
        }
        if (browserIsIE) {
            debugger;
        }
        if (browserIsFF) {
            // Throw something
            // throw "Ready to debug: " + debugMessagePassed + "(" + debugOptionPassed + ")";
            // Use degug instance (from VK)
            // debug-instance-off fnMenuImgShow;
			debugger; // 20230912 try it. todo
        }
    }
}
//
script_state = "MdmDebugConsole loaded";
