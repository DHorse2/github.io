
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
// var BodyMenuImageContainer = document.documentElement["BodyMenuImageContainer"];
// .getElementById("BodyMenuImageContainer");
// Build (inner) HTML for Menu Images
// StdMenuImagesHtmlBuild();
////////////////////////////////////////////////
function StdBodyImagesHtmlBuild() {
    //
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx TO DO xxxxxxxxxxxxxxx
    // document.write(imgHtml);
    elBodyImageContainer = StdElementGetRef(elBodyImageContainer, "BodyImageContainer", "BodyImageContainer");
    elBodyImageContainer.innerHTML = imgHtml;
    //
    loadFirstBodyImage = false;
    //
    return elBodyImageContainer;
}
// StdMenuImagesHtmlBuild();
////////////////////////////////////////////////
function StdMenuImagesHtmlBuild() {
    // Filter in use is Type Checkerboard;
    filterIndexPassed = filterTypeCheckerBoard;
    // + ', ' + filterTypeCheckerBoard + ')
    //
    elBodyMenuImageContainer = StdElementGetRef(elBodyMenuImageContainer, "BodyMenuImageContainer", "BodyMenuImageContainer");
    //
    imgHtml = "";
    // imgHtml += lt + 'div id="BodyMenuImageContainer"' + gt;
    for (imgGroupCn = 0; imgGroupCn < 1 + imgGroupMax; imgGroupCn++) {
        for (imgCn = 0; imgCn < 1 + imgMaxByGroup[imgGroupCn]; imgCn++) {
            oName = StdMenuObjectNameSet(imgGroupCn, imgCn);
            // imgHtml += '    // Image ' + imgCn +  _//';
            // Image Small
            // ------------------------------------------------------------------------------------- _//
            // Element Div
            imgHtml += "	" + lt + "div id=&quot;" + oName + "&quot;"; // Image Small Id
            // imgHtml += "	" + lt + "div id=&quot;" + oName + imgGroupCn + imgCn + "&quot;"; // Image Small Id
            imgHtml += '		 class= "imgThumbSmall MenuImageBox MenuImageBoxBorder"';// Class
            // Events:
            // ------------------------------------------------------------------------------------- _//
            // Mouse Over
            imgHtml += '   		 onmouseover= "';
            imgHtml += 'StdMenuImgShowStack(';
            imgHtml += 'false, ';// Is Large Image
            // Parent Object
            if (imgCn > 1) {
                imgHtml += (StdMenuObjectNameSet(imgGroupCn, imgCn - 1) + imgGroupCn + imgCn - 1);// Previous (Small) Image Id
            } else {
                imgHtml += (StdMenuObjectNameSet(imgGroupCn, imgCn - 1));// Menu Container Id
            }
            imgHtml += ', ';
            imgHtml += oName+ ', ';// Small Image
            // imgHtml += oName + 'Image' + ', ';// Small Image
            imgHtml += oName + ', ';// Small Id
            // imgHtml += oName + 'Image' + imgGroupCn + imgCn + ', ';// Small Image
            // imgHtml += oName + imgGroupCn + imgCn + ', ';// Small Id
            imgHtml += oObjImageSizeSmall + ', ';// Small Image Size
            imgHtml += imgGroupCn + ', ';// Menu Group
            imgHtml += imgCn + ', ';// Menu Group
            imgHtml += 'false, ';// Current Show Lock
            imgHtml += 'true';// Ignore Show Lock
            imgHtml += ');';
            imgHtml += '"';
            // end of mouseover
            // ------------------------------------------------------------------------------------- _//
            // Mouse Out
            imgHtml += '      	 onmouseout= "';
            imgHtml += 'StdMenuImgHide(';
            imgHtml += 'false, ';// Is Large Image
            // Parent Object
            if (imgCn > 1) {
                imgHtml += (StdMenuObjectNameSet(imgGroupCn, imgCn - 1) + imgGroupCn + imgCn - 1);// Previous (Small) Image Id
            } else {
                imgHtml += (StdMenuObjectNameSet(imgGroupCn, imgCn - 1));// Menu Container Id
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
            imgHtml += 			 'StdMenuImageFilterPlayFirst(';
                    // Parent Object
                    if (imgCn > 1) {
                       imgHtml += (StdMenuObjectNameSet(imgGroupCn, imgCn-1) + imgGroupCn + imgCn-1);// Previous (Small) Image Id
                    } else {
                       imgHtml += (StdMenuObjectNameSet(imgGroupCn, imgCn-1));// Menu Container Id
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
            imgHtml += '         	   ' + StdMenuObjectTextSet(imgGroupCn, imgCn);
            imgHtml += '		' + lt + 'br clear= "all"' + gt;
            imgHtml += lt + '/span' + gt;
            // imgHtml += lt + 'br' + gt;
            imgHtml += lt + '/a' + gt;
            //
            // ------------------------------------------------------------------------------------- _//
            // Element: Img
            imgHtml += lt + 'img id="' + oName + 'Image' + '" ';// Image Id
            // imgHtml += lt + 'img id="' + oName + 'Image' + imgGroupCn + imgCn + '" ';// Image Id
            imgHtml += '        	 src= "../images/Thumbnails/' + oName + '.jpg" ';// Image Source src
            imgHtml += '        	 class= "MenuThumb" ';// Class
            // Events:
            // Mouse Down
            imgHtml += '      	 	 onmousedown= "';
            /*--
            // Filter
            // Start Animation Filter
            // Filter Reset
            // imgHtml += ' StdFilterResetThenAnimate(this + ', ' + filterIndexPassed + ');'; // Reset this Image
            imgHtml += 'StdFilterResetThenAnimate(' + oName + 'Large' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');';// Reset Large Image
            // imgHtml += ' StdFilterSpin(' + oName + 'Large' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');';// Spin Large Image
            --*/
            //
            // Image Show Toggle
            imgHtml += 'StdMenuImgToggle(';
            imgHtml += 'true, ';// Is Large Image
            imgHtml += oName + ', ';// Small Id
            imgHtml += oName + 'LargeImage' + ', ';// Large Image Object
            imgHtml += oName + 'Large' + ', ';// Large Id
            // imgHtml += oName + imgGroupCn + imgCn + ', ';// Small Id
            // imgHtml += oName + 'LargeImage' + imgGroupCn + imgCn + ', ';// Large Image Object
            // imgHtml += oName + 'Large' + imgGroupCn + imgCn + ', ';// Large Id
            imgHtml += oObjImageSizeLarge + ', ';// Image Large Size
            imgHtml += imgGroupCn + ', ';// Menu Group
            imgHtml += imgCn + ', ';// Menu Group
            imgHtml += 'false, ';// Current Show Lock
            imgHtml += 'false';// Ignore Show Lock
            imgHtml += ');';
            imgHtml += '"';
            // end of mousedown
            //
            // Play Filter
            // imgHtml += ' onfilterchange= "StdFilterSpin(this + ', ' + filterIndexPassed + ');';// Spin this Image
            // imgHtml += ' onfilterchange= "StdFilterSpin(' + oName + 'Large' + imgGroupCn + imgCn + ', filterIndexPassed);';// Spin Large Image
            // imgHtml += '" ';
            //
            // Size
            imgHtml += '        	 width= "' + oObjImageSizeSmall + 'px"';// Width
            // Set Height using Global height and ratio
            imgHtml += '        	 height= "' + (oObjImageSizeSmall * oObjImageSizeRatio) + 'px"';// Height
            // Alt
            imgHtml += '			 alt= "' + StdMenuObjectTextSet(imgGroupCn, imgCn) + '"';// Alt (Link) Text;
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
            imgHtml += '        	  ' + StdMenuObjectTextSet(imgGroupCn, imgCn);
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
            imgHtml += 'StdMenuImgHide(';
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
            imgHtml += 'StdMenuImgShow(';
            imgHtml += 'false, ';// Is Large Image
            // Parent Object Name
            if (imgCn > 1) {
                imgHtml += (StdMenuObjectNameSet(imgGroupCn, imgCn - 1) + imgGroupCn + imgCn - 1);// Previous (Small) Image Id
            } else {
                imgHtml += (StdMenuObjectNameSet(imgGroupCn, imgCn - 1));// Menu Container Id
            }
            imgHtml += ', ';
            imgHtml += oName + 'Image' + ', ';// Small Image Object
            imgHtml += oName + ', ';// Small Id
            // imgHtml += oName + 'Image' + imgGroupCn + imgCn + ', ';// Small Image Object
            // imgHtml += oName + imgGroupCn + imgCn + ', ';// Small Id
            imgHtml += oObjImageSizeSmall + ', '; // Image Small Size
            imgHtml += imgGroupCn + ', ';// Menu Group
            imgHtml += imgCn + ', ';// Menu Group Box
            imgHtml += 'menuImageLocked[' + imgGroupCn + '] [' + imgCn + ']' + ', ';// Current Show Lock
            imgHtml += 'false';// Ignore Show Lock
            imgHtml += ');';
            // ------------------------------------------------------------------------------------- _//
            // Show Image Large
            imgHtml += 'StdMenuImgShow(';
            imgHtml += 'true, ';// Is Large Image
            imgHtml += oName + ', ';// Small Id
            imgHtml += oName + 'LargeImage' + ', ';// Large Image
            imgHtml += oName + 'Large' + ', ';// Large Id
            // imgHtml += oName + imgGroupCn + imgCn + ', ';// Small Id
            // imgHtml += oName + 'LargeImage' + imgGroupCn + imgCn + ', ';// Large Image
            // imgHtml += oName + 'Large' + imgGroupCn + imgCn + ', ';// Large Id
            imgHtml += oObjImageSizeLarge + ', ';// Image Large Size
            imgHtml += imgGroupCn + ', ';// Menu Group
            imgHtml += imgCn + ', ';// Menu Group Box
            imgHtml += 'menuImageLocked[' + imgGroupCn + '] [' + imgCn + ']' + ', ';// Current Show Lock
            imgHtml += 'false';// Ignore Show Lock
            imgHtml += ');';
            // ------------------------------------------------------------------------------------- _//
            // Start Animation Filter
            // Filter Reset
            // imgHtml += ' StdFilterResetThenAnimate(this + ', ' + filterIndexPassed + ');'; // Reset this Image
            // imgHtml += ' StdFilterResetThenAnimate(' + oName + 'Large' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');';// Reset Large Image
            // imgHtml += ' StdFilterSpin(' + oName + 'Large' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');';// Spin Large Image
            //
            imgHtml += '"';
            // end of mouseover
            //
            // Play Filter
            // imgHtml += '      	onfilterchange= "StdFilterSpin(this, filterIndexPassed);';// Spin this Image
            // imgHtml += '      	onfilterchange= "StdFilterSpin(' + oName + 'Large' + imgGroupCn + imgCn + ', ' + filterIndexPassed + ');';// Spin Large Image
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
            imgHtml += '         ' + StdMenuObjectTextSet(imgGroupCn, imgCn);
            imgHtml += '		' + lt + 'br' + gt;
            // imgHtml += '		' + lt + 'br clear= "all"' + gt;
            imgHtml += lt + '/span' + gt;
            //
            // ------------------------------------------------------------------------------------- _//
            // Element: Img
            imgHtml += lt + 'img id= "' + oName + 'LargeImage' + '"';
            // imgHtml += lt + 'img id= "' + oName + 'LargeImage' + imgGroupCn + imgCn + '"';
            imgHtml += '    		 src= "../images/Thumbnails/' + oName + '.jpg"';// Image Source src
            imgHtml += '    		 class= "MenuThumbLarge"';
            // Alt
            imgHtml += '			 alt= "' + StdMenuObjectTextSet(imgGroupCn, imgCn) + '"';// Alt (Link) Text;
            imgHtml += '    		 ' + gt;
            // ------------------------------------------------------------------------------------- _//
            // Link Text
            imgHtml += lt + 'span id= "' + oName + 'LargeLinkLower' + '"' + gt;// Link Text
            // imgHtml += lt + 'span id= "' + oName + 'LargeLinkLower' + imgGroupCn + imgCn + '"' + gt;// Link Text
            // imgHtml += '		 ' + lt + 'br clear= "all"' + gt;
            imgHtml += '         ' + StdMenuObjectTextSet(imgGroupCn, imgCn);
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
    // elBodyMenuImageContainer = StdElementGetRef(elBodyMenuImageContainer, "BodyMenuImageContainer", "BodyMenuImageContainer");
    //
    elBodyMenuImageContainer.innerHTML = imgHtml;
    //
    loadFirstMenuImage = false;
    //
    return elBodyMenuImageContainer;
}
// Layout Select By Index
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
// function StdLayoutSelectByIndexDepreciated(layoutIndexPassed) {
//     //
//     // Layouts:
//     // var layoutStandard = 1;
//     // var layoutReadingMode = 2;
//     // var layoutWindowed = 3;
//     // var layoutReadingModeLeft = 4;
//     //
//     // alert("ready to go");
//     //
//     // Pointers:
//     layoutIndex = layoutIndexPassed;
//     layoutZindex = 20;
//     //
//     // Window Width
//     StdWindowClientWidth();
//     // layoutWidth -= 20;
//     // layoutHeight -= 20;
//     //---------------------------------------------------------------//
//     // Load Element for first pass
//     //---------------------------------------------------------------//
//     if (elBodyFirst) {
//         //---------------------------------------------------------------//
//         //      Body Element Creation
//         if (loadFirstJava) {
//             // Initialize and save
//             StdElementObjectCreate();
//             //
//         }
//         //---------------------------------------------------------------//
//         //      Body Main Container (contains Left Center and Right
//         if (!elBodyMainContainer) { elBodyMainContainer = StdElementGetFromId("BodyMainContainer"); }
//         // Body Container
//         // elBodyMainContainer.style.posWidth = layoutWidth;
//         // elBodyMainContainer.style.width = elBodyMainContainer.style.posWidth;
//         // elBodyMainContainer.style.height = " 0em";
//         //---------------------------------------------------------------//
//         //			    Menu at Left
//         // elBodyMainLeftOrig.innerHTML = elBodyMainLeft.innerHTML;
//         elBodyMainLeftOrig = StdElementCopy(elBodyMainLeftOrig, elBodyMainLeftOrigFirst, elBodyMainLeft, "none");
//         elBodyMainLeftOrigFirst = false;
//         //---------------------------------------------------------------//
//         //			    Menu at Right
//         // elBodyMainLeftOrig.innerHTML = elBodyMainRight.innerHTML;
//         elBodyMainRightOrig = StdElementCopy(elBodyMainRightOrig, elBodyMainRightOrigFirst, elBodyMainRight, "none");
//         elBodyMainRightOrigFirst = false;
//         //---------------------------------------------------------------//
//         // 	 		 Banner at Center Bottom
//         elBodyBanner = StdElementGetRefFromElement(elBodyBanner, "BodyBanner", "BodyBanner", elBodyMainCenterTop);
//         elBodyBannerTop = StdElementGetRefFromElement(elBodyBannerTop, "BodyBannerTop", "BodyBannerTop", elBodyMainCenterTop);
//         elBodyBannerBottom = StdElementGetRefFromElement(elBodyBannerBottom, "BodyBannerBottom", "BodyBannerBottom", elBodyMainCenterBottom);
//         elBodyBannerBottom = StdElementCopy(elBodyBannerBottom, elBodyBannerBottomFirst, elBodyBanner, "block");
//         elBodyBannerBottomFirst = false;
//         //
//         //---------------------------------------------------------------//
//         //  BodyMain Center Center ColBreak
//         elBodyMainCenterTopLeft = StdtElementBreakSet(elBodyMainCenterCenter, "BodyMainCenterCenterColBreak", elementLayoutFirstPhatomData = true, "block", "visible", "both")
//         //
//     }
//     //---------------------------------------------------------------//
//     switch (layoutIndexPassed) {
//         //---------------------------------------------------------------//
//         //---------------------------------------------------------------//
//         ///////////////////////////////////////////////
//         // 1 Standard
//         ///////////////////////////////////////////////
//         //---------------------------------------------------------------//
//         //---------------------------------------------------------------//
//         case layoutStandard:
//             //---------------------------------------------------------------//
//             // Enclose Box
//             if (elBodyMainCenterTopClass.length) {
//                 elBodyMainCenterTop.className = elBodyMainCenterTopClass;
//             }
//             //---------------------------------------------------------------//
//             // Final adjustments to Center Top
//             var boxHeight = 0;
//             //---------------------------------------------------------------//
//             // elBodyViewToggle View Toggle and Message Area
//             elBodyViewToggle = StdElementGetRefFromElement(elBodyViewToggle, "BodyViewToggleCenter", "BodyViewToggleCenter", elBodyMainCenterTop);
//             boxHeight += elBodyViewToggle.scrollHeight;
//             // Banner Should be zero, don't use..,
//             elBodyBannerTop.style.display = "block";
//             boxHeight += elBodyBannerTop.scrollHeight;
//             //
//             elBodyMainCenterTopColBreak = StdElementGetRefFromElement(elBodyMainCenterTopColBreak, "BodyMainCenterTopColBreak", "BodyMainCenterTopColBreak", elBodyMainCenterTop);
//             boxHeight += elBodyMainCenterTopColBreak.scrollHeight;
//             //
//             // BodyViewToggle + Banner + Left/Right
//             elBodyMainCenterTop.style.posHeight = boxHeight;
//             //
//             //---------------------------------------------------------------//
//             //			 Menu1 at Left
//             // Center Top Left Area Columns
//             // elBodyMainLeft.style.position = "absolute";
//             // elBodyMainLeft.style.left = "0%";
//             elBodyMainLeft.style.width = "20%";
//             // elBodyMainLeft.style.left = 0 * layoutWidth;
//             // elBodyMainLeft.style.posWidth = 0.20 * layoutWidth;
//             //
//             //---------------------------------------------------------------//
//             //			 Body Center "BodyMainCenter"
//             // Break between center top and center center
//             // elBodyMainCenter.style.position = "absolute";
//             // elBodyMainCenter.style.top = "0%";
//             elBodyMainCenter.style.left = "20%";// 0.20 * layoutWidth + 3;
//             elBodyMainCenter.style.width = "60%";//0.60 * layoutWidth - 6;
//             // elBodyMainCenter.style.width = elBodyMainCenter.style.posWidth;
//             // elBodyMainCenter.style.maxWidth = elBodyMainCenter.style.posWidth;
//             elBodyMainCenter.style.height = "auto";
//             //
//             layoutZindex += 1;
//             elBodyMainCenter.style.zIndex = layoutZindex;
//             //
//             elBodyMainCenterCenter.style.top = 0;
//             //
//             //---------------------------------------------------------------//
//             //			 Menu2 at Right
//             // Center Top Right Area Columns
//             // elBodyMainRight.style.position = "absolute";
//             // elBodyMainRight.style.posLeft = 0.80 * layoutWidth;
//             // elBodyMainRight.style.posWidth = 0.20 * layoutWidth;
//             elBodyMainRight.style.left = "80%";
//             elBodyMainRight.style.width = "20%";
//             //
//             //
//             //---------------------------------------------------------------//
//             // 	 		 Banner at Top "BodyBanner"
//             //
//             //
//             //---------------------------------------------------------------//
//             // 	 		 Final adjustments
//             elBodyMainContainer.style.posHeight = layoutHeight;
//             if (elBodyMainContainer.style.posHeight < elBodyMainLeft.clientHeight) {
//                 elBodyMainContainer.style.posHeight = elBodyMainLeft.clientHeight;
//             }
//             if (elBodyMainContainer.style.posHeight < elBodyMainCenter.clientHeight) {
//                 elBodyMainContainer.style.posHeight = elBodyMainCenter.clientHeight;
//             }
//             if (elBodyMainContainer.style.posHeight < elBodyMainRight.clientHeight) {
//                 elBodyMainContainer.style.posHeight = elBodyMainRight.clientHeight;
//             }
//             //
//             //---------------------------------------------------------------//
//             // Area Displays
//             elBodyBanner.style.display = "block";
//             elBodyBannerBottom.style.display = "none";
//             elBodyBannerTop.style.display = "block";
//             elBodyMainLeft.style.display = "block";
//             elBodyMainCenter.style.display = "block";
//             elBodyMainRight.style.display = "block";
//             // elBodyMainRightFar.style.display = "none";
//             elBodyMainCenterTop.style.display = "block";
//             elBodyMainCenterTopLeft.style.display = "none";
//             elBodyMainCenterTopRight.style.display = "none";
//             elBodyMainCenterCenter.style.display = "block";
//             elBodyMainCenterBottom.style.display = "none";
//             //---------------------------------------------------------------//
//             //
//             layoutStandardFirst = false;
//             //
//             break;
//         //---------------------------------------------------------------//
//         //---------------------------------------------------------------//
//         ///////////////////////////////////////////////
//         // 2 Reading Mode Hide
//         ///////////////////////////////////////////////
//         //---------------------------------------------------------------//
//         //---------------------------------------------------------------//
//         case layoutReadingMode:
//             //
//             //---------------------------------------------------------------//
//             //			 Body Center
//             // Break between center top and center center
//             // elBodyMainCenterTopColBreak.style.display = "none";
//             //
//             elBodyMainCenter.style.left = "0%";
//             elBodyMainCenter.style.top = "0%";
//             elBodyMainCenter.style.width = "100%";
//             /*--
//             elBodyMainCenter.style.left = layoutWidth;
//             elBodyMainCenter.style.posWidth = layoutWidth;
//             --*/
//             // elBodyMainCenter.style.width = elBodyMainCenter.style.posWidth;
//             // elBodyMainCenter.style.maxWidth = elBodyMainCenter.style.posWidth;
//             elBodyMainCenter.style.height = "auto";
//             //
//             //---------------------------------------------------------------//
//             //			 Hidden Menu1 at Left
//             // Center Top Left Area Columns
//             //
//             //---------------------------------------------------------------//
//             //			 Hidden Menu2 at Right
//             // Center Top Right Area Columns
//             //
//             //
//             //---------------------------------------------------------------//
//             // 	 		 Hidden Banner at Bottom
//             if (!layoutReadingModeFirst) {
//                 // elBodyBannerBottom.innerHTML = elBodyBanner.innerHTML;
//                 elBodyBannerBottom = StdElementCopy(elBodyBannerBottom, elBodyBannerBottomFirst, elBodyBanner, "block");
//                 elBodyBannerBottomFirst = false;
//             }
//             //
//             //
//             //---------------------------------------------------------------//
//             // Area Displays
//             elBodyBanner.style.display = "block";
//             elBodyBannerBottom.style.display = "block";
//             elBodyBannerTop.style.display = "none";
//             elBodyMainLeft.style.display = "none";
//             elBodyMainCenter.style.display = "block";
//             elBodyMainRight.style.display = "none";
//             // elBodyMainRightFar.style.display = "none";
//             elBodyMainCenterTop.style.display = "block";
//             elBodyMainCenterTopLeft.style.display = "none";
//             elBodyMainCenterTopRight.style.display = "none";
//             elBodyMainCenterCenter.style.display = "block";
//             elBodyMainCenterBottom.style.display = "block";
//             //---------------------------------------------------------------//
//             //
//             layoutReadingModeFirst = false;
//             //
//             break;
//         //---------------------------------------------------------------//
//         //---------------------------------------------------------------//
//         ///////////////////////////////////////////////
//         // 3 Windowed
//         ///////////////////////////////////////////////
//         //---------------------------------------------------------------//
//         //---------------------------------------------------------------//
//         case layoutWindowed:
//             //
//             //---------------------------------------------------------------//
//             //			 Menu1 at Center Top Left
//             if (layoutWindowedFirst) {
//                 //
//                 TopLeftWidth = 0;
//                 TopLeftWidthInner = 0;
//                 // BodyMenuLayout
//                 //---------------------------------------------------------------//
//                 // // elBodyMenuLayout1 BodyMenuLayout
//                 // if (false = true) {
//                 //     if (!elelBodyMenuLayout1 && elBodyMainCenterTopLeft) {
//                 //         elBodyMenuLayout1 = StdElementGetRefFromElement(elBodyMenuLayout1, "BodyMenuLayout1", "BodyMenuLayout1", elBodyMainCenterTopLeft);
//                 //     }
//                 //     //
//                 //     TopLeftWidth = elBodyMenuLayout1.style.posWidth;
//                 //     if (TopLeftWidth = 0) { TopLeftWidth = layoutWidth / 2; }
//                 //     TopLeftWidthInner = TopLeftWidth;
//                 // }
//                 //
//                 // Process Left Column
//                 //
//                 // elBodyMainLeft.innerHTML = elBodyMainLeftOrig.innerHTML
//                 elBodyMainLeftCopy = StdElementCopy(elBodyMainLeft, elBodyMainLeftFirst, elBodyMainLeftOrig, "block");
//                 elBodyMainLeftFirst = false;
//                 //
//                 // elBodyMainRight.innerHTML = elBodyMainLeftOrig.innerHTML
//                 elBodyMainRightCopy = StdElementCopy(elBodyMainRight, elBodyMainRightFirst, elBodyMainRightOrig, "block");
//                 elBodyMainRightFirst = false;
//                 //
//             }
//             //
//             //---------------------------------------------------------------//
//             // Left Menu Column
//             // Center Top Left Area Columns
//             //
//             //---------------------------------------------------------------//
//             // Enclose Box
//             if (!elBodyMainCenterTopClass.length) { elBodyMainCenterTopClass = elBodyMainCenterTop.className; }
//             elBodyMainCenterTop.className = elBodyMainCenterTop.className + " CalloutBox CalloutBorderFull";
//             //
//             if (layoutWindowedFirst) {
//                 //---------------------------------------------------------------//
//                 // Set Center Top Left Element
//                 // MainCenterTopLeft is a Reference pointer into the page
//                 // that has MainLeft HTML copied into it.
//                 elBodyMainCenterTopLeft = StdElementGetRef(elBodyMainCenterTopLeft, "BodyMainCenterTopLeft", "BodyMainCenterTopLeft");
//                 elBodyMainCenterTopLeft = StdElementCopy(elBodyMainCenterTopLeft, elBodyMainCenterTopLeftFirst, elBodyMainLeftOrig, "block");
//                 elBodyMainCenterTopLeftFirst = false;
//                 //---------------------------------------------------------------//
//                 // Enclose Box
//                 elBodyMainCenterTopLeft.className = elBodyMainCenterTopLeft.className + " CalloutBorderFull";
//                 //---------------------------------------------------------------//
//                 // Left Menu Container
//                 // elBodyMainCenterTopLeft.style.posLeft = 0;
//                 //             elBodyMainCenterTopLeft.style.posWidth = TopLeftWidth - 10;
//                 // elBodyMainCenterTopLeft.style.posHeight = "100%";
//                 // elBodyMainCenterTopLeft.style.posHeight = 450;
//                 // elBodyMainCenterTopLeft.style.maxHeight = 450;
//                 //---------------------------------------------------------------//
//                 // Left Body Column (BodyMainLeft)
//                 // elMenuMainLeft = StdElementGetRef(elMenuMainLeft,"MenuMainLeft","MenuMainLeft");
//                 // Do Not Alter... elMenuMainLeft.style.width = "97%";
//                 //---------------------------------------------------------------//
//                 // elBodyMenuLayout1 BodyMenuLayout
//                 elBodyMenuLayout1 = StdElementGetRefFromElement(elBodyMenuLayout1, "BodyMenuLayout1", "BodyMenuLayout1", elBodyMainCenterTopLeft);
//                 // elBodyMenuLayout1.style.width = "100%";
//                 //---------------------------------------------------------------//
//                 // Width of Layout area (previous?)
//                 // TopLeftWidth = elBodyMenuLayout1.style.posWidth;
//                 // if (TopLeftWidth = 0) { TopLeftWidth = layoutWidth / 2; }
//                 // TopLeftWidthInner = TopLeftWidth;
//                 //---------------------------------------------------------------//
//                 // Left Outer and Inner Decorative Divs
//                 elBodyMainLeftOuter = StdElementGetRefFromElement(elBodyMainLeftOuter, "BodyMainLeftOuter", "BodyMainLeftOuter", elBodyMainCenterTopLeft);
//                 elBodyMainLeftOuter.style.paddingLeft = "3%";
//                 elBodyMainLeftOuter.style.width = "97%";
//                 //
//                 elBodyMainLeftInner = StdElementGetRefFromElement(elBodyMainLeftInner, "BodyMainLeftInner", "BodyMainLeftInner", elBodyMainCenterTopLeft);
//                 elBodyMainLeftInner.style.paddingRight = "3%";
//                 elBodyMainLeftInner.style.width = "97%";
//                 elBodyMainLeftInner.style.paddingTop = 10;
//                 //---------------------------------------------------------------//
//                 // Left elMenuGroup1, 2, 3
//                 elMenuGroup1 = StdElementGetRefFromElement(elMenuGroup1, "MenuGroup1", "MenuGroup1", elBodyMainCenterTopLeft);
//                 elMenuGroup2 = StdElementGetRefFromElement(elMenuGroup2, "MenuGroup2", "MenuGroup2", elBodyMainCenterTopLeft);
//                 elMenuGroup3 = StdElementGetRefFromElement(elMenuGroup3, "MenuGroup3", "MenuGroup3", elBodyMainCenterTopLeft);
//                 //---------------------------------------------------------------//
//                 // elMenuGroup1
//                 elMenuGroup1.style.posLeft = "-7%";
//                 elMenuGroup1.style.maxWidth = "33%";
//                 elMenuGroup1.style.styleFloat = "left";
//                 if (layoutMenuHeightMax < elMenuGroup1.style.height) { layoutMenuHeightMax = elMenuGroup1.style.height; }
//                 //---------------------------------------------------------------//
//                 // elMenuGroup2
//                 elMenuGroup2.style.maxWidth = "30%";
//                 elMenuGroup2.style.marginLeft = "3%";
//                 elMenuGroup2.style.styleFloat = "left";
//                 if (layoutMenuHeightMax < elMenuGroup2.style.height) { layoutMenuHeightMax = elMenuGroup2.style.height; }
//                 //---------------------------------------------------------------//
//                 // elMenuGroup3
//                 elMenuGroup3.style.maxWidth = "30%";
//                 elMenuGroup3.style.marginLeft = "3%";
//                 elMenuGroup3.style.styleFloat = "left";
//                 if (layoutMenuHeightMax < elMenuGroup3.style.height) { layoutMenuHeightMax = elMenuGroup3.style.height; }
//                 //---------------------------------------------------------------//
//                 // elDivC21 Callout Paragraph Contents
//                 // if (true = false) {
//                 //     var elDivC21 = StdElementGetRefFromElement(elDivC21, "DivC21", "DivC21", elBodyMainCenterTopLeft);
//                 //     elDivC21.style.display = "none";
//                 // }
//                 //---------------------------------------------------------------//
//                 // elDivC22 Callout Paragraph Contents
//                 var elDivC22 = StdElementGetRefFromElement(elDivC22, "DivC22", "DivC22", elBodyMainCenterTopLeft);
//                 elDivC22.style.display = "none";
//                 //---------------------------------------------------------------//
//                 // Left Body Text Alignment Breaks
//                 var elementLayoutFirstPhatomData;
//                 elBodyMainCenterTopLeft = StdtElementBreakSet(elBodyMainCenterTopLeft, "MenuGroup1ColBreak", elementLayoutFirstPhatomData = true, "none", "hidden", "none")
//                 elBodyMainCenterTopLeft = StdtElementBreakSet(elBodyMainCenterTopLeft, "MenuGroup2ColBreak", elementLayoutFirstPhatomData = true, "none", "hidden", "none")
//                 elBodyMainCenterTopLeft = StdtElementBreakSet(elBodyMainCenterTopLeft, "MenuGroup3ColBreak", elementLayoutFirstPhatomData = true, "none", "hidden", "none")
//                 //
//             }
//             //
//             //---------------------------------------------------------------//
//             //			 Menu2 at Center Top Right
//             // Right Menu Column
//             // Center Top Right Area Columns
//             //
//             if (layoutWindowedFirst) {
//                 // Right Body Text Alignment Breaks
//                 // Set (Copy To) Top Left Element
//                 elBodyMainCenterTopRight = StdElementGetRef(elBodyMainCenterTopRight, "BodyMainCenterTopRight", "BodyMainCenterTopRight");
//                 elBodyMainCenterTopRight = StdElementCopy(elBodyMainCenterTopRight, elBodyMainCenterTopRightFirst, elBodyMainRightOrig, "block");
//                 // elBodyMainCenterTopRightFirst = false;
//                 //
//                 //---------------------------------------------------------------//
//                 // Enclose Box
//                 elBodyMainCenterTopRight.className = elBodyMainCenterTopRight.className + " CalloutBorderFull";
//                 //---------------------------------------------------------------//
//                 // elBodyMenuLayout2 BodyMenuLayout
//                 elBodyMenuLayout2 = StdElementGetRefFromElement(elBodyMenuLayout1, "BodyMenuLayout2", "BodyMenuLayout2", elBodyMainCenterTopRight);
//                 //---------------------------------------------------------------//
//                 // Right Outer and Inner Decorative Divs
//                 elBodyMainRightOuter = StdElementGetRefFromElement(elBodyMainLeftOuter, "BodyMainRightOuter", "BodyMainRightOuter", elBodyMainCenterTopRight);
//                 elBodyMainLeftOuter.style.paddingLeft = "3%";
//                 elBodyMainLeftOuter.style.width = "97%";
//                 //
//                 elBodyMainRightInner = StdElementGetRefFromElement(elBodyMainRightInner, "BodyMainRightInner", "BodyMainRightInner", elBodyMainCenterTopRight);
//                 elBodyMainRightInner.style.paddingRight = "3%";
//                 elBodyMainRightInner.style.width = "97%";
//                 elBodyMainRightInner.style.paddingTop = 10;
//                 //---------------------------------------------------------------//
//                 // Right elMenuGroup4, 2, 3
//                 elMenuGroup4 = StdElementGetRefFromElement(elMenuGroup4, "MenuGroup4", "MenuGroup4", elBodyMainCenterTopRight);
//                 elMenuGroup5 = StdElementGetRefFromElement(elMenuGroup5, "MenuGroup5", "MenuGroup5", elBodyMainCenterTopRight);
//                 elMenuGroup6 = StdElementGetRefFromElement(elMenuGroup6, "MenuGroup6", "MenuGroup6", elBodyMainCenterTopRight);
//                 //---------------------------------------------------------------//
//                 // elMenuGroup4
//                 elMenuGroup4.style.posLeft = "-7%";
//                 elMenuGroup4.style.maxWidth = "33%";
//                 elMenuGroup4.style.styleFloat = "left";
//                 if (layoutMenuHeightMax < elMenuGroup4.style.height) { layoutMenuHeightMax = elMenuGroup4.style.height; }
//                 //---------------------------------------------------------------//
//                 // elMenuGroup5
//                 elMenuGroup5.style.maxWidth = "30%";
//                 elMenuGroup5.style.marginLeft = "3%";
//                 elMenuGroup5.style.styleFloat = "left";
//                 if (layoutMenuHeightMax < elMenuGroup5.style.height) { layoutMenuHeightMax = elMenuGroup5.style.height; }
//                 //---------------------------------------------------------------//
//                 // elMenuGroup3
//                 elMenuGroup6.style.maxWidth = "30%";
//                 elMenuGroup6.style.marginLeft = "3%";
//                 elMenuGroup6.style.styleFloat = "left";
//                 if (layoutMenuHeightMax < elMenuGroup6.style.height) { layoutMenuHeightMax = elMenuGroup6.style.height; }
//                 //---------------------------------------------------------------//
//                 // Column and Float Breaks and Clear
//                 // var elementLayoutFirstPhatomData;
//                 elBodyMainCenterTopRight = StdtElementBreakSet(elBodyMainCenterTopRight, "MenuGroup4ColBreak", elementLayoutFirstPhatomData = true, "none", "hidden", "none")
//                 elBodyMainCenterTopRight = StdtElementBreakSet(elBodyMainCenterTopRight, "MenuGroup5ColBreak", elementLayoutFirstPhatomData = true, "none", "hidden", "none")
//                 elBodyMainCenterTopRight = StdtElementBreakSet(elBodyMainCenterTopRight, "MenuGroup6ColBreak", elementLayoutFirstPhatomData = true, "none", "hidden", "none")
//                 //
//             }
//             //---------------------------------------------------------------//
//             // Final adjustments to Center Top
//             boxHeight = 0;
//             //---------------------------------------------------------------//
//             // elBodyViewToggle View Toggle and Message Area
//             elBodyViewToggle = StdElementGetRefFromElement(elBodyViewToggle, "BodyViewToggleCenter", "BodyViewToggleCenter", elBodyMainCenterTop);
//             boxHeight += elBodyViewToggle.scrollHeight;
//             // Banner Should be zero, don't use..,
//             boxHeight += elBodyBannerTop.scrollHeight;
//             //
//             if (elBodyMenuLayout2.scrollHeight > elBodyMenuLayout1.scrollHeight) {
//                 elBodyMenuLayout1.style.posHeight = elBodyMenuLayout2.scrollHeight;
//             } else {
//                 elBodyMenuLayout2.style.posHeight = elBodyMenuLayout1.scrollHeight;
//             }
//             boxHeight += elBodyMenuLayout1.style.posHeight;
//             //
//             elBodyMainCenterTopColBreak = StdElementGetRefFromElement(elBodyMainCenterTopColBreak, "BodyMainCenterTopColBreak", "BodyMainCenterTopColBreak", elBodyMainCenterTop);
//             boxHeight += elBodyMainCenterTopColBreak.scrollHeight;
//             //
//             // BodyViewToggle + Banner + Left/Right
//             elBodyMainCenterTop.style.posHeight = boxHeight + 40;
//             elBodyMainCenterTopLeft.style.posHeight = elBodyMenuLayout1.style.posHeight + 10;
//             elBodyMainCenterTopRight.style.posHeight = elBodyMenuLayout1.style.posHeight + 10;
//             //
//             //
//             //---------------------------------------------------------------//
//             //			 Body Center Columns
//             //
//             if (layoutWindowedFirst) {
//                 //
//                 // BodyMainCenter
//                 // elBodyMainCenter.style.top = " 0em";
//                 // elBodyMainCenter.style.left = 0 * layoutWidth;
//                 // elBodyMainCenter.style.posWidth = layoutWidth;
//                 // elBodyMainCenter.style.width = elBodyMainCenter.style.posWidth;
//                 elBodyMainCenter.style.width = "100%";
//                 // elBodyMainCenter.style.maxWidth = elBodyMainCenter.style.posWidth;
//                 // elBodyMainCenter.style.height = "auto";
//                 //
//                 // Center Center
//                 // elBodyMainCenterCenter.style.top = elBodyMainCenterTop.scrollHeight + 10;
//                 // elBodyMainCenterCenter.style.top = elBodyMainCenterTop.style.bottom;
//                 // elBodyMainCenter.style.posTop = " 0em";
//             }
//             //
//             //---------------------------------------------------------------//
//             // 	 		 Final adjustments
//             /*--
//             elBodyMainContainer.style.posHeight = layoutHeight;
//             if (elBodyMainContainer.style.posHeight < elBodyMainLeft.clientHeight) {
//                    elBodyMainContainer.style.posHeight = elBodyMainLeft.clientHeight;
//             }
//             if (elBodyMainContainer.style.posHeight < elBodyMainCenter.clientHeight) {
//                    elBodyMainContainer.style.posHeight = elBodyMainCenter.clientHeight;
//             }
//             if (elBodyMainContainer.style.posHeight < elBodyMainRight.clientHeight) {
//                    elBodyMainContainer.style.posHeight = elBodyMainRight.clientHeight;
//             }
//             --*/
//             //---------------------------------------------------------------//
//             // Area Displays
//             elBodyBanner.style.display = "block";
//             elBodyBannerBottom.style.display = "block";
//             elBodyBannerTop.style.display = "none";
//             elBodyMainLeft.style.display = "none";// none
//             elBodyMainCenter.style.display = "block";
//             elBodyMainRight.style.display = "none";// none
//             // elBodyMainRightFar.style.display = "none";
//             elBodyMainCenterTop.style.display = "block";
//             elBodyMainCenterTopLeft.style.display = "block";
//             elBodyMainCenterTopRight.style.display = "block";
//             elBodyMainCenterCenter.style.display = "block";
//             elBodyMainCenterBottom.style.display = "block";
//             //---------------------------------------------------------------//
//             //
//             layoutWindowedFirst = false;
//             break;
//         //---------------------------------------------------------------//
//         //---------------------------------------------------------------//
//         ///////////////////////////////////////////////
//         // 4 Reading Mode Show
//         ///////////////////////////////////////////////
//         //---------------------------------------------------------------//
//         //---------------------------------------------------------------//
//         case layoutReadingModeLeft:
//             //---------------------------------------------------------------//
//             //			 Body Center (Top Left)
//             //
//             // elBodyMainCenter.style.position = "absolute";
//             elBodyMainCenter.style.top = "0%";
//             elBodyMainCenter.style.left = 3;
//             elBodyMainCenter.style.posWidth = layoutWidth - 6;
//             elBodyMainCenter.style.width = elBodyMainCenter.style.posWidth;
//             // elBodyMainCenter.style.maxWidth = elBodyMainCenter.style.posWidth;
//             elBodyMainCenter.style.height = "auto";
//             // elBodyMainCenterCenter.style.top = "auto"
//             //
//             //---------------------------------------------------------------//
//             //			 All Other at Right
//             // xx
//             //
//             //---------------------------------------------------------------//
//             //			 Menu1 at Top Left
//             // xx
//             //
//             //---------------------------------------------------------------//
//             //			 	 Menu2 at Top Right
//             // xx
//             //
//             //---------------------------------------------------------------//
//             // 	 		 	 Banner at Bottom
//             // xx
//             //---------------------------------------------------------------//
//             // Area Displays
//             elBodyBanner.style.display = "block";
//             elBodyBannerBottom.style.display = "none";
//             elBodyBannerTop.style.display = "none";
//             elBodyMainLeft.style.display = "none";
//             elBodyMainCenter.style.display = "block";
//             elBodyMainRight.style.display = "none";
//             // elBodyMainRightFar.style.display = "none";
//             elBodyMainCenterTop.style.display = "block";
//             elBodyMainCenterTopLeft.style.display = "none";
//             elBodyMainCenterTopRight.style.display = "none";
//             elBodyMainCenterCenter.style.display = "block";
//             elBodyMainCenterBottom.style.display = "none";
//             //---------------------------------------------------------------//
//             //
//             layoutReadingModeLeftFirst = false;
//             break;
//         //---------------------------------------------------------------//
//         //---------------------------------------------------------------//
//         ///////////////////////////////////////////////
//         // case 999:
//         ///////////////////////////////////////////////
//         //---------------------------------------------------------------//
//         //---------------------------------------------------------------//
//         case 999:
//             // Break between center top and center center
//             elBodyMainCenterTopColBreak.style.display = "none";
//             //
//             //
//             //---------------------------------------------------------------//
//             //			 All Other at Right
//             // xx
//             //
//             //---------------------------------------------------------------//
//             //			 	 Menu1 at Top Left
//             // xx
//             //---------------------------------------------------------------//
//             // Left Body Text Alignment Breaks
//             elMenuGroup1ColBreak = StdElementGetRef(elMenuGroup1ColBreak, "MenuGroup1ColBreak", "MenuGroup1ColBreak");
//             elMenuGroup1ColBreak.style.display = "none";
//             elMenuGroup2ColBreak = StdElementGetRef(elMenuGroup2ColBreak, "MenuGroup2ColBreak", "MenuGroup2ColBreak");
//             elMenuGroup2ColBreak.style.display = "none";
//             elMenuGroup3ColBreak = StdElementGetRef(elMenuGroup3ColBreak, "MenuGroup3ColBreak", "MenuGroup3ColBreak");
//             elMenuGroup3ColBreak.style.display = "none";
//             //
//             //---------------------------------------------------------------//
//             //			 	 Menu2 at Top Right
//             // xx
//             //---------------------------------------------------------------//
//             // Right Body Text Alignment Breaks
//             elMenuGroup4ColBreak = StdElementGetRef(elMenuGroup4ColBreak, "MenuGroup4ColBreak", "MenuGroup4ColBreak");
//             elMenuGroup4ColBreak.style.display = "none";
//             elMenuGroup5ColBreak = StdElementGetRef(elMenuGroup5ColBreak, "MenuGroup5ColBreak", "MenuGroup5ColBreak");
//             elMenuGroup5ColBreak.style.display = "none";
//             elMenuGroup6ColBreak = StdElementGetRef(elMenuGroup6ColBreak, "MenuGroup6ColBreak", "MenuGroup6ColBreak");
//             elMenuGroup6ColBreak.style.display = "none";
//             //
//             elBodyMainCenterTopRight = StdElementCopy(elBodyMainCenterTopRight, elBodyMainCenterTopRightFirst, elBodyMainRight, "none");
//             elBodyMainCenterTopRightFirst = false;
//             //
//             //---------------------------------------------------------------//
//             // 	 		 	 Banner at Bottom
//             elBodyBanner = StdElementGetFromId("BodyBanner");
//             //---------------------------------------------------------------//
//             // Area Displays
//             elBodyBanner.style.display = "block";
//             elBodyBannerBottom.style.display = "none";
//             elBodyBannerTop.style.display = "none";
//             elBodyMainLeft.style.display = "none";
//             elBodyMainCenter.style.display = "block";
//             elBodyMainRight.style.display = "none";
//             // elBodyMainRightFar.style.display = "block";
//             elBodyMainCenterTop.style.display = "none";
//             elBodyMainCenterTopLeft.style.display = "none";
//             elBodyMainCenterTopRight.style.display = "none";
//             elBodyMainCenterCenter.style.display = "block";
//             elBodyMainCenterBottom.style.display = "none";
//             //---------------------------------------------------------------//
//             //
//             layoutReadingModeLeftFirst = false;
//             break;
//         //---------------------------------------------------------------//
//         //---------------------------------------------------------------//
//         ///////////////////////////////////////////////
//         // DEFAULT...
//         ///////////////////////////////////////////////
//         //---------------------------------------------------------------//
//         //---------------------------------------------------------------//
//         default:
//             break;
//     }
//     //
//     //
//     // document.recalc();
//     //
//     StdlayoutWindowResize();
//     //
//     elBodyFirst = false;
//     // return;
//     //
// } // end of STANDARD FUNCTIONS (GLOBAL / COMMON)
// MENUS
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// Function Overview
////////////////////////////////////////////////
// Menu Image Show / Hide
////////////////////////////////////////////////
// Menu Show
// 		StdMenuImgShowRange
//		StdMenuImgShowIndex
//		StdMenuImgShowStack
//		StdMenuImgToggle
//		StdMenuImgShow
// Menu Hide
// 		StdMenuImgToggleRange
//		StdMenuImgHide
//
////////////////////////////////////////////////
// Menu Hide
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// StdMenu Mouse Out function
////////////////////////////////////////////////
function StdMenuImgHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
    //  alert(oObj.name);
    //	oObj.class= "MenuThumbHide";
    //
    if (loadFirstMenuImage) { StdMenuImagesHtmlBuild(); }
    var oObjNextIndex = oObjIndex = oObjGroupImageIndex;
    // StdMenuIndexSet(oObjNextGroupIndex, oObjNext);
    // oObj = StdMenuObjectSetAll(oObjNextGroupIndex, oObjNextIndex);
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
// StdMenu Mouse Out function
////////////////////////////////////////////////
function StdMenuImgToggleRange(HideImage, HideImageLarge, startIndex, endIndex, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
    if (loadFirstMenuImage) { StdMenuImagesHtmlBuild(); }
    startObjoObjIndex = startIndex;
    endObjoObjIndex = endIndex;
    oObjIndex = startObjoObjIndex;
    if (oObjNext.style.display = "none") {
        oObjLocked = true;
        IgnoreLock = false;
        StdMenuImgShowStack(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
    } else {
        oObjLocked = false;
        IgnoreLock = true;
        while (oObjIndex < 1 + endObjoObjIndex) {
            //
            menuImageLocked[oObjGroupIndex][oObjIndex] = false;
            // Objects
            oObj = StdMenuObjectSetAll(oObjGroupIndex, oObjIndex);
            if (HideImage) {
                if (oObj.style.display = "block") {
                    StdMenuImgHide(IsImageLarge, oObjParent, oObjImage, oObj, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
                }
            }
            if (HideImageLarge) {
                if (oObjImageLarge.style.display = "block") {
                    StdMenuImgHide(IsImageLarge, oObj, oObjImageLarge, oObjLarge, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
                }
            }
            //
            oObjIndex++;
        }
    }
}
// StdMenu Toggle Menu Show Item (Mouse Down function)
////////////////////////////////////////////////
function StdMenuImgToggle(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
    if (loadFirstMenuImage) { StdMenuImagesHtmlBuild(); }
    oObjIndex = oObjGroupImageIndex;// StdMenuIndexSet(oObjGroupIndex, oObjNext);
    if (oObjNext.style.display = "none") {
        StdMenuImgShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, menuImageLocked[oObjGroupIndex][oObjIndex], IgnoreLock);
    } else {
        if (IsImageLarge) {
            // Is this wrong?
            StdMenuImgHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjGroupIndex, oObjGroupImageIndex, menuImageLocked[oObjGroupIndex][oObjIndex], true);
        } else {
            StdMenuImgHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjGroupIndex, oObjGroupImageIndex, menuImageLocked[oObjGroupIndex][oObjIndex], IgnoreLock);
        }
    }
}
// Menu Show
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// StdMenu Mouse Over function
////////////////////////////////////////////////
function StdMenuImgShowRange(startIndex, endIndex, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
    ////////////////////////////////////////////////
    // Build Menu Images Div
    if (loadFirstMenuImage) { StdMenuImagesHtmlBuild(); }
    //
    startObjoObjIndex = startIndex;
    endObjoObjIndex = oObjGroupImageIndex;// StdMenuIndexSet(oObjGroupIndex, oObjNext);
    var oObjIndex = startObjoObjIndex;
    while (oObjIndex < 1 + endObjoObjIndex) {
        //
        oObjIndex++;
    }
}
// StdMenu Mouse Over function
////////////////////////////////////////////////
function StdMenuImgShowIndex(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
    if (loadFirstMenuImage) { StdMenuImagesHtmlBuild(); }
    StdMenuImgShowStack(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
}
// StdMenu Menu Show Item and all Previous (Mouse Over function)
////////////////////////////////////////////////
function StdMenuImgShowStack(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
    if (loadFirstMenuImage) { StdMenuImagesHtmlBuild(); }
    imgZindex += 1;
    oObjNext.style.zIndex = imgZindex;
    //
    startoObjIndex = 1;
    endoObjIndex = StdMenuIndexSet(oObjGroupIndex, oObjNext);
    oObjIndex = startoObjIndex;
    while (oObjIndex < 1 + endoObjIndex) {
        // Objects
        oObj = StdMenuObjectSetAll(oObjGroupIndex, oObjIndex);
        // Set Lock State
        // if (oObjLocked = true) { menuImageLocked[oObjGroupIndex] [oObjIndex] = oObjLocked; }
        if (!IgnoreLock) { menuImageLocked[oObjGroupIndex][oObjIndex] = oObjLocked; }
        // Reveal Hidden Images
        StdMenuImgShow(IsImageLarge, oObjParent, oObjImage, oObj, iImageSize, oObjGroupIndex, oObjIndex, menuImageLocked[oObjGroupIndex][oObjIndex], true);
        oObjIndex++;
    }
}
// StdMenu Menu Show Item (Mouse Over function)
// var LastId = "";
// var LastTochedId = "";
//
////////////////////////////////////////////////
function StdMenuImgShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
    if (loadFirstMenuImage) { StdMenuImagesHtmlBuild(); }
    oObjIndex = oObjGroupImageIndex;// StdMenuIndexSet(oObjGroupIndex, oObjNext);
    LastTochedId = oObjNext.id;
    //
    DebugStart(0, "testing image show");// XXXXXXXX DEBUG XXXXXXXXX
    //
    StdWindowClientWidth();
    //
    // if (IsImageLarge) {
    // Objects
    // oObj = StdMenuObjectSetAll(oObjGroupIndex, oObjIndex);
    // Style Visibility
    // oObjLarge.style.display= "block";
    // oObjImageLarge.style.display= "block";
    // }
    if (oObjNext.style.display = "none") {
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
        // oObjNext.onfilterchange= "StdFilterSpin(" + oObjNext.id + ", filterIndexPassed)";
        // oObjNext.onmouseover   = "";
        // if (IsImageLarge) {
        // oObjNext.onmouseover += "StdMenuImgShow(true, ";
        // } else {
        // oObjNext.onmouseover += "StdMenuImgShowStack(";
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
        // + "StdFilterResetThenAnimate(" + oObjNext.id + ");";
        // onmouseover= "StdMenuImgShowStack(MenuContainerRight1, MdmImportTld4Image, MdmImportTld4, oObjImageSizeSmall, 4, false, false)"
        ////////////////////////////////////////////////
        // }
        //
        ////////////////////////////////////////////////
        // Position
        ////////////////////////////////////////////////
        //
        ////////////////////////////////////////////////
        // Parent Postion
        ////////////////////////////////////////////////
        // Get the offset width of that parent element
        StdElementPosGet(oObjNextParent);
        //
        ////////////////////////////////////////////////
        // Position Control
        // Save the Left position (of the first image in the group)
        if (oObjIndex = 1) {
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
        //
        ////////////////////////////////////////////////
        // Cascade Control
        ////////////////////////////////////////////////
        // Cascase Row and Column
        var cascadeRow = 1;
        var cascadeColumn = 1;
        cascadeColumn = oObjIndex % oObjectRowMax[oObjGroupIndex];
        cascadeRow = (oObjIndex - cascadeColumn + oObjectRowMax[oObjGroupIndex]) / oObjectRowMax[oObjGroupIndex];
        //
        ////////////////////////////////////////////////
        // Cascase Direction (Down or Up)
        var layoutCascadeDown = true;
        var layoutCascadeRight = true;
        if (menuImageOffsetTopAll[oObjGroupIndex][indexGroup] > 0) {
            layoutCascadeDown = true;
        } else { layoutCascadeDown = false; }
        ////////////////////////////////////////////////
        //
        ////////////////////////////////////////////////
        // Top Position
        ////////////////////////////////////////////////
        // Offset
        oObjNextOffsetTop = menuImageOffsetTopAll[oObjGroupIndex][indexGroup];
        oObjNextOffsetTop += menuImageOffsetTopAll[oObjGroupIndex][oObjIndex];
        ////////////////////////////////////////////////
        // Set Top
        // View Option Adjustments
        // Windowed Layout Format
        if (layoutIndex = layoutWindowed) {
            layoutCascadeDown = true;
            oObjNextOffsetTop = 30;
            // if (oObjIndex = 1) { oObjNextOffsetTop = 50 + menuImageRootPosition[oObjGroupIndex] [indexTop];
            // } else {  oObjNextOffsetLeft = 50; }
            // if (layoutIndex = layoutWindowed) { oObjNextOffsetTop = Math.abs(oObjNextOffsetTop); }
            // Set Top
            oObjNextOffsetTop += elBodyMainCenterTop.offsetHeight;
            oObjNextTop = ((oObjIndex - 1) * 50) + oObjNextOffsetTop;
            if (IsImageLarge) { oObjNextTop += 100; }
        } else {
            //  Standard Side Menu Layout Format
            // Set Top
            if (oObjIndex = 1) {
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
            //
        }
        //
        ////////////////////////////////////////////////
        // Set Style Top for menu image box
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
        //
        ////////////////////////////////////////////////
        // Left Position
        ////////////////////////////////////////////////
        //
        ////////////////////////////////////////////////
        // Cascase Direction (Right or Left)
        if (menuImageOffsetLeftAll[oObjGroupIndex][indexGroup] > 0) {
            layoutCascadeRight = true;
        } else { layoutCascadeRight = false; }
        // Offset
        oObjNextOffsetLeft = menuImageOffsetLeftAll[oObjGroupIndex][indexGroup];// Group Default Offset
        oObjNextOffsetLeft += menuImageOffsetLeftAll[oObjGroupIndex][oObjIndex];// Item specific default
        //
        ////////////////////////////////////////////////
        // View Option Adjustments
        var menuImageOffsetFirst = menuImageOffsetFirstAll[oObjGroupIndex][indexLeft];
        // Windowed Layout Format
        if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) != 1) { menuImageOffsetFirst = 0; }
        if (layoutIndex = layoutWindowed) {
            // oObjNextOffsetLeft = oObjNextOffsetLeft * 25 / Math.abs(oObjNextOffsetLeft);
            menuImageOffsetFirst = 20;
        }
        // if (layoutIndex = layoutWindowed) { oObjNextOffsetTop = Math.abs(oObjNextOffsetTop); }
        //
        ////////////////////////////////////////////////
        // Left Position Calculation
        ////////////////////////////////////////////////
        // Adjust Left Position for Page Overflow
        // Cascade Maximum exceeded (Left)
        // Cascase Direction
        if (layoutCascadeRight) {
            ////////////////////////////////////////////////
            // Left Column (Left)
            // One First Column of Row
            if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) == 1) {
                if (layoutIndex = layoutWindowed) {
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
                if (layoutIndex = layoutWindowed) { menuImageOffsetFirst = 0; }
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
                if (layoutIndex = layoutWindowed) {
                    oObjNextLeft = ((oObjGroupIndex - 1) / 6 * layoutWidth);
                } else {
                    oObjNextLeft = menuImagePositionLeft[oObjGroupIndex][oObjRootIndex]
                        - (iImageSize + 10)
                        + menuImageOffsetFirst
                        + oObjNextOffsetLeft;// (ie. Left Top)
                }
                if (layoutIndex = layoutWindowed && oObjGroupIndex > 2) { oObjNextLeft += 75; }
            } else {
                // (oObjLeft)
                if (layoutIndex = layoutWindowed) { menuImageOffsetFirst = 0; }
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
        //
        ////////////////////////////////////////////////
        // Set Left for menu image box
        oObjNext.style.posLeft = oObjNextLeft;
        //
        ////////////////////////////////////////////////
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
        //
        ////////////////////////////////////////////////
        // Set Object Style Left
        oObjNext.style.left = oObjNext.style.posLeft;
        //
        ////////////////////////////////////////////////
        // Store Postion
        menuImagePositionLeft[oObjGroupIndex][oObjIndex] = oObjNext.style.posLeft;
        menuImagePositionTop[oObjGroupIndex][oObjIndex] = oObjNext.style.posTop;
        menuImagePositionWidth[oObjGroupIndex][oObjIndex] = oObjNext.offsetWidth;
        menuImagePositionHeight[oObjGroupIndex][oObjIndex] = oObjNext.offsetHeight;
        //
        ////////////////////////////////////////////////
        // Filters
        ////////////////////////////////////////////////
        //
        ////////////////////////////////////////////////
        // Z Index
        imgZindex += 1;
        oObjNext.style.zIndex = imgZindex + oObjIndex;
        ////////////////////////////////////////////////
        // Filter Apply Command
        if (filterCheck && (moveIsOn || filterIsOn)) {
            StdMenuImageFilterPlayAgain(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjIndex, false, true);
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
        //
        ////////////////////////////////////////////////
        // Filter Item Creation
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
        if (filterCheck) {
            // oObjNextImage.style.filter = "filter:progid:DXImageTransform.Microsoft.Wheel(duration= 3);filter:progid:DXImageTransform.Microsoft.Slide(slideStyle= 'HIDE', duration= 3, bands= 1);";
            // oObjNextImage.filters[0] = "filter:progid:DXImageTransform.Microsoft.Wheel(duration= 3);";
            // oObjNextImage.filters[1] = "filter:progid:DXImageTransform.Microsoft.Slide(slideStyle= 'HIDE', duration= 3, bands= 1);";
        } else {
            // oObjNextImage.style.filter = "filter:progid:DXImageTransform.Microsoft.Wheel(duration= 3);filter:progid:DXImageTransform.Microsoft.Slide(slideStyle= 'HIDE', duration= 3, bands= 1);";
        }
        //
        ////////////////////////////////////////////////
        // Filter Play Command
        if (filterCheck) {
            // oObjNextImage.filters[0].play();
            // oObjNextImage.filters.item(0).Play();
            // oObjNextImage.filters[1].play();
            // StdFilterResetThenAnimate(oObjNext);
            // StdFilterSpin(oObjNext);
        }
        //
        ////////////////////////////////////////////////
        // end of display "none"
    } else {
        ////////////////////////////////////////////////
        // Z Index
        imgZindex += 1;
        oObjNext.style.zIndex = imgZindex + oObjIndex;
    }
    //
    ////////////////////////////////////////////////
    // Dispaly Lock vs MouseOut Disappear
    // if (oObjLocked = true) { menuImageLocked[oObjGroupIndex] [oObjIndex] = oObjLocked; }
    if (!IgnoreLock) { menuImageLocked[oObjGroupIndex][oObjIndex] = oObjLocked; }
}

script_state = "Mdm Standard Image functions loaded. (Build, Hide/Show, Toggle)";
if (debugLoadIsOn) { debugger; }
