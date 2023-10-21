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
    elementSourcePassed,
    DoFindSetPassed, elementValuePassed
) {
    // Dest = ElementGetRefFromElement(Dest, 'DestId', 'DestName', Source);
    //
    var elementChildObject;
    var elementTempFirst = true;
    elementFound = false;
    //
    elementPassed = ElementCreate(elementPassed, elementTempFirst);
    //
    // Loop through each child node of elementObject
    // and retrieve the original element from the document.
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
                            // this doesn't make sense. todo
                            if (elementFound) {
                                elementSourcePassed.childNodes[elmCn] = elementPassed;
                            } else {
                                elementSourcePassed.childNodes[elmCn] = elementValuePassed;
                                elementFound = true;
                            }
                            // pass the matching element found in the source
                            return elementSourcePassed.childNodes[elmCn];
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
                        elementPassed = ElementGetFromElement(elementPassed, elementIdPassed, elementNamePassed, elementChildObject, DoFindSetPassed, elementValuePassed);
                        if (elementFound) { return elementPassed; }
                    }
                }
            } // end of id exists
        } // end of element exists
    } // end of for
    //
    elementFound = false;
    return;
}
// Layout Menu Area Element Common Fields Set
function ElementGetRefFromElementId(elementObject, elementObjectId, elementObjectName, elementSourcePassed) {
    // DOES THIS NEED TO BE COPIES.
    // As written it results in pointers into the Source Document
    // Dest = ElementGetRefFromElement(Dest, "DestId", "DestName", Source);
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
function ElementCopy(elementPassed, elementLayoutFirstPassed, elementSourcePassed, elementStyleDisplayPassed) {
    var elementIdCurr;
    var elementSourceIdCurr;
    if ("id" in elementSourcePassed) {
        elementSourceIdCurr = elementSourcePassed.id;
    } else { elementSourceIdCurr = ""; }
    //
    //---------------------------------------------------------------//
    if (!elementPassed) {
        if ("id" in elementSourcePassed) {
            elementIdCurr = elementSourcePassed.id;
        } else { elementIdCurr = ""; }
        //
        if (browserIsTEST) { elementPassed = document.createElement(elementIdCurr); }
        if (browserIsIE) { elementPassed = document.createElement(); }
        if (browserIsFF) { elementPassed = document.createElement(elementIdCurr); } // X32
        // elementPassed = null;
    } else {
        if ("id" in elementPassed) {
            elementIdCurr = elementPassed.id;
        } else { elementIdCurr = ""; }
    }
    // Copy Source to Destination Element (Inner HTML, Events)
    if (elementPassed != null && elementSourcePassed != null) {
        if (elementLayoutFirstPassed) {
            if ("innerHTML" in elementPassed && "innerHTML" in elementSourcePassed) {
                // Copy HTML
                // elementPassed.outerHTML = elementSourcePassed.outerHTML;
                elementPassed.innerHTML = elementSourcePassed.innerHTML;
                // elementPassed = elementSourcePassed;
                // elementPassed = elementSourcePassed.cloneNode(true);
                //
                elementLayoutFirstPassed = false;
                // Element Events
                ElementEventsCopy(elementPassed, elementSourcePassed, elementPassed.id, elementSourcePassed.id)
            }
        }
        // if (elementPassed.innerHTML = null || elementPassed.innerHTML.length = 0) {
        // elementPassed.innerHTML = elementSourcePassed.innerHTML;
        // }
        elementPassed.style.display = elementStyleDisplayPassed;
    }
    return elementPassed;
} // ------------------------------------------------------------------------------------- _//
// Layout Menu Area Element Common Fields Set
////////////////////////////////////////////////
function ElementFindInElement(elementObject, elementObjectId, elementObjectName, elementSourcePassed) {
    // Dest = ElementGetRefFromElement(Dest, "DestId", "DestName", Source);
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
    //
    // if (elementPassed.childNodes.length)
    for (elmCn = 1; elmCn < 1 + elementObject.childNodes.length; elmCn++) {
        elementChildObject = elementObject.childNodes[elmCn];
        if (elementChildObject) {
            if ("id" in elementChildObject) {
                if (elementChildObject.id.length) {
                    elementSourceChildObject = ElementGetFromId(elementChildObject.id);
                    if (elementSourceChildObject) {
                        if (elementSourceChildObject.onmousedown) {
                            // elementChildObject.setAttribute("onmousedown", elementSourceChildObject.onmousedown , 0)
                            elementChildObject.onmousedown = elementSourceChildObject.onmousedown;
                        }
                        if (elementSourceChildObject.onmouseover) {
                            // elementChildObject.setAttribute("onmouseover", elementSourceChildObject.onmouseover , 0)
                            elementChildObject.onmouseover = elementSourceChildObject.onmouseover;
                        }
                        if (elementSourceChildObject.onmouseout) {
                            // elementChildObject.setAttribute("onmouseout", elementSourceChildObject.onmouseout , 0)
                            elementChildObject.onmouseout = elementSourceChildObject.onmouseout;
                        }
                    }
                }
            }
        }
    }
    /*--
     // if (elementPassed.childNodes.length)
     for (elmCn = 1;elementSourceObject.childNodes.length;elmCn++){
    var elementSourceChildObject = elementSourceObject.childNodes[elmCn];
    elementChildObject = elementObject.getElementById(elementSourceChildObject.id);
    elementChildObject.Events["onmousedown"] = elementSourceChildObject.Events["onmousedown"];
    }
    // }
    --*/
    // }
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
    elementTarget = ElementGetRefFromElement(elementTarget, elementIdPassed, elementIdPassed, elementPassed);
    //
    // if (elementPassed.childNodes.length) {
    if (elementTarget) {
        if ("style" in elementTarget) {
            if ("display" in elementTarget.style) {
                if (elementStyleDisplayPassed.length) { elementTarget.style.display = elementStyleDisplayPassed; }
            } else { ErrorOccured(eventCurr, elementTarget, elementPassed, "Element Break Set, Style missing", errorIsWarning, true, false); }
            //
            if ("visibility" in elementTarget.style) {
                if (elementStyleVisibilityPassed.length) { elementTarget.style.visibility = elementStyleVisibilityPassed; }
            } else { ErrorOccured(eventCurr, elementTarget, elementPassed, "Element Break Set, Visibility missing", errorIsWarning, true, false); }
            //
            if ("clear" in elementTarget.style) {
                if (elsementStyleClearPassed.length) { elementTarget.style.clear = elsementStyleClearPassed; }
            } else { ErrorOccured(eventCurr, elementTarget, elementPassed, "Element Break Set, Clear missing", errorIsWarning, true, false); }
        }
    }
    elementLayoutFirstPassed = false;
    // }
    return elementPassed;
}
// Element Position Get
////////////////////////////////////////////////
function ElementPosGetFromObj(oObjPassed) {
    oObjTop = 0;
    oObjLeft = 0;
    oObjWidth = 0;
    oObjHeight = 0;
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
    return [currTop, currLeft];
}
// SectionBlock Element Get function (s)
// ...................................... //
// ..................................................................................... _//
function ElementGetFromId(IdPassed) {
    if (browserIsTEST) {
        // browserIsTEST
        if (!elementNamePassed.length) { elementNamePassed = IdPassed; }
        elementObject = window.document.querySelector(elementNamePassed);
        if (!elementObject) { elementObject = document.getElementById(IdPassed); }
    } else if (browserIsIE || browserIsFF) {
        // browserIE or browserIsFF
        // elementObjectResult = window.document.querySelector(IdPassed)
        elementObject = document.getElementById(IdPassed);
    } else {
        // elementObject = document.getElementById(IdPassed);
        elementObjectResult = window.document.querySelector(IdPassed)
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
// Layout Menu Area Element Common Fields Set
function ElementCopyOld(elementPassed, elementLayoutFirstPassed, elementSourcePassed, elementStyleDisplayPassed) {
    var elementIdCurr;
    var elementSourceIdCurr;
    if (elementSourcePassed.id) {
        elementSourceIdCurr = elementSourcePassed.id;
    } else { elementSourceIdCurr = ''; }
    //
    elementPassed = ElementCreate(elementPassed, elementLayoutFirstPassed);
    //
    //............................................................---//
    if (elementPassed.id) { elementIdCurr = elementSourcePassed.id; } else { elementIdCurr = ''; }
    //............................................................---//
    // Copy Source to Destination Element (Inner HTML, Events)
    if (elementSourcePassed != null) {
        if (elementLayoutFirstPassed) {
            if (elementSourcePassed.innerHTML) {
                //
                //............................................................---//
                // Copy HTML
                // elementPassed.outerHTML = elementSourcePassed.outerHTML;
                elementPassed.innerHTML = elementSourcePassed.innerHTML;
                // elementPassed = elementSourcePassed;
                // elementPassed = elementSourcePassed.cloneNode(true);
                //
                elementLayoutFirstPassed = false;
                //
                //............................................................---//
                // Element Events
                // ElementEventsCopy(elementPassed, elementSourcePassed, elementPassed.id, elementSourcePassed.id)
            }
        }
        // if (elementPassed.innerHTML == null || elementPassed.innerHTML.length = 0) {
        // elementPassed.innerHTML = elementSourcePassed.innerHTML;
        // }
        if (!elementPassed.style) {
            elementPassed.setAttribute('style', '');
        }
        elementPassed.style.display = elementStyleDisplayPassed;
    }
    return elementPassed;
}
// Layout Menu Area Element Common Fields Set
// ...................................... //
function ElementEventsCopyOld(elementObject, elementSourceObject, elementObjectId, elementSourceObjectId) {
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
        if (typeof (elementObject) != 'element') { return; }
        if (typeof (elementSourceObject) != 'element') {
            elementObject = document.createElement();// X32
            // return;
        }
    }
    //
    // Loop through each child node of elementObject
    // and retrieve the original element from the document.
    // Copy mouse down, over and out events to elementObject.
    // Currently, SourceObject is not used.
    //
    // if (elementPassed.childNodes.length)
    for (elmCn = 1; elmCn < 1 + elementObject.childNodes.length; elmCn++) {
        elementChildObject = elementObject.childNodes[elmCn];
        if (elementChildObject) {
            if (elementChildObject.id) {
                if (elementChildObject.id.length) {
                    elementSourceChildObject = document.getElementById(elementChildObject.id);
                    if (elementSourceChildObject) {
                        if (elementSourceChildObject.onmousedown) {
                            // elementChildObject.setAttribute('onmousedown', elementSourceChildObject.onmousedown , 0)
                            elementChildObject.onmousedown = elementSourceChildObject.onmousedown;
                        }
                        if (elementSourceChildObject.onmouseover) {
                            // elementChildObject.setAttribute('onmouseover', elementSourceChildObject.onmouseover , 0)
                            elementChildObject.onmouseover = elementSourceChildObject.onmouseover;
                        }
                        if (elementSourceChildObject.onmouseout) {
                            // elementChildObject.setAttribute('onmouseout', elementSourceChildObject.onmouseout , 0)
                            elementChildObject.onmouseout = elementSourceChildObject.onmouseout;
                        }
                    }
                }
            }
        }
    }
    /* --
     // if (elementPassed.childNodes.length)
     for (elmCn = 1;elementSourceObject.childNodes.length;elmCn++){
    var elementSourceChildObject = elementSourceObject.childNodes[elmCn];
    elementChildObject = elementObject.getElementById(elementSourceChildObject.id);
    elementChildObject.Events['onmousedown'] = elementSourceChildObject.Events['onmousedown'];
    }
    // }
    -- */
    // }
    return elementObject;
}
// Layout Menu Area Element Common Fields Set
// ...................................... //
function ElementBreakSetOld(elementPassed, elementIdPassed, elementLayoutFirstPassed, elementStyleDisplayPassed, elementStyleVisibilityPassed, elsementStyleClearPassed) {
    if (!elementPassed) {
        elementPassed = ElementGetRef(elementPassed, elementIdPassed, elementIdPassed);
        // var elementPassed = elementPassed.childNodes[elementIdPassed];
        // var elementPassed = document.getElementById(elementIdPassed);
    }
    //
    var elementTarget;
    // Get Break Element from Parent
    if (browserIsIE) {
        elementTarget = document.createElement('br');
    } else {
        elementTarget = document.createElement('br');
    }
    elementTarget = ElementGetFromElement(elementTarget, elementIdPassed, elementIdPassed, elementPassed, DoFindReturn, null);
    // elementTarget = ElementGetRefFromElement(elementTarget, elementIdPassed, elementIdPassed, elementPassed);
    //
    // note: Switched from 'in' element operator to If(element.property)
    // It is more standard and less error prone.
    // TODO using the 'in' operator here, change to null:
    //
    // if (elementPassed.childNodes.length) {
    if (elementTarget) {
        if (elementTarget.style) {
            // set Display property.
            if ('display' in elementTarget.style) {
                if (elementStyleDisplayPassed.length) { elementTarget.style.display = elementStyleDisplayPassed; }
            } else if (debugTimerDetail) {
                MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
                    'Element Break Set, Style missing',
                    'ElementBreakSet', 7742, elementTarget, elementPassed,
                    errorIsWarning, errorDoDisplayTag, errorDoNotAlert);
            }
            // set Visibilty.
            if (elementStyleVisibilityPassed.length) {
                if (elementTarget.style.visibility) {
                    elementTarget.style.visibility = elementStyleVisibilityPassed;
                } else if (debugTimerDetail) {
                    MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
                        'Element Break Set, Visibility missing',
                        'ElementBreakSet', 7751, elementTarget, elementPassed,
                        errorIsWarning, errorDoDisplayTag, errorDoNotAlert);
                    elementTarget.style.visibility = elementStyleVisibilityPassed;
                }
            }
            // set the Clear attribute.
            if (elsementStyleClearPassed.length) {
                // note: the redundant syntax, different logic than above
                if (elementTarget.style.clear) {
                    if (elsementStyleClearPassed.length) { elementTarget.style.clear = elsementStyleClearPassed; }
                } else if (debugTimerDetail) {
                    MessageLog(eventCurr, DoNotUseDebug, DoNotUseSingleLine,
                        'Element Break Set, Clear missing',
                        'ElementBreakSet', 7760, elementTarget, elementPassed,
                        errorIsWarning, errorDoDisplayTag, errorDoNotAlert);
                    elementTarget.style.clear = elsementStyleClearPassed;
                }
            }
        }
    }
    elementLayoutFirstPassed = false;
    // }
    return elementPassed;
}
// SectionBlock Element Position & Dimension function (s)
// ..................................................................................... _//
// Element Position Get
// ...................................... //
function ElementPosGet(DoScroll, DoBase, elementPassed, layoutBlockWidthDefault, elHeightDefault) {
    oObjTop = ElementTopMaxGet(DoScroll, DoBase, elementPassed);
    oObjLeft = ElementLeftMaxGet(DoScroll, DoBase, elementPassed);
    if (!oObjTop || !oObjLeft) { ElementPosCalculate(elementPassed) } else {
        oObjWidth = ElementWidthMaxGet(DoScroll, DoBase, elementPassed, layoutBlockWidthDefault);
        oObjHeight = ElementHeightMaxGet(DoScroll, DoBase, elementPassed, elHeightDefault);
    }
    //
    return [oObjTop, oObjLeft, oObjWidth, oObjHeight];
}
// Element Position Calculate
// ...................................... //
function ElementPosCalculate(elementPassed) {
    oObjTop = 0;
    oObjLeft = 0;
    oObjWidth = 0;
    oObjHeight = 0;
    var currLeft = currTop = 0;
    //
    if (elementPassed.offsetParent) {
        var oObjCurr = elementPassed;
        do {
            // while (oObjPassed = oObjPassed.offsetParent) {
            currLeft += oObjCurr.offsetLeft;
            currTop += oObjCurr.offsetTop;
            // }
        } while ((oObjCurr = oObjCurr.offsetParent));
        oObjTop = currTop;
        oObjLeft = currLeft;
        oObjWidth = elementPassed.offsetWidth;
        oObjHeight = elementPassed.offsetHeight;
    }
    return [oObjTop, oObjLeft, oObjWidth, oObjHeight];
}
// Layout Top Get
function ElementTopMaxGet(DoScroll, DoBase, elementPassed) {
    var DoOffset = true;
    if (!elementPassed) { return 0; }
    if (!elementPassed.style) { return 0; }
    var thisTop = 0;
    var topBase = parseInt(elementPassed.style.top);
    var topOffset = parseInt(elementPassed.offsetTop);
    var topScroll = parseInt(elementPassed.scrollTop);
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
    if (thisTop > 3000) {
        // ERROR
        thisTop = 3000;
    }
    return thisTop;
}
// Layout Left Get
function ElementLeftMaxGet(DoScroll, DoBase, elementPassed) {
    var DoOffset = true;
    if (!elementPassed) { return 0; }
    if (!elementPassed.style) { return 0; }
    var thisLeft = 0;
    var leftBase = parseInt(elementPassed.style.left);
    var leftOffset = parseInt(elementPassed.offsetLeft);
    var leftScroll = parseInt(elementPassed.scrollLeft);
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
    if (thisLeft > 3000) {
        // ERROR
        thisLeft = 3000;
    }
    return thisLeft;
}
// Layout Width Get
function ElementWidthMaxGet(DoScroll, DoBase, elementPassed, layoutBlockWidthDefault) {
    var DoOffset = true;
    if (!elementPassed) { return 0; }
    if (!elementPassed.style) { return 0; }
    var thisWidth = 0;
    if (elementPassed.style) {
        if (browserIsOld) {
            widthBase = parseFloat(elementPassed.style.width);
            widthOffset = parseFloat(elementPassed.offsetWidth);
            widthScroll = parseFloat(elementPassed.scrollWidth);
            widthClient = parseFloat(elementPassed.clientWidth);
        } else {
            widthBase = parseFloat(window.getComputedStyle(elementPassed, null).getPropertyValue('Width'));
            widthOffset = parseFloat(window.getComputedStyle(elementPassed, null).getPropertyValue('offsetWidth'));
            widthScroll = parseFloat(window.getComputedStyle(elementPassed, null).getPropertyValue('scrollWidth'));
            widthClient = parseFloat(window.getComputedStyle(elementPassed, null).getPropertyValue('clientWidth'));
        }
        widthNode = 0;
        widthRects = 0;
        clientRectsIndex = 0;
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
        widthNode = bodyTempContainer.childNodes[0].offsetWidth;
        bodyTempContainer.removeChild(bodyTempContainer.childNodes[0]);
        if (widthNode > thisWidth) { thisWidth = widthNode; }
        //
        // Bounding Rect:
        // Or this approach...
        if (!browserIsIE) {
            // if (elementPassed.getClientRects) {
            var clientRects = elementPassed.getClientRects();
            if (clientRects != null) {
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
    // if (thisWidth == 0) { thisWidth = elWidthDefault; }
    // Maximum
    if (thisWidth > 10000) {
        // ERROR
        thisWidth = 10000;
    }
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
            heightBase = parseFloat(elementPassed.style.height);
            heightOffset = parseFloat(elementPassed.offsetHeight);
            heightScroll = parseFloat(elementPassed.scrollHeight);
            heightClient = parseFloat(elementPassed.clientHeight);
        } else {
            heightBase = parseFloat(window.getComputedStyle(elementPassed, null).getPropertyValue('Height'));
            heightOffset = parseFloat(window.getComputedStyle(elementPassed, null).getPropertyValue('offsetHeight'));
            heightScroll = parseFloat(window.getComputedStyle(elementPassed, null).getPropertyValue('scrollHeight'));
            heightClient = parseFloat(window.getComputedStyle(elementPassed, null).getPropertyValue('clientHeight'));
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
        heightNode = bodyTempContainer.childNodes[0].offsetHeight;
        bodyTempContainer.removeChild(bodyTempContainer.childNodes[0]);
        if (heightNode > thisHeight) { thisHeight = heightNode; }
        //
        // Bounding Rect:
        // Or this approach...
        if (!browserIsIE) {
            // if (elementPassed.getClientRects) {
            var clientRects = elementPassed.getClientRects();
            if (clientRects != null) {
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
    // if (thisHeight == 0) { thisHeight = elHeightDefault; }
    // Maximum
    if (thisHeight > 10000) {
        // ERROR
        thisHeight = 10000;
    }
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
                    elementRaw += parseFloat(window.getComputedStyle(element, null).getPropertyValue('padding-left'));
                    elementRaw += parseFloat(window.getComputedStyle(element, null).getPropertyValue('padding-right'));
                }
                if (DoMargin) {
                    elementRaw += parseFloat(window.getComputedStyle(element, null).getPropertyValue('margin-left'));
                    elementRaw += parseFloat(window.getComputedStyle(element, null).getPropertyValue('margin-right'));
                }
                if (DoBorder) {
                    elementRaw += parseFloat(window.getComputedStyle(element, null).getPropertyValue('border-left'));
                    elementRaw += parseFloat(window.getComputedStyle(element, null).getPropertyValue('border-right'));
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
        // no element todo
        return 0;
    }
}
script_state = "Mdm Standard Element functions loaded.";
if (debugLoadIsOn) { debugger; }
