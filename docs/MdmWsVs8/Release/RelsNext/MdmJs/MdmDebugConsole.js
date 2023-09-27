// Section Console function (s)

// Body ViewToggle - Console
// ..................................................................................... _//
function BodyConsoleToggle(ConsoleBlockPassed) {
	var checkBoxSize = false;
	var checkNoVisibleDebug = false;
	var checkNoVisibleConsole = false;
	var checkLogMode = false;
	var checkLogModeSeeEvents = false;
	var checkLogModeSeeErrors = false;
	var boxStyleSaved = '';
	// Body Element Creation
	if (loadFirstJava) { ElementObjectCreate(); }
	//
	switch (ConsoleBlockPassed) {
		//
		case 'ConsoleMouseOver':
			if (eventMouseOverEnabled) {
				eventMouseOverEnabled = false;
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Mouse Over Menus is OFF',
					'BodyConsoleToggle', 8307, null, null,
					MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleMouseOverToggle.style.borderColor = ButtonIsOffColor;
			} else {
				eventMouseOverEnabled = true;
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Mouse Over Menus is ON',
					'BodyConsoleToggle', 8314, null, null,
					MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleMouseOverToggle.style.borderColor = ButtonIsOnColor;
			}
			//
			break;
		//
		case 'ConsoleError':
			if (consoleBox.style.display != 'block') {
				boxStyleSaved = consoleErrorBox.style.display;
				BodyConsoleToggle('ConsoleAll');
				consoleErrorBox.style.display = boxStyleSaved;
			} else {
				if (consoleErrorBox.style.display != 'block') {
					consoleErrorBox.style.display = 'block';
					consoleErrorToggle.style.borderColor = ButtonIsOnColor;
				} else {
					consoleErrorBox.style.display = 'none';
					consoleErrorToggle.style.borderColor = ButtonIsOffColor;
				}
			}
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleEvent':
			if (consoleBox.style.display != 'block') {
				boxStyleSaved = consoleEventBox.style.display;
				BodyConsoleToggle('ConsoleAll');
				consoleEventBox.style.display = boxStyleSaved;
			} else {
				if (consoleEventBox.style.display != 'block') {
					consoleEventBox.style.display = 'block';
					consoleEventToggle.style.borderColor = ButtonIsOnColor;
					consoleErrorBox.style.width = '31%';
				} else {
					consoleEventBox.style.display = 'none';
					consoleEventToggle.style.borderColor = ButtonIsOffColor;
					consoleErrorBox.style.width = '64%';
				}
			}
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleState':
			if (consoleBox.style.display != 'block') {
				if (loadFirebugState) { DebugParameterInit(); }
				boxStyleSaved = consoleStateBox.style.display;
				BodyConsoleToggle('ConsoleAll');
				consoleStateBox.style.display = boxStyleSaved;
			} else {
				if (consoleStateBox.style.display != 'block') {
					consoleStateBox.style.display = 'block';
					consoleStateTextBox.style.display = 'block';
					consoleStateToggle.style.borderColor = ButtonIsOnColor;
				} else {
					consoleStateBox.style.display = 'none';
					consoleStateTextBox.style.display = 'none';
					consoleStateToggle.style.borderColor = ButtonIsOffColor;
				}
			}
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleTest':
			if (consoleBox.style.display != 'block') {
				boxStyleSaved = consoleTestBox.style.display;
				BodyConsoleToggle('ConsoleAll');
				consoleTestBox.style.display = boxStyleSaved;
			}
			//
			if (consoleTestBox.style.display != 'block') {
				consoleTestBox.style.display = 'block';
				consoleTestTextBox.style.display = 'block';
				consoleTestToggle.style.borderColor = ButtonIsOnColor;
			}
			// execute test
			MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingeLine,
				'This is a test message for checking the console display...',
				'BodyConsoleToggle', 8225, consoleTestBox, consoleTestBox,
				errorSevere, errorDoDisplayTag, errorDoAlert);
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleClear':
			consoleErrorTextBox.innerHTML = '';
			MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
				'Error and Log Console has been cleared...',
				'BodyConsoleToggle', 8235, null, null,
				MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
			//
			consoleClearToggle.style.backgroundColor = '';
			consoleClearToggle.style.color = '';
			consoleClearToggle.style.borderColor = '';
			errorSeverityHighest = 0;
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		// ..................................................................................... _//
		//
		case 'ConsoleDebug':
			if (consoleDebugMainToggles.style.display != 'block') {
				debugTimerMove = true;
				consoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
				debugTimerTransition = true;
				consoleDebugTransitionToggle.style.borderColor = ButtonIsOnColor;
				debugTimerDetail = true;
				consoleDebugDetailToggle.style.borderColor = ButtonIsOnColor;
				errorUseDebugOnAll = true;
				consoleDebugAllToggle.style.borderColor = ButtonIsOnColor;
				errorUseDebugOnError = true;
				consoleDebugOnErrorToggle.style.borderColor = ButtonIsOnColor;
				// errorUseDebugOnError = true;
				// consoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
				debugLogEvents = true;
				consoleDebugEventsToggle.style.borderColor = ButtonIsOnColor;
				//
				BodyConsoleShow(DoNotUseHide, DoUseDebug);
				//
				if (consoleBox.style.display != 'block') {
					BodyConsoleToggle('ConsoleAll');
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
				consoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
				debugTimerTransition = false;
				consoleDebugTransitionToggle.style.borderColor = ButtonIsOffColor;
				debugTimerDetail = false;
				consoleDebugDetailToggle.style.borderColor = ButtonIsOffColor;
				errorUseDebugOnAll = false;
				consoleDebugAllToggle.style.borderColor = ButtonIsOffColor;
				errorUseDebugOnError = false;
				consoleDebugOnErrorToggle.style.borderColor = ButtonIsOffColor;
				// errorUseDebugOnError = false;
				// consoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
				debugLogEvents = false;
				consoleDebugEventsToggle.style.borderColor = ButtonIsOffColor;
				//
				BodyConsoleShow(DoUseHide, DoUseDebug);
				// consoleDebugToggles.style.display = 'none';
				consoleDebugToggle.style.borderColor = ButtonIsOffColor;
				BodyConsoleDebugButtons = false;
			}
			break;
		//
		case 'ConsoleDebugMove':
			if (debugTimerMove) {
				debugTimerMove = false;
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug Move is OFF',
					'BodyConsoleToggle', 8307, null, null,
					MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
			} else {
				debugTimerMove = true;
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug Move is ON',
					'BodyConsoleToggle', 8314, null, null,
					MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
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
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug Transition is OFF',
					'BodyConsoleToggle', 8331, null, null,
					MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleDebugTransitionToggle.style.borderColor = ButtonIsOffColor;
			} else {
				debugTimerTransition = true;
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug Transition is ON',
					'BodyConsoleToggle', 8338, null, null,
					MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleDebugTransitionToggle.style.borderColor = ButtonIsOnColor;
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
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug Detail is OFF',
					'BodyConsoleToggle', 8355, null, null,
					MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleDebugDetailToggle.style.borderColor = ButtonIsOffColor;
			} else {
				debugTimerDetail = true;
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug Detail is ON',
					'BodyConsoleToggle', 8362, null, null,
					MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleDebugDetailToggle.style.borderColor = ButtonIsOnColor;
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
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug On Error in debugger is OFF',
					'BodyConsoleToggle', 8377, null, null,
					MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleDebugOnErrorToggle.style.borderColor = ButtonIsOffColor;
			} else {
				errorUseDebugOnError = true;
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug On Error in debugger is ON',
					'BodyConsoleToggle', 8384, null, null,
					MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleDebugOnErrorToggle.style.borderColor = ButtonIsOnColor;
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
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug All messages in debugger is OFF',
					'BodyConsoleToggle', 8399, null, null,
					MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleDebugAllToggle.style.borderColor = ButtonIsOffColor;
			} else {
				errorUseDebugOnAll = true;
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug All messages in debugger is ON',
					'BodyConsoleToggle', 8406, null, null,
					MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				if (!errorUseDebugOnError) { BodyConsoleToggle('ConsoleDebugOnError'); }
				consoleDebugAllToggle.style.borderColor = ButtonIsOnColor;
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
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug (Mouse) Events is OFF',
					'BodyConsoleToggle', 8423, null, null,
					MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleDebugEventsToggle.style.borderColor = ButtonIsOffColor;
			} else {
				debugLogEvents = true;
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
					'Debug (Mouse) Events is ON',
					'BodyConsoleToggle', 8430, null, null,
					MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleDebugEventsToggle.style.borderColor = ButtonIsOnColor;
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
			if (consoleErrorBox.style.display != 'block') { BodyConsoleToggle('ConsoleError'); }
		} else {
			// if (consoleErrorBox.style.display = 'block') { BodyConsoleToggle('ConsoleError'); }
		}
		if (checkLogModeSeeEvents) {
			if (consoleEventBox.style.display != 'block') { BodyConsoleToggle('ConsoleEvent'); }
		} else {
			// if (consoleEventBox.style.display = 'block') { BodyConsoleToggle('ConsoleEvent'); }
		}
		if (consoleStateBox.style.display = 'block') { BodyConsoleToggle('ConsoleState'); }
	}
	//
	// Check if any Console Box settings are on or content is visible
	if (checkNoVisibleConsole) {
		if (consoleErrorBox.style.display != 'block'
			&& consoleEventBox.style.display != 'block'
			&& consoleStateBox.style.display != 'block'
		) {
			consoleBox.style.display = 'none';
			BodyConsoleShow(DoHide = true, DoDebug = false);
			checkBoxSize = false;
		} else {
			BodyConsoleShow(DoHide = false, DoDebug = false);
		}
		//
	}
	// Check if any Debugs settings are on or content is visible
	if (checkNoVisibleDebug) {
		if (consoleDebugToggles.style.display != 'block'
			&& !debugTimerMove
			&& !debugTimerTransition
			&& !debugTimerDetail
			&& !errorUseDebugOnError
			&& !errorUseDebugOnAll
			&& !debugLogEvents
		) {
			// 			&& !errorUseDebugOnError
			BodyConsoleShow(DoHide = true, DoDebug = true);
			checkBoxSize = false;
		} else {
			BodyConsoleShow(DoHide = false, DoDebug = true);
		}
	}
	//
	switch (ConsoleBlockPassed) {
		case 'ConsoleAll':
			checkBoxSize = true;
			// Toggle Test 1 - Buttons Visible
			if (BodyConsoleBoxButtons) {
				if (consoleBox.style.display != 'block') {
					//
					if (loadFirebugState) { DebugParameterInit(); }
					//
					// consoleTop.style.display = 'block';
					//
					consoleBox.style.display = 'block';
					//
					BodyConsoleShow(DoNotUseHide, DoNotUseDebug);
					//
					if (consoleErrorBox.style.display != 'block'
						&& consoleEventBox.style.display != 'block'
						&& consoleStateBox.style.display != 'block') {
						consoleErrorBox.style.display = 'block';
						consoleEventBox.style.display = 'block';
						consoleStateBox.style.display = 'block';
						consoleStateTextBox.style.display = 'block';
						consoleStateTextBox.style.display = 'block';
						consoleTestBox.style.display = 'block';
						consoleTestTextBox.style.display = 'block';
						consoleTestToggle.style.display = 'block';
						consoleClearToggle.style.display = 'block';
					}
					//
					if (consoleErrorBox.style.display = 'block') {
						consoleErrorToggle.style.borderColor = ButtonIsOnColor;
					} else { consoleErrorToggle.style.borderColor = ButtonIsOffColor; }
					//
					if (consoleEventBox.style.display = 'block') {
						consoleEventToggle.style.borderColor = ButtonIsOnColor;
					} else { consoleEventToggle.style.borderColor = ButtonIsOffColor; }
					//
					if (consoleStateBox.style.display = 'block') {
						consoleStateToggle.style.borderColor = ButtonIsOnColor;
					} else { consoleStateToggle.style.borderColor = ButtonIsOffColor; }
					//
					// Toggle Test 2 - Display Not Window Visible
				} else if (consoleBox.style.display = 'block') {
					// consoleTop.style.display = 'none';
					//
					consoleBox.style.display = 'none';
					//
					BodyConsoleShow(DoUseHide, DoNotUseDebug);
					//
				}
				//
				// Toggle Test 2 - Display Window Visible
			} else {
				//
				consoleBox.style.display = 'block';
				//
				BodyConsoleShow(DoNotUseHide, DoNotUseDebug);
			}
		default:
			break;
	}
	//
	if (consoleStateBox.style.display = 'block') {
		// State visible
		if (consoleErrorBox.style.display != 'block') {
			// State visible, no Error visible
			if (consoleEventBox.style.display != 'block') {
				// State visible, no Error & Event visible
				consoleStateBox.style.left = '2%';
				consoleStateBox.style.width = '97%';
			} else {
				// State & Event, no Error visible
				consoleEventBox.style.left = '2%';
				consoleEventBox.style.width = '31%';
				//
				consoleStateBox.style.left = '35%';
				consoleStateBox.style.width = '64%';
			}
		} else {
			// State & Error visible
			if (consoleEventBox.style.display != 'block') {
				// State & Error visible, no Event visible
				consoleErrorBox.style.left = '2%';
				consoleErrorBox.style.width = '64%';
				//
				consoleStateBox.style.left = '68%';
				consoleStateBox.style.width = '31%';
				//
			} else {
				// State, Error & Event visible
				consoleErrorBox.style.left = '2%';
				consoleErrorBox.style.width = '31%';
				//
				consoleEventBox.style.left = '35%';
				consoleEventBox.style.width = '31%';
				//
				consoleStateBox.style.left = '68%';
				consoleStateBox.style.width = '31%';
			}
		}
	} else {
		// State not visible
		if (consoleErrorBox.style.display != 'block') {
			// no State & Error visible
			if (consoleEventBox.style.display != 'block') {
				// nothing visible, no State, Error & Event visible
			} else {
				// Event visible, no State & Error visible
				consoleEventBox.style.left = '2%';
				consoleEventBox.style.width = '97%';
			}
		} else {
			// Error visible, no State visible
			if (consoleEventBox.style.display != 'block') {
				// Error visible, no State & Event visible
				consoleErrorBox.style.left = '2%';
				consoleErrorBox.style.width = '97%';
			} else {
				// Error & Event visible, no State visible
				consoleErrorBox.style.left = '2%';
				consoleErrorBox.style.width = '46%';
				//
				consoleEventBox.style.left = '52%';
				consoleEventBox.style.width = '46%';
				//
			}
		}
	}
}
// Body ViewToggle - Console
function BodyConsoleShow(DoHide, DoDebug) {
	//............................................................---//
	// Body Element Creation
	if (loadFirstJava) { ElementObjectCreate(); }
	//............................................................---//
	//
	if (DoDebug) {
		// Process Console Box Action
		if (DoHide) {
			BodyConsoleDebugButtons = false;
			// BodyConsoleDebugToggles.style.display = 'none';
			consoleDebugMainToggles.style.display = 'none';
			consoleDebugTypesToggles.style.display = 'none';
		} else {
			BodyConsoleDebugButtons = true;
			// BodyConsoleDebugToggles.style.display = 'block';
			consoleDebugMainToggles.style.display = 'block';
			consoleDebugTypesToggles.style.display = 'block';
		}
		if (consoleDebugToggles.style.display != 'block'
			&& !debugTimerMove
			&& !debugTimerTransition
			&& !debugTimerDetail
			&& !errorUseDebugOnError
			&& !errorUseDebugOnAll
			&& !debugLogEvents
		) {
			// 			&& !errorUseDebugOnError
			consoleDebugToggle.style.borderColor = ButtonIsOffColor;
		} else {
			consoleDebugToggle.style.borderColor = ButtonIsOnColor;
		}
	} else {
		//
		// Process Console Box Action
		if (DoHide) {
			BodyConsoleBoxButtons = false;
			consoleLogToggles.style.display = 'none';
			consoleAuxillaryToggles.style.display = 'none';
		} else {
			BodyConsoleBoxButtons = true;
			consoleLogToggles.style.display = 'block';
			consoleAuxillaryToggles.style.display = 'block';
		}
		if (consoleBox.style.display != 'block'
		) {
			/*
			&& consoleErrorBox.style.display != 'block'
			&& consoleEventBox.style.display != 'block'
			&& consoleStateBox.style.display != 'block'
		*/
			consoleToggle.style.borderColor = ButtonIsOffColor;
		} else {
			consoleToggle.style.borderColor = ButtonIsOnColor;
		}
		//
	}
}
// Debug
///////////////////////////////////////////////
// Layout Next
var debugStateMessage = "init";
// todo add to severity module
console.trace();
console.warn();
console.log();
console.info();
console.error();
console.clear();
// Start debugging
function DebugStart(debugOptionPassed, debugMessagePassed) {
    if (!debugIsOn) { return; }
	debugStateMessage = "Ready to debug: " + debugMessagePassed + "(" + debugOptionPassed + ")"
	console.log(debugStateMessage);
    if (debugDoAlert) {
        alert(debugStateMessage);
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
            // debug-instance-off MenuImgShow;
			debugger; // 20230912 try it. todo
        }
    }
}
//
script_state = "MdmDebugConsole loaded";
if (debugLoadIsOn) { debugger; }
