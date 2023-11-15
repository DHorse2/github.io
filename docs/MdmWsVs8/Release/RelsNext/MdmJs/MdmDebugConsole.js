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
var consoleToggles;
var UseLogToggles;
var consoleAuxillaryToggles;
//
// Console Buttons
var consoleToggle;
//
var consoleToggle;
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
var consoleDebugHoverToggle;

// Body ViewToggle - Console
// ..................................................................................... _//
var BodyConsoleBoxButtons = true;
function ConsoleToggle(DoSetValuePassed, elementValuePassed, DoTogglePassed, ConsoleBlockPassed) {
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
			// ..................................................................................... _//
			// ..................................................................................... _//
			case 'ConsoleMouseOver':
				script_state += "ConsoleToggle:ConsoleMouseOver:" + DoTogglePassed;
				if (DoTogglePassed) { UseLogEventMouseOver = !UseLogEventMouseOver; }
				if (DoSetValuePassed) { UseLogEventMouseOver = elementValuePassed }
				if (UseLogEventMouseOver) {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Mouse Over Menus is OFF',
						'ConsoleToggle', 8307, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleMouseOverToggle.style.borderColor = ButtonIsOffColor;
				} else {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Mouse Over Menus is ON',
						'ConsoleToggle', 8314, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleMouseOverToggle.style.borderColor = ButtonIsOnColor;
				}
				//
				consoleToggleResult = UseLogEventMouseOver;
				break;
			// ..................................................................................... _//
			// ..................................................................................... _//
			case 'ConsoleAll':
				script_state = "ConsoleToggle:ConsoleAll:" + DoTogglePassed;
				if (DoTogglePassed) { consoleBoxButton = !consoleBoxButton; }
				if (DoSetValuePassed) { consoleBoxButton = elementValuePassed }
				if (consoleBoxButton) {
					consoleBox.style.display = 'block';
					// boxStyleSaved = consoleBox.style.display;
					// ConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleAll');
					// consoleBox.style.display = boxStyleSaved;
				} else {
					consoleBox.style.display = 'none';
				}
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = consoleBoxButton;
				break;
			// ..................................................................................... _//
			case 'ConsoleError':
				script_state = "ConsoleToggle:ConsoleError:" + DoTogglePassed;
				if (DoTogglePassed) { consoleErrorBoxButton = !consoleErrorBoxButton; }
				if (DoSetValuePassed) { consoleErrorBoxButton = elementValuePassed }
				if (consoleErrorBoxButton) {
					// boxStyleSaved = consoleErrorBox.style.display;
					// ConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleAll');
					// consoleErrorBox.style.display = boxStyleSaved;
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Console buttons showing is OFF',
						'ConsoleToggle', 8377, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
				} else {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Console buttons showing is ON',
						'ConsoleToggle', 8387, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					// if (consoleErrorBox.style.display != 'block') {
					// 	consoleErrorBox.style.display = 'block';
					// 	consoleErrorToggle.style.borderColor = ButtonIsOnColor;
					// } else {
					// 	consoleErrorBox.style.display = 'none';
					// 	consoleErrorToggle.style.borderColor = ButtonIsOffColor;
					// }
				}
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = consoleErrorBoxButton;
				break;
			//
			case 'ConsoleEvent':
				script_state = "ConsoleToggle:ConsoleEvent:" + DoTogglePassed;
				if (DoTogglePassed) { consoleEventBoxButton = !consoleEventBoxButton; }
				if (DoSetValuePassed) { consoleEventBoxButton = elementValuePassed }
				if (consoleEventBoxButton) {
					// boxStyleSaved = consoleEventBox.style.display;
					// ConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleAll');
					// consoleEventBox.style.display = boxStyleSaved;
				} else {
					// if (consoleEventBox.style.display != 'block') {
					// 	consoleEventBox.style.display = 'block';
					// 	consoleEventToggle.style.borderColor = ButtonIsOnColor;
					// 	consoleErrorBox.style.width = '33%';
					// } else {
					// 	consoleEventBox.style.display = 'none';
					// 	consoleEventToggle.style.borderColor = ButtonIsOffColor;
					// 	consoleErrorBox.style.width = '66%';
					// }
				}
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = consoleEventBoxButton;
				break;
			//
			case 'ConsoleState':
				script_state = "ConsoleToggle:ConsoleState:" + DoTogglePassed;
				if (DoTogglePassed) { consoleStateBoxButton = !consoleStateBoxButton; }
				if (DoSetValuePassed) { consoleStateBoxButton = elementValuePassed }
				if (!consoleStateBoxButton) {
					if (loadFirstDebugState) { ConsoleFormElementSyncLocal(false); }
					// boxStyleSaved = consoleStateBox.style.display;
					// ConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleAll');
					// consoleStateBox.style.display = boxStyleSaved;
				} else {
					// if (consoleStateBox.style.display != 'block') {
					// 	consoleStateBox.style.display = 'block';
					// 	consoleStateTextBox.style.display = 'block';
					// 	consoleStateToggle.style.borderColor = ButtonIsOnColor;
					// } else {
					// 	consoleStateBox.style.display = 'none';
					// 	consoleStateTextBox.style.display = 'none';
					// 	consoleStateToggle.style.borderColor = ButtonIsOffColor;
					// }
				}
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = consoleStateBoxButton;
				break;
			// ..................................................................................... _//
			case 'ConsoleTest':
				script_state = "ConsoleToggle:ConsoleTest:" + DoTogglePassed;
				errorMessage = '';
				try {
					consoleToggleResult = false;
					if (consoleBox.style.display != 'block') {
						// boxStyleSaved = consoleTestBox.style.display;
						// ConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleAll');
						// consoleTestBox.style.display = boxStyleSaved;
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
					if (UseLogAlert) {
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
				script_state = "ConsoleToggle:ConsoleClear:" + DoTogglePassed;
				consoleErrorTextBox.innerHTML = '';
				errorMessage = 'Error and Log Console has been cleared...';
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
					errorMessage,
					'ConsoleToggle', 8235, 0, null, null,
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
				script_state = "ConsoleToggle:ConsoleDebug:" + DoTogglePassed;
				if (DoTogglePassed) { UseLogDebugButton = !UseLogDebugButton; }
				if (DoSetValuePassed) { UseLogDebugButton = elementValuePassed }
				if (UseLogDebugButton) {
					// UseDebugOnAll = true;
					// UseDebugOnError = true;
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug buttons showing is OFF',
						'ConsoleToggle', 8377, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
				} else {
					// UseDebugOnAll = false;
					// UseDebugOnError = false;
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug buttons showing is ON',
						'ConsoleToggle', 8387, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
				}
				checkLogMode = true;
				checkLogModeSeeEvents = false;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = UseLogDebugButton;
				break;
			// ..................................................................................... _//
			// ..................................................................................... _//
			case 'ConsoleDebugDetailAll':
				script_state = "ConsoleToggle:ConsoleDebugDetailAll:" + DoTogglePassed;
				// if (DoSetValuePassed) { xxx = elementValuePassed }
				if ((consoleDebugMainToggle.style.display != 'block' && DoTogglePassed)
					(consoleDebugMainToggle.style.display == 'block' && !DoTogglePassed)) {
					UseLogTimerMove = true;
					consoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
					UseLogTimerTransition = true;
					consoleDebugTransitionToggle.style.borderColor = ButtonIsOnColor;
					UseLogTimerDetail = true;
					consoleDebugDetailToggle.style.borderColor = ButtonIsOnColor;
					UseDebugOnAll = true;
					consoleDebugAllToggle.style.borderColor = ButtonIsOnColor;
					UseDebugOnError = true;
					consoleDebugOnErrorToggle.style.borderColor = ButtonIsOnColor;
					// UseDebugOnError = true;
					// consoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
					UseLogEvents = true;
					consoleDebugEventsToggle.style.borderColor = ButtonIsOnColor;
					//
					ConsoleShow(DoNotUseHide, DoUseDebug);
					//
					if (consoleBox.style.display != 'block') {
						ConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleAll');
					}
					//
					if (UseDebugOnAll || UseDebugOnError) { UseDebugOnError = true; } else { UseDebugOnError = false; }
					if (UseLogTimerMove || UseLogTimerTransition) { UseLogTimer = true; } else { UseLogTimer = false; }
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
					UseLogTimerMove = false;
					// consoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
					UseLogTimerTransition = false;
					// consoleDebugTransitionToggle.style.borderColor = ButtonIsOffColor;
					UseLogTimerDetail = false;
					// consoleDebugDetailToggle.style.borderColor = ButtonIsOffColor;
					UseDebugOnAll = false;
					// consoleDebugAllToggle.style.borderColor = ButtonIsOffColor;
					UseDebugOnError = false;
					// consoleDebugOnErrorToggle.style.borderColor = ButtonIsOffColor;
					// UseLogTimerMove = false;
					// consoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
					UseLogEvents = false;
					// consoleDebugEventsToggle.style.borderColor = ButtonIsOffColor;
					//
					ConsoleShow(DoUseHide, DoUseDebug);
					// // consoleDebugToggle.style.display = 'none';
					// consoleDebugToggle.style.borderColor = ButtonIsOffColor;
					BodyConsoleDebugButtons = false;
					consoleToggleResult = false;
				}
				break;
			//
			case 'ConsoleDebugOnError':
				script_state = "ConsoleToggle:ConsoleDebugOnError:" + DoTogglePassed;
				if (DoTogglePassed) { UseDebugOnError = !UseDebugOnError; }
				if (DoSetValuePassed) { UseDebugOnError = elementValuePassed }
				if (UseDebugOnError) {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug On Error in debugger is OFF',
						'ConsoleToggle', 8377, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleDebugOnErrorToggle.style.borderColor = ButtonIsOffColor;
				} else {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug On Error in debugger is ON',
						'ConsoleToggle', 8387, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleDebugOnErrorToggle.style.borderColor = ButtonIsOnColor;
					checkLogMode = true;
					checkLogModeSeeEvents = false;
					checkNoVisibleConsole = true;
					checkBoxSize = true;
				}
				consoleToggleResult = UseDebugOnError;
				break;
			//
			case 'ConsoleDebugAll':
				script_state = "ConsoleToggle:ConsoleDebugAll:" + DoTogglePassed;
				if (DoTogglePassed) { UseDebugOnAll = !UseDebugOnAll; }
				if (DoSetValuePassed) { UseDebugOnAll = elementValuePassed }
				if (UseDebugOnAll) {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug All messages in debugger is OFF',
						'ConsoleToggle', 8399, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleDebugAllToggle.style.borderColor = ButtonIsOffColor;
				} else {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug All messages in debugger is ON',
						'ConsoleToggle', 8406, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					// if (!UseDebugOnError) { ConsoleToggle(DoNotSetValue, null, DoUseToggle, 'ConsoleDebugOnError'); }
					consoleDebugAllToggle.style.borderColor = ButtonIsOnColor;
					checkLogMode = true;
					checkLogModeSeeEvents = false;
					checkNoVisibleConsole = true;
					checkBoxSize = true;
				}
				consoleToggleResult = UseDebugOnAll;
				break;
			//
			// ..................................................................................... _//
			case 'ConsoleDebugMove':
				script_state = "ConsoleToggle:ConsoleDebugMove:" + DoTogglePassed;
				if (DoTogglePassed) { UseLogTimerMove = !UseLogTimerMove; }
				if (DoSetValuePassed) { UseLogTimerMove = elementValuePassed }
				if (UseLogTimerMove) {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug Move is OFF',
						'ConsoleToggle ConsoleDebugMove', 8313, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
					if (!UseLogTimerMove && !UseLogTimerTransition && UseLogTimer) {
						// ConsoleToggle(DoSetValue, false, DoNotUseToggle, 'UseLogTimer');
						UseLogTimer = false;
					}
				} else {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug Move is ON',
						'ConsoleToggle ConsoleDebugMove', 8323, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
					checkLogMode = true;
					checkNoVisibleConsole = true;
					checkBoxSize = true;
					if (UseLogTimerMove || UseLogTimerTransition && !UseLogTimer) {
						// ConsoleToggle(DoSetValue, true, DoNotUseToggle, 'UseLogTimer');
						UseLogTimer = true;
					}
				}
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = (UseLogTimerMove || UseLogTimerTransition);
				break;
			//
			case 'ConsoleDebugTransition':
				script_state = "ConsoleToggle:ConsoleDebugTransition:" + DoTogglePassed;
				if (DoTogglePassed) { UseLogTimerTransition = !UseLogTimerTransition; }
				if (DoSetValuePassed) { UseLogTimerTransition = elementValuePassed }
				if (UseLogTimerTransition) {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug Transition is OFF',
						'ConsoleToggle', 8331, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleDebugTransitionToggle.style.borderColor = ButtonIsOffColor;
					if (!UseLogTimerMove && !UseLogTimerTransition && UseLogTimer) {
						// ConsoleToggle(DoSetValue, false, DoNotUseToggle, 'UseLogTimer');
						UseLogTimer = false;
					}
				} else {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug Transition is ON',
						'ConsoleToggle', 8341, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleDebugTransitionToggle.style.borderColor = ButtonIsOnColor;
					checkLogMode = true;
					checkNoVisibleConsole = true;
					checkBoxSize = true;
					if (UseLogTimerMove || UseLogTimerTransition && !UseLogTimer) {
						// ConsoleToggle(DoSetValue, true, DoNotUseToggle, 'UseLogTimer');
						UseLogTimer = true;
					}
				}
				consoleToggleResult = UseLogTimerTransition;
				break;
			//
			case 'ConsoleDebugDetail':
				script_state = "ConsoleToggle:ConsoleDebugDetail:" + DoTogglePassed;
				if (DoTogglePassed) { UseLogTimerDetail = !UseLogTimerDetail; }
				if (DoSetValuePassed) { UseLogTimerDetail = elementValuePassed }
				if (UseLogTimerDetail) {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug Detail is OFF',
						'ConsoleToggle', 8355, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleDebugDetailToggle.style.borderColor = ButtonIsOffColor;
				} else {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug Detail is ON',
						'ConsoleToggle', 8365, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleDebugDetailToggle.style.borderColor = ButtonIsOnColor;
					checkLogMode = true;
					checkNoVisibleConsole = true;
					checkBoxSize = true;
				}
				consoleToggleResult = UseLogTimerDetail;
				break;
			//
			case 'ConsoleDebugEvents':
				script_state = "ConsoleToggle:ConsoleDebugEvents:" + DoTogglePassed;
				if (DoTogglePassed) { UseLogEvents = !UseLogEvents; }
				if (DoSetValuePassed) { UseLogEvents = elementValuePassed }
				if (UseLogEvents) {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug (Mouse) Events is OFF',
						'ConsoleToggle', 8423, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleDebugEventsToggle.style.borderColor = ButtonIsOffColor;
				} else {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						'Debug (Mouse) Events is ON',
						'ConsoleToggle', 8430, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
					consoleDebugEventsToggle.style.borderColor = ButtonIsOnColor;
					checkLogMode = true;
					checkLogModeSeeEvents = true;
					checkNoVisibleConsole = true;
					checkBoxSize = true;
				}
				consoleToggleResult = UseLogEvents;
				break;
			//
			case 'ConsoleDebugHover':
				script_state = "ConsoleToggle:ConsoleDebugHover:" + DoTogglePassed;
				break;
			//
			default:
				consoleToggleResult = 'Error in default';
				script_state = "ConsoleToggle:default:" + DoTogglePassed + ':' + consoleToggleResult;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				break;
		}
		// ..................................................................................... _//
		//
		// if (checkLogMode) {
		// 	if (checkLogModeSeeErrors) {
		// 		if (!consoleErrorBoxButton) { ConsoleToggle(DoSetValue, true, DoUseToggle, 'ConsoleError'); }
		// 	} else {
		// 		// if (consoleErrorBox.style.display = 'block') { ConsoleToggle(DoSetValue, true, DoUseToggle, 'ConsoleError'); }
		// 	}
		// 	if (checkLogModeSeeEvents) {
		// 		if (!consoleEventBoxButton) { ConsoleToggle(DoSetValue, true, DoNotUseToggle, 'ConsoleEvent'); }
		// 	} else {
		// 		// if (consoleEventBox.style.display = 'block') { ConsoleToggle(DoSetValue, true, DoUseToggle, 'ConsoleEvent'); }
		// 	}
		// 	if (consoleStateBoxButton) { ConsoleToggle(DoSetValue, null, DoUseToggle, 'ConsoleState'); }
		// }
		// ConsoleShowEach(DoTogglePassed, ConsoleBlockPassed, consoleToggleResult, checkNoVisibleConsole, checkNoVisibleDebug);

	} catch (consoleToggleErr) {
		// Errors:
		// ...................................... //
		'Resulting in ' + consoleToggleResult;
		ErrorCaught(consoleToggleErr, script_state + ' Resulting in ' + consoleToggleResult, errorIsSevere);
		// script_state = "Form sync: aborted wit an error";
	} finally {
		// ...................................... //
		// try {
		if (UseLogAlert) {
			MessageLog(null, DoNotUseDebug, DoUseSingleLine,
				'Setting:' + ConsoleBlockPassed + ' Toggle:' + DoTogglePassed
				+ ' State:' + script_state
				+ ' Resulting in ' + consoleToggleResult
				+ ' Console Toggle done.',
				'MdmDebugConsole: ConsoleToggle', 593, 0, null, null,
				errorIsComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		//
		ConsoleToggleButtonSet();
	}
	return consoleToggleResult;
}
function ConsoleShowEach(DoTogglePassed, ConsoleBlockPassed, consoleToggleResult, checkNoVisibleConsole, checkNoVisibleDebug) {
	//
	// Check if any Console Box settings are on or content is visible
	if (checkNoVisibleConsole) {
		if (consoleErrorBox.style.display != 'block'
			&& consoleEventBox.style.display != 'block'
			&& consoleStateBox.style.display != 'block'
		) {
			consoleBox.style.display = 'none';
			ConsoleShow(DoUseHide, DoNotUseDebug);
			checkBoxSize = false;
		} else {
			consoleBox.style.display = 'block';
			ConsoleShow(DoNotUseHide, DoNotUseDebug);
		}
		//
	}
	// Check if any Debugs settings are on or content is visible
	if (checkNoVisibleDebug) {
		if (consoleDebugToggle.style.display != 'block'
			&& !UseLogTimerMove
			&& !UseLogTimerTransition
			&& !UseLogTimerDetail
			&& !UseDebugOnError
			&& !UseDebugOnAll
			&& !UseLogEvents
		) {
			// 			&& !UseDebugOnError
			ConsoleShow(DoUseHide, DoUseDebug);
			checkBoxSize = false;
		} else {
			ConsoleShow(DoNotUseHide, DoUseDebug);
		}
	}
	//
	switch (ConsoleBlockPassed) {
		case 'ConsoleAllIsOff':
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
						ConsoleShow(DoNotUseHide, DoNotUseDebug);
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
						ConsoleShow(DoUseHide, DoNotUseDebug);
						//
					}
					//
					// Toggle Test 2 - Display Window Visible
				} else {
					//
					consoleBox.style.display = 'block';
					//
					ConsoleShow(DoNotUseHide, DoNotUseDebug);
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
function ConsoleShow(DoHide, errorDoDebug) {
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
			// was // BodyConsoleDebugToggle.style.display = 'none';
			// consoleDebugMainToggle.style.display = 'none';
			// consoleDebugTypesToggle.style.display = 'none';
		} else {
			BodyConsoleDebugButtons = true;
			consoleBox.style.display = 'block';
			consoleErrorBox.style.display = 'block';
			// consoleEventBox.style.display = 'block';
			// consoleStateBox.style.display = 'block';
			// // BodyConsoleDebugToggle.style.display = 'block';
			// consoleDebugMainToggle.style.display = 'block';
			// consoleDebugTypesToggle.style.display = 'block';
		}
		if (consoleDebugToggle.style.display != 'block'
			&& !UseLogTimerMove
			&& !UseLogTimerTransition
			&& !UseLogTimerDetail
			&& !UseDebugOnError
			&& !UseDebugOnAll
			&& !UseLogEvents
		) {
			// 			&& !UseDebugOnError
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
			// UseLogToggle.style.display = 'none';
			// consoleAuxillaryToggle.style.display = 'none';
			ConsoleShowEach(true, true);
		} else {
			BodyConsoleBoxButtons = true;
			consoleBox.style.display = 'block';
			consoleErrorBox.style.display = 'block';
			// consoleEventBox.style.display = 'block';
			// consoleStateBox.style.display = 'block';
			// was // UseLogToggle.style.display = 'block';
			// consoleAuxillaryToggle.style.display = 'block';
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
	ConsoleToggleButtonSet();
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

function ConsoleToggleButtonSet() {
	// ...................................... //
	// ...................................... //
	// case 'ConsoleMouseOver':
	if (UseLogEventMouseOver) {
		consoleMouseOverToggle.style.borderColor = ButtonIsOnColor;
		consoleEventBoxButton = true;
	}
	// ...................................... //
	// case 'FONTS'
	// Smaller
	// Reset
	// Larger
	// ...................................... //
	// ...................................... //
	// case 'ConsoleError':
	if (UseLogDebugButton) {
		// consoleBox.style.display = 'block';
		consoleDebugMainToggles.style.borderColor = ButtonIsOnColor;
		// Show buttons
		consoleDebugMoveToggle.style.display = 'block';
		consoleDebugTransitionToggle.style.display = 'block';
		consoleDebugDetailToggle.style.display = 'block';
		consoleDebugAllToggle.style.display = 'block';
		consoleDebugOnErrorToggle.style.display = 'block';
		consoleDebugEventsToggle.style.display = 'block';
		consoleDebugHoverToggle.style.display = 'block';
	} else {
		// consoleBox.style.display = 'none';
		consoleDebugMainToggles.style.borderColor = ButtonIsOffColor;
		// Hide buttons
		consoleDebugMoveToggle.style.display = 'none';
		consoleDebugTransitionToggle.style.display = 'none';
		consoleDebugDetailToggle.style.display = 'none';
		consoleDebugAllToggle.style.display = 'none';
		consoleDebugOnErrorToggle.style.display = 'none';
		consoleDebugEventsToggle.style.display = 'none';
		consoleDebugHoverToggle.style.display = 'none';
	}

	// ...................................... //
	// case 'ConsoleAll':
	if (consoleBoxButton) {
		consoleBox.style.display = 'block';
		consoleToggle.style.borderColor = ButtonIsOnColor;
		// Show buttons
		consoleErrorToggle.style.display = 'block';
		consoleEventToggle.style.display = 'block';
		consoleStateToggle.style.display = 'block';
		consoleTestToggle.style.display = 'block';
		consoleClearToggle.style.display = 'block';
	} else {
		consoleBox.style.display = 'none';
		consoleToggle.style.borderColor = ButtonIsOffColor;
		// Hide buttons
		consoleErrorToggle.style.display = 'none';
		consoleEventToggle.style.display = 'none';
		consoleStateToggle.style.display = 'none';
		consoleTestToggle.style.display = 'none';
		consoleClearToggle.style.display = 'none';
	}

	if (consoleErrorBoxButton) {
		consoleErrorBox.style.display = 'block';
		consoleErrorToggle.style.borderColor = ButtonIsOnColor;
	} else {
		consoleErrorBox.style.display = 'none';
		consoleErrorToggle.style.borderColor = ButtonIsOffColor;
	}

	// case 'ConsoleEvent':
	if (consoleEventBoxButton) {
		consoleEventBox.style.display = 'block';
		consoleEventToggle.style.borderColor = ButtonIsOnColor;
	} else {
		consoleEventBox.style.display = 'none';
		consoleEventToggle.style.borderColor = ButtonIsOffColor;
	}

	// case 'ConsoleState':
	if (consoleStateBoxButton) {
		consoleStateBox.style.display = 'block';
		consoleStateToggle.style.borderColor = ButtonIsOnColor;
	} else {
		consoleStateBox.style.display = 'none';
		consoleStateToggle.style.borderColor = ButtonIsOffColor;
	}

	// ...................................... //
	// case 'ConsoleTest':
	if (consoleTestBoxButton) {
		consoleStateBox.style.display = 'block';
		consoleStateToggle.style.borderColor = ButtonIsOnColor;
	} else {
		consoleStateBox.style.display = 'none';
		consoleStateToggle.style.borderColor = ButtonIsOffColor;
	}

	// case 'ConsoleClear':
	if (consoleClearButton) {
		consoleClearToggle.style.backgroundColor = '';
	} else {
		consoleClearToggle.style.backgroundColor = '';
	}
	// ...................................... //
	// ...................................... //
	// case 'ConsoleDebugOnError':
	if (UseDebugOnError) {
		consoleDebugOnErrorToggle.style.borderColor = ButtonIsOnColor;
	} else {
		consoleDebugOnErrorToggle.style.borderColor = ButtonIsOffColor;
	}

	// case 'ConsoleDebugAll':
	if (UseDebugOnAll = false) {
		consoleDebugAllToggle.style.borderColor = ButtonIsOnColor;
	} else {
		consoleDebugAllToggle.style.borderColor = ButtonIsOffColor;
	}

	// ...................................... //
	// case 'ConsoleDebugMove':
	if (UseLogTimerMove) {
		consoleDebugMoveToggle.style.borderColor = ButtonIsOnColor;
	} else {
		consoleDebugMoveToggle.style.borderColor = ButtonIsOffColor;
	}

	// case 'ConsoleDebugTransition':
	if (UseLogTimerTransition) {
		consoleDebugTransitionToggle.style.borderColor = ButtonIsOnColor;
	} else {
		consoleDebugTransitionToggle.style.borderColor = ButtonIsOffColor;
	}

	// case 'ConsoleDebugDetail':
	if (UseLogTimerDetail) {
		consoleDebugDetailToggle.style.borderColor = ButtonIsOnColor;
	} else {
		consoleDebugDetailToggle.style.borderColor = ButtonIsOffColor;
	}

	// case 'ConsoleDebugEvents':
	if (UseLogEvents) {
		consoleDebugEventsToggle.style.borderColor = ButtonIsOffColor;
	} else {
		consoleDebugEventsToggle.style.borderColor = ButtonIsOffColor;
	}

	// case 'ConsoleDebugHover':
	if (UseLogHover) {
		consoleDebugHoverToggle.style.borderColor = ButtonIsOnColor;
	} else {
		consoleDebugHoverToggle.style.borderColor = ButtonIsOffColor;
	}
	// ...................................... //
	// ...................................... //
	if (consoleStateBoxButton) {
		// State visible
		if (consoleErrorBoxButton) {
			// State, Error
			if (consoleEventBoxButton) {
				// State, Error, Event
				consoleErrorBox.style.left = '2%';
				consoleErrorBox.style.width = '31%';

				consoleEventBox.style.left = '35%';
				consoleEventBox.style.width = '31%';

				consoleStateBox.style.left = '68%';
				consoleStateBox.style.width = '31%';
			} else {
				// State, No Event, Error
				consoleErrorBox.style.left = '2%';
				consoleErrorBox.style.width = '66%';
				//
				consoleStateBox.style.left = '68%';
				consoleStateBox.style.width = '31%';
			}
		} else {
			// State, No Error
			if (consoleEventBoxButton) {
				// State, No Error, Event
				consoleEventBox.style.left = '2%';
				consoleEventBox.style.width = '66%';
				//
				consoleStateBox.style.left = '68%';
				consoleStateBox.style.width = '31%';
				//
			} else {
				// State, No Error, No Event
				consoleStateBox.style.left = '2%';
				consoleStateBox.style.width = '97%';
			}
		}
	} else {
		// No State visible
		if (consoleErrorBoxButton) {
			// No State, Error
			if (consoleEventBoxButton) {
				// No State, Error, Event
				consoleErrorBox.style.left = '2%';
				consoleErrorBox.style.width = '46%';
				//
				consoleEventBox.style.left = '52%';
				consoleEventBox.style.width = '46%';
			} else {
				// No State, Error, No Event
				consoleErrorBox.style.left = '2%';
				consoleErrorBox.style.width = '97%';
			}
		} else {
			// No State, No Error
			if (consoleEventBoxButton) {
				// No State, No Error, Event
				consoleErrorBox.style.left = '2%';
				consoleErrorBox.style.width = '97%';
			} else {
				// No State, No Error & No Event
				// nothing visible
				consoleErrorBox.style.left = '2%';
				consoleErrorBox.style.width = '97%';
				//
			}
		}
	}
	// ...................................... //
}

function ConsoleStateTest() {
	//
	var testVar = 253 / 'xxx';
}
//
script_state = "MdmDebugConsole loaded";
if (debugLoadIsOn) { debugger; }
