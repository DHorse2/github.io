// ------------------------------------------------------------------------------------- _//
// Elements
// ------------------------------------------------------------------------------------- _//
// Layout Height Get
var heightBase = 0;
var heightOffset = 0;
var heightScroll = 0;
var heightClient = 0;
var heightNode = 0;
var heightRects = 0;
var clientRectsIndex = 0;
// Element Get Pointer
function ElementGetRef(elementObject, elementObjectId, elementObjectName) {
    elementObject = ElementGetFromId(elementObjectId);
    if (!elementObject) {
        if (!elementObjectName.length) { elementObjectName = elementObjectId; }
        elementObject = ElementGetFromId(elementObjectName);
    }
    return elementObject;
}

function ElementGetFromElement(
    elementPassed, elementIdPassed, elementNamePassed,
    elementSourcePassed
) {
    return ElementGetFromElementExt(
        elementPassed, elementIdPassed, elementNamePassed,
        elementSourcePassed,
        DoFindReturn, null);
}

function ElementGetFromElementExt(
    elementPassed, elementIdPassed, elementNamePassed,
    elementSourcePassed,
    DoFindSetPassed, elementValuePassed
) {
    // Dest = ElementGetFromElement(Dest, 'DestId', 'DestName', Source);
    //
    var elementChildObject;
    var elementTempFirst = true;
    elementFound = false;
    //
    // elementPassed = ElementCreate(elementPassed, elementTempFirst);
    //
    // Loop through each child node of elementObject
    // and retrieve the original element from the document.
    //
    elementChildObject = elementSourcePassed.querySelector('#' + elementIdPassed);
    if (elementChildObject) { return elementChildObject; }
    //
    for (var elmCn = 0; elmCn < 1 + elementSourcePassed.childNodes.length; elmCn++) {
        elementChildObject = elementSourcePassed.childNodes[elmCn];
        if (elementChildObject) {
            if (elementChildObject.id) {
                if (elementChildObject.id != null) {
                    if (elementChildObject.id != '' && elementChildObject.id == elementIdPassed) {
                        //
                        if (DoFindSetPassed == DoFindSet) {
                            // set the source element to the passed one.
                            if (elementFound) {
                                elementSourcePassed.childNodes[elmCn] = elementPassed;
                            } else {
                                elementSourcePassed.childNodes[elmCn] = elementValuePassed;
                                elementFound = true;
                            }
                            // pass the matching element found in the source
                            // return elementSourcePassed.childNodes[elmCn];
                            return elementChildObject;
                        }
                        if (!elementFound) {
                            elementPassed = elementChildObject;
                            elementFound = true;
                        }
                        //
                        // elementObject = ElementGetFromId(elementObjectId);
                        return elementPassed;
                    }
                } // end of length and id match
                //
                if (elementChildObject.childNodes) {
                    if (elementChildObject.childNodes.length) {
                        elementPassed = ElementGetFromElementExt(elementPassed, elementIdPassed, elementNamePassed, elementChildObject, DoFindSetPassed, elementValuePassed);
                        if (elementFound) { return elementPassed; }
                    }
                }
            } // end of id exists
        } // end of element exists
    } // end of for
    //
    elementFound = false;
    return null;
}
// Layout Menu Area Element Common Fields Set
function ElementGetFromElementId(elementObject, elementObjectId, elementObjectName, elementSourcePassed) {
    // DOES THIS NEED TO BE COPIES.
    // As written it results in pointers into the Source Document
    // Dest = ElementGetFromElement(Dest, "DestId", "DestName", Source);
    var elementObjectResult;
    if (!elementObjectName.length && elementObjectId.length) { elementObjectName = elementObjectId; }
    elementObjectResult = ElementGetFromId(elementObjectName)
    if (elementObjectResult) {
        return elementObjectResult;
    } else {
        return elementObject;
    }
} // ------------------------------------------------------------------------------------- _//
// Layout Menu Area Element Common Fields Set
function ElementCopy(UsePrefixPassed, prefixPassed, elementPassed, elementLayoutFirstPassed, elementSourcePassed, elementStyleDisplayPassed) {
    var elementIdCurr;
    var elementSourceIdCurr;
    // if (elementSourcePassed) {
    //     elementPassed = elementSourcePassed;
    //     elementPassed.style.display = elementStyleDisplayPassed;
    //     return elementPassed;
    // }
    if ("id" in elementSourcePassed) {
        elementSourceIdCurr = elementSourcePassed.id;
    } else { elementSourceIdCurr = ""; }
    //
    //---------------------------------------------------------------//
    if (!elementPassed) {
        if (elementSourcePassed) {
            if ("id" in elementSourcePassed) {
                elementIdCurr = elementSourcePassed.id;
            } else {
                if ("name" in elementSourcePassed) {
                    elementIdCurr = elementSourcePassed.name;
                } else { elementIdCurr = ""; }
            }
        } else { elementIdCurr = ""; }
        //
        elementPassed = document.createElement("div");
        // if (browserIsTEST) {
        //     elementPassed = document.createElement(elementIdCurr);
        // } else if (browserIsIE) {
        //     elementPassed = document.createElement();
        //     // elementPassed['id'] = elementIdCurr;
        // } else {
        //     elementPassed = document.createElement(elementIdCurr);
        // } // X32
        // // elementPassed = null;
    } else {
        if ("id" in elementPassed) {
            elementIdCurr = elementPassed.id;
        } else {
            if ("name" in elementPassed) {
                elementIdCurr = elementPassed.name;
            } else {
                elementIdCurr = "";
            }
        }
    }
    // Copy Source to Destination Element (Inner HTML, Events)
    if (elementPassed != null && elementSourcePassed != null) {
        // if ("id" in elementSourcePassed) {
        //     elementPassed.id = elementSourcePassed.id;
        // }
        if ("name" in elementSourcePassed) {
            elementPassed.name = elementSourcePassed.name;
        }
        if (elementSourcePassed.style) {
            elementPassed.style = elementSourcePassed.style;
        }
        // fix
        elementLayoutFirstPassed = true;
        if (elementLayoutFirstPassed) {
            if ("innerHTML" in elementPassed && "innerHTML" in elementSourcePassed) {
                // Copy HTML
                // elementPassed.appendChild(elementSourcePassed.clone());
                // elementPassed.appendChild(elementSourcePassed.cloneNode(true));

                elementPassed.innerHTML = elementSourcePassed.innerHTML;
                // // elementPassed.outerHTML = elementSourcePassed.outerHTML;
                // // elementPassed = elementSourcePassed;
                // // elementPassed = elementSourcePassed.cloneNode(true);
                //
                elementLayoutFirstPassed = false;
                // Element Events
                ElementEventsCopy(elementPassed, elementSourcePassed, elementPassed.id, elementSourcePassed.id)
            }
        }
        // if (elementPassed.innerHTML == null || elementPassed.innerHTML.length = 0) {
        // elementPassed.innerHTML = elementSourcePassed.innerHTML;
        // }
        elementPassed.style.display = elementStyleDisplayPassed;
    }

    if (UsePrefixPassed && prefixPassed && prefixPassed.lenth) {
        for (elementCurr in elementPassed) {
            if (elementCurr.id && elementCurr.id.length) {
                elementCurr.id = elementCurr.id + prefixPassed;
            }
        }
    }
    return elementPassed;
} // ------------------------------------------------------------------------------------- _//
// Layout Menu Area Element Common Fields Set
////////////////////////////////////////////////
function ElementFindInElement(elementObject, elementObjectId, elementObjectName, elementSourcePassed) {
    // Dest = ElementGetFromElement(Dest, "DestId", "DestName", Source);
    //
    var elementChildObject;
    //
    // Loop through each child node of elementObject
    // and retrieve the original element from the document.
    //
    for (elmCn = 1; elmCn < 1 + elementSourcePassed.childNodes.length; elmCn++) {
        elementChildObject = elementSourcePassed.childNodes[elmCn];
        if (elementChildObject) {
            if ("id" in elementChildObject) {
                if (elementChildObject.id.length && elementChildObject.id == elementObjectId.id) {
                    elementObject = elementChildObject;
                    // elementObject = ElementGetFromId(elementObjectId);
                    return elementObject;
                    //
                }
            }
        }
    }
    //
    return elementObject;
}
// Layout Menu Area Element Common Fields Set
////////////////////////////////////////////////
function ElementEventsCopy(elementObject, elementSourceObject, elementObjectId, elementSourceObjectId) {
    var elementChildObject;
    var elementSourceChildObject;
    //
    if (!elementObjectId.length) { elementObjectId = elementSourceObjectId; }
    //
    if (elementObjectId.length && elementSourceObjectId.length) {
        //
        if (!elementObject) { return; }
        // if (!elementObject)  {
        // elementObject = ElementGetRef(elementChildObject, elementObjectId, elementObjectId); }
        // if (elementObject.id != elementObjectId) {
        // elementObject = ElementGetRef(elementChildObject, elementObjectId, elementObjectId); }
        //
        if (!elementSourceObject) {
            elementSourceObject = ElementGetRef(elementSourceChildObject, elementSourceObjectId, elementSourceObjectId);
        }
        if (elementSourceObject.id != elementSourceObjectId) {
            elementSourceObject = ElementGetRef(elementSourceChildObject, elementSourceObjectId, elementSourceObjectId);
        }
    } else {
        if (!elementObject) { return; }
        if (!elementSourceObject) { return; }
        //
        if (typeof (elementObject) != "element") { return; }
        if (typeof (elementSourceObject) != "element") {
            elementObject = document.createElement();// X32
            // return;
        }
    }
    //
    // Loop through each child node of elementObject
    // and retrieve the original element from the document.
    // Copy mouse down, over and out events to elementObject.
    // Currently, SourceObject is not used.
    var elementItems = elementObject.getElementsByTagName('div');
    for (var item = 0; elementItems[item]; item++) {
        // if (elementPassed.childNodes.length)
        // for (elmCn = 1; elmCn < 1 + elementObject.childNodes.length; elmCn++) {
        // elementChildObject = elementObject.childNodes[elmCn];
        elementChildObject = elementItems[item];
        if (elementChildObject) {
            if ("id" in elementChildObject) {
                if (elementChildObject.id.length) {
                    elementSourceChildObject = ElementGetFromId(elementChildObject.id);
                    if (elementSourceChildObject) {
                        if (elementSourceChildObject.onmousedown) {
                            // elementChildObject.setAttribute("onmousedown", elementSourceChildObject.onmousedown , 0)
                            // .type, .handler?
                            elementChildObject.onmousedown = elementSourceChildObject.onmousedown;
                            // elementChildObject.addEventListener("onmousedown", elementSourceChildObject.onmousedown.handler);
                            // elementChildObject.addEventListener("onmousedown", elementSourceChildObject.onmousedown);
                        }
                        if (elementSourceChildObject.onmouseover) {
                            // elementChildObject.setAttribute("onmouseover", elementSourceChildObject.onmouseover , 0)
                            elementChildObject.onmouseover = elementSourceChildObject.onmouseover;
                            // elementChildObject.addEventListener("onmouseover", elementSourceChildObject.onmouseover.handler);
                            // elementChildObject.addEventListener("onmouseover", elementSourceChildObject.onmouseover);
                        }
                        if (elementSourceChildObject.onmouseout) {
                            // elementChildObject.setAttribute("onmouseout", elementSourceChildObject.onmouseout , 0)
                            elementChildObject.onmouseout = elementSourceChildObject.onmouseout;
                            // elementChildObject.addEventListener("onmouseout", elementSourceChildObject.onmouseout.handler);
                            // elementChildObject.addEventListener("onmouseout", elementSourceChildObject.onmouseout);
                        }
                    }
                }
            }
        }
    }
    return elementObject;
}
// Layout Menu Area Element Common Fields Set
////////////////////////////////////////////////
function ElementBreakSet(elementPassed, elementIdPassed, elementLayoutFirstPassed, elementStyleDisplayPassed, elementStyleVisibilityPassed, elsementStyleClearPassed) {
    if (!elementPassed) {
        elementPassed = ElementGetRef(elementPassed, elementIdPassed, elementIdPassed);
        // var elementPassed = elementPassed.childNodes[elementIdPassed];
        // var elementPassed = ElementGetFromId(elementIdPassed);
    }
    // Get Break Element from Parent
    var elementTarget;
    if (elementPassed && elementIdPassed.tagName) {
        elementTarget = document.createElement(elementPassed.tagName);
    } else { elementTarget = document.createElement("div"); }
    elementTarget = ElementGetFromElement(elementTarget, elementIdPassed, elementIdPassed, elementPassed);
    //
    // if (elementPassed.childNodes.length) {
    if (elementTarget) {
        if ("style" in elementTarget) {
            if ("display" in elementTarget.style) {
                if (elementStyleDisplayPassed.length) { elementTarget.style.display = elementStyleDisplayPassed; }
            } else { ErrorOccured("MdmElement:ElementBreakSet", 259, 0, null, elementTarget, elementPassed, "Element Break Set, Style missing", errorIsWarning, true, false); }
            //
            if ("visibility" in elementTarget.style) {
                if (elementStyleVisibilityPassed.length) { elementTarget.style.visibility = elementStyleVisibilityPassed; }
            } else { ErrorOccured("MdmElement:ElementBreakSet", 263, 0, null, elementTarget, elementPassed, "Element Break Set, Visibility missing", errorIsWarning, true, false); }
            //
            if ("clear" in elementTarget.style) {
                if (elsementStyleClearPassed.length) { elementTarget.style.clear = elsementStyleClearPassed; }
            } else { ErrorOccured("MdmElement:ElementBreakSet", 267, 0, null, elementTarget, elementPassed, "Element Break Set, Clear missing", errorIsWarning, true, false); }
        }
    }
    elementLayoutFirstPassed = false;
    // }
    return elementPassed;
}
// Element Position Get
////////////////////////////////////////////////
function ElementPosGetFromObj(oObjPassed) {
    var oObjTop = 0;
    var oObjLeft = 0;
    var oObjWidth = 0;
    var oObjHeight = 0;

    var currLeft = currTop = 0;
    //
    if (oObjPassed.offsetParent) {
        var oObjCurr = oObjPassed;
        do {
            // while (oObjPassed = oObjPassed.offsetParent) {
            currLeft += oObjCurr.offsetLeft;
            currTop += oObjCurr.offsetTop;
            // }
        } while (oObjCurr = oObjCurr.offsetParent);
        oObjTop = currTop;
        oObjLeft = currLeft;
        oObjWidth = oObjPassed.offsetWidth;
        oObjHeight = oObjPassed.offsetHeight;
    }
    // return [currTop, currLeft];
    return {
        Top: oObjTop,
        Left: oObjLeft,
        Width: oObjWidth,
        Height: oObjHeight
    };
}
// SectionBlock Element Get function (s)
// ...................................... //
// ..................................................................................... _//
function ElementGetFromId(IdPassed) {
    if (!IdPassed.length) {
        // error
        return;
    }
    if (browserIsIE || browserIsEdge || browserIsFF || browserIsCH || browserIsSA) {
        // browserIE or browserIsFF
        // elementObjectResult = window.document.querySelector(IdPassed)
        elementObject = document.getElementById(IdPassed);
        // what version?
        if (!elementObject) { elementObject = window.document.querySelector(IdPassed); }
    } else if (browserIsTEST) {
        // browserIsTEST
        elementObject = window.document.querySelector(IdPassed);
        if (!elementObject) { elementObject = document.getElementById(IdPassed); }
    } else {
        // elementObject = document.getElementById(IdPassed);
        elementObject = window.document.querySelector(IdPassed)
        if (!elementObject) { elementObject = document.getElementById(IdPassed); }
    }
    return elementObject;
}
// Layout Menu Area Element Common Fields Set
function ElementCreate(elementPassed, elementLayoutFirstPassed) {
    var elementCreate = false;
    if (!elementPassed) {
        elementCreate = true;
    } else if (!elementPassed.style) { elementCreate = true; }
    //
    if (elementCreate) {
        if (browserIsTEST) {
            elementPassed = document.createElement('div');
        } else if (browserIsIE) {
            elementPassed = document.createElement('div');
        } else if (browserIsFF) {
            elementPassed = document.createElement('div');
        } else {
            elementPassed = document.createElement('div');
        }
    }
    return elementPassed;
}
// SectionBlock Element Position & Dimension function (s)
// ..................................................................................... _//
// Element Position Get
// ...................................... //
function ElementPosGet(DoScroll, DoBase, elementPassed, layoutBlockWidthDefault, elHeightDefault) {
    return ElementPosCalculate(elementPassed);
}
// Element Position Calculate
// ...................................... //
function ElementPosCalculate(elementPassed) {
    var oObjTop = 0;
    var oObjLeft = 0;
    var oObjWidth = 0;
    var oObjHeight = 0;
    var currLeft = currTop = 0;
    var elTopDefault = 0;
    var elLeftDefault = 0;
    var elHeightDefault = 0;
    var elBottomDefault = 0;
    //
    oObjLeft = ElementLeftMaxGet(true, true, elementPassed, elLeftDefault);
    oObjTop = ElementTopMaxGet(true, true, elementPassed, elTopDefault);
    oObjWidth = ElementWidthMaxGet(true, true, elementPassed, layoutBlockWidthDefault);
    oObjHeight = ElementHeightMaxGet(true, true, elementPassed, elHeightDefault);
    // todo what does this do?
    if (elementPassed.offsetParent) {
        var oObjCurr = elementPassed;
        do {
            // while (oObjPassed == oObjPassed.offsetParent) {
            currLeft += parseInt(oObjCurr.offsetLeft);
            currTop += parseInt(oObjCurr.offsetTop);
            // }
        } while ((oObjCurr == oObjCurr.offsetParent));
        oObjTop = currTop;
        oObjLeft = currLeft;
        // oObjWidth = parseInt(oObjCurr.offsetWidth);
        // oObjHeight = parseInt(oObjCurr.offsetHeight);
        // oObjWidth = parseInt(elementPassed.offsetWidth);
        // oObjHeight = parseInt(elementPassed.offsetHeight);
    }
    return {
        Top: oObjTop,
        Left: oObjLeft,
        Width: oObjWidth,
        Height: oObjHeight
    };
}
// Layout Top Get
function ElementTopMaxGet(DoScroll, DoBase, elementPassed, elTopDefault) {
    var DoOffset = true;
    if (!elementPassed) { return 0; }
    if (!elementPassed.style) { return 0; }
    var thisTop = 0;
    var topBase = 0;
    var topOffset = 0;
    var topScroll = 0;
    var topClient = 0;
    if (elementPassed.style) {
        if (browserIsOld) {
            topBase = parseInt(elementPassed.style.top);
            topOffset = parseInt(elementPassed.offsetTop);
            topScroll = parseInt(elementPassed.scrollTop);
            topClient = parseInt(elementPassed.clientTop);
        } else {
            topBase = parseInt(window.getComputedStyle(elementPassed, null).getPropertyValue('Top'));
            topOffset = parseInt(window.getComputedStyle(elementPassed, null).getPropertyValue('offsetTop'));
            topScroll = parseInt(window.getComputedStyle(elementPassed, null).getPropertyValue('scrollTop'));
            topClient = parseInt(window.getComputedStyle(elementPassed, null).getPropertyValue('clientTop'));
        }
        //
        if (DoBase) {
            if (topBase > thisTop) { thisTop = topBase; }
        }
        if (DoOffset) {
            if (topOffset > thisTop) { thisTop = topOffset; }
        }
        if (DoScroll) {
            if (topScroll > thisTop) { thisTop = topScroll; }
        }
        //
        if (thisTop == 0 && topClient) { thisTop = topClient; }
    }
    //
    if (thisTop == 0) {
        // Dom Add:
        // all else failed so use the protype approach...
        var bodyTempContainer = document.getElementById('BodyTempContainer');
        bodyTempContainer.appendChild(elementPassed.cloneNode(true));
        topNode = bodyTempContainer.childNodes[0].offsetTop;
        bodyTempContainer.removeChild(bodyTempContainer.childNodes[0]);
        if (topNode > thisTop) { thisTop = topNode; }
        //
        // Bounding Rect:
        // Or this approach...
        if (!browserIsIE) {
            // if (elementPassed.getClientRects) {
            var topRects = thisTop;
            var clientRects = elementPassed.getClientRects();
            if (clientRects != null) {
                while (clientRectsIndex < clientRects.length) {
                    topRects = clientRects[clientRectsIndex].top - clientRects[clientRectsIndex].bottom;
                    clientRectsIndex++;
                }
                if (topRects > thisTop) { thisTop = topRects; }
            }
            // }
        }
    }
    //
    // Minimum or default
    // Default top not appropriate here
    if (thisTop == 0 && elTopDefault) { thisTop = elTopDefault; }
    // Maximum
    // if (thisTop > 3000) {
    //     // ERROR
    //     thisTop = 3000;
    // }
    return thisTop;
}
// Layout Left Get
function ElementLeftMaxGet(DoScroll, DoBase, elementPassed, elLeftDefault) {
    var DoOffset = true;
    if (!elementPassed) { return 0; }
    if (!elementPassed.style) { return 0; }
    var thisLeft = 0;
    var leftBase = 0;
    var leftOffset = 0;
    var leftScroll = 0;
    var leftClient = 0;
    if (elementPassed.style) {
        if (browserIsOld) {
            leftBase = parseInt(elementPassed.style.left);
            leftOffset = parseInt(elementPassed.offsetLeft);
            leftScroll = parseInt(elementPassed.scrollLeft);
            leftClient = parseInt(elementPassed.clientLeft);
        } else {
            leftBase = parseInt(window.getComputedStyle(elementPassed, null).getPropertyValue('Left'));
            leftOffset = parseInt(window.getComputedStyle(elementPassed, null).getPropertyValue('offsetLeft'));
            leftScroll = parseInt(window.getComputedStyle(elementPassed, null).getPropertyValue('scrollLeft'));
            leftClient = parseInt(window.getComputedStyle(elementPassed, null).getPropertyValue('clientLeft'));
        }
        //
        if (DoBase) {
            if (leftBase > thisLeft) { thisLeft = leftBase; }
        }
        if (DoOffset) {
            if (leftOffset > thisLeft) { thisLeft = leftOffset; }
        }
        if (DoScroll) {
            if (leftScroll > thisLeft) { thisLeft = leftScroll; }
        }
        //
        if (thisLeft == 0 && leftClient) { thisLeft = leftClient; }
    }
    //
    if (thisLeft == 0) {
        // Dom Add:
        // all else failed so use the protype approach...
        var bodyTempContainer = document.getElementById('BodyTempContainer');
        bodyTempContainer.appendChild(elementPassed.cloneNode(true));
        var leftNode = bodyTempContainer.childNodes[0].offsetLeft;
        bodyTempContainer.removeChild(bodyTempContainer.childNodes[0]);
        if (leftNode > thisLeft) { thisLeft = leftNode; }
        //
        // Bounding Rect:
        // Or this approach...
        if (!browserIsIE) {
            // if (elementPassed.getClientRects) {
            var leftRects = thisLeft;
            var clientRects = elementPassed.getClientRects();
            if (clientRects != null) {
                while (clientRectsIndex < clientRects.length) {
                    leftRects = clientRects[clientRectsIndex].top - clientRects[clientRectsIndex].bottom;
                    clientRectsIndex++;
                }
                if (leftRects > thisLeft) { thisLeft = leftRects; }
            }
            // }
        }
    }
    //
    // Minimum or default
    // Default left not appropriate here
    if (thisLeft == 0 && elLeftDefault) { thisLeft = elLeftDefault; }
    // Maximum
    // if (thisLeft > 3000) {
    //     // ERROR
    //     thisLeft = 3000;
    // }
    return thisLeft;
}
// Layout Width Get
function ElementWidthMaxGet(DoScroll, DoBase, elementPassed, elWidthDefault) {
    var DoOffset = true;
    if (!elementPassed) { return 0; }
    if (!elementPassed.style) { return 0; }
    var thisWidth = 0;
    if (elementPassed.style) {
        if (browserIsOld) {
            widthBase = parseInt(elementPassed.style.width);
            widthOffset = parseInt(elementPassed.offsetWidth);
            widthScroll = parseInt(elementPassed.scrollWidth);
            widthClient = parseInt(elementPassed.clientWidth);
        } else {
            widthBase = parseInt(window.getComputedStyle(elementPassed, null).getPropertyValue('Width'));
            widthOffset = parseInt(window.getComputedStyle(elementPassed, null).getPropertyValue('offsetWidth'));
            widthScroll = parseInt(window.getComputedStyle(elementPassed, null).getPropertyValue('scrollWidth'));
            widthClient = parseInt(window.getComputedStyle(elementPassed, null).getPropertyValue('clientWidth'));
        }
        //
        if (DoBase && widthBase) {
            if (widthBase > thisWidth) { thisWidth = widthBase; }
        }
        if (DoOffset && widthOffset) {
            if (widthOffset > thisWidth) { thisWidth = widthOffset; }
        }
        if (DoScroll && widthScroll) {
            if (widthScroll > thisWidth) { thisWidth = widthScroll; }
        }
        //
        if (thisWidth == 0 && widthClient) { thisWidth = widthClient; }
    }
    //
    if (thisWidth == 0) {
        // Dom Add:
        // all else failed so use the protype approach...
        var bodyTempContainer = document.getElementById('BodyTempContainer');
        bodyTempContainer.appendChild(elementPassed.cloneNode(true));
        var widthNode = bodyTempContainer.childNodes[0].offsetWidth;
        bodyTempContainer.removeChild(bodyTempContainer.childNodes[0]);
        if (widthNode > thisWidth) { thisWidth = widthNode; }
        //
        // Bounding Rect:
        // Or this approach...
        var widthRects = thisWidth;
        if (!browserIsIE) {
            // if (elementPassed.getClientRects) {
            var widthRects = thisWidth;
            var clientRects = elementPassed.getClientRects();
            if (clientRects != null) {
                var clientRectsIndex = 0;
                while (clientRectsIndex < clientRects.length) {
                    widthRects = clientRects[clientRectsIndex].top - clientRects[clientRectsIndex].bottom;
                    clientRectsIndex++;
                }
                if (widthRects > thisWidth) { thisWidth = widthRects; }
            }
            // }
        }
    }
    //
    // Minimum or default
    // Default width not appropriate here
    if (thisWidth == 0 && elWidthDefault) { thisWidth = elWidthDefault; }
    // Maximum
    // if (thisWidth > 100000) {
    //     // ERROR
    //     thisWidth = 100000;
    // }
    return thisWidth;
}
// Layout Height Get
function ElementHeightMaxGet(DoScroll, DoBase, elementPassed, elHeightDefault) {
    var DoOffset = true;
    if (!elementPassed) { return 0; }
    if (!elementPassed.style) { return 0; }
    var thisHeight = 0;
    if (elementPassed.style) {
        if (browserIsOld) {
            heightBase = parseInt(elementPassed.style.height);
            heightOffset = parseInt(elementPassed.offsetHeight);
            heightScroll = parseInt(elementPassed.scrollHeight);
            heightClient = parseInt(elementPassed.clientHeight);
        } else {
            heightBase = parseInt(window.getComputedStyle(elementPassed, null).getPropertyValue('Height'));
            heightOffset = parseInt(window.getComputedStyle(elementPassed, null).getPropertyValue('offsetHeight'));
            heightScroll = parseInt(window.getComputedStyle(elementPassed, null).getPropertyValue('scrollHeight'));
            heightClient = parseInt(window.getComputedStyle(elementPassed, null).getPropertyValue('clientHeight'));
        }
        heightNode = 0;
        heightRects = 0;
        clientRectsIndex = 0;
        //
        if (DoBase && heightBase) {
            if (heightBase > thisHeight) { thisHeight = heightBase; }
        }
        if (DoOffset && heightOffset) {
            if (heightOffset > thisHeight) { thisHeight = heightOffset; }
        }
        if (DoScroll && heightScroll) {
            if (heightScroll > thisHeight) { thisHeight = heightScroll; }
        }
        //
        if (thisHeight == 0 && heightClient) { thisHeight = heightClient; }
    }
    //
    if (thisHeight == 0) {
        // Dom Add:
        // all else failed so use the protype approach...
        var bodyTempContainer = document.getElementById('BodyTempContainer');
        bodyTempContainer.appendChild(elementPassed.cloneNode(true));
        var heightNode = bodyTempContainer.childNodes[0].offsetHeight;
        bodyTempContainer.removeChild(bodyTempContainer.childNodes[0]);
        if (heightNode > thisHeight) { thisHeight = heightNode; }
        //
        // Bounding Rect:
        // Or this approach...
        if (!browserIsIE) {
            // if (elementPassed.getClientRects) {
            var heightRects = thisHeight;
            var clientRects = elementPassed.getClientRects();
            if (clientRects != null) {
                var clientRectsIndex = 0;
                while (clientRectsIndex < clientRects.length) {
                    heightRects = clientRects[clientRectsIndex].top - clientRects[clientRectsIndex].bottom;
                    clientRectsIndex++;
                }
                if (heightRects > thisHeight) { thisHeight = heightRects; }
            }
            // }
        }
    }
    //
    // Minimum or default
    // Default height not appropriate here
    if (thisHeight == 0 && elHeightDefault) { thisHeight = elHeightDefault; }
    // Maximum
    // if (thisHeight > 10000) {
    //     // ERROR
    //     thisHeight = 10000;
    // }
    return thisHeight;
}
// Layout Height Note
function ElementLayoutHeightNote(DoScroll, DoBase, elementPassed, layoutBlockWidthDefault) {
    // From: http://stackoverflow.com/questions/526347/css-javascript-how-do-you-get-the-rendered-height-of-an-element
    //
    // If you need to calculate something but not show it, set the element to visibility:hidden and position:absolute,
    // 		add it to the DOM tree, get the offsetHeight, and remove it.
    // 		(That's what the prototype library does behind the lines last time I checked).
}
var elementRaw, elementAdjust, elementAdjustPercentage, ContainerWidth;
function ElementContainerAdjustGet(element, elementContainer, UsePercent, DoPadding, DoMargin, DoBorder) {
    if (element && element.style) {
        // a Content Box
        elementRaw = 0;
        elementAdjust = 0;
        if (elementContainer && elementContainer.offsetWidth) {
            ContainerWidth = elementContainer.offsetWidth;
        } else {
            ContainerWidth = element.style.width + 0;
        }
        if (!ContainerWidth) {
            // some sort of problem
            return 0;
        }
        if (element.style) {
            if (!browserIsOld) {
                if (DoPadding) {
                    elementRaw += parseInt(window.getComputedStyle(element, null).getPropertyValue('padding-left'));
                    elementRaw += parseInt(window.getComputedStyle(element, null).getPropertyValue('padding-right'));
                }
                if (DoMargin) {
                    elementRaw += parseInt(window.getComputedStyle(element, null).getPropertyValue('margin-left'));
                    elementRaw += parseInt(window.getComputedStyle(element, null).getPropertyValue('margin-right'));
                }
                if (DoBorder) {
                    elementRaw += parseInt(window.getComputedStyle(element, null).getPropertyValue('border-left'));
                    elementRaw += parseInt(window.getComputedStyle(element, null).getPropertyValue('border-right'));
                }
            } else {
                if (DoPadding) {
                    if (element.style.marginLeft) { elementRaw += parseInt(element.style.marginLeft); }
                    if (element.style.marginRight) { elementRaw += parseInt(element.style.marginRight); }
                }
                if (DoMargin) {
                    if (element.style.paddingLeft) { elementRaw += parseInt(element.style.paddingLeft); }
                    if (element.style.paddingRight) { elementRaw += parseInt(element.style.paddingRight); }
                }
                if (DoBorder) {
                    if (element.style.borderLeft) { elementRaw += parseInt(element.style.borderLeft); }
                    if (element.style.borderRight) { elementRaw += parseInt(element.style.borderRight); }
                }
            }
        }
        // ? is em ?
        elementAdjust = elementRaw;
        if (layoutStyleUnits != layoutSytleUnitsPercent) {
            if (layoutStyleUnits == layoutStyleUnitsEm && browserIsOld) { elementAdjust *= 16; }
            elementAdjust = elementAdjust / ContainerWidth;
            if (UsePercent) elementAdjust *= 100;
        }
        return elementAdjust;
    } else {
        // no element
        var errorLogLine = "Element is null or invalid. It has no width."
        ErrorOccured("MdmElement:ElementContainerAdjustGet", 692, 0, null, element, oObj, errorLogLine, errorIsSevere, errorDoDisplayTag, UseAlert);
        return 0;
    }
}
script_state = "Mdm Standard Element functions loaded.";
if (debugLoadIsOn) { debugger; }
