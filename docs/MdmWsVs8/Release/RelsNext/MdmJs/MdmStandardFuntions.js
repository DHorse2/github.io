//
// ------------------------------------------------------------------------------------- _//
// STANDARD VARIABLES
// Temporary
var bTemp = false;
var iTemp = 0;
var sTemp = "";
// Box Size or Box Rectangle Pointers
var indexTop = 0;
var indexLeft = 1;
var indexRight = 2;
var indexWidth = 2;
var indexBottom = 3;
var indexHeight = 3;

// Math
// ...................................... //
// Storage Location for Group
// var indexGroup = 0;
// Section Standard and Utility function (s)
// Standard function (s) - Math
// ..................................................................................... _//
// Random Number Get By Range
function MathNumberRandomGetByRange(filterRangeLowPassed, filterRangeHighPassed, filterRealFlagPassed) {
    return ((Math.random()
        * (filterRangeHighPassed - filterRangeLowPassed))
        + filterRangeLowPassed
    );
}

// Random Number Get By Range
function MathNumberRandomGetByRange(filterRangeLowPassed, filterRangeHighPassed, filterRealFlagPassed) {
    var temp = ((Math.random()
        * (filterRangeHighPassed - filterRangeLowPassed + 1))
        + filterRangeLowPassed
    );
    return (temp - (temp % 1));
}
// Standard function (s) - String
// ..................................................................................... _//
// Get Token By Prefix
function StringGetTokenByPrefix(stringPassed, stringPrefix) {
    var itemCn = 0
    var item = stringPassed.split(' ');
    while (itemCn + 1 < 1 + item.length) {
        if (item[itemCn].substr(0, stringPrefix.length) == stringPrefix) {
            return item[itemCn];
        }
        itemCn++;
    }
    return '';
}
// String Replace
function StringTextReplace(textPassed, stringFind, stringReplace) {
    // return textPassed.replace(stringFind, stringReplace);
    var TextNew = '';
    var TextPos = 0;
    do {
        TextPos = textPassed.indexOf(stringFind);
        if (TextPos >= 0) {
            TextNew += textPassed.substr(0, TextPos) + stringReplace;
            textPassed = textPassed.substr(TextPos + stringFind.length);
        }
    } while (TextPos >= 0)
    TextNew += textPassed;
    return TextNew;
}
// Standard function (s) - Fonts
// ..................................................................................... _//
// Standard function (s) - Font Size

// Base Font Size Increase
function FontSizeIncrease() {
    return;
}
// Base Font Size Decrease
function FontSizeDecrease() {
    return;
}
function FontEmToPx(em) {
    return em * 16;
}
// Transform pixels, em, and percentage value used in layout adjustments.
// ..................................................................................... _//
// Source: https://stackoverflow.com/questions/15807021/convert-pixel-to-percentage-using-javascript
// Math Px To Percentage Window
//    - totalpx: Total of pixels depending on the width or height, could be 1920.0 or 1080.0, 1280.0 or 720.0, etc...
// var Totalpx;
//      respectively.
//    - px: the pixel desidered to be converted.
// var px;
//    - ItIsHeight: boolean to know if is axis x or y ot make the correct calculation.
// var ItIsHeight;
//    - BaseOfConversionWidth & BaseOfConversionHeight: the base of conversion from the original pixel are take it, if
//      the design is HD ready then will be 1280.0 and 720.0, if is full HD then will be 1920.0 and 1080.0, etc...
//      DHorse2: alternatively this could be the parent container dimentions.
// var BaseOfConversionWidth;
// var BaseOfConversionHeight;
//
function FontPxToPercentageWindow(Totalpx, px, ItIsHeight, BaseOfConversionWidth, BaseOfConversionHeight) {
    if (ItIsHeight)
        return (px / BaseOfConversionHeight) * Totalpx;
    else
        return (px / BaseOfConversionWidth) * Totalpx;
}
function FontPxToPercentageParent(Totalpx, px, ItIsHeight, BaseOfConversionWidth, BaseOfConversionHeight) {
    if (ItIsHeight)
        return (px / BaseOfConversionHeight) * Totalpx;
    else
        return (px / BaseOfConversionWidth) * Totalpx;
}

// Execute Function
// ..................................................................................... _//
// Source: Stack Overflow
// http://stackoverflow.com/questions/359788/javascript-function-name-as-a-string
// (c) 2011 stack exchange inc;user contributions licensed under cc-wiki with attribution required
//
function FunctionDoExecuteByName(functionName, context /*, args */) {
    // ['My']['Namespace']['functionName'](arguments);// succeeds
    // FunctionDoExecuteByName('My.Namespace.functionName', window, arguments);
    // FunctionDoExecuteByName('Namespace.functionName', My, arguments);
    //
    var args = Array.prototype.slice.call(arguments).splice(2);
    var namespaces = functionName.split('.');
    var func = namespaces.pop();
    //
    // Navigate Hieararchy Object Methods
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(this, args);
}
//
function FunctionDoExecuteJsNode(node) {
    if (!node) return;
    /* IE Upper Case */
    var elementScriptSourceInNode = node.getElementByTagName('SCRIPT');
    var elementScriptBlock;
    //
    for (var elementScriptLn = 0; elementScriptLn < elementScriptSourceInNode.length; elementScriptLn++) {
        if (browserIsSA) {
            elementScriptBlock = elementScriptSourceInNode[elementScriptLn].InnerHTML;
        } else if (browserIsOP) {
            elementScriptBlock = elementScriptSourceInNode[elementScriptLn].text;
        } else if (browserIsNE) {
            elementScriptBlock = elementScriptSourceInNode[elementScriptLn].tectContent;
        } else {
            elementScriptBlock = elementScriptSourceInNode[elementScriptLn].text;
            elementScriptSourceInNode[elementScriptLn].text = '';
        }
        //
        try {
            var elementScriptTargetInHead = document.createElement('script');
            elementScriptTargetInHead.type = 'text/Javascript';
            /* IE use text */
            if ((browserIsSA) || (browserIsOP) || (browserIsNE)) {
                elementScriptTargetInHead.innerHTML = elementScriptBlock;
            } else { elementScriptTargetInHead.text = elementScriptBlock; }
            //
            document.getElementsByTagName('head')[0].appendChild(elementScriptTargetInHead);
        } catch (e) {
            alert(e);
        }
        //
    } // next i
}
// Alerts
function AlertDo() {
    // do something.
}
// Errors
/////////
var ErrorSync = 0;
function ErrorSet(eventCurr) {
    ErrorSync++;
    EventSet(eventCurr);
    errorCaller = NaN;
    errorCallerName = 'Finding...';;
    if (eventCurr) {
        if (browserIsFF) {
            errorCaller = eventCurrentTarget;
            if (errorCaller) {
                errorCallerName = errorCaller.toString();
            }
            // ErrorEvent
            // The ErrorEvent interface represents events providing information related to errors in scripts or in files.
            // Instance properties
            // Also inherits properties from its parent Event.
            // eventMessage = ErrorEvent.message; // Read only
            //     A string containing a human-readable error message describing the problem. Lacking a crossorigin setting reduces error logging.
            // eventFileName = ErrorEvent.filename; // Read only
            //     A string containing the name of the script file in which the error occurred.
            // eventFileLine = ErrorEvent.lineno; // Read only
            //     An integer containing the line number of the script file on which the error occurred.
            // eventFileColumn = ErrorEvent.colno; // Read only
            //     An integer containing the column number of the script file on which the error occurred.
            // eventError = ErrorEvent.error; // Read only
            // Constructor A JavaScript Object that is concerned by the event.
            // ErrorEvent()
            //     Creates an ErrorEvent event with the given parameters.
        } else if (browserIsOld) {
            errorCaller = eventCurr.caller;
            errorCallerName = 'Finding...';
            errrorValid = true;
            if (!errorCaller) { errorCaller = Event.caller; }
            if (!errorCaller) { errorCaller = WindowError.caller; }
        } else {
            // modern
            errorCaller = eventCurr.target;
            errorCallerName = "";
            if (eventCurr && eventCurr.type == "error") {
                // do
            } else {
                // ??? mouse ??? other ???
                // target
                // timestamp
                // currentTarget
            }
        }
        if (!errorCaller) {
            errorCaller = Event.caller;
            if (!errorCaller) {
                errorCaller = 'anoynmous';
                errorCallerName = 'anoynmous';
                errrorValid = false;
            } else {
                errorCallerName = errorCaller.toString();
                eventFileName = "?";
                eventFuncName = EventCallerFunctionNameFind(callerFunc);
                eventColNum = 0;

            }
        }
    } else {
        // event missing todo
    }
}

function ErrorNew() {
    if (browserIsFF) {
        // ErrorEvent
        // The ErrorEvent interface represents events providing information related to errors in scripts or in files.
        // Also inherits properties from its parent Event.
        // ErrorEvent.message Read only
        //     A string containing a human-readable error message describing the problem. Lacking a crossorigin setting reduces error logging.
        // ErrorEvent.filename Read only
        //     A string containing the name of the script file in which the error occurred.
        // ErrorEvent.lineno Read only
        //     An integer containing the line number of the script file on which the error occurred.
        // ErrorEvent.colno Read only
        //     An integer containing the column number of the script file on which the error occurred.
        // ErrorEvent.error Read only
        //     A JavaScript Object that is concerned by the event.
        // Constructor
        return ErrorEvent();
        //     Creates an ErrorEvent event with the given parameters.
    } else {
        return ErrorEvent();
    }
}

function ErrorMessageGet() {
    var MessageFinal = "";
    if (MessageUrl) { MessageFinal += " Url:" + MessageUrl; }
    if (eventFileName) { MessageFinal += " File:" + eventFileName; }
    if (eventFileFunction) { MessageFinal += " Function:" + eventFileFunction; }
    if (eventFileLine) { MessageFinal += " Line:" + eventFileLine; }
    if (eventFileColumn) { MessageFinal += " Column:" + eventFileColumn; }
    if (MessageFinal.length) {
        MessageFinal = " At: ( " + MessageFinal;
        MessageFinal += " )";
    }
    if (eventMessage) { MessageFinal += " Message:" + eventMessage; }
    return MessageFinal;
}

// Events
/////////
function EventSet(eventCurr) {
    // Also inherits properties from its parent Event.
    // https://developer.mozilla.org/en-US/docs/Web/Events
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/target
    //
    eventIsOld = false;
    if (!eventCurr && Event) {
        eventCurr = Event;
        eventIsOld = true;
    }
    if (eventCurr) {
        eventObject = eventCurr;
        eventId = EventIdGetNext();
        eventType = eventCurr.type;
        eventTarget = eventCurr.target;
        // ErrorEvent.message Read only. a human-readable error message describing the problem. Lacking a crossorigin setting reduces error logging.
        eventMessage = eventCurr.message;
        eventCurrentTarget = eventCurr.currentTarget; // not used
        eventTimeStamp = eventCurr.timeStamp;
        eventIsBrowser = eventCurr.isTrusted;
        // ErrorEvent.filename Read only. the name of the script file in which the error occurred.
        eventFileName = eventCurr.filename;
        // ErrorEvent.lineno Read only. the line number of the script file on which the error occurred.
        eventFileLine = eventCurr.lineno;
        // ErrorEvent.colno Read only. the column number of the script file on which the error occurred.
        eventFileColumn = eventCurr.colno;
        // ErrorEvent.error Read only. A JavaScript Object that is concerned by the event.
        eventError = eventCurr.error;
        //
    } else { eventIsOld = true; }

    if (Event) {
        if (Event.bubles) {
            Event.stopPropagation();
        }
    } else { eventIsOld = true; }


}
// Constructor
function ErrorEventNew() {
    //     Creates an ErrorEvent event with the given parameters.
    return ErrorEvent();
}

function EventIdGetNext() {
    return eventCurrId++;
}

function EventCallerFunctionNameFind() {
    callerFunc = arguments.callee.caller.toString();
    EventCallerFunctionNameFind(callerFunc);
}

function EventCallerFunctionNameFind(callerFunc) {
    callerFuncName = (callerFunc.substring(
        callerFunc.indexOf("function") + 8,
        callerFunc.indexOf("(")) ||
        "anoynmous")
}

script_state = "Mdm Standard Functions loaded. (cross-cutting)";
if (debugLoadIsOn) { debugger; }
