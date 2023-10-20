// Error Message Display
// Global Error Variables
// ...................................... //
// var e;
var errorDidNotOccur = 0;
var errorComment = 5;
var errorWarn = 10;
var errorSevere = 20;
var errorFatal = 30;
//
var errorDebugLevel = errorSevere;
var errorSeverity = errorDidNotOccur;
var errorSeverityLevel = errorDidNotOccur;
var errorSeverityHighest = errorDidNotOccur;
var DoDebug = false;
// Message Colors
var errorSeverityColorFatal = 'Red';
var errorSeverityColorSevere = 'Yellow';
var errorSeverityColorWarn = 'Orange';
var errorSeverityColorComment = 'Lime';
var errorSeverityColor = errorSeverityColorComment;
//
var errorResultOnFail = errorDidNotOccur;
var errorMessage = "Error handling initializing";
//
var consoleErrorLogCn = 0;
var consoleErrorLogScrollCn = 0;

// Section Mouse Events function (s)
// ...................................... //
// Section Body Content Mouse Events function (s)
// ...................................... //
// Image Standard Mouse Events
// Mouse
// 		ElementEventMouseOver
//		    ElementEventMouseOut
//		    ElementEventClick

// SectionBlock Events (Mouse, load, error)
// ...................................... //
var LastId = '';
var LastTochedId = '';
//
var eventParentName = new String();
//
var eventType = "init";
var eventEventObject = null;
var eventArguments;
var eventStack = '';
var eventMessage = new String();
var eventFileName = '';
var eventFileLine = 0;
var eventFileColumn = 0;
var eventFileFunction = '';
//
var eventCurrentTarget = null;
var eventTimeStamp;
var eventIsBrowser;
//
var errorElement = null;
var errorElementSource = null;

// SectionBlock Menu Mouse Events
// ...................................... //
var eventCn = 0;
var eventCurr = null;
var eventObject = null;
var eventCurrId = '';
var eventType = '';
//
var eventLast;
var eventLastObject;
var eventLastId = '';
var eventLastRootId = '';
//
var eventCurrRootObj;

// Error Settings
// ...................................... //
// errorMessageLogFatal = "";
// errorLogSevere = "";
// errorLogWarn = "";
// errorLogComment = "";
// SectionBlock Debug Utilities
// ...................................... //
// var debugIsOn = true;
// var debugDoAlert = true;
// var debugIsOn = false;
// var debugDoAlert = false;
// This flag not implemented in forms or buttons
// var debugAlert = true;
//
// var debugTimer = false;
// var debugTimerMove = false;
// var debugTimerTransition = false;
// var debugTimerDetail = false;
// Log (mouse) events to console
// ...................................... //
// var debugLogEvents = false;
// var debugLogEventDuplicates = false;
// Use debugger on error:
// ...................................... //
// this (debug on error) is the only toggle on by default
// var errorUseDebugOnError = false; // enter debugger on errors
//
// var errorUseDebugOnAll = false; // enter debugger after any message
//
// var errorDidNotOccur = 0;
// var errorComment = 5;
// var errorWarn = 10;
// var errorSevere = 20;
// var errorFatal = 30;
//
// var errorSeverity = errorDidNotOccur;
// var errorDebugLevel = errorSevere;
// Error Message Display
// ..................................................................................... _//
// Error message build
// ...................................... //
var messageUrl = "";
var messageTemp = new String();
var messageElement = null;
var messageElementSource = null;
var messageFinal = new String();
var messageUrl = '';
var errorInnerHTML = new String();
var errorSourceInnerHTML = new String();
//
var errorMessageLogAll = new String();
var errorMessageLogFatal = new String();
var errorMessageLogSevere = new String();
var errorMessageLogWarn = new String();
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
function ErrorOccured(eventCurrPassed, elementPassed, elementSourcePassed, messagePassed, errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed) {
    // if (errorFirst) { return; }
    // this may set an event or message... dunno
    messageFinal = "";
    errorSeverityColor = 'White';
    errorInnerHTML = "";
    errorSourceInnerHTML = "";
    if (!messagePassed) { messagePassed = ""; }
    if (!messageUrl) { messageUrl = ""; }

    ErrorSet(eventCurrPassed);

    messageFinal = ErrorMessageGet() + ': ';

    if (!UseSingleLine && messageFinal.length > 30 || errorSeverityPassed >= errorSevere) {
        messageFinal += charNewLineTag + charTextIndent;
    }
    //
    localDoUseDebug = false;
    // Error Severity Level
    if (errorSeverityPassed >= errorFatal) {
        messageFinal = "FATAL Error " + messageFinal;
        errorSeverityLevel = errorFatal;
        if (errorDebugLevel < 1 + errorSeverityPassed) { localDoUseDebug = true; }
        // errorMessageLogFatal += messageFinal;
        errorSeverityColor = 'Red';
    } else if (errorSeverityPassed >= errorSevere) {
        messageFinal = "SEVERE Error " + messageFinal;
        errorSeverityLevel = errorSevere;
        if (errorDebugLevel < 1 + errorSeverityPassed) { localDoUseDebug = true; }
        // errorMessageLogSevere += messageFinal;
        errorSeverityColor = 'Yellow';
    } else if (errorSeverityPassed >= errorWarn) {
        messageFinal = "Warning! " + messageFinal;
        errorSeverityLevel = errorWarn;
        if (errorDebugLevel < 1 + errorSeverityPassed) { localDoUseDebug = true; }
        // errorMessageLogWarn += messageFinal;
        errorSeverityColor = 'Orange';
    } else {
        // errorComment:
        messageFinal = "(Comment) " + messageFinal;
        errorSeverityLevel = errorDidNotOccur;
        if (errorDebugLevel < 1 + errorSeverityPassed) { localDoUseDebug = true; }
        // errorMessageLogComment += messageFinal;
        errorSeverityColor = 'Lime';
    }
    //
    // if (!UseSingleLine && errorSeverityPassed >= errorSevere) {
    //     messageFinal += charNewLineTag;
    // }
    //
    if (!errorDoDisplayTagPassed) {
        // don't know what to do here...
    } else {
        //
        if (!elementPassed && !elementSourcePassed) { localDoUseDebug = true; }

        if (elementPassed) {
            messageFinal += ". ";
            if (!UseSingleLine && messageFinal.length > 30) {
                messageFinal += charNewLineTag + charTextIndent;
            }
            messageFinal += "Target tag";
            if ("id" in elementPassed) {
                messageFinal += " (" + elementPassed.id + ")";
            } else if ("name" in elementPassed) {
                messageFinal += " (" + elementPassed.name + ")";
            }
            if ("nodeName" in elementPassed) {
                messageFinal += ", for tag type (" + elementPassed.nodeName + ")";
            }
            if ("innerHTML" in elementPassed) {
                errorInnerHTML += "Target HTML: " + elementPassed.innerHTML;
            }
        } else {
            messageFinal += ". No target tag";
        }
        //
        if (elementSourcePassed) {
            messageFinal += ". ";
            if (!UseSingleLine && messageFinal.length > 30) {
                messageFinal += charNewLineTag + charTextIndent;
            }
            messageFinal += "Source tag";
            if ("id" in elementSourcePassed) {
                messageFinal += " (" + elementSourcePassed.id + ")";
            } else if ("name" in elementSourcePassed) {
                messageFinal += " (" + elementSourcePassed.name + ")";
            }
            if ("nodeName" in elementSourcePassed) {
                messageFinal += ", for tag type (" + elementSourcePassed.nodeName + ")";
            }
            if ("innerHTML" in elementSourcePassed) {
                errorInnerHTML += "Target HTML: " + elementSourcePassed.innerHTML;
            }
        } else {
            messageFinal += ". No source tag";
        }
        //
    }

    messageFinal += ". ";
    messageFinal += charNewLineTag;

    // if (errorUseDebugOnAll || localDoUseDebug && DoUseDebug) {
    //     // debugger;
    //     WindowErrorDebug(eventCurrPassed, messageFinal, eventFileName, eventFileColumn);
    // }
    // // Debug
    // if (localDoUseDebug && DoUseDebug) {
    //     debugger;
    //     WindowErrorDebug(eventCurrPassed, messageFinal, eventFileName, eventFileColumn);
    // }
    // //
    return messageFinal;
}

// Window Error - an error occurred
// var eventArguments;
// var eventStack;
// eventType = "none";
// eventMessage = e.toString();
// eventFileLine = 0;
// eventFileColumn = 0;
// function WindowError(eventCurrPassed, argumentsPassed) {
function WindowError(eventCurrPassed, errorSeverityPassed, errorArguments) {
    // eventArguments = argumentsPassed.toString();
    eventStack = new Error().stack;
    // SO:
    if (eventCurrPassed) {
        if (eventCurrPassed.lineNumber || eventCurrPassed.lineNumber == 0) {
            // return; // can't use it any way.
        }
    }
    EventSet(eventCurrPassed);
    WindowErrorDetail(errorSeverityPassed, eventCurrPassed, eventMessage, eventFileName, eventFileLine, eventFileColumn);
}

// Window Error full details
function WindowErrorDetail(errorSeverityPassed, eventCurrPassed, messagePassed, messageUrlPassed, messageLineNumPassed, messageFileColumn) {
    // if (errorFirst) { return; }
    // this may set an event or message... dunno
    messageElement = null;
    messageElementSource = null;
    messageUrl = messageUrlPassed;

    messageTemp = ErrorOccured(eventCurrPassed, messageElement, messageElementSource, messagePassed, errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed);
    // ErrorSet(eventCurrPassed);

    // error Object: description Property | message Property | name Property | number Property
    // event Object: returnValue srcElement type
    //
    localDoUseDebug = false;
    if (!messageLineNumPassed) { messageLineNumPassed = -1; }
    if (!messageUrlPassed) { messageUrlPassed = 'no url available'; }
    if (!messagePassed) {
        messagePassed = 'NO ERROR MESSAGE AVAILABLE!!!';
        localDoUseDebug = true;
    }
    //
    eventEventCurr = Event;
    e = Event;
    //
    messageElement = eventEventCurr.target;
    messageElementSource = eventEventCurr.srcElement;
    eventObject = (messageElementSource || messageElement || Event);
    //
    EventType = eventEventCurr.type;
    if (eventObject.id) {
        if (eventObject.id != null) {
            eventEventCurrId = eventObject.id;
        } else { eventEventCurrId = ''; }
    } else { eventEventCurrId = ''; }
    //
    // display error in log
    MessageLog(eventCurrPassed, DoUseDebug, DoUseSingleLine,
        messageTemp,
        messageUrlPassed, messageLineNumPassed, messageElement, messageElementSource,
        errorSevere, errorDoDisplayTag, errorDoAlert);
    // MessageLog(eventCurrPassed, DoUseDebug, DoUseSingleLine,
    //     '(' + eventFileName + ':' + messageLineNumPassed + ') ' + messagePassed,
    //     messageUrlPassed, messageLineNumPassed, messageElement, messageElementSource,
    //     errorSevere, errorDoDisplayTag, errorDoAlert);
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
function WindowErrorDebug(eventCurrPassed, messagePassed, messageUrlPassed, messageLineNumPassed) {
    messageUrl = messageUrlPassed;
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
    if (!debugIsOn) { return; }
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
function ConsoleEventLog(eventCurr, eventType, eventObject, eventCurrRootObj,
    eventText, eventUrl, eventLine) {
    consoleEventLogCn += 1;
    // messageUrl = eventUrl;
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
        WindowErrorDebug(eventCurr, eventMessage, eventUrl, eventLine);
    }
    //
}
// Error Message Display
function MessageLog(eventCurr, UseDebug, UseSingleLinePassed, messagePassed,
    messageUrlPassed, messageLineNumPassed, elementPassed, elementSourcePassed,
    errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed) {
    //
    DoDebug = false;
    errorSeverityColor = 'White';
    if (!elementPassed) { elementPassed = null; }
    if (!elementSourcePassed) { elementSourcePassed = null; }
    if (!messagePassed) { messagePassed = ""; }
    //
    messageFinal = ErrorOccured(eventCurr, elementPassed, elementSourcePassed, messagePassed, errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed);
    //
    if ((messageUrlPassed).length) {
        messageFinal += messageUrlPassed;
        if (!UseSingleLinePassed
            && (messageFinal.length > 30
                && messageUrlPassed.length > 30)
        ) {
            messageFinal += charNewLineTag + charTextIndent;
        }
    }
    //
    messageFinal += ' ' + messagePassed;
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

    // Add message to appropriate log
    // Error Type
    switch (errorSeverityPassed) {
        case errorFatal:
            if (errorDebugLevel < 1 + errorSeverityPassed) { DoDebug = true; }
            // errorMessageLogFatal += messageFinal;
            errorSeverityColor = 'Red';
            break;
        case errorSevere:
            if (errorDebugLevel < 1 + errorSeverityPassed) { DoDebug = true; }
            // errorMessageLogSevere += messageFinal;
            errorSeverityColor = 'Yellow';
            break;
        case errorWarn:
            if (errorDebugLevel < 1 + errorSeverityPassed) { DoDebug = true; }
            // errorMessageLogWarn += messageFinal;
            errorSeverityColor = 'Orange';
            break;
        case errorComment:
            if (errorDebugLevel < 1 + errorSeverityPassed) { DoDebug = true; }
            // errorMessageLogComment += messageFinal;
            errorSeverityColor = 'White';
            break;
        default:
            if (errorDebugLevel < 1 + errorSeverityPassed) { DoDebug = true; }
            // errorMessageLogComment += messageFinal;
            errorSeverityColor = 'Lime';
            break;
    }
    //
    if (errorUseDebugOnAll) { DoDebug = true; } else {
        // if (errorUseDebugOnError) { DoDebug = true; } else {
        if (UseDebug) { DoDebug = true; }
        // }
    }
    //
    if (errorSeverityHighest < errorSeverityPassed) {
        // Coloured button to inform user
        if (consoleClearToggle) {
            if (errorSeverityColor != 'White') {
                if (errorSeverityPassed >= errorSevere || errorSeverityPassed >= errorDebugLevel) {
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
    // REFRESH browser display
    //
    // Current Message / Error Counter
    consoleErrorLogCn += 1;
    consoleErrorLogScrollCn += 1;
    var tempCount;
    if (consoleErrorLogCn < 1000) {
        tempCount = (1000 + consoleErrorLogCn).toString().substring(1, 3);
    } else { tempCount = (100000 + consoleErrorLogCn).toString().substring(1, 5); }
    //
    // Text display
    // New line
    // consoleErrorTextBox.innerHTML = charNewLineTag + consoleErrorTextBox.innerHTML;
    // Message
    if (consoleErrorTextBox) {
        var tempInnerHTML =  charNewLineTag + tagSpan;
        if (errorSeverityColor != 'White') {
            tempInnerHTML += ' style="color:' + errorSeverityColor + '; background-color:black"' + gt
        } else {
            tempInnerHTML += gt;
        }
        tempInnerHTML += '(#' + tempCount
            + ', &#64;' + messageLineNumPassed + ')' + ' ' + messageFinal
            + tagSpanEnd + consoleErrorTextBox.innerHTML;
        // var tempInnerHTML = charNoWrapTag + ' style="color:' + errorSeverityColor + '"' + gt
        // + '(#' + tempCount
        // + ', &#64;' + messageLineNumPassed + ')' + ' ' + messageFinal
        // + charNoWrapTagEnd + consoleErrorTextBox.innerHTML;
        // var tempInnerHTML = charNoWrapTagStart + '(#' + tempCount
        // + ', &#64;' + messageLineNumPassed + ')' + ' ' + messageFinal
        // + charNoWrapTagEnd + consoleErrorTextBox.innerHTML;
        consoleErrorTextBox.innerHTML = tempInnerHTML;
        //
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
    MessageLogAction(messagePassed,
        messageUrlPassed, messageLineNumPassed, elementPassed, elementSourcePassed,
        errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed);
}
// Error Message Action
function MessageLogAction(eventCurr, messagePassed,
    messageUrlPassed, messageLineNumPassed, elementPassed, elementSourcePassed,
    errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed) {
    //
    // Alert
    if (errorDoAlertPassed || !consoleErrorTextBox) {
        alert('(' + tempCount + ')' + ' ' + StringTextReplace(messagePassed, charNewLineTag, charNewLine));
    }
    //
    // Abort & Debug
    if (DoDebug) {
        var DoDebugAbort = WindowErrorDebug(eventCurr, messagePassed, messageUrlPassed, messageLineNumPassed);
        if (DoDebugAbort) {
            WindowErrorAbort(); // does nothing.
        }
    }
    // Log
    // Add message to appropriate log
    errorMessageLogAll += messagePassed;
    // by Error Type
    switch (errorSeverityLevel) {
        case errorFatal:
            errorMessageLogFatal += messagePassed;
            break;
        case errorSevere:
            errorMessageLogSevere += messagePassed;
            break;
        case errorWarn:
            errorMessageLogWarn += messagePassed;
            break;
        case errorComment:
            errorMessageLogComment += messagePassed;
        default:
            errorMessageLogComment += messagePassed;
            break;
    }
    // Action (none)
    if (errorSeverityPassed >= errorFatal) {
        // display alert
        // dipslay in HTML Critial Message Area
    } else if (errorSeverityPassed >= errorSevere) {
        // display alert
        // dipslay in HTML Critial Message Area
    } else if (errorSeverityPassed >= errorWarn) {
        // dipslay in HTML Warnging Message Area
    } else if (errorSeverityPassed >= errorComment) {
        // dipslay in HTML Comment Message Area
    } else if (errorSeverityPassed >= errorDidNotOccur) {
        // dipslay in HTML Message Area
    } else {
        // dipslay in HTML Message Area
        // can't happen?
    }
}
// ..................................................................................... _//
// Attach the listener for Errors
// It will fire when an error occurs.
window.onerror = function (event) { WindowError(event, errorSevere, Arguments[1]); };
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

script_state = "MdmError functions and events loaded and started";
if (debugLoadIsOn) { debugger; }
