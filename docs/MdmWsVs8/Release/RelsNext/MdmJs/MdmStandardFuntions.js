
// STANDARD VARIABLES
// ...................................... //
// UseDebug means differenct things depending on context
// i.e. it may refer to debugging or to content button target selection
var DoUseLog = true;
var DoNotUseLog = false;
//
var DoUseDebug = true;
var DoNotUseDebug = false;
//
var DoUseSingleLine = true;
var DoNotUseSingleLine = false;
//
var DoUseHide = true;
var DoNotUseHide = false;
//
var DoFindSet = 1
var DoFindReturn = 2;

// Offsets
// ...................................... //
var DoUseOffset = true;
var DoNotUseOffset = false;

var DoUseBase = true;
var DoNotUseBase = false;

var DoUseScroll = true;
var DoNotUseScroll = false;

var UseOffset = DoUseOffset;
var UseBase = DoUseBase;
var UseScroll = DoUseScroll;

// Standard characters
// ...................................... //
var lt = String.fromCharCode(60)
var gt = String.fromCharCode(62)

var charFSlash = '/';
var charBSlash = '\\';
var charNewLine = charFSlash + 'n';
var charNewLineTag = lt + 'b' + 'r ' + gt;
var charNewLineTagOpen = lt + 'b' + 'r ';
var charNewLineCrLf = String.fromCharCode(11, 13);
var charTextIndent = '........';
//
// SectionBlock HTML write variables
// ...................................... //
var tagDiv = lt + 'di' + 'v ';
var tagDivEnd = lt + charFSlash + 'di' + 'v' + gt;

var tagP = lt + 'p ';
var tagPEnd = lt + charFSlash + 'p' + gt;

var tagSpan = lt + 'spa' + 'n ';
var tagSpanEnd = lt + charFSlash + 'spa' + 'n' + gt;

var tagH9 = lt + 'h';
var tagH9End = lt + 'h';

var tagA = lt + 'a ';
var tagAEnd = lt + charFSlash + 'a' + gt;

var tagImg = lt + 'im' + 'g ';

var tagScript = lt + 'scrip' + 't ';
var tagScriptEnd = lt + charFSlash + 'scrip' + 't' + gt;
//
var charNoWrapTag = lt + 'pr' + 'e';
var charNoWrapTagStart = lt + 'pr' + 'e' + gt;
var charNoWrapTagEnd = lt + charFSlash + 'pr' + 'e' + gt;
//
var tagEndContentNone = ' ' + gt;
var tagEndContentStart = gt;
//
var quoteOpen = '"';
var quoteClose = '"';
//
var quoteInnerOpen = "'";
var quoteInnerClose = "'";
//
var attributeId = ' i' + 'd=';
var attributeClass = ' cl' + 'ass=';
var attributeName = ' na' + 'me=';
//
var attributeStyle = ' sty' + 'le=';
var attributeStyleDisplay = ' disp' + 'lay:';
var attributeStyleWidth = ' wi' + 'dth:';
var attributeStyleHeight = ' hei' + 'ght:';
var attributeStylePadding = ' padd' + 'ing:';
var attributeStyleMargin = ' mar' + 'gin:';
//
var attributeSrc = ' sr' + 'c=';
var attributeHref = ' h' + 'ref=';
var attributeRel = ' re' + 'l=';
var attributeType = ' t' + 'ype=';
var attributeAlt = ' al' + 't=';
//
var attributeEventMouseOut = ' onmou' + 'seout';
var attributeEventMouseOver = ' onmou' + 'seover';
var attributeEventMouseDown = ' onmou' + 'sedown';

// Section Console counting for Error, Event and State
// ...................................... //
// SectionBlock Console
var consoleErrorLogCn = 0;
var consoleErrorLogScrollCn = 0;
var consoleEventLogCn = 0;
var consoleEventLogScrollCn = 0;
var consoleStateLogCn = 0;
var consoleStateLogScrollCn = 0;

// Temporary
// ...................................... //
var DoUseScroll = true;
var DoNotUseScroll = false; var bTemp = false;
var iTemp = 0;
var sTemp = "";

var ErrorSync = 0;
var errorFirst = true;
var errorCaller = null;
var errorCallerName = 'Init...';

var eventFirst = true;
var eventCurrRootObj;

// Section Menu Image (Standard) Objects
// ..................................................................................... _//
// Storage Location for Group and Menu Item / Image
var oObjGroupIndex = 1;
var oObjRootIndex = 0;
//
var indexGroup = 0; // location of Group / Roots in arrays
//
// Menu Image Objects
var oObj = document.createElement('div');
var oObjIndex = 1;
var oObjImage = document.createElement('img');
//
var oObjParent = document.createElement('div');
var oObjParentIndex = 1;
//
var oObjLarge = document.createElement('div');
var oObjImageLarge = document.createElement('img');
//
var oObjText = new String();
//
var IsSmall = 0;
var IsLarge = 1;
var IsImageLarge = IsSmall;

// Box Size or Box Rectangle Pointers
// ...................................... //
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
function StringGetTokenByPrefix(DoWholeWord, stringPassed, stringPrefix) {
    var itemCn = 0
    var item = stringPassed.split(' ');
    while (itemCn + 1 < 1 + item.length) {
        if (item[itemCn].substr(0, stringPrefix.length) == stringPrefix) {
            if (DoWholeWord) {
                return item[itemCn];
            } else {
                return item[itemCn].substr(stringPrefix.length);
            }
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
function ErrorSet(eventCurrPassed) {
    ErrorSync++;
    errorCaller = null;
    errorCallerName = 'Finding...';
    if (errorFirst) {
        errorFirst = false;
        eventError = null;
        // return;
    }

    EventSet(eventCurrPassed);

    if (eventCurrPassed) {
        if (browserIsFF) {
            errorCaller = eventCurrentTarget;
            if (errorCaller) {
                if (errorCaller.id) { errorCallerName = errorCaller.id; }
                if (!errorCallerName.length) { errorCallerName = errorCaller.toString(); }
            }
            // ErrorEvent
            // The ErrorEvent interface represents events providing information related to errors in scripts or in files.
            // Instance properties
            // Also inherits properties from its parent Event.
            if (ErrorEvent.message) { eventMessage = ErrorEvent.message; } // Read only
            // if (arguments) {
            //     eventArguments = arguments;
            // }
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
            // has bugs
            errorCaller = eventCurrPassed.caller;
            errorCallerName = 'Finding...';
            errrorValid = true;
            if (!errorCaller) { errorCaller = Event.caller; }
            if (!errorCaller) { errorCaller = WindowError.caller; }
        } else {
            // modern
            errorCaller = eventCurrPassed.caller;
            errorCallerName = "";
            if (eventCurrPassed && eventCurrPassed.type == "error") {
                // do
            } else {
                // ??? mouse ??? other ???
                // target
                // timestamp
                // currentTarget
            }
        }
        // todo depreciated problems
        // if (!errorCaller) {
        //     if (!Event.caller) {
        //         errorCaller = 'anoynmous';
        //         errorCallerName = 'anoynmous';
        //         errrorValid = false;
        //     } else {
        //         errorCaller = Event.caller;
        //         errorCallerName = errorCaller.toString();
        //         eventFileName = "?";
        //         eventFuncName = EventCallerFunctionNameFind(callerFunc);
        //         eventColNum = 0;

        //     }
        // }
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
    var messageFinal = "";
    if (messageUrl) {
        messageFinal += " Url:" + messageUrl;
        if (!UseSingleLine && messageUrl.length > 30) { messageFinal += charNewLineTag + charTextIndent; }
    }
    if (eventFileName) {
        messageFinal += " File:" + eventFileName;
        if (!UseSingleLine && eventFileName.length > 30) { messageFinal += charNewLineTag + charTextIndent; }
    }
    // todo this gets parsed (last /)
    if (eventTimeStamp) { messageFinal += " TimeStamp:" + eventTimeStamp; }
    if (messageFinal.length) {
        messageFinal = "  Message at: ( " + messageFinal;
        if (eventFileFunction) { messageFinal += " Function:" + eventFileFunction; }
        if (eventFileLine) { messageFinal += " Line:" + eventFileLine; }
        if (eventFileColumn) { messageFinal += " Column:" + eventFileColumn; }
            messageFinal += " )";
    }
    if (!UseSingleLine && messageFinal.length > 30) { messageFinal += charNewLineTag + charTextIndent; }
    if (eventMessage) { messageFinal += "" + eventMessage; }
    return messageFinal;
}

// Events
/////////

function EventSet(eventCurrPassed) {
    // Also inherits properties from its parent Event.
    // https://developer.mozilla.org/en-US/docs/Web/Events
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/target
    //
    eventCurr = eventCurrPassed;
    eventIsOld = false;
    // if (eventFirst) {
    eventFirst = false;
    eventType = null;
    eventTarget = null;
    if (eventCurr && eventCurr.message) {
        eventMessage = eventCurr.message;
    }
    if (!eventMessage.length) {
        eventMessage = "no event message";
    } else { eventMessage = ""; }
    // eventMessage = "First error discarded, " + eventMessage;
    eventCurrentTarget = null; // not used
    eventTimeStamp = null;
    eventIsBrowser = false;
    eventFileName = "";
    eventFileLine = 0;
    eventFileColumn = 0;
    eventError = null;
    // return;
    // }

    // if (!errorCallerName) { ErrorSet(); }
    if (!eventCurr && Event && Event.type) {
        eventCurr = Event;
        eventIsOld = true;
    }
    if (eventCurr) {
            errorCallerName = eventCurr.toString();
            if (errorCallerName != "function ()") {
            eventObject = eventCurr;
            eventId = EventIdGetNext();
            if (!eventObject.type) {
                eventMessage = eventId + ':' + errorCallerName;
            } else {
                eventType = eventCurr.type;
                eventTarget = eventCurr.target;
                // ErrorEvent.message Read only. a human-readable error message describing the problem. Lacking a crossorigin setting reduces error logging.
                eventMessage = eventCurr.message;
                if (!eventMessage) { eventMessage = eventId + ':' + errorCallerName; }
                eventCurrentTarget = eventCurr.currentTarget;
                // eventTimeStamp = eventCurr.timeStamp;
                if (eventCurr.timeStamp) { eventTimeStamp = eventCurr.timeStamp; } else {
                    eventTimeStamp = "undefined";
                }
                eventIsBrowser = eventCurr.isTrusted;
                // ErrorEvent.filename Read only. the name of the script file in which the error occurred.
                if (eventCurr.filename) { eventFileName = eventCurr.filename; } else {
                    eventFileName = "undefined";
                }
                // ErrorEvent.lineno Read only. the line number of the script file on which the error occurred.
                if (eventCurr.lineno) { eventFileLine = eventCurr.lineno; } else {
                    eventFileLine = 0;
                }
                // ErrorEvent.colno Read only. the column number of the script file on which the error occurred.
                if (eventCurr.colno) { eventFileColumn = eventCurr.colno; } else {
                    eventFileColumn = 0;
                }
                // if (eventFileFunction) { messageFinal += " Function:" + eventFileFunction; }

                // ErrorEvent.error Read only. A JavaScript Object that is concerned by the event.
                eventError = eventCurr.error;
                //
            }
            if (eventCurr.bubles) {
                eventCurr.stopPropagation();
            }
        } else { eventIsOld = true; }
    } else { eventIsOld = true; }
}
// Constructor
function ErrorEventNew() {
    //     Creates an ErrorEvent event with the given parameters.
    return ErrorEvent();
}

function EventIdGetNext() {
    return eventCn++;
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
