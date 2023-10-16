// ...................................... //
// Layout Block, Callout and Document (BodyMainCenter) Width
//
///////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// Global Layout Variables
////////////////////////////////////////////////
// Variables
// var layoutWidth;
// var layoutHeight;
//
// var layoutMenuSizeMax = 0;
// //
// var layoutZindex = 20;
// //
// // This variable is the multiplier that will reflect font-size;
// // Using a 1em font is the default (1em = 1.0 EmRation)
// // refered to as medium size on most browsers.
// // The layoutWidth(s) have to scale up proportionally
// // with text size when adjusting the callouts.
// // A larger font size will disturb the floating by
// // pushing down the content that wont fit beside the
// // callout.
// var layoutEmRation = 1.0;
// //
// var layoutMenuDocWidthWide = 900;
// //
// var layoutBlockCol3Min = 1000;
// var layoutBlockCol2Min = 500;
// var layoutBlockCol1Min = 'float';
// //
// var layoutBlockWidthWide = '33%';
// var layoutBlockWidthStandard = '47%';
// var layoutBlockWidthNarrow = '98%';
// //
// var calloutLayoutBlockWidthPxWide = 600;
// var calloutLayoutBlockWidthPxStandard = 350;
// var calloutLayoutBlockWidthPxNarrow = 150;
// //
// var calloutLayoutBlockWidthWide = '33%';
// var calloutLayoutBlockWidthStandard = '45%';
// var calloutLayoutBlockWidthNarrow = '82%';
// //
// var layoutBlockWidth;
// var calloutLayoutBlockWidth;
// //
// var bodyBlockCn;
// //
// var layoutBlockWidthDefault = 250;
// var bodyBlockWidth;
var layoutStandard = 1;
var layoutReadingMode = 2;
var layoutWindowed = 3;
var layoutReadingModeLeft = 4;

var layoutIndex = layoutStandard;
var layoutIndexMax = 4;
var layoutRefreshCn = layoutStandard;
var layoutRefreshCnLast = layoutStandard;

var layoutStandardFirst = true;
var layoutReadingModeFirst = true;
var layoutWindowedFirst = true;
var layoutReadingModeLeftFirst = true;
//

// Layout
// ------------------------------------------------------------------------------------- _//
// Layout Next
function LayoutNext(layoutIndexPassed) {
    if (layoutIndexPassed > 0) {
        layoutRefreshCn = layoutIndexPassed;
    } else {
        layoutRefreshCn += 1;
    }
	// todo maybe limit the number?
    if (layoutRefreshCn > layoutIndexMax) { layoutRefreshCn = 1; }
    LayoutRefresh(layoutRefreshCn);
}
// Check Layout
function LayoutCheck(layoutPrefered) {
    return;
}
// Layout Refresh
function LayoutRefresh(layoutIndexPassed) {
    if (layoutIndexPassed != layoutRefreshCnLast) {
        // Choose Standard Layout
        layoutIndex = layoutIndexPassed;
        LayoutSelectByIndex(layoutIndex);
        layoutRefreshCnLast = layoutRefreshCn;
    }
}
// Section Layout Management function (s)
// Body ViewToggle - Layout Next
function LayoutFontSize(zoomCommandPassed) {
	switch (zoomCommandPassed) {
		case 'BodyFontZoomIn':
			break;
		case 'BodyFontZoomIn':
			break;
		case 'Toggle':
		default:
			break;
	}
}
// Body Layout Selection
function LayoutSelectByIndex(layoutIndexPassed) {
	//
	// Layouts:
	// var layoutStandard = 1;
	// var layoutReadingMode = 2;
	// var layoutWindowed = 3;
	// var layoutReadingModeLeft = 4;
	//
	// Pointers:
	layoutIndex = layoutIndexPassed;
	layoutZindex = 20;
	//
	// Window Width
	WindowClientWidth();
	// layoutMenuSizeHorzMax = 0;
	if (browserIsFF) {
		// debug-instance-off LayoutSelectByIndex;
	}
	//
	var elementLayoutFirstPhatomData;
	var boxHeight;
	//
	// layoutWidth -= 20;
	// layoutHeight -= 20;
	//
	//............................................................---//
	// Load Element for first pass
	//............................................................---//
	if (bodyFirst) {
		//............................................................---//
		//      Body Element Creation
		if (loadFirstJava) { ElementObjectCreate(); }
		//............................................................---//
		//      Body Main Container (contains Left Center and Right
		if (!bodyMainContainer) { bodyMainContainer = ElementGetFromId('BodyMainContainer'); }
		// Body Container
		//............................................................---//
		//			    Menu at Left
		// bodyMainLeftOrig.innerHTML = bodyMainLeft.innerHTML;
		bodyMainLeftOrig = ElementCopy(bodyMainLeftOrig, bodyMainLeftOrigFirst, bodyMainLeft, 'none');
		bodyMainLeftOrigFirst = false;
		//............................................................---//
		//			    Menu at Right
		// bodyMainLeftOrig.innerHTML = bodyMainRight.innerHTML;
		bodyMainRightOrig = ElementCopy(bodyMainRightOrig, bodyMainRightOrigFirst, bodyMainRight, 'none');
		bodyMainRightOrigFirst = false;
		//............................................................---//
		// 	 		 Banner at Center Bottom
		bodyBanner = ElementGetRefFromElement(bodyBanner, 'BodyBanner', 'BodyBanner', bodyMainCenterTop);
		bodyBannerTop = ElementGetRefFromElement(bodyBannerTop, 'BodyBannerTop', 'BodyBannerTop', bodyMainCenterTop);
		bodyBannerBottom = ElementGetRefFromElement(bodyBannerBottom, 'BodyBannerBottom', 'BodyBannerBottom', bodyMainCenterBottom);
		bodyBannerBottom = ElementCopy(bodyBannerBottom, bodyBannerBottomFirst, bodyBanner, 'block');
		bodyBannerBottomFirst = false;
		//
		//............................................................---//
		//  BodyMain Center Center ColBreak
		bodyMainCenterTopLeft = ElementBreakSet(bodyMainCenterCenter, 'BodyMainCenterCenterColBreak', elementLayoutFirstPhatomData = true, 'block', 'visible', 'both')
		//
	}
	//
	//
	//............................................................---//
	//............................................................---//
	switch (layoutIndexPassed) {
		//............................................................---//
		//............................................................---//
		///////////////////////////////////////////////
		// 1 Standard
		///////////////////////////////////////////////
		//............................................................---//
		//............................................................---//
		case layoutStandard:
			//............................................................---//
			// Enclose Box
			if (BodyMainCenterTopClass.length) {
				bodyMainCenterTop.className = BodyMainCenterTopClass;
			}
			//............................................................---//
			// Final adjustments to Center Top
			boxHeight = 0;
			//............................................................---//
			// bodyViewToggle View Toggle and Message Area
			//
			// Box
			boxHeight += bodyViewToggleContainer.scrollHeight;
			// Banner Should be zero, don't use..,
			bodyBannerTop.style.display = 'block';
			boxHeight += bodyBannerTop.scrollHeight;
			//
			bodyTitleTopLeft = ElementGetRefFromElement(bodyTitleTopLeft, 'TitleTopLeft', 'TitleTopLeft', bodyMainCenterTop);
			boxHeight += bodyTitleTopLeft.scrollHeight;
			//
			bodyMainCenterTopColBreak = ElementGetRefFromElement(bodyMainCenterTopColBreak, 'BodyMainCenterTopColBreak', 'BodyMainCenterTopColBreak', bodyMainCenterTop);
			boxHeight += bodyMainCenterTopColBreak.scrollHeight;
			//
			// BodyViewToggle + Banner + Left/Right
			// bodyMainCenterTop.style.height = boxHeight;
			bodyMainCenterTop.style.height = 'auto';
			//............................................................---//
			//			 Menu1 at Left
			bodyMainLeft.style.width = '20%';
			// bodyMainLeft.style.height = 'auto';
			//............................................................---//
			//			 Body Center 'BodyMainCenter'
			if (layoutUseAbsolute) { bodyMainCenter.style.left = '20%'; } // 0.20 * layoutWidth + 3;
			bodyMainCenter.style.width = '60%';//0.60 * layoutWidth - 6;
			// bodyMainCenter.style.height = '100%';
			// bodyMainCenter.style.height = '100%';
			//
			layoutZindex += 1;
			bodyMainCenter.style.zIndex = layoutZindex;
			//
			bodyMainCenterCenter.style.top = 0;
			//............................................................---//
			//			 Menu2 at Right
			if (layoutUseAbsolute) { bodyMainRight.style.left = '80%'; }
			bodyMainRight.style.width = '20%';
			// bodyMainRight.style.height = 'auto';
			//............................................................---//
			// 	 		 Banner at Top 'BodyBanner'
			//............................................................---//
			// 	 		 Final adjustments
			// this code should also adjust oversized views
			/* --
			bodyMainContainer.style.height = layoutHeight;
			if (bodyMainContainer.style.height < ElementHeightMaxGet(true, true, bodyMainLeft)) {
				 bodyMainContainer.style.height = ElementHeightMaxGet(true, true, bodyMainLeft);
		  }
		  if (bodyMainContainer.style.height < ElementHeightMaxGet(true, true, bodyMainCenter)) {
				 bodyMainContainer.style.height = ElementHeightMaxGet(true, true, bodyMainCenter);
		  }
		  if (bodyMainContainer.style.height < ElementHeightMaxGet(true, true, bodyMainRight)) {
				 bodyMainContainer.style.height = ElementHeightMaxGet(true, true, bodyMainRight);
		  }
		  -- */
			// bodyMainContainer.style.height = 'auto';
			//............................................................---//
			// Area Displays
			bodyBanner.style.display = 'block';
			bodyBannerBottom.style.display = 'none';
			bodyBannerTop.style.display = 'block';
			// bodyViewToggle View Toggle and Message Area
			// bodyViewToggleContainer.style.display = 'none';
			bodyViewToggleContainerLeft.style.display = 'block';
			bodyViewToggleContainerCenter.style.display = 'none';
			//
			// Console
			//
			bodyMainLeft.style.display = 'block';
			bodyMainCenter.style.display = 'block';
			bodyMainRight.style.display = 'block';
			// bodyMainRightFar.style.display = 'none';
			bodyMainCenterTop.style.display = 'block';
			bodyMainCenterTopLeft.style.display = 'none';
			bodyMainCenterTopRight.style.display = 'none';
			bodyMainCenterCenter.style.display = 'block';
			bodyMainCenterBottom.style.display = 'none';
			//............................................................---//
			//
			layoutStandardFirst = false;
			//
			break;
		//............................................................---//
		//............................................................---//
		///////////////////////////////////////////////
		// 2 Reading Mode Hide
		///////////////////////////////////////////////
		//............................................................---//
		//............................................................---//
		case layoutReadingMode:
			//............................................................---//
			//			 Body Center
			// Break between center top and center center
			// if (layoutUseAbsolute) { bodyMainCenter.style.left = '0%'; }
			// bodyMainCenter.style.top = '0%';
			// bodyMainCenter.style.width = '100%';
			// bodyMainCenter.style.height = '100%';
			//............................................................---//
			//			 Hidden Menu1 at Left
			// Center Top Left Area Columns
			//............................................................---//
			//			 Hidden Menu2 at Right
			// Center Top Right Area Columns
			//............................................................---//
			// Area Displays
			//............................................................---//
			// Hidden Banner at Bottom
			if (!layoutReadingModeFirst) {
				bodyBannerBottom = ElementCopy(bodyBannerBottom, bodyBannerBottomFirst, bodyBanner, 'block');
				bodyBannerBottomFirst = false;
			}
			//
			bodyBanner.style.display = 'block';
			bodyBannerBottom.style.display = 'block';
			bodyBannerTop.style.display = 'none';
			//
			//............................................................---//
			// bodyViewToggle View Toggle and Message Area
			// bodyViewToggleContainer.style.display = 'none';
			bodyViewToggleContainerLeft.style.display = 'none';
			bodyViewToggleContainerCenter.style.display = 'block';
			//
			// Console
			//
			// Left, Center, and Right
			bodyMainLeft.style.display = 'none';
			bodyMainCenter.style.display = 'block';
			bodyMainRight.style.display = 'none';
			// bodyMainRightFar.style.display = 'none';
			//
			// Center Top
			bodyMainCenterTop.style.display = 'block';
			bodyMainCenterTopLeft.style.display = 'none';
			bodyMainCenterTopRight.style.display = 'none';
			// Center Center
			bodyMainCenterCenter.style.display = 'block';
			// Center Bottom
			bodyMainCenterBottom.style.display = 'block';
			//............................................................---//
			//
			layoutReadingModeFirst = false;
			//
			break;
		//............................................................---//
		//............................................................---//
		///////////////////////////////////////////////
		// 3 Windowed
		///////////////////////////////////////////////
		//............................................................---//
		//............................................................---//
		case layoutWindowed:
			//
			//............................................................---//
			//			 Menu1 at Center Top Left
			if (layoutWindowedFirst) {
				//
				var TopLeftWidth = 0;
				var TopLeftWidthInner = 0;
				// BodyMenuLayout
				//............................................................---//
				// bodyLayoutMenu1 BodyMenuLayout
				if (false == true) {
					if (!elbodyLayoutMenu1 && bodyMainCenterTopLeft) {
						bodyLayoutMenu1 = ElementGetRefFromElement(bodyLayoutMenu1, 'BodyMenuLayout1', 'BodyMenuLayout1', bodyMainCenterTopLeft);
					}
					//
					TopLeftWidth = bodyLayoutMenu1.style.posWidth;
					if (TopLeftWidth = 0) { TopLeftWidth = layoutWidth / 2; }
					TopLeftWidthInner = TopLeftWidth;
				}
				//
				// Process Left Column
				//
				// bodyMainLeft.innerHTML = bodyMainLeftOrig.innerHTML
				bodyMainLeftCopy = ElementCopy(bodyMainLeft, bodyMainLeftFirst, bodyMainLeftOrig, 'block');
				bodyMainLeftFirst = false;
				//
				// bodyMainRight.innerHTML = bodyMainLeftOrig.innerHTML
				bodyMainRightCopy = ElementCopy(bodyMainRight, bodyMainRightFirst, bodyMainRightOrig, 'block');
				bodyMainRightFirst = false;
				// end of layoutWindowFirst
			}
			//
			//............................................................---//
			// Left Menu Column
			// Center Top Left Area Columns
			//
			//............................................................---//
			// Enclose Box
			if (!BodyMainCenterTopClass.length) { BodyMainCenterTopClass = bodyMainCenterTop.className; }
			bodyMainCenterTop.className = bodyMainCenterTop.className + ' CalloutBoxBg CalloutBorderFull';
			bodyMainCenterTop.width = '100%';
			//
			// if (true == true) {
			if (layoutWindowedFirst) {
				//............................................................---//
				// Set Center Top Left Element
				// MainCenterTopLeft is a Reference pointer into the page
				// that has MainLeft HTML copied into it.
				bodyMainCenterTopLeft = ElementGetRef(bodyMainCenterTopLeft, 'BodyMainCenterTopLeft', 'BodyMainCenterTopLeft');
				bodyMainCenterTopLeft = ElementCopy(bodyMainCenterTopLeft, bodyMainCenterTopLeftFirst, bodyMainLeftOrig, 'block');
				bodyMainCenterTopLeftFirst = false;
				//............................................................---//
				// Enclose Box
				bodyMainCenterTopLeft.className = bodyMainCenterTopLeft.className + ' CalloutBorderFull';
				//............................................................---//
				// Left Menu Container
				//............................................................---//
				// Left Body Column (BodyMainLeft)
				//............................................................---//
				// bodyLayoutMenu1 BodyMenuLayout
				bodyLayoutMenu1 = ElementGetRefFromElement(bodyLayoutMenu1, 'BodyMenuLayout1', 'BodyMenuLayout1', bodyMainCenterTopLeft);
				//............................................................---//
				// Width of Layout area (previous?)
				//............................................................---//
				// Left Outer and Inner Decorative Divs
				bodyMainLeftOuter = ElementGetRefFromElement(bodyMainLeftOuter, 'BodyMainLeftOuter', 'BodyMainLeftOuter', bodyMainCenterTopLeft);
				bodyMainLeftOuter.style.paddingLeft = '3%';
				bodyMainLeftOuter.style.width = '97%';
				//
				bodyMainLeftInner = ElementGetRefFromElement(bodyMainLeftInner, 'BodyMainLeftInner', 'BodyMainLeftInner', bodyMainCenterTopLeft);
				bodyMainLeftInner.style.paddingRight = '3%';
				bodyMainLeftInner.style.width = '97%';
				bodyMainLeftInner.style.paddingTop = '1.0em';
				//............................................................---//
				//
				// ElementGetFromElement(bodyMenuGroup1, 'MenuGroup1', 'MenuGroup1',
				// 		bodyMainCenterTopLeft, DoFindSet, bodyMenuGroup1)
				// ElementGetFromElement(bodyMenuGroup[2], 'MenuGroup2', 'MenuGroup2',
				// 		bodyMainCenterTopLeft, DoFindSet, bodyMenuGroup[2])
				// ElementGetFromElement(bodyMenuGroup[3], 'MenuGroup3', 'MenuGroup3',
				// 		bodyMainCenterTopLeft, DoFindSet, bodyMenuGroup[3])
				//
				//............................................................---//
				// Left bodyMenuGroup1, 2, 3
				bodyMenuGroup1 = ElementGetRefFromElement(bodyMenuGroup1, 'MenuGroup1', 'MenuGroup1', bodyMainCenterTopLeft);
				bodyMenuGroup[2] = ElementGetRefFromElement(bodyMenuGroup[2], 'MenuGroup2', 'MenuGroup2', bodyMainCenterTopLeft);
				bodyMenuGroup[3] = ElementGetRefFromElement(bodyMenuGroup[3], 'MenuGroup3', 'MenuGroup3', bodyMainCenterTopLeft);
				//
				WindowContainerSizeGetMenu(bodyMainCenterTopLeft);
				//
				//............................................................---//
				// bodyMenuGroup1
				bodyMenuGroup1.style.position = 'absolute';
				bodyMenuGroup1.style.top = ' 0em';
				bodyMenuGroup1.style.left = '3%';
				bodyMenuGroup1.style.maxWidth = '30%';
				// bodyMenuGroup1.style.styleFloat = 'left';
				//
				//............................................................---//
				// bodyMenuGroup[2]
				bodyMenuGroup[2].style.position = 'absolute';
				bodyMenuGroup[2].style.top = '1.0em';
				bodyMenuGroup[2].style.left = '35%';
				bodyMenuGroup[2].style.maxWidth = '30%';
				// bodyMenuGroup[2].style.marginLeft = '3%';
				// bodyMenuGroup[2].style.styleFloat = 'left';
				//............................................................---//
				// bodyMenuGroup[3]
				bodyMenuGroup[3].style.position = 'absolute';
				bodyMenuGroup[3].style.top = '1.0em';
				bodyMenuGroup[3].style.left = '67%';
				bodyMenuGroup[3].style.maxWidth = '30%';
				// bodyMenuGroup[3].style.marginLeft = '3%';
				// bodyMenuGroup[3].style.styleFloat = 'left';
				//............................................................---//
				//
				// ElementGetFromElement(bodyMenuGroup1, 'MenuGroup1', 'MenuGroup1',
				// 		bodyMainCenterTopLeft, DoFindSet, bodyMenuGroup1)
				// ElementGetFromElement(bodyMenuGroup[2], 'MenuGroup2', 'MenuGroup2',
				// 		bodyMainCenterTopLeft, DoFindSet, bodyMenuGroup[2])
				// ElementGetFromElement(bodyMenuGroup[3], 'MenuGroup3', 'MenuGroup3',
				// 		bodyMainCenterTopLeft, DoFindSet, bodyMenuGroup[3])
				//
				//............................................................---//
				// elDivC21 Callout Paragraph Contents
				// if (true == false) {
				// 	var elDivC21 = ElementGetRefFromElement(elDivC21, 'DivC21', 'DivC21', bodyMainCenterTopLeft);
				// 	if (elDivC21) { elDivC21.style.display = 'none'; }
				// }
				//............................................................---//
				// elDivC22 Callout Paragraph Contents
				var elDivC22 = ElementGetRefFromElement(elDivC22, 'DivC22', 'DivC22', bodyMainCenterTopLeft);
				if (elDivC22) { elDivC22.style.display = 'none'; }
				//............................................................---//
				// Left Body Text Alignment Breaks
				bodyMainCenterTopLeft = ElementBreakSet(bodyMainCenterTopLeft, 'MenuGroup1ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
				bodyMainCenterTopLeft = ElementBreakSet(bodyMainCenterTopLeft, 'MenuGroup2ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
				bodyMainCenterTopLeft = ElementBreakSet(bodyMainCenterTopLeft, 'MenuGroup3ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
				// end of layoutWindowFirst
			}
			//
			//............................................................---//
			//			 Menu2 at Center Top Right
			// Right Menu Column
			// Center Top Right Area Columns
			// if (true == true) {
			if (layoutWindowedFirst) {
				// Right Body Text Alignment Breaks
				// Set (Copy To) Top Left Element
				bodyMainCenterTopRight = ElementGetRef(bodyMainCenterTopRight, 'BodyMainCenterTopRight', 'BodyMainCenterTopRight');
				bodyMainCenterTopRight = ElementCopy(bodyMainCenterTopRight, bodyMainCenterTopRightFirst, bodyMainRightOrig, 'block');
				//............................................................---//
				// Enclose Box
				bodyMainCenterTopRight.className = bodyMainCenterTopRight.className + ' CalloutBorderFull';
				//............................................................---//
				// bodyLayoutMenu2 BodyMenuLayout
				bodyLayoutMenu2 = ElementGetRefFromElement(bodyLayoutMenu2, 'BodyMenuLayout2', 'BodyMenuLayout2', bodyMainCenterTopRight);
				//............................................................---//
				// Right Outer and Inner Decorative Divs
				bodyMainRightOuter = ElementGetRefFromElement(bodyMainLeftOuter, 'BodyMainRightOuter', 'BodyMainRightOuter', bodyMainCenterTopRight);
				bodyMainLeftOuter.style.paddingLeft = '3%';
				bodyMainLeftOuter.style.width = '97%';
				//
				bodyMainRightInner = ElementGetRefFromElement(bodyMainRightInner, 'BodyMainRightInner', 'BodyMainRightInner', bodyMainCenterTopRight);
				bodyMainRightInner.style.paddingRight = '3%';
				bodyMainRightInner.style.width = '97%';
				bodyMainRightInner.style.paddingTop = '1.0em';
				//............................................................---//
				var elementHeight = 0;
				layoutMenuSizeHorzMax = 0;
				// Right bodyMenuGroup 4(1), 5(2), 6(3)
				bodyMenuGroup4 = ElementGetRefFromElement(bodyMenuGroup4, 'MenuGroup4', 'MenuGroup4', bodyMainCenterTopRight);
				bodyMenuGroup5 = ElementGetRefFromElement(bodyMenuGroup5, 'MenuGroup5', 'MenuGroup5', bodyMainCenterTopRight);
				bodyMenuGroup6 = ElementGetRefFromElement(bodyMenuGroup6, 'MenuGroup6', 'MenuGroup6', bodyMainCenterTopRight);
				//............................................................---//
				// bodyMenuGroup4
				bodyMenuGroup4.style.position = 'absolute';
				bodyMenuGroup4.style.top = '1.0em';
				bodyMenuGroup4.style.left = '3%';
				bodyMenuGroup4.style.maxWidth = '30%';
				// bodyMenuGroup4.style.styleFloat = 'left';
				elementHeight = ElementHeightMaxGet(true, true, bodyMenuGroup4);
				if (layoutMenuSizeHorzMax < elementHeight) { layoutMenuSizeHorzMax = elementHeight; }
				//............................................................---//
				// bodyMenuGroup5
				bodyMenuGroup5.style.position = 'absolute';
				bodyMenuGroup5.style.top = '1.0em';
				bodyMenuGroup5.style.left = '35%';
				bodyMenuGroup5.style.maxWidth = '30%';
				// bodyMenuGroup5.style.marginLeft = '3%';
				// bodyMenuGroup5.style.styleFloat = 'left';
				elementHeight = ElementHeightMaxGet(true, true, bodyMenuGroup5);
				if (layoutMenuSizeHorzMax < elementHeight) { layoutMenuSizeHorzMax = elementHeight; }
				//............................................................---//
				// bodyMenuGroup[3]
				bodyMenuGroup6.style.position = 'absolute';
				bodyMenuGroup6.style.top = '1.0em';
				bodyMenuGroup6.style.left = '67%';
				bodyMenuGroup6.style.maxWidth = '30%';
				// bodyMenuGroup6.style.marginLeft = '3%';
				// bodyMenuGroup6.style.styleFloat = 'left';
				elementHeight = ElementHeightMaxGet(true, true, bodyMenuGroup6);
				if (layoutMenuSizeHorzMax < elementHeight) { layoutMenuSizeHorzMax = elementHeight; }
				//............................................................---//
				// Column and Float Breaks and Clear
				bodyMainCenterTopRight = ElementBreakSet(bodyMainCenterTopRight, 'MenuGroup4ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
				bodyMainCenterTopRight = ElementBreakSet(bodyMainCenterTopRight, 'MenuGroup5ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
				bodyMainCenterTopRight = ElementBreakSet(bodyMainCenterTopRight, 'MenuGroup6ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
				// end of layoutWindowFirst
			}
			//............................................................---//
			// Final adjustments to Center Top
			// BodyViewToggle + Banner + Left/Right
			boxHeight = 0;
			//
			// bodyViewToggle View Toggle and Message Area
			bodyViewToggleContainerCenter.style.display = 'none';
			//
			boxHeight += ElementHeightMaxGet(true, true, bodyViewToggleContainer);
			// Banner Should be zero, don't use..,
			boxHeight += ElementHeightMaxGet(true, true, bodyBannerTop);
			//
			// Height of left and right menu containers
			// WindowContainerSizeGetAll();
			//
			// if (bodyLayoutMenu2Height > bodyLayoutMenu1Height)  {
			// bodyLayoutMenu1.style.height = bodyLayoutMenu2Height + 'px';
			// } else {
			// bodyLayoutMenu2.style.height = bodyLayoutMenu1Height + 'px';
			// }
			// Set Left and Right Container Heights
			// bodyMainCenterTopLeft.style.height = (ElementHeightMaxGet(true, true, bodyLayoutMenu1) + 20) + 'px';
			// bodyMainCenterTopRight.style.height = (ElementHeightMaxGet(true, true, bodyLayoutMenu2) + 20) + 'px';
			//
			if (layoutMenuSizeHorzMax < 50) {
				// ERROR HERE //
				//
				var X; var Y;
				X = ElementHeightMaxGet(true, true, bodyMenuGroup1);
				X += boxHeight;
				Y = ElementHeightMaxGet(true, true, bodyMenuGroup4);
				if (X > Y) { layoutMenuSizeHorzMax = X; } else { layoutMenuSizeHorzMax = Y; }
				//
				X = ElementHeightMaxGet(true, true, bodyMainCenterTopLeft);
				Y = ElementHeightMaxGet(true, true, bodyMainCenterTopRight);
				if (X > Y) { boxHeight = X; } else { boxHeight = Y; }
				// boxHeight += ElementHeightMaxGet(true, true, BodyViewToggleContainerCenter);
				// boxHeight += ElementHeightMaxGet(true, true, bodyMainCenterTopColBreak);
			}
			// Set Left and Right Container Heights
			bodyMainCenterTopLeft.style.height = (layoutMenuSizeHorzMax + 50) + 'px';
			// bodyMainCenterTopLeft.style.height = '100%';
			// bodyMainCenterTopLeft.style.height = 'auto';
			bodyMainCenterTopRight.style.height = (layoutMenuSizeHorzMax + 50) + 'px';
			// bodyMainCenterTopRight.style.height = '100%';
			//
			bodyMainCenterTopColBreak = ElementGetRefFromElement(bodyMainCenterTopColBreak, 'BodyMainCenterTopColBreak', 'BodyMainCenterTopColBreak', bodyMainCenterTop);
			//
			bodyMainCenterTop.style.height = (layoutMenuSizeHorzMax + 75) + 'px';// boxHeight
			// bodyMainCenterTop.style.height = '100%';
			//
			//............................................................---//
			bodyMainCenterCenter.style.top = (layoutMenuSizeHorzMax + 100) + 'px';// adjust by boxHeight
			//
			//
			//............................................................---//
			//			 Body Center Columns
			if (layoutWindowedFirst) {
				// BodyMainCenter
				bodyMainCenter.style.width = '100%';
				// Center Center
			}
			//
			//............................................................---//
			// 	 		 Final adjustments
			//............................................................---//
			// Area Displays
			bodyBanner.style.display = 'block';
			bodyBannerBottom.style.display = 'block';
			bodyBannerTop.style.display = 'none';
			bodyMainLeft.style.display = 'none';// none
			bodyMainCenter.style.display = 'block';
			bodyMainRight.style.display = 'none';// none
			// bodyMainRightFar.style.display = 'none';
			bodyMainCenterTop.style.display = 'block';
			bodyMainCenterTopLeft.style.display = 'block';
			bodyMainCenterTopRight.style.display = 'block';
			bodyMainCenterCenter.style.display = 'block';
			bodyMainCenterBottom.style.display = 'block';
			//............................................................---//
			//
			layoutWindowedFirst = false;
			break;
		//............................................................---//
		//............................................................---//
		///////////////////////////////////////////////
		// 4 Reading Mode Show
		///////////////////////////////////////////////
		//............................................................---//
		//............................................................---//
		case layoutReadingModeLeft:
			//............................................................---//
			//			 Body Center (Top Left)
			//
			bodyMainCenter.style.top = '0%';
			if (layoutUseAbsolute) { bodyMainCenter.style.left = 3; }
			bodyMainCenter.style.posWidth = layoutWidth - 6;
			bodyMainCenter.style.width = bodyMainCenter.style.posWidth;
			// bodyMainCenter.style.height = 'auto';
			//
			//............................................................---//
			//			 All Other at Right
			// xx
			//
			//............................................................---//
			//			 Menu1 at Top Left
			// xx
			//
			//............................................................---//
			//			 	 Menu2 at Top Right
			// xx
			//
			//............................................................---//
			// 	 		 	 Banner at Bottom
			// xx
			// bodyViewToggle View Toggle and Message Area
			bodyViewToggleContainerCenter.style.display = 'block';
			//
			//............................................................---//
			// Area Displays
			bodyBanner.style.display = 'block';
			bodyBannerBottom.style.display = 'none';
			bodyBannerTop.style.display = 'none';
			bodyMainLeft.style.display = 'none';
			bodyMainCenter.style.display = 'block';
			bodyMainRight.style.display = 'none';
			// bodyMainRightFar.style.display = 'none';
			bodyMainCenterTop.style.display = 'block';
			bodyMainCenterTopLeft.style.display = 'none';
			bodyMainCenterTopRight.style.display = 'none';
			bodyMainCenterCenter.style.display = 'block';
			bodyMainCenterBottom.style.display = 'none';
			//............................................................---//
			//
			layoutReadingModeLeftFirst = false;
			break;
		//............................................................---//
		//............................................................---//
		///////////////////////////////////////////////
		// case 999:
		///////////////////////////////////////////////
		//............................................................---//
		//............................................................---//
		case 999:
			// Break between center top and center center
			bodyMainCenterTopColBreak.style.display = 'none';
			//
			//
			//............................................................---//
			//			 All Other at Right
			// xx
			//
			//............................................................---//
			//			 	 Menu1 at Top Left
			// xx
			//............................................................---//
			// Left Body Text Alignment Breaks
			bodyMenuGroupColBreak[1] = ElementGetRef(bodyMenuGroupColBreak[1], 'MenuGroup1ColBreak', 'MenuGroup1ColBreak');
			bodyMenuGroupColBreak[1].style.display = 'none';
			bodyMenuGroupColBreak[2] = ElementGetRef(bodyMenuGroupColBreak[2], 'MenuGroup2ColBreak', 'MenuGroup2ColBreak');
			bodyMenuGroupColBreak[2].style.display = 'none';
			bodyMenuGroupColBreak[3] = ElementGetRef(bodyMenuGroupColBreak[3], 'MenuGroup3ColBreak', 'MenuGroup3ColBreak');
			bodyMenuGroupColBreak[3].style.display = 'none';
			//
			//............................................................---//
			//			 	 Menu2 at Top Right
			// xx
			//............................................................---//
			// Right Body Text Alignment Breaks
			bodyMenuGroupColBreak[4] = ElementGetRef(bodyMenuGroupColBreak[4], 'MenuGroup4ColBreak', 'MenuGroup4ColBreak');
			bodyMenuGroupColBreak[4].style.display = 'none';
			bodyMenuGroupColBreak[5] = ElementGetRef(bodyMenuGroupColBreak[5], 'MenuGroup5ColBreak', 'MenuGroup5ColBreak');
			bodyMenuGroupColBreak[5].style.display = 'none';
			bodyMenuGroupColBreak[6] = ElementGetRef(bodyMenuGroupColBreak[6], 'MenuGroup6ColBreak', 'MenuGroup6ColBreak');
			bodyMenuGroupColBreak[6].style.display = 'none';
			//
			bodyMainCenterTopRight = ElementCopy(bodyMainCenterTopRight, bodyMainCenterTopRightFirst, bodyMainRight, 'none');
			bodyMainCenterTopRightFirst = false;
			//
			//............................................................---//
			// 	 		 	 Banner at Bottom
			bodyBanner = ElementGetFromId('BodyBanner');
			//............................................................---//
			// Area Displays
			bodyBanner.style.display = 'block';
			bodyBannerBottom.style.display = 'none';
			bodyBannerTop.style.display = 'none';
			bodyMainLeft.style.display = 'none';
			bodyMainCenter.style.display = 'block';
			bodyMainRight.style.display = 'none';
			// bodyMainRightFar.style.display = 'block';
			bodyMainCenterTop.style.display = 'none';
			bodyMainCenterTopLeft.style.display = 'none';
			bodyMainCenterTopRight.style.display = 'none';
			bodyMainCenterCenter.style.display = 'block';
			bodyMainCenterBottom.style.display = 'none';
			//............................................................---//
			//
			layoutReadingModeLeftFirst = false;
			break;
		//............................................................---//
		//............................................................---//
		///////////////////////////////////////////////
		// DEFAULT...
		///////////////////////////////////////////////
		//............................................................---//
		//............................................................---//
		default:
			break;
	}
	//
	//
	// document.recalc();
	//
	layoutResizeDo = true;
	WindowResizeLayout();
	//
	bodyFirst = false;
	// return;
	//
}

function LayoutBlockWidthGet() {
    if (bodyMainCenterCenter.offsetWidth > (layoutBlockCol4Min * layoutEmRation) && bodyBlockCn > 3 && layoutBodyColumnMax > 3) {
        layoutBlockWidth = layoutBlockWidthBig;
    } else if (bodyMainCenterCenter.offsetWidth > (layoutBlockCol3Min * layoutEmRation) && bodyBlockCn > 2 && layoutBodyColumnMax > 2) {
        layoutBlockWidth = layoutBlockWidthWide;
    } else if (bodyMainCenterCenter.offsetWidth > (layoutBlockCol2Min * layoutEmRation) && layoutBodyColumnMax > 1) {
        layoutBlockWidth = layoutBlockWidthStandard;
    } else {
        layoutBlockWidth = layoutBlockWidthNarrow;
    }
}

script_state = "Mdm Standard Layout functions loaded.";
if (debugLoadIsOn) { debugger; }
