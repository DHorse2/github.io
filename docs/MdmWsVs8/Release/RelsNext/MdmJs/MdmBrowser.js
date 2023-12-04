// SectionBlock Browser
// ...................................... //
// Server
var serverIsOn = false;
// Browser
var browserType = '';
var browserVs = 0;
var browserVsMajor = 0;
var browserVsMinor = 0;
var browserLayoutCompatable = false;
// This address transition syntax.
// This is incomplete as there are
// several formats (i.e. Webkit)
var browserAnimationIsIe;
var browserAnimationIsMozilla;
// Firefox handles mouseout differently
// This is intended to address differences
// in event bubbling.
// Event capturing is not used.
var browserEventsIsFf; // FF mouse out
// Note that differences in object model
// booleans
var browserType;

var browserIsMobile = false;
var browserIsTouch = false;

var browserIsTEST;
var browserIsOld; // 5) todo review code
var browserIsUnknown; // 5) todo review purpose

var browserIsIE; // 5) Internet Explorer implement and test
var browserIsCH; // Chrome
var browserIsFF; // FireFox
var browserIsSA; // Safari
var browserIsOP; // Opera
var browserIsNE; // Netschape?? depreciated
var browserIsLynx; // Lynx text only not implemented
var browserIsEdge; // 5) todo implement and test
var browserIsTor; // 5) todo implement and test

var browserUserAgent;
var browserType;

// SectionBlock Window Browser
// ...................................... //
// Browser Type Reset () {
function BrowserVsReset() {
    // Browser Type
    browserUserAgent = '';
    browserType = '';
    browserVs = 0;
    browserVsMajor = 0;
    browserVsMinor = 0;
    browserLayoutCompatable = false;
    // booleans
    browserIsMobile = false;
    browserIsTouch = false;

    browserIsTEST = false;
    browserIsOld = false;
    browserIsUnknown = false;

    browserIsIE = false;
    browserIsCH = false;
    browserIsFF = false;
    browserIsSA = false;
    browserIsOP = false;
    browserIsNE = false;
    browserIsLynx = false;
    browserIsEdge = false;
    browserIsTor = false;

    browserAnimationIsIe = false;
    browserAnimationIsMozilla = false;
    //
    browserEventsIsFf = false;
    //
    // Set the type
    browserType = "unknown";
    BrowserVsGet();
}
// Mobile browser
function BrowserCheckMobile() {
    // mobile
    // source: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    const toMatch = [
        /Mobile/i,
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    //
    return toMatch.some((toMatchItem) => {
        browserIsMobile = navigator.userAgent.match(toMatchItem);
        return browserIsMobile;
    });
}
const BrowserCheckMobileType = {
    //     How to use
    //      if( isMobile.any() ) alert('Mobile');
    //     To check to see if the user is on a specific mobile device:
    //      if( isMobile.iOS() ) alert('iOS');
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Mobile: function () {
        return navigator.userAgent.match(/Mobile/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    WebOS: function () {
        return navigator.userAgent.match(/WebOS/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i) || navigator.userAgent.match(/Windows Phone/i);
    },
    any: function () {
        return (isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Mobile()
            || isMobile.Opera()
            || isMobile.WebOS()
            || isMobile.Windows()
        );
    }
};
// Touch screens
function BrowserCheckTouch() {
    // Touch
    browserIsTouch = (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
    return browserIsTouch;
}
// Browser Type Get
function BrowserVsGet() {
    //
    if (browserType != "unknown") { BrowserVsReset(); }
    browserUserAgent = navigator.userAgent;
    browserType = browserUserAgent;
    // browserType = navigator.toString();
    BrowserCheckMobile();
    BrowserCheckTouch();
    //
    if ((browserUserAgent).indexOf('TEST') != -1) {
        browserIsTEST = true; browserType = 'TEST';
    } else if ((browserUserAgent).indexOf('MSIE') != -1) {
        browserIsIE = true; browserType = 'MSIE';
    } else if ((browserUserAgent).indexOf('Edge') != -1) {
        browserIsIE = true; browserType = 'MSIE';
    } else if ((browserUserAgent).indexOf('Chrome') != -1) {
        browserIsCH = true; browserType = 'Chrome';
    } else if ((browserUserAgent).indexOf('Firefox') != -1) {
        browserIsFF = true; browserType = 'Firefox';
    } else if ((browserUserAgent).indexOf('Safari') != -1) {
        browserIsSA = true; browserType = 'Safari';
    } else if ((browserUserAgent).indexOf('Opera') != -1) {
        browserIsOP = true; browserType = 'Opera';
    } else if ((browserUserAgent).indexOf('Netscape') != -1) {
        browserIsNE = true; browserType = 'Netscape';
    } else {
        browserIsFF = true; browserAnimationIsMozilla = true; browserType = 'Firefox';
    }
    //
    switch (browserType) {
        case 'MSIE':
            // browserType = window.navigator.appName;
            browserVs = window.navigator.appVersion;
            browserVsMajor = window.navigator.appVersion;
            browserVsMinor = window.navigator.appMinorVersion;
            browserAnimationIsIe = true;
            break;
        case 'Firefox':
            browserIsFF = true; browserType = 'Firefox';
            break;
        case 'Safari':
            break;
        case 'Opera':
            break;
        case 'Netscape':
            break;
        case 'Chrome':
        default:
            browserType = "Firefox";
            browserIsUnknown = true;
            browserAnimationIsMozilla = true; break;
    }
    //
    // for purposes of filter handling
    if (browserIsTEST || browserIsUnknown || browserIsFF || browserIsSA || browserIsNE || browserIsCH) { browserAnimationIsMozilla = true; }
    if (browserIsIE) { browserAnimationIsIe = true; }
    //
    // for purposes of mouse event handling
    if (browserIsTEST || browserIsUnknown || browserIsFF || browserIsSA || browserIsNE) { browserEventsIsFf = true; } else { browserEventsIsFf = false; }
}
// Browser Type Get2
function BrowserGetFromWindow() {
    // IE
    browserType = window.appName;
    browserVs = window.appVersion;
    browserVsMajor = window.appVersion;
    browserVsMinor = window.navigator.appMinorVersion;
}

script_state = "MdmBrowser loaded";
if (debugLoadIsOn) { debugger; }
