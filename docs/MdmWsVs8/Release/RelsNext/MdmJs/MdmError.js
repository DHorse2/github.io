// Error Message Display
// Global Error Variables
// ...................................... //
// var errorFatal = 3;
// var errorSevere = 2;
// var errorWarn = 1;
// var errorDidNotOccur = 0;
//
errorResultOnFail = errorDidNotOccur;
errorMessage = "initializing";
//
// var MessageElementFatal;
// var MessageElementSevere;
// var MessageElementWarn;
// var MessageElementComment;
//
// errorLogFatal = "";
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
MessageUrl = "";
MessageTemp = new String();
MessageFinal = new String();
errorInnerHTML = new String();
errorSourceInnerHTML = new String();
//
errorMessageAllLog = new String();
MessageFinalLog = new String();
errorInnerHTMLLog = new String();
errorSourceInnerHTMLLog = new String();
// SectionBlock Window & Script Exceptions & Error function (s)
errorFirst = true; // FLAG ON!!! todo

// Error
// ...................................... //
// Error message build
// ...................................... //
function ErrorOccured(eventCurr, MessageElementPassed, MessageElementSourcePassed, MessagePassed, errorSeverityPassed, errorDisplayTagPassed, errorDoAlert) {
    if (errorFirst) { errorFirst = false; return; }
    // this may set an event or message... dunno
    MessageFinal = "";
    errorInnerHTML = "";
    errorSourceInnerHTML = "";
    ErrorSet(eventCurr);
    MessageFinal = ErrorMessageGet();
    //
    if (errorDoAlert = null) { errorDoAlert = false; }
    localDoUseDebug = false;
    //
    // Error Severity
    switch (errorSeverityPassed) {
        case MessageElementFatal:
            MessageFinal += "Fatal";
            break;
        case MessageElementSevere:
            MessageFinal += "Severe";
            break;
        case MessageElementWarn:
            MessageFinal += "Warning";
            break;
        case MessageElementComment:
        default:
            MessageFinal += "(Comment) No";
            break;
    }
    //
    MessageFinal = ErrorMessageGet();
    //
    if (!errorDisplayTagPassed) {
        // don't know what to do here...
    } else {
        //
        if (!elementPassed && !MessageElementSourcePassed) { localDoUseDebug = true; }

        if (elementPassed) {
            MessageFinal += ", Target tag";
            if ("id" in elementPassed) {
                MessageFinal += " (" + elementPassed.id + ")";
            } else if ("name" in elementPassed) {
                MessageFinal += " (" + elementPassed.name + ")";
            }
            if ("nodeName" in elementPassed) {
                MessageFinal += ", for tag type (" + elementPassed.nodeName + ")";
            }
            if ("innerHTML" in elementPassed) {
                errorInnerHTML += "Target HTML: " + elementPassed.innerHTML;
            }
        } else {
            MessageFinal += ". No target tag";
        }
        //
        if (MessageElementSourcePassed) {
            MessageFinal += ". <br>Source tag";
            if ("id" in MessageElementSourcePassed) {
                MessageFinal += " (" + MessageElementSourcePassed.id + ")";
            } else if ("name" in MessageElementSourcePassed) {
                MessageFinal += " (" + MessageElementSourcePassed.name + ")";
            }
            if ("nodeName" in MessageElementSourcePassed) {
                MessageFinal += ", for tag type (" + MessageElementSourcePassed.nodeName + ")";
            }
            if ("innerHTML" in MessageElementSourcePassed) {
                errorInnerHTML += "Target HTML: " + MessageElementSourcePassed.innerHTML;
            }
        } else {
            MessageFinal += ". No source tag";
        }
        //
    }
    if (localDoUseDebug && DoUseDebug) { debugger; }
    //
    // Add message to appropriate log
    // Error Type
    switch (errorSeverityPassed) {
        case MessageElementFatal:
            errorLogFatal += MessageFinal;
            break;
        case MessageElementSevere:
            errorMessageSevere += MessageFinal;
            break;
        case MessageElementWarn:
            errorMessageWarn += MessageFinal;
            break;
        case MessageElementComment:
        default:
            errorMessageComment += MessageFinal;
            break;
    }
    //
}
// Error Message Display
////////////////////////////////////////////////
function ErrorOccuredDepreciated(eventCurr, MessageElementPassed, MessageElementSourcePassed, MessagePassed, errorSeverityPassed, errorDisplayTagPassed, errorDoAlert) {
    if (errorSeverityPassed = errorFatal) {
        // display alert
        // dipslay in HTML Critial Message Area
    } else if (errorSeverityPassed = errrorSevere) {
        // display alert
        // dipslay in HTML Critial Message Area
    } else if (errorSeverityPassed = errorWarn) {
        // dipslay in HTML Warnging Message Area
    } else if (errorSeverityPassed = errorDidNotOccur) {
        // dipslay in HTML Message Area
    } else {
        // dipslay in HTML Message Area
    }
}
// Window Error
function WindowError() {
    EventSet(eventCurr = Event);
    WindowErrorDetail(eventCurr, eventMessage, eventFileName, eventLineNum);
}
var e;
function WindowErrorDetail(eventCurr, MessagePassed, MessageUrlPassed, MessageLineNumPassed) {
    if (errorFirst) { errorFirst = false; return; }
    // this may set an event or message... dunno
    MessageUrl = MessageUrlPassed;
    ErrorSet(eventCurr);

    // error Object: description Property | message Property | name Property | number Property
    // event Object: returnValue srcElement type
    //
    MessageElement = null;
    MessageElementSource = null;
    //
    localDoUseDebug = false;
    if (!MessageLineNumPassed) { MessageLineNumPassed = -1; }
    if (!MessageUrlPassed) { MessageUrlPassed = 'no url available'; }
    if (!MessagePassed) {
        MessagePassed = 'NO ERROR MESSAGE AVAILABLE!!!';
        localDoUseDebug = true;
    }
    //
    eventEventCurr = Event;
    e = Event;
    //
    MessageElement = eventEventCurr.target;
    MessageElementSource = eventEventCurr.srcElement;
    eventObject = (MessageElementSource || MessageElement || Event);
    //
    EventType = eventEventCurr.type;
    if (eventObject.id) {
        if (eventObject.id != null) {
            eventEventCurrId = eventObject.id;
        } else { eventEventCurrId = ''; }
    } else { eventEventCurrId = ''; }
    //
    // display error in log
    MessageLog(eventCurr, DoUseDebug, DoUseSingeLine,
        '(' + errorCaller + ':' + MessageLineNumPassed + ') ' + MessagePassed,
        MessageUrlPassed, MessageLineNumPassed, MessageElement, MessageElementSource,
        errorSevere, errorDoDisplayTag, errorDoAlert);
    //
    if (browserIsIE) {
        // set returnValue to suppress error display in browser
        // e.returnValue = true;
        return true;
    }
    //
}
// Window Error Debug
// ...................................... //
function WindowErrorDebug(eventCurr, MessagePassed, MessageUrlPassed, MessageLineNumPassed) {
    MessageUrl = MessageUrlPassed;
    // ErrorSet(); // todo ???
    //
    // if (errorDebugLevel < 1+errorSeverityPassed) { // ignore this when called to allow override...
    //
    if (errorUseDebugOnError || errorUseDebugOnAll) {
        if (consoleBox.style.display != 'block') {
            BodyConsoleToggle('ConsoleAll');
            BodyConsoleToggle('ConsoleEvent');
            BodyConsoleToggle('ConsoleState');
        } else if (consoleErrorBox.style.display != 'block') { BodyConsoleToggle('ConsoleError'); }
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
function DebugStart(debugOptionPassed, debugMessagePassed) {
    if (!debugIsOn) { return; }
    if (debugDoAlert) {
        alert('Ready to debug: ' + debugMessagePassed + '(' + debugOptionPassed + ')');
    } else {
        if (browserIsTEST) {
            debugger;
        } else if (browserIsIE) {
            debugger;
        } else if (browserIsFF) {
            // Throw something
            // throw 'Ready to debug: ' + debugMessagePassed + '(' + debugOptionPassed + ')';
            // Use degug instance (from VK)
            // debug-instance-off ElementItemShow;
        } else {
            debugger;
        }
    }
}
// Error Message Log
function consoleEventLog(eventCurr, eventType, eventObject, eventCurrRootObj,
    eventText, eventUrl, eventLine) {
    consoleEventLogCn += 1;
    // MessageUrl = eventUrl;
    var eventMessage =
        charNoWrapTagStart
        + '(' + (consoleEventLogCn).toString() + ')'
        + ' ' + eventType
        + ' ' + eventObject.id
        + ' ' + eventCurrRootObj.id
        + ' ' + eventText
        + charNoWrapTagEnd + charNewLineTag
        + consoleEventTextBox.innerHTML;
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
function MessageLog(eventCurr, UseDebug, UseSingeLinePassed, MessagePassed,
    MessageUrlPassed, MessageLineNumPassed, elementPassed, elementSourcePassed,
    errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed) {
    if (!elementPassed) { elementPassed = null; }
    if (!elementSourcePassed) { elementSourcePassed = null; }
    //
    MessageFinal = '';
    // Error Type
    switch (errorSeverityPassed) {
        case MessageElementFatal:
            MessageFinal += 'Fatal';
            break;
        case MessageElementSevere:
            MessageFinal += 'Severe';
            break;
        case MessageElementWarn:
            MessageFinal += 'Warning';
            break;
        case MessageElementComment:
        default:
            MessageFinal += 'No';
            break;
    }
    //
    MessageFinal += ' Error: ';
    if ((MessageUrlPassed).length) {
        MessageFinal += MessageUrlPassed;
        if (!UseSingeLinePassed
            && (MessageFinal.length > 30
                && MessageUrlPassed.length > 30)
        ) {
            MessageFinal += charNewLineTag + charTextIndent;
        }
    }
    //
    MessageFinal += ' ' + MessagePassed;
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
                if (!UseSingeLinePassed
                    && (MessageFinal.length > 30
                        && tempMessage.length > 30)
                ) {
                    MessageFinal += charNewLineTag + charTextIndent;
                }
                //
                MessageFinal += 'Target tag ' + tempMessage;
            } else {
                MessageFinal += '. No target tag';
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
                if (!UseSingeLinePassed
                    && (MessageFinal.length > 30
                        && tempMessage.length > 30)
                ) {
                    MessageFinal += charNewLineTag + charTextIndent;
                }
                //
                MessageFinal += 'Inner HTML ' + errorInnerHTML;
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
                if (!UseSingeLinePassed
                    && (MessageFinal.length > 30
                        && tempMessage.length > 30)
                ) {
                    MessageFinal += charNewLineTag + charTextIndent;
                }
                //
                MessageFinal += 'Source tag ' + tempMessage;
            } else {
                MessageFinal += '. No source tag';
            }
        }
        MessageFinal += '.';
        //
    }
    //
    var DoDebug = false;
    var errorSeverityColor = 'White';
    // Add message to appropriate log
    // Error Type
    switch (errorSeverityPassed) {
        case errorFatal:
        case MessageElementFatal:
            if (errorDebugLevel < 1 + errorSeverityPassed) { DoDebug = true; }
            // errorLogFatal += MessageFinal;
            errorSeverityColor = 'Red';
            break;
        case errorSevere:
        case MessageElementSevere:
            if (errorDebugLevel < 1 + errorSeverityPassed) { DoDebug = true; }
            // errorMessageSevere += MessageFinal;
            errorSeverityColor = 'Yellow';
            break;
        case errorWarn:
        case MessageElementWarn:
            if (errorDebugLevel < 1 + errorSeverityPassed) { DoDebug = true; }
            // errorMessageWarn += MessageFinal;
            errorSeverityColor = 'Orange';
            break;
        case errorComment:
        case MessageElementComment:
        default:
            if (errorDebugLevel < 1 + errorSeverityPassed) { DoDebug = true; }
            // errorMessageComment += MessageFinal;
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
    // errorMessageAllLog += MessageFinal;
    //
    MessageLogAction(MessagePassed,
        MessageUrlPassed, MessageLineNumPassed, elementPassed, elementSourcePassed,
        errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed);
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
        var tempInnerHTML = charNoWrapTagStart + '(#' + tempCount
            + ', &#64;' + MessageLineNumPassed + ')' + ' ' + MessageFinal
            + charNoWrapTagEnd + consoleErrorTextBox.innerHTML;
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
        }
    }
    //
    // Alert
    if (errorDoAlertPassed || !consoleErrorTextBox) {
        alert('(' + tempCount + ')' + ' ' + TextReplace(MessageFinal, charNewLineTag, charNewLine));
    }
    //
    // Abort & Debug
    if (DoDebug) {
        var DoDebugAbort = WindowErrorDebug(eventCurr, MessagePassed, MessageUrlPassed, MessageLineNumPassed);
        if (DoDebugAbort) {
            // ABORT
        }
    }
    //
}
// Error Message Action
function MessageLogAction(eventCurr, MessagePassed,
    MessageUrlPassed, MessageLineNumPassed, MessageElementPassed, MessageElementSourcePassed,
    errorSeverityPassed, errorDisplayTagPassed, errorDoAlert) {
    if (errorSeverityPassed == errorFatal) {
        // display alert
        // dipslay in HTML Critial Message Area
    } else if (errorSeverityPassed == errorSevere) {
        // display alert
        // dipslay in HTML Critial Message Area
    } else if (errorSeverityPassed == errorWarn) {
        // dipslay in HTML Warnging Message Area
    } else if (errorSeverityPassed == errorDidNotOccur) {
        // dipslay in HTML Message Area
    } else {
        // dipslay in HTML Message Area
    }
}
// ..................................................................................... _//
// Attach the listener for Errors
// It will fire when an error occurs.
// window.addEventListener("error", WindowError, capture);
// window.onerror = function() { WindowError(); };
window.onerror = function () { WindowError(); }; // Window Error from start;
// ..................................................................................... _//
script_state = "MdmError functions loaded and started";
if (debugLoadIsOn) { debugger; }
