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
var browserIsTEST;
var browserIsIE;
var browserIsCH;
var browserIsFF;
var browserIsSA;
var browserIsOP;
var browserIsNE;
// SectionBlock Window Browser
// ...................................... //
// Browser Type Get
function StdBrowserGetVs() {
    // Browser Type
    browserType = '';
    browserVs = 0;
    browserVsMajor = 0;
    browserVsMinor = 0;
    browserLayoutCompatable = false;
    //
    browserAnimationIsIe = false;
    browserAnimationIsMozilla = false;
    //
    browserEventsIsFf = false;
    // booleans
    browserIsTEST = false;
    browserIsIE = false;
    browserIsCH = false;
    browserIsFF = false;
    browserIsSA = false;
    browserIsOP = false;
    browserIsNE = false;
    //
    if ((navigator.userAgent).indexOf('TEST') != -1) { browserIsTEST = true; browserAnimationIsMozilla = true; browserType = 'TEST'; } else {
        if ((navigator.userAgent).indexOf('MSIE') != -1) { browserIsIE = true; browserAnimationIsIe = true; browserType = 'MSIE'; } else {
            if ((navigator.userAgent).indexOf('Chrome') != -1) { browserIsCH = true; browserType = 'Chrome'; } else {
                if ((navigator.userAgent).indexOf('Firefox') != -1) { browserIsFF = true; browserAnimationIsMozilla = true; browserType = 'Firefox'; } else {
                    if ((navigator.userAgent).indexOf('Safari') != -1) { browserIsSA = true; browserType = 'Safari'; } else {
                        if ((navigator.userAgent).indexOf('Opera') != -1) { browserIsOP = true; browserType = 'Opera'; } else {
                            if ((navigator.userAgent).indexOf('Netscape') != -1) { browserIsNE = true; browserType = 'Netscape'; }
                        }
                    }
                }
            }
        }
        //
        switch (browserType) {
            case 'MSIE':
                // browserType = window.navigator.appName;
                browserVs = window.navigator.appVersion;
                browserVsMajor = window.navigator.appVersion;
                browserVsMinor = window.navigator.appMinorVersion;
                break;
            case 'Firefox':
                break;
            case 'Safari':
                break;
            case 'Opera':
                break;
            case 'Netscape':
                break;
            case 'Chrome':
            default:
                break;
        }
        //
        // for purposes of filter handling
        if (browserIsTEST || browserIsFF || browserIsSA || browserIsNE || browserIsCH) { browserAnimationIsMozilla = true; }
        if (browserIsIE) { browserAnimationIsIe = true; }
        //
        // for purposes of mouse event handling
        if (browserIsTEST || browserIsFF || browserIsSA || browserIsNE) { browserEventsIsFf = true; } else { browserEventsIsFf = false; }
        //
    }
}
// Browser Type Get2
function StdBrowserGetFromWindow() {
    // IE
    browserType = window.appName;
    browserVs = window.appVersion;
    browserVsMajor = window.appVersion;
    browserVsMinor = window.navigator.appMinorVersion;
}

script_state = "MdmBrowser loaded";
if (debugLoadIsOn) { debugger; }
