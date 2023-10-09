//
function BodyMenuInit() {
    // // Timers
    // timerObj = new Array(bodyMenuGroupUsedCn);
    // Containers
    bodyMenuContainer = new Array(2);
    bodyMenuContainer[bodyMenuLeft] = new Array(bodyMenuGroupUsedCn);
    bodyMenuContainer[bodyMenuRight] = new Array(bodyMenuGroupUsedCn);
    // Groups
    bodyMenuGroup = new Array(bodyMenuGroupUsedCn);
    // var bodyMenuGroupSave = new Array(bodyMenuGroupUsedCn);
    bodyMenuGroupTop = new Array(bodyMenuGroupUsedCn);
    bodyMenuGroupHeight = new Array(bodyMenuGroupUsedCn);
    bodyMenuGroupColBreak = new Array(bodyMenuGroupUsedCn);

    for (bodyMenuGroupIndex = 0; bodyMenuGroupIndex < 1+bodyMenuGroupUsedCn; bodyMenuGroupIndex++) {
        bodyMenuGroup[bodyMenuGroupIndex] = null;
        bodyMenuGroupTop[bodyMenuGroupIndex] = 0;
        bodyMenuGroupHeight[bodyMenuGroupIndex] = 0;
        bodyMenuGroupColBreak[bodyMenuGroupIndex] = 0;
        bodyMenuContainer[bodyMenuLeft][bodyMenuGroupIndex] = null;
        bodyMenuContainer[bodyMenuRight][bodyMenuGroupIndex] = null;
    }
}
function menuImageGroupInitAll(imgGroupMax) {
    // Image Object Array
    menuImage = new Array(imgGroupImageArraySize); // By, imgGroupBoxMax);
    for (imgGroupIndex = 0; imgGroupIndex < 1 + imgGroupImageArraySize; imgGroupIndex++) {
        menuImageGroupInit(imgGroupIndex, imgMaxByGroup[imgGroupIndex])
    }
}
//
function menuImageGroupInit(imgGroupIndex, imgGroupBoxMaxPassed) {
    imgGroupBoxMax = imgMaxByGroup[imgGroupIndex];
    // Image Object Array
    if (!menuImage) {
        menuImage = new Array(imgGroupImageArraySize);
    }
    if (!menuImage[imgGroupIndex]) {
        menuImage[imgGroupIndex] = new Array(imgGroupImageArraySize); // By, imgGroupImageArraySize);
        // Current Image Position Offset
        ////////////////////////////////////////////////
        // var oObjNextOffsetTop;
        // var oObjNextOffsetLeft;
        // Current Image Index By Group
        // imgCnByGroup = new Array(imgGroupImageArraySize);
        // Maximum # of Images By Group
        ////////////////////////////////////////////////
        // imgMaxByGroup = new Array(imgGroupImageArraySize);
        // Maximum # of Images Per Cascading Row By Group
        // oObjectRowMax = new Array(imgGroupImageArraySize);
        // Image Display (Visible) Locked Array
        ////////////////////////////////////////////////
        menuImageTimerCn= new Array(imgGroupImageArraySize);
        menuImageLocked = new Array(imgGroupImageArraySize); // By, imgGroupImageArraySize);
        // menuImageLocked[oObjGroupIndex] = new Array(imgGroupImageArraySize);
        // First Image Parent Postion By Group, Top, Left, Right/Width, Bottom/Height
        // menuImageRootPosition = new Array(imgGroupImageArraySize); // By Top, Left, Right/Width, Bottom/Height
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
        menuImageOffsetFirstAll = new Array(imgGroupImageArraySize); // By Top, Left (2)
        menuImageOffsetLeftAll = new Array(imgGroupImageArraySize); // By, imgGroupImageArraySize);
        menuImageOffsetTopAll = new Array(imgGroupImageArraySize); // By, imgGroupImageArraySize);
        // Mouse tracking
        ////////////////////////////////////////////////
        imgAniToggle = new Array(imgGroupImageArraySize);
        imgMouseHover = new Array(imgGroupImageArraySize);
    }
    // Add Second Dimention (imgGroupBoxMax)
    ////////////////////////////////////////////////
    for (oObjGroupIndex = 0; oObjGroupIndex < 1 + imgGroupImageArraySize; oObjGroupIndex++) {
        imgGroupBoxMax = imgMaxByGroup[oObjGroupIndex];
        // Image Object Array
        ////////////////////////////////////////////////
        // if (!menuImage[imgGroupIndex]) {
        //     menuImage[imgGroupIndex] = new Array(imgGroupBoxMax); // By, imgGroupBoxMax);
        // }
        menuImage[oObjGroupIndex] = new Array(imgGroupBoxMax);
        // First Image Offset By Group, By Top, Leftdd
        ////////////////////////////////////////////////
        menuImageOffsetFirstAll[oObjGroupIndex] = new Array(2); // By Top, Left (2)
        // First Image Parent Postion By Group, Top, Left, Right/Width, Bottom/Height
        menuImageRootPosition[oObjGroupIndex] = new Array(4); // By Top, Left, Right/Width, Bottom/Height
        // Image Display (Visible) Locked Array
        ////////////////////////////////////////////////
        menuImageTimerCn[oObjGroupIndex] = new Array(imgGroupBoxMax);
        menuImageLocked[oObjGroupIndex] = new Array(imgGroupBoxMax);
        // Image Position
        ////////////////////////////////////////////////
        // Position of Parent Image (Parent of First only stored at this time)
        menuImagePositionLeft[oObjGroupIndex] = new Array(imgGroupBoxMax);
        menuImagePositionTop[oObjGroupIndex] = new Array(imgGroupBoxMax);
        menuImagePositionWidth[oObjGroupIndex] = new Array(imgGroupBoxMax);
        menuImagePositionHeight[oObjGroupIndex] = new Array(imgGroupBoxMax);
        // Animation Timer by Group by Image
        menuImageTimerCn[oObjGroupIndex] = new Array(imgGroupBoxMax);
        menuImageLocked[oObjGroupIndex] = new Array(imgGroupBoxMax);
        // Mouse tracking
        ////////////////////////////////////////////////
        imgAniToggle = new Array(imgGroupImageArraySize);
        imgMouseHover = new Array(imgGroupImageArraySize);
        // Image Postioning Offsets
        ////////////////////////////////////////////////
        // These are layout postion patterns to be applied
        // Menu Images (by Groups) - Image Object Array
        menuImageOffsetFirstAll[oObjGroupIndex] = new Array(imgGroupBoxMax); // By Top, Left (2)
        // These are layout postion patterns to be applied
        menuImageOffsetLeftAll[oObjGroupIndex] = new Array(imgGroupBoxMax);
        menuImageOffsetTopAll[oObjGroupIndex] = new Array(imgGroupBoxMax);

        // Small and large images
        ////////////////////////////////////////////////
        for (oObjIndex = 0; oObjIndex < 1 + imgGroupBoxMax; oObjIndex++) {
            // Image Postioning Offsets
            // These are layout postion patterns to be applied
            menuImageTimerCn[oObjGroupIndex][oObjIndex] = new Array(2);
            menuImageLocked[oObjGroupIndex][oObjIndex] = new Array(2);

            menuImagePositionLeft[oObjGroupIndex][oObjIndex] = new Array(2);
            menuImagePositionTop[oObjGroupIndex][oObjIndex] = new Array(2);
            menuImagePositionWidth[oObjGroupIndex][oObjIndex] = new Array(2);
            menuImagePositionHeight[oObjGroupIndex][oObjIndex] = new Array(2);
            //
            for (SizeIndex = 0; SizeIndex < 2; SizeIndex++) {
                menuImageTimerCn[oObjGroupIndex][oObjIndex][SizeIndex] = 0;
                menuImageLocked[oObjGroupIndex][oObjIndex][SizeIndex] = 0;
                menuImagePositionLeft[oObjGroupIndex][oObjIndex][SizeIndex] = 0;
                menuImagePositionTop[oObjGroupIndex][oObjIndex][SizeIndex] = 0;
                menuImagePositionWidth[oObjGroupIndex][oObjIndex][SizeIndex] = 0;
                menuImagePositionHeight[oObjGroupIndex][oObjIndex][SizeIndex] = 0;
            }
        }
    }
}

script_state = "MdmStandard Menu Image definition (array) construstion. (Group Init)";
if (debugLoadIsOn) { debugger; }
