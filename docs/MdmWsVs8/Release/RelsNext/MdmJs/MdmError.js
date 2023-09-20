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
// var errorElementFatal;
// var errorElementSevere;
// var errorElementWarn;
// var errorElementComment;
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
errorUrl = "";
errorMessageFinal = new String();
errorInnerHTML = new String();
errorSourceInnerHTML = new String();
//
errorMessageAllLog = new String();
errorMessageFinalLog = new String();
errorInnerHTMLLog = new String();
errorSourceInnerHTMLLog = new String();
// SectionBlock Window & Script Exceptions & Error function (s)
errorFirst = true; // FLAG ON!!! todo
window.onerror = function () { StdWindowError(); }; // Window Error from start;

// Error
// ...................................... //
// Error message build
// ...................................... //
function ErrorOccured(eventCurr, errorElementPassed, errorElementSourcePassed, errorMsgPassed, errorSeverityPassed, errorDisplayTagPassed, errorDoAlert) {
    if (errorFirst) { errorFirst = false; return; }
    // this may set an event or message... dunno
    errorMessageFinal = "";
    errorInnerHTML = "";
    errorSourceInnerHTML = "";
    EventSet();
    ErrorSet();
    errorMessageFinal = ErrorMessageGet();
    //
    if (errorDoAlert = null) { errorDoAlert = false; }
    localDoUseDebug = false;
    //
    // Error Severity
    switch (errorSeverityPassed) {
        case errorElementFatal:
            errorMessageFinal += "Fatal";
            break;
        case errorElementSevere:
            errorMessageFinal += "Severe";
            break;
        case errorElementWarn:
            errorMessageFinal += "Warning";
            break;
        case errorElementComment:
        default:
            errorMessageFinal += "(Comment) No";
            break;
    }
    //
    errorMessageFinal = ErrorMessageGet();
    //
    if (!errorDisplayTagPassed) {
        // don't know what to do here...
    } else {
        //
        if (!elementPassed && !errorElementSourcePassed) { localDoUseDebug = true; }

        if (elementPassed) {
            errorMessageFinal += ", Target tag";
            if ("id" in elementPassed) {
                errorMessageFinal += " (" + elementPassed.id + ")";
            } else if ("name" in elementPassed) {
                errorMessageFinal += " (" + elementPassed.name + ")";
            }
            if ("nodeName" in elementPassed) {
                errorMessageFinal += ", for tag type (" + elementPassed.nodeName + ")";
            }
            if ("innerHTML" in elementPassed) {
                errorInnerHTML += "Target HTML: " + elementPassed.innerHTML;
            }
        } else {
            errorMessageFinal += ". No target tag";
        }
        //
        if (errorElementSourcePassed) {
            errorMessageFinal += ". <br>Source tag";
            if ("id" in errorElementSourcePassed) {
                errorMessageFinal += " (" + errorElementSourcePassed.id + ")";
            } else if ("name" in errorElementSourcePassed) {
                errorMessageFinal += " (" + errorElementSourcePassed.name + ")";
            }
            if ("nodeName" in errorElementSourcePassed) {
                errorMessageFinal += ", for tag type (" + errorElementSourcePassed.nodeName + ")";
            }
            if ("innerHTML" in errorElementSourcePassed) {
                errorInnerHTML += "Target HTML: " + errorElementSourcePassed.innerHTML;
            }
        } else {
            errorMessageFinal += ". No source tag";
        }
        //
    }
    if (localDoUseDebug && DoUseDebug) { debugger; }
    //
    // Add message to appropriate log
    // Error Type
    switch (errorSeverityPassed) {
        case errorElementFatal:
            errorLogFatal += errorMessageFinal;
            break;
        case errorElementSevere:
            errorMessageSevere += errorMessageFinal;
            break;
        case errorElementWarn:
            errorMessageWarn += errorMessageFinal;
            break;
        case errorElementComment:
        default:
            errorMessageComment += errorMessageFinal;
            break;
    }
    //
}
// Error Message Display
////////////////////////////////////////////////
function ErrorOccuredDepreciated(eventCurr, errorElementPassed, errorElementSourcePassed, errorMsgPassed, errorSeverityPassed, errorDisplayTagPassed, errorDoAlert) {
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
var e;
function StdWindowError(eventCurr, errorMsgPassed, errorUrlPassed, errorLineNumPassed) {
    if (errorFirst) { errorFirst = false; return; }
    // this may set an event or message... dunno
    errorUrl = errorUrlPassed;
    ErrorSet();

    // error Object: description Property | message Property | name Property | number Property
    // event Object: returnValue srcElement type
    //
    errorElement = null;
    errorElementSource = null;
    //
    localDoUseDebug = false;
    if (!errorLineNumPassed) { errorLineNumPassed = -1; }
    if (!errorUrlPassed) { errorUrlPassed = 'no url available'; }
    if (!errorMsgPassed) {
        errorMsgPassed = 'NO ERROR MESSAGE AVAILABLE!!!';
        localDoUseDebug = true;
    }
    //
    eventEventCurr = Event;
    e = Event;
    //
    errorElement = eventEventCurr.target;
    errorElementSource = eventEventCurr.srcElement;
    eventObject = (errorElementSource || errorElement || Event);
    //
    EventType = eventEventCurr.type;
    if (eventObject.id) {
        if (eventObject.id != null) {
            eventEventCurrId = eventObject.id;
        } else { eventEventCurrId = ''; }
    } else { eventEventCurrId = ''; }
    //
    // display error in log
    ConsoleMessageLog(eventCurr, DoUseDebug, DoUseSingeLine,
        '(' + errorCaller + ':' + errorLineNumPassed + ') ' + errorMsgPassed,
        errorUrlPassed, errorLineNumPassed, errorElement, errorElementSource,
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
function StdWindowErrorDebug(eventCurr, errorMsgPassed, errorUrlPassed, errorLineNumPassed) {
    errorUrl = errorUrlPassed;
    // ErrorSet(); // todo ???
    //
    // if (errorDebugLevel < 1+errorSeverityPassed) { // ignore this when called to allow override...
    //
    if (errorUseDebugOnError || errorUseDebugOnAll) {
        if (elBodyConsoleBox.style.display != 'block') {
            StdBodyConsoleToggle('ConsoleAll');
            StdBodyConsoleToggle('ConsoleEvent');
            StdBodyConsoleToggle('ConsoleState');
        } else if (elBodyConsoleErrorBox.style.display != 'block') { StdBodyConsoleToggle('ConsoleError'); }
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
            // debug-instance-off StdElementItemShow;
        } else {
            debugger;
        }
    }
}
// Error Message Log
function ConsoleEventLog(eventCurr, eventType, eventObject, eventCurrRootObj,
    eventText, eventUrl, eventLine) {
    consoleEventLogCn += 1;
    // errorUrl = eventUrl;
    var eventMessage =
        charNoWrapTagStart
        + '(' + (consoleEventLogCn).toString() + ')'
        + ' ' + eventType
        + ' ' + eventObject.id
        + ' ' + eventCurrRootObj.id
        + ' ' + eventText
        + charNoWrapTagEnd + charNewLineTag
        + elBodyConsoleEventTextBox.innerHTML;
    //
    elBodyConsoleEventTextBox.innerHTML = eventMessage + elBodyConsoleEventTextBox.innerHTML;
    //
    if ((elBodyConsoleEventTextBox.innerHTML).length > consoleLogLengthMax) {
        elBodyConsoleEventTextBox.innerHTML = (elBodyConsoleEventTextBox.innerHTML).substr(0, consoleLogLengthTrim);
    }
    //
    if (errorUseDebugOnAll) {
        StdWindowErrorDebug(eventCurr, eventMessage, eventUrl, eventLine);
    }
    //
}
// Error Message Display
function ConsoleMessageLog(eventCurr, UseDebug, UseSingeLinePassed, errorMsgPassed,
    errorUrlPassed, errorLineNumPassed, elementPassed, elementSourcePassed,
    errorSeverityPassed, errorDoDisplayTagPassed, errorDoAlertPassed) {
    if (!elementPassed) { elementPassed = null; }
    if (!elementSourcePassed) { elementSourcePassed = null; }
    //
    errorMessageFinal = '';
    // Error Type
    switch (errorSeverityPassed) {
        case errorElementFatal:
            errorMessageFinal += 'Fatal';
            break;
        case errorElementSevere:
            errorMessageFinal += 'Severe';
            break;
        case errorElementWarn:
            errorMessageFinal += 'Warning';
            break;
        case errorElementComment:
        default:
            errorMessageFinal += 'No';
            break;
    }
    //
    errorMessageFinal += ' Error: ';
    if ((errorUrlPassed).length) {
        errorMessageFinal += errorUrlPassed;
        if (!UseSingeLinePassed
            && (errorMessageFinal.length > 30
                && errorUrlPassed.length > 30)
        ) {
            errorMessageFinal += charNewLineTag + charTextIndent;
        }
    }
    //
    errorMessageFinal += ' ' + errorMsgPassed;
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
                    && (errorMessageFinal.length > 30
                        && tempMessage.length > 30)
                ) {
                    errorMessageFinal += charNewLineTag + charTextIndent;
                }
                //
                errorMessageFinal += 'Target tag ' + tempMessage;
            } else {
                errorMessageFinal += '. No target tag';
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
                    && (errorMessageFinal.length > 30
                        && tempMessage.length > 30)
                ) {
                    errorMessageFinal += charNewLineTag + charTextIndent;
                }
                //
                errorMessageFinal += 'Inner HTML ' + errorInnerHTML;
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
                    && (errorMessageFinal.length > 30
                        && tempMessage.length > 30)
                ) {
                    errorMessageFinal += charNewLineTag + charTextIndent;
                }
                //
                errorMessageFinal += 'Source tag ' + tempMessage;
            } else {
                errorMessageFinal += '. No source tag';
            }
        }
        errorMessageFinal += '.';
        //
    }
    //
    var DoDebug = false;
    var errorSeverityColor = 'White';
    // Add message to appropriate log
    // Error Type
    switch (errorSeverityPassed) {
        case errorFatal:
        case errorElementFatal:
            if (errorDebugLevel < 1 + errorSeverityPassed) { DoDebug = true; }
            // errorLogFatal += errorMessageFinal;
            errorSeverityColor = 'Red';
            break;
        case errorSevere:
        case errorElementSevere:
            if (errorDebugLevel < 1 + errorSeverityPassed) { DoDebug = true; }
            // errorMessageSevere += errorMessageFinal;
            errorSeverityColor = 'Yellow';
            break;
        case errorWarn:
        case errorElementWarn:
            if (errorDebugLevel < 1 + errorSeverityPassed) { DoDebug = true; }
            // errorMessageWarn += errorMessageFinal;
            errorSeverityColor = 'Orange';
            break;
        case errorComment:
        case errorElementComment:
        default:
            if (errorDebugLevel < 1 + errorSeverityPassed) { DoDebug = true; }
            // errorMessageComment += errorMessageFinal;
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
        if (elBodyConsoleClearToggle) {
            if (errorSeverityColor != 'White') {
                if (errorSeverityPassed >= errorSevere || errorSeverityPassed >= errorDebugLevel) {
                    elBodyConsoleClearToggle.style.backgroundColor = errorSeverityColor;
                    elBodyConsoleClearToggle.style.color = 'Black';
                    elBodyConsoleClearToggle.style.borderColor = 'White';
                } else {
                    elBodyConsoleClearToggle.style.borderColor = errorSeverityColor;
                }
            } else {
                elBodyConsoleClearToggle.style.borderColor = ButtonIsOnColor;
            }
        }
        //
        errorSeverityHighest = errorSeverityPassed;
    }
    //
    // errorMessageAllLog += errorMessageFinal;
    //
    ConsoleMessageLogAction(errorMsgPassed,
        errorUrlPassed, errorLineNumPassed, elementPassed, elementSourcePassed,
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
    // elBodyConsoleErrorTextBox.innerHTML = charNewLineTag + elBodyConsoleErrorTextBox.innerHTML;
    // Message
    if (elBodyConsoleErrorTextBox) {
        var tempInnerHTML = charNoWrapTagStart + '(#' + tempCount
            + ', &#64;' + errorLineNumPassed + ')' + ' ' + errorMessageFinal
            + charNoWrapTagEnd + elBodyConsoleErrorTextBox.innerHTML;
        elBodyConsoleErrorTextBox.innerHTML = tempInnerHTML;
        //
        if ((elBodyConsoleErrorTextBox.innerHTML).length > consoleLogLengthMax) {
            elBodyConsoleErrorTextBox.innerHTML = (elBodyConsoleErrorTextBox.innerHTML).substr(0, consoleLogLengthTrim);
        }
        //
        // Scroll to top when not in focus
        if (browserIsIE) {
            // while (consoleErrorLogScrollCn > 20 && !elBodyConsoleErrorTextBox.hasFocus()) {
            while (consoleErrorLogScrollCn > 20) {
                elBodyConsoleErrorTextBox.doScroll('scrollbarPageUp');
                consoleErrorLogScrollCn -= 20;
            }
        } else {
            // TODO scrolling for other browsers
        }
    }
    //
    // Alert
    if (errorDoAlertPassed || !elBodyConsoleErrorTextBox) {
        alert('(' + tempCount + ')' + ' ' + StdTextReplace(errorMessageFinal, charNewLineTag, charNewLine));
    }
    //
    // Abort & Debug
    if (DoDebug) {
        var DoDebugAbort = StdWindowErrorDebug(eventCurr, errorMsgPassed, errorUrlPassed, errorLineNumPassed);
        if (DoDebugAbort) {
            // ABORT
        }
    }
    //
}
// Error Message Action
function ConsoleMessageLogAction(eventCurr, errorMsgPassed,
    errorUrlPassed, errorLineNumPassed, errorElementPassed, errorElementSourcePassed,
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
script_state = "MdmError functions loaded and started";
if (debugLoadIsOn) { debugger; }
