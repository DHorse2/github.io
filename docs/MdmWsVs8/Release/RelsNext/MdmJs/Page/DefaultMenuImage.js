// Body Layout Selection - Menus
// ------------------------------------------------------------------------------------- _//
// BODY IMAGES
// ------------------------------------------------------------------------------------- _//
// GLOBAL / COMMON
////////////////////////////////////////////////
// Image range variables
var oObjIndexStart = 0;
var oObjIndexEnd = 0;

// Image Group
////////////////////////////////////////////////
// ./css/Page/{ThisPageCustom || Defauts}.js
//
var loadMenuImageDelay = false;
var loadMenuImageFirst = true;

// Image Group
////////////////////////////////////////////////
var imgGroupCount = 5;
var imgGroupBoxCount = 20

// Heading Image Group
////////////////////////////////////////////////
var headingGroupPointer = 6;
var headingGroupMax = 1;
var headingGroupCnStart = 6;
var headingGroupCnEnd = 6;
var headingGroupCnCurr = 6;

// Menu Groups
////////////////////////////////////////////////
// set the number of groups and the images per group
// Menu Current Image Object By Group
var bodyMenuGroupMax = 4;
var imgGroupCnStart = 1;
var imgGroupCnEnd = 4;

// Menu Maximum Images per each Group
////////////////////////////////////////////////
imgMaxByGroup[1] = 7;
imgMaxByGroup[2] = 4;
imgMaxByGroup[3] = 3;
imgMaxByGroup[4] = 8;

// Menu Maximum Images per each Group
////////////////////////////////////////////////
oObjectRowMax[1] = 4;
oObjectRowMax[2] = 9;
oObjectRowMax[3] = 9;
oObjectRowMax[4] = 6;
// First Image Offset By Group, Top, Left, Right, Bottom
////////////////////////////////////////////////
// menuImageRootPosition[1] = 0;
// menuImageRootPosition[2] = 0;
// menuImageRootPosition[3] = 0;
// menuImageRootPosition[4] = 0;

// Heading Image Group
////////////////////////////////////////////////
imgMaxByGroup[headingGroupCnCurr] = imgGroupBoxCount;

// Menu Groups
////////////////////////////////////////////////

// Offsets to adjust First Image Top Left
////////////////////////////////////////////////
// Default (All)
menuImageOffsetFirst[indexGroup] [indexTop] = 0;
menuImageOffsetFirst[indexGroup] [indexLeft] = 35;
// Menu Groups
// Cascade right
// Menu Group 1
menuImageOffsetFirst[1] [indexTop] = 0;
menuImageOffsetFirst[1] [indexLeft] = 15;
// Menu Group 2
menuImageOffsetFirst[2] [indexTop] = 0;
menuImageOffsetFirst[2] [indexLeft] = 15;
// Menu Group 3
menuImageOffsetFirst[3] [indexTop] = 0;
menuImageOffsetFirst[3] [indexLeft] = 15;
// Cascade left
// Menu Group 4
menuImageOffsetFirst[4] [indexTop] = 0;
menuImageOffsetFirst[4] [indexLeft] = -15;
// Menu Group 5
menuImageOffsetFirst[5] [indexTop] = 0;
menuImageOffsetFirst[5] [indexLeft] = -15;
// Menu Group 6
menuImageOffsetFirst[6] [indexTop] = 0;
menuImageOffsetFirst[6] [indexLeft] = -15;

// Offsets for cascading diaply
////////////////////////////////////////////////
for (var oSizeIndex = 0; oSizeIndex < 2; oSizeIndex++) {
    // oSizeIndex = IsImageSmall;
    // Default (All) Groups
    menuImageOffsetTop[indexGroup] [indexGroup] [oSizeIndex] = 25;
    menuImageOffsetLeft[indexGroup] [indexGroup] [oSizeIndex] = 25;
    // Menu Group 1
    // Default (All)
    // Down Right
    menuImageOffsetTop[1] [indexGroup] [oSizeIndex] = 25;
    menuImageOffsetLeft[1] [indexGroup] [oSizeIndex] = 25;
    // Boxes
    menuImageOffsetTop[1] [1] [oSizeIndex] = 0; menuImageOffsetLeft[1] [1] [oSizeIndex] = 0;
    menuImageOffsetTop[1] [2] [oSizeIndex] = 0; menuImageOffsetLeft[1] [2] [oSizeIndex] = 0;
    menuImageOffsetTop[1] [3] [oSizeIndex] = 0; menuImageOffsetLeft[1] [3] [oSizeIndex] = 0;
    menuImageOffsetTop[1] [4] [oSizeIndex] = 0; menuImageOffsetLeft[1] [4] [oSizeIndex] = 0;
    menuImageOffsetTop[1] [5] [oSizeIndex] = 0; menuImageOffsetLeft[1] [5] [oSizeIndex] = 0;
    menuImageOffsetTop[1] [6] [oSizeIndex] = 0; menuImageOffsetLeft[1] [6] [oSizeIndex] = 0;
    menuImageOffsetTop[1] [7] [oSizeIndex] = 0; menuImageOffsetLeft[1] [7] [oSizeIndex] = 0;
    // Menu Group 2
    // Default (All)
    // Up Right
    menuImageOffsetTop[2] [indexGroup] [oSizeIndex] = -60;
    menuImageOffsetLeft[2] [indexGroup] [oSizeIndex] = 50;
    // Boxes
    menuImageOffsetTop[2] [1] [oSizeIndex] = 0; menuImageOffsetLeft[2] [1] [oSizeIndex] = 0;
    menuImageOffsetTop[2] [2] [oSizeIndex] = 0; menuImageOffsetLeft[2] [2] [oSizeIndex] = 0;
    menuImageOffsetTop[2] [3] [oSizeIndex] = 0; menuImageOffsetLeft[2] [3] [oSizeIndex] = 0;
    menuImageOffsetTop[2] [4] [oSizeIndex] = 0; menuImageOffsetLeft[2] [4] [oSizeIndex] = 0;
    // Menu Group 3
    // Default (All)
    menuImageOffsetTop[3] [indexGroup] [oSizeIndex] = -20;
    menuImageOffsetLeft[3] [indexGroup] [oSizeIndex] = 75;
    // Boxes
    menuImageOffsetTop[3] [1] [oSizeIndex] = 0; menuImageOffsetLeft[3] [1] [oSizeIndex] = 0;
    menuImageOffsetTop[3] [2] [oSizeIndex] = 0; menuImageOffsetLeft[3] [2] [oSizeIndex] = 0;
    menuImageOffsetTop[3] [3] [oSizeIndex] = 0; menuImageOffsetLeft[3] [3] [oSizeIndex] = 0;
    // Menu Group 4
    // Default (All)
    menuImageOffsetTop[4] [indexGroup] [oSizeIndex] = 75;
    menuImageOffsetLeft[4] [indexGroup] [oSizeIndex] = -15;
    // Boxes
    menuImageOffsetTop[4] [1] [oSizeIndex] = 0; menuImageOffsetLeft[4] [1] [oSizeIndex] = 0;
    menuImageOffsetTop[4] [2] [oSizeIndex] = 0; menuImageOffsetLeft[4] [2] [oSizeIndex] = 0;
    menuImageOffsetTop[4] [3] [oSizeIndex] = 0; menuImageOffsetLeft[4] [3] [oSizeIndex] = 0;
    menuImageOffsetTop[4] [4] [oSizeIndex] = 0; menuImageOffsetLeft[4] [4] [oSizeIndex] = 0;
    menuImageOffsetTop[4] [5] [oSizeIndex] = 0; menuImageOffsetLeft[4] [5] [oSizeIndex] = 0;
    menuImageOffsetTop[4] [6] [oSizeIndex] = 0; menuImageOffsetLeft[4] [6] [oSizeIndex] = 0;
    menuImageOffsetTop[4] [7] [oSizeIndex] = -250; menuImageOffsetLeft[4] [7] [oSizeIndex] = 0;
    menuImageOffsetTop[4] [8] [oSizeIndex] = 0; menuImageOffsetLeft[4] [8] [oSizeIndex] = 0;

}
script_state = "MdmStandard Default Menu Image definitions";
if (debugLoadIsOn) { debugger; }
