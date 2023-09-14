// ------------------------------------------------------------------------------------- _//
// MdmFramework Developer's Notes
// TEMPLATE DOCUMENTATION
////////////////////////////////////////////////
// .....................................................................................
// #include virtual="/release/RelsNext/TemplatePage/MdmPtDocHeader.shtml" >
// <link rel="stylesheet" type="text/css" href="../Css/MdmDebugTagHover.css" >
// .....................................................................................
// SCRIPT
// Script language="javascript" src="../TemplatePage/MdmDeclarations.js" >
// Script language="javascript" src="../TemplatePage/MdmPage.js" >
// Script language="javascript" src="../TemplatePage/MdmStandardFuntions.js" >
// Script language="javascript" src="../TemplatePage/MdmElement.js" >
// Script language="javascript" src="../TemplatePage/MdmTimer.js" >
// Script language="javascript" src="../TemplatePage/MdmAnimation.js" >
// Script language="javascript" src="../TemplatePage/MdmBodyBox.js" >
// Script language="javascript" src="../TemplatePage/MdmLayout.js" >
// Script language="javascript" src="../TemplatePage/MdmMenu.js" >
// Script language="javascript" src="../TemplatePage/MdmMenuImage.js" >
// Script language="javascript" src="../TemplatePage/MdmMenuImageCollection.js" >
// Script language="javascript" src="../TemplatePage/MdmTimer.js" >
// Script language="javascript" src="../TemplatePage/MdmDebugTagHover.js" >
// END OF SCRIPT
// ..................................................................................... _//
// <link rel="shortcut icon" href="http://macrodm.atwebpages.com/release/RelsNext/Images/MdmControlLeft.ico" type="image/x-icon" >
// <link rel="apple-touch-icon" href="http://macrodm.atwebpages.com/release/RelsNext/Images/MdmControlLeft.png" >
<!-- ..................................................................................... -->
// ------------------------------------------------------------------------------------- _//
// GLOBAL / COMMON
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// STANDARD FUNCTIONS
// Global
// 		 fnDocumentLoadInit
// Elements
// 		fnElementPosGet
// Layout
//		fnLayoutSelectByIndex
// Menu Images
// 		fnMenuImagesHtmlBuild
// Mouse
// 		fnMouseOverImg
//		fnMouseOutImg
//		fnMouseClickImg
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// MENUS
// Menu Image Show / Hide
// Menu Show
// 		fnMenuImgShowRange
//		fnMenuImgShowIndex
//		fnMenuImgShowStack
//		fnMenuImgToggle
//		fnMenuImgShow
// Menu Hide
// 		fnMenuImgToggleRange
//		fnMenuImgHide
// Menu Object Selection
// 		fnMenuObjectSetAll
//		fnMenuObjectTextSet
//		fnMenuObjectNameSet
//		fnMenuIndexSet
//		fnMenuIndexSetByName
////////////////////////////////////////////////
// LAYOUT MANAGEMENT
// 		fnLayoutCheck
//		fnLayoutRefresh
//		fnLayoutNext
////////////////////////////////////////////////
// STANDARD FUNCTIONS
// Math Functions
// 		fnMathNumberRandomGetByRange
// Font Size Control
//		fnFontSizeIncrease
//		fnFontSizeDecrease
////////////////////////////////////////////////
// OBJECT ANIMATION
// Filter (Transition, Transform) Get by Index or Name
// 		fnFilterGetByIndex
////////////////////////////////////////////////
// FILTER MANAGEMENT
// General
// 		fnFilterResetThenAnimate
// Filter Store / Restore
// 		fnFilterStore
//		fnFilterRestore
// Animate Object
// 		fnFilterAnimate
// Filter Specific Functions
// 		StyleBackground
//				fnStyleBackgroundToggle
// 		Matrix
//			  	fnFilterSpin
//				fnFilterSetRotation
//				fnFilterResize
//		fnSlideStyleToggle
//				fnSlideStyleToggle
//		Other
//			 	OtherFunction...
// Filter Get / Set
// 		fnFilterGetByIndex
//		fnFilterGetRandom
// Filter Timing Get By Index
// 		fnFilterTimingGetByIndex
//		fFilterTimingGetRandom
////////////////////////////////////////////////
// DOCUMENT EVENTS
// 		window.onload
//
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Body Layout Objects:
// GLOBAL LAYOUT
////////////////////////////////////////////////
//
// BodyArea
// BodyMainContainer
//
// BodyBanner  (Hide / Show, copy to Bottom)
// BodyBannerBottom  (Hide / Show, copy to Bottom)
//
// BodyMainLeft
// BodyMainLeftSave
    // BodyMainLeftOuter
    // BodyMainLeftInner
        // BodyMenuLayout1
            // MenuGroup1
            // MenuGroup1Save
            // MenuContainerLeft1 (Hide / Show, copy to TopLeft)
            // MenuGroup2
            // MenuGroup2Save
            // MenuContainerLeft2
            // MenuGroup3
            // MenuGroup3Save
            // MenuContainerLeft3
//
// BodyMainCenter
    // BodyMainCenterColumns
    //
    // BodyMainCenterTop (Hide / Show)
        // BodyMainCenterTopLeft
        // BodyMainCenterTopRight
    	// BodyBanner  (Hide / Show, copy to Bottom)
    //
    // BodyMainCenterCenter
    //
    // BodyMainCenterBottom  (Hide / Show)
        // BodyBannerBottom  (Hide / Show, copy to Bottom)
//
// BodyMainRight
// BodyMainRightSave
// BodyMainRightOuter
// BodyMainRightInner
    // BodyMenuLayout2
        // MenuGroup4
        // MenuContainerRight1 (Hide / Show, copy to TopRight)
        // MenuGroup5
        // MenuContainerRight2
        // MenuGroup6
        // MenuContainerRight3
//
// BodyMainRightFar
//
// BodyImageContainer
// BodyMenuImageContainer
//
// ColumnType1 (Standard Paragraph Box for Wide / Standard Screen Size)
// ------------------------------------------------------------------------------------- _//
///////////////////////////////////////////////
// Body Layout Management (Combinations)
//
// Optoin Toggles:
// 	 		 Hidden Banner
//			 Hidden Menu1
//			 Hidden Menu2
//			 Hidden Menu 1 & 2
//			 Hidden All
//
// 1 Standard
// 	 		 Banner at Top
//			 Body Center
//			 Menu1 at Left
//			 Menu2 at Right
// 2 Reading Mode Hide
//			 Body Center
//			 Hidden Menu1 at Left
//			 Hidden Menu2 at Right
// 	 		 Hidden Banner at Bottom
// 3 Windowed
//			 Body Center
//			 Menu1 at Center Top Left
//			 Menu2 at Center Top Right
// 	 		 Banner at Center Bottom
// 4 Reading Mode Show
//			 Body Center (Top Left)
//			 All Other at Right
//			 	 Menu1 at Top Left
//			 	 Menu2 at Top Right
// 	 		 	 Banner at Bottom
//
// Named Switch Enumerations are used...
//
////////////////////////////////////////////////
// Layout User Interface Toggles:
// Animation Toggles:
// 			  Toggle Step 1 of 2 Step Animations
// 			  Toggle 2 Step Animations
// 			  Toggle Random Animations
// 			  Toggle All Animations
// Layout Toggles:
// 		  	  Full Screen
// 		  	  Font Sizing Ui
//			  Callout Display
// Analyzed Layout Area Links:
// 		  	  Blocks
//			  		Paragraph
//			  		Paragraph
//					   ...
// 		  	  Screen Area (Collapsable)
//			  		 Body Area
//			  		 Body Area
//			  		    ...
// Data Entry Field
//
// Console Messages
//
// Instant Messaging Area
//
//
///////////////////////////////////////////////
// Optoin Toggles:
// 	 		 Hidden Banner
//			 Hidden Menu1
//			 Hidden Menu2
//			 Hidden Menu 1 & 2
//			 Hidden All
//
///////////////////////////////////////////////
//
///////////////////////////////////////////////
// Body Layout Selection
// STANDARD FUNCTIONS
// GLOBAL / COMMON
////////////////////////////////////////////////
//
////////////////////////////////////////////////
// Body Layout Objects First Flags
////////////////////////////////////////////////
// Transition
/*--
0 Box in.
1 Box out.
2 Circle in.
3 Circle out.
4 Wipe up.
5 Wipe down.
6 Wipe right.
7 Wipe left.
8 Vertical blinds.
9 Horizontal blinds.
10 Checkerboard across.
11 Checkerboard down.
12 Random dissolve.
13 Split vertical in.
14 Split vertical out.
15 Split horizontal in.
16 Split horizontal out.
17 Strips left down.
18 Strips left up.
19 Strips right down.
20 Strips right up.
21 Random bars horizontal.
22 Random bars vertical.
23 Random transition from above possible values.
--*/
//
////////////////////////////////////////////////
// Filter Selection Management
////////////////////////////////////////////////
// Filter Category Ranges
// First Set - Movement Effects
// Second Set - Image / Object Show Effects
// filterObjectFinal Effect
// Third Set - Stationary Object Effects
//
////////////////////////////////////////////////
// Filter Enumeration (Type Name to Index)
////////////////////////////////////////////////
// Common Effects
// Movement Effects
// Final Effects
// Static Effects
//
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// Global Objects
// GLOBAL / COMMON
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
// MENUS
// ------------------------------------------------------------------------------------- _//
// GLOBAL / COMMON
// Menu Image Objects
//
// Menu Image Pointers
// Menu Image Objects
// Menu Image Size
// Menu Image Position
// Menu Image Z Index
//
// ------------------------------------------------------------------------------------- _//
// STANDARD VARIABLES														
////////////////////////////////////////////////
// Temporary
// Box Size or Box Rectangle Pointers
// Storage Location for Group
//
// ------------------------------------------------------------------------------------- _//
// BODY IMAGES
// ------------------------------------------------------------------------------------- _//
// GLOBAL / COMMON
////////////////////////////////////////////////
//
////////////////////////////////////////////////
// Image range variables
////////////////////////////////////////////////
// Image Group
////////////////////////////////////////////////
// Image Object Array
// Current Image Position
// Current Image Position Offset
// Current Image Index By Group
// Maximum # of Images By Group
// Maximum # of Images Per Cascading Row By Group
// Image Display (Visible) Locked Array
//
// First Image
// First Image Offset By Group, By Top, Left
// First Image Parent Postion By Group, Top, Left, Right/Width, Bottom/Height
// Image Position
// Position of Parent Image (Parent of First only stored at this time)
// Animation Timer by Group by Image
////////////////////////////////////////////////
// Image Postioning Offsets
// These are layout postion patterns to be applied
//
////////////////////////////////////////////////
// Add Second Dimention (imgGroupImageArraySize)
    //
    ////////////////////////////////////////////////
    // First Image Offset By Group, By Top, Left
    // First Image Parent Postion By Group, Top, Left, Right/Width, Bottom/Height
    //
    ////////////////////////////////////////////////
    // Image Object Array
    // Image Display (Visible) Locked Array
    // Image Position
    // Position of Parent Image (Parent of First only stored at this time)
    // Animation Timer by Group by Image
    ////////////////////////////////////////////////
    // Image Postioning Offsets
    // These are layout postion patterns to be applied
    //
//
////////////////////////////////////////////////
// Heading Image Group
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
// MENUS						
// ------------------------------------------------------------------------------------- _//
// Menu Groups
////////////////////////////////////////////////
//
////////////////////////////////////////////////
// Menu Groups
// set the number of groups and the images per group
// Menu Current Image Object By Group
// Menu Maximum Images per each Group
// Menu Maximum Images per each Group
// First Image Offset By Group, Top, Left, Right, Bottom
// menuImageRootPosition[1] = 0;
// menuImageRootPosition[2] = 0;
// menuImageRootPosition[3] = 0;
// menuImageRootPosition[4] = 0;
////////////////////////////////////////////////
// Offsets to adjust First Image Top Left
// Default (All)
// Menu Groups
// Menu Group 1
// Menu Group 2
// Menu Group 3
// Menu Group 4
////////////////////////////////////////////////
// Offsets for cascading diaply
// Default (All) Groups
// Menu Group 1
// Default (All)
// Boxes
// Menu Group 2
// Default (All)
// Boxes
// Menu Group 3
// Default (All)
// Boxes
// Menu Group 4
// Default (All)
// Boxes
////////////////////////////////////////////////
// Menu and Image Missing Objects
// var img1MenuLine;
//
// ------------------------------------------------------------------------------------- _//
// Functions:
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// STANDARD FUNCTIONS
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// GLOBAL / COMMON
////////////////////////////////////////////////
// Elements
// 		fnElementPosGet
// Layout
//		fnLayoutSelectByIndex
//		fnMouseClickImg
// Mouse
// 		fnMouseOverImg
//		fnMouseOutImg
//		fnMouseClickImg
////////////////////////////////////////////////
// Object Animation
////////////////////////////////////////////////
// fnFilterStore function
// fnFilterRestore
// filterSupportFunctions:
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// General (Common) functions & properties:
// fnFilter Management
////////////////////////////////////////////////
// fnFilterResetThenAnimate function
// ------------------------------------------------------------------------------------- _//
// Animate Object
// ------------------------------------------------------------------------------------- _//
// StyleBackground
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Matrix Control Functions
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// fnFilterSpin
// fnSetRotation function
function fnFilterSetRotation(oObjPassed, filterIndexPassed, deg)
// ------------------------------------------------------------------------------------- _//
// fnResize function
function fnFilterResize(oObjPassed, filterIndexPassed, flMultiplier)
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// SlideStyle:
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
// fn Slide Style Toggle
// Declare an array and index counter to access  slideStyles.
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Filter Commands
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// Filter Apply
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
// Filter Play
////////////////////////////////////////////////
// Play Animation for this image
// Filter Play
// performs one cycle of animation
// It is structured by Platform Type
// to apply browser solutions.
// This in turn could be structured
// to implement specific players+versions.
////////////////////////////////////////////////
// // Each form below accesses the alpha filter of the object.
// Play Animation for this image
// ------------------------------------------------------------------------------------- _//
// Filter Stop
// Filter Pause
// Filter Stop
// Filter Rewind / Forward
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Filter Get / Set
////////////////////////////////////////////////
// Get
// Set
// Get By:
// Filter (Transition, Transform) Get by Index or Name
// Filter Get By Index
// ------------------------------------------------------------------------------------- _//
// Matrix
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// Movement Friendly Effects
////////////////////////////////////////////////
// Range: 3 - 19
// Current Max: 11
		// Spin
		// Fade
		// Iris
		// Pixelate
		// Random Dissolve
		// Stretch
		// Strips
    	// Wheel
		// Flip
		// Rotate
// ------------------------------------------------------------------------------------- _//
// Final Display Friendly Effects
////////////////////////////////////////////////
		// Blinds
		// Barn
		// CheckerBoard
		// Gradient Wipe
		// Inset
		// Radial Wipe
		// Random Bars
		// ZigZag
		//////////////////////////////////////////////////
		// End of Primary Animations
		//////////////////////////////////////////////////
		// Blur
		// MotionBlur
		// Default
// ------------------------------------------------------------------------------------- _//
// Filter Get By Tag
// Filter Get Random
// Filter Get Random
// Filter Timing Get By Index
// Filter Timing Get Random
// ------------------------------------------------------------------------------------- _//
// Menu Image Filter Play First
// ------------------------------------------------------------------------------------- _//
// fnMenuImageFilterPlayFirst
// fnMenuImageFilterPlayNext
// fnMenuImageFilterPlayAgain
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// fnMenuImageFilterPlay
    // Play Animation for this image
          // FileterPlayRandom
          //  or
          // Select Random Animation
          // Play Animation for this image
          // Apply Filter
          // Set Style Filter
          // Resize (Matrix)
          // Randomly chosen filter
          // Apply Filter
          ////////////////////////////////////////////////
          // Run Animation
          ////////////////////////////////////////////////
          //      Begin Movement from Origin to Position
          ////////////////////////////////////////////////
          // Play the Randomly Selected Filter Effect
    ////////////////////////////////////////////////
    // Visibility
    ////////////////////////////////////////////////
    // Element Move
    // Visibility
// ------------------------------------------------------------------------------------- _//
///////////////////////////////////////////////
// Menu Image Move
///////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// Menu Images Move Action
    // Speed
    // fnElementMove
    //
    // Q: Is iterStep Total Steps or Total Steps Per Second?
    // A: Steps per second is a better measure probably
    // timerStepsPerSecond = timerStep / timerDuration;
    // timerStepsPerSecond = timerStep;
// ------------------------------------------------------------------------------------- _//
// Timer Control
// ------------------------------------------------------------------------------------- _//
    // Timer Pause before Start
    ////////////////////////////////////////////////
    // Included a setTimeout in BODY onload to delay start of text movement.
    // oObjPassed, elementLeftOrig, elementTopOrig, elementLeftDest, elementTopDest)
    ////////////////////////////////////////////////
    // Set Style Left for menu image box
    ////////////////////////////////////////////////
    // Set Completion for Step Based or Time Based execution
        // Set Style Top for menu image box
               // Set Style Top for Box that is Droping
               // Set Style Top for Box that is Rising
        ////////////////////////////////////////////////
        // Set Style Left for menu image box
               // Set Style Top for Box that is Moving Right
        // Resize
    ////////////////////////////////////////////////
    // End of loop
    // Turn Off Timer
// ------------------------------------------------------------------------------------- _//
// Timer Pause then Start
////////////////////////////////////////////////
// Included a setTimeout in BODY onload to delay start of text movement.
// ------------------------------------------------------------------------------------- _//
// Timer Set
////////////////////////////////////////////////
// Set up interval at which the moveDiv function will be called.
// ------------------------------------------------------------------------------------- _//
// Timer Move Box (Element, i.e. Div)
////////////////////////////////////////////////
// This function incrementally repositions divMove.
// It loops through a set number of times.
//      Was function moveDiv()
//  iInterval tracks how many times moveDiv has looped and clears the interval
//  after a set number of loops.
// ------------------------------------------------------------------------------------- _//
///////////////////////////////////////////////
// Menu Html Build
///////////////////////////////////////////////
// Html Variables
// Build (inner) HTML for Menu Images
// fnMenuImagesHtmlBuild();
////////////////////////////////////////////////
// Filter in use is Type Checkerboard;
// ------------------------------------------------------------------------------------- _//
// Image Small
// ------------------------------------------------------------------------------------- _//
// Events:
// Mouse Over
// Mouse Out
// On Change
// ------------------------------------------------------------------------------------- _//
// Layout
// Size
// ------------------------------------------------------------------------------------- _//
// Small Image
// ------------------------------------------------------------------------------------- _//
    // Element: A
    // Text Link
    // Source
    // ------------------------------------------------------------------------------------- _//
    // Element: P
    // ------------------------------------------------------------------------------------- _//
    // Element: Img
    // Events:
    // Mouse Down
    // Filter
    // Start Animation Filter
    // Filter Reset
    // Image Show Toggle
    // Play Filter
    // Size
    // Set Height using Global height and ratio
    // Alt
    // ------------------------------------------------------------------------------------- _//
    // Element: A
    // Text Link
    // Source
    // ------------------------------------------------------------------------------------- _//
    // Element: P
// ------------------------------------------------------------------------------------- _//
// Image Large
// ------------------------------------------------------------------------------------- _//
    // Element: Div
// ------------------------------------------------------------------------------------- _//
// Events:
// ------------------------------------------------------------------------------------- _//
    // Mouse Out //
    // Mouse Over //
    // Show Image Small
    // Show Image Large
    // Start Animation Filter
    // Filter Reset
    // Play Filter
    // Div Size
    // Div Style
    // CheckerBoard
    // Matrix
// ------------------------------------------------------------------------------------- _//
// Image & Text Link
// ------------------------------------------------------------------------------------- _//
    // Element: A
    // Element: P
    // Element: Img
    // Link Text
// ------------------------------------------------------------------------------------- _//
// fnResize function
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Other
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Window Functions
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// Window Events (Load, Resize)
// Window Load
// onlayoutcomplete= "fnDocumentLoadInit();";
// Document Window OnLoad:
	  ////////////////////////////////////////////////
	  // Initialize and Set Global Variables
	  // Build Body Images Div
	  // Build Menu Images Div
	  // Docuement Element Initialize & Store Original Menu Columns.
    	  // Initialize and save
          // Choose Standard Layout
          // fnLayoutSelectByIndex(layoutStandard);
// Inactive code:
// window.onload= "fnDocumentLoadInit();";
// onlayoutcomplete= "fnDocumentLoadInit();";
// ------------------------------------------------------------------------------------- _//
// Document Window Resize
// Adjustments:
// Client Window Size
// Current Layout Strategy
//
window.onresize = function() { fnlayoutWindowResize(); }
      // Recalculate Screen Display
      // Recalculate Globals for Screen
      // Load Containers if missing
      // Recalculate Positions for Menu Images
	  	 if (layoutIndex = layoutStandard) {
            // Left
            // Center
            // Right
        } else {
            // Center
        }
      ////////////////////////////////////////////////
      // Recalculate Positions for Menu Images
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Document Window Client Width
  // Window Width
// ------------------------------------------------------------------------------------- _//
///////////////////////////////////////////////
// Window Session Functions
///////////////////////////////////////////////
// Window Session Load
// Window Session Save
// ------------------------------------------------------------------------------------- _//
///////////////////////////////////////////////
// Window Cookies Functions
///////////////////////////////////////////////
// Window Cookie Save
// Window Cookie Build
// ------------------------------------------------------------------------------------- _//
///////////////////////////////////////////////
// Window Document Functions
///////////////////////////////////////////////
// fn Document Load Initinitialize Variablesm, Arrays and Default Data
    // imgGroupMax
    // imgMax
    // Resize Window
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Standard Functions
////////////////////////////////////////////////
// Random Number Get By Range
// Base Font Size Increase
// Base Font Size Decrease
// ------------------------------------------------------------------------------------- _//
///////////////////////////////////////////////
// Debug
///////////////////////////////////////////////
// Layout Next
// ------------------------------------------------------------------------------------- _//
///////////////////////////////////////////////
// MOUSE
///////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Image Standard Mouse Events
// Mouse
// 		fnMouseOverImg
//		    fnMouseOutImg
//		    fnMouseClickImg
////////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// Mouse Over
////////////////////////////////////////////////
// Mouse Out
////////////////////////////////////////////////
// Mouse Click
////////////////////////////////////////////////
// old folder
// new front folder
// load new page into frame
// ------------------------------------------------------------------------------------- _//
// Layout
// ------------------------------------------------------------------------------------- _//
    ////////////////////////////////////////////////
    // Window Browser Gent
    // Browser Type Get
    // Layout Next
    // Check Layout
    // Layout Refresh
    // ------------------------------------------------------------------------------------- _//
    // Diaglogs and Pop-ups
    // ------------------------------------------------------------------------------------- _//
    // Create all Elements used in Layout
    // Popup Window
    // ------------------------------------------------------------------------------------- _//
    // Elements
// ------------------------------------------------------------------------------------- _//
// Create all Elements used in Layout
//---------------------------------------------------------------//
// Body Container References
//---------------------------------------------------------------//
// Body Center Area References
// Body Left Area Copy
// Body Right Area Copy
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Create all Elements used in Layout
// Body Container References
// Banner References (Top Menu, Logo and Graphics)
// Body Center Area References
//---------------------------------------------------------------//
// Body Left Area Copy
//---------------------------------------------------------------//
// Left 1
// Left 2
// Left 3
//---------------------------------------------------------------//
// Body Right Area Copy
//---------------------------------------------------------------//
// Body Far Right Area
//---------------------------------------------------------------//
// Other...
//---------------------------------------------------------------//
////////////////////////////////////////////////
// Element Get Pointer
// Layout Menu Area Element Common Fields Set
// As written it results in pointers into the Source Document
            // browserIsTEST
          	// browserIE
          	// browserIsFF
          	// browserIE or browserIsFF
// ------------------------------------------------------------------------------------- _//
// Layout Menu Area Element Common Fields Set
    // Copy Source to Destination Element (Inner HTML, Events)
// ------------------------------------------------------------------------------------- _//
// Layout Menu Area Element Common Fields Set
    // Loop through each child node of elementObject
    // and retrieve the original element from the document.
// ------------------------------------------------------------------------------------- _//
// Layout Menu Area Element Common Fields Set
// ------------------------------------------------------------------------------------- _//
// Layout Menu Area Element Common Fields Set
// ------------------------------------------------------------------------------------- _//
// Element Position Get
// ------------------------------------------------------------------------------------- _//
// Error Message Display
// ------------------------------------------------------------------------------------- _//
// Global Error Variables
// ------------------------------------------------------------------------------------- _//
// Error message build
        // Error Type
        // Add message to appropriate log
// ------------------------------------------------------------------------------------- _//
// Error Message Display
    if (errorSeverityPassed = errorFatal) {
        // dipslay in HTML Critial Message Area
    } else if (errorSeverityPassed = errrorSevere) {
        // dipslay in HTML Critial Message Area
    } else if (errorSeverityPassed = errorWarn) {
        // dipslay in HTML Warnging Message Area
    } else if (errorSeverityPassed = errorDidNotOccur) {
        // dipslay in HTML Message Area
    } else {
        // dipslay in HTML Message Area
    }
// ------------------------------------------------------------------------------------- _//
////////////////////////////////////////////////
// Body Layout Management (Combinations)
////////////////////////////////////////////////
//
// Body Layout Managment
// STANDARD FUNCTIONS
// GLOBAL / COMMON
///////////////////////////////////////////////
// Optoin Toggles: (buttons not implemented)
// 	 		 Hidden Banner
//			 Hidden Menu1
//			 Hidden Menu2
//			 Hidden Menu 1 & 2
//			 Hidden All
///////////////////////////////////////////////
// ------------------------------------------------------------------------------------- _//
// Global Layout Variables
// Body Layout Selection
// Layouts:
  // Pointers:
  // Window Width
  // Load Element for first pass
        //      Body Element Creation
        //      Body Main Container (contains Left Center and Right
        //			    Menu at Left
        //			    Menu at Right
        // 	 		 Banner at Center Bottom
        //  BodyMain Center Center ColBreak
//---------------------------------------------------------------//
//---------------------------------------------------------------//
      switch(layoutIndexPassed) {
//---------------------------------------------------------------//
///////////////////////////////////////////////
// 1 Standard
///////////////////////////////////////////////
      // Enclose Box
      // Final adjustments to Center Top
      // Banner Should be zero, don't use..,
//---------------------------------------------------------------//
//			 Menu1 at Left
//			 Body Center "BodyMainCenter"
//			 Menu2 at Right
        // Center Top Right Area Columns
//---------------------------------------------------------------//
// 	 		 Banner at Top "BodyBanner"
//---------------------------------------------------------------//
// 	 		 Final adjustments
      //---------------------------------------------------------------//
      // Area Displays
//---------------------------------------------------------------//
//---------------------------------------------------------------//
///////////////////////////////////////////////
// 2 Reading Mode Hide
///////////////////////////////////////////////
//---------------------------------------------------------------//
//---------------------------------------------------------------//
          case layoutReadingMode:
//
//---------------------------------------------------------------//
//			 Body Center
      // Break between center top and center center
//---------------------------------------------------------------//
//			 Hidden Menu1 at Left
      // Center Top Left Area Columns
//
//---------------------------------------------------------------//
//			 Hidden Menu2 at Right
      // Center Top Right Area Columns
      //
//
//---------------------------------------------------------------//
// 	 		 Hidden Banner at Bottom
      // Area Displays
//---------------------------------------------------------------//
///////////////////////////////////////////////
// 3 Windowed
///////////////////////////////////////////////
          case layoutWindowed:
//---------------------------------------------------------------//
//			 Menu1 at Center Top Left
          // BodyMenuLayout
    	  // Process Left Column
//
//---------------------------------------------------------------//
// Left Menu Column
      // Center Top Left Area Columns
      // Enclose Box
          // Set Center Top Left Element
          // MainCenterTopLeft is a Reference pointer into the page
          // that has MainLeft HTML copied into it.
          // Enclose Box
          //---------------------------------------------------------------//
          // Left Menu Container
          //---------------------------------------------------------------//
          // Left Body Column (BodyMainLeft)
          // Do Not Alter... elMenuMainLeft.style.width = "97%";
          //---------------------------------------------------------------//
          //---------------------------------------------------------------//
          // Width of Layout area (previous?)
		      // Left Outer and Inner Decorative Divs
          //---------------------------------------------------------------//
		      // elMenuGroup1
		      // elMenuGroup2
		      // elMenuGroup3
          // elDivC21 Callout Paragraph Contents
          //---------------------------------------------------------------//
          // elDivC22 Callout Paragraph Contents
          //---------------------------------------------------------------//
          // Left Body Text Alignment Breaks
//---------------------------------------------------------------//
//			 Menu2 at Center Top Right
      // Right Menu Column
      // Center Top Right Area Columns
      //
	  if (layoutWindowedFirst) {
          // Right Body Text Alignment Breaks
          // Set (Copy To) Top Left Element
          elBodyMainCenterTopRight = fnElementGetRef(elBodyMainCenterTopRight,"BodyMainCenterTopRight","BodyMainCenterTopRight");
          elBodyMainCenterTopRight = fnElementCopy(elBodyMainCenterTopRight, elBodyMainCenterTopRightFirst, elBodyMainRightOrig, "block");
		      // elBodyMainCenterTopRightFirst = false;
		      //
          //---------------------------------------------------------------//
          // Enclose Box
          elBodyMainCenterTopRight.className = elBodyMainCenterTopRight.className + " CalloutBorderFull";
          //---------------------------------------------------------------//
          // elBodyMenuLayout2 BodyMenuLayout
          elBodyMenuLayout2 = fnElementGetRefFromElement(elBodyMenuLayout1, "BodyMenuLayout2", "BodyMenuLayout2", elBodyMainCenterTopRight);
          //---------------------------------------------------------------//
		      // Right Outer and Inner Decorative Divs
          elBodyMainRightOuter = fnElementGetRefFromElement(elBodyMainLeftOuter, "BodyMainRightOuter", "BodyMainRightOuter", elBodyMainCenterTopRight);
          elBodyMainLeftOuter.style.paddingLeft = "3%";
          elBodyMainLeftOuter.style.width = "97%";
          //
          elBodyMainRightInner = fnElementGetRefFromElement(elBodyMainRightInner, "BodyMainRightInner", "BodyMainRightInner", elBodyMainCenterTopRight);
          elBodyMainRightInner.style.paddingRight = "3%";
          elBodyMainRightInner.style.width = "97%";
          elBodyMainRightInner.style.paddingTop = 10;
          //---------------------------------------------------------------//
          // Right elMenuGroup4, 2, 3
          elMenuGroup4 = fnElementGetRefFromElement(elMenuGroup4, "MenuGroup4", "MenuGroup4", elBodyMainCenterTopRight);
          elMenuGroup5 = fnElementGetRefFromElement(elMenuGroup5, "MenuGroup5", "MenuGroup5", elBodyMainCenterTopRight);
          elMenuGroup6 = fnElementGetRefFromElement(elMenuGroup6, "MenuGroup6", "MenuGroup6", elBodyMainCenterTopRight);
          //---------------------------------------------------------------//
		      // elMenuGroup4
          elMenuGroup4.style.posLeft = "-7%";
          elMenuGroup4.style.maxWidth = "33%";
          elMenuGroup4.style.styleFloat = "left";
          if (layoutMenuHeightMax < elMenuGroup4.style.height) { layoutMenuHeightMax = elMenuGroup4.style.height; }
          //---------------------------------------------------------------//
		      // elMenuGroup5
          elMenuGroup5.style.maxWidth = "30%";
          elMenuGroup5.style.marginLeft = "3%";
          elMenuGroup5.style.styleFloat = "left";
          if (layoutMenuHeightMax < elMenuGroup5.style.height) { layoutMenuHeightMax = elMenuGroup5.style.height; }
          //---------------------------------------------------------------//
		      // elMenuGroup3
          elMenuGroup6.style.maxWidth = "30%";
          elMenuGroup6.style.marginLeft = "3%";
          elMenuGroup6.style.styleFloat = "left";
          if (layoutMenuHeightMax < elMenuGroup6.style.height) { layoutMenuHeightMax = elMenuGroup6.style.height; }
          //---------------------------------------------------------------//
          // Column and Float Breaks and Clear
          var elementLayoutFirstDummy;
          elBodyMainCenterTopRight = fntElementBreakSet(elBodyMainCenterTopRight, "MenuGroup4ColBreak", elementLayoutFirstDummy = true, "none", "hidden", "none")
          elBodyMainCenterTopRight = fntElementBreakSet(elBodyMainCenterTopRight, "MenuGroup5ColBreak", elementLayoutFirstDummy = true, "none", "hidden", "none")
          elBodyMainCenterTopRight = fntElementBreakSet(elBodyMainCenterTopRight, "MenuGroup6ColBreak", elementLayoutFirstDummy = true, "none", "hidden", "none")
          //
	  }
    //---------------------------------------------------------------//
    // Final adjustments to Center Top
    var boxHeight = 0;
    //---------------------------------------------------------------//
    // elBodyViewToggle View Toggle and Message Area
    var elBodyViewToggle = fnElementGetRefFromElement(elBodyViewToggle, "BodyViewToggleCenter", "BodyViewToggleCenter", elBodyMainCenterTop);
    boxHeight += elBodyViewToggle.scrollHeight;
    // Banner Should be zero, don't use..,
    boxHeight += elBodyBannerTop.scrollHeight;
    //
    if (elBodyMenuLayout2.scrollHeight > elBodyMenuLayout1.scrollHeight)  {
          elBodyMenuLayout1.style.posHeight = elBodyMenuLayout2.scrollHeight;
    } else {
          elBodyMenuLayout2.style.posHeight = elBodyMenuLayout1.scrollHeight;
    }
    boxHeight += elBodyMenuLayout1.style.posHeight;
    //
    elBodyMainCenterTopColBreak = fnElementGetRefFromElement(elBodyMainCenterTopColBreak, "BodyMainCenterTopColBreak", "BodyMainCenterTopColBreak", elBodyMainCenterTop);
    boxHeight += elBodyMainCenterTopColBreak.scrollHeight;
    //
    // BodyViewToggle + Banner + Left/Right
    elBodyMainCenterTop.style.posHeight = boxHeight + 40;
    elBodyMainCenterTopLeft.style.posHeight = elBodyMenuLayout1.style.posHeight + 10;
    elBodyMainCenterTopRight.style.posHeight = elBodyMenuLayout1.style.posHeight + 10;
    //
//
//---------------------------------------------------------------//
//			 Body Center Columns
	  //
	  if (layoutWindowedFirst) {
    	  //
		      // BodyMainCenter
          // elBodyMainCenter.style.top = " 0em";
          // elBodyMainCenter.style.left = 0 * layoutWidth;
          // elBodyMainCenter.style.posWidth = layoutWidth;
          // elBodyMainCenter.style.width = elBodyMainCenter.style.posWidth;
          elBodyMainCenter.style.width = "100%";
          // elBodyMainCenter.style.maxWidth = elBodyMainCenter.style.posWidth;
          // elBodyMainCenter.style.height = "auto";
          //
		      // Center Center
          // elBodyMainCenterCenter.style.top = elBodyMainCenterTop.scrollHeight + 10;
          // elBodyMainCenterCenter.style.top = elBodyMainCenterTop.style.bottom;
          // elBodyMainCenter.style.posTop = " 0em";
	  }
//
//---------------------------------------------------------------//
// 	 		 Final adjustments
      /*--
      elBodyMainContainer.style.posHeight = layoutHeight;
      if (elBodyMainContainer.style.posHeight < elBodyMainLeft.clientHeight) {
      	 elBodyMainContainer.style.posHeight = elBodyMainLeft.clientHeight;
      }
      if (elBodyMainContainer.style.posHeight < elBodyMainCenter.clientHeight) {
      	 elBodyMainContainer.style.posHeight = elBodyMainCenter.clientHeight;
      }
      if (elBodyMainContainer.style.posHeight < elBodyMainRight.clientHeight) {
      	 elBodyMainContainer.style.posHeight = elBodyMainRight.clientHeight;
      }
	  --*/
      //---------------------------------------------------------------//
      // Area Displays
      elBodyBanner.style.display = "block";
      elBodyBannerBottom.style.display = "block";
      elBodyBannerTop.style.display = "none";
      elBodyMainLeft.style.display = "none";// none
      elBodyMainCenter.style.display = "block";
      elBodyMainRight.style.display = "none";// none
      // elBodyMainRightFar.style.display = "none";
      elBodyMainCenterTop.style.display = "block";
      elBodyMainCenterTopLeft.style.display = "block";
      elBodyMainCenterTopRight.style.display = "block";
	   elBodyMainCenterCenter.style.display = "block";
	  elBodyMainCenterBottom.style.display = "block";
      //---------------------------------------------------------------//
      //
	  layoutWindowedFirst = false;
      		 break;
//---------------------------------------------------------------//
//---------------------------------------------------------------//
///////////////////////////////////////////////
// 4 Reading Mode Show
///////////////////////////////////////////////
//---------------------------------------------------------------//
//---------------------------------------------------------------//
          case layoutReadingModeLeft:
//---------------------------------------------------------------//
//			 Body Center (Top Left)
      //
      // elBodyMainCenter.style.position = "absolute";
      elBodyMainCenter.style.top = "0%";
      elBodyMainCenter.style.left = 3;
      elBodyMainCenter.style.posWidth = layoutWidth - 6;
      elBodyMainCenter.style.width = elBodyMainCenter.style.posWidth;
      // elBodyMainCenter.style.maxWidth = elBodyMainCenter.style.posWidth;
      elBodyMainCenter.style.height = "auto";
	  // elBodyMainCenterCenter.style.top = "auto"
//
//---------------------------------------------------------------//
//			 All Other at Right
// xx
//
//---------------------------------------------------------------//
//			 Menu1 at Top Left
// xx
//
//---------------------------------------------------------------//
//			 	 Menu2 at Top Right
// xx
//
//---------------------------------------------------------------//
// 	 		 	 Banner at Bottom
// xx
      //---------------------------------------------------------------//
      // Area Displays
      elBodyBanner.style.display = "block";
      elBodyBannerBottom.style.display = "none";
      elBodyBannerTop.style.display = "none";
      elBodyMainLeft.style.display = "none";
      elBodyMainCenter.style.display = "block";
      elBodyMainRight.style.display = "none";
      // elBodyMainRightFar.style.display = "none";
      elBodyMainCenterTop.style.display = "block";
      elBodyMainCenterTopLeft.style.display = "none";
      elBodyMainCenterTopRight.style.display = "none";
	  elBodyMainCenterCenter.style.display = "block";
	  elBodyMainCenterBottom.style.display = "none";
      //---------------------------------------------------------------//
      //
	  layoutReadingModeLeftFirst = false;
      		 break;
//---------------------------------------------------------------//
//---------------------------------------------------------------//
///////////////////////////////////////////////
// case 999:
///////////////////////////////////////////////
//---------------------------------------------------------------//
//---------------------------------------------------------------//
          case 999:
      // Break between center top and center center
	  elBodyMainCenterTopColBreak.style.display = "none";
	  //
//
//---------------------------------------------------------------//
//			 All Other at Right
// xx
//
//---------------------------------------------------------------//
//			 	 Menu1 at Top Left
// xx
      //---------------------------------------------------------------//
      // Left Body Text Alignment Breaks
	  elMenuGroup1ColBreak = fnElementGetRef(elMenuGroup1ColBreak, "MenuGroup1ColBreak", "MenuGroup1ColBreak");
      elMenuGroup1ColBreak.style.display = "none";
	  elMenuGroup2ColBreak = fnElementGetRef(elMenuGroup2ColBreak, "MenuGroup2ColBreak", "MenuGroup2ColBreak");
      elMenuGroup2ColBreak.style.display = "none";
	  elMenuGroup3ColBreak = fnElementGetRef(elMenuGroup3ColBreak, "MenuGroup3ColBreak", "MenuGroup3ColBreak");
      elMenuGroup3ColBreak.style.display = "none";
//
//---------------------------------------------------------------//
//			 	 Menu2 at Top Right
// xx
      //---------------------------------------------------------------//
      // Right Body Text Alignment Breaks
	  elMenuGroup4ColBreak = fnElementGetRef(elMenuGroup4ColBreak, "MenuGroup4ColBreak", "MenuGroup4ColBreak");
      elMenuGroup4ColBreak.style.display = "none";
	  elMenuGroup5ColBreak = fnElementGetRef(elMenuGroup5ColBreak, "MenuGroup5ColBreak", "MenuGroup5ColBreak");
      elMenuGroup5ColBreak.style.display = "none";
	  elMenuGroup6ColBreak = fnElementGetRef(elMenuGroup6ColBreak, "MenuGroup6ColBreak", "MenuGroup6ColBreak");
      elMenuGroup6ColBreak.style.display = "none";
      //
      elBodyMainCenterTopRight = fnElementCopy(elBodyMainCenterTopRight, elBodyMainCenterTopRightFirst, elBodyMainRight, "none");
	  elBodyMainCenterTopRightFirst = false;
//
//---------------------------------------------------------------//
// 	 		 	 Banner at Bottom
	   elBodyBanner = fnElementGetFromId("BodyBanner");
      //---------------------------------------------------------------//
      // Area Displays
      elBodyBanner.style.display = "block";
      elBodyBannerBottom.style.display = "none";
      elBodyBannerTop.style.display = "none";
      elBodyMainLeft.style.display = "none";
      elBodyMainCenter.style.display = "block";
      elBodyMainRight.style.display = "none";
      // elBodyMainRightFar.style.display = "block";
      elBodyMainCenterTop.style.display = "none";
      elBodyMainCenterTopLeft.style.display = "none";
      elBodyMainCenterTopRight.style.display = "none";
	  elBodyMainCenterCenter.style.display = "block";
	  elBodyMainCenterBottom.style.display = "none";
      //---------------------------------------------------------------//
      //
	  layoutReadingModeLeftFirst = false;
      		 break;
//---------------------------------------------------------------//
//---------------------------------------------------------------//
///////////////////////////////////////////////
// DEFAULT...
///////////////////////////////////////////////
//---------------------------------------------------------------//
//---------------------------------------------------------------//
      	default:
      		 break;
      }
//
//
// document.recalc();
//
fnlayoutWindowResize();
//
elBodyFirst = false;
// return;
//
}
//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
// end of STANDARD FUNCTIONS (GLOBAL / COMMON)
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
// ------------------------------------------------------------------------------------- _//
//
//
// ------------------------------------------------------------------------------------- _//
//
////////////////////////////////////////////////
// MENUS
////////////////////////////////////////////////
//
// ------------------------------------------------------------------------------------- _//
//
// ------------------------------------------------------------------------------------- _//
// Function Overview
//
////////////////////////////////////////////////
// Menu Image Show / Hide
////////////////////////////////////////////////
// Menu Show
// 		fnMenuImgShowRange
//		fnMenuImgShowIndex
//		fnMenuImgShowStack
//		fnMenuImgToggle
//		fnMenuImgShow
// Menu Hide
// 		fnMenuImgToggleRange
//		fnMenuImgHide
//
////////////////////////////////////////////////
// Menu Hide
////////////////////////////////////////////////
// fnMenu Mouse Out function
////////////////////////////////////////////////
function fnMenuImgHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
////////////////////////////////////////////////
// Menu Toggle Show
////////////////////////////////////////////////
// fnMenu Mouse Out function
////////////////////////////////////////////////
function fnMenuImgToggleRange(HideImage, HideImageLarge, startIndex, endIndex, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
// fnMenu Toggle Menu Show Item (Mouse Down function)
////////////////////////////////////////////////
function fnMenuImgToggle(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock)
////////////////////////////////////////////////
// Menu Show
////////////////////////////////////////////////
// fnMenu Mouse Over function
function fnMenuImgShowRange
// fnMenu Mouse Over function
function fnMenuImgShowIndex
// fnMenu Menu Show Item and all Previous (Mouse Over function)
// function fnMenuImgShowStack
// fnMenu Menu Show Item (Mouse Over function)
// fnMenuImgShow
// fnMenuObjectSetAll
// function fnMenuObjectTextSet(oObjGroupCn, oObjCn)
// function fnMenuObjectNameSet(oObjGroupCn, oObjCn)
// fnMenuIndexSet
// fnMenuIndexSetByName
