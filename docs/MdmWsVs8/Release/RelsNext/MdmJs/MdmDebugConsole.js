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
var consoleFormFocusHeightLast = 0;
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
var consoleStateFormContainer;
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
function BodyConsoleToggle(DoSetValuePassed, elementValuePassed, DoTogglePassed, ConsoleBlockPassed) {
	var checkBoxSize = false;
	var checkNoVisibleDebug = false;
	var checkNoVisibleConsole = false;
	var checkLogMode = false;
	var checkLogModeSeeEvents = false;
	var checkLogModeSeeErrors = false;
	var consoleToggleResult = null;
	var boxStyleSaved = '';
	//
	script_state = 'Toggle is ' + DoTogglePassed + ' for ' + ConsoleBlockPassed + '.';
	try {
		// Body Element Creation
		if (loadFirstJava) { ElementObjectCreate(); }
		//
			// ..................................................................................... _//
			switch (ConsoleBlockPassed) {
			//
			case 'ConsoleMouseOver':
				script_state += "BodyConsoleToggle:ConsoleMouseOver:" + DoTogglePassed;
				if (DoTogglePassed) {
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
				consoleToggleResult = eventMouseOverEnabled;
				break;
			//
			// ..................................................................................... _//
			case 'ConsoleError':
				script_state = "BodyConsoleToggle:ConsoleError:" + DoTogglePassed;
				if (DoTogglePassed) {
					if (consoleBox.style.display != 'block') {
						boxStyleSaved = consoleErrorBox.style.display;
						BodyConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleAll');
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
				consoleToggleResult = consoleBox.style.display;
				break;
			//
			case 'ConsoleEvent':
				script_state = "BodyConsoleToggle:ConsoleEvent:" + DoTogglePassed;
				if (DoTogglePassed) {
					if (consoleBox.style.display != 'block') {
						boxStyleSaved = consoleEventBox.style.display;
						BodyConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleAll');
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
				consoleToggleResult = consoleEventBox.style.display;
				break;
			//
			case 'ConsoleState':
				script_state = "BodyConsoleToggle:ConsoleState:" + DoTogglePassed;
				if (DoTogglePassed) {
					if (consoleBox.style.display != 'block') {
						if (loadFirstDebugState) { ConsoleFormElementSyncLocal(false); }
						boxStyleSaved = consoleStateBox.style.display;
						BodyConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleAll');
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
				consoleToggleResult = consoleStateBox.style.display;
				break;
			//
			// ..................................................................................... _//
			case 'ConsoleTest':
				script_state = "BodyConsoleToggle:ConsoleTest:" + DoTogglePassed;
				errorMessage = '';
				try {
					consoleToggleResult = false;
					if (consoleBox.style.display != 'block') {
						boxStyleSaved = consoleTestBox.style.display;
						BodyConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleAll');
						consoleTestBox.style.display = boxStyleSaved;
					}
					//
					if (consoleTestBox.style.display != 'block') {
						consoleTestBox.style.display = 'block';
						consoleTestTextBox.style.display = 'block';
						consoleTestToggle.style.borderColor = ButtonIsOnColor;
					}
					// execute test
					errorMessage = 'This is a test SEVERE error message for checking the console display.';
					MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
						errorMessage,
						script_state, 8225, consoleTestBox, consoleTestBox,
						errorIsSevere, errorDoDisplayTag, errorDoNotAlert);
					errorMessage = 'This is a test Warning! message for checking the console display.';
					MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
						errorMessage,
						script_state, 8225, 0, null, null,
						errorIsWarning, errorDoDisplayTag, errorDoNotAlert);
					errorMessage = 'This is a test comment message for checking the console display.';
					MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
						errorMessage,
						script_state, 8225, 0, null, null,
						errorIsComment, errorDoDisplayTag, errorDoNotAlert);
					//
					ConsoleStateTest();
					//
					checkNoVisibleConsole = true;
					checkBoxSize = true;
					script_state += 'Done'
					consoleToggleResult = true;

				} catch (consoleStateTestErr) {
					// Errors:
					// ...................................... //
					ErrorCaught(consoleStateTestErr, script_state + ' ' + errorMessage, errorIsSevere);
					// script_state = "Form sync: aborted wit an error";
				} finally {
					// ...................................... //
					// try {
					if (ConsoleLogAlert) {
						MessageLog(null, DoNotUseDebug, DoUseSingleLine,
							'State Test completed.',
							script_state, 1211, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					}
					//
					// } catch (consoleStateFormErr) {
					// 	script_state = "Form sync: Can't access FormApply button";
					// 	ErrorCaught(consoleStateFormErr, script_state, errorIsSevere);
					// 	// script_state = "Form sync: aborted wit an error";

					// }
				}
				consoleToggleResult = script_state;
				break;
			//
			case 'ConsoleClear':
				script_state = "BodyConsoleToggle:ConsoleClear:" + DoTogglePassed;
				consoleErrorTextBox.innerHTML = '';
				errorMessage = 'Error and Log Console has been cleared...';
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
					errorMessage,
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
				consoleToggleResult = true;
				break;
			// ..................................................................................... _//
			// ..................................................................................... _//
			case 'ConsoleDebug':
				script_state = "BodyConsoleToggle:ConsoleDebug:" + DoTogglePassed;
				if ((consoleDebugMainToggles.style.display != 'block' && DoTogglePassed)
					(consoleDebugMainToggles.style.display == 'block' && !DoTogglePassed)) {
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
						BodyConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleAll');
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
					consoleToggleResult = true;
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
					consoleToggleResult = false;
				}
				break;
			//
			case 'ConsoleDebugMove':
				script_state = "BodyConsoleToggle:ConsoleDebugMove:" + DoTogglePassed;
				if (DoTogglePassed) {
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
				consoleToggleResult = (ConsoleLogTimerMove || ConsoleLogTimerTransition);
				break;
			//
			case 'ConsoleDebugTransition':
				script_state = "BodyConsoleToggle:ConsoleDebugTransition:" + DoTogglePassed;
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
				consoleToggleResult = ConsoleLogTimerTransition;
				break;
			//
			case 'ConsoleDebugDetail':
				script_state = "BodyConsoleToggle:ConsoleDebugDetail:" + DoTogglePassed;
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
				consoleToggleResult = ConsoleLogTimerDetail;
				break;
			//
			case 'ConsoleDebugOnError':
				script_state = "BodyConsoleToggle:ConsoleDebugOnError:" + DoTogglePassed;
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
				consoleToggleResult = errorUseDebugOnError;
				break;
			//
			case 'ConsoleDebugAll':
				script_state = "BodyConsoleToggle:ConsoleDebugAll:" + DoTogglePassed;
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
					if (!errorUseDebugOnError) { BodyConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleDebugOnError'); }
					consoleDebugAllToggle.style.borderColor = ButtonIsOnColor;
					checkLogMode = true;
				}
				//
				checkLogModeSeeEvents = false;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = errorUseDebugOnAll;
				break;
			//
			case 'ConsoleDebugEvents':
				script_state = "BodyConsoleToggle:ConsoleDebugEvents:" + DoTogglePassed;
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
				consoleToggleResult = ConsoleLogEvents;
				break;
			//
			default:
				consoleToggleResult = 'Error in default';
				script_state = "BodyConsoleToggle:default:" + DoTogglePassed + ':' + consoleToggleResult;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				break;
		}
		// ..................................................................................... _//
		//
		if (checkLogMode) {
			if (checkLogModeSeeErrors) {
				if (consoleErrorBox.style.display != 'block') { BodyConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleError'); }
			} else {
				// if (consoleErrorBox.style.display = 'block') { BodyConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleError'); }
			}
			if (checkLogModeSeeEvents) {
				if (consoleEventBox.style.display != 'block') { BodyConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleEvent'); }
			} else {
				// if (consoleEventBox.style.display = 'block') { BodyConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleEvent'); }
			}
			if (consoleStateBox.style.display = 'block') { BodyConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleState'); }
		}
		BodyConsoleShowEach(DoTogglePassed, ConsoleBlockPassed, consoleToggleResult, checkNoVisibleConsole, checkNoVisibleDebug);

	} catch (consoleToggleErr) {
		// Errors:
		// ...................................... //
		 'Resulting in ' + consoleToggleResult;
		ErrorCaught(consoleToggleErr, script_state + ' Resulting in ' + consoleToggleResult, errorIsSevere);
		// script_state = "Form sync: aborted wit an error";
	} finally {
		// ...................................... //
		// try {
		if (ConsoleLogAlert) {
			MessageLog(null, DoNotUseDebug, DoUseSingleLine,
				'Setting:' + ConsoleBlockPassed + ' Toggle:' + DoTogglePassed
				+ ' State:' + script_state
				+ ' Resulting in ' + consoleToggleResult
				+ ' Console Toggle done.',
				'MdmDebugConsole: BodyConsoleToggle', 593, 0, null, null,
				errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
	}
	return consoleToggleResult;
}
function BodyConsoleShowEach(DoTogglePassed, ConsoleBlockPassed, consoleToggleResult, checkNoVisibleConsole, checkNoVisibleDebug) {
	//
	// Check if any Console Box settings are on or content is visible
	if (checkNoVisibleConsole) {
		if (consoleErrorBox.style.display != 'block'
			&& consoleEventBox.style.display != 'block'
			&& consoleStateBox.style.display != 'block'
		) {
			consoleBox.style.display = 'none';
			BodyConsoleShow(DoUseHide, DoNotUseDebug);
			checkBoxSize = false;
		} else {
			consoleBox.style.display = 'block';
			BodyConsoleShow(DoNotUseHide, DoNotUseDebug);
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
			BodyConsoleShow(DoUseHide, DoUseDebug);
			checkBoxSize = false;
		} else {
			BodyConsoleShow(DoNotUseHide, DoUseDebug);
		}
	}
	//
	switch (ConsoleBlockPassed) {
		case 'ConsoleAll':
			checkBoxSize = true;
			if (DoTogglePassed) {
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
				// if (consoleErrorBox.style.display = 'block') {
				// 	consoleErrorToggle.style.borderColor = ButtonIsOnColor;
				// } else { consoleErrorToggle.style.borderColor = ButtonIsOffColor; }
				// //
				// if (consoleEventBox.style.display = 'block') {
				// 	consoleEventToggle.style.borderColor = ButtonIsOnColor;
				// } else { consoleEventToggle.style.borderColor = ButtonIsOffColor; }
				// //
				// if (consoleStateBox.style.display = 'block') {
				// 	consoleStateToggle.style.borderColor = ButtonIsOnColor;
				// } else { consoleStateToggle.style.borderColor = ButtonIsOffColor; }
				// consoleTestToggle.style.borderColor = ButtonIsOffColor;
				// consoleClearToggle.style.borderColor = ButtonIsOffColor;
			}
		default:
			break;
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
	consoleTestToggle.style.borderColor = ButtonIsOnColor;
	consoleClearToggle.style.borderColor = ButtonIsOnColor;
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
				consoleErrorBox.style.width = '49%';
				//
				consoleEventBox.style.left = '50%';
				consoleEventBox.style.width = '49%';
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
			// consoleErrorBox.style.display = 'none';
			// consoleEventBox.style.display = 'none';
			// consoleStateBox.style.display = 'none';
			// was // BodyConsoleDebugToggles.style.display = 'none';
			// consoleDebugMainToggles.style.display = 'none';
			// consoleDebugTypesToggles.style.display = 'none';
		} else {
			BodyConsoleDebugButtons = true;
			consoleBox.style.display = 'block';
			consoleErrorBox.style.display = 'block';
			// consoleEventBox.style.display = 'block';
			// consoleStateBox.style.display = 'block';
			// // BodyConsoleDebugToggles.style.display = 'block';
			// consoleDebugMainToggles.style.display = 'block';
			// consoleDebugTypesToggles.style.display = 'block';
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
			// consoleErrorBox.style.display = 'none';
			// consoleEventBox.style.display = 'none';
			// consoleStateBox.style.display = 'none';
			// consoleLogToggles.style.display = 'none';
			// consoleAuxillaryToggles.style.display = 'none';
			BodyConsoleShowEach(true, true);
		} else {
			BodyConsoleBoxButtons = true;
			consoleBox.style.display = 'block';
			consoleErrorBox.style.display = 'block';
			// consoleEventBox.style.display = 'block';
			// consoleStateBox.style.display = 'block';
			// was // consoleLogToggles.style.display = 'block';
			// consoleAuxillaryToggles.style.display = 'block';
		}
		if (consoleBox.style.display != 'block') {
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
var debugStateMessage = 'init';
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
	debugStateMessage = 'Ready to debug: ' + debugMessagePassed + '(' + debugOptionPassed + ')'
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
			// throw 'Ready to debug: ' + debugMessagePassed + '(' + debugOptionPassed + ')';
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
	if (consoleStateBox) {
		consoleStateBoxValid = true;
	}

	if (!consoleTestBox) { consoleTestBox = ElementGetRef(consoleTestBox, 'BodyConsoleTestBox', 'BodyConsoleTestBox'); }
	if (consoleTestBox) {
		consoleTestBox.style.width = '100%'
	}
	//
	// consoleStateForm = document.getElementById('BodyConsoleStateForm');
	consoleStateFormValid = false;
	// if (!consoleStateForm) { consoleStateForm = ElementGetRef(consoleStateForm, 'BodyConsoleStateForm', 'BodyConsoleStateForm'); }
	// if (!consoleStateFormContainer) { consoleStateFormContainer = ElementGetRef(consoleStateFormContainer, 'MdmPtConsoleForm', 'MdmPtConsoleForm'); }
	if (!consoleStateFormContainer) { consoleStateFormContainer = ElementGetRef(consoleStateFormContainer, 'BodyConsoleStateForm', 'BodyConsoleStateForm'); }
	if (!consoleStateFormContainer) { consoleStateFormContainer = consoleTestBox; }
	if (!consoleStateForm) { consoleStateForm = ElementGetRef(consoleStateForm, 'MdmPtConsoleForm', 'MdmPtConsoleForm'); }
	if (consoleStateForm) {
		consoleStateFormValid = true;
		consoleStateForm.style.width = '100%'
		consoleStateForm.style.float = 'none';
		ConsoleFormInit(clearElement = false, injectElement = true, consoleStateForm);
		if (!consoleStateForm) { consoleStateForm = ElementGetRef(consoleStateForm, 'BodyConsoleStateForm', 'BodyConsoleStateForm'); }
		// consoleStateForm.addEventListener('submit', () => { ConsoleFormElementSync(true); });
		// consoleStateForm.addEventListener('click', (event) => { ConsoleFormFocusToggle(event); })
		// // consoleStateForm.addEventListener('focusin', (event) => { ConsoleFormFocusIn(event); })
		// // consoleStateForm.addEventListener('focusout', (event) => { ConsoleFormFocusOut(event); })
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
	// 	ErrorOccured(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, eventCurr, consoleStateForm, consoleStateBox, 'Cannot access Console Form.', errorIsWarning, errorDoNotDisplayTag, errorDoNotAlert);
	// 	// return;
	// }
	// if (!consoleStateBoxValid) {
	// 	ErrorOccured(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, eventCurr, consoleStateBox, consoleStateBox, 'Cannot access Console Form.', errorIsSevere, errorDoNotDisplayTag, errorDoNotAlert);
	// 	return;
	// }
	// // update form (settings can be altered by running code)
	// ConsoleFormElementSync(false);
	// consoleFormFocusWidthLast = consoleStateBox.style.width;
	// consoleFormFocusLeftLast = consoleStateBox.style.left;
	// consoleStateBox.style.left = '0%';
	// consoleStateBox.style.width = '95%';
	// consoleStateForm.style.height = '600px';
}
function ConsoleFormFocusIn(event) {
	consoleFormFocus = true;
	ConsoleFormElementSync(false);
	if (!consoleStateFormValid) {
		ErrorOccured(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, eventCurr, consoleStateForm, consoleStateBox, 'Cannot access Console Form.', errorIsWarning, errorDoNotDisplayTag, errorDoNotAlert);
		// return;
	}
	if (!consoleStateBoxValid) {
		ErrorOccured(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, eventCurr, consoleStateBox, consoleStateBox, 'Cannot access Console Form.', errorIsSevere, errorDoNotDisplayTag, errorDoNotAlert);
		return;
	}
	// update form (settings can be altered by running code)
	ConsoleFormElementSync(false);
	consoleFormFocusWidthLast = consoleStateBox.style.width;
	consoleFormFocusHeightLast = consoleStateBox.style.height;
	consoleFormFocusLeftLast = consoleStateBox.style.left;
	consoleStateBox.style.left = '0%';
	consoleStateBox.style.width = '100%';
	consoleStateForm.style.width = '100%';
	consoleStateForm.style.float = 'none';
	consoleStateBox.style.height = consoleStateForm.scrollHeight;
	consoleTestBox.style.height = consoleStateForm.scrollHeight;
	// consoleStateBox.style.height = consoleStateBox.scrollHeight;
	// consoleStateForm.style.height = '600px';
	// consoleStateForm.style.height = '100%';
}
function ConsoleFormFocusOut(event) {
	consoleFormFocus = false;
	if (!consoleStateBoxValid) { return; }
	consoleStateBox.style.left = consoleFormFocusLeftLast;
	consoleStateBox.style.width = consoleFormFocusWidthLast;
	consoleStateForm.style.width = '';
	consoleStateForm.style.height = consoleFormFocusHeightLast;
	consoleTestBox.style.width = '';
}

function ConsoleStateTest() {
	//
	var testVar = 253 / 'xxx';
}
//
script_state = "MdmDebugConsole loaded";
if (debugLoadIsOn) { debugger; }
