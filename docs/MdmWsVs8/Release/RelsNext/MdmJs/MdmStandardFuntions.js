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
function fnMathNumberRandomGetByRange(filterRangeLowPassed, filterRangeHighPassed, filterRealFlagPassed) {
    return ((Math.random()
        * (filterRangeHighPassed - filterRangeLowPassed))
        + filterRangeLowPassed
    );
}
// Standard function (s) - String
// ..................................................................................... _//
// Get Token By Prefix
function fnStringGetTokenByPrefix(stringPassed, stringPrefix) {
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
function fnMathNumberRandomGetByRange(filterRangeLowPassed, filterRangeHighPassed, filterRealFlagPassed) {
    var temp = ((Math.random()
        * (filterRangeHighPassed - filterRangeLowPassed + 1))
        + filterRangeLowPassed
    );
    return (temp - (temp % 1));
}
// Standard function (s) - Font Size
// Base Font Size Increase
function fnFontSizeIncrease() {
    return;
}
// Base Font Size Decrease
function fnFontSizeDecrease() {
    return;
}
//
function fnTextReplace(textPassed, stringFind, stringReplace) {
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
// Section Body Content Images Html Build function (s)
// ..................................................................................... _//
// Html Variables
var imgHtml = new String();
// Build (inner) HTML for Menu Images
// fnMenuImagesHtmlBuild();
function fnBodyImagesHtmlBuild() {
    //
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx TO DO xxxxxxxxxxxxxxx
    /// var BodyMenuImageContainer = document.documentElement['BodyMenuImageContainer'];
    // .getElementById('BodyMenuImageContainer');
    //
    // document.write(imgHtml);
    elBodyImageContainer = fnElementGetRef(elBodyImageContainer, 'BodyImageContainer', 'BodyImageContainer');
    elBodyImageContainer.innerHTML = imgHtml;
    //
    // This page has no stock of body images
    // just text captions.
    bodyImageLoadFirst = false;
    //
    return elBodyImageContainer;
}
// Section Menu Images Html Build function (s) (Groups / Items)
//      fnMenuImagesHtmlBuild();
function fnMenuImagesHtmlBuild() {
    //
    // There are three allowed strategies for event handling:
    // the following two options are mutally exclusive:
    // imgLoadUseDOM
    // imgLoadUseInner
    // use of the event handler removes event code from both of the above
    // imgLoadUseEventHandler
    //
    // Filter in use is Type Checkerboard;
    filterIndexPassed = filterTypeCheckerBoard;
    // + ', ' + filterTypeCheckerBoard + ')
    //
    elBodyMenuImageContainer = fnElementGetRef(elBodyMenuImageContainer, 'BodyMenuImageContainer', 'BodyMenuImageContainer');
    //
    tempFirst = true;
    var imgHtmlDivBoth = document.createElement('div');
    var imgHtmlDivBothInner = new String();
    var imgHtmlDivSmall = document.createElement('div');
    var imgHtmlDivSmallInner = new String();
    var imgHtmlDivLarge = document.createElement('div');
    var imgHtmlDivLargeInner = new String();
    //
    var imgHtmlDiv = document.createElement('div');
    var imgHtmlDivInner = new String();
    var imgHtmlA = document.createElement('a');
    var imgHtmlAInner = new String();
    var imgHtmlSpan = document.createElement('span');
    var imgHtmlSpanInner = new String();
    var imgHtmlBr = document.createElement('br');
    var imgHtmlBrInner = new String();
    var imgHtmlImg = document.createElement('img');
    var imgHtmlImgInner = new String();
    //
    var DivSmallOnmouseoverText = new String();
    var DivSmallOnmouseoverFunction;
    var DivSmallOnmouseoverFunctionName = new String();
    var DivSmallOnmouseoutText = new String();
    var DivSmallOnmouseoutFunction;
    var DivSmallOnmouseoutFunctionName = new String();
    var DivSmallOnmousedownText = new String();
    var DivSmallOnmousedownFunction;
    var DivSmallOnmousedownFunctionName = new String();
    //
    var DivLargeOnmouseoverText = new String();
    var DivLargeOnmouseoverFunction;
    var DivLargeOnmouseoverFunctionName = new String();
    var DivLargeOnmouseoutText = new String();
    var DivLargeOnmouseoutFunction;
    var DivLargeOnmouseoutFunctionName = new String();
    var DivLargeOnmousedownText = new String();
    var DivLargeOnmousedownFunction;
    var DivLargeOnmousedownFunctionName = new String();
    //
    // imgHtml += id= 'BodyMenuImageContainer';
    for (imgGroupCn = 0; imgGroupCn < (1 + imgGroupMax); imgGroupCn++) {
        for (imgCn = 0; imgCn < imgMaxByGroup[imgGroupCn] + 1; imgCn++) {
            oName = fnElementItemGetName(imgGroupCn, imgCn);
            // ..................................................................................... _//
            // Image Small
            // ..................................................................................... _//
            // Element Div
            imgHtmlDivInner = '';
            imgHtmlDivSmallInner = '';
            imgHtmlDivSmall = document.createElement('div');
            imgHtmlDivInner += tagDiv;
            // Id
            imgHtmlDivSmall.id = (oName + imgGroupCn) + imgCn;// Image Small Id
            imgHtmlDivSmall.name = (oName + imgGroupCn) + imgCn;// Image Small Id
            imgHtmlDivInner += attributeId + quoteOpen + + oName + imgGroupCn + imgCn + quoteClose;// Image Small Id
            // Class
            imgHtmlDivSmall.className = 'imgThumbSmall MenuImageBox MenuImageBoxBorder';// Class
            imgHtmlDivInner += attributeClass + quoteOpen + 'imgThumbSmall MenuImageBox MenuImageBoxBorder' + quoteClose;// Class
            // ..................................................................................... _//
            // Events:
            // ..................................................................................... _//
            // Mouse Over
            // DivSmallOnmouseover
            DivSmallOnmouseoverText = '';
            DivSmallOnmouseoverFunction = fnElementGroupShowStack;
            DivSmallOnmouseoverFunctionName = 'fnElementGroupShowStack';
            DivSmallOnmouseoverText += '(';
            DivSmallOnmouseoverText += IsSmall + ', ';// Is Small Image
            // Parent Object
            if (imgCn > 1) {
                eventParentName = (fnElementItemGetName(imgGroupCn, imgCn - 1) + imgGroupCn + (imgCn - 1));// Previous (Small) Image Id
            } else {
                eventParentName = (fnElementItemGetName(imgGroupCn, imgCn - 1));// Menu Container Id
            }
            DivSmallOnmouseoverText += quoteInnerOpen + eventParentName + quoteInnerClose + ', ';// Parent Id
            DivSmallOnmouseoverText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Image' + quoteInnerClose + ', ';// Small Image Id
            DivSmallOnmouseoverText += quoteInnerOpen + oName + imgGroupCn + imgCn + quoteInnerClose + ', ';// Small Id
            DivSmallOnmouseoverText += oObjImageSizeSmall + ', ';// Small Image Size
            DivSmallOnmouseoverText += imgGroupCn + ', ';// Menu Group
            DivSmallOnmouseoverText += imgCn + ', ';// Menu Group
            DivSmallOnmouseoverText += '0, ';// Current Show Lock
            DivSmallOnmouseoverText += '1';// Ignore Show Lock
            DivSmallOnmouseoverText += ');';
            //
            if (!imgLoadUseEventHandler) {
                if (imgLoadUseDOM) {
                    imgHtmlDivSmall = fnElementEventAdd('onmouseover',
                        DivSmallOnmouseoverFunction, DivSmallOnmouseoverFunctionName,
                        DivSmallOnmouseoverText, imgHtmlDivSmall);
                } else if (imgLoadUseInner) {
                    imgHtmlDivInner += attributeEventMouseOver + quoteOpen;
                    DivSmallOnmouseoverText = ' ' + DivSmallOnmouseoverFunctionName + DivSmallOnmouseoverText;
                    imgHtmlDivInner += DivSmallOnmouseoverText;
                    imgHtmlDivInner += quoteClose;// onmouseover end quote
                }
            }
            // end of mouseover
            //
            // ..................................................................................... _//
            // Mouse Out
            // DivSmallOnmouseout
            DivSmallOnmouseoutText = '';
            DivSmallOnmouseoutFunction = fnElementItemHideId;
            DivSmallOnmouseoutFunctionName = 'fnElementItemHideId';
            DivSmallOnmouseoutText += '(';
            DivSmallOnmouseoutText += 'event' + ', ';// Event Object
            DivSmallOnmouseoutText += IsSmall + ', ';// Is Small Image
            DivSmallOnmouseoutText += quoteInnerOpen + eventParentName + quoteInnerClose + ', ';// Parent Id
            DivSmallOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Image' + quoteInnerClose + ', ';// Small Image
            DivSmallOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + quoteInnerClose + ', ';// Small Id
            DivSmallOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + quoteInnerClose + ', ';// Large Id
            DivSmallOnmouseoutText += imgGroupCn + ', ';// Menu Group
            DivSmallOnmouseoutText += imgCn + ', ';// Menu Group
            DivSmallOnmouseoutText += '0,';// 'false, ';// Current Show Lock
            DivSmallOnmouseoutText += '0';// 'false';// Ignore Show Lock
            DivSmallOnmouseoutText += ');';
            //
            if (!imgLoadUseEventHandler) {
                if (imgLoadUseDOM) {
                    imgHtmlDivSmall = fnElementEventAdd('onmouseout',
                        DivSmallOnmouseoutFunction, DivSmallOnmouseoutFunctionName,
                        DivSmallOnmouseoutText, imgHtmlDivSmall);
                } else if (imgLoadUseInner) {
                    imgHtmlDivInner += attributeEventMouseOut + quoteOpen;
                    DivSmallOnmouseoutText = ' ' + DivSmallOnmouseoutFunctionName + DivSmallOnmouseoutText;
                    imgHtmlDivInner += ' ' + DivSmallOnmouseoutText;
                    imgHtmlDivInner += quoteClose;// onmouseout end quote
                }
            }
            // end of mouseout
            //
            // ..................................................................................... _//
            // Style
            //
            imgHtmlDivInner += attributeStyle + quoteOpen;// Style
            // Layout
            // Size
            imgHtmlDivSmall.style.padding = '0%';// Padding Bottom
            imgHtmlDivInner += attributeStylePadding + '0%;';// Display (visibility)
            //
            // imgHtmlDivSmall.style.width = (oObjImageSizeSmall + 0) + 'px';// Width
            // imgHtmlDivInner += ' width: 0em;';// Width
            //
            // imgHtmlDivSmall.style.height = 'auto';// Image Large Height
            // imgHtmlDivSmall.style.height = (oObjImageSizeSmall * oObjImageSizeRatio + 20) + 'px';// Image Large Height
            // imgHtmlDivInner += ' height:auto;';// Height
            //
            imgHtmlDivSmall.style.display = 'none';
            imgHtmlDivInner += attributeStyleDisplay + 'none;';// Display (visibility)
            //
            imgHtmlDivInner += quoteClose; // style end quote
            //
            imgHtmlDivInner += tagEndContentStart; // Div (small) closing brace
            imgHtmlDivSmallInner += imgHtmlDivInner;
            //
            // ..................................................................................... _//
            // Small Image
            // ..................................................................................... _//
            //
            // ..................................................................................... _//
            // Element: A
            // Text Link
            imgHtmlAInner = '';
            imgHtmlA = document.createElement('a');
            imgHtmlAInner += tagA;
            //
            imgHtmlA.id = oName + imgGroupCn + imgCn + 'LinkUpper';// Image Small Id
            imgHtmlA.name = oName + imgGroupCn + imgCn + 'LinkUpper';// Image Small Id
            imgHtmlAInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'LinkUpper' + quoteClose;// Link Id
            //
            imgHtmlA.className = 'MenuImageBox MenuImageBoxLink';// Class
            imgHtmlAInner += attributeClass + quoteOpen + 'MenuImageBox MenuImageBoxLink' + quoteClose;// Class
            //
            // Source
            imgHtmlA.href = '../MdmWebPages/' + oName + '.shtml';// Link
            imgHtmlAInner += attributeHref + quoteOpen + '../MdmWebPages/' + oName + '.shtml' + quoteClose;// Link
            //
            imgHtmlAInner += attributeStyle + quoteOpen;// Style
            //
            // imgHtmlA.style.padding = '0%';// Padding
            // imgHtmlAInner += ' padding:0%;';// Display (visibility)
            //
            // imgHtmlA.style.margin = '0%';// Margin
            // imgHtmlAInner += ' margin:0%;';// Display (visibility)
            //
            imgHtmlAInner += quoteClose;// style end quote
            //
            imgHtmlAInner += tagEndContentStart;// A closing brace
            //
            // ..................................................................................... _//
            // Element: Span
            imgHtmlSpanInner = '';
            imgHtmlSpan = document.createElement('span');
            imgHtmlSpanInner += tagSpan;
            //
            imgHtmlSpan.id = oName + imgGroupCn + imgCn + 'LinkTextUpper';// Link Text
            imgHtmlSpan.name = oName + imgGroupCn + imgCn + 'LinkTextUpper';// Link Text
            imgHtmlSpanInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'LinkTextUpper' + quoteClose + tagEndContentStart;// Link Text
            //
            imgHtmlSpan.innerHTML = fnElementItemGetDescription(imgGroupCn, imgCn);
            imgHtmlSpanInner += fnElementItemGetDescription(imgGroupCn, imgCn);
            //
            // Element: Br
            // imgHtmlBr = document.createElement('br');
            // imgHtmlBr.id= oName + 'LinkTextUpper' + imgGroupCn + imgCn;
            // imgHtmlBr.clear = 'both';
            // imgHtml += charNewLineTagOpen + 'id= ' + quoteOpen + oName + 'LinkTextUpper' + imgGroupCn + imgCn + quoteClose + ' clear= ' + quoteOpen + 'both'  + quoteClose + tagEnd;
            //
            // end of elements Span
            imgHtmlSpanInner += tagSpanEnd;
            //
            if (imgLoadUseDOM) { imgHtmlA.appendChild(imgHtmlSpan); }
            imgHtmlAInner += imgHtmlSpanInner;
            //
            // ..................................................................................... _//
            // Element: Br
            // imgHtmlBr = document.createElement("br");
            // imgHtml += charNewLineTag;
            // imgHtmlA.appendChild(imgHtmlBr);
            //
            // end of elements A
            imgHtmlAInner += tagAEnd;
            imgHtmlDivSmallInner += imgHtmlAInner;
            if (imgLoadUseDOM) { imgHtmlDivSmall.appendChild(imgHtmlA); }
            //
            // ..................................................................................... _//
            // Element: Img
            imgHtmlImgInner = '';
            //
            imgHtmlImg = document.createElement('img');
            imgHtmlImgInner += tagImg;
            //
            imgHtmlImg.id = oName + imgGroupCn + imgCn + 'Image';
            imgHtmlImg.name = oName + imgGroupCn + imgCn + 'Image';
            imgHtmlImgInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'Image' + quoteClose + ' ';// Image Id
            //
            imgHtmlImg.src = '../Images/Thumbnails/' + oName + '.jpg';// Image Source src
            imgHtmlImgInner += attributeSrc + quoteOpen + '../Images/Thumbnails/' + oName + '.jpg' + quoteClose + ' ';// Image Source src
            //
            imgHtmlImg.className = "MenuThumb";
            imgHtmlImgInner += attributeClass + quoteOpen + 'MenuThumb"';// Class
            //
            // Alt
            imgHtmlImg.alt = fnTextReplace(fnElementItemGetDescription(imgGroupCn, imgCn), charNewLineTag, ' ');// Alt (Link) Text;
            imgHtmlImgInner += attributeAlt + quoteOpen + fnElementItemGetDescription(imgGroupCn, imgCn) + quoteClose;// Alt (Link) Text;
            //
            // Events:
            // Mouse Down
            /* --
            // Filter
            // Start Animation Filter
            // Filter Reset
            // imgHtml += ' fnFilterResetThenAnimate(this + ', ' + filterIndexPassed + ');'; // Reset this Image
            imgHtml += 'fnFilterResetThenAnimate(' + oName + 'Large' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');';// Reset Large Image
            // imgHtml += ' fnFilterSpin(' + oName + 'Large' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');';// Spin Large Image
            -- */
            //
            // ..................................................................................... _//
            // Image Show Toggle
            // Mouse Down
            DivSmallOnmousedownText = '';
            DivSmallOnmousedownFunction = fnElementItemToggle;
            DivSmallOnmousedownFunctionName = 'fnElementItemToggle';
            DivSmallOnmousedownText += '(';
            DivSmallOnmousedownText += IsLarge + ', ';// Is Large Image
            DivSmallOnmousedownText += quoteInnerOpen + oName + imgGroupCn + imgCn + quoteInnerClose + ', ';// Small Id
            DivSmallOnmousedownText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + 'Image' + quoteInnerClose + ', ';// Large Image Object
            DivSmallOnmousedownText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + quoteInnerClose + ', ';// Large Id
            DivSmallOnmousedownText += oObjImageSizeLarge + ', ';// Image Large Size
            DivSmallOnmousedownText += imgGroupCn + ', ';// Menu Group
            DivSmallOnmousedownText += imgCn + ', ';// Menu Group
            DivSmallOnmousedownText += '0, ';// Current Show Lock
            DivSmallOnmousedownText += '0';// Ignore Show Lock
            DivSmallOnmousedownText += ');';
            //
            if (!imgLoadUseEventHandler) {
                if (imgLoadUseDOM) {
                    imgHtmlDivSmall = fnElementEventAdd('onmousedown',
                        DivSmallOnmousedownFunction, DivSmallOnmousedownFunctionName,
                        DivSmallOnmousedownText, imgHtmlDivSmall);
                } else if (imgLoadUseInner) {
                    imgHtmlImgInner += attributeEventMouseDown + quoteOpen;
                    DivSmallOnmousedownText = ' ' + DivSmallOnmousedownFunctionName + DivSmallOnmousedownText;
                    imgHtmlImgInner += DivSmallOnmousedownText;
                    // imgHtmlImgInner += ' ' + DivSmallOnmousedownFilterText;
                    imgHtmlImgInner += quoteClose;// onmousedown end quote
                }
            }
            // imgHtmlImg.onmousedown = DivSmallOnmousedownText;
            //
            // end of mousedown
            //
            // ..................................................................................... _//
            // Play Filter
            // imgHtml += ' onfilterchange= ' + quoteOpen + 'fnFilterSpin(this + ', ' + filterIndexPassed + ');';// Spin this Image
            // imgHtml += ' onfilterchange= ' + quoteOpen + 'fnFilterSpin(' + oName + 'Large' + imgGroupCn + imgCn + ', filterIndexPassed);';// Spin Large Image
            // imgHtml += quoteClose ' ';
            //
            // ..................................................................................... _//
            // Style
            imgHtmlImgInner += attributeStyle + quoteOpen;// Style
            // Padding
            imgHtmlImg.style.padding = '0%';// Padding
            imgHtmlImgInner += attributeStylePadding + '0%;';// Display (visibility)
            // Margin
            imgHtmlImg.style.margin = '0%';// Margin
            imgHtmlImgInner += attributeStyleMargin + '0%;';// Display (visibility)
            // Size
            // Width
            imgHtmlImg.style.width = oObjImageSizeSmall + 'px';// Width
            imgHtmlImgInner += attributeStyleWidth + oObjImageSizeSmall + 'px;';// Width
            // Height (using Global height and ratio)
            imgHtmlImg.style.height = (oObjImageSizeSmall * oObjImageSizeRatio) + 'px';// Height
            imgHtmlImgInner += attributeStyleHeight + (oObjImageSizeSmall * oObjImageSizeRatio) + 'px;';// Height
            //
            imgHtmlImgInner += quoteClose;// style end quote
            //
            imgHtmlImgInner += tagEndContentNone;// img closing brace
            //
            if (imgLoadUseDOM) { imgHtmlDivSmall.appendChild(imgHtmlImg); }
            imgHtmlDivSmallInner += imgHtmlImgInner;
            //
            // ..................................................................................... _//
            // Element: A
            // Text Link
            imgHtmlAInner = '';
            imgHtmlA = document.createElement('a');
            imgHtmlAInner += tagA;
            // Id
            imgHtmlA.id = oName + imgGroupCn + imgCn + 'LinkLower';// Link Id
            imgHtmlA.name = oName + imgGroupCn + imgCn + 'LinkLower';// Link Id
            imgHtmlAInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'LinkLower' + quoteClose;// Link Id
            //
            imgHtmlA.className = 'MenuImageBox MenuImageBoxLink';// Class
            imgHtmlAInner += attributeClass + quoteOpen + 'MenuImageBox MenuImageBoxLink' + quoteClose;// Class
            // Source
            imgHtmlA.href = '../MdmWebPages/' + oName + '.shtml';// Link
            imgHtmlAInner += attributeHref + quoteOpen + '../MdmWebPages/' + oName + '.shtml' + quoteClose;// Link
            //
            imgHtmlAInner += tagEndContentStart;// A closing brace
            // ..................................................................................... _//
            // Element: Span
            imgHtmlSpanInner = '';
            imgHtmlSpan = document.createElement('span');
            imgHtmlSpanInner += tagSpan;
            //
            imgHtmlSpan.id = oName + imgGroupCn + imgCn + 'LinkTextLower';// Link Text
            imgHtmlSpan.name = oName + imgGroupCn + imgCn + 'LinkTextLower';// Link Text
            imgHtmlSpanInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'LinkTextLower' + quoteClose + tagEndContentNone;// Link Text
            //
            imgHtmlSpan.innerHTML = fnElementItemGetDescription(imgGroupCn, imgCn);
            imgHtmlSpanInner += fnElementItemGetDescription(imgGroupCn, imgCn);
            //
            // ..................................................................................... _//
            imgHtmlSpanInner += tagSpanEnd;
            //
            imgHtmlAInner += imgHtmlSpanInner;
            if (imgLoadUseDOM) { imgHtmlA.appendChild(imgHtmlSpan); }
            //
            imgHtmlAInner += tagAEnd;
            //
            imgHtmlDivSmallInner += imgHtmlAInner;
            if (imgLoadUseDOM) { imgHtmlDivSmall.appendChild(imgHtmlA); }
            //
            imgHtmlDivSmallInner += tagDivEnd;
            //
            // ..................................................................................... _//
            // ..................................................................................... _//
            // Image Large
            // ..................................................................................... _//
            // ..................................................................................... _//
            //
            // ..................................................................................... _//
            // Element: Div
            imgHtmlDivLarge = document.createElement('div');
            imgHtmlDivLargeInner = '';
            //
            imgHtmlDivLarge.id = oName + imgGroupCn + imgCn + 'Large';// Id
            imgHtmlDivLarge.name = oName + imgGroupCn + imgCn + 'Large';// Id
            imgHtmlDivLargeInner += tagDiv;
            imgHtmlDivLargeInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'Large' + quoteClose;// Id
            //
            imgHtmlDivLarge.className = quoteOpen + 'imgThumbLarge MenuImageBox MenuImageBoxBorder ' + quoteClose;// Class
            imgHtmlDivLargeInner += attributeClass + quoteOpen + 'imgThumbLarge MenuImageBox MenuImageBoxBorder ' + quoteClose;// Class
            // MenuImageContainer
            // ..................................................................................... _//
            // Events:
            // ..................................................................................... _//
            // Mouse Out //
            DivLargeOnmouseoutText = '';
            DivLargeOnmouseoutFunction = fnElementItemHideId;
            DivLargeOnmouseoutFunctionName = 'fnElementItemHideId';
            DivLargeOnmouseoutText += '(';
            DivLargeOnmouseoutText += 'event' + ', ';// Event Object
            DivLargeOnmouseoutText += IsLarge + ', ';// Is Large Image
            DivLargeOnmouseoutText += quoteInnerOpen + oName + (imgGroupCn) + (imgCn) + quoteInnerClose + ', ';// Small Id
            DivLargeOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + 'Image' + quoteInnerClose + ', ';// Large Image Id
            DivLargeOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + quoteInnerClose + ', ';// Large Id
            DivLargeOnmouseoutText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + quoteInnerClose + ', ';// Large Id
            DivLargeOnmouseoutText += imgGroupCn + ', ';// Menu Group
            DivLargeOnmouseoutText += imgCn + ', ';// Menu Group Box
            DivLargeOnmouseoutText += 'menuImageLocked[' + imgGroupCn + '] [' + imgCn + '] [' + IsLarge + ']' + ', ';// Current Show Lock
            DivLargeOnmouseoutText += '0';// Ignore Show Lock
            DivLargeOnmouseoutText += ');';
            //
            if (!imgLoadUseEventHandler) {
                if (imgLoadUseDOM) {
                    imgHtmlDivLarge = fnElementEventAdd('onmouseout',
                        DivLargeOnmouseoutFunction, DivLargeOnmouseoutFunctionName,
                        DivLargeOnmouseoutText, imgHtmlDivLarge);
                } else if (imgLoadUseInner) {
                    imgHtmlDivLargeInner += attributeEventMouseOut + quoteOpen;
                    DivLargeOnmouseoutText = DivLargeOnmouseoutFunctionName + DivLargeOnmouseoutText;
                    imgHtmlDivLargeInner += DivLargeOnmouseoutText;
                    imgHtmlDivLargeInner += quoteClose;// onmmouseout end quote
                }
            }
            // end of mouseout
            //
            // ..................................................................................... _//
            // Mouse Over //
            // ..................................................................................... _//
            // Show Image Large
            // DivLargeOnmouseover
            DivLargeOnmouseoverText = '';
            DivLargeOnmouseoverFunction = fnElementItemShowId;
            DivLargeOnmouseoverFunctionName = 'fnElementItemShowId';
            DivLargeOnmouseoverText += '(';
            DivLargeOnmouseoverText += 'event' + ', ';// Event Object
            DivLargeOnmouseoverText += IsLarge + ', ';// Is Large Image
            DivLargeOnmouseoverText += quoteInnerOpen + oName + imgGroupCn + imgCn + quoteInnerClose + ', ';// Small Id
            DivLargeOnmouseoverText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + 'Image' + quoteInnerClose + ', ';// Large Image
            DivLargeOnmouseoverText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + quoteInnerClose + ', ';// Large Id
            DivLargeOnmouseoverText += quoteInnerOpen + oName + imgGroupCn + imgCn + 'Large' + quoteInnerClose + ', ';// Large Id
            DivLargeOnmouseoverText += oObjImageSizeLarge + ', ';// Image Large Size
            DivLargeOnmouseoverText += imgGroupCn + ', ';// Menu Group
            DivLargeOnmouseoverText += imgCn + ', ';// Menu Group Box
            DivLargeOnmouseoverText += 'menuImageLocked[' + imgGroupCn + '] [' + imgCn + '] [' + IsLarge + ']' + ', ';// Current Show Lock
            DivLargeOnmouseoverText += '0';// Ignore Show Lock
            DivLargeOnmouseoverText += ');';
            //
            if (!imgLoadUseEventHandler) {
                if (imgLoadUseDOM) {
                    imgHtmlDivLarge = fnElementEventAdd('onmouseover',
                        DivLargeOnmouseoverFunction, DivLargeOnmouseoverFunctionName,
                        DivLargeOnmouseoverText, imgHtmlDivLarge);
                } else if (imgLoadUseInner) {
                    imgHtmlDivLargeInner += attributeEventMouseOver + quoteOpen;
                    DivLargeOnmouseoverText = DivLargeOnmouseoverFunctionName + DivLargeOnmouseoverText;
                    imgHtmlDivLargeInner += DivLargeOnmouseoverText;
                    imgHtmlDivLargeInner += quoteClose;// onmmouseover end quote
                }
            }
            //
            // ..................................................................................... _//
            // Start Animation Filter
            // Filter Reset
            // imgHtml += ' fnFilterResetThenAnimate(this + ', ' + filterIndexPassed + ');'; // Reset this Image
            // imgHtml += ' fnFilterResetThenAnimate(' + oName + imgGroupCn + imgCn + 'Large' + ', ' + filterIndexPassed + ');';// Reset Large Image
            // imgHtml += ' fnFilterSpin(' + oName + imgGroupCn + imgCn + 'Large' + ', ' + filterIndexPassed + ');';// Spin Large Image
            //
            // imgHtml += quoteClose;
            // end of mouseover
            //
            // ..................................................................................... _//
            // Play Filter
            // imgHtml += '      	onfilterchange= ' + quoteOpen + 'fnFilterSpin(this, filterIndexPassed);';// Spin this Image
            // imgHtml += '      	onfilterchange= ' + quoteOpen + 'fnFilterSpin(' + oName + imgGroupCn + imgCn + 'Large' + ', ' + filterIndexPassed + ');';// Spin Large Image
            // imgHtml += quoteClose + ' ';
            // imgHtmlDivLarge.onfilterchange = imgHtml;
            //
            // ..................................................................................... _//
            // Div Style
            imgHtmlDivLargeInner += attributeStyle + quoteOpen
            // Div Size
            // Width
            imgHtmlDivLarge.style.width = 'auto';// Image Large Width
            imgHtmlDivLargeInner += attributeStyleWidth + 'auto;';// Image Large Width
            // imgHtmlDivLarge.style.width = oObjImageSizeLarge + 'px';// Image Large Width
            // imgHtmlDivLargeInner += ' width:' + oObjImageSizeLarge + 'px;';// Image Large Width
            // Height
            imgHtmlDivLarge.style.height = 'auto';// Image Large Height
            imgHtmlDivLargeInner += attributeStyleHeight + 'auto;';// Image Large // imgHtmlDivLarge.style.height = (oObjImageSizeLarge * oObjImageSizeRatio) + 'px';// Image Large Height
            // imgHtmlDivLargeInner += ' height:' + (oObjImageSizeLarge * oObjImageSizeRatio) + 'px;';// Image Large Height
            // Display
            imgHtmlDivLargeInner += attributeStyleDisplay + 'none;';
            imgHtmlDivLarge.style.display = 'none';
            //
            imgHtmlDivLargeInner += quoteClose;// style end quote
            //
            // ..................................................................................... _//
            /* --
            imgHtml += '         filter:';
            //
            // imgHtml += 'progid:DXImageTransform.Microsoft.MotionBlur(strength= 13, direction= 310) ';
            // filterIndexPassed = filterTypeBlinds;
            // imgHtml += 'progid:DXImageTransform.Microsoft.Blur(pixelradius= 2) ';
            // filterIndexPassed = filterTypeBlinds;
            // imgHtml += 'progid:DXImageTransform.Microsoft.Wheel(duration= 3);' + quoteClose;
            // filterIndexPassed = filterTypeBlinds;
            //
            // imgHtml += 'progid:DXImageTransform.Microsoft.Blinds(Bands= 10, Duration= 2, Direction= down);' + quoteClose;
            // filterIndexPassed = filterTypeBlinds;
            // CheckerBoard
            // filterTypeCheckerBoard
            imgHtml += 'progid:DXImageTransform.Microsoft.CheckerBoard(Duration= 3, Direction= left);';
            // Wheel
            // imgHtml += 'progid:DXImageTransform.Microsoft.Wheel(Duration= 1.0000);' + quoteClose;
            // filterIndexPassed = filterTypeBlinds;
            // Matrix
            // imgHtml += 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod= auto expand, duration= 1.5);' + quoteClose;
            // filterIndexPassed = filterTypeBlinds;
            -- */
            // ..................................................................................... _//
            //
            imgHtmlDivLargeInner += tagEndContentStart;// Div (large) closing brace
            //
            // ..................................................................................... _//
            // Image & Text Link
            // ..................................................................................... _//
            // Element: A
            imgHtmlAInner = '';
            imgHtmlA = document.createElement('a');
            imgHtmlAInner += tagA;
            //
            imgHtmlA.id = oName + imgGroupCn + imgCn + 'Large' + 'LinkUpper';
            imgHtmlA.name = oName + imgGroupCn + imgCn + 'Large' + 'LinkUpper';
            imgHtmlAInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'Large' + 'LinkUpper' + quoteClose;
            //
            imgHtmlA.className = 'MenuImageBox MenuImageBoxLink';
            imgHtmlAInner += attributeClass + quoteOpen + 'MenuImageBox MenuImageBoxLink' + quoteClose;
            //
            imgHtmlA.href = '../MdmWebPages/' + oName + '.shtml';
            imgHtmlAInner += attributeHref + quoteOpen + '../MdmWebPages/' + oName + '.shtml' + quoteClose;
            //
            imgHtmlAInner += tagEndContentStart;// A closing brace
            //
            // ..................................................................................... _//
            // Element: Span
            imgHtmlSpanInner = '';
            imgHtmlSpan = document.createElement('span');
            imgHtmlSpanInner += tagSpan;
            //
            imgHtmlSpan.id = oName + 'Large' + 'LinkTextUpper';// Link Text
            imgHtmlSpan.name = oName + imgGroupCn + imgCn + 'Large' + 'LinkTextUpper';// Link Text
            imgHtmlSpanInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'Large' + 'LinkTextUpper' + quoteClose + tagEndContentStart;// Link Text
            //
            imgHtmlSpan.innerHTML = fnElementItemGetDescription(imgGroupCn, imgCn);
            imgHtmlSpanInner += fnElementItemGetDescription(imgGroupCn, imgCn);
            //
            // ..................................................................................... _//
            // Element: Br
            // imgHtmlBr = document.createElement("br");
            // if (imgLoadUseDOM) { imgHtmlSpan.appendChild(imgHtmlBr); }
            // imgHtmlSpanInner += charNewLineTag;
            //
            // imgHtmlBr = document.createElement("br");
            // if (imgLoadUseDOM) { imgHtmlSpan.appendChild(imgHtmlBr); }
            // imgHtmlSpanInner += charNewLineTagOpen + 'class= "aClearBoth" >';
            //
            // ..................................................................................... _//
            imgHtmlSpanInner += tagSpanEnd;// Span closing Tag
            //
            if (imgLoadUseDOM) { imgHtmlA.appendChild(imgHtmlSpan); }
            imgHtmlAInner += imgHtmlSpanInner;
            //
            // ..................................................................................... _//
            // Element: Img
            imgHtmlImgInner = '';
            imgHtmlImg = document.createElement('img');
            imgHtmlImgInner += tagImg;
            //
            imgHtmlImg.id = oName + imgGroupCn + imgCn + 'Large' + 'Image';
            imgHtmlImg.name = oName + imgGroupCn + imgCn + 'Large' + 'Image';
            imgHtmlImgInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'Large' + 'Image' + quoteClose;
            //
            imgHtmlImg.src = '../Images/Thumbnails/' + oName + '.jpg';// Image Source src
            imgHtmlImgInner += attributeSrc + quoteOpen + '../Images/Thumbnails/' + oName + '.jpg' + quoteClose;// Image Source src
            //
            imgHtmlImg.className = 'MenuThumbLarge';
            imgHtmlImgInner += attributeClass + quoteOpen + 'MenuThumbLarge' + quoteClose;
            //
            // Alt
            imgHtmlImg.alt = fnTextReplace(fnElementItemGetDescription(imgGroupCn, imgCn), charNewLineTag, ' ');// Alt (Link) Text;
            imgHtmlImgInner += attributeAlt + quoteOpen + fnElementItemGetDescription(imgGroupCn, imgCn) + quoteClose;// Alt (Link) Text;
            //
            // ..................................................................................... _//
            // Div Style
            imgHtmlImgInner += attributeStyle + quoteOpen
            // Div Size
            // Width
            imgHtmlImg.style.width = oObjImageSizeLarge + 'px';// Image Large Width
            imgHtmlImgInner += attributeStyleWidth + oObjImageSizeLarge + 'px;';// Image Large Width
            // Height
            imgHtmlImg.style.height = (oObjImageSizeLarge * oObjImageSizeRatio) + 'px';// Image Large Height
            imgHtmlImgInner += attributeStyleHeight + (oObjImageSizeLarge * oObjImageSizeRatio) + 'px;';// Image Large Height
            //
            imgHtmlImgInner += quoteClose;// style end quote
            //
            imgHtmlImgInner += tagEndContentNone;
            //
            if (imgLoadUseDOM) { imgHtmlA.appendChild(imgHtmlImg); }
            imgHtmlAInner += imgHtmlImgInner;
            // ..................................................................................... _//
            // Link Text
            imgHtmlSpanInner = '';
            imgHtmlSpan = document.createElement('span');
            imgHtmlSpanInner += tagSpan;
            //
            imgHtmlSpan.id = oName + imgGroupCn + imgCn + 'Large' + 'LinkLower';// Link Text
            imgHtmlSpan.name = oName + imgGroupCn + imgCn + 'Large' + 'LinkLower';// Link Text
            imgHtmlSpanInner += attributeId + quoteOpen + oName + imgGroupCn + imgCn + 'Large' + 'LinkLower' + quoteClose + tagEndContentNone;// Link Text
            //
            // imgHtmlBr = document.createElement('br');
            // if (imgLoadUseDOM) { imgHtmlSpan.appendChild(imgHtmlBr); }
            // imgHtmlSpanInner += charNewLineTagOpen + 'class= ' + quoteOpen + 'aClearBoth' + quoteClose + tagEndContentNone;
            //
            imgHtmlSpan.innerHTML = fnElementItemGetDescription(imgGroupCn, imgCn);
            imgHtmlSpanInner += fnElementItemGetDescription(imgGroupCn, imgCn);
            //
            // ..................................................................................... _//
            imgHtmlSpanInner += tagSpanEnd;
            if (imgLoadUseDOM) { imgHtmlA.appendChild(imgHtmlSpan); }
            imgHtmlAInner += imgHtmlSpanInner;
            //
            imgHtmlAInner += tagAEnd;
            if (imgLoadUseDOM) { imgHtmlDivLarge.appendChild(imgHtmlA); }
            //
            imgHtmlDivLargeInner += imgHtmlAInner;
            imgHtmlDivLargeInner += tagDivEnd;
            //
            if (!imgLoadUseInner) {
                elBodyMenuImageContainer.appendChild(imgHtmlDivSmall);
                elBodyMenuImageContainer.appendChild(imgHtmlDivLarge);
            } else {
                imgHtmlDivBothInner += imgHtmlDivSmallInner + imgHtmlDivLargeInner;
            }
            //
            // ..................................................................................... _//
        }
    }
    //
    if (imgLoadUseInner) {
        elBodyMenuImageContainer.innerHTML = imgHtmlDivBothInner;
    }
    if (!imgLoadUseEventHandler && !imgLoadEventTest) {
        elBodyMenuImageContainer.onmouseover = null;
        elBodyMenuImageContainer.onmouseout = null;
        elBodyMenuImageContainer.onmousedown = null;
    } else {
        elBodyMenuImageContainer.onmousedown = fnElementEventMouse;
        elBodyMenuImageContainer.onmouseover = fnElementEventMouse;
        elBodyMenuImageContainer.onmouseout = fnElementEventMouse;
    }
    //
    // elBodyMenuImageContainer.style.display = 'none';
    // if (browserIsIE) { document.recalc(); }
    //
    // ..................................................................................... _//
    // imgHtml += tagDivEnd;
    // imgHtmlDiv.innerHTML = imgHtml;
    // document.write(imgHtml);
    // elBodyMenuImageContainer = fnElementGetRef(elBodyMenuImageContainer, 'BodyMenuImageContainer', 'BodyMenuImageContainer');
    //
    // elBodyMenuImageContainer.innerHTML = imgHtml;
    // elBodyMenuImageContainer.appendChild(imgHtmlDivSmall);
    // elBodyMenuImageContainer.appendChild(imgHtmlDivLarge);
    //
    menuImageLoadFirst = false;
    //
}
// Execute Function
// Source: Stack Overflow
// http://stackoverflow.com/questions/359788/javascript-function-name-as-a-string
// (c) 2011 stack exchange inc;user contributions licensed under cc-wiki with attribution required
//
function fnFunctionDoExecuteByName(functionName, context /*, args */) {
    // ['My']['Namespace']['functionName'](arguments);// succeeds
    // fnFunctionDoExecuteByName('My.Namespace.functionName', window, arguments);
    // fnFunctionDoExecuteByName('Namespace.functionName', My, arguments);
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
function fnFunctionDoExecuteJsNode(node) {
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
script_state = "MdmStandardFunctions loaded";
