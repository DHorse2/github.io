
// Menu and Image Missing Objects
////////////////////////////////////////////////
var elementLayoutFirstPhatomData;

// Menu Html Build
///////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// Html Variables
////////////////////////////////////////////////
oObjGroupIndex = 1;
var imgHtml = "";
// var BodyImageContainer = document.documentElement["BodyImageContainer"];
// .getElementById("BodyImageContainer");
// Build (inner) HTML for Menu Images
// MenuImagesHtmlBuild();
////////////////////////////////////////////////
function BodyImagesHtmlBuild() {
    //
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx TO DO xxxxxxxxxxxxxxx
    // document.write(imgHtml);
    bodyImageContainer = ElementGetRef(bodyImageContainer, "BodyImageContainer", "BodyImageContainer");
    bodyImageContainer.innerHTML = imgHtml;
    //
    loadFirstBodyImage = false;
    //
    return bodyImageContainer;
}
// MenuImagesHtmlBuild();
////////////////////////////////////////////////
function MenuImagesHtmlBuild() {
    // Filter in use is Type Checkerboard;
    filterIndexPassed = filterTypeCheckerBoard;
    // + ', ' + filterTypeCheckerBoard + ')
    //
    bodyImageContainer = ElementGetRef(BodyImageContainer, "BodyImageContainer", "BodyImageContainer");
    //
    imgHtml = "";
    // imgHtml += lt + 'div id="BodyImageContainer"' + gt;
    for (imgGroupCn = 0; imgGroupCn < 1 + bodyMenuGroupMax; imgGroupCn++) {
        for (imgCn = 0; imgCn < 1 + imgMaxByGroup[imgGroupCn]; imgCn++) {
            oName = MenuObjectNameSet(imgGroupCn, imgCn);
            // imgHtml += '    ' + lt + '1-- Image ' + imgGroupCn + ',' + imgCn + ' --' + gt;
            // Image Small
            // ------------------------------------------------------------------------------------- _//
            // Element Div
            imgHtml += '	' + lt + 'div id="' + oName + '"'; // Image Small Id
            // imgHtml += "	" + lt + "div id=" + oName + imgGroupCn + imgCn + ""; // Image Small Id
            imgHtml += '		 class= "imgThumbSmall MenuImageBox MenuImageBoxBorder"';// Class
            // Events:
            // ------------------------------------------------------------------------------------- _//
            // Mouse Over
            imgHtml += '   		 onmouseover= "';
            imgHtml += 'MenuImgShowStack(';

            // Is NOT a Large Image
            imgHtml += 'false, ';

            // Parent Object
            if (imgCn > 1) {
                imgHtml += (MenuObjectNameSet(imgGroupCn, imgCn - 1) + imgGroupCn + imgCn - 1);// Previous (Small) Image Id
            } else {
                imgHtml += (MenuObjectNameSet(imgGroupCn, imgCn - 1));// Menu Container Id
            }
            imgHtml += ', ';

            // Image
            imgHtml += oName + ', '; // Small Image
            // imgHtml += oName + 'Image' + ', '; // Small Image

            // Image Object
            imgHtml += oName + ', '; // Small Id
            // imgHtml += oName + 'Image' + imgGroupCn + imgCn + ', ';// Small Image
            // imgHtml += oName + imgGroupCn + imgCn + ', ';// Small Id

            // Small Image Size
            imgHtml += 'oObjImageSizeSmall, ';

            // Group
            imgHtml += imgGroupCn + ', ';

            // Group Menu Line
            imgHtml += imgCn + ', ';

            // Current Show Lock
            imgHtml += 'false, ';
            imgHtml += 'true';// Ignore Show Lock
            // Close function call
            imgHtml += ');';
            imgHtml += '"';
            // end of mouseover
            // ------------------------------------------------------------------------------------- _//
            // Mouse Out
            imgHtml += '      	 onmouseout= "';
            imgHtml += 'MenuImgHide(';
            imgHtml += 'false, ';// Is Large Image
            // Parent Object
            if (imgCn > 1) {
                imgHtml += (MenuObjectNameSet(imgGroupCn, imgCn - 1) + imgGroupCn + imgCn - 1);// Previous (Small) Image Id
            } else {
                imgHtml += (MenuObjectNameSet(imgGroupCn, imgCn - 1));// Menu Container Id
            }
            imgHtml += ', ';
            imgHtml += oName + 'Image' + ', ';// Small Image
            imgHtml += oName + ', ';// Small Id
            // imgHtml += oName + 'Image' + imgGroupCn + imgCn + ', ';// Small Image
            // imgHtml += oName + imgGroupCn + imgCn + ', ';// Small Id
            imgHtml += imgGroupCn + ', ';// Menu Group
            imgHtml += imgCn + ', ';// Menu Group
            imgHtml += 'false, ';// Current Show Lock
            imgHtml += 'false';// Ignore Show Lock
            imgHtml += ');';
            imgHtml += '"';
            // end of mouseout
            // ------------------------------------------------------------------------------------- _//
            // On Change
            /*--
            imgHtml += '      	 onfilterchange= "';
            imgHtml += 			 'MenuImageFilterPlayFirst(';
                    // Parent Object
                    if (imgCn > 1) {
                       imgHtml += (MenuObjectNameSet(imgGroupCn, imgCn-1) + imgGroupCn + imgCn-1);// Previous (Small) Image Id
                    } else {
                       imgHtml += (MenuObjectNameSet(imgGroupCn, imgCn-1));// Menu Container Id
                    }
            imgHtml += ', ';
            imgHtml += oName + 'Image' + ', ';// Small Image
            imgHtml += oName + ', ';// Small Id
            imgHtml += oObjImageSizeSmall + ', ';// Small Image Size
            imgHtml += imgGroupCn + ', ';// Menu Group
            imgHtml += 'false, ';// Current Show Lock
            imgHtml += 'false';// Ignore Show Lock
            imgHtml += ');';
            imgHtml += '"';
            --*/
            // end of onfilterchange
            //
            // ------------------------------------------------------------------------------------- _//
            // Layout
            // Size
            // imgHtml += '      	 width= " 0em" ';// Width
            // imgHtml += '      	 height= " 0em" ';// Height
            imgHtml += '		 style= "display:none" ';// Display (visibility)
            imgHtml += '		 ' + gt;
            //
            // ------------------------------------------------------------------------------------- _//
            // Small Image
            // ------------------------------------------------------------------------------------- _//
            //
            // ------------------------------------------------------------------------------------- _//
            // Element: A
            // Text Link
            imgHtml += lt + 'a id="' + oName + 'LinkUpper' + '"';// Link Id
            // imgHtml += lt + 'a id="' + oName + 'LinkUpper' + imgGroupCn + imgCn + '"';// Link Id
            imgHtml += '    		   class= "MenuImageBox MenuImageBoxLink"';// Class
            // Source
            imgHtml += '    		   href= "../MdmWebPages/' + oName + '.shtml"';// Link
            imgHtml += '    		   ' + gt;
            // ------------------------------------------------------------------------------------- _//
            // Element: P
            imgHtml += lt + 'span id= "' + oName + 'LinkTextUpper' + '"' + gt;// Link Text
            // imgHtml += lt + 'span id= "' + oName + 'LinkTextUpper' + imgGroupCn + imgCn + '"' + gt;// Link Text
            imgHtml += '         	   ' + MenuObjectTextSet(imgGroupCn, imgCn);
            imgHtml += '		' + lt + 'br clear= "all"' + gt;
            imgHtml += lt + '/span' + gt;
            // imgHtml += lt + 'br' + gt;
            imgHtml += lt + '/a' + gt;
            //
            // ------------------------------------------------------------------------------------- _//
            // Element: Img
            imgHtml += lt + 'img id="' + oName + 'Image' + '" ';// Image Id
            // imgHtml += lt + 'img id="' + oName + 'Image' + imgGroupCn + imgCn + '" ';// Image Id
            imgHtml += '        	 src= "../Images/Thumbnails/' + oName + '.jpg" ';// Image Source src
            imgHtml += '        	 class= "MenuThumb" ';// Class
            // Events:
            // Mouse Down
            imgHtml += '      	 	 onmousedown= "';
            /*--
            // Filter
            // Start Animation Filter
            // Filter Reset
            // imgHtml += ' FilterResetThenAnimate(this + ', ' + filterIndexPassed + ');'; // Reset this Image
            imgHtml += 'FilterResetThenAnimate(' + oName + 'Large' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');';// Reset Large Image
            // imgHtml += ' FilterSpin(' + oName + 'Large' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');';// Spin Large Image
            --*/
            //
            // Image Show Toggle
            imgHtml += 'MenuImgToggle(';
            imgHtml += 'true, ';// Is Large Image
            imgHtml += oName + ', ';// Small Id
            imgHtml += oName + 'LargeImage' + ', ';// Large Image Object
            imgHtml += oName + 'Large' + ', ';// Large Id
            // imgHtml += oName + imgGroupCn + imgCn + ', ';// Small Id
            // imgHtml += oName + 'LargeImage' + imgGroupCn + imgCn + ', ';// Large Image Object
            // imgHtml += oName + 'Large' + imgGroupCn + imgCn + ', ';// Large Id
            imgHtml += 'oObjImageSizeLarge, ';// Image Large Size
            imgHtml += imgGroupCn + ', ';// Menu Group
            imgHtml += imgCn + ', ';// Menu Group
            imgHtml += 'false, ';// Current Show Lock
            imgHtml += 'false';// Ignore Show Lock
            imgHtml += ');';
            imgHtml += '"';
            // end of mousedown
            //
            // Play Filter
            // imgHtml += ' onfilterchange= "FilterSpin(this + ', ' + filterIndexPassed + ');';// Spin this Image
            // imgHtml += ' onfilterchange= "FilterSpin(' + oName + 'Large' + imgGroupCn + imgCn + ', filterIndexPassed);';// Spin Large Image
            // imgHtml += '" ';
            //
            // Size
            imgHtml += '        	 width= "' + oObjImageSizeSmall + 'px"';// Width
            // Set Height using Global height and ratio
            imgHtml += '        	 height= "' + (oObjImageSizeSmall * oObjImageSizeRatio) + 'px"';// Height
            // Alt
            imgHtml += '			 alt= "' + MenuObjectTextSet(imgGroupCn, imgCn) + '"';// Alt (Link) Text;
            imgHtml += '        	 ' + gt;
            //
            // ------------------------------------------------------------------------------------- _//
            // Element: A
            // Text Link
            imgHtml += lt + 'a id="' + oName + 'LinkLower' + imgGroupCn + imgCn + '"';// Link Id
            imgHtml += '    		   class= "MenuImageBox MenuImageBoxLink"';// Class
            // Source
            imgHtml += '    		   href= "../MdmWebPages/' + oName + '.shtml"';// Link
            imgHtml += '    		   ' + gt;
            // ------------------------------------------------------------------------------------- _//
            // Element: P
            imgHtml += lt + 'span id= "' + oName + 'LinkTextLower' + imgGroupCn + imgCn + '"' + gt;// Link Text
            imgHtml += '        	  ' + MenuObjectTextSet(imgGroupCn, imgCn);
            imgHtml += lt + '/span' + gt;
            imgHtml += lt + '/a' + gt;
            //
            imgHtml += lt + '/div' + gt;
            //
            // ------------------------------------------------------------------------------------- _//
            // ------------------------------------------------------------------------------------- _//
            // Image Large
            // ------------------------------------------------------------------------------------- _//
            // ------------------------------------------------------------------------------------- _//
            //
            // ------------------------------------------------------------------------------------- _//
            // Element: Div
            imgHtml += lt + 'div id="' + oName + 'Large' + '"';// Id
            // imgHtml += lt + 'div id="' + oName + 'Large' + imgGroupCn + imgCn + '"';// Id
            imgHtml += '		 class= "imgThumbLarge MenuImageBoxBorder MenuImageBox"';// Class
            // MenuImageContainer
            // ------------------------------------------------------------------------------------- _//
            // Events:
            // ------------------------------------------------------------------------------------- _//
            // Mouse Out //
            imgHtml += '      	 onmouseout= "';
            imgHtml += 'MenuImgHide(';
            imgHtml += 'true, ';// Is Large Image
            imgHtml += oName + ', ';// Small Id
            imgHtml += oName + 'LargeImage' + ', ';// Lare Image
            imgHtml += oName + 'Large' + ', ';// Large Id
            // imgHtml += oName + imgGroupCn + imgCn + ', ';// Small Id
            // imgHtml += oName + 'LargeImage' + imgGroupCn + imgCn + ', ';// Lare Image
            // imgHtml += oName + 'Large' + imgGroupCn + imgCn + ', ';// Large Id
            imgHtml += imgGroupCn + ', ';// Menu Group
            imgHtml += imgCn + ', ';// Menu Group Box
            imgHtml += 'menuImageLocked[' + imgGroupCn + '] [' + imgCn + ']' + ', ';// Current Show Lock
            imgHtml += 'false';// Ignore Show Lock
            imgHtml += ');';
            imgHtml += '"';
            // end of mouseout
            //
            // ------------------------------------------------------------------------------------- _//
            // Mouse Over //
            // ------------------------------------------------------------------------------------- _//
            // Show Image Small
            imgHtml += '      	 onmouseover= "';
            imgHtml += 'MenuImgShow(';
            imgHtml += 'false, ';// Is Large Image
            // Parent Object Name
            if (imgCn > 1) {
                imgHtml += (MenuObjectNameSet(imgGroupCn, imgCn - 1) + imgGroupCn + imgCn - 1);// Previous (Small) Image Id
            } else {
                imgHtml += (MenuObjectNameSet(imgGroupCn, imgCn - 1));// Menu Container Id
            }
            imgHtml += ', ';
            imgHtml += oName + 'Image' + ', ';// Small Image Object
            imgHtml += oName + ', ';// Small Id
            // imgHtml += oName + 'Image' + imgGroupCn + imgCn + ', ';// Small Image Object
            // imgHtml += oName + imgGroupCn + imgCn + ', ';// Small Id
            imgHtml += 'oObjImageSizeSmall, '; // Image Small Size
            imgHtml += imgGroupCn + ', ';// Menu Group
            imgHtml += imgCn + ', ';// Menu Group Box
            imgHtml += 'menuImageLocked[' + imgGroupCn + '] [' + imgCn + ']' + ', ';// Current Show Lock
            imgHtml += 'false';// Ignore Show Lock
            imgHtml += ');';
            // ------------------------------------------------------------------------------------- _//
            // Show Image Large
            imgHtml += 'MenuImgShow(';
            imgHtml += 'true, ';// Is Large Image
            imgHtml += oName + ', ';// Small Id
            imgHtml += oName + 'LargeImage' + ', ';// Large Image
            imgHtml += oName + 'Large' + ', ';// Large Id
            // imgHtml += oName + imgGroupCn + imgCn + ', ';// Small Id
            // imgHtml += oName + 'LargeImage' + imgGroupCn + imgCn + ', ';// Large Image
            // imgHtml += oName + 'Large' + imgGroupCn + imgCn + ', ';// Large Id
            imgHtml += 'oObjImageSizeLarge, ';// Image Large Size
            imgHtml += imgGroupCn + ', ';// Menu Group
            imgHtml += imgCn + ', ';// Menu Group Box
            imgHtml += 'menuImageLocked[' + imgGroupCn + '] [' + imgCn + ']' + ', ';// Current Show Lock
            imgHtml += 'false';// Ignore Show Lock
            imgHtml += ');';
            // ------------------------------------------------------------------------------------- _//
            // Start Animation Filter
            // Filter Reset
            // imgHtml += ' FilterResetThenAnimate(this + ', ' + filterIndexPassed + ');'; // Reset this Image
            // imgHtml += ' FilterResetThenAnimate(' + oName + 'Large' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');';// Reset Large Image
            // imgHtml += ' FilterSpin(' + oName + 'Large' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');';// Spin Large Image
            //
            imgHtml += '"';
            // end of mouseover
            //
            // Play Filter
            // imgHtml += '      	onfilterchange= "FilterSpin(this, filterIndexPassed);';// Spin this Image
            // imgHtml += '      	onfilterchange= "FilterSpin(' + oName + 'Large' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');';// Spin Large Image
            // imgHtml += '" ';
            //
            // Div Size
            imgHtml += '      	 width= "' + oObjImageSizeLarge + 'px"';// Image Large Width
            imgHtml += '      	 height= "' + (oObjImageSizeLarge * oObjImageSizeRatio) + 'px"';// Image Large Height
            // Div Style
            imgHtml += '		 style= "display:none;';
            //
            // ------------------------------------------------------------------------------------- _//
            /*--
            imgHtml += '         filter:';
            //
            // imgHtml += 'progid:DXImageTransform.Microsoft.MotionBlur(strength= 13, direction= 310) ';
            // filterIndexPassed = filterTypeBlinds;
            // imgHtml += 'progid:DXImageTransform.Microsoft.Blur(pixelradius= 2) ';
            // filterIndexPassed = filterTypeBlinds;
            // imgHtml += 'progid:DXImageTransform.Microsoft.Wheel(duration= 3);"';
            // filterIndexPassed = filterTypeBlinds;
            //
            // imgHtml += 'progid:DXImageTransform.Microsoft.Blinds(Bands= 10, Duration= 2, Direction= down);" ';
            // filterIndexPassed = filterTypeBlinds;
            // CheckerBoard
            // filterTypeCheckerBoard
            imgHtml += 'progid:DXImageTransform.Microsoft.CheckerBoard(Duration= 3, Direction= left);';
            // Wheel
            // imgHtml += 'progid:DXImageTransform.Microsoft.Wheel(Duration= 1.0000);" ';
            // filterIndexPassed = filterTypeBlinds;
            // Matrix
            // imgHtml += 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod= auto expand, duration= 1.5);" ';
            // filterIndexPassed = filterTypeBlinds;
            --*/
            // ------------------------------------------------------------------------------------- _//
            //
            imgHtml += '"';
            // end of style
            //
            imgHtml += '		' + gt;
            //
            // ------------------------------------------------------------------------------------- _//
            // Image & Text Link
            // ------------------------------------------------------------------------------------- _//
            // Element: A
            imgHtml += lt + 'a id= "' + oName + 'LargeLinkUpper' + '"';
            // imgHtml += lt + 'a id= "' + oName + 'LargeLinkUpper' + imgGroupCn + imgCn + '"';
            imgHtml += '		   class= "MenuImageBox MenuImageBoxLink"';
            imgHtml += '		   href= "../MdmWebPages/' + oName + '.shtml"';
            imgHtml += '		   ' + gt;
            //
            // ------------------------------------------------------------------------------------- _//
            // Element: P
            imgHtml += lt + 'span id= "' + oName + 'LargeLinkTextUpper' + '"' + gt;// Link Text
            // imgHtml += lt + 'span id= "' + oName + 'LargeLinkTextUpper' + imgGroupCn + imgCn + '"' + gt;// Link Text
            imgHtml += '         ' + MenuObjectTextSet(imgGroupCn, imgCn);
            imgHtml += '		' + lt + 'br' + gt;
            // imgHtml += '		' + lt + 'br clear= "all"' + gt;
            imgHtml += lt + '/span' + gt;
            //
            // ------------------------------------------------------------------------------------- _//
            // Element: Img
            imgHtml += lt + 'img id= "' + oName + 'LargeImage' + '"';
            // imgHtml += lt + 'img id= "' + oName + 'LargeImage' + imgGroupCn + imgCn + '"';
            imgHtml += '    		 src= "../Images/Thumbnails/' + oName + '.jpg"';// Image Source src
            imgHtml += '    		 class= "MenuThumbLarge"';
            // Alt
            imgHtml += '			 alt= "' + MenuObjectTextSet(imgGroupCn, imgCn) + '"';// Alt (Link) Text;
            imgHtml += '    		 ' + gt;
            // ------------------------------------------------------------------------------------- _//
            // Link Text
            imgHtml += lt + 'span id= "' + oName + 'LargeLinkLower' + '"' + gt;// Link Text
            // imgHtml += lt + 'span id= "' + oName + 'LargeLinkLower' + imgGroupCn + imgCn + '"' + gt;// Link Text
            // imgHtml += '		 ' + lt + 'br clear= "all"' + gt;
            imgHtml += '         ' + MenuObjectTextSet(imgGroupCn, imgCn);
            imgHtml += lt + '/span' + gt;
            //
            imgHtml += lt + '/a' + gt;
            //
            imgHtml += lt + '/div' + gt;
            // ------------------------------------------------------------------------------------- _//
        }
    }
    //
    // ------------------------------------------------------------------------------------- _//
    imgHtml += '	' + lt + '/div> ';
    // document.write(imgHtml);
    // bodyImageContainer = ElementGetRef(bodyImageContainer, "BodyImageContainer", "BodyImageContainer");
    //
    bodyImageContainer.innerHTML = imgHtml;
    if (!imgLoadUseEventHandler && !imgLoadEventTest) {
        bodyImageContainer.onmouseover = null;
        bodyImageContainer.onmouseout = null;
        bodyImageContainer.onmousedown = null;
    } else {
        bodyImageContainer.addEventListener("mouseover", (e) => { ElementEventMouse(e); });
        bodyImageContainer.addEventListener("mousedown", (e) => { ElementEventMouse(e); });
        bodyImageContainer.addEventListener("mouseout", (e) => { ElementEventMouse(e); });
    }
    //
    loadFirstMenuImage = false;
    //
    return bodyImageContainer;
}
// MENUS
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// Function Overview
////////////////////////////////////////////////
// Menu Image Show / Hide
////////////////////////////////////////////////
// Menu Show
// 		MenuImgShowRange
//		MenuImgShowIndex
//		MenuImgShowStack
//		MenuImgToggle
//		MenuImgShow
// Menu Hide
// 		MenuImgToggleRange
//		MenuImgHide
//
////////////////////////////////////////////////
// Menu Hide
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// Menu Mouse Out function
////////////////////////////////////////////////
function MenuImgHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
    //  alert(oObj.name);
    //	oObj.class= "MenuThumbHide";
    //
    if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
    var oObjNextIndex = oObjIndex = oObjGroupItemIndex;
    // MenuIndexGroupSet(oObjNextGroupIndex, oObjNext);
    // oObj = MenuObjectSetAll(oObjNextGroupIndex, oObjNextIndex);
    //
    if (!IgnoreLock && menuImageLocked[oObjNextGroupIndex][oObjNextIndex] == true) { return; }
    //
    oObjNext.style.display = "none";
    //
    if (!IgnoreLock) { menuImageLocked[oObjNextGroupIndex][oObjNextIndex] = oObjLocked; }
    //
    // oObj.width= 0;
    // oObj.height= 0;
    // oObj.style.display= "none";
    // oObjImage.style.display= "none";
    // oObjLarge.style.display= "none";
    // oObjImageLarge.style.display= "none";
}
// Menu Toggle Show
////////////////////////////////////////////////
// Menu Mouse Out function
////////////////////////////////////////////////
function MenuImgToggleRange(HideImage, HideImageLarge, startIndex, endIndex, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
    if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
    startObjoObjIndex = startIndex;
    endObjoObjIndex = endIndex;
    oObjIndex = startObjoObjIndex;
    if (oObjNext.style.display = "none") {
        oObjLocked = true;
        IgnoreLock = false;
        MenuImgShowStack(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock);
    } else {
        oObjLocked = false;
        IgnoreLock = true;
        while (oObjIndex < 1 + endObjoObjIndex) {
            //
            menuImageLocked[oObjGroupIndex][oObjIndex] = false;
            // Objects
            ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
            // oObj = MenuObjectSetAll(oObjGroupIndex, oObjIndex);

            if (HideImage) {
                if (oObj.style.display = "block") {
                    MenuImgHide(IsImageLarge, oObjParent, oObjImage, oObj, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock);
                }
            }
            if (HideImageLarge) {
                if (oObjImageLarge.style.display = "block") {
                    MenuImgHide(IsImageLarge, oObj, oObjImageLarge, oObjLarge, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock);
                }
            }
            //
            oObjIndex++;
        }
    }
}
// Menu Toggle Menu Show Item (Mouse Down function)
////////////////////////////////////////////////
function MenuImgToggle(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
    if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
    oObjIndex = oObjGroupItemIndex;
    // MenuIndexGroupSet(oObjGroupIndex, oObjNext);
    if (oObjNext.style.display = "none") {
        MenuImgShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupItemIndex, menuImageLocked[oObjGroupIndex][oObjIndex], IgnoreLock);
    } else {
        if (IsImageLarge) {
            // Is this wrong?
            MenuImgHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjGroupIndex, oObjGroupItemIndex, menuImageLocked[oObjGroupIndex][oObjIndex], true);
        } else {
            MenuImgHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjGroupIndex, oObjGroupItemIndex, menuImageLocked[oObjGroupIndex][oObjIndex], IgnoreLock);
        }
    }
}
// Menu Show
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// Menu Mouse Over function
////////////////////////////////////////////////
function MenuImgShowRange(startIndex, endIndex, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
    ////////////////////////////////////////////////
    // Build Menu Images Div
    if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
    //
    startObjoObjIndex = startIndex;
    endObjoObjIndex = oObjGroupItemIndex;
    var oObjIndex = startObjoObjIndex;
    while (oObjIndex < 1 + endObjoObjIndex) {
        //
        oObjIndex++;
    }
}
// Menu Mouse Over function
////////////////////////////////////////////////
function MenuImgShowIndex(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
    if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
    MenuImgShowStack(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock);
}
// Menu Menu Show Item and all Previous (Mouse Over function)
////////////////////////////////////////////////
function MenuImgShowStack(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
    if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
    imgZindex += 1;
    oObjNext.style.zIndex = imgZindex;
    //
    startoObjIndex = 1;
    // endoObjIndex = MenuIndexGroupSet(oObjGroupIndex, oObjNext);
    endoObjIndex = oObjGroupItemIndex;
    oObjIndex = startoObjIndex;
    while (oObjIndex < 1 + endoObjIndex) {
        // Objects
        ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
        // oObj = MenuObjectSetAll(oObjGroupIndex, oObjIndex);
        // Set Lock State
        // if (oObjLocked = true) { menuImageLocked[oObjGroupIndex] [oObjIndex] = oObjLocked; }
        if (!IgnoreLock) { menuImageLocked[oObjGroupIndex][oObjIndex] = oObjLocked; }
        // Reveal Hidden Images
        MenuImgShow(IsImageLarge, oObjParent, oObjImage, oObj, iImageSize, oObjGroupIndex, oObjIndex, menuImageLocked[oObjGroupIndex][oObjIndex], true);
        oObjIndex++;
    }
}
// Menu Menu Show Item (Mouse Over function)
// var LastId = "";
// var LastTouchedId = "";
//
////////////////////////////////////////////////
function MenuImgShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLocked, IgnoreLock) {
    //
    if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
    //
    oObjIndex = oObjGroupItemIndex;
    LastTouchedId = oObjNext.id;
    //
    // DebugStart(0, "testing image show");// XXXXXXXX DEBUG XXXXXXXXX
    //
    WindowClientWidth();
    //
    // if (IsImageLarge) {
    // Objects
    // oObj = MenuObjectSetAll(oObjGroupIndex, oObjIndex);
    // Style Visibility
    // oObjLarge.style.display= "block";
    // oObjImageLarge.style.display= "block";
    // }
    if (oObjNext.style.display == "none") {
        //
        // document.recalc();
        //
        ////////////////////////////////////////////////
        // Width and Height
        //	oObj.class= "MenuThumbShow";
        //	oObj.position= "absolute";
        LastId = oObjNext.id
        //
        ////////////////////////////////////////////////
        // Image Size
        // oObjNext.style.width = "auto";
        // oObjNext.style.height = "auto";
        // oObjNext.style.width = iImageSize + 10;
        // oObjNext.style.height = iImageSize * oObjImageSizeRatio + 20;
        //
        // oObjNext.style.width = iImageSize + 50;
        // oObjNext.style.height = iImageSize * oObjImageSizeRatio + 50;
        oObjNextImage.style.width = iImageSize;
        oObjNextImage.style.height = iImageSize * oObjImageSizeRatio;
        //
        ////////////////////////////////////////////////
        // Filters
        var filterCheck = false;
        if (oObjNext.style.filter != "") { filterCheck = true; }
        filterCheck = true;// XXX TEST XXX
        // if (oObjNext.filters.item(0) != "") { filterCheck = true; }
        // var filterCheck = oObjNextImage.filters && oObjNextImage.filters.length > 0;
        //
        ////////////////////////////////////////////////
        // Mouse Events
        // if(true = false) {
        // oObjNext.onfilterchange= "FilterSpin(" + oObjNext.id + ", filterIndexPassed)";
        // oObjNext.onmouseover   = "";
        // if (IsImageLarge) {
        // oObjNext.onmouseover += "MenuImgShow(true, ";
        // } else {
        // oObjNext.onmouseover += "MenuImgShowStack(";
        // }        // oObjNext.onmouseover 	+= oObjNextParent.id
        // + ", "
        // + oObjNextImage.id
        // + ", "
        // + oObjNext.id
        // + ", "
        // if (IsImageLarge) {
        // oObjNext.onmouseover += oObjImageSizeLarge;
        // } else {
        // oObjNext.onmouseover += oObjImageSizeSmall;
        // }        // oObjNext.onmouseover 	+= ", 4, false, false)"
        // + ";"
        // + "FilterResetThenAnimate(" + oObjNext.id + ");";
        // onmouseover= "MenuImgShowStack(MenuContainerRight1, MdmImportTld4Image, MdmImportTld4, oObjImageSizeSmall, 4, false, false)"
        ////////////////////////////////////////////////
        // }

        // Position
        ////////////////////////////////////////////////

        // Parent Postion
        ////////////////////////////////////////////////

        // Get the offset width of that parent element
        ////////////////////////////////////////////////
        ElementPosGetFromObj(oObjNextParent);

        // Position Control
        ////////////////////////////////////////////////
        // Save the Left position (of the first image in the group)
        if (oObjIndex == 1) {
            menuImageRootPosition[oObjGroupIndex][indexTop] = oObjTop;// oObjNextTop;// Top
            menuImageRootPosition[oObjGroupIndex][indexLeft] = oObjLeft;// oObjNextLeft;// Left
            menuImageRootPosition[oObjGroupIndex][indexWidth] = oObjWidth;// Right
            menuImageRootPosition[oObjGroupIndex][indexHeight] = oObjHeight;// Bottom
            //
            // Store Parent Postion (note only first is stored at this time)
            menuImagePositionLeft[oObjGroupIndex][oObjRootIndex] = oObjLeft;
            menuImagePositionTop[oObjGroupIndex][oObjRootIndex] = oObjTop;
            menuImagePositionWidth[oObjGroupIndex][oObjRootIndex] = oObjWidth;
            menuImagePositionHeight[oObjGroupIndex][oObjRootIndex] = oObjHeight;
            //
            // Cascase Direction
            // Adjust the Left position for the image width
            // Left Column wants Top Right of Parent Div
            // Right Column wants Top Left of Parent Div
        }

        // Cascade Control
        ////////////////////////////////////////////////
        // Cascase Row and Column
        var cascadeRow = 1;
        var cascadeColumn = 1;
        cascadeColumn = oObjIndex % oObjectRowMax[oObjGroupIndex];
        cascadeRow = (oObjIndex - cascadeColumn + oObjectRowMax[oObjGroupIndex]) / oObjectRowMax[oObjGroupIndex];

        // Cascase Direction (Down or Up)
        ////////////////////////////////////////////////
        var layoutCascadeDown = true;
        var layoutCascadeRight = true;
        if (menuImageOffsetTopAll[oObjGroupIndex][indexGroup] > 0) {
            layoutCascadeDown = true;
        } else { layoutCascadeDown = false; }
        ////////////////////////////////////////////////

        // Top Position
        ////////////////////////////////////////////////

        // Offset
        ////////////////////////////////////////////////
        oObjNextOffsetTop = menuImageOffsetTopAll[oObjGroupIndex][indexGroup];
        oObjNextOffsetTop += menuImageOffsetTopAll[oObjGroupIndex][oObjIndex];
        ////////////////////////////////////////////////
        // Set Top
        // View Option Adjustments
        // Windowed Layout Format
        if (layoutIndex == layoutWindowed) {
            layoutCascadeDown = true;
            oObjNextOffsetTop = 30;
            // if (oObjIndex == 1) { oObjNextOffsetTop = 50 + menuImageRootPosition[oObjGroupIndex] [indexTop];
            // } else {  oObjNextOffsetLeft = 50; }
            // if (layoutIndex = layoutWindowed) { oObjNextOffsetTop = Math.abs(oObjNextOffsetTop); }
            // Set Top
            oObjNextOffsetTop += bodyMainCenterTop.offsetHeight;
            oObjNextTop = ((oObjIndex - 1) * 50) + oObjNextOffsetTop;
            if (IsImageLarge) { oObjNextTop += 100; }
        } else {
            //  Standard Side Menu Layout Format
            // Set Top
            if (oObjIndex == 1) {
                oObjNextTop = oObjTop;
                // oObjNextTop = menuImageRootPosition[oObjGroupIndex] [indexTop] = oObjTop;// oObjNextTop;// Top
            } else {
                // oObjNextTop = oObjTop;
                oObjNextTop = menuImagePositionTop[oObjGroupIndex][oObjIndex - 1];
            }
            oObjNextTop += oObjNextOffsetTop;
            if (IsImageLarge) {
                if (oObjNextOffsetTop > 50) {
                    oObjNextTop += oObjNextOffsetTop;
                } else { oObjNextTop += 100; }
            }
        }
        // Set Style Top for menu image box
        ////////////////////////////////////////////////
        oObjNext.style.posTop = oObjNextTop;
        // oObjNext.style.posTop = oObjNext.style.top;
        //
        ////////////////////////////////////////////////
        // Menu Thumb Link Postioning (Top or Bottom)
        // Large Image Handling
        if (!IsImageLarge) {
            // Small Image
            // Link Text Position Up or Down
            //      (determined by Cascade Direction)
            if (layoutCascadeDown) {
                // Display Top
                oObjNext.childNodes[0].style.display = "block";
                oObjNext.childNodes[2].style.display = "none";
            } else {
                // Display Bottom
                oObjNext.childNodes[0].style.display = "none";
                oObjNext.childNodes[2].style.display = "block";
            }
        } else {
            // Large Image
            // Link Text Position Up or Down
            if (layoutCascadeDown) {
                // Display Top
                oObjNext.childNodes[0].childNodes[0].style.display = "block";
                oObjNext.childNodes[0].childNodes[2].style.display = "none";
            } else {
                // Display Bottom
                oObjNext.childNodes[0].childNodes[0].style.display = "none";
                oObjNext.childNodes[0].childNodes[2].style.display = "block";
            }
        }
        // Left Position
        ////////////////////////////////////////////////

        // Cascase Direction (Right or Left)
        ////////////////////////////////////////////////
        if (menuImageOffsetLeftAll[oObjGroupIndex][indexGroup] > 0) {
            layoutCascadeRight = true;
        } else { layoutCascadeRight = false; }
        // Offset
        oObjNextOffsetLeft = menuImageOffsetLeftAll[oObjGroupIndex][indexGroup];// Group Default Offset
        oObjNextOffsetLeft += menuImageOffsetLeftAll[oObjGroupIndex][oObjIndex];// Item specific default

        // View Option Adjustments
        ////////////////////////////////////////////////
        var menuImageOffsetFirst = menuImageOffsetFirstAll[oObjGroupIndex][indexLeft];

        // Windowed Layout Format
        ////////////////////////////////////////////////
        if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) != 1) { menuImageOffsetFirst = 0; }
        if (layoutIndex == layoutWindowed) {
            // oObjNextOffsetLeft = oObjNextOffsetLeft * 25 / Math.abs(oObjNextOffsetLeft);
            menuImageOffsetFirst = 20;
        }
        // if (layoutIndex == layoutWindowed) { oObjNextOffsetTop = Math.abs(oObjNextOffsetTop); }

        // Left Position Calculation
        ////////////////////////////////////////////////
        // Adjust Left Position for Page Overflow

        // Cascade Maximum exceeded (Left)
        // Cascase Direction
        ////////////////////////////////////////////////
        if (layoutCascadeRight) {
            ////////////////////////////////////////////////
            // Left Column (Left)
            // One First Column of Row
            if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) == 1) {
                if (layoutIndex == layoutWindowed) {
                    oObjNextOffsetLeft = 0;
                    oObjNextLeft = ((oObjGroupIndex - 1) / 6 * layoutWidth)
                        + menuImageOffsetFirst
                        + oObjNextOffsetLeft;// (ie. Right Top)
                    // XXXXXXXX client width etc (refreshing?)                } else {
                    // Use Parent Position plus offset
                    oObjNextLeft = (menuImagePositionLeft[oObjGroupIndex][oObjRootIndex]
                        + menuImagePositionWidth[oObjGroupIndex][oObjRootIndex])
                        + menuImageOffsetFirst
                        + oObjNextOffsetLeft;// (ie. Right Top)
                }
            } else {
                // Cascade Next Left Column By Top and Left Offsets
                if (layoutIndex == layoutWindowed) { menuImageOffsetFirst = 0; }
                oObjNextLeft = menuImagePositionLeft[oObjGroupIndex][oObjIndex - 1]
                    + oObjNextOffsetLeft;// Right Edge of Parent
                // oObjNextLeft = (oObjLeft)
            }
            //
        } else {
            ////////////////////////////////////////////////
            // Right Column
            // Cascade Maximum exceeded (Right)
            if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) == 1) {
                if (layoutIndex == layoutWindowed) {
                    oObjNextLeft = ((oObjGroupIndex - 1) / 6 * layoutWidth);
                } else {
                    oObjNextLeft = menuImagePositionLeft[oObjGroupIndex][oObjRootIndex]
                        - (iImageSize + 10)
                        + menuImageOffsetFirst
                        + oObjNextOffsetLeft;// (ie. Left Top)
                }
                if (layoutIndex == layoutWindowed && oObjGroupIndex > 2) { oObjNextLeft += 75; }
            } else {
                // (oObjLeft)
                if (layoutIndex == layoutWindowed) { menuImageOffsetFirst = 0; }
                oObjNextLeft = menuImagePositionLeft[oObjGroupIndex][oObjIndex - 1]
                    + oObjNextOffsetLeft;// Right Edge of Parent
            }
        }
        //
        if (IsImageLarge) {
            if (oObjNextOffsetLeft > 50) {
                oObjNextLeft += oObjNextOffsetLeft;
            } else { oObjNextLeft += 100; }
        }

        // Set Left for menu image box
        ////////////////////////////////////////////////
        oObjNext.style.posLeft = oObjNextLeft;

        // Column Overflow
        ////////////////////////////////////////////////
        if (layoutCascadeRight) {
            ////////////////////////////////////////////////
            // Left Column (Left)
            // Maximum Screen Width Exceeded (Left)
            // note this should be an adjustable value
            var bodyRightEdge = oObjNext.ownerDocument.body.clientWidth
                - oObjNext.style.posLeft
                + oObjNext.style.posWidth;// Right Edge
            //
            if ((oObjNext.style.posLeft + (iImageSize + 10)) > bodyRightEdge) {
                while ((oObjNext.style.posLeft + (iImageSize + 10)) > bodyRightEdge) {
                    oObjNext.style.posLeft -= 100;
                }
                // oObjNext.style.posLeft += oObjIndex * 10;
            }
            //
            var bodyLeftEdge = (oObjNext.style.posLeft
                + oObjNext.style.posWidth);// Right Edge
            //
            if ((oObjNext.style.posLeft - 10) < bodyLeftEdge) {
                while ((oObjNext.style.posLeft - 10) < bodyLeftEdge) {
                    oObjNext.style.posLeft += 100;
                }
                // oObjNext.style.posLeft += oObjIndex * 10;
            }
        } else {
            ////////////////////////////////////////////////
            // Right Column
            // Maximum Screen Width Exceeded (Left)
            // note this should be an adjustable value
            if ((oObjNext.style.posLeft + (iImageSize + 10)) > (oObjNext.ownerDocument.body.clientWidth - 10)) {
                while ((oObjNext.style.posLeft + (iImageSize + 10)) > (oObjNext.ownerDocument.body.clientWidth - 10)) {
                    oObjNext.style.posLeft -= 100;
                }
                // oObjNext.style.posLeft += oObjIndex * 10;
            }
            if ((oObjNext.style.posLeft + 10) < 100) {
                while ((oObjNext.style.posLeft + 10) < 100) {
                    oObjNext.style.posLeft += 100;
                }
                // oObjNext.style.posLeft += oObjIndex * 10;
            }
        }

        // Set Object Style Left
        ////////////////////////////////////////////////
        oObjNext.style.left = oObjNext.style.posLeft;

        // Store Postion
        ////////////////////////////////////////////////
        menuImagePositionLeft[oObjGroupIndex][oObjIndex] = oObjNext.style.posLeft;
        menuImagePositionTop[oObjGroupIndex][oObjIndex] = oObjNext.style.posTop;
        menuImagePositionWidth[oObjGroupIndex][oObjIndex] = oObjNext.offsetWidth;
        menuImagePositionHeight[oObjGroupIndex][oObjIndex] = oObjNext.offsetHeight;

        // Filters
        ////////////////////////////////////////////////

        // Z Index
        ////////////////////////////////////////////////
        imgZindex += 1;
        oObjNext.style.zIndex = imgZindex + oObjIndex;

        // Filter Apply Command
        ////////////////////////////////////////////////
        if (filterCheck && (moveIsOn || filterIsOn)) {
            oObjNext.style.display = "block";

            // MenuImageFilterPlayAgain(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjIndex, false, true);

            playDirection = playDirectionForward;
            // playDirection = playDirectionReverse;
            ElementPlayAgain(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjIndex, false, true);


            // oObjNextImage.filters[0].apply();
            // oObjNextImage.filters[1].apply();
            // oObjNextImage.filters.item("DXImageTransform.Microsoft.Wheel").apply();
            // oObjNextImage.filters.item("DXImageTransform.Microsoft.Spin").apply();
            // oObjNextImage.filters.item[1].apply();
            // oObjNextImage.filters.item(1).Apply();
        } else {
            ////////////////////////////////////////////////
            // Visibility
            oObjNext.style.display = "block";
            //
        }

        // Filter Item Creation
        ////////////////////////////////////////////////
        // oObjNext.filters.item = new Array(1);
        //
        // Filter Item Set
        // oObjNext.filters.item(0) = "-ms-filter:progid:DXImageTransform.Microsoft.Matrix(sizingMethod= 'auto expand', duration= '1.5')";
        //
        ////////////////////////////////////////////////
        // Set Object Style Filter
        // oObjNext.style.filter =
        // "progid:DXImageTransform.Microsoft.Matrix(sizingMethod= 'auto expand', duration= '1.5')";
        // "progid:DXImageTransform.Microsoft.
        //
        ////////////////////////////////////////////////
        // Sample / Test Filters
        // Filter Test Microsoft
        ////////////////////////////////////////////////
        if (filterCheck) {
            // oObjNextImage.style.filter = "filter:progid:DXImageTransform.Microsoft.Wheel(duration= 3);filter:progid:DXImageTransform.Microsoft.Slide(slideStyle= 'HIDE', duration= 3, bands= 1);";
            // oObjNextImage.filters[0] = "filter:progid:DXImageTransform.Microsoft.Wheel(duration= 3);";
            // oObjNextImage.filters[1] = "filter:progid:DXImageTransform.Microsoft.Slide(slideStyle= 'HIDE', duration= 3, bands= 1);";
        } else {
            // oObjNextImage.style.filter = "filter:progid:DXImageTransform.Microsoft.Wheel(duration= 3);filter:progid:DXImageTransform.Microsoft.Slide(slideStyle= 'HIDE', duration= 3, bands= 1);";
        }

        // Filter Play Command
        ////////////////////////////////////////////////
        if (filterCheck) {
            // oObjNextImage.filters[0].play();
            // oObjNextImage.filters.item(0).Play();
            // oObjNextImage.filters[1].play();
            // FilterResetThenAnimate(oObjNext);
            // FilterSpin(oObjNext);
        }
        //
        ////////////////////////////////////////////////
        // end of display "none"
    } else {
        // Z Index
        ////////////////////////////////////////////////
        imgZindex += 1;
        oObjNext.style.zIndex = imgZindex + oObjIndex;
    }
    //
    ////////////////////////////////////////////////
    // Dispaly Lock vs MouseOut Disappear
    // if (oObjLocked == true) { menuImageLocked[oObjGroupIndex] [oObjIndex] = oObjLocked; }
    if (!IgnoreLock) { menuImageLocked[oObjGroupIndex][oObjIndex] = oObjLocked; }
}

script_state = "Mdm Standard Image functions loaded. (Build, Hide/Show, Toggle)";
if (debugLoadIsOn) { debugger; }
