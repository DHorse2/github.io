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
// Layout & framework
var consoleDebugConsoleToggle;
var consoleDebugLayoutToggle;
var consoleDebugWindowToggle;
// Animation
var consoleDebugAnimationToggle;
var consoleDebugMoveToggle;
var consoleDebugTransitionToggle;
var consoleDebugDetailToggle;
var consoleDebugAllToggle;
var consoleDebugAllDetailToggle;
var consoleDebugOnErrorToggle;
var consoleDebugEventsToggle;
var consoleDebugHoverToggle;

// Body ViewToggle - Console
// ..................................................................................... _//
var BodyConsoleBoxButtons = true;
function ConsoleToggle(DoSetValuePassed, elementValuePassed, DoTogglePassed, ConsoleToggleNamePassed) {
	var checkBoxSize = false;
	var checkNoVisibleDebug = false;
	var checkNoVisibleConsole = false;
	var checkLogMode = false;
	var checkLogModeSeeEvents = false;
	var checkLogModeSeeErrors = false;
	var consoleToggleResult = null;
	//
	script_state = 'Toggle is ' + DoTogglePassed + ' for ' + ConsoleToggleNamePassed + '.';
	try {
		// Body Element Creation
		if (loadFirstJava) { ElementObjectCreate(); }
		//
		// ...................................... //
		switch (ConsoleToggleNamePassed) {
			// ...................................... //
			// ...................................... //
			case 'ConsoleMouseOver':
				script_state += "ConsoleToggle:ConsoleMouseOver:" + DoTogglePassed;
				if (DoTogglePassed) { UseAnimation = !UseAnimation; }
				if (DoSetValuePassed) { UseAnimation = elementValuePassed; }
				if (!UseAnimation) {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Mouse Over Menus is OFF',
							'ConsoleToggle:ConsoleMouseOver', 8307, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				} else {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Mouse Over Menus is ON',
							'ConsoleToggle:ConsoleMouseOver', 8314, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				}
				consoleToggleResult = UseAnimation;
				break;
			// ...................................... //
			// FONTS
			// ...................................... //
			// ...................................... //
			case 'ConsoleAll':
				script_state = "ConsoleToggle:ConsoleAll:" + DoTogglePassed;
				if (DoTogglePassed) { consoleBoxButton = !consoleBoxButton; }
				if (DoSetValuePassed) { consoleBoxButton = elementValuePassed; }
				if (!consoleBoxButton) {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Consoles showing is OFF',
							'ConsoleToggle:ConsoleAll', 8377, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				} else {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Consoles showing is ON',
							'ConsoleToggle:ConsoleAll', 8387, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				}
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = consoleBoxButton;
				break;
			// ...................................... //
			case 'ConsoleError':
				script_state = "ConsoleToggle:ConsoleError:" + DoTogglePassed;
				if (DoTogglePassed) { consoleErrorBoxButton = !consoleErrorBoxButton; }
				if (DoSetValuePassed) { consoleErrorBoxButton = elementValuePassed; }
				if (!consoleErrorBoxButton) {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Message Log showing is OFF',
							'ConsoleToggle:ConsoleError', 8377, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				} else {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Message Log showing is ON',
							'ConsoleToggle:ConsoleError', 8387, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				}
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = consoleErrorBoxButton;
				break;
			//
			case 'ConsoleEvent':
				script_state = "ConsoleToggle:ConsoleEvent:" + DoTogglePassed;
				if (DoTogglePassed) { consoleEventBoxButton = !consoleEventBoxButton; }
				if (DoSetValuePassed) { consoleEventBoxButton = elementValuePassed; }
				if (!consoleEventBoxButton) {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Event Log showing is OFF',
							'ConsoleToggle:ConsoleEvent', 8377, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				} else {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Event Log showing is ON',
							'ConsoleToggle:ConsoleEvent', 8387, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				}
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = consoleEventBoxButton;
				break;
			//
			case 'ConsoleState':
				script_state = "ConsoleToggle:ConsoleState:" + DoTogglePassed;
				if (DoTogglePassed) { consoleStateBoxButton = !consoleStateBoxButton; }
				if (DoSetValuePassed) { consoleStateBoxButton = elementValuePassed; }
				if (loadFirstDebugState) { ConsoleFormElementSyncLocal(false); }
				if (!consoleStateBoxButton) {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'State console showing is OFF',
							'ConsoleToggle:ConsoleState', 8377, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				} else {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'State console showing is ON',
							'ConsoleToggle:ConsoleState', 8387, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				}
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = consoleStateBoxButton;
				break;
			// ...................................... //
			case 'ConsoleTest':
				script_state = "ConsoleToggle:ConsoleTest:" + DoTogglePassed;
				errorMessage = ''; // 8225
				try {
					consoleToggleResult = false;
					if (consoleBox.style.display != 'block'
						|| consoleTestBox.style.display != 'block') {
						consoleBox.style.display = 'block';
						consoleTestBox.style.display = 'block';
						consoleTestTextBox.style.display = 'block';
						consoleTestToggle.style.borderColor = buttonIsOnColor;
					}
					// execute test
					errorMessage = 'This is a test SEVERE error message for checking the console display.';
					MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
						errorMessage,
						script_state, 8225, 0, consoleTestBox, consoleTestBox,
						errorIsSevere, errorDoDisplayTag, UseAlert);
					errorMessage = 'This is a test Warning! message for checking the console display.';
					MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
						errorMessage,
						script_state, 8225, 0, bodyViewToggleContainerLeft, bodyViewToggleContainerLeft,
						errorIsWarning, errorDoDisplayTag, UseAlert);
					errorMessage = 'This is a test comment message for checking the console display.';
					MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
						errorMessage,
						script_state, 8225, 0, null, null,
						errorIsComment, errorDoDisplayTag, UseAlert);
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
					// script_state = "Form sync: aborted with an error";
				} finally {
					// ...................................... //
					// try {
					if (UseLog) {
						MessageLog(null, DoNotUseDebug, DoUseSingleLine,
							'State Test completed.',
							script_state, 265, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
					//
					// } catch (consoleStateFormErr) {
					// 	script_state = "Form sync: Can't access FormApply button";
					// 	ErrorCaught(consoleStateFormErr, script_state, errorIsSevere);
					// 	// script_state = "Form sync: aborted with an error";

					// }
				}
				consoleToggleResult = script_state;
				break;
			//
			case 'ConsoleClear':
				script_state = "ConsoleToggle:ConsoleClear:" + DoTogglePassed;
				consoleErrorTextBox.innerHTML = '';
				errorMessage = 'Error and Log Console has been cleared...';
				if ((UseLog || UseDebug)
					&& UseLogConsole) {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
						errorMessage,
						'ConsoleToggle:ConsoleClear', 8235, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, UseAlert);
				}
				//
				errorSeverityHighest = errorDidNotOccur;
				errorSeverityColorHighestBg = consoleViewToggleBackgroud;
				// consoleErrorLogCn = 0;
				// consoleErrorLogScrollCn = 0;
				//
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = true;
				break;
			// ...................................... //
			// ...................................... //
			case 'ConsoleDebugAllDetail':
				script_state = "ConsoleToggle:ConsoleDebugAllDetail:" + DoTogglePassed;
				if (DoTogglePassed) { UseLogAllDetail = !UseLogAllDetail; }
				if (DoSetValuePassed) { UseLogAllDetail = elementValuePassed; }
				if (UseLogAllDetail) {
					// UseDebugOnAll = true;
					// UseDebugOnError = true;
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Verbose (all detail) messages is OFF',
							'ConsoleToggle:ConsoleDebugAllDetail', 8361, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				} else {
					// UseDebugOnAll = false;
					// UseDebugOnError = false;
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Verbose (all detail) messages is ON',
							'ConsoleToggle:ConsoleDebugAllDetail', 8362, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				}
				if (UseLogAllDetail) {
					UseDebugOnError = true;
					// UseDebugOnAll = true;
					UseLogConsole = true;
					UseLogPage = true;
					// UseLogLayout = true;
					UseLogWindow = true;
					UseLogAnitmation = true;
					UseLogTimerMove = true;
					UseLogTimerTransition = true;
					UseLogTimerDetail = true;
					UseLogEvents = true;
				} else {
					UseDebugOnError = false;
					// UseDebugOnAll = false;
					UseLogConsole = false;
					UseLogPage = false;
					// UseLogLayout = false;
					UseLogWindow = false;
					UseLogAnitmation = false;
					UseLogTimerMove = false;
					UseLogTimerTransition = false;
					UseLogTimerDetail = false;
					UseLogEvents = false;
				}
				checkLogMode = true;
				checkLogModeSeeErrors = true;
				checkLogModeSeeEvents = true;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				checkNoVisibleDebug = UseLogAllDetail;
				break;
			// ...................................... //
			// Debug
			// ...................................... //
			case 'ConsoleDebug':
				script_state = "ConsoleToggle:ConsoleDebug:" + DoTogglePassed;
				if (DoTogglePassed) { consoleDebugButton = !consoleDebugButton; }
				if (DoSetValuePassed) { consoleDebugButton = elementValuePassed; }
				if (consoleDebugButton) {
					// UseDebugOnAll = true;
					// UseDebugOnError = true;
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Debug buttons showing is OFF',
							'ConsoleToggle:ConsoleDebug', 8377, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				} else {
					// UseDebugOnAll = false;
					// UseDebugOnError = false;
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Debug buttons showing is ON',
							'ConsoleToggle:ConsoleDebug', 8387, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				}
				checkLogMode = true;
				checkLogModeSeeEvents = false;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = consoleDebugButton;
				break;

			// Debug on Error
			// ...................................... //
			case 'ConsoleDebugOnError':
				script_state = "ConsoleToggle:ConsoleDebugOnError:" + DoTogglePassed;
				if (DoTogglePassed) { UseDebugOnError = !UseDebugOnError; }
				if (DoSetValuePassed) { UseDebugOnError = elementValuePassed; }
				if (!UseDebugOnError) {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Debug On Error in debugger is OFF',
							'ConsoleToggle:ConsoleDebugOnError', 8377, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				} else {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Debug On Error in debugger is ON',
							'ConsoleToggle:ConsoleDebugOnError', 8387, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				}
				checkLogMode = true;
				checkLogModeSeeEvents = false;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = UseDebugOnError;
				break;

			// Debug on All
			// ...................................... //
			case 'ConsoleDebugAll':
				script_state = "ConsoleToggle:ConsoleDebugAll:" + DoTogglePassed;
				if (DoTogglePassed) { UseDebugOnAll = !UseDebugOnAll; }
				if (DoSetValuePassed) { UseDebugOnAll = elementValuePassed; }
				if (!UseDebugOnAll) {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Debug All messages (in the debugger) is OFF',
							'ConsoleToggle:ConsoleDebugAll', 8399, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				} else {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Debug All messages (in the debugger) is ON',
							'ConsoleToggle:ConsoleDebugAll', 8406, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				}
				checkLogMode = true;
				checkLogModeSeeEvents = false;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = UseDebugOnAll;
				break;
			// ..................................................................................... _//
			// Debug Modules
			// ..................................................................................... _//
			case 'ConsoleDebugConsole':
				script_state = "ConsoleToggle:ConsoleDebugConsole:" + DoTogglePassed;
				if (DoTogglePassed) { UseLogConsole = !UseLogConsole; }
				if (DoSetValuePassed) { UseLogConsole = elementValuePassed; }
				if (!UseLogConsole) {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						if ((UseLog || UseDebug)
							&& UseLogConsole) {
							MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
								'Debug Console is OFF',
								'ConsoleToggle:ConsoleDebugConsole', 4313, 0, null, null,
								errorIsComment, errorDoNotDisplayTag, UseAlert);
						}
					}
				} else {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						if ((UseLog || UseDebug)
							&& UseLogConsole) {
							MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
								'Debug Console is ON',
								'ConsoleToggle:ConsoleDebugConsole', 4323, 0, null, null,
								errorIsComment, errorDoNotDisplayTag, UseAlert);
						}
					}
				}
				checkLogMode = true;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = UseLogConsole;
				break;
			//
			// ..................................................................................... _//
			case 'ConsoleDebugLayout':
				script_state = "ConsoleToggle:ConsoleDebugLayout:" + DoTogglePassed;
				if (DoTogglePassed) { UseLogPage = !UseLogPage; }
				if (DoSetValuePassed) { UseLogPage = elementValuePassed; }
				if (!UseLogPage) {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						if ((UseLog || UseDebug)
							&& UseLogConsole) {
							MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
								'Debug Page Layout is OFF',
								'ConsoleToggle:ConsoleDebugLayout', 4373, 0, null, null,
								errorIsComment, errorDoNotDisplayTag, UseAlert);
						}
					}
				} else {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						if ((UseLog || UseDebug)
							&& UseLogConsole) {
							MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
								'Debug Page Layout is ON',
								'ConsoleToggle:ConsoleDebugLayout', 4383, 0, null, null,
								errorIsComment, errorDoNotDisplayTag, UseAlert);
						}
					}
				}
				checkLogMode = true;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = UseLogPage;
				break;
			//
			// ..................................................................................... _//
			case 'ConsoleDebugWindow':
				script_state = "ConsoleToggle:ConsoleDebugWindow:" + DoTogglePassed;
				if (DoTogglePassed) { UseLogWindow = !UseLogWindow; }
				if (DoSetValuePassed) { UseLogWindow = elementValuePassed; }
				if (!UseLogWindow) {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						if ((UseLog || UseDebug)
							&& UseLogConsole) {
							MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
								'Debug Window and System is OFF',
								'ConsoleToggle:ConsoleDebugWindow', 4353, 0, null, null,
								errorIsComment, errorDoNotDisplayTag, UseAlert);
						}
					}
					// if (!UseLogTimerMove && !UseLogTimerTransition && UseLogTimer) {
					// 	// ConsoleToggle(DoSetValue, false, DoNotUseToggle, 'UseLogTimer');
					// 	UseLogTimer = false;
					// }
				} else {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						if ((UseLog || UseDebug)
							&& UseLogConsole) {
							MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
								'Debug Window and System is ON',
								'ConsoleToggle:ConsoleDebugWindow', 4353, 0, null, null,
								errorIsComment, errorDoNotDisplayTag, UseAlert);
						}
					}
					// if (UseLogTimerMove || UseLogTimerTransition && !UseLogTimer) {
					// 	// ConsoleToggle(DoSetValue, true, DoNotUseToggle, 'UseLogTimer');
					// 	UseLogTimer = true;
					// }
				}
				checkLogMode = true;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = UseLogWindow;
				break;
			// ..................................................................................... _//
			// Animation
			// ..................................................................................... _//
			case 'ConsoleDebugAnimation':
				script_state = "ConsoleToggle:ConsoleDebugAnimation:" + DoTogglePassed;
				if (DoTogglePassed) { UseLogAnitmation = !UseLogAnitmation; }
				if (DoSetValuePassed) { UseLogAnitmation = elementValuePassed; }
				if (!UseLogAnitmation) {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Animation basic messages is OFF',
							'ConsoleToggle:ConsoleDebugAnimation', 8813, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
					// if (!UseLogTimerMove && !UseLogTimerTransition && UseLogTimer) {
					// 	// ConsoleToggle(DoSetValue, false, DoNotUseToggle, 'UseLogTimer');
					// 	UseLogTimer = false;
					// }
				} else {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Animation basic messages is ON',
							'ConsoleToggle:ConsoleDebugAnimation', 8823, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
					// if (UseLogTimerMove || UseLogTimerTransition && !UseLogTimer) {
					// 	// ConsoleToggle(DoSetValue, true, DoNotUseToggle, 'UseLogTimer');
					// 	UseLogTimer = true;
					// }
				}
				checkLogMode = true;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = UseLogAnitmation;
				break;
			//
			// ..................................................................................... _//
			case 'ConsoleDebugMove':
				script_state = "ConsoleToggle:ConsoleDebugMove:" + DoTogglePassed;
				if (DoTogglePassed) { UseLogTimerMove = !UseLogTimerMove; }
				if (DoSetValuePassed) { UseLogTimerMove = elementValuePassed; }
				if (!UseLogTimerMove) {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Debug Animation Movement is OFF',
							'ConsoleToggle:ConsoleDebugMove', 8313, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
					// if (!UseLogTimerMove && !UseLogTimerTransition && UseLogTimer) {
					// 	// ConsoleToggle(DoSetValue, false, DoNotUseToggle, 'UseLogTimer');
					// 	UseLogTimer = false;
					// }
				} else {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Debug Animation Movement is ON',
							'ConsoleToggle:ConsoleDebugMove', 8323, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
					// if (UseLogTimerMove || UseLogTimerTransition && !UseLogTimer) {
					// 	// ConsoleToggle(DoSetValue, true, DoNotUseToggle, 'UseLogTimer');
					// 	UseLogTimer = true;
					// }
				}
				checkLogMode = true;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = UseLogTimerMove;
				break;
			//
			case 'ConsoleDebugTransition':
				script_state = "ConsoleToggle:ConsoleDebugTransition:" + DoTogglePassed;
				if (DoTogglePassed) { UseLogTimerTransition = !UseLogTimerTransition; }
				if (DoSetValuePassed) { UseLogTimerTransition = elementValuePassed; }
				if (!UseLogTimerTransition) {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Debug Animation Transition is OFF',
							'ConsoleToggle:ConsoleDebugTransition', 8331, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
					if (!UseLogTimerMove && !UseLogTimerTransition && UseLogTimer) {
						// ConsoleToggle(DoSetValue, false, DoNotUseToggle, 'UseLogTimer');
						UseLogTimer = false;
					}
				} else {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Debug Animation Transition is ON',
							'ConsoleToggle:ConsoleDebugTransition', 8341, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
					if (UseLogTimerMove || UseLogTimerTransition && !UseLogTimer) {
						// ConsoleToggle(DoSetValue, true, DoNotUseToggle, 'UseLogTimer');
						UseLogTimer = true;
					}
				}
				checkLogMode = true;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = UseLogTimerTransition;
				break;
			//
			case 'ConsoleDebugDetail':
				script_state = "ConsoleToggle:ConsoleDebugDetail:" + DoTogglePassed;
				if (DoTogglePassed) { UseLogTimerDetail = !UseLogTimerDetail; }
				if (DoSetValuePassed) { UseLogTimerDetail = elementValuePassed; }
				if (!UseLogTimerDetail) {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Debug Detail is OFF',
							'ConsoleToggle:ConsoleDebugDetail', 8355, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				} else {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Debug Detail is ON',
							'ConsoleToggle:ConsoleDebugDetail', 8365, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				}
				checkLogMode = true;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = UseLogTimerDetail;
				break;
			//
			case 'ConsoleDebugEvents':
				script_state = "ConsoleToggle:ConsoleDebugEvents:" + DoTogglePassed;
				if (DoTogglePassed) { UseLogEvents = !UseLogEvents; }
				if (DoSetValuePassed) { UseLogEvents = elementValuePassed; }
				if (!UseLogEvents) {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Debug (Mouse) Events is OFF',
							'ConsoleToggle:ConsoleDebugEvents', 8423, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
				} else {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Debug (Mouse) Events is ON',
							'ConsoleToggle:ConsoleDebugEvents', 8430, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
					// Open events panel?
				}
				checkLogMode = true;
				checkLogModeSeeEvents = true;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = UseLogEvents;
				break;
			//
			case 'ConsoleDebugHover':
				script_state = "ConsoleToggle:ConsoleDebugHover:" + DoTogglePassed;
				if (DoTogglePassed) {
					UseLogHover = !UseLogHover;
					// LayoutFontCssTagHoverToggle();
				}
				if (DoSetValuePassed) { UseLogHover = elementValuePassed; }
				if (!UseLogHover) {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Debug Hover highlighting is OFF',
							'ConsoleToggle:ConsoleDebugHover', 8423, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
					LayoutFontCssTagHoverDisable();
				} else {
					if ((UseLog || UseDebug)
						&& UseLogConsole) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
							'Debug Hover highlighting is ON',
							'ConsoleToggle:ConsoleDebugHover', 8430, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
					LayoutFontCssTagHoverEnable();
				}
				checkLogMode = true;
				checkLogModeSeeEvents = true;
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				consoleToggleResult = UseLogHover;
				break;
			//
			default:
				consoleToggleResult = 'Error in default';
				script_state = "ConsoleToggle:default:" + DoTogglePassed + ':' + consoleToggleResult;
				// MessageLog(eventCurr, DoNotUseDebug, DoUseSingleLine,
				// 	consoleToggleResult,
				// 	'ConsoleToggle:default', 8493, 0, null, null,
				// 	errorIsSevere, errorDoNotDisplayTag, UseAlert);
				checkNoVisibleConsole = true;
				checkBoxSize = true;
				throw new Error(ConsoleToggleNamePassed);
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
		// ConsoleShowEach(DoTogglePassed, ConsoleToggleNamePassed, consoleToggleResult, checkNoVisibleConsole, checkNoVisibleDebug);

	} catch (consoleToggleErr) {
		// Errors:
		// ...................................... //
		// consoleToggleErr += 'Resulting in ' + consoleToggleResult;
		ErrorCaught(consoleToggleErr, script_state + ' Resulting in ' + consoleToggleResult, errorIsSevere);
		// script_state = "Form sync: aborted with an error";
	} finally {
		// ...................................... //
		if ((UseLog || UseDebug)
			&& UseLogConsole
			&& UseLogAllDetail) {
			MessageLog(null, DoNotUseDebug, DoUseSingleLine,
				'Setting:' + ConsoleToggleNamePassed + ' Toggle:' + DoTogglePassed
				+ ' State:' + script_state
				+ ' Resulting in ' + consoleToggleResult
				+ ' Console Toggle done.',
				'MdmDebugConsole: ConsoleToggle', 593, 0, null, null,
				errorIsComment, errorDoNotDisplayTag, UseAlert);
		}
		ConsoleToggleButtonSet();
	}
	return consoleToggleResult;
}
function ConsoleShowEach(DoTogglePassed, ConsoleToggleNamePassed, consoleToggleResult, checkNoVisibleConsole, checkNoVisibleDebug) {
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
			ConsoleShow(DoUseHide, DoUseDebug);
			checkBoxSize = false;
		} else {
			ConsoleShow(DoNotUseHide, DoUseDebug);
		}
	}
	//
	switch (ConsoleToggleNamePassed) {
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
						if (consoleErrorBox.style.display == 'block') {
							consoleErrorToggle.style.borderColor = buttonIsOnColor;
						} else { consoleErrorToggle.style.borderColor = buttonIsOffColor; }
						//
						if (consoleEventBox.style.display == 'block') {
							consoleEventToggle.style.borderColor = buttonIsOnColor;
						} else { consoleEventToggle.style.borderColor = buttonIsOffColor; }
						//
						if (consoleStateBox.style.display == 'block') {
							consoleStateToggle.style.borderColor = buttonIsOnColor;
						} else { consoleStateToggle.style.borderColor = buttonIsOffColor; }
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
				// if (consoleErrorBox.style.display == 'block') {
				// 	consoleErrorToggle.style.borderColor = buttonIsOnColor;
				// } else { consoleErrorToggle.style.borderColor = buttonIsOffColor; }
				// //
				// if (consoleEventBox.style.display == 'block') {
				// 	consoleEventToggle.style.borderColor = buttonIsOnColor;
				// } else { consoleEventToggle.style.borderColor = buttonIsOffColor; }
				// //
				// if (consoleStateBox.style.display == 'block') {
				// 	consoleStateToggle.style.borderColor = buttonIsOnColor;
				// } else { consoleStateToggle.style.borderColor = buttonIsOffColor; }
				// consoleTestToggle.style.borderColor = buttonIsOffColor;
				// consoleClearToggle.style.borderColor = buttonIsOffColor;
			}
		default:
			break;
	}
	//
	if (consoleErrorBox.style.display == 'block') {
		consoleErrorToggle.style.borderColor = buttonIsOnColor;
	} else { consoleErrorToggle.style.borderColor = buttonIsOffColor; }
	//
	if (consoleEventBox.style.display == 'block') {
		consoleEventToggle.style.borderColor = buttonIsOnColor;
	} else { consoleEventToggle.style.borderColor = buttonIsOffColor; }
	//
	if (consoleStateBox.style.display == 'block') {
		consoleStateToggle.style.borderColor = buttonIsOnColor;
	} else { consoleStateToggle.style.borderColor = buttonIsOffColor; }
	consoleTestToggle.style.borderColor = buttonIsOnColor;
	consoleClearToggle.style.borderColor = buttonIsOnColor;
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
			consoleDebugToggle.style.borderColor = buttonIsOffColor;
		} else {
			consoleDebugToggle.style.borderColor = buttonIsOnColor;
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
			consoleToggle.style.borderColor = buttonIsOffColor;
		} else {
			consoleToggle.style.borderColor = buttonIsOnColor;
		}
		//
	}
}

function ConsoleStateLogOn() {
	// UseLog &&
	return (consoleErrorBoxButton
		|| consoleEventBoxButton
		|| consoleStateBoxButton);
}

function ConsoleStateDebugOn() {
	// UseDebug &&
	return (UseLogTimerMove
		|| UseLogTimerTransition
		|| UseLogTimerDetail
		|| UseDebugOnError
		|| UseDebugOnAll
		|| UseLogEvents);
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
	// 	ErrorOccured(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, eventCurr, consoleStateForm, consoleStateBox, 'Cannot access Console Form.', errorIsWarning, errorDoNotDisplayTag, UseAlert);
	// 	// return;
	// }
	// if (!consoleStateBoxValid) {
	// 	ErrorOccured(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, eventCurr, consoleStateBox, consoleStateBox, 'Cannot access Console Form.', errorIsSevere, errorDoNotDisplayTag, UseAlert);
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
		ErrorOccured(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, eventCurr, consoleStateForm, consoleStateBox, 'Cannot access Console Form.', errorIsWarning, errorDoNotDisplayTag, UseAlert);
		// return;
	}
	if (!consoleStateBoxValid) {
		ErrorOccured(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, eventCurr, consoleStateBox, consoleStateBox, 'Cannot access Console Form.', errorIsSevere, errorDoNotDisplayTag, UseAlert);
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
	// verify load
	if (!consoleMouseOverToggle) {
		// error
		return;
	}
	// case 'ConsoleMouseOver':
	if (UseAnimation) {
		consoleMouseOverToggle.style.borderColor = buttonIsOnColor;
	} else {
		consoleMouseOverToggle.style.borderColor = buttonIsOffColor;
	}
	// ...................................... //
	// ...................................... //
	// case 'FONTS'
	// Smaller
	// Reset
	// Larger
	// ...................................... //
	// ...................................... //
	// case 'ConsoleAll':
	// if (consoleBoxButton) {
	// 	consoleBox.style.display = 'block';
	// } else {
	// 	consoleBox.style.display = 'none';
	// }

	// case 'ConsoleDebug':
	if (consoleDebugButton) {
		// consoleBox.style.display = 'block';
		consoleDebugMainToggles.style.borderColor = buttonIsNormalColor;
		// Show buttons
		// Meta controls (any and all)
		consoleDebugOnErrorToggle.style.display = 'block';
		consoleDebugAllToggle.style.display = 'block';
		consoleDebugAllDetailToggle.style.display = 'block';
		// Console, layout, window
		consoleDebugConsoleToggle.style.display = 'block';
		consoleDebugLayoutToggle.style.display = 'block';
		consoleDebugWindowToggle.style.display = 'block';
		// Animation
		consoleDebugAnimationToggle.style.display = 'block';
		consoleDebugMoveToggle.style.display = 'block';
		consoleDebugTransitionToggle.style.display = 'block';
		consoleDebugDetailToggle.style.display = 'block';
		consoleDebugEventsToggle.style.display = 'block';
		consoleDebugHoverToggle.style.display = 'block';
	} else {
		// consoleBox.style.display = 'none';
		if (UseDebugOnError || UseDebugOnAll || UseLogTimerMove
			|| UseLogTimerTransition || UseLogTimerDetail || UseLogEvents) {
			consoleDebugMainToggles.style.borderColor = buttonIsOnColor;
		} else {
			consoleDebugMainToggles.style.borderColor = buttonIsNormalColor;
		}
		// Hide buttons
		// Meta controls (any and all)
		consoleDebugOnErrorToggle.style.display = 'none';
		consoleDebugAllToggle.style.display = 'none';
		consoleDebugAllDetailToggle.style.display = 'none';
		// Console, layout, window
		consoleDebugConsoleToggle.style.display = 'none';
		consoleDebugLayoutToggle.style.display = 'none';
		consoleDebugWindowToggle.style.display = 'none';
		// Animation
		consoleDebugAnimationToggle.style.display = 'none';
		consoleDebugMoveToggle.style.display = 'none';
		consoleDebugTransitionToggle.style.display = 'none';
		consoleDebugDetailToggle.style.display = 'none';
		consoleDebugEventsToggle.style.display = 'none';
		consoleDebugHoverToggle.style.display = 'none';
	}

	// ...................................... //
	// case 'ConsoleAll':
	if (consoleBoxButton) {
		if (consoleErrorBoxButton || consoleEventBoxButton || consoleStateBoxButton) {
			consoleBox.style.display = 'block';
		} else { consoleBox.style.display = 'none'; }
		consoleToggle.style.color = consoleViewToggleColor;
		consoleToggle.style.background = consoleViewToggleBackgroud;
		consoleToggle.style.borderColor = buttonIsNormalColor;
		if (errorSeverityHighest > errorIsComment) {
			consoleErrorToggle.style.color = 'black';
			consoleErrorToggle.style.background = errorSeverityColorHighestBg;
		} else {
			consoleErrorToggle.style.color = consoleViewToggleColor;
			consoleErrorToggle.style.background = consoleViewToggleBackgroud;
		}
		// Show buttons
		consoleErrorToggle.style.display = 'block';
		consoleEventToggle.style.display = 'block';
		consoleStateToggle.style.display = 'block';
		consoleTestToggle.style.display = 'block';
		consoleClearToggle.style.display = 'block';
	} else {
		consoleBox.style.display = 'none';
		consoleToggle.style.borderColor = buttonIsNormalColor;
		if (errorSeverityHighest > errorIsComment) {
			consoleToggle.style.color = 'black';
			consoleToggle.style.background = errorSeverityColorHighestBg;
			// consoleToggle.style.borderColor = buttonIsNormalColor;
			consoleErrorToggle.style.color = 'black';
			consoleErrorToggle.style.background = errorSeverityColorHighestBg;
		} else {
			consoleToggle.style.color = consoleViewToggleColor;
			consoleToggle.style.background = consoleViewToggleBackgroud;
			// consoleToggle.style.borderColor = buttonIsNormalColor;
			consoleErrorToggle.style.color = consoleViewToggleColor;
			consoleErrorToggle.style.background = consoleViewToggleBackgroud;
		}
		// Hide buttons
		consoleErrorToggle.style.display = 'none';
		consoleEventToggle.style.display = 'none';
		consoleStateToggle.style.display = 'none';
		consoleTestToggle.style.display = 'none';
		consoleClearToggle.style.display = 'none';
	}

	// case 'ConsoleError':
	if (consoleErrorBoxButton) {
		consoleErrorBox.style.display = 'block';
		consoleErrorToggle.style.borderColor = buttonIsOnColor;
	} else {
		consoleErrorBox.style.display = 'none';
		consoleErrorToggle.style.borderColor = buttonIsNormalColor;
	}

	// case 'ConsoleEvent':
	if (consoleEventBoxButton) {
		consoleEventBox.style.display = 'block';
		consoleEventToggle.style.borderColor = buttonIsOnColor;
	} else {
		consoleEventBox.style.display = 'none';
		consoleEventToggle.style.borderColor = buttonIsNormalColor;
	}

	// case 'ConsoleState':
	if (consoleStateBoxButton) {
		consoleStateBox.style.display = 'block';
		consoleStateToggle.style.borderColor = buttonIsOnColor;
	} else {
		consoleStateBox.style.display = 'none';
		consoleStateToggle.style.borderColor = buttonIsNormalColor;
	}

	// ...................................... //
	// case 'ConsoleTest':
	if (consoleTestBoxButton) {
		consoleTestToggle.style.borderColor = buttonIsNormalColor;
	} else {
		consoleTestToggle.style.borderColor = buttonIsNormalColor;
	}

	// case 'ConsoleClear':
	if (consoleClearButton) {
		consoleClearToggle.style.borderColor = buttonIsNormalColor;
	} else {
		consoleClearToggle.style.borderColor = buttonIsNormalColor;
	}
	// ...................................... //
	// ...................................... //
	// case 'ConsoleDebug':
	// if (consoleDebugButton) {
	// } else {
	// }

	// case 'ConsoleDebugOnError':
	if (UseDebugOnError) {
		consoleDebugOnErrorToggle.style.borderColor = buttonIsOnColor;
	} else {
		consoleDebugOnErrorToggle.style.borderColor = buttonIsOffColor;
	}

	// case 'ConsoleDebugAll':
	if (UseDebugOnAll) {
		consoleDebugAllToggle.style.borderColor = buttonIsOnColor;
	} else {
		consoleDebugAllToggle.style.borderColor = buttonIsOffColor;
	}

	// case 'ConsoleDebugAllDetail':
	if (UseLogAllDetail) {
		consoleDebugAllDetailToggle.style.borderColor = buttonIsOnColor;
	} else {
		consoleDebugAllDetailToggle.style.borderColor = buttonIsOffColor;
	}

	// Page
	// ...................................... //
	// case 'ConsoleDebugConsole':
	if (UseLogConsole) {
		consoleDebugConsoleToggle.style.borderColor = buttonIsOnColor;
	} else {
		consoleDebugConsoleToggle.style.borderColor = buttonIsOffColor;
	}
	// case 'ConsoleDebugLayout':
	if (UseLogPage) {
		consoleDebugLayoutToggle.style.borderColor = buttonIsOnColor;
	} else {
		consoleDebugLayoutToggle.style.borderColor = buttonIsOffColor;
	}
	// case 'ConsoleDebugWindow':
	if (UseLogWindow) {
		consoleDebugWindowToggle.style.borderColor = buttonIsOnColor;
	} else {
		consoleDebugWindowToggle.style.borderColor = buttonIsOffColor;
	}

	// Animation
	// ...................................... //
	// case 'ConsoleDebugAnimation':
	if (UseLogAnitmation) {
		consoleDebugAnimationToggle.style.borderColor = buttonIsOnColor;
	} else {
		consoleDebugAnimationToggle.style.borderColor = buttonIsOffColor;
	}

	// case 'ConsoleDebugMove':
	if (UseLogTimerMove) {
		consoleDebugMoveToggle.style.borderColor = buttonIsOnColor;
	} else {
		consoleDebugMoveToggle.style.borderColor = buttonIsOffColor;
	}

	// case 'ConsoleDebugTransition':
	if (UseLogTimerTransition) {
		consoleDebugTransitionToggle.style.borderColor = buttonIsOnColor;
	} else {
		consoleDebugTransitionToggle.style.borderColor = buttonIsOffColor;
	}

	// case 'ConsoleDebugDetail':
	if (UseLogTimerDetail) {
		consoleDebugDetailToggle.style.borderColor = buttonIsOnColor;
	} else {
		consoleDebugDetailToggle.style.borderColor = buttonIsOffColor;
	}

	// case 'ConsoleDebugEvents':
	if (UseLogEvents) {
		consoleDebugEventsToggle.style.borderColor = buttonIsOnColor;
	} else {
		consoleDebugEventsToggle.style.borderColor = buttonIsOffColor;
	}

	// case 'ConsoleDebugHover':
	if (UseLogHover) {
		consoleDebugHoverToggle.style.borderColor = buttonIsOnColor;
	} else {
		consoleDebugHoverToggle.style.borderColor = buttonIsOffColor;
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
				// State, Error, No Event
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
				consoleEventBox.style.left = '2%';
				consoleEventBox.style.width = '97%';
			} else {
				// No State, No Error & No Event
				// nothing visible, show Error
				consoleErrorBox.style.left = '2%';
				consoleErrorBox.style.width = '97%';
				//
			}
		}
	}
	// ...................................... //
}

function ConsoleStateTest() {
	var testVar = 253 / 'xxx';
	var testVar2 = bodyNothing;
	testVar2 += 200;
}
//
script_state = "MdmDebugConsole loaded";
if (debugLoadIsOn) { debugger; }
