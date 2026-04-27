// Layout Select By Index
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
// function LayoutSelectByIndexDepreciated(layoutIndexPassed) {
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
//     WindowClientWidth();
//     // layoutWidth -= 20;
//     // layoutHeight -= 20;
//     //---------------------------------------------------------------//
//     // Load Element for first pass
//     //---------------------------------------------------------------//
//     if (bodyFirst) {
//         //---------------------------------------------------------------//
//         //      Body Element Creation
//         if (loadFirstJava) {
//             // Initialize and save
//             ElementObjectCreate();
//             //
//         }
//         //---------------------------------------------------------------//
//         //      Body Main Container (contains Left Center and Right
//         if (!bodyMainContainer) { bodyMainContainer = ElementGetFromId("BodyMainContainer"); }
//         // Body Container
//         // bodyMainContainer.style.posWidth = layoutWidth;
//         // bodyMainContainer.style.width = bodyMainContainer.style.posWidth;
//         // bodyMainContainer.style.height = " 0em";
//         //---------------------------------------------------------------//
//         //			    Menu at Left
//         // bodyMainLeftOrig.innerHTML = bodyMainLeft.innerHTML;
//         bodyMainLeftOrig = ElementCopy(bodyMainLeftOrig, bodyMainLeftOrigFirst, bodyMainLeft, "none");
//         bodyMainLeftOrigFirst = false;
//         //---------------------------------------------------------------//
//         //			    Menu at Right
//         // bodyMainLeftOrig.innerHTML = bodyMainRight.innerHTML;
//         bodyMainRightOrig = ElementCopy(bodyMainRightOrig, bodyMainRightOrigFirst, bodyMainRight, "none");
//         bodyMainRightOrigFirst = false;
//         //---------------------------------------------------------------//
//         // 	 		 Banner at Center Bottom
//         bodyBanner = ElementGetRefFromElement(bodyBanner, "BodyBanner", "BodyBanner", bodyMainCenterTop);
//         bodyBannerTop = ElementGetRefFromElement(bodyBannerTop, "BodyBannerTop", "BodyBannerTop", bodyMainCenterTop);
//         bodyBannerBottom = ElementGetRefFromElement(bodyBannerBottom, "BodyBannerBottom", "BodyBannerBottom", bodyMainCenterBottom);
//         bodyBannerBottom = ElementCopy(bodyBannerBottom, bodyBannerBottomFirst, bodyBanner, "block");
//         bodyBannerBottomFirst = false;
//         //
//         //---------------------------------------------------------------//
//         //  BodyMain Center Center ColBreak
//         bodyMainCenterTopLeft = tElementBreakSet(bodyMainCenterCenter, "BodyMainCenterCenterColBreak", elementLayoutFirstPhatomData = true, "block", "visible", "both")
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
//             if (bodyMainCenterTopClass.length) {
//                 bodyMainCenterTop.className = bodyMainCenterTopClass;
//             }
//             //---------------------------------------------------------------//
//             // Final adjustments to Center Top
//             var boxHeight = 0;
//             //---------------------------------------------------------------//
//             // bodyViewToggle View Toggle and Message Area
//             bodyViewToggle = ElementGetRefFromElement(bodyViewToggle, "BodyViewToggleCenter", "BodyViewToggleCenter", bodyMainCenterTop);
//             boxHeight += bodyViewToggle.scrollHeight;
//             // Banner Should be zero, don't use..,
//             bodyBannerTop.style.display = "block";
//             boxHeight += bodyBannerTop.scrollHeight;
//             //
//             bodyMainCenterTopColBreak = ElementGetRefFromElement(bodyMainCenterTopColBreak, "BodyMainCenterTopColBreak", "BodyMainCenterTopColBreak", bodyMainCenterTop);
//             boxHeight += bodyMainCenterTopColBreak.scrollHeight;
//             //
//             // BodyViewToggle + Banner + Left/Right
//             bodyMainCenterTop.style.posHeight = boxHeight;
//             //
//             //---------------------------------------------------------------//
//             //			 Menu1 at Left
//             // Center Top Left Area Columns
//             // bodyMainLeft.style.position = "absolute";
//             // bodyMainLeft.style.left = "0%";
//             bodyMainLeft.style.width = "20%";
//             // bodyMainLeft.style.left = 0 * layoutWidth;
//             // bodyMainLeft.style.posWidth = 0.20 * layoutWidth;
//             //
//             //---------------------------------------------------------------//
//             //			 Body Center "BodyMainCenter"
//             // Break between center top and center center
//             // bodyMainCenter.style.position = "absolute";
//             // bodyMainCenter.style.top = "0%";
//             bodyMainCenter.style.left = "20%";// 0.20 * layoutWidth + 3;
//             bodyMainCenter.style.width = "60%";//0.60 * layoutWidth - 6;
//             // bodyMainCenter.style.width = bodyMainCenter.style.posWidth;
//             // bodyMainCenter.style.maxWidth = bodyMainCenter.style.posWidth;
//             bodyMainCenter.style.height = "auto";
//             //
//             layoutZindex += 1;
//             bodyMainCenter.style.zIndex = layoutZindex;
//             //
//             bodyMainCenterCenter.style.top = 0;
//             //
//             //---------------------------------------------------------------//
//             //			 Menu2 at Right
//             // Center Top Right Area Columns
//             // bodyMainRight.style.position = "absolute";
//             // bodyMainRight.style.posLeft = 0.80 * layoutWidth;
//             // bodyMainRight.style.posWidth = 0.20 * layoutWidth;
//             bodyMainRight.style.left = "80%";
//             bodyMainRight.style.width = "20%";
//             //
//             //
//             //---------------------------------------------------------------//
//             // 	 		 Banner at Top "BodyBanner"
//             //
//             //
//             //---------------------------------------------------------------//
//             // 	 		 Final adjustments
//             bodyMainContainer.style.posHeight = layoutHeight;
//             if (bodyMainContainer.style.posHeight < bodyMainLeft.clientHeight) {
//                 bodyMainContainer.style.posHeight = bodyMainLeft.clientHeight;
//             }
//             if (bodyMainContainer.style.posHeight < bodyMainCenter.clientHeight) {
//                 bodyMainContainer.style.posHeight = bodyMainCenter.clientHeight;
//             }
//             if (bodyMainContainer.style.posHeight < bodyMainRight.clientHeight) {
//                 bodyMainContainer.style.posHeight = bodyMainRight.clientHeight;
//             }
//             //
//             //---------------------------------------------------------------//
//             // Area Displays
//             bodyBanner.style.display = "block";
//             bodyBannerBottom.style.display = "none";
//             bodyBannerTop.style.display = "block";
//             bodyMainLeft.style.display = "block";
//             bodyMainCenter.style.display = "block";
//             bodyMainRight.style.display = "block";
//             // bodyMainRightFar.style.display = "none";
//             bodyMainCenterTop.style.display = "block";
//             bodyMainCenterTopLeft.style.display = "none";
//             bodyMainCenterTopRight.style.display = "none";
//             bodyMainCenterCenter.style.display = "block";
//             bodyMainCenterBottom.style.display = "none";
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
//             // bodyMainCenterTopColBreak.style.display = "none";
//             //
//             bodyMainCenter.style.left = "0%";
//             bodyMainCenter.style.top = "0%";
//             bodyMainCenter.style.width = "100%";
//             /*--
//             bodyMainCenter.style.left = layoutWidth;
//             bodyMainCenter.style.posWidth = layoutWidth;
//             --*/
//             // bodyMainCenter.style.width = bodyMainCenter.style.posWidth;
//             // bodyMainCenter.style.maxWidth = bodyMainCenter.style.posWidth;
//             bodyMainCenter.style.height = "auto";
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
//                 // bodyBannerBottom.innerHTML = bodyBanner.innerHTML;
//                 bodyBannerBottom = ElementCopy(bodyBannerBottom, bodyBannerBottomFirst, bodyBanner, "block");
//                 bodyBannerBottomFirst = false;
//             }
//             //
//             //
//             //---------------------------------------------------------------//
//             // Area Displays
//             bodyBanner.style.display = "block";
//             bodyBannerBottom.style.display = "block";
//             bodyBannerTop.style.display = "none";
//             bodyMainLeft.style.display = "none";
//             bodyMainCenter.style.display = "block";
//             bodyMainRight.style.display = "none";
//             // bodyMainRightFar.style.display = "none";
//             bodyMainCenterTop.style.display = "block";
//             bodyMainCenterTopLeft.style.display = "none";
//             bodyMainCenterTopRight.style.display = "none";
//             bodyMainCenterCenter.style.display = "block";
//             bodyMainCenterBottom.style.display = "block";
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
//                 // // bodyLayoutMenu1 BodyMenuLayout
//                 // if (false = true) {
//                 //     if (!elbodyLayoutMenu1 && bodyMainCenterTopLeft) {
//                 //         bodyLayoutMenu1 = ElementGetRefFromElement(bodyLayoutMenu1, "BodyMenuLayout1", "BodyMenuLayout1", bodyMainCenterTopLeft);
//                 //     }
//                 //     //
//                 //     TopLeftWidth = bodyLayoutMenu1.style.posWidth;
//                 //     if (TopLeftWidth = 0) { TopLeftWidth = layoutWidth / 2; }
//                 //     TopLeftWidthInner = TopLeftWidth;
//                 // }
//                 //
//                 // Process Left Column
//                 //
//                 // bodyMainLeft.innerHTML = bodyMainLeftOrig.innerHTML
//                 bodyMainLeftCopy = ElementCopy(bodyMainLeft, bodyMainLeftFirst, bodyMainLeftOrig, "block");
//                 bodyMainLeftFirst = false;
//                 //
//                 // bodyMainRight.innerHTML = bodyMainLeftOrig.innerHTML
//                 bodyMainRightCopy = ElementCopy(bodyMainRight, bodyMainRightFirst, bodyMainRightOrig, "block");
//                 bodyMainRightFirst = false;
//                 //
//             }
//             //
//             //---------------------------------------------------------------//
//             // Left Menu Column
//             // Center Top Left Area Columns
//             //
//             //---------------------------------------------------------------//
//             // Enclose Box
//             if (!bodyMainCenterTopClass.length) { bodyMainCenterTopClass = bodyMainCenterTop.className; }
//             bodyMainCenterTop.className = bodyMainCenterTop.className + " CalloutBox CalloutBorderFull";
//             //
//             if (layoutWindowedFirst) {
//                 //---------------------------------------------------------------//
//                 // Set Center Top Left Element
//                 // MainCenterTopLeft is a Reference pointer into the page
//                 // that has MainLeft HTML copied into it.
//                 bodyMainCenterTopLeft = ElementGetRef(bodyMainCenterTopLeft, "BodyMainCenterTopLeft", "BodyMainCenterTopLeft");
//                 bodyMainCenterTopLeft = ElementCopy(bodyMainCenterTopLeft, bodyMainCenterTopLeftFirst, bodyMainLeftOrig, "block");
//                 bodyMainCenterTopLeftFirst = false;
//                 //---------------------------------------------------------------//
//                 // Enclose Box
//                 bodyMainCenterTopLeft.className = bodyMainCenterTopLeft.className + " CalloutBorderFull";
//                 //---------------------------------------------------------------//
//                 // Left Menu Container
//                 // bodyMainCenterTopLeft.style.posLeft = 0;
//                 //             bodyMainCenterTopLeft.style.posWidth = TopLeftWidth - 10;
//                 // bodyMainCenterTopLeft.style.posHeight = "100%";
//                 // bodyMainCenterTopLeft.style.posHeight = 450;
//                 // bodyMainCenterTopLeft.style.maxHeight = 450;
//                 //---------------------------------------------------------------//
//                 // Left Body Column (BodyMainLeft)
//                 // bodyMenuMainLeft = ElementGetRef(bodyMenuMainLeft,"MenuMainLeft","MenuMainLeft");
//                 // Do Not Alter... bodyMenuMainLeft.style.width = "97%";
//                 //---------------------------------------------------------------//
//                 // bodyLayoutMenu1 BodyMenuLayout
//                 bodyLayoutMenu1 = ElementGetRefFromElement(bodyLayoutMenu1, "BodyMenuLayout1", "BodyMenuLayout1", bodyMainCenterTopLeft);
//                 // bodyLayoutMenu1.style.width = "100%";
//                 //---------------------------------------------------------------//
//                 // Width of Layout area (previous?)
//                 // TopLeftWidth = bodyLayoutMenu1.style.posWidth;
//                 // if (TopLeftWidth = 0) { TopLeftWidth = layoutWidth / 2; }
//                 // TopLeftWidthInner = TopLeftWidth;
//                 //---------------------------------------------------------------//
//                 // Left Outer and Inner Decorative Divs
//                 bodyMainLeftOuter = ElementGetRefFromElement(bodyMainLeftOuter, "BodyMainLeftOuter", "BodyMainLeftOuter", bodyMainCenterTopLeft);
//                 bodyMainLeftOuter.style.paddingLeft = "3%";
//                 bodyMainLeftOuter.style.width = "97%";
//                 //
//                 bodyMainLeftInner = ElementGetRefFromElement(bodyMainLeftInner, "BodyMainLeftInner", "BodyMainLeftInner", bodyMainCenterTopLeft);
//                 bodyMainLeftInner.style.paddingRight = "3%";
//                 bodyMainLeftInner.style.width = "97%";
//                 bodyMainLeftInner.style.paddingTop = 10;
//                 //---------------------------------------------------------------//
//                 // Left bodyMenuGroup1, 2, 3
//                 bodyMenuGroup1 = ElementGetRefFromElement(bodyMenuGroup1, "MenuGroup1", "MenuGroup1", bodyMainCenterTopLeft);
//                 bodyMenuGroup2 = ElementGetRefFromElement(bodyMenuGroup2, "MenuGroup2", "MenuGroup2", bodyMainCenterTopLeft);
//                 bodyMenuGroup3 = ElementGetRefFromElement(bodyMenuGroup3, "MenuGroup3", "MenuGroup3", bodyMainCenterTopLeft);
//                 //---------------------------------------------------------------//
//                 // bodyMenuGroup1
//                 bodyMenuGroup1.style.posLeft = "-7%";
//                 bodyMenuGroup1.style.maxWidth = "33%";
//                 bodyMenuGroup1.style.styleFloat = "left";
//                 if (layoutMenuHeightMax < bodyMenuGroup1.style.height) { layoutMenuHeightMax = bodyMenuGroup1.style.height; }
//                 //---------------------------------------------------------------//
//                 // bodyMenuGroup2
//                 bodyMenuGroup2.style.maxWidth = "30%";
//                 bodyMenuGroup2.style.marginLeft = "3%";
//                 bodyMenuGroup2.style.styleFloat = "left";
//                 if (layoutMenuHeightMax < bodyMenuGroup2.style.height) { layoutMenuHeightMax = bodyMenuGroup2.style.height; }
//                 //---------------------------------------------------------------//
//                 // bodyMenuGroup3
//                 bodyMenuGroup3.style.maxWidth = "30%";
//                 bodyMenuGroup3.style.marginLeft = "3%";
//                 bodyMenuGroup3.style.styleFloat = "left";
//                 if (layoutMenuHeightMax < bodyMenuGroup3.style.height) { layoutMenuHeightMax = bodyMenuGroup3.style.height; }
//                 //---------------------------------------------------------------//
//                 // elDivC21 Callout Paragraph Contents
//                 // if (true = false) {
//                 //     var elDivC21 = ElementGetRefFromElement(elDivC21, "DivC21", "DivC21", bodyMainCenterTopLeft);
//                 //     elDivC21.style.display = "none";
//                 // }
//                 //---------------------------------------------------------------//
//                 // elDivC22 Callout Paragraph Contents
//                 var elDivC22 = ElementGetRefFromElement(elDivC22, "DivC22", "DivC22", bodyMainCenterTopLeft);
//                 elDivC22.style.display = "none";
//                 //---------------------------------------------------------------//
//                 // Left Body Text Alignment Breaks
//                 var elementLayoutFirstPhatomData;
//                 bodyMainCenterTopLeft = tElementBreakSet(bodyMainCenterTopLeft, "MenuGroup1ColBreak", elementLayoutFirstPhatomData = true, "none", "hidden", "none")
//                 bodyMainCenterTopLeft = tElementBreakSet(bodyMainCenterTopLeft, "MenuGroup2ColBreak", elementLayoutFirstPhatomData = true, "none", "hidden", "none")
//                 bodyMainCenterTopLeft = tElementBreakSet(bodyMainCenterTopLeft, "MenuGroup3ColBreak", elementLayoutFirstPhatomData = true, "none", "hidden", "none")
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
//                 bodyMainCenterTopRight = ElementGetRef(bodyMainCenterTopRight, "BodyMainCenterTopRight", "BodyMainCenterTopRight");
//                 bodyMainCenterTopRight = ElementCopy(bodyMainCenterTopRight, bodyMainCenterTopRightFirst, bodyMainRightOrig, "block");
//                 // bodyMainCenterTopRightFirst = false;
//                 //
//                 //---------------------------------------------------------------//
//                 // Enclose Box
//                 bodyMainCenterTopRight.className = bodyMainCenterTopRight.className + " CalloutBorderFull";
//                 //---------------------------------------------------------------//
//                 // bodyLayoutMenu2 BodyMenuLayout
//                 bodyLayoutMenu2 = ElementGetRefFromElement(bodyLayoutMenu1, "BodyMenuLayout2", "BodyMenuLayout2", bodyMainCenterTopRight);
//                 //---------------------------------------------------------------//
//                 // Right Outer and Inner Decorative Divs
//                 bodyMainRightOuter = ElementGetRefFromElement(bodyMainLeftOuter, "BodyMainRightOuter", "BodyMainRightOuter", bodyMainCenterTopRight);
//                 bodyMainLeftOuter.style.paddingLeft = "3%";
//                 bodyMainLeftOuter.style.width = "97%";
//                 //
//                 bodyMainRightInner = ElementGetRefFromElement(bodyMainRightInner, "BodyMainRightInner", "BodyMainRightInner", bodyMainCenterTopRight);
//                 bodyMainRightInner.style.paddingRight = "3%";
//                 bodyMainRightInner.style.width = "97%";
//                 bodyMainRightInner.style.paddingTop = 10;
//                 //---------------------------------------------------------------//
//                 // Right bodyMenuGroup4, 2, 3
//                 bodyMenuGroup4 = ElementGetRefFromElement(bodyMenuGroup4, "MenuGroup4", "MenuGroup4", bodyMainCenterTopRight);
//                 bodyMenuGroup5 = ElementGetRefFromElement(bodyMenuGroup5, "MenuGroup5", "MenuGroup5", bodyMainCenterTopRight);
//                 bodyMenuGroup6 = ElementGetRefFromElement(bodyMenuGroup6, "MenuGroup6", "MenuGroup6", bodyMainCenterTopRight);
//                 //---------------------------------------------------------------//
//                 // bodyMenuGroup4
//                 bodyMenuGroup4.style.posLeft = "-7%";
//                 bodyMenuGroup4.style.maxWidth = "33%";
//                 bodyMenuGroup4.style.styleFloat = "left";
//                 if (layoutMenuHeightMax < bodyMenuGroup4.style.height) { layoutMenuHeightMax = bodyMenuGroup4.style.height; }
//                 //---------------------------------------------------------------//
//                 // bodyMenuGroup5
//                 bodyMenuGroup5.style.maxWidth = "30%";
//                 bodyMenuGroup5.style.marginLeft = "3%";
//                 bodyMenuGroup5.style.styleFloat = "left";
//                 if (layoutMenuHeightMax < bodyMenuGroup5.style.height) { layoutMenuHeightMax = bodyMenuGroup5.style.height; }
//                 //---------------------------------------------------------------//
//                 // bodyMenuGroup3
//                 bodyMenuGroup6.style.maxWidth = "30%";
//                 bodyMenuGroup6.style.marginLeft = "3%";
//                 bodyMenuGroup6.style.styleFloat = "left";
//                 if (layoutMenuHeightMax < bodyMenuGroup6.style.height) { layoutMenuHeightMax = bodyMenuGroup6.style.height; }
//                 //---------------------------------------------------------------//
//                 // Column and Float Breaks and Clear
//                 // var elementLayoutFirstPhatomData;
//                 bodyMainCenterTopRight = tElementBreakSet(bodyMainCenterTopRight, "MenuGroup4ColBreak", elementLayoutFirstPhatomData = true, "none", "hidden", "none")
//                 bodyMainCenterTopRight = tElementBreakSet(bodyMainCenterTopRight, "MenuGroup5ColBreak", elementLayoutFirstPhatomData = true, "none", "hidden", "none")
//                 bodyMainCenterTopRight = tElementBreakSet(bodyMainCenterTopRight, "MenuGroup6ColBreak", elementLayoutFirstPhatomData = true, "none", "hidden", "none")
//                 //
//             }
//             //---------------------------------------------------------------//
//             // Final adjustments to Center Top
//             boxHeight = 0;
//             //---------------------------------------------------------------//
//             // bodyViewToggle View Toggle and Message Area
//             bodyViewToggle = ElementGetRefFromElement(bodyViewToggle, "BodyViewToggleCenter", "BodyViewToggleCenter", bodyMainCenterTop);
//             boxHeight += bodyViewToggle.scrollHeight;
//             // Banner Should be zero, don't use..,
//             boxHeight += bodyBannerTop.scrollHeight;
//             //
//             if (bodyLayoutMenu2.scrollHeight > bodyLayoutMenu1.scrollHeight) {
//                 bodyLayoutMenu1.style.posHeight = bodyLayoutMenu2.scrollHeight;
//             } else {
//                 bodyLayoutMenu2.style.posHeight = bodyLayoutMenu1.scrollHeight;
//             }
//             boxHeight += bodyLayoutMenu1.style.posHeight;
//             //
//             bodyMainCenterTopColBreak = ElementGetRefFromElement(bodyMainCenterTopColBreak, "BodyMainCenterTopColBreak", "BodyMainCenterTopColBreak", bodyMainCenterTop);
//             boxHeight += bodyMainCenterTopColBreak.scrollHeight;
//             //
//             // BodyViewToggle + Banner + Left/Right
//             bodyMainCenterTop.style.posHeight = boxHeight + 40;
//             bodyMainCenterTopLeft.style.posHeight = bodyLayoutMenu1.style.posHeight + 10;
//             bodyMainCenterTopRight.style.posHeight = bodyLayoutMenu1.style.posHeight + 10;
//             //
//             //
//             //---------------------------------------------------------------//
//             //			 Body Center Columns
//             //
//             if (layoutWindowedFirst) {
//                 //
//                 // BodyMainCenter
//                 // bodyMainCenter.style.top = " 0em";
//                 // bodyMainCenter.style.left = 0 * layoutWidth;
//                 // bodyMainCenter.style.posWidth = layoutWidth;
//                 // bodyMainCenter.style.width = bodyMainCenter.style.posWidth;
//                 bodyMainCenter.style.width = "100%";
//                 // bodyMainCenter.style.maxWidth = bodyMainCenter.style.posWidth;
//                 // bodyMainCenter.style.height = "auto";
//                 //
//                 // Center Center
//                 // bodyMainCenterCenter.style.top = bodyMainCenterTop.scrollHeight + 10;
//                 // bodyMainCenterCenter.style.top = bodyMainCenterTop.style.bottom;
//                 // bodyMainCenter.style.posTop = " 0em";
//             }
//             //
//             //---------------------------------------------------------------//
//             // 	 		 Final adjustments
//             /*--
//             bodyMainContainer.style.posHeight = layoutHeight;
//             if (bodyMainContainer.style.posHeight < bodyMainLeft.clientHeight) {
//                    bodyMainContainer.style.posHeight = bodyMainLeft.clientHeight;
//             }
//             if (bodyMainContainer.style.posHeight < bodyMainCenter.clientHeight) {
//                    bodyMainContainer.style.posHeight = bodyMainCenter.clientHeight;
//             }
//             if (bodyMainContainer.style.posHeight < bodyMainRight.clientHeight) {
//                    bodyMainContainer.style.posHeight = bodyMainRight.clientHeight;
//             }
//             --*/
//             //---------------------------------------------------------------//
//             // Area Displays
//             bodyBanner.style.display = "block";
//             bodyBannerBottom.style.display = "block";
//             bodyBannerTop.style.display = "none";
//             bodyMainLeft.style.display = "none";// none
//             bodyMainCenter.style.display = "block";
//             bodyMainRight.style.display = "none";// none
//             // bodyMainRightFar.style.display = "none";
//             bodyMainCenterTop.style.display = "block";
//             bodyMainCenterTopLeft.style.display = "block";
//             bodyMainCenterTopRight.style.display = "block";
//             bodyMainCenterCenter.style.display = "block";
//             bodyMainCenterBottom.style.display = "block";
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
//             // bodyMainCenter.style.position = "absolute";
//             bodyMainCenter.style.top = "0%";
//             bodyMainCenter.style.left = 3;
//             bodyMainCenter.style.posWidth = layoutWidth - 6;
//             bodyMainCenter.style.width = bodyMainCenter.style.posWidth;
//             // bodyMainCenter.style.maxWidth = bodyMainCenter.style.posWidth;
//             bodyMainCenter.style.height = "auto";
//             // bodyMainCenterCenter.style.top = "auto"
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
//             bodyBanner.style.display = "block";
//             bodyBannerBottom.style.display = "none";
//             bodyBannerTop.style.display = "none";
//             bodyMainLeft.style.display = "none";
//             bodyMainCenter.style.display = "block";
//             bodyMainRight.style.display = "none";
//             // bodyMainRightFar.style.display = "none";
//             bodyMainCenterTop.style.display = "block";
//             bodyMainCenterTopLeft.style.display = "none";
//             bodyMainCenterTopRight.style.display = "none";
//             bodyMainCenterCenter.style.display = "block";
//             bodyMainCenterBottom.style.display = "none";
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
//             bodyMainCenterTopColBreak.style.display = "none";
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
//             bodyMenuGroup1ColBreak = ElementGetRef(bodyMenuGroup1ColBreak, "MenuGroup1ColBreak", "MenuGroup1ColBreak");
//             bodyMenuGroup1ColBreak.style.display = "none";
//             bodyMenuGroup2ColBreak = ElementGetRef(bodyMenuGroup2ColBreak, "MenuGroup2ColBreak", "MenuGroup2ColBreak");
//             bodyMenuGroup2ColBreak.style.display = "none";
//             bodyMenuGroup3ColBreak = ElementGetRef(bodyMenuGroup3ColBreak, "MenuGroup3ColBreak", "MenuGroup3ColBreak");
//             bodyMenuGroup3ColBreak.style.display = "none";
//             //
//             //---------------------------------------------------------------//
//             //			 	 Menu2 at Top Right
//             // xx
//             //---------------------------------------------------------------//
//             // Right Body Text Alignment Breaks
//             bodyMenuGroup4ColBreak = ElementGetRef(bodyMenuGroup4ColBreak, "MenuGroup4ColBreak", "MenuGroup4ColBreak");
//             bodyMenuGroup4ColBreak.style.display = "none";
//             bodyMenuGroup5ColBreak = ElementGetRef(bodyMenuGroup5ColBreak, "MenuGroup5ColBreak", "MenuGroup5ColBreak");
//             bodyMenuGroup5ColBreak.style.display = "none";
//             bodyMenuGroup6ColBreak = ElementGetRef(bodyMenuGroup6ColBreak, "MenuGroup6ColBreak", "MenuGroup6ColBreak");
//             bodyMenuGroup6ColBreak.style.display = "none";
//             //
//             bodyMainCenterTopRight = ElementCopy(bodyMainCenterTopRight, bodyMainCenterTopRightFirst, bodyMainRight, "none");
//             bodyMainCenterTopRightFirst = false;
//             //
//             //---------------------------------------------------------------//
//             // 	 		 	 Banner at Bottom
//             bodyBanner = ElementGetFromId("BodyBanner");
//             //---------------------------------------------------------------//
//             // Area Displays
//             bodyBanner.style.display = "block";
//             bodyBannerBottom.style.display = "none";
//             bodyBannerTop.style.display = "none";
//             bodyMainLeft.style.display = "none";
//             bodyMainCenter.style.display = "block";
//             bodyMainRight.style.display = "none";
//             // bodyMainRightFar.style.display = "block";
//             bodyMainCenterTop.style.display = "none";
//             bodyMainCenterTopLeft.style.display = "none";
//             bodyMainCenterTopRight.style.display = "none";
//             bodyMainCenterCenter.style.display = "block";
//             bodyMainCenterBottom.style.display = "none";
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
//     WindowLayoutResize();
//     //
//     bodyFirst = false;
//     // return;
//     //
// } // end of STANDARD FUNCTIONS (GLOBAL / COMMON)
