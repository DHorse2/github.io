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
var layoutMenuHeightMax = 0;
//
var layoutZindex = 20;
//
// This variable is the multiplier that will reflect font-size;
// Using a 1em font is the default (1em = 1.0 EmRation)
// refered to as medium size on most browsers.
// The layoutWidth(s) have to scale up proportionally
// with text size when adjusting the callouts.
// A larger font size will disturb the floating by
// pushing down the content that wont fit beside the
// callout.
var layoutEmRation = 1.0;
//
var layoutMenuDocWidthWide = 900;
//
var layoutBlockCol3Min = 1000;
var layoutBlockCol2Min = 500;
var layoutBlockCol1Min = 'float';
//
var layoutBlockWidthWide = '31%';
var layoutBlockWidthStandard = '47%';
var layoutBlockWidthNarrow = '98%';
//
var calloutBlockLayoutWidthWide = 600;
var calloutBlockLayoutWidthStandard = 350;
var calloutBlockLayoutWidthNarrow = 150;
//
var calloutBlockWidthWide = '33%';
var calloutBlockWidthStandard = '45%';
var calloutBlockWidthNarrow = '82%';
//
var layoutBlockWidth;
var calloutBlockWidth;
//
var elementBlockCn;
//
var elementWidthDefault = 250;
var elBodyBlockWidth;
//
var elBodyMainCenterTopClass = "";
//

// ------------------------------------------------------------------------------------- _//
// Layout
// ------------------------------------------------------------------------------------- _//
// Layout Next
function StdLayoutNext(layoutIndexPassed) {
    if (layoutIndexPassed > 0) {
        layoutRefreshCn = layoutIndexPassed;
    } else {
        layoutRefreshCn += 1;
    }
	// todo maybe limit the number?
    if (layoutRefreshCn > layoutIndexMax) { layoutRefreshCn = 1; }
    StdLayoutRefresh(layoutRefreshCn);
}
// Check Layout
function StdLayoutCheck(layoutPrefered) {
    return;
}
// Layout Refresh
function StdLayoutRefresh(layoutIndexPassed) {
    if (layoutIndexPassed != layoutRefreshCnLast) {
        // Choose Standard Layout
        layoutIndex = layoutIndexPassed;
        StdLayoutSelectByIndex(layoutIndex);
        layoutRefreshCnLast = layoutRefreshCn;
    }
}
// Section Layout Management function (s)
// Body ViewToggle - Layout Next
function StdLayoutFontSize(zoomCommandPassed) {
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
function StdLayoutSelectByIndex(layoutIndexPassed) {
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
	StdWindowClientWidth();
	// layoutMenuHeightHorzMax = 0;
	if (browserIsFF) {
		// debug-instance-off StdLayoutSelectByIndex;
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
	if (elBodyFirst) {
		//............................................................---//
		//      Body Element Creation
		if (loadFirstJava) { StdElementObjectCreate(); }
		//............................................................---//
		//      Body Main Container (contains Left Center and Right
		if (!elBodyMainContainer) { elBodyMainContainer = StdElementGetFromId('BodyMainContainer'); }
		// Body Container
		//............................................................---//
		//			    Menu at Left
		// elBodyMainLeftOrig.innerHTML = elBodyMainLeft.innerHTML;
		elBodyMainLeftOrig = StdElementCopy(elBodyMainLeftOrig, elBodyMainLeftOrigFirst, elBodyMainLeft, 'none');
		elBodyMainLeftOrigFirst = false;
		//............................................................---//
		//			    Menu at Right
		// elBodyMainLeftOrig.innerHTML = elBodyMainRight.innerHTML;
		elBodyMainRightOrig = StdElementCopy(elBodyMainRightOrig, elBodyMainRightOrigFirst, elBodyMainRight, 'none');
		elBodyMainRightOrigFirst = false;
		//............................................................---//
		// 	 		 Banner at Center Bottom
		elBodyBanner = StdElementGetRefFromElement(elBodyBanner, 'BodyBanner', 'BodyBanner', elBodyMainCenterTop);
		elBodyBannerTop = StdElementGetRefFromElement(elBodyBannerTop, 'BodyBannerTop', 'BodyBannerTop', elBodyMainCenterTop);
		elBodyBannerBottom = StdElementGetRefFromElement(elBodyBannerBottom, 'BodyBannerBottom', 'BodyBannerBottom', elBodyMainCenterBottom);
		elBodyBannerBottom = StdElementCopy(elBodyBannerBottom, elBodyBannerBottomFirst, elBodyBanner, 'block');
		elBodyBannerBottomFirst = false;
		//
		//............................................................---//
		//  BodyMain Center Center ColBreak
		elBodyMainCenterTopLeft = StdElementBreakSet(elBodyMainCenterCenter, 'BodyMainCenterCenterColBreak', elementLayoutFirstPhatomData = true, 'block', 'visible', 'both')
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
				elBodyMainCenterTop.className = BodyMainCenterTopClass;
			}
			//............................................................---//
			// Final adjustments to Center Top
			boxHeight = 0;
			//............................................................---//
			// elBodyViewToggle View Toggle and Message Area
			//
			// Box
			boxHeight += elBodyViewToggleContainer.scrollHeight;
			// Banner Should be zero, don't use..,
			elBodyBannerTop.style.display = 'block';
			boxHeight += elBodyBannerTop.scrollHeight;
			//
			elTitleTopLeft = StdElementGetRefFromElement(elTitleTopLeft, 'TitleTopLeft', 'TitleTopLeft', elBodyMainCenterTop);
			boxHeight += elTitleTopLeft.scrollHeight;
			//
			elBodyMainCenterTopColBreak = StdElementGetRefFromElement(elBodyMainCenterTopColBreak, 'BodyMainCenterTopColBreak', 'BodyMainCenterTopColBreak', elBodyMainCenterTop);
			boxHeight += elBodyMainCenterTopColBreak.scrollHeight;
			//
			// BodyViewToggle + Banner + Left/Right
			// elBodyMainCenterTop.style.height = boxHeight;
			elBodyMainCenterTop.style.height = 'auto';
			//............................................................---//
			//			 Menu1 at Left
			elBodyMainLeft.style.width = '20%';
			// elBodyMainLeft.style.height = 'auto';
			//............................................................---//
			//			 Body Center 'BodyMainCenter'
			if (layoutUseAbsolute) { elBodyMainCenter.style.left = '20%'; } // 0.20 * layoutWidth + 3;
			elBodyMainCenter.style.width = '60%';//0.60 * layoutWidth - 6;
			// elBodyMainCenter.style.height = '100%';
			// elBodyMainCenter.style.height = '100%';
			//
			layoutZindex += 1;
			elBodyMainCenter.style.zIndex = layoutZindex;
			//
			elBodyMainCenterCenter.style.top = 0;
			//............................................................---//
			//			 Menu2 at Right
			if (layoutUseAbsolute) { elBodyMainRight.style.left = '80%'; }
			elBodyMainRight.style.width = '20%';
			// elBodyMainRight.style.height = 'auto';
			//............................................................---//
			// 	 		 Banner at Top 'BodyBanner'
			//............................................................---//
			// 	 		 Final adjustments
			// this code should also adjust oversized views
			/* --
			elBodyMainContainer.style.height = layoutHeight;
			if (elBodyMainContainer.style.height < StdElementHeightMaxGet(true, true, elBodyMainLeft)) {
				 elBodyMainContainer.style.height = StdElementHeightMaxGet(true, true, elBodyMainLeft);
		  }
		  if (elBodyMainContainer.style.height < StdElementHeightMaxGet(true, true, elBodyMainCenter)) {
				 elBodyMainContainer.style.height = StdElementHeightMaxGet(true, true, elBodyMainCenter);
		  }
		  if (elBodyMainContainer.style.height < StdElementHeightMaxGet(true, true, elBodyMainRight)) {
				 elBodyMainContainer.style.height = StdElementHeightMaxGet(true, true, elBodyMainRight);
		  }
		  -- */
			// elBodyMainContainer.style.height = 'auto';
			//............................................................---//
			// Area Displays
			elBodyBanner.style.display = 'block';
			elBodyBannerBottom.style.display = 'none';
			elBodyBannerTop.style.display = 'block';
			// elBodyViewToggle View Toggle and Message Area
			// elBodyViewToggleContainer.style.display = 'none';
			elBodyViewToggleContainerLeft.style.display = 'block';
			elBodyViewToggleContainerCenter.style.display = 'none';
			//
			// Console
			//
			elBodyMainLeft.style.display = 'block';
			elBodyMainCenter.style.display = 'block';
			elBodyMainRight.style.display = 'block';
			// elBodyMainRightFar.style.display = 'none';
			elBodyMainCenterTop.style.display = 'block';
			elBodyMainCenterTopLeft.style.display = 'none';
			elBodyMainCenterTopRight.style.display = 'none';
			elBodyMainCenterCenter.style.display = 'block';
			elBodyMainCenterBottom.style.display = 'none';
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
			// if (layoutUseAbsolute) { elBodyMainCenter.style.left = '0%'; }
			// elBodyMainCenter.style.top = '0%';
			// elBodyMainCenter.style.width = '100%';
			// elBodyMainCenter.style.height = '100%';
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
				elBodyBannerBottom = StdElementCopy(elBodyBannerBottom, elBodyBannerBottomFirst, elBodyBanner, 'block');
				elBodyBannerBottomFirst = false;
			}
			//
			elBodyBanner.style.display = 'block';
			elBodyBannerBottom.style.display = 'block';
			elBodyBannerTop.style.display = 'none';
			//
			//............................................................---//
			// elBodyViewToggle View Toggle and Message Area
			// elBodyViewToggleContainer.style.display = 'none';
			elBodyViewToggleContainerLeft.style.display = 'none';
			elBodyViewToggleContainerCenter.style.display = 'block';
			//
			// Console
			//
			// Left, Center, and Right
			elBodyMainLeft.style.display = 'none';
			elBodyMainCenter.style.display = 'block';
			elBodyMainRight.style.display = 'none';
			// elBodyMainRightFar.style.display = 'none';
			//
			// Center Top
			elBodyMainCenterTop.style.display = 'block';
			elBodyMainCenterTopLeft.style.display = 'none';
			elBodyMainCenterTopRight.style.display = 'none';
			// Center Center
			elBodyMainCenterCenter.style.display = 'block';
			// Center Bottom
			elBodyMainCenterBottom.style.display = 'block';
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
				// elBodyMenuLayout1 BodyMenuLayout
				if (false == true) {
					if (!elelBodyMenuLayout1 && elBodyMainCenterTopLeft) {
						elBodyMenuLayout1 = StdElementGetRefFromElement(elBodyMenuLayout1, 'BodyMenuLayout1', 'BodyMenuLayout1', elBodyMainCenterTopLeft);
					}
					//
					TopLeftWidth = elBodyMenuLayout1.style.posWidth;
					if (TopLeftWidth = 0) { TopLeftWidth = layoutWidth / 2; }
					TopLeftWidthInner = TopLeftWidth;
				}
				//
				// Process Left Column
				//
				// elBodyMainLeft.innerHTML = elBodyMainLeftOrig.innerHTML
				elBodyMainLeftCopy = StdElementCopy(elBodyMainLeft, elBodyMainLeftFirst, elBodyMainLeftOrig, 'block');
				elBodyMainLeftFirst = false;
				//
				// elBodyMainRight.innerHTML = elBodyMainLeftOrig.innerHTML
				elBodyMainRightCopy = StdElementCopy(elBodyMainRight, elBodyMainRightFirst, elBodyMainRightOrig, 'block');
				elBodyMainRightFirst = false;
				// end of layoutWindowFirst
			}
			//
			//............................................................---//
			// Left Menu Column
			// Center Top Left Area Columns
			//
			//............................................................---//
			// Enclose Box
			if (!BodyMainCenterTopClass.length) { BodyMainCenterTopClass = elBodyMainCenterTop.className; }
			elBodyMainCenterTop.className = elBodyMainCenterTop.className + ' CalloutBoxBg CalloutBorderFull';
			elBodyMainCenterTop.width = '100%';
			//
			// if (true == true) {
			if (layoutWindowedFirst) {
				//............................................................---//
				// Set Center Top Left Element
				// MainCenterTopLeft is a Reference pointer into the page
				// that has MainLeft HTML copied into it.
				elBodyMainCenterTopLeft = StdElementGetRef(elBodyMainCenterTopLeft, 'BodyMainCenterTopLeft', 'BodyMainCenterTopLeft');
				elBodyMainCenterTopLeft = StdElementCopy(elBodyMainCenterTopLeft, elBodyMainCenterTopLeftFirst, elBodyMainLeftOrig, 'block');
				elBodyMainCenterTopLeftFirst = false;
				//............................................................---//
				// Enclose Box
				elBodyMainCenterTopLeft.className = elBodyMainCenterTopLeft.className + ' CalloutBorderFull';
				//............................................................---//
				// Left Menu Container
				//............................................................---//
				// Left Body Column (BodyMainLeft)
				//............................................................---//
				// elBodyMenuLayout1 BodyMenuLayout
				elBodyMenuLayout1 = StdElementGetRefFromElement(elBodyMenuLayout1, 'BodyMenuLayout1', 'BodyMenuLayout1', elBodyMainCenterTopLeft);
				//............................................................---//
				// Width of Layout area (previous?)
				//............................................................---//
				// Left Outer and Inner Decorative Divs
				elBodyMainLeftOuter = StdElementGetRefFromElement(elBodyMainLeftOuter, 'BodyMainLeftOuter', 'BodyMainLeftOuter', elBodyMainCenterTopLeft);
				elBodyMainLeftOuter.style.paddingLeft = '3%';
				elBodyMainLeftOuter.style.width = '97%';
				//
				elBodyMainLeftInner = StdElementGetRefFromElement(elBodyMainLeftInner, 'BodyMainLeftInner', 'BodyMainLeftInner', elBodyMainCenterTopLeft);
				elBodyMainLeftInner.style.paddingRight = '3%';
				elBodyMainLeftInner.style.width = '97%';
				elBodyMainLeftInner.style.paddingTop = '1.0em';
				//............................................................---//
				//
				// StdElementGetFromElement(elMenuGroup1, 'MenuGroup1', 'MenuGroup1',
				// 		elBodyMainCenterTopLeft, elementFindDoSet, elMenuGroup1)
				// StdElementGetFromElement(elMenuGroup2, 'MenuGroup2', 'MenuGroup2',
				// 		elBodyMainCenterTopLeft, elementFindDoSet, elMenuGroup2)
				// StdElementGetFromElement(elMenuGroup3, 'MenuGroup3', 'MenuGroup3',
				// 		elBodyMainCenterTopLeft, elementFindDoSet, elMenuGroup3)
				//
				//............................................................---//
				// Left elMenuGroup1, 2, 3
				elMenuGroup1 = StdElementGetRefFromElement(elMenuGroup1, 'MenuGroup1', 'MenuGroup1', elBodyMainCenterTopLeft);
				elMenuGroup2 = StdElementGetRefFromElement(elMenuGroup2, 'MenuGroup2', 'MenuGroup2', elBodyMainCenterTopLeft);
				elMenuGroup3 = StdElementGetRefFromElement(elMenuGroup3, 'MenuGroup3', 'MenuGroup3', elBodyMainCenterTopLeft);
				//
				StdWindowContainerHeightGetMenu(elBodyMainCenterTopLeft);
				//
				//............................................................---//
				// elMenuGroup1
				elMenuGroup1.style.position = 'absolute';
				elMenuGroup1.style.top = ' 0em';
				elMenuGroup1.style.left = '3%';
				elMenuGroup1.style.maxWidth = '30%';
				// elMenuGroup1.style.styleFloat = 'left';
				//
				//............................................................---//
				// elMenuGroup2
				elMenuGroup2.style.position = 'absolute';
				elMenuGroup2.style.top = '1.0em';
				elMenuGroup2.style.left = '35%';
				elMenuGroup2.style.maxWidth = '30%';
				// elMenuGroup2.style.marginLeft = '3%';
				// elMenuGroup2.style.styleFloat = 'left';
				//............................................................---//
				// elMenuGroup3
				elMenuGroup3.style.position = 'absolute';
				elMenuGroup3.style.top = '1.0em';
				elMenuGroup3.style.left = '67%';
				elMenuGroup3.style.maxWidth = '30%';
				// elMenuGroup3.style.marginLeft = '3%';
				// elMenuGroup3.style.styleFloat = 'left';
				//............................................................---//
				//
				// StdElementGetFromElement(elMenuGroup1, 'MenuGroup1', 'MenuGroup1',
				// 		elBodyMainCenterTopLeft, elementFindDoSet, elMenuGroup1)
				// StdElementGetFromElement(elMenuGroup2, 'MenuGroup2', 'MenuGroup2',
				// 		elBodyMainCenterTopLeft, elementFindDoSet, elMenuGroup2)
				// StdElementGetFromElement(elMenuGroup3, 'MenuGroup3', 'MenuGroup3',
				// 		elBodyMainCenterTopLeft, elementFindDoSet, elMenuGroup3)
				//
				//............................................................---//
				// elDivC21 Callout Paragraph Contents
				// if (true == false) {
				// 	var elDivC21 = StdElementGetRefFromElement(elDivC21, 'DivC21', 'DivC21', elBodyMainCenterTopLeft);
				// 	if (elDivC21) { elDivC21.style.display = 'none'; }
				// }
				//............................................................---//
				// elDivC22 Callout Paragraph Contents
				var elDivC22 = StdElementGetRefFromElement(elDivC22, 'DivC22', 'DivC22', elBodyMainCenterTopLeft);
				if (elDivC22) { elDivC22.style.display = 'none'; }
				//............................................................---//
				// Left Body Text Alignment Breaks
				elBodyMainCenterTopLeft = StdElementBreakSet(elBodyMainCenterTopLeft, 'MenuGroup1ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
				elBodyMainCenterTopLeft = StdElementBreakSet(elBodyMainCenterTopLeft, 'MenuGroup2ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
				elBodyMainCenterTopLeft = StdElementBreakSet(elBodyMainCenterTopLeft, 'MenuGroup3ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
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
				elBodyMainCenterTopRight = StdElementGetRef(elBodyMainCenterTopRight, 'BodyMainCenterTopRight', 'BodyMainCenterTopRight');
				elBodyMainCenterTopRight = StdElementCopy(elBodyMainCenterTopRight, elBodyMainCenterTopRightFirst, elBodyMainRightOrig, 'block');
				//............................................................---//
				// Enclose Box
				elBodyMainCenterTopRight.className = elBodyMainCenterTopRight.className + ' CalloutBorderFull';
				//............................................................---//
				// elBodyMenuLayout2 BodyMenuLayout
				elBodyMenuLayout2 = StdElementGetRefFromElement(elBodyMenuLayout2, 'BodyMenuLayout2', 'BodyMenuLayout2', elBodyMainCenterTopRight);
				//............................................................---//
				// Right Outer and Inner Decorative Divs
				elBodyMainRightOuter = StdElementGetRefFromElement(elBodyMainLeftOuter, 'BodyMainRightOuter', 'BodyMainRightOuter', elBodyMainCenterTopRight);
				elBodyMainLeftOuter.style.paddingLeft = '3%';
				elBodyMainLeftOuter.style.width = '97%';
				//
				elBodyMainRightInner = StdElementGetRefFromElement(elBodyMainRightInner, 'BodyMainRightInner', 'BodyMainRightInner', elBodyMainCenterTopRight);
				elBodyMainRightInner.style.paddingRight = '3%';
				elBodyMainRightInner.style.width = '97%';
				elBodyMainRightInner.style.paddingTop = '1.0em';
				//............................................................---//
				var elementHeight = 0;
				layoutMenuHeightHorzMax = 0;
				// Right elMenuGroup 4(1), 5(2), 6(3)
				elMenuGroup4 = StdElementGetRefFromElement(elMenuGroup4, 'MenuGroup4', 'MenuGroup4', elBodyMainCenterTopRight);
				elMenuGroup5 = StdElementGetRefFromElement(elMenuGroup5, 'MenuGroup5', 'MenuGroup5', elBodyMainCenterTopRight);
				elMenuGroup6 = StdElementGetRefFromElement(elMenuGroup6, 'MenuGroup6', 'MenuGroup6', elBodyMainCenterTopRight);
				//............................................................---//
				// elMenuGroup4
				elMenuGroup4.style.position = 'absolute';
				elMenuGroup4.style.top = '1.0em';
				elMenuGroup4.style.left = '3%';
				elMenuGroup4.style.maxWidth = '30%';
				// elMenuGroup4.style.styleFloat = 'left';
				elementHeight = StdElementHeightMaxGet(true, true, elMenuGroup4);
				if (layoutMenuHeightHorzMax < elementHeight) { layoutMenuHeightHorzMax = elementHeight; }
				//............................................................---//
				// elMenuGroup5
				elMenuGroup5.style.position = 'absolute';
				elMenuGroup5.style.top = '1.0em';
				elMenuGroup5.style.left = '35%';
				elMenuGroup5.style.maxWidth = '30%';
				// elMenuGroup5.style.marginLeft = '3%';
				// elMenuGroup5.style.styleFloat = 'left';
				elementHeight = StdElementHeightMaxGet(true, true, elMenuGroup5);
				if (layoutMenuHeightHorzMax < elementHeight) { layoutMenuHeightHorzMax = elementHeight; }
				//............................................................---//
				// elMenuGroup3
				elMenuGroup6.style.position = 'absolute';
				elMenuGroup6.style.top = '1.0em';
				elMenuGroup6.style.left = '67%';
				elMenuGroup6.style.maxWidth = '30%';
				// elMenuGroup6.style.marginLeft = '3%';
				// elMenuGroup6.style.styleFloat = 'left';
				elementHeight = StdElementHeightMaxGet(true, true, elMenuGroup6);
				if (layoutMenuHeightHorzMax < elementHeight) { layoutMenuHeightHorzMax = elementHeight; }
				//............................................................---//
				// Column and Float Breaks and Clear
				elBodyMainCenterTopRight = StdElementBreakSet(elBodyMainCenterTopRight, 'MenuGroup4ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
				elBodyMainCenterTopRight = StdElementBreakSet(elBodyMainCenterTopRight, 'MenuGroup5ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
				elBodyMainCenterTopRight = StdElementBreakSet(elBodyMainCenterTopRight, 'MenuGroup6ColBreak', elementLayoutFirstPhatomData = true, 'none', 'hidden', 'none')
				// end of layoutWindowFirst
			}
			//............................................................---//
			// Final adjustments to Center Top
			// BodyViewToggle + Banner + Left/Right
			boxHeight = 0;
			//
			// elBodyViewToggle View Toggle and Message Area
			elBodyViewToggleContainerCenter.style.display = 'none';
			//
			boxHeight += StdElementHeightMaxGet(true, true, elBodyViewToggleContainer);
			// Banner Should be zero, don't use..,
			boxHeight += StdElementHeightMaxGet(true, true, elBodyBannerTop);
			//
			// Height of left and right menu containers
			// StdWindowContainerHeightGetAll();
			//
			// if (elBodyMenuLayout2Height > elBodyMenuLayout1Height)  {
			// elBodyMenuLayout1.style.height = elBodyMenuLayout2Height + 'px';
			// } else {
			// elBodyMenuLayout2.style.height = elBodyMenuLayout1Height + 'px';
			// }
			// Set Left and Right Container Heights
			// elBodyMainCenterTopLeft.style.height = (StdElementHeightMaxGet(true, true, elBodyMenuLayout1) + 20) + 'px';
			// elBodyMainCenterTopRight.style.height = (StdElementHeightMaxGet(true, true, elBodyMenuLayout2) + 20) + 'px';
			//
			if (layoutMenuHeightHorzMax < 50) {
				// ERROR HERE //
				//
				var X; var Y;
				X = StdElementHeightMaxGet(true, true, elMenuGroup1);
				X += boxHeight;
				Y = StdElementHeightMaxGet(true, true, elMenuGroup4);
				if (X > Y) { layoutMenuHeightHorzMax = X; } else { layoutMenuHeightHorzMax = Y; }
				//
				X = StdElementHeightMaxGet(true, true, elBodyMainCenterTopLeft);
				Y = StdElementHeightMaxGet(true, true, elBodyMainCenterTopRight);
				if (X > Y) { boxHeight = X; } else { boxHeight = Y; }
				// boxHeight += StdElementHeightMaxGet(true, true, BodyViewToggleContainerCenter);
				// boxHeight += StdElementHeightMaxGet(true, true, elBodyMainCenterTopColBreak);
			}
			// Set Left and Right Container Heights
			elBodyMainCenterTopLeft.style.height = (layoutMenuHeightHorzMax + 50) + 'px';
			// elBodyMainCenterTopLeft.style.height = '100%';
			// elBodyMainCenterTopLeft.style.height = 'auto';
			elBodyMainCenterTopRight.style.height = (layoutMenuHeightHorzMax + 50) + 'px';
			// elBodyMainCenterTopRight.style.height = '100%';
			//
			elBodyMainCenterTopColBreak = StdElementGetRefFromElement(elBodyMainCenterTopColBreak, 'BodyMainCenterTopColBreak', 'BodyMainCenterTopColBreak', elBodyMainCenterTop);
			//
			elBodyMainCenterTop.style.height = (layoutMenuHeightHorzMax + 75) + 'px';// boxHeight
			// elBodyMainCenterTop.style.height = '100%';
			//
			//............................................................---//
			elBodyMainCenterCenter.style.top = (layoutMenuHeightHorzMax + 100) + 'px';// adjust by boxHeight
			//
			//
			//............................................................---//
			//			 Body Center Columns
			if (layoutWindowedFirst) {
				// BodyMainCenter
				elBodyMainCenter.style.width = '100%';
				// Center Center
			}
			//
			//............................................................---//
			// 	 		 Final adjustments
			//............................................................---//
			// Area Displays
			elBodyBanner.style.display = 'block';
			elBodyBannerBottom.style.display = 'block';
			elBodyBannerTop.style.display = 'none';
			elBodyMainLeft.style.display = 'none';// none
			elBodyMainCenter.style.display = 'block';
			elBodyMainRight.style.display = 'none';// none
			// elBodyMainRightFar.style.display = 'none';
			elBodyMainCenterTop.style.display = 'block';
			elBodyMainCenterTopLeft.style.display = 'block';
			elBodyMainCenterTopRight.style.display = 'block';
			elBodyMainCenterCenter.style.display = 'block';
			elBodyMainCenterBottom.style.display = 'block';
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
			elBodyMainCenter.style.top = '0%';
			if (layoutUseAbsolute) { elBodyMainCenter.style.left = 3; }
			elBodyMainCenter.style.posWidth = layoutWidth - 6;
			elBodyMainCenter.style.width = elBodyMainCenter.style.posWidth;
			// elBodyMainCenter.style.height = 'auto';
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
			// elBodyViewToggle View Toggle and Message Area
			elBodyViewToggleContainerCenter.style.display = 'block';
			//
			//............................................................---//
			// Area Displays
			elBodyBanner.style.display = 'block';
			elBodyBannerBottom.style.display = 'none';
			elBodyBannerTop.style.display = 'none';
			elBodyMainLeft.style.display = 'none';
			elBodyMainCenter.style.display = 'block';
			elBodyMainRight.style.display = 'none';
			// elBodyMainRightFar.style.display = 'none';
			elBodyMainCenterTop.style.display = 'block';
			elBodyMainCenterTopLeft.style.display = 'none';
			elBodyMainCenterTopRight.style.display = 'none';
			elBodyMainCenterCenter.style.display = 'block';
			elBodyMainCenterBottom.style.display = 'none';
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
			elBodyMainCenterTopColBreak.style.display = 'none';
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
			elMenuGroup1ColBreak = StdElementGetRef(elMenuGroup1ColBreak, 'MenuGroup1ColBreak', 'MenuGroup1ColBreak');
			elMenuGroup1ColBreak.style.display = 'none';
			elMenuGroup2ColBreak = StdElementGetRef(elMenuGroup2ColBreak, 'MenuGroup2ColBreak', 'MenuGroup2ColBreak');
			elMenuGroup2ColBreak.style.display = 'none';
			elMenuGroup3ColBreak = StdElementGetRef(elMenuGroup3ColBreak, 'MenuGroup3ColBreak', 'MenuGroup3ColBreak');
			elMenuGroup3ColBreak.style.display = 'none';
			//
			//............................................................---//
			//			 	 Menu2 at Top Right
			// xx
			//............................................................---//
			// Right Body Text Alignment Breaks
			elMenuGroup4ColBreak = StdElementGetRef(elMenuGroup4ColBreak, 'MenuGroup4ColBreak', 'MenuGroup4ColBreak');
			elMenuGroup4ColBreak.style.display = 'none';
			elMenuGroup5ColBreak = StdElementGetRef(elMenuGroup5ColBreak, 'MenuGroup5ColBreak', 'MenuGroup5ColBreak');
			elMenuGroup5ColBreak.style.display = 'none';
			elMenuGroup6ColBreak = StdElementGetRef(elMenuGroup6ColBreak, 'MenuGroup6ColBreak', 'MenuGroup6ColBreak');
			elMenuGroup6ColBreak.style.display = 'none';
			//
			elBodyMainCenterTopRight = StdElementCopy(elBodyMainCenterTopRight, elBodyMainCenterTopRightFirst, elBodyMainRight, 'none');
			elBodyMainCenterTopRightFirst = false;
			//
			//............................................................---//
			// 	 		 	 Banner at Bottom
			elBodyBanner = StdElementGetFromId('BodyBanner');
			//............................................................---//
			// Area Displays
			elBodyBanner.style.display = 'block';
			elBodyBannerBottom.style.display = 'none';
			elBodyBannerTop.style.display = 'none';
			elBodyMainLeft.style.display = 'none';
			elBodyMainCenter.style.display = 'block';
			elBodyMainRight.style.display = 'none';
			// elBodyMainRightFar.style.display = 'block';
			elBodyMainCenterTop.style.display = 'none';
			elBodyMainCenterTopLeft.style.display = 'none';
			elBodyMainCenterTopRight.style.display = 'none';
			elBodyMainCenterCenter.style.display = 'block';
			elBodyMainCenterBottom.style.display = 'none';
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
	StdWindowResize();
	//
	elBodyFirst = false;
	// return;
	//
}
script_state = "Mdm Standard Layout functions loaded.";
if (debugLoadIsOn) { debugger; }
