//
function menuImageGroupInitAll(menuImage, imgGroupMax) {
    // Image Object Array
    menuImage = new Array(imgGroupCount);// By, imgGroupBoxMax);
    for (imgGroupIndex = 0; imgGroupIndex < 1 + imgGroupMax; imgGroupIndex++) {
        menuImageGroupInit(imgGroupIndex, imgMaxByGroup[imgGroupIndex], menuImage)
    }
}
//
function menuImageGroupInit(imgGroupIndex, imgGroupBoxMax, menuImage) {
    imgGroupImageArraySize = imgGroupBoxMax + 1;
    // Image Object Array
    if (!menuImage) {
        menuImage = new Array(imgGroupCount);
    }
    if (!menuImage[imgGroupIndex]) {
        menuImage[imgGroupIndex] = new Array(imgGroupImageArraySize);// By, imgGroupImageArraySize);
        // Current Image Position Offset
        ////////////////////////////////////////////////
        // var oObjNextOffsetTop;
        // var oObjNextOffsetLeft;
        // Current Image Index By Group
        // imgCnByGroup = new Array(imgGroupCount);
        // Maximum # of Images By Group
        ////////////////////////////////////////////////
        // imgMaxByGroup = new Array(imgGroupCount);
        // Maximum # of Images Per Cascading Row By Group
        // oObjectRowMax = new Array(imgGroupCount);
        // Image Display (Visible) Locked Array
        ////////////////////////////////////////////////
        menuImageLocked = new Array(imgGroupCount);// By, imgGroupImageArraySize);
        // menuImageLocked[oObjGroupIndex] = new Array(imgGroupImageArraySize);
        // First Image Parent Postion By Group, Top, Left, Right/Width, Bottom/Height
        // menuImageRootPosition = new Array(imgGroupCount);// By Top, Left, Right/Width, Bottom/Height
        // Image Position
        ////////////////////////////////////////////////
        // Position of Parent Image (Parent of First only stored at this time)
        menuImagePositionLeft = new Array(imgGroupCount);// By, imgGroupImageArraySize);
        menuImagePositionTop = new Array(imgGroupCount);// By, imgGroupImageArraySize);
        menuImagePositionWidth = new Array(imgGroupCount);// By, imgGroupImageArraySize);
        menuImagePositionHeight = new Array(imgGroupCount);// By, imgGroupImageArraySize);
        // Animation Timer by Group by Image
        ////////////////////////////////////////////////
        menuImageTimerCn = new Array(imgGroupCount);// By, imgGroupImageArraySize);
        // Offsets
        ////////////////////////////////////////////////
        menuImageOffsetFirstAll = new Array(imgGroupCount);// By Top, Left (2)
        menuImageOffsetLeftAll = new Array(imgGroupCount);// By, imgGroupImageArraySize);
        menuImageOffsetTopAll = new Array(imgGroupCount); // By, imgGroupImageArraySize);
    }
    // Add Second Dimention (imgGroupBoxMax)
    ////////////////////////////////////////////////
    for (oObjGroupIndex = 0; oObjGroupIndex < 1 + imgGroupCount; oObjGroupIndex++) {
        // Image Object Array
        ////////////////////////////////////////////////
        // if (!menuImage[imgGroupIndex]) {
        //     menuImage[imgGroupIndex] = new Array(imgGroupBoxMax);// By, imgGroupBoxMax);
        // }
        menuImage[oObjGroupIndex] = new Array(imgGroupBoxMax);
        // First Image Offset By Group, By Top, Leftdd
        ////////////////////////////////////////////////
        menuImageOffsetFirstAll[oObjGroupIndex] = new Array(2);// By Top, Left (2)
        // First Image Parent Postion By Group, Top, Left, Right/Width, Bottom/Height
        menuImageRootPosition[oObjGroupIndex] = new Array(4);// By Top, Left, Right/Width, Bottom/Height
        // Image Display (Visible) Locked Array
        ////////////////////////////////////////////////
        menuImageLocked[oObjGroupIndex] = new Array(imgGroupBoxMax);
        // Image Position
        // Position of Parent Image (Parent of First only stored at this time)
        menuImagePositionLeft[oObjGroupIndex] = new Array(imgGroupBoxMax);
        menuImagePositionTop[oObjGroupIndex] = new Array(imgGroupBoxMax);
        menuImagePositionWidth[oObjGroupIndex] = new Array(imgGroupBoxMax);
        menuImagePositionHeight[oObjGroupIndex] = new Array(imgGroupBoxMax);
        // Animation Timer by Group by Image
        menuImageTimerCn[oObjGroupIndex] = new Array(imgGroupBoxMax);
        ////////////////////////////////////////////////
        for (oObjIndex = 0; oObjIndex < 1 + imgGroupBoxMax; oObjIndex++) {
            // Image Postioning Offsets
            // These are layout postion patterns to be applied
            menuImageLocked[oObjGroupIndex][oObjIndex] = new Array(2);
            // Small and large images
            menuImagePositionLeft[oObjGroupIndex][oObjIndex] = new Array(2);
            menuImagePositionTop[oObjGroupIndex][oObjIndex] = new Array(2);
            menuImagePositionWidth[oObjGroupIndex][oObjIndex] = new Array(2);
            menuImagePositionHeight[oObjGroupIndex][oObjIndex] = new Array(2);
            //
            for (SizeIndex = 0; SizeIndex < 2; SizeIndex++) {
                menuImagePositionLeft[oObjGroupIndex][oObjIndex][SizeIndex] = 0;
                menuImagePositionTop[oObjGroupIndex][oObjIndex][SizeIndex] = 0;
                menuImagePositionWidth[oObjGroupIndex][oObjIndex][SizeIndex] = 0;
                menuImagePositionHeight[oObjGroupIndex][oObjIndex][SizeIndex] = 0;
            }
        }
        // Image Postioning Offsets
        // These are layout postion patterns to be applied
        // Menu Images (by Groups) - Image Object Array
        menuImageOffsetFirstAll[oObjGroupIndex] = new Array(imgGroupBoxMax);// By Top, Left (2)
        // These are layout postion patterns to be applied
        menuImageOffsetLeftAll[oObjGroupIndex] = new Array(imgGroupBoxMax);
        menuImageOffsetTopAll[oObjGroupIndex] = new Array(imgGroupBoxMax);
        //
    }
}

script_state = "MdmStandard Menu Image definition (array) construstion. (Group Init)";
if (debugLoadIsOn) { debugger; }
