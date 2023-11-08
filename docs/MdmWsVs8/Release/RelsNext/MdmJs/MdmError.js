// Error Message Display
// Global Error Variables
// ...................................... //
// var e;
var errorDidNotOccur = 0;
var errorIsComment = 5;
var errorIsWarning = 10;
var errorIsSevere = 20;
var errorIsFatal = 30;
//
var errorDebugLevel = errorIsSevere;
var errorSeverity = errorDidNotOccur;
var errorSeverityLevel = errorDidNotOccur;
var errorSeverityHighest = errorDidNotOccur;

// Message Colors
var errorSeverityColorFatal = 'Red';
var errorSeverityColorFatalBg = 'Black';
var errorSeverityColorSevere = 'Yellow';
var errorSeverityColorSevereBg = 'Black';
var errorSeverityColorWarn = 'Orange';
var errorSeverityColorWarnBg = 'Gray';
var errorSeverityColorComment = 'Lime';
var errorSeverityColorCommentBg = 'White';
var errorSeverityColor = errorSeverityColorComment;
var errorSeverityColorBg = errorSeverityColorCommentBg;
//
var errorSeverityDescription = 'No error';
// var UseSingleLine = DoNotUseSingleLine;
var errorResultOnFail = errorDidNotOccur;
//
// consoleErrorLogCn = 0;
// consoleErrorLogScrollCn = 0;

// Section Mouse Events function (s)
// ...................................... //
// Section Body Content Mouse Events function (s)
// ...................................... //
// Image Standard Mouse Events
// Mouse
// 		ElementEventMouseOver
//		    ElementEventMouseOut
//		    ElementEventClick

// // SectionBlock Events (Mouse, load, error)
// // ...................................... //
// var LastId = '';
// var LastTouchedId = '';
// //
// var eventCn = 0;
// var eventCurr = null;
// var e;
// var eventObject = null;
// var eventCurrId = '';
// var eventType = 'init';
// var eventEventObject = null;
// var eventArguments;
// var eventStack = '';
// var eventMessage = new String();
// var eventFileName = '';
// var eventFileLine = 0;
// var eventFileColumn = 0;
// var eventFileFunction = '';
// //
// var eventCurrentTarget = null;
// var eventTimeStamp;
// var eventIsBrowser;
// //
// var errorElement = null;
// var errorElementSource = null;
// //
// var eventLast;
// var eventLastObject;
// var eventLastId = '';
// var eventLastRootId = '';
// //
// var eventParentName = new String();
// var eventCurrRootObj;

// Error Settings
// ...................................... //
// errorMessageLogFatal = '';
// errorLogSevere = '';
// errorLogWarn = '';
// errorLogComment = '';
// SectionBlock Debug Utilities
// ...................................... //
// var UseDebug = true;
// var debugDoAlert = true;
// var UseDebug = false;
// var debugDoAlert = false;
// This flag not implemented in forms or buttons
// var ConsoleLogAlert = true;
//
// var ConsoleLogTimer = false;
// var ConsoleLogTimerMove = false;
// var ConsoleLogTimerTransition = false;
// var ConsoleLogTimerDetail = false;
// Log (mouse) events to console
// ...................................... //
// var ConsoleLogEvents = false;
// var ConsoleLogEventDuplicates = false;
// Use debugger on error:
// ...................................... //
// this (debug on error) is the only toggle on by default
// var errorUseDebugOnError = false; // enter debugger on errors
//
// var errorUseDebugOnAll = false; // enter debugger after any message
//
// var errorDidNotOccur = 0;
// var errorIsComment = 5;
// var errorIsWarning = 10;
// var errorIsSevere = 20;
// var errorIsFatal = 30;
//
// var errorSeverity = errorDidNotOccur;
// var errorDebugLevel = errorIsSevere;
// Error Message Display
// ..................................................................................... _//
// Error message build
// ...................................... //
// var messageTemp = new String();
// var messageElement = null;
// var messageElementSource = null;
// var messageFinal = new String();
// var messageDetail = new String();
// var messageUrl = '';
var errorInnerHTML = new String();
var errorSourceInnerHTML = new String();
//
// var errorMessage = '';
var errorMessageLogAll = new String();
var errorMessageLogFatal = new String();
var errorMessageLogSevere = new String();
var errorMessageLogWarning = new String();
var errorMessageLogComment = new String();

var errorMessageLogFinal = new String();
var errorInnerHTMLLog = new String();
var errorSourceInnerHTMLLog = new String();
// SectionBlock Window & Script Exceptions & Error function (s)
// Error
// ...................................... //
// Error message build
// ...................................... //
// var errorSeverityLevel;
function ErrorOccured(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed,
    eventCurrPassed, elementPassed, elementSourcePassed,
    messagePassed,
    errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed) {
    //
    messageTemp = ErrorAnalysis(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed,
        eventCurrPassed, UseDebugPassed, UseSingleLinePassed,
        elementPassed, elementSourcePassed,
        messagePassed,
        errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed);
    //
    WindowErrorDisplay(errorSeverityPassed, eventCurrPassed,
        messagePassed,
        eventFileName, eventFileLine, eventFileColumn);
}

function ErrorCaught(errorObjectPassed, script_statePassed, errorSeverityPassed) {
    if (!(errorObjectPassed instanceof Error)) { errorObjectPassed = new Error(errorObjectPassed); }
    errorCurr = errorObjectPassed;
    errorSeverity = errorSeverityPassed;
    ErrorSet(errorCurr);
    // display this todo
    //
    // ErrorOccured(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, eventCurr, consoleStateBox, consoleStateBox, 'Cannot access Console Form.', errorIsSevere, errorDoNotDisplayTag, errorDoNotAlert);
    //
    WindowErrorDisplay(errorSeverity, eventCurr,
        script_statePassed,
        eventFileName, eventFileLine, eventFileColumn);
}

function ErrorAnalysis(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed,
    eventCurrPassed, UseDebugPassed, UseSingleLinePassed,
    elementPassed, elementSourcePassed,
    messagePassed,
    errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed) {
    // if (errorFirst) { return; }
    // this may set an event or message... dunno
    errorUseDebug = UseDebugPassed;

    errorMessage = '';
    errorMessageDetail = '';
    errorSeverityDescription = '';
    errorSeverityColor = errorSeverityColorComment;
    errorSeverityColorBg = errorSeverityColorCommentBg;
    errorInnerHTML = '';
    errorSourceInnerHTML = '';
    if (!messagePassed) { messagePassed = ''; }
    if (!messageUrl) { messageUrl = ''; }
    ErrorMessage = messagePassed;

    ErrorSet(eventCurrPassed);

    ErrorMessageDetail = ErrorMessageGet(UseSingleLinePassed);
    // if (!UseSingleLinePassed && ErrorMessage.length > 30 || errorSeverityPassed >= errorIsSevere) {
    //     ErrorMessage += charNewLineTag + charTextIndent;
    // }
    //
    // Error Severity Level
    if (errorSeverityPassed >= errorIsFatal) {
        errorSeverityDescription = 'FATAL Error!!!';
        // ErrorMessage = 'FATAL Error ' + ErrorMessage;
        errorSeverityLevel = errorIsFatal;
        errorSeverityColor = errorSeverityColorFatal;
        errorSeverityColorBg = errorSeverityColorFatalBg;
        if (errorDebugLevel < 1 + errorSeverityPassed) { errorUseDebug = DoUseDebug; }
    } else if (errorSeverityPassed >= errorIsSevere) {
        errorSeverityDescription = 'SEVERE Error!!';
        errorSeverityLevel = errorIsSevere;
        errorSeverityColor = errorSeverityColorSevere;
        errorSeverityColorBg = errorSeverityColorSevereBg;
        if (errorDebugLevel < 1 + errorSeverityPassed) { errorUseDebug = DoUseDebug; }
    } else if (errorSeverityPassed >= errorIsWarning) {
        errorSeverityDescription = 'Warning!';
        errorSeverityLevel = errorIsWarning;
        errorSeverityColor = errorSeverityColorWarn;
        errorSeverityColorBg = errorSeverityColorWarnBg;
        if (errorDebugLevel < 1 + errorSeverityPassed) { errorUseDebug = DoUseDebug; }
    } else {
        // errorIsComment:
        errorSeverityDescription = 'Comment,';
        errorSeverityLevel = errorDidNotOccur;
        errorSeverityColor = errorSeverityColorComment;
        errorSeverityColorBg = errorSeverityColorCommentBg;
        if (errorDebugLevel < 1 + errorSeverityPassed) { errorUseDebug = DoUseDebug; }
    }
    //
    ErrorMessage = errorSeverityDescription + ' ' + messagePassed;
    // var tmpMessage = ErrorMessage;
    // if (ErrorMessageDetail.length) {
    //     if (!UseSingleLinePassed && tmpMessage.length > 30) {
    //         tmpMessage += charNewLineTag + charTextIndent;
    //     } else {
    //         tmpMessage += ', ';
    //     }
    // }
    // ErrorMessageDetail = tmpMessage + ErrorMessageDetail;
    //
    // if (!UseSingleLinePassed && errorSeverityPassed >= errorIsSevere) {
    //     ErrorMessage += charNewLineTag;
    // }
    //
    if (!errorDoDisplayTagPassed) {
        // don't know what to do here...
    } else {
        //
        if (!elementPassed && !elementSourcePassed) { errorUseDebug = DoUseDebug; }

        if (elementPassed) {
            ErrorMessageDetail += '. ';
            if (!UseSingleLinePassed) {
                ErrorMessageDetail += charNewLineTag + charTextIndent;
            }
            ErrorMessageDetail += 'Target tag';
            if ("id" in elementPassed) {
                ErrorMessageDetail += ' (' + elementPassed.id + ')';
            } else if ("name" in elementPassed) {
                ErrorMessageDetail += ' (' + elementPassed.name + ')';
            }
            if ("nodeName" in elementPassed) {
                ErrorMessageDetail += ', for tag type (' + elementPassed.nodeName + ')';
            }
            if ("innerHTML" in elementPassed) {
                errorInnerHTML += 'Target HTML: ' + elementPassed.innerHTML;
            }
        } else {
            ErrorMessageDetail += '. No target tag';
        }
        //
        if (elementSourcePassed) {
            ErrorMessageDetail += '. ';
            if (!UseSingleLinePassed) {
                ErrorMessageDetail += charNewLineTag + charTextIndent;
            }
            ErrorMessageDetail += "Source tag";
            if ("id" in elementSourcePassed) {
                ErrorMessageDetail += ' (' + elementSourcePassed.id + ')';
            } else if ("name" in elementSourcePassed) {
                ErrorMessageDetail += ' (' + elementSourcePassed.name + ')';
            }
            if ("nodeName" in elementSourcePassed) {
                ErrorMessageDetail += ', for tag type (' + elementSourcePassed.nodeName + ')';
            }
            if ("innerHTML" in elementSourcePassed) {
                errorInnerHTML += 'Target HTML: ' + elementSourcePassed.innerHTML;
            }
        } else {
            ErrorMessageDetail += '. No source tag';
        }
        //
    }

    ErrorMessageDetail += '. ';
    // ErrorMessageDetail += charNewLineTag;
    // if (!UseSingleLinePassed && ErrorMessageDetail.length > 30 || errorSeverityPassed >= errorIsSevere) {
    //     ErrorMessageDetail += charNewLineTag + charTextIndent;
    // }
    //
    // if (errorUseDebugOnAll || errorUseDebug && DoUseDebug) {
    //     // debugger;
    //     WindowErrorDebug(eventCurrPassed, ErrorMessageDetail, eventFileName, eventFileColumn);
    // }
    // // Debug
    // if (errorDoDebug && DoUseDebug) {
    //     debugger;
    //     WindowErrorDebug(eventCurrPassed, ErrorMessageDetail, eventFileName, eventFileColumn);
    // }
    // //
    return ErrorMessageDetail;
}

// Window Error - an error occurred
// any of the following data is important:
// eventArguments;
// eventStack;
// eventErrorCaught;
// eventType = "none";
// eventMessage = e.toString();
// eventFileLine = 0;
// eventFileColumn = 0;

// WindowError(eventMessagePassed, eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, errorIsSevere);
// function WindowError(eventCurrPassed, argumentsPassed) {
function WindowError(eventMessagePassed, eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, errorSeverityPassed) {
    EventSet(eventCurr);
    eventMessage = eventMessagePassed;
    // if (eventMessage.length) {
    //     eventMessage += eventMessagePassed;
    // } else { eventMessage = eventMessagePassed; }
    if (eventMessage.indexOf('function') !== -1) {
        eventMessage = eventMessage.split('}').pop()
    }

    if (!eventFileName.length) { eventFileName = eventFileNamePassed; }
    if (!eventFileLine.length) { eventFileLine = eventFileLinePassed; }
    if (!eventFileColumn.length) { eventFileColumn = eventFileColumnPassed; }
    // Store the error objects
    // eventArguments = argumentsPassed.toString();
    localArgs = new Object();
    localArgs['eventMessage'] = eventMessage;
    localArgs['eventFileName'] = eventFileName;
    localArgs['eventFileLine'] = eventFileLine;
    localArgs['eventFileColumn'] = eventFileColumn;
    localArgs['eventCurr'] = eventCurr;
    // eventStack = new Error().stack; // here, not used.
    WindowErrorDisplay(errorSeverityPassed, eventCurr, eventMessage, eventFileName, eventFileLine, eventFileColumn);
}

// Window Error full details
function WindowErrorDisplay(errorSeverityPassed, eventCurrPassed, messagePassed, eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed) {
    // if (errorFirst) { return; }
    // this may set an event or message... dunno
    messageElement = null;
    messageElementSource = null;
    messageUrl = eventFileNamePassed;

    // messageTemp = ErrorAnalysis(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed,
    //     eventCurrPassed, messageElement, messageElementSource,
    //     messagePassed,
    //     errorSeverityPassed, errorDoDisplayTag, errorDoNotAlert);
    // ErrorSet(eventCurr);

    // error Object: description Property | message Property | name Property | number Property
    // event Object: returnValue srcElement type
    //
    errorUseDebug = DoNotUseDebug;
    // if (!eventFileLinePassed) { eventFileLinePassed = -1; }
    if (!eventFileNamePassed) { eventFileNamePassed = 'no url available'; }
    if (!messagePassed) {
        messagePassed = 'NO ERROR MESSAGE AVAILABLE!!!';
       DoUseDebug;
    }
    //
    if (eventCurrPassed) {
        if (eventCurrPassed.type) { eventType = eventCurrPassed.type; }
        if (eventCurrPassed.target) { messageElement = eventCurrPassed.target; }
        if (eventCurrPassed.srcElement) { messageElementSource = eventCurrPassed.srcElement; }
    }
    eventObject = (messageElementSource || messageElement || event);
    //
    if (eventObject && eventObject.id) {
        if (eventObject.id != null) {
            eventCurrId = eventObject.id;
        } else { eventCurrId = ''; }
    } else { eventCurrId = ''; }
    //
    // display error in log
    MessageLog(eventCurrPassed, DoUseDebug, UseSingleLine,
        messagePassed,
        eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed,
        messageElement, messageElementSource,
        errorSeverityPassed, errorDoDisplayTag, errorDoAlert);
    // MessageLog(eventCurrPassed, DoUseDebug, UseSingleLine,
    //     '(' + eventFileName + ':' + eventFileLinePassed + ') ' + messagePassed,
    //     eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, messageElement, messageElementSource,
    //     errorIsSevere, errorDoDisplayTag, errorDoAlert);
    //
    if (browserIsIE) {
        // set returnValue to suppress error display in browser
        // e.returnValue = true;
        return true;
    }
    //
}
function WindowErrorAbort() {
    return true;
}
// Window Error Debug - start debugging
function WindowErrorDebug(eventCurrPassed, messagePassed, eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed) {
    messageUrl = eventFileNamePassed;
    // ErrorSet(); // todo ???
    //
    // if (errorDebugLevel < 1+errorSeverityPassed) { // ignore this when called to allow override...
    //
    if (errorUseDebugOnError || errorUseDebugOnAll) {
        if (consoleBox.style.display != 'block') {
            BodyConsoleToggle(true, 'ConsoleAll');
            BodyConsoleToggle(true, 'ConsoleEvent');
            BodyConsoleToggle(true, 'ConsoleState');
        }
        if (consoleErrorBox.style.display != 'block') { BodyConsoleToggle(true, 'ConsoleError'); }
        //
        if (browserIsIE) {
            debugger;
        } else {
            debugger;
        }
    }
    // }
    // return true to indicate an abort...
    return false;
}
// Section Debug and Error Management function (s)
// ..................................................................................... _//
// ...................................... //
// SectionBlock Application Debug & Error function (s)
// ...................................... //
// Layout Next
function DebugStart(debugOptionPassed, debugmessagePassed) {
    if (!UseDebug) { return; }
    if (debugDoAlert) {
        alert('Ready to debug: ' + debugmessagePassed + '(' + debugOptionPassed + ')');
    }
    if (browserIsTEST) {
        debugger;
    } else if (browserIsIE) {
        debugger;
    } else if (browserIsFF) {
        // Throw something
        // throw 'Ready to debug: ' + debugmessagePassed + '(' + debugOptionPassed + ')';
        // Use degug instance (from VK)
        // debug-instance-off ElementItemShow;
        debugger;
    } else {
        debugger;
    }
}
// Error Message Log
function ConsoleEventLog(eventCurrPassed, eventType, eventObject, eventCurrRootObj,
    eventText, eventFileNamePassed, eventFileLinePassed) {
    consoleEventLogCn += 1;
    // messageUrl = eventUrl;
    eventCurr = eventCurrPassed;
    eventMessage =
        charNoWrapTagStart
        + '(' + (consoleEventLogCn).toString() + ')'
        + ' ' + eventType
        + ' ' + eventObject.id
        + ' ' + eventCurrRootObj.id
        + ' ' + eventText
        + charNoWrapTagEnd + charNewLineTag;
    // + consoleEventTextBox.innerHTML;
    //
    consoleEventTextBox.innerHTML = eventMessage + consoleEventTextBox.innerHTML;
    //
    if ((consoleEventTextBox.innerHTML).length > consoleLogLengthMax) {
        consoleEventTextBox.innerHTML = (consoleEventTextBox.innerHTML).substr(0, consoleLogLengthTrim);
    }
    //
    if (errorUseDebugOnAll) {
        WindowErrorDebug(eventCurr, eventMessage, eventFileNamePassed, eventFileLinePassed, 0);
    }
    //
}
// Error Message Display
function MessageLog(eventCurrPassed, UseDebugPassed, UseSingleLinePassed, messagePassed,
    eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, elementPassed, elementSourcePassed,
    errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed) {
    //
    errorUseDebug = DoNotUseDebug;
    errorSeverityColor = errorSeverityColorComment;
    errorSeverityColorBg = errorSeverityColorCommentBg;
    // if (!elementPassed) { elementPassed = null; }
    // if (!elementSourcePassed) { elementSourcePassed = null; }
    // if (!messagePassed) { messagePassed = ""; }
    //
    eventCurr = eventCurrPassed; // maybe null
    messageFinal = '';
    messageDetail = ErrorAnalysis(eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed,
        eventCurrPassed, UseDebugPassed, UseSingleLinePassed,
        elementPassed, elementSourcePassed,
        messagePassed,
        errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed);
    //
    // note: the use of " PropertyX in elementPasssed" did not work for validating properties of elementPasssed.
    //
    if (!errorDoDisplayTagPassed) {
        // don't know what to do here...
    } else {
        //
        var tempMessage = new String;
        if (elementPassed && elementPassed != null) {
            if (elementPassed.id) {
                if ((elementPassed.id).length) { tempMessage += 'id (' + elementPassed.id + ')'; }
            } else if (elementPassed.name) {
                if ((elementPassed.name).length) { tempMessage += 'name (' + elementPassed.name + ')'; }
            }
            if (elementPassed.nodeName) {
                if ((elementPassed.nodeName).length) { tempMessage += ', for tag type (' + elementPassed.nodeName + ')'; }
            }
            if (tempMessage.length > 0) {
                if (!UseSingleLinePassed
                    && (messageFinal.length > 30
                        && tempMessage.length > 30)
                ) {
                    messageFinal += charNewLineTag + charTextIndent;
                }
                //
                messageFinal += 'Target tag ' + tempMessage;
            } else {
                messageFinal += '. No target tag';
            }
            //
            if (elementPassed.innerHTML) {
                if ((elementPassed.innerHTML).length) {
                    errorInnerHTML = '';
                    errorInnerHTML += 'Target HTML: ';
                    if ((elementPassed.innerHTML).length < 256) {
                        errorInnerHTML += elementPassed.innerHTML;
                    } else {
                        errorInnerHTML += elementPassed.innerHTML;
                    }
                }
                if (!UseSingleLinePassed
                    && (messageFinal.length > 30
                        && tempMessage.length > 30)
                ) {
                    messageFinal += charNewLineTag + charTextIndent;
                }
                //
                messageFinal += 'Inner HTML ' + errorInnerHTML;
            }
        }
        //
        if (elementSourcePassed && elementSourcePassed != null) {
            tempMessage = '';
            if (elementSourcePassed.id) {
                if ((elementSourcePassed.id).length) { tempMessage += ' (' + elementSourcePassed.id + ')'; }
            } else if (elementSourcePassed.name) {
                if ((elementSourcePassed.name).length) { tempMessage += ' (' + elementSourcePassed.name + ')'; }
            }
            if (elementSourcePassed.nodeName) {
                if ((elementSourcePassed.nodeName).length) { tempMessage += ', for tag type (' + elementSourcePassed.nodeName + ')'; }
            }
            if (elementSourcePassed.innerHTML) {
                if ((elementSourcePassed.innerHTML).length) {
                    errorInnerHTML += 'Source HTML: ';
                    if ((elementSourcePassed.innerHTML).length < 256) {
                        errorInnerHTML += elementSourcePassed.innerHTML;
                    } else { errorInnerHTML += (elementSourcePassed.innerHTML).substr(0, 50); }
                }
            }
            if (tempMessage.length > 0) {
                if (!UseSingleLinePassed
                    && (messageFinal.length > 30
                        && tempMessage.length > 30)
                ) {
                    messageFinal += charNewLineTag + charTextIndent;
                }
                //
                messageFinal += 'Source tag ' + tempMessage;
            } else {
                messageFinal += '. No source tag';
            }
        }
        messageFinal += '.';
        //
    }

    // Set the message
    messageTemp = errorSeverityDescription;
    if (eventCurr && eventType) { messageTemp += ' e(' + eventType + ')'; }
    messageTemp += ' ' + messagePassed;
    if (ConsoleLogDetails || errorSeverityPassed >= errorIsWarning) {
        // if (!UseSingleLinePassed && messageDetail.length > 30) { messageTemp += charNewLineTag + charTextIndent; }
        messageTemp += charNewLineTag + charTextIndent;
        messageTemp += ' Details: ' + messageDetail;
        if ((eventFileNamePassed).length) {
            messageTemp += charNewLineTag + charTextIndent;
            messageTemp += ' For: ' + eventFileNamePassed;
        }
        if (eventStack && eventStack.length) {
            messageTemp += charNewLineTag + charTextIndent;
            messageTemp += ' Stack: ';
            messageTemp += charNewLineTag + charTextIndentSmall;
            messageTemp += StringTextNewlineReplace(eventStack, charNewLineTag + charTextIndentSmall);
        }
    }
    messageFinal = messageTemp + messageFinal;
    //
    if (errorUseDebugOnAll) { errorUseDebug = DoUseDebug; } else {
        // if (errorUseDebugOnError) { errorUseDebug = DoUseDebug; } else {
        if (UseDebugPassed) { errorUseDebug = DoUseDebug; }
        // }
    }
    //
    if (errorSeverityHighest < errorSeverityPassed) {
        // Coloured button to inform user
        if (consoleClearToggle) {
            if (errorSeverityColor != 'White') {
                if (errorSeverityPassed >= errorIsSevere || errorSeverityPassed >= errorDebugLevel) {
                    consoleClearToggle.style.backgroundColor = errorSeverityColor;
                    consoleClearToggle.style.color = 'Black';
                    consoleClearToggle.style.borderColor = 'White';
                } else {
                    consoleClearToggle.style.borderColor = errorSeverityColor;
                }
            } else {
                consoleClearToggle.style.borderColor = ButtonIsOnColor;
            }
        }
        //
        errorSeverityHighest = errorSeverityPassed;
    }
    //
    // messageFinal += charNewLineTag + charTextIndent;
    //
    // REFRESH browser display
    //
    // Current Message / Error Counter
    consoleErrorLogCn += 1;
    consoleErrorLogScrollCn += 1;
    var tempErrorCn, tempLine, tempPrefix;
    // not working
    tempErrorCn = StringPad(consoleErrorLogCn, (consoleErrorLogCn < 1000) ? 3 : 5, '0');
    // tempLine = StringPad(eventFileLinePassed, 4, '0'); // not search friendly
    tempLine = eventFileLinePassed;
    tempPrefix = '(Err#' + tempErrorCn + ', find&#64;' + tempLine + ')' + ' ';
    messageFinal = tempPrefix + messageFinal;
    //
    // Text display
    // New line
    // consoleErrorTextBox.innerHTML = charNewLineTag + consoleErrorTextBox.innerHTML;
    // Message
    if (consoleErrorTextBox) {
        var tempInnerHTML = charNewLineTag + tagSpan;
        tempInnerHTML += ' style="color:' + errorSeverityColor + '; background-color:' + errorSeverityColorBg + '"' + gt;
        tempInnerHTML += messageFinal + charNewLineTag + tagSpanEnd;
        consoleErrorTextBox.innerHTML = tempInnerHTML + consoleErrorTextBox.innerHTML;;
        // Trim length for memory management
        if ((consoleErrorTextBox.innerHTML).length > consoleLogLengthMax) {
            consoleErrorTextBox.innerHTML = (consoleErrorTextBox.innerHTML).substr(0, consoleLogLengthTrim);
        }
        //
        // Scroll to top when not in focus
        if (browserIsIE) {
            // while (consoleErrorLogScrollCn > 20 && !consoleErrorTextBox.hasFocus()) {
            while (consoleErrorLogScrollCn > 20) {
                consoleErrorTextBox.doScroll('scrollbarPageUp');
                consoleErrorLogScrollCn -= 20;
            }
        } else {
            // TODO scrolling for other browsers
            consoleErrorTextBox.scrollTo(0, 0);
        }
    }
    // Logging and Action
    MessageLogAction(eventCurrPassed, tempPrefix + messagePassed, messageFinal,
        eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, elementPassed, elementSourcePassed,
        errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed);
}
// Error Message Action
function MessageLogAction(eventCurrPassed, messagePassed, messageFinalPassed,
    eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, elementPassed, elementSourcePassed,
    errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed) {
    //
    // Log
    // Add message to appropriate log
    if (!messageFinalPassed || !messageFinalPassed.length) { messageFinalPassed = messagePassed; }
    messageFinalPassed = charNewLineTag + messageFinalPassed;
    errorMessageLogAll += messageFinalPassed;
    // Action
    if (errorSeverityPassed >= errorIsFatal) {
        // display alert
        errorDoAlertPassed = true;
        // dipslay in HTML Critial/Fatal Message Area
        errorMessageLogFatal += messageFinalPassed;
    } else if (errorSeverityPassed >= errorIsSevere) {
        // display alert
        // dipslay in HTML Severe Message Area
        errorMessageLogSevere += messageFinalPassed;
    } else if (errorSeverityPassed >= errorIsWarning) {
        // dipslay in HTML Warnging Message Area
        errorMessageLogWarning += messageFinalPassed;
    } else if (errorSeverityPassed >= errorIsComment) {
        // dipslay in HTML Comment Message Area
        errorMessageLogComment += messageFinalPassed;
    } else if (errorSeverityPassed >= errorDidNotOccur) {
        // dipslay in HTML Message Area
        errorMessageLogComment += messageFinalPassed;
    } else {
        // dipslay in HTML Severe Area
        errorMessageLogSevere += messageFinalPassed;
        // can't happen?
    }
    // Alert
    if (errorDoAlertPassed || debugDoAlert || !consoleErrorTextBox) {
        alert(StringTextReplace(messagePassed, charNewLineTag, charNewLine));
    }
    //
    // Abort & Debug
    if (errorUseDebug) {
        var errorDoDebugAbort = WindowErrorDebug(eventCurrPassed, messagePassed, eventFileNamePassed, eventFileLinePassed);
        if (errorDoDebugAbort) {
            WindowErrorAbort(); // does nothing.
        }
    }
}
// ..................................................................................... _//
// Attach the listener for Errors
// It will fire when an error occurs.
var localArgs = new Object();
window.onerror = function (eventMessagePassed, eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed) {
    if (window.event) { eventCurr = window.event; }
    WindowError(eventMessagePassed, eventFileNamePassed, eventFileLinePassed, eventFileColumnPassed, errorIsSevere);
};
// window.onerror = (event) => {
//     WindowError(event);
// };
// window.onerror = (event, arguments) => {
//     eventArguments = arguments;
//     WindowError2(event, arguments);
// };
// this doesn't work. Only [1] is accessible.
// if (arguments) {
//     eventMessage = arguments["0"];
//     eventFileName = arguments[1];
//     eventFileLine = arguments[2];
//     eventFileColumn = arguments[3];
// }

// todo this also doesn't work.
// this loads the error handling stack
// not the stack where the error occured.
// eventStack = new Error().stack;

// WindowError(event);
// WindowError(event, arguments[0].toString(), arguments[1].toString());
// window.addEventListener("error", WindowError, capture);
// window.onerror = function() { WindowError(); };
// window.onerror = function () { WindowError(); }; // Window Error from start;
// ..................................................................................... _//

// window.addEventListener('error', function (e, arguments) {
// Debugging - Lives in Window Error processing.
// eventArguments = arguments;
// eventType = "none";
// eventMessage = e.toString();
// eventFileLine = 0;
// eventFileColumn = 0;
// event

// if (e) {
//     if (e.type) { eventType = e.type; }
//     if (e.message) { eventMessage = e.message; }
//     if (e.stack) {
//         eventStack = e.stack;
//         if (eventStack) {
//             eventStack += '\n' + eventMessage;
//         }
//     }
//     if (e.filename) { eventFileName = e.filename; }
//     if (e.lineno) { eventFileLine = e.lineno; }
//     if (e.colno) { eventFileColumn = e.colno; }
// }
//     WindowError(e, arguments);
// });
// ..................................................................................... _//

// // Add message to appropriate log
// // Error Type
// switch (errorSeverityPassed) {
//     case errorIsFatal:
//         if (errorDebugLevel < 1 + errorSeverityPassed) { errorUseDebug = DoUseDebug; }
//         errorSeverityLevel = errorIsFatal;
//         errorSeverityColor = errorSeverityColorFatal;
//         errorSeverityColorBg = errorSeverityColorFatalBg;
//         break;
//     case errorIsSevere:
//         if (errorDebugLevel < 1 + errorSeverityPassed) { errorUseDebug = DoUseDebug; }
//         errorSeverityLevel = errorIsSevere;
//         errorSeverityColor = errorSeverityColorSevere;
//         errorSeverityColorBg = errorSeverityColorSevereBg; break;
//     case errorIsWarning:
//         if (errorDebugLevel < 1 + errorSeverityPassed) { errorUseDebug = DoUseDebug; }
//         errorSeverityLevel = errorIsWarning;
//         errorSeverityColor = errorSeverityColorWarn;
//         errorSeverityColorBg = errorSeverityColorWarnBg;
//         break;
//     case errorIsComment:
//         if (errorDebugLevel < 1 + errorSeverityPassed) { errorUseDebug = DoUseDebug; }
//         // errorMessageLogComment += messageFinal;
//         errorSeverityColor = 'White';
//         break;
//     default:
//         if (errorDebugLevel < 1 + errorSeverityPassed) { errorUseDebug = DoUseDebug; }
//         errorSeverityLevel = errorDidNotOccur;
//         errorSeverityColor = errorSeverityColorComment;
//         errorSeverityColorBg = errorSeverityColorCommentBg;
//         break;
// }
//
// ..................................................................................... _//

// // by Error Type
// switch (errorSeverityLevel) {
//     case errorIsFatal:
//         errorMessageLogFatal += messageFinalPassed;
//         break;
//     case errorIsSevere:
//         errorMessageLogSevere += messageFinalPassed;
//         break;
//     case errorIsWarning:
//         errorMessageLogWarning += messageFinalPassed;
//         break;
//     case errorIsComment:
//         errorMessageLogComment += messageFinalPassed;
//     default:
//         errorMessageLogComment += messageFinalPassed;
//         break;
// }
// ..................................................................................... _//

script_state = "MdmError functions and events loaded and started";
if (debugLoadIsOn) { debugger; }
