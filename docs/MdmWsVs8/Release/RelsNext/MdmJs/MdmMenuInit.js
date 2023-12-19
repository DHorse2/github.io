//
function bodyMenuInit() {
    // // Timers
    // timerObj = new Array(bodyMenuGroupUsedCn);

    // Containers
    bodyMenuContainer = new Array(2);
    bodyMenuContainerGroupIndex = new Array(2);

    bodyMenuContainer[bodyMenuLeft] = new Array(bodyMenuGroupUsedLeftCn);
    bodyMenuContainerGroupIndex[bodyMenuLeft] = new Array(bodyMenuGroupUsedLeftCn);

    bodyMenuContainer[bodyMenuRight] = new Array(bodyMenuGroupUsedRightCn);
    bodyMenuContainerGroupIndex[bodyMenuRight] = new Array(bodyMenuGroupUsedRightCn);

    for (bodyMenuGroupIndex = 0; bodyMenuGroupIndex < 1 + bodyMenuGroupUsedLeftCn; bodyMenuGroupIndex++) {
        bodyMenuContainer[bodyMenuLeft] [bodyMenuGroupIndex] = null;
        bodyMenuContainerGroupIndex[bodyMenuLeft] [bodyMenuGroupIndex] = bodyMenuGroupIndex;
    }
    for (bodyMenuGroupIndex = 0; bodyMenuGroupIndex < 1 + bodyMenuGroupUsedRightCn; bodyMenuGroupIndex++) {
        bodyMenuContainer[bodyMenuRight] [bodyMenuGroupIndex] = null;
        bodyMenuContainerGroupIndex[bodyMenuRight] [bodyMenuGroupIndex] = bodyMenuGroupIndex;
    }

    // Groups
    bodyMenuGroup = new Array(bodyMenuGroupMax);
    // var bodyMenuGroupSave = new Array(bodyMenuGroupMax);
    bodyMenuGroupTop = new Array(bodyMenuGroupMax);
    bodyMenuGroupHeight = new Array(bodyMenuGroupMax);
    bodyMenuGroupColBreak = new Array(bodyMenuGroupMax);

    for (bodyMenuGroupIndex = 0; bodyMenuGroupIndex < 1 + bodyMenuGroupMax; bodyMenuGroupIndex++) {
        bodyMenuGroup[bodyMenuGroupIndex] = null;
        bodyMenuGroupTop[bodyMenuGroupIndex] = 0;
        bodyMenuGroupHeight[bodyMenuGroupIndex] = 0;
        bodyMenuGroupColBreak[bodyMenuGroupIndex] = 0;
    }
}
function menuImageGroupInitAll(bodyMenuGroupMax) {
    // Image Object Array
    if (menuImage == null) { menuImageCreate(); }
    menuImageInit();
    for (imgGroupIndex = 0; imgGroupIndex < 1 + imgGroupImageArraySize; imgGroupIndex++) {
        menuImageGroupInit(imgGroupIndex, imgMaxByGroup[imgGroupIndex])
    }
    menuImageSet();
    loadMenuImageDone = true;
}
//
function menuImageCreate() {
    // Create Image Control Arrays
    menuImage = new Array(imgGroupImageArraySize); // By, imgGroupImageArraySize);
    // Current Image Position Offset
    ////////////////////////////////////////////////
    // var oObjNextOffsetTop;
    // var oObjNextOffsetLeft;
    // Current Image Index By Group
    imgCnByGroup = new Array(imgGroupImageArraySize);
    // Maximum # of Images By Group
    ////////////////////////////////////////////////
    imgMaxByGroup = new Array(imgGroupImageArraySize);
    // Maximum # of Images Per Cascading Row By Group
    oObjectRowMax = new Array(imgGroupImageArraySize);

    // Image Display (Visible) Locked Array
    ////////////////////////////////////////////////
    menuImageTimerCn = new Array(imgGroupImageArraySize);
    menuImageLocked = new Array(imgGroupImageArraySize); // By, imgGroupImageArraySize);
    // menuImageLocked[oObjGroupIndex] = new Array(imgGroupImageArraySize);

    // Mouse tracking
    ////////////////////////////////////////////////
    imgAniToggle = new Array(imgGroupImageArraySize);
    imgMouseHover = new Array(imgGroupImageArraySize);
    // First Image Parent Postion By Group, Top, Left, Right/Width, Bottom/Height
    menuImageRootPosition = new Array(imgGroupImageArraySize); // By Top, Left, Right/Width, Bottom/Height

    // Image Position
    ////////////////////////////////////////////////
    // Position of Parent Image (Parent of First only stored at this time)
    menuImagePositionLeft = new Array(imgGroupImageArraySize); // By, imgGroupImageArraySize);
    menuImagePositionTop = new Array(imgGroupImageArraySize); // By, imgGroupImageArraySize);
    menuImagePositionWidth = new Array(imgGroupImageArraySize); // By, imgGroupImageArraySize);
    menuImagePositionHeight = new Array(imgGroupImageArraySize); // By, imgGroupImageArraySize);

    // Animation Timer by Group by Image
    ////////////////////////////////////////////////
    menuImageTimerCn = new Array(imgGroupImageArraySize); // By, imgGroupImageArraySize);
    menuImageLocked = new Array(imgGroupImageArraySize);

    // Offsets
    ////////////////////////////////////////////////
    // Image Postioning Offsets - Small, Large
    menuImageOffsetFirst = new Array(imgGroupImageArraySize); // By Top, Left (2)
    menuImageOffsetLeft = new Array(imgGroupImageArraySize); // By, imgGroupImageArraySize);
    menuImageOffsetTop = new Array(imgGroupImageArraySize); // By, imgGroupImageArraySize);

    // // Image Postioning Offsets - Large
    // ////////////////////////////////////////////////
    // // Not currently in use
    // menuImageOffsetLeftLarge = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);
    // menuImageOffsetTopLarge = new Array(imgGroupArraySize); // By, imgGroupImageArraySize);

    // Mouse tracking
    ////////////////////////////////////////////////
    imgAniToggle = new Array(imgGroupImageArraySize);
    imgMouseHover = new Array(imgGroupImageArraySize);
}
//
function menuImageGroupInit(oObjGroupIndex, oObjGroupIndexMaxPassed) {
    // Number of Items in this Group
    oObjGroupIndexMax = imgMaxByGroup[oObjGroupIndex];
    // The greater of the two Max's
    if (oObjGroupIndexMaxPassed > oObjGroupIndexMax) { oObjGroupIndexMax = oObjGroupIndexMaxPassed; }
    // Image Object Array
    if (menuImage == null) { menuImageCreate(); }

    // menuImage[oObjGroupIndex] = new Array(oObjGroupIndex);

    // First Image Parent Postion By Group, Top, Left, Right/Width, Bottom/Height
    menuImageRootPosition[oObjGroupIndex] = new Array(4); // By Top, Left, Right/Width, Bottom/Height

    // Image Display (Visible) Locked Array
    ////////////////////////////////////////////////
    menuImageTimerCn[oObjGroupIndex] = new Array(oObjGroupIndexMax);
    menuImageLocked[oObjGroupIndex] = new Array(oObjGroupIndexMax);

    // Image Position
    ////////////////////////////////////////////////
    // Position of Parent Image (Parent of First only stored at this time)
    menuImagePositionLeft[oObjGroupIndex] = new Array(oObjGroupIndexMax);
    menuImagePositionTop[oObjGroupIndex] = new Array(oObjGroupIndexMax);
    menuImagePositionWidth[oObjGroupIndex] = new Array(oObjGroupIndexMax);
    menuImagePositionHeight[oObjGroupIndex] = new Array(oObjGroupIndexMax);

    // Animation Timer by Group by Image
    menuImageTimerCn[oObjGroupIndex] = new Array(oObjGroupIndexMax);
    menuImageLocked[oObjGroupIndex] = new Array(oObjGroupIndexMax);

    // Mouse tracking
    ////////////////////////////////////////////////
    imgAniToggle[oObjGroupIndex] = new Array(oObjGroupIndexMax);
    imgMouseHover[oObjGroupIndex] = new Array(oObjGroupIndexMax);

    // Image Postioning Offsets
    ////////////////////////////////////////////////
    // These are layout postion patterns to be applied
    // Menu Images (by Groups) - Image Object Array
    menuImageOffsetFirst[oObjGroupIndex] = new Array(4); // By Top, Left (2)
    for (oPosIndex = 0; oPosIndex < 4; oPosIndex++) {
        // Menu Images (by Groups) - Image Object Array
        menuImageOffsetFirst[oObjGroupIndex] [oPosIndex] = new Array(2);
        for (SizeIndex = 0; SizeIndex < 2; SizeIndex++) {
            menuImageOffsetFirst[oObjGroupIndex] [oPosIndex] [SizeIndex] = 0;
        }
    }

    // These are layout postion patterns to be applied
    menuImageOffsetLeft[oObjGroupIndex] = new Array(oObjGroupIndexMax);
    menuImageOffsetTop[oObjGroupIndex] = new Array(oObjGroupIndexMax);

    // Small and large images
    ////////////////////////////////////////////////
    for (oObjIndex = 0; oObjIndex < 1 + oObjGroupIndexMax; oObjIndex++) {
        // These are layout postion patterns to be applied
        menuImageOffsetLeft[oObjGroupIndex] [oObjIndex] = new Array(2);
        menuImageOffsetTop[oObjGroupIndex] [oObjIndex] = new Array(2);

        // Timers and locks
        menuImageTimerCn[oObjGroupIndex] [oObjIndex] = new Array(2);
        menuImageLocked[oObjGroupIndex] [oObjIndex] = new Array(2);

        // Mouse tracking
        ////////////////////////////////////////////////
        imgAniToggle[oObjGroupIndex] [oObjIndex] = new Array(2);
        imgMouseHover[oObjGroupIndex] [oObjIndex] = new Array(2);

        // Image Postioning Offsets
        // These are layout postion patterns to be applied
        menuImagePositionLeft[oObjGroupIndex] [oObjIndex] = new Array(2);
        menuImagePositionTop[oObjGroupIndex] [oObjIndex] = new Array(2);
        menuImagePositionWidth[oObjGroupIndex] [oObjIndex] = new Array(2);
        menuImagePositionHeight[oObjGroupIndex] [oObjIndex] = new Array(2);
        //
        for (SizeIndex = 0; SizeIndex < 2; SizeIndex++) {
            // offsets
            menuImageOffsetLeft[oObjGroupIndex] [oObjIndex] [SizeIndex] = 0;
            menuImageOffsetTop[oObjGroupIndex] [oObjIndex] [SizeIndex] = 0;
            // timers
            menuImageTimerCn[oObjGroupIndex] [oObjIndex] [SizeIndex] = 0;
            menuImageLocked[oObjGroupIndex] [oObjIndex] [SizeIndex] = 0;
            // Mouse tracking
            ////////////////////////////////////////////////
            imgAniToggle[oObjGroupIndex] [oObjIndex] [SizeIndex] = 0;
            imgMouseHover[oObjGroupIndex] [oObjIndex] [SizeIndex] = 0;
            // position
            menuImagePositionLeft[oObjGroupIndex] [oObjIndex] [SizeIndex] = 0;
            menuImagePositionTop[oObjGroupIndex] [oObjIndex] [SizeIndex] = 0;
            menuImagePositionWidth[oObjGroupIndex] [oObjIndex] [SizeIndex] = 0;
            menuImagePositionHeight[oObjGroupIndex] [oObjIndex] [SizeIndex] = 0;
        }
    }
}

script_state = "MdmStandard Menu Image definition (array) construstion. (Group Init)";
if (debugLoadIsOn) { debugger; }
