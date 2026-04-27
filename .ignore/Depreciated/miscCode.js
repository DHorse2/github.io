// Document Layout Size of Core Layout Boxes
function WindowContainerSizeGetMenuDepreciated(elementPassed) {
    // Height of left and right menu containers:
    // Greatest height when layed out side by side
    layoutBodySizeHorzMax = 0;
    // Greatest height when layed out vertically
    layoutBodySizeVertMax = 0;
    // Note: that HorzMax indicates the maximum height
    // of the menu groups layed out horizontally side by side.
    // It is not the width nor the accumulated height (VertMax)
    //
    // Note: The implies assumption that the left menu is taller than the right menu
    // or that the first Left menu group (menuGroup1) is the tallest of the three
    // Left groups is temporary and is not reliable.
    //
    // The Left menu elements are extracted from one of:
    // 		bodyMainCenterTopLeft
    //		bodyLayoutMenu1
    //............................................................---//
    layoutMenuSizeVertMax = 0
    layoutMenuSizeHorzMax = 0;
    for (bodyMenuGroupIndex = 0; bodyMenuGroupIndex < 1 + bodyMenuGroupUsedCn; bodyMenuGroupIndex++) {
        // var menuGroup1;
        // var menuGroup2;
        // var menuGroup3;
        // Left menuGroup1, 2, 3
        // Load the Menu Group element
        // todo not really correct.
        if (bodyMenuGroup[bodyMenuGroupIndex]) {
            // todo this fails call:
            if (!bodyMenuGroup[bodyMenuGroupIndex]) {
                if (elementPassed) {
                    bodyMenuGroup[bodyMenuGroupIndex] = ElementGetRefFromElement(null, 'MenuGroup' + bodyMenuGroupIndex, 'MenuGroup' + bodyMenuGroupIndex, elementPassed);
                    // bodyMenuGroup[bodyMenuGroupIndex] = ElementGetRefFromElement(bodyMenuGroup[bodyMenuGroupIndex], 'MenuGroup' + bodyMenuGroupIndex, 'MenuGroup' + bodyMenuGroupIndex, elementPassed);
                    // menuGroup1 = ElementGetRefFromElement(menuGroup1, 'MenuGroup1', 'MenuGroup1', elementPassed);
                    // menuGroup2 = ElementGetRefFromElement(menuGroup2, 'MenuGroup2', 'MenuGroup2', elementPassed);
                    // menuGroup3 = ElementGetRefFromElement(menuGroup3, 'MenuGroup3', 'MenuGroup3', elementPassed);
                }
            }
            // Get the height
            bodyMenuGroupHeight[bodyMenuGroupIndex] = ElementHeightMaxGet(true, true, bodyMenuGroup[bodyMenuGroupIndex]);
            // bodyMenuGroupHeight[1] = ElementHeightMaxGet(true, true, menuGroup1);
            // bodyMenuGroupHeight[2] = ElementHeightMaxGet(true, true, menuGroup2);
            // bodyMenuGroupHeight[3] = ElementHeightMaxGet(true, true, menuGroup3);
            //
            // You add up the height
            layoutMenuSizeVertMax += bodyMenuGroupHeight[bodyMenuGroupIndex];
            // layoutMenuSizeVertMax = bodyMenuGroupHeight[1] + bodyMenuGroupHeight[2] + bodyMenuGroupHeight[3];
            //
            // You want to know the widest group
            // layoutMenuSizeHorzMax = 0;
            if (layoutMenuSizeHorzMax < bodyMenuGroupHeight[bodyMenuGroupIndex]) { layoutMenuSizeHorzMax = bodyMenuGroupHeight[bodyMenuGroupIndex]; }
            // if (layoutMenuSizeHorzMax < bodyMenuGroupHeight[1]) { layoutMenuSizeHorzMax = bodyMenuGroupHeight[1]; }
            // if (layoutMenuSizeHorzMax < bodyMenuGroupHeight[2]) { layoutMenuSizeHorzMax = bodyMenuGroupHeight[2]; }
            // if (layoutMenuSizeHorzMax < bodyMenuGroupHeight[3]) { layoutMenuSizeHorzMax = bodyMenuGroupHeight[3]; }
            //
        }
    }
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Document Layout Size of Core Layout Boxes
function WindowContainerSizeGetMenuDepreciated2(elementPassed) {
    // Height of left and right menu containers:
    // Greatest height when layed out side by side
    layoutBodySizeHorzMax = 0;
    // Greatest height when layed out vertically
    layoutBodySizeVertMax = 0;
    // Note: that HorzMax indicates the maximum height
    // of the menu groups layed out horizontally side by side.
    // It is not the width nor the accumulated height (VertMax)
    //
    // Note: The implies assumption that the left menu is taller than the right menu
    // or that the first Left menu group (menuGroup1) is the tallest of the three
    // Left groups is temporary and is not reliable.
    //
    // The Left menu elements are extracted from one of:
    // 		bodyMainCenterTopLeft
    //		bodyLayoutMenu1
    //............................................................---//
    var menuGroup1;
    var menuGroup2;
    var menuGroup3;
    // Left menuGroup1, 2, 3
    if (!menuGroup1) {
        if (elementPassed) {
            menuGroup1 = ElementGetRefFromElement(menuGroup1, 'MenuGroup1', 'MenuGroup1', elementPassed);
            menuGroup2 = ElementGetRefFromElement(menuGroup2, 'MenuGroup2', 'MenuGroup2', elementPassed);
            menuGroup3 = ElementGetRefFromElement(menuGroup3, 'MenuGroup3', 'MenuGroup3', elementPassed);
        }
    }
    //
    bodyMenuGroupHeight[1] = ElementHeightMaxGet(true, true, menuGroup1);
    bodyMenuGroupHeight[2] = ElementHeightMaxGet(true, true, menuGroup2);
    bodyMenuGroupHeight[3] = ElementHeightMaxGet(true, true, menuGroup3);
    //
    layoutMenuSizeVertMax = bodyMenuGroupHeight[1] + bodyMenuGroupHeight[2] + bodyMenuGroupHeight[3];
    //
    layoutMenuSizeHorzMax = 0;
    if (layoutMenuSizeHorzMax < bodyMenuGroupHeight[1]) { layoutMenuSizeHorzMax = bodyMenuGroupHeight[1]; }
    if (layoutMenuSizeHorzMax < bodyMenuGroupHeight[2]) { layoutMenuSizeHorzMax = bodyMenuGroupHeight[2]; }
    if (layoutMenuSizeHorzMax < bodyMenuGroupHeight[3]) { layoutMenuSizeHorzMax = bodyMenuGroupHeight[3]; }
    //
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

