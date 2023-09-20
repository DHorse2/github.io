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
// Storage Location for Group
// var indexGroup = 0;
// Section Standard and Utility function (s)
// Standard function (s) - Math
// ..................................................................................... _//
// Random Number Get By Range
function StdMathNumberRandomGetByRange(filterRangeLowPassed, filterRangeHighPassed, filterRealFlagPassed) {
    return ((Math.random()
        * (filterRangeHighPassed - filterRangeLowPassed))
        + filterRangeLowPassed
    );
}
// Standard function (s) - String
// ..................................................................................... _//
// Get Token By Prefix
function StdStringGetTokenByPrefix(stringPassed, stringPrefix) {
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
// Standard function (s) - Math
// ..................................................................................... _//
// Random Number Get By Range
function StdMathNumberRandomGetByRange(filterRangeLowPassed, filterRangeHighPassed, filterRealFlagPassed) {
    var temp = ((Math.random()
        * (filterRangeHighPassed - filterRangeLowPassed + 1))
        + filterRangeLowPassed
    );
    return (temp - (temp % 1));
}
// Standard function (s) - Font Size
// Base Font Size Increase
function StdFontSizeIncrease() {
    return;
}
// Base Font Size Decrease
function StdFontSizeDecrease() {
    return;
}
//
function StdTextReplace(textPassed, stringFind, stringReplace) {
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
// Execute Function
// ..................................................................................... _//
// Source: Stack Overflow
// http://stackoverflow.com/questions/359788/javascript-function-name-as-a-string
// (c) 2011 stack exchange inc;user contributions licensed under cc-wiki with attribution required
//
function StdFunctionDoExecuteByName(functionName, context /*, args */) {
    // ['My']['Namespace']['functionName'](arguments);// succeeds
    // StdFunctionDoExecuteByName('My.Namespace.functionName', window, arguments);
    // StdFunctionDoExecuteByName('Namespace.functionName', My, arguments);
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
function StdFunctionDoExecuteJsNode(node) {
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

// Errors
/////////
function ErrorSet() {
    errorCaller = eventCurr.caller;
    errorCallerName = 'Finding...';;
    errrorValid = true;
    if (!errorCaller) { errorCaller = Event.caller; }
    if (!errorCaller) { errorCaller = StdWindowError.caller; }
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
}

function ErrorMessageGet() {
    var errorMessageFinal = "";
    if (errorUrl) { errorMessageFinal += " Url:" + errorUrl; }
    if (eventFileName) { errorMessageFinal += " File:" + eventFileName; }
    if (eventFileFunction) { errorMessageFinal += " Function:" + eventFileFunction; }
    if (eventFileLine) { errorMessageFinal += " Line:" + eventFileLine; }
    if (eventFileColumn) { errorMessageFinal += " Column:" + eventFileColumn; }
    if (errorMessageFinal.length) {
        errorMessageFinal = " At: ( " + errorMessageFinal;
        errorMessageFinal += " )";
    }
    if (eventMessage) { errorMessageFinal += " Message:" + eventMessage; }
    return errorMessageFinal;
}

// Events
/////////
function EventSet() {
    // Also inherits properties from its parent Event.
    if (!eventCurr) { eventCurr = Event; }
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
        eventIsOld = false;
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
