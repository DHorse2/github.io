// Section Console function (s)
// ...................................... //
// Body View Toggle, Console and Debug Message Areas
// ...................................... //
//
// Body Console and Message Area
var consoleContainer;
var consoleContainerLeft;
var consoleContainerCenter;
// Form focus and state
var consoleFormFocusWidthLast = 0;
var consoleFormFocusLeftLast = 0;
var consoleFormFocus = false;
var consoleFormChanged = false;
//
// Page Content Boxes
var consoleBox;
var consoleErrorBox;
var consoleErrorTextBox;
var consoleEventBox;
var consoleEventTextBox;
var consoleStateBox;
var consoleStateForm;
var consoleStateFormValid = false;
var consoleStateBoxValid = false;
var consoleStateTextBox;
var consoleTestBox;
var consoleTestTextBox;
//
// Containers for Console Buttons
var consoleBoxButtons;
var consoleBoxToggles;
var consoleLogToggles;
var consoleAuxillaryToggles;
//
// Console Buttons
var consoleToggle;
//
var consoleErrorToggle;
var consoleEventToggle;
var consoleStateToggle;
var consoleTestToggle;
var consoleClearToggle;
//
// Containers for Debug Buttons
var consoleDebugButtons;
var consoleDebugToggles;
var consoleDebugMainToggles;
var consoleDebugTypesToggles;
//
// Debug Buttons
var consoleDebugToggle;
//
var consoleDebugMoveToggle;
var consoleDebugTransitionToggle;
var consoleDebugDetailToggle;
var consoleDebugAllToggle;
var consoleDebugOnErrorToggle;
var consoleDebugEventsToggle;

// Body ViewToggle - Console
// ..................................................................................... _//
var BodyConsoleBoxButtons = true;
function BodyConsoleToggle(DoToggle, ConsoleBlockPassed) {
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
			if (DoToggle) {
				if (eventMouseOverEnabled) {
					eventMouseOverEnabled = false;
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Mouse Over Menus is OFF',
						'BodyConsoleToggle', 8307, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleMouseOverToggle.style.borderColor = ButtonIsOffColor;
				} else {
					eventMouseOverEnabled = true;
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Mouse Over Menus is ON',
						'BodyConsoleToggle', 8314, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleMouseOverToggle.style.borderColor = ButtonIsOnColor;
				}
				//
			} else {
				if (!eventMouseOverEnabled) {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Mouse Over Menus is OFF',
						'BodyConsoleToggle', 8317, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleMouseOverToggle.style.borderColor = ButtonIsOffColor;
				} else {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Mouse Over Menus is ON',
						'BodyConsoleToggle', 8314, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleMouseOverToggle.style.borderColor = ButtonIsOnColor;
				}

			}
			break;
		//
		case 'ConsoleError':
			if (DoToggle) {
				if (consoleBox.style.display != 'block') {
					boxStyleSaved = consoleErrorBox.style.display;
					BodyConsoleToggle(true, 'ConsoleAll');
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
			} else {
				if (consoleBox.style.display != 'block') {
					boxStyleSaved = consoleErrorBox.style.display;
				}
				if (consoleErrorBox.style.display == 'block') {
					consoleErrorToggle.style.borderColor = ButtonIsOnColor;
				} else {
					consoleErrorToggle.style.borderColor = ButtonIsOffColor;
				}
				//
				checkNoVisibleConsole = true;
				checkBoxSize = true;
			}
			break;
		//
		case 'ConsoleEvent':
			if (DoToggle) {
				if (consoleBox.style.display != 'block') {
					boxStyleSaved = consoleEventBox.style.display;
					BodyConsoleToggle(true, 'ConsoleAll');
					consoleEventBox.style.display = boxStyleSaved;
				} else {
					if (consoleEventBox.style.display != 'block') {
						consoleEventBox.style.display = 'block';
						consoleEventToggle.style.borderColor = ButtonIsOnColor;
						consoleErrorBox.style.width = '33%';
					} else {
						consoleEventBox.style.display = 'none';
						consoleEventToggle.style.borderColor = ButtonIsOffColor;
						consoleErrorBox.style.width = '66%';
					}
				}
				//
				checkNoVisibleConsole = true;
				checkBoxSize = true;
			} else {
				if (consoleBox.style.display != 'block') {
					boxStyleSaved = consoleEventBox.style.display;
				}
				if (consoleEventBox.style.display == 'block') {
					consoleEventToggle.style.borderColor = ButtonIsOnColor;
					consoleErrorBox.style.width = '33%';
				} else {
					consoleEventToggle.style.borderColor = ButtonIsOffColor;
					consoleErrorBox.style.width = '66%';
				}
				checkNoVisibleConsole = true;
				checkBoxSize = true;
			}
			break;
		//
		case 'ConsoleState':
			if (DoToggle) {
				if (consoleBox.style.display != 'block') {
					if (loadFirstDebugState) { ConsoleFormElementSyncLocal(false); }
					boxStyleSaved = consoleStateBox.style.display;
					BodyConsoleToggle(true, 'ConsoleAll');
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
			} else {
				if (consoleBox.style.display != 'block') {
					if (loadFirstDebugState) { ConsoleFormElementSyncLocal(false); }
					boxStyleSaved = consoleStateBox.style.display;
				}
				if (consoleStateBox.style.display == 'block') {
					consoleStateTextBox.style.display = 'block';
					consoleStateToggle.style.borderColor = ButtonIsOnColor;
				} else {
					consoleStateTextBox.style.display = 'none';
					consoleStateToggle.style.borderColor = ButtonIsOffColor;
				}
				//
				checkNoVisibleConsole = true;
				checkBoxSize = true;
			}
			break;
		//
		case 'ConsoleTest':
			if (consoleBox.style.display != 'block') {
				boxStyleSaved = consoleTestBox.style.display;
				BodyConsoleToggle(true, 'ConsoleAll');
				consoleTestBox.style.display = boxStyleSaved;
			}
			//
			if (consoleTestBox.style.display != 'block') {
				consoleTestBox.style.display = 'block';
				consoleTestTextBox.style.display = 'block';
				consoleTestToggle.style.borderColor = ButtonIsOnColor;
			}
			// execute test
			MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
				'This is a test SEVERE error message for checking the console display.',
				'BodyConsoleToggle', 8225, consoleTestBox, consoleTestBox,
				errorIsSevere, errorDoDisplayTag, errorDoNotAlert);
			MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
				'This is a test Warning! message for checking the console display.',
				'BodyConsoleToggle', 8225, 0, null, null,
				errorIsWarning, errorDoDisplayTag, errorDoNotAlert);
			MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
				'This is a test comment message for checking the console display.',
				'BodyConsoleToggle', 8225, 0, null, null,
				errorIsComment, errorDoDisplayTag, errorDoNotAlert);
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleClear':
			consoleErrorTextBox.innerHTML = '';
			MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
				'Error and Log Console has been cleared...',
				'BodyConsoleToggle', 8235, 0, null, null,
				errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
			//
			consoleClearToggle.style.backgroundColor = '';
			consoleClearToggle.style.color = '';
			consoleClearToggle.style.borderColor = '';
			errorSeverityHighest = 0;
			// consoleErrorLogCn = 0;
			// consoleErrorLogScrollCn = 0;
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		// ..................................................................................... _//
		//
		case 'ConsoleDebug':
			if ((consoleDebugMainToggles.style.display != 'block' && DoToggle)
				(consoleDebugMainToggles.style.display == 'block' && !DoToggle)) {
				ConsoleLogTimerMove = true;
				consoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
				ConsoleLogTimerTransition = true;
				consoleDebugTransitionToggle.style.borderColor = ButtonIsOnColor;
				ConsoleLogTimerDetail = true;
				consoleDebugDetailToggle.style.borderColor = ButtonIsOnColor;
				errorUseDebugOnAll = true;
				consoleDebugAllToggle.style.borderColor = ButtonIsOnColor;
				errorUseDebugOnError = true;
				consoleDebugOnErrorToggle.style.borderColor = ButtonIsOnColor;
				// errorUseDebugOnError = true;
				// consoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
				ConsoleLogEvents = true;
				consoleDebugEventsToggle.style.borderColor = ButtonIsOnColor;
				//
				BodyConsoleShow(DoNotUseHide, DoUseDebug);
				//
				if (consoleBox.style.display != 'block') {
					BodyConsoleToggle(true, 'ConsoleAll');
				}
				//
				if (errorUseDebugOnAll || errorUseDebugOnError) { errorUseDebugOnError = true; } else { errorUseDebugOnError = false; }
				if (ConsoleLogTimerMove || ConsoleLogTimerTransition) { ConsoleLogTimer = true; } else { ConsoleLogTimer = false; }
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
				ConsoleLogTimerMove = false;
				consoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
				ConsoleLogTimerTransition = false;
				consoleDebugTransitionToggle.style.borderColor = ButtonIsOffColor;
				ConsoleLogTimerDetail = false;
				consoleDebugDetailToggle.style.borderColor = ButtonIsOffColor;
				errorUseDebugOnAll = false;
				consoleDebugAllToggle.style.borderColor = ButtonIsOffColor;
				errorUseDebugOnError = false;
				consoleDebugOnErrorToggle.style.borderColor = ButtonIsOffColor;
				// errorUseDebugOnError = false;
				// consoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
				ConsoleLogEvents = false;
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
			if (DoToggle) {
				if (ConsoleLogTimerMove) {
					ConsoleLogTimerMove = false;
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug Move is OFF',
						'BodyConsoleToggle ConsoleDebugMove', 8313, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
				} else {
					ConsoleLogTimerMove = true;
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug Move is ON',
						'BodyConsoleToggle ConsoleDebugMove', 8323, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
					checkLogMode = true;
				}
				//
				if (ConsoleLogTimerMove || ConsoleLogTimerTransition) { ConsoleLogTimer = true; } else { ConsoleLogTimer = false; }
				//
				checkNoVisibleConsole = true;
				checkBoxSize = true;
			} else {
				if (!ConsoleLogTimerMove) {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug Move is OFF',
						'BodyConsoleToggle ConsoleDebugMove', 8333, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
				} else {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug Move is ON',
						'BodyConsoleToggle ConsoleDebugMove', 8343, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
					checkLogMode = true;
				}
				// Set this regardless
				if (ConsoleLogTimerMove || ConsoleLogTimerTransition) { ConsoleLogTimer = true; } else { ConsoleLogTimer = false; }
				if (!ConsoleLogTimerTransition) {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug Move Transition is OFF',
						'BodyConsoleToggle ConsoleDebugMove', 8353, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
				} else {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug Move Transition is ON',
						'BodyConsoleToggle ConsoleDebugMove', 8363, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
					checkLogMode = true;
				}
				//
				checkNoVisibleConsole = true;
				checkBoxSize = true;
			}
			break;
		//
		case 'ConsoleDebugTransition':
			if (ConsoleLogTimerTransition) {
				ConsoleLogTimerTransition = false;
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
					'Debug Transition is OFF',
					'BodyConsoleToggle', 8331, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleDebugTransitionToggle.style.borderColor = ButtonIsOffColor;
			} else {
				ConsoleLogTimerTransition = true;
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
					'Debug Transition is ON',
					'BodyConsoleToggle', 8341, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleDebugTransitionToggle.style.borderColor = ButtonIsOnColor;
				checkLogMode = true;
			}
			//
			if (ConsoleLogTimerMove || ConsoleLogTimerTransition) { ConsoleLogTimer = true; } else { ConsoleLogTimer = false; }
			//
			checkNoVisibleConsole = true;
			checkBoxSize = true;
			break;
		//
		case 'ConsoleDebugDetail':
			if (ConsoleLogTimerDetail) {
				ConsoleLogTimerDetail = false;
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
					'Debug Detail is OFF',
					'BodyConsoleToggle', 8355, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleDebugDetailToggle.style.borderColor = ButtonIsOffColor;
			} else {
				ConsoleLogTimerDetail = true;
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
					'Debug Detail is ON',
					'BodyConsoleToggle', 8365, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
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
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
					'Debug On Error in debugger is OFF',
					'BodyConsoleToggle', 8377, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleDebugOnErrorToggle.style.borderColor = ButtonIsOffColor;
			} else {
				errorUseDebugOnError = true;
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
					'Debug On Error in debugger is ON',
					'BodyConsoleToggle', 8387, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
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
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
					'Debug All messages in debugger is OFF',
					'BodyConsoleToggle', 8399, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleDebugAllToggle.style.borderColor = ButtonIsOffColor;
			} else {
				errorUseDebugOnAll = true;
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
					'Debug All messages in debugger is ON',
					'BodyConsoleToggle', 8406, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
				if (!errorUseDebugOnError) { BodyConsoleToggle(true, 'ConsoleDebugOnError'); }
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
			if (ConsoleLogEvents) {
				ConsoleLogEvents = false;
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
					'Debug (Mouse) Events is OFF',
					'BodyConsoleToggle', 8423, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
				consoleDebugEventsToggle.style.borderColor = ButtonIsOffColor;
			} else {
				ConsoleLogEvents = true;
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
					'Debug (Mouse) Events is ON',
					'BodyConsoleToggle', 8430, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
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
			if (consoleErrorBox.style.display != 'block') { BodyConsoleToggle(true, 'ConsoleError'); }
		} else {
			// if (consoleErrorBox.style.display = 'block') { BodyConsoleToggle(true, 'ConsoleError'); }
		}
		if (checkLogModeSeeEvents) {
			if (consoleEventBox.style.display != 'block') { BodyConsoleToggle(true, 'ConsoleEvent'); }
		} else {
			// if (consoleEventBox.style.display = 'block') { BodyConsoleToggle(true, 'ConsoleEvent'); }
		}
		if (consoleStateBox.style.display = 'block') { BodyConsoleToggle(true, 'ConsoleState'); }
	}
	//
	// Check if any Console Box settings are on or content is visible
	if (checkNoVisibleConsole) {
		if (consoleErrorBox.style.display != 'block'
			&& consoleEventBox.style.display != 'block'
			&& consoleStateBox.style.display != 'block'
		) {
			consoleBox.style.display = 'none';
			BodyConsoleShow(DoHide = true, errorDoDebug = false);
			checkBoxSize = false;
		} else {
			BodyConsoleShow(DoHide = false, errorDoDebug = false);
		}
		//
	}
	// Check if any Debugs settings are on or content is visible
	if (checkNoVisibleDebug) {
		if (consoleDebugToggles.style.display != 'block'
			&& !ConsoleLogTimerMove
			&& !ConsoleLogTimerTransition
			&& !ConsoleLogTimerDetail
			&& !errorUseDebugOnError
			&& !errorUseDebugOnAll
			&& !ConsoleLogEvents
		) {
			// 			&& !errorUseDebugOnError
			BodyConsoleShow(DoHide = true, errorDoDebug = true);
			checkBoxSize = false;
		} else {
			BodyConsoleShow(DoHide = false, errorDoDebug = true);
		}
	}
	//
	switch (ConsoleBlockPassed) {
		case 'ConsoleAll':
			checkBoxSize = true;
			if (DoToggle) {
				// Toggle Test 1 - Buttons Visible
				if (BodyConsoleBoxButtons) {
					if (consoleBox.style.display != 'block') {
						//
						if (loadFirstDebugState) {
							loadFirstDebugState = false;
							ConsoleFormElementSyncLocal(false);
						}
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
					} else if (consoleBox.style.display == 'block') {
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
			} else {
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
				consoleTestToggle.style.borderColor = ButtonIsOffColor;
				consoleClearToggle.style.borderColor = ButtonIsOffColor;
			}
		default:
			break;
	}
	//
	if (consoleStateBox.style.display == 'block') {
		// State visible
		if (consoleErrorBox.style.display != 'block') {
			// State visible, no Error visible
			if (consoleEventBox.style.display != 'block') {
				// State visible, no Error & Event visible
				consoleStateBox.style.left = '0%';
				consoleStateBox.style.width = '100%';
			} else {
				// State & Event, no Error visible
				consoleEventBox.style.left = '0%';
				consoleEventBox.style.width = '33%';
				//
				consoleStateBox.style.left = '35%';
				consoleStateBox.style.width = '66%';
			}
		} else {
			// State & Error visible
			if (consoleEventBox.style.display != 'block') {
				// State & Error visible, no Event visible
				consoleErrorBox.style.left = '0%';
				consoleErrorBox.style.width = '66%';
				//
				consoleStateBox.style.left = '66%';
				consoleStateBox.style.width = '33%';
				//
			} else {
				// State, Error & Event visible
				consoleErrorBox.style.left = '0%';
				consoleErrorBox.style.width = '33%';
				//
				consoleEventBox.style.left = '33%';
				consoleEventBox.style.width = '33%';
				//
				consoleStateBox.style.left = '66%';
				consoleStateBox.style.width = '33%';
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
				consoleEventBox.style.left = '0%';
				consoleEventBox.style.width = '100%';
			}
		} else {
			// Error visible, no State visible
			if (consoleEventBox.style.display != 'block') {
				// Error visible, no State & Event visible
				consoleErrorBox.style.left = '0%';
				consoleErrorBox.style.width = '97%';
			} else {
				// Error & Event visible, no State visible
				consoleErrorBox.style.left = '0%';
				consoleErrorBox.style.width = '50%';
				//
				consoleEventBox.style.left = '52%';
				consoleEventBox.style.width = '50%';
				//
			}
		}
	}
}
// Body ViewToggle - Console
// ...................................... //
function BodyConsoleShow(DoHide, errorDoDebug) {
	//............................................................---//
	// Body Element Creation
	if (loadFirstJava) { ElementObjectCreate(); }
	//............................................................---//
	//
	if (errorDoDebug) {
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
			&& !ConsoleLogTimerMove
			&& !ConsoleLogTimerTransition
			&& !ConsoleLogTimerDetail
			&& !errorUseDebugOnError
			&& !errorUseDebugOnAll
			&& !ConsoleLogEvents
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
// ...................................... //
// Layout Next
var debugStateMessage = "init";
// todo add to severity module
// console.trace();
// console.warn();
// console.log();
// console.info();
// console.error();
// console.clear();
// Start debugging
function DebugStart(debugOptionPassed, debugMessagePassed) {
	if (!UseDebug) { return; }
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

// Console Form ElementSync
function ConsoleStateInit() {
	// console.trace();
	// console.warn();
	// console.log();
	// console.info();
	// console.error();
	// console.clear();

	// BodyconsoleStateTextBox
	// consoleStateBox = document.getElementById('BodyConsoleStateTextBox');
	consoleStateBoxValid = false;
	if (!consoleStateBox) { consoleStateBox = ElementGetRef(consoleStateBox, 'BodyConsoleStateBox', 'BodyConsoleStateBox'); }
	// if (!consoleStateBox) { consoleStateBox = ElementGetRef(consoleStateBox, 'MdmPtConsoleForm', 'MdmPtConsoleForm'); }
	if (consoleStateBox) { consoleStateBoxValid = true; }

	// consoleStateForm = document.getElementById('BodyConsoleStateForm');
	consoleStateFormValid = false;
	if (!consoleStateForm) { consoleStateForm = ElementGetRef(consoleStateForm, 'MdmPtConsoleForm', 'MdmPtConsoleForm'); }
	// if (!consoleStateForm) { consoleStateForm = ElementGetRef(consoleStateForm, 'BodyConsoleTestBox', 'BodyConsoleTestBox'); }
	if (consoleStateForm) {
		consoleStateFormValid = true;
		ConsoleFormInit(clearElement = false, injectElement = true, consoleStateForm);
		// consoleStateForm.addEventListener("submit", () => { ConsoleFormElementSync(true); });
		// consoleStateForm.addEventListener("click", (event) => { ConsoleFormFocusToggle(event); })
		// // consoleStateForm.addEventListener("focusin", (event) => { ConsoleFormFocusIn(event); })
		// // consoleStateForm.addEventListener("focusout", (event) => { ConsoleFormFocusOut(event); })
	}
	if (loadFirstDebugState) {
		loadFirstDebugState = false;
		if (serverIsOn) {
			ConsoleFormElementSync(false);
		} else {
			ConsoleFormElementSyncLocal(false);
		}
	}
}
// Console Form View
function ConsoleFormFocusToggle(event) {
	if (!consoleFormFocus) {
		ConsoleFormFocusIn(event);
	} else {
		ConsoleFormFocusOut(event);
	}
}
function ConsoleFormElementChange(event) {
	//
	consoleFormChanged = true;
	elementObject = document.getElementById('FormApply');
	if (elementObject) {
		elementObject.style.backgroundColor = 'green';
	}
	// if (fromForm) {
	// 	if (elementObject.checked) { imgLoadUseInner = true; } else { imgLoadUseInner = false; }
	// } else {
	// 	if (imgLoadUseInner) { elementObject.checked = true; } else { elementObject.checked = false; }
	// }
	// consoleFormFocus = true;
	// ConsoleFormElementSync(false);
	// if (!consoleStateFormValid) {
	// 	ErrorOccured(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, eventCurr, consoleStateForm, consoleStateBox, "Cannot access Console Form.", errorIsWarning, errorDoNotDisplayTag, errorDoNotAlert);
	// 	// return;
	// }
	// if (!consoleStateBoxValid) {
	// 	ErrorOccured(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, eventCurr, consoleStateBox, consoleStateBox, "Cannot access Console Form.", errorIsSevere, errorDoNotDisplayTag, errorDoNotAlert);
	// 	return;
	// }
	// // update form (settings can be altered by running code)
	// ConsoleFormElementSync(false);
	// consoleFormFocusWidthLast = consoleStateBox.style.width;
	// consoleFormFocusLeftLast = consoleStateBox.style.left;
	// consoleStateBox.style.left = "0%";
	// consoleStateBox.style.width = "95%";
	// consoleStateForm.style.height = "600px";
}
function ConsoleFormFocusIn(event) {
	consoleFormFocus = true;
	ConsoleFormElementSync(false);
	if (!consoleStateFormValid) {
		ErrorOccured(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, eventCurr, consoleStateForm, consoleStateBox, "Cannot access Console Form.", errorIsWarning, errorDoNotDisplayTag, errorDoNotAlert);
		// return;
	}
	if (!consoleStateBoxValid) {
		ErrorOccured(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, eventCurr, consoleStateBox, consoleStateBox, "Cannot access Console Form.", errorIsSevere, errorDoNotDisplayTag, errorDoNotAlert);
		return;
	}
	// update form (settings can be altered by running code)
	ConsoleFormElementSync(false);
	consoleFormFocusWidthLast = consoleStateBox.style.width;
	consoleFormFocusLeftLast = consoleStateBox.style.left;
	consoleStateBox.style.left = "0%";
	consoleStateBox.style.width = "95%";
	consoleStateForm.style.height = "600px";
}
function ConsoleFormFocusOut(event) {
	consoleFormFocus = false;
	if (!consoleStateBoxValid) { return; }
	consoleStateBox.style.left = consoleFormFocusLeftLast;
	consoleStateBox.style.width = consoleFormFocusWidthLast;
	consoleStateForm.style.height = "";
}
//
script_state = "MdmDebugConsole loaded";
if (debugLoadIsOn) { debugger; }
