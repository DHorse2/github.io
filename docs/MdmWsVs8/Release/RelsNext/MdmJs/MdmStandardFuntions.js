
// STANDARD VARIABLES
// ...................................... //
// UseDebug means differenct things depending on context
// i.e. it may refer to debugging or to content button target selection
var DoUseLog = true;
var DoNotUseLog = false;
//
var DoUseDebug = true;
var DoNotUseDebug = false;

var DoSetValue = true;
var DoNotSetValue = false;

var DoUseToggle = true;
var DoNotUseToggle = false;

// Display messages using alerts.
var DoUseAlert = true;
var DoNotUseAlert = false;

// Debugging and Console
// ...................................... //
var UseDebug = DoNotUseDebug;
var UseDebugNext = DoNotUseDebug;
var UseLog = DoUseLog;
var UseAlert = DoUseAlert;

// Console buttons and variables
// ...................................... //
// View
// Fonts
// Animation
var UseLogAnimation = false;
// Console Button
var consoleBoxButton = false;
var consoleErrorBoxButton = false;
var consoleEventBoxButton = false;
var consoleStateBoxButton = false;
var consoleTestBoxButton = false;
var consoleClearButton = false;
// Debug Button
var consoleDebugButton = false;
var UseDebugOnError = false;
var UseDebugOnAll = false;
// Debug Timers
var UseLogTimerMove = false;
var UseLogTimerTransition = false;
var UseLogTimer = false;
var UseLogTimerDetail = false;
// Events
var UseLogEvents = false;
// Hover
var UseLogHover = false;
// hidden functions
var UseLogDetailsAll = false;

// Formatting
// ...................................... //
// Sort ordering
var DoUseAscendingDate = 1;
var DoUseDecendingDate = 2;
var DoUseTypeByDate = 3;
var DoUseFileNameByLine = 4;
// Most UIX views of data are in this order.
// Social media, logs, database info, and so on.
var UseLogOrder = DoUseAscendingDate;
// todo a button on each view to toggle it
var UseLogScrollError = true;
var UseLogScrollEvent = true;

// Line formatting
var DoUseSingleLine = true;
var DoNotUseSingleLine = false;
var UseSingleLine = DoNotUseSingleLine;
// Scrolling
var DoUseScroll = true;
var DoNotUseScroll = false;
var UseScroll = DoUseScroll;

// Error Options
// ...................................... //
var errorDoDisplayTag = true;
var errorDoNotDisplayTag = false;
var DoUseAlert = false;
var DoNotUseAlert = false;

// Other settings
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

// Filter Settings for Animation
// ...................................... //
// Usually filterDuration is the same as
// elementDuration plus an adjustment.
// a non-zero value indicates this
// feature is on. Usually this adjustment
// is one additional second.
// indicates use default:
var filterDurationAdjustment = -0.001;

// Methodology to Invoke Animation:
// execute the play method:
var filterMethodPlay = 1;
// change style visibility (onchange):
var filterMethodVisible = 2;
var filterMethod = filterMethodPlay;

// SectionBlock Human readable arguments and comparisons todo
// ...................................... //
// State Friendly Names
var IsAtEnd = 1;
var IsNotAtEnd = 0;
var AtEnd = IsAtEnd;

// Indicate actions is on Group (Root) or Item
var DoNotUseRoot = 0; // Item only
var DoUseRoot = 1; // Root only
var DoUseBoth = 2; // Both
var DoNotUseEither = 3; // Both
var UseRoot = DoUseRoot;

// Ignores duplicate events. (resize, mouse)
var UseLogEventDuplicates = false;
// AREA Debug Areas
//      These are normalized Areas
//      main features and components.
// Console and error code:
var UseLogConsole = false;
// Animation
var UseLogAnitmation = false;
// Images
var UseLogImages = false;
// Menus
var UseLogMenus = false;
// Elements
var UseLogElements = false;
// Page
var UseLogPage = false;
// Window
var UseLogWindow = false;
// Layout
var UseLogLayout = false;

// depreciated:
// ...................................... //
var errorCaller = null;
var errorCallerName = 'Init...';
var callerFunc;
var callerFuncName;

// Section Console counting for Error, Event and State
// ...................................... //
// SectionBlock Console
var consoleErrorLogCn = 0;
var consoleErrorLogCnMax = 0;
var consoleErrorLogScrollCn = 0;
var consoleEventLogCn = 0;
var consoleEventLogCnMax = 0;
var consoleEventLogScrollCn = 0;
var consoleStateLogCn = 0;
var consoleStateLogCnMax = 0;
var consoleStateLogScrollCn = 0;
var UseLogLengthMax = 100000; // total bytes
var UseLogLengthTrim = 85000;

// ...................................... //
var errorCurr = null;
var errorMessage = 'Error handling initializing';
var errorMessageDetail = 'initializing';
var errorSynErrorMessagec = 0;
var errorFirst = true;
//
var messageCurr = '';
var messageTemp = new String();
var messageElement = null;
var messageElementSource = null;
var messageFinal = new String();
var messageDetail = new String();
var messageUrl = '';

// Animation Transition Control:
// ...................................... //
// Control overloading javascript
var filterBusy = false;
var timerBusy = false;
var resizeBusy = false;

// (See TimerDurationSet for default filter values)
var filterDurationOverride = false;
var filterDuration = 0;
var filterStepMin = 0;
var filterStepMax = 0;
var filterInterval = 0;
var filterDelay = 0;

// Section Events (Mouse, load, error)
// ...................................... //
var LastId = '';
var LastTouchedId = '';
//
var eventCn = 0;
var errorSync = 0;
var eventCurr = null;
var e;
var eventId = -1;
var eventObject = null;
var eventCurrId = '';
var eventType = 'init';
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
//
var eventLast;
var eventLastObject;
var eventLastId = '';
var eventLastRootId = '';
//
var eventParentName = new String();
var eventCurrRootObj;

// Timer Usage:
// ...................................... //
var timerMethodGroup = 1; // One timer per each group
var timerMethodItem = 2; // One timer per each item in a group
var timerMethod = timerMethodGroup;

// Standard characters
// ...................................... //
var lt = String.fromCharCode(60)
var gt = String.fromCharCode(62)

var charFSlash = '/';
var charBSlash = '\\';
var charNewLine = charBSlash + 'n';
var charNewLineTag = lt + 'b' + 'r ' + gt;
var charNewLineTagOpen = lt + 'b' + 'r ';
var charNewLineCrLf = String.fromCharCode(11, 13);
var charTextIndent = '........';
var charTextIndentSmall = '....';
//
// SectionBlock HTML write variables
// ...................................... //
var tagOpen = lt;
var tagClose = gt;
var tagCloseSlashed = charFSlash + tagClose

var tagDiv = tagOpen + 'di' + 'v ';
var tagDivEnd = tagOpen + charFSlash + 'di' + 'v' + tagClose;

var tagP = tagOpen + 'p ';
var tagPEnd = tagOpen + charFSlash + 'p' + tagClose;

var tagSpan = tagOpen + 'spa' + 'n ';
var tagSpanEnd = tagOpen + charFSlash + 'spa' + 'n' + tagClose;

var tagH9 = tagOpen + 'h';
var tagH9End = tagOpen + 'h';

var tagA = tagOpen + 'a ';
var tagAEnd = tagOpen + charFSlash + 'a' + tagClose;

var tagBr = tagOpen + 'br' + tagClose;

var tagImg = tagOpen + 'im' + 'g ';

var tagScript = tagOpen + 'scrip' + 't ';
var tagScriptEnd = tagOpen + charFSlash + 'scrip' + 't' + tagClose;
//
var charNoWrapTag = tagOpen + 'pr' + 'e';
var charNoWrapTagStart = tagOpen + 'pr' + 'e' + tagClose;
var charNoWrapTagEnd = tagOpen + charFSlash + 'pr' + 'e' + tagClose;
//
var tagEndContentNone = ' ' + tagClose;
var tagEndContentStart = tagClose;
//
var quoteOpen = '"';
var quoteClose = '"';
//
var quoteInnerOpen = "'";
var quoteInnerClose = "'";
//
// attributeSelf = 'a' + 'ttribue=';
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
// focus, focusin, focusout
// blur

// Temporary
// ...................................... //
var bTemp = false;
var iTemp = 0;
var sTemp = "";

// Section Menu Image (Standard) Objects
// ..................................................................................... _//
// Storage Location for Group and Menu Item / Image
// MENUS - Menu Image Objects, Menu Image Pointers
var oObjIndex = 1;
var oObjGroupIndex = 1;
var oObjParentIndex = 1;
var oObjRootIndex = 0;
// Menu Image Objects
var oObj;
var oObjImage;
var oObjParent;
var oObjLarge;
var oObjImageLarge;
var oObjText = "";
// Menu Image Size
var oObjImageSizeSmall = 150;
var oObjImageSizeLarge = 600;
var oObjImageSizeRatio = 0.7;
var oObjImageSize = 0;

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
        if (item[itemCn].substring(0, stringPrefix.length) == stringPrefix) {
            if (DoWholeWord) {
                return item[itemCn];
            } else {
                return item[itemCn].substring(stringPrefix.length);
            }
        }
        itemCn++;
    }
    return '';
}
//
// String replace from SO, also StringPad from:
// https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript
// const zeroPad = (num, places) => String(num).padStart(places, '0')
function StringPad(num, places, padString) {
    return String(num).padStart(places, padString);
}
// String Replace
function StringTextNewlineReplace(textPassed, stringReplace) {
    textPassed = textPassed.replace(/\\/g,'\\');
    return textPassed.replace(/(?:\r\n|\r|\n)/g, stringReplace);
}
// String Replace
function StringTextReplace(textPassed, stringFind, stringReplace) {
    // return textPassed.replace(stringFind, stringReplace);
    var TextNew = '';
    var TextPos = 0;
    do {
        TextPos = textPassed.indexOf(stringFind);
        if (TextPos >= 0) {
            TextNew += textPassed.substring(0, TextPos) + stringReplace;
            textPassed = textPassed.substring(TextPos + stringFind.length);
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
// Source: SO: https://stackoverflow.com/questions/15807021/convert-pixel-to-percentage-using-javascript
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
function ErrorSet(errorObjectPassed) {
    errorSync++;
    if (errorFirst) {
        errorFirst = false;
        eventError = null;
        // return;
    }
    errorCurr = errorObjectPassed;

    // if (!(errorObjectPassed instanceof Error)) {
    //     errorCurr = new Error(errorObjectPassed);
    // } else { errorCurr = errorObjectPassed; }
    // depreciated in Dom:
    errorCaller = null;
    errorCallerName = 'Finding...';
    errorMessage = '';

    eventError = errorCurr;
    // if (!(errorObjectPassed instanceof Error)) {
    // could be an error, string or event.
    EventSet(errorCurr);
    // }

    if ((errorCurr instanceof Error)) {
        // fileName
        // lineNumber
        // columnNumber
        // message
        // stack
        // eventType = errorCurr.constructor.name;
        eventType = errorCurr.constructor.name;
        if (eventType.indexOf('function') !== -1) { eventType = errorCurr.toString(); }
        if (eventType.indexOf('function') !== -1) { eventType = ""; }
        // or string.includes('function');
        // use values from exception when present
        // browserIsFF:
        if (errorCurr.message && errorCurr.message.length) { eventMessage = errorCurr.message; }
        if (errorCurr.fileName && errorCurr.fileName.length) { eventFileName = errorCurr.fileName; }
        if (errorCurr.lineNumber) { eventFileLine = errorCurr.lineNumber; }
        if (errorCurr.columnNumber) { eventFileColumn = errorCurr.columnNumber; }
        if (errorCurr.stack) { eventStack = errorCurr.stack; }
        //
        //
        // everything below might be deprecited.
    } else if (errorObjectPassed) {
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
            if (ErrorEvent.message) { errorMessage = ErrorEvent.message; } // Read only
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
            errorCaller = errorObjectPassed.caller;
            errorCallerName = 'Finding...';
            errrorValid = true;
            if (!errorCaller) { errorCaller = Event.caller; }
            if (!errorCaller) { errorCaller = WindowError.caller; }
        } else {
            // modern
            errorCaller = errorObjectPassed.caller;
            errorCallerName = "";
            if (errorObjectPassed && errorObjectPassed.type == "error") {
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

function ErrorMessageGet(UseSingleLinePassed) {
    ErrorMessageDetail = "";
    if (UseLogDetails && eventMessage.length) {
        if (!UseSingleLinePassed && ErrorMessageDetail.length > 30) { ErrorMessageDetail += charNewLineTag + charTextIndent; }
        messageFinal += ' Event: ' + eventMessage;
    }
    // if (messageUrl) {
    //     ErrorMessageDetail += " Url:" + messageUrl;
    // }
    if (eventFileName) {
        if (!UseSingleLinePassed && ErrorMessageDetail.length > 30) { ErrorMessageDetail += charNewLineTag + charTextIndent; }
        ErrorMessageDetail += ' File: ' + eventFileName;
        if (eventFileLine) { ErrorMessageDetail += ' Line: ' + eventFileLine; }
        if (eventFileColumn) { ErrorMessageDetail += ' Column: ' + eventFileColumn; }
    }
    // todo this gets parsed (last /)
    if (eventTimeStamp) {
        if (!UseSingleLinePassed && ErrorMessageDetail.length > 30) { ErrorMessageDetail += charNewLineTag + charTextIndent; }
        ErrorMessageDetail += ' TimeStamp: ' + eventTimeStamp;
    }
    if (eventFileFunction) {
        ErrorMessageDetail += ' Function: ' + eventFileFunction;
        ErrorMessageDetail += ' ';
    }
    return ErrorMessageDetail;
}
// Events
/////////
function EventSet(eventCurrPassed) {
    // Also inherits properties from its parent Event.
    // https://developer.mozilla.org/en-US/docs/Web/Events
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/target
    //
    if (!eventCurrPassed) {
        if (window.event) { eventCurr = window.event; } else { eventCurr = null; }
    } else { eventCurr = eventCurrPassed; }
    e = eventCurr;
    eventFirst = false;
    eventIsOld = false;

    eventId = EventIdGetNext();
    eventType = null;
    eventMessage = "";
    if (eventCurr && eventCurr.message) {
        eventMessage = eventCurr.message;
    }
    if (!eventMessage || !eventMessage.length) {
        eventMessage = "";
        // eventMessage = "no event message";
    }
    // Dom
    eventTarget = null;
    eventCurrentTarget = null;
    eventTimeStamp = null;
    eventIsBrowser = false;
    // Stack
    eventFileName = "";
    eventFileLine = 0;
    eventFileColumn = 0;
    eventError = null;
    eventStack = null;

    if (eventCurr) {
        errorCallerName = eventCurr.toString();
        if (errorCallerName != "function ()") {
            eventObject = eventCurr;
            eventMessage = eventId + ':' + errorCallerName;
            if (eventCurr.type) { eventType = eventCurr.type; }
            // Dom
            if (eventCurr.target) { eventTarget = eventCurr.target; }
            // ErrorEvent.message Read only. a human-readable error message describing the problem. Lacking a crossorigin setting reduces error logging.
            if (eventCurr.message) { eventMessage = eventCurr.message; }
            if (!eventMessage.length) { eventMessage = eventId + ':' + errorCallerName; }
            if (eventCurr.currentTarget) eventCurrentTarget = eventCurr.currentTarget;
        }
        // eventTimeStamp = eventCurr.timeStamp;
        if (eventCurr.timeStamp) { eventTimeStamp = eventCurr.timeStamp; }
        if (eventCurr.isTrusted) { eventIsBrowser = eventCurr.isTrusted; }
        // Stack info
        if (eventCurr.filename && eventCurr.filename.length) { eventFileName = eventCurr.filename; }
        if (eventCurr.lineno) { eventFileLine = eventCurr.lineno; }
        if (eventCurr.colno) { eventFileColumn = eventCurr.colno; }
        // if (eventFileFunction) { messageFinal += " Function:" + eventFileFunction; }
        if (eventCurr.error) { eventError = eventCurr.error; }
        if (eventCurr.stack) { eventStack = eventCurr.stack; }
        //
        if (eventCurr.bubbles) {
            eventCurr.stopPropagation();
        }
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
        callerFunc.indexOf('function') + 8,
        callerFunc.indexOf('(')) ||
        'anoynmous')
}

script_state = "Mdm Standard Functions loaded. (cross-cutting)";
if (debugLoadIsOn) { debugger; }
