// Section (Menu Image) Element Item function (s)
// ...................................... //
// SectionBlock Element Item Play function (s)
// Menu Image Play First
function StdElementPlayFirst(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
	oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	filterPlayIndex = 1;
	HideImage = false; HideImageLarge = false;
	//
	StdElementPlay(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
		oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
}
// StdElementPlayNext
// ...................................... //
function StdElementPlayNext(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
	oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	filterPlayIndex = 1;
	HideImage = false; HideImageLarge = false;
	//
	StdElementPlay(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
		oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
}
// StdElementPlayAgain
// ...................................... //
function StdElementPlayAgain(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
	oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	filterPlayIndex = 1;
	HideImage = false; HideImageLarge = false;
	//
	StdElementPlay(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
		oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
}
// StdElementPlay
function StdElementPlay(playDirection, IsImageLarge,
	oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
	oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	//
	var timerType = timerTypeMove;
	var timerGroup = oObjGroupIndex;
	var timerId = oObjGroupImageIndex;
	var timerItemKey = timerId + timerType;
	var timerItemMoveKey = timerId + timerTypeMove;
	var timerItemTransitionKey = timerId + timerTypeTransition;
	var timerRootKey = timerRootId + timerType;
	//
	filterPlayIndex = 1;
	HideImage = false; HideImageLarge = false;
	//
	if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
		ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
			StdTimerLogText(timerType, timerGroup, timerId, DoNotUseEither, playDirection, 'Request')
			+ ', Play command requested'
			+ '.',
			'StdElementPlay', 3819, null, null,
			errorComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	var PlayAbort = false;
	//
	// Bug for testing: var timerId = oObjNext.id;
	// Checking Transition
	if (timerObj[timerGroup][timerItemTransitionKey]) {
		if (timerObj[timerGroup][timerItemTransitionKey].timerIsRunning) {
			timerRootKey = timerRootId + timerTypeTransition;
			if (playDirection != timerObj[timerGroup][timerItemTransitionKey].playDirection) {
				// playDirection is different (while running)
				if (debugTimer && debugTimerDetail && debugTimerTransition) {
					ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
						StdTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Deactivate')
						+ ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
						+ ', Already running, deactivating'
						+ '.',
						'StdElementPlay', 3837, null, null,
						errorComment, errorDoNotDisplayTag, errorDoNotAlert);
				}
				// Item will be deactivate and the play command issued
				StdTimerItemDeactivate(timerTypeTransition, timerGroup, timerId, DoNotUseRoot);
			} else {
				// playDirection the same (while running)
				if (debugTimer && debugTimerDetail && debugTimerTransition) {
					ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
						StdTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate DoStep')
						+ ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
						+ ', Already running, performing a Transition step instead'
						+ '.',
						'StdElementPlay', 3850, null, null,
						errorComment, errorDoNotDisplayTag, errorDoNotAlert);
				}
				// the next step will be performed and the new play command skipped
				if (timerMethod == timerMethodGroup) {
					StdTimerGroupDoStepFilter(timerTypeTransition, timerGroup, timerId);
				} else {
					StdTimerItemDoStepFilter(timerTypeTransition, timerGroup, timerId);
				}
				//
				PlayAbort = true;// skip issuing play command
				//
			} // end of playDirection match
		} else {
			// Transition is NOT running
			// Check if displayed or not...
			if (playDirection == playDirectionForward) {
				// Forward
				if (timerObj[timerGroup][timerItemTransitionKey].elementIsDisplayed = elementIsDisplayed) {
					if (debugTimer && debugTimerDetail && debugTimerTransition) {
						ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
							StdTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
							+ ', Play Forward command NOT issued'
							+ ', Item is already displayed'
							+ '.',
							'StdElementPlay', 3875, null, null,
							errorComment, errorDoNotDisplayTag, errorDoNotAlert);
					}
					//
					PlayAbort = true;// skip issuing play command
					//
				}
			} else {
				// Reverse
				if (timerObj[timerGroup][timerItemTransitionKey].elementIsDisplayed = elementIsNotDisplayed) {
					if (debugTimer && debugTimerDetail && debugTimerTransition) {
						ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
							StdTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
							+ ', Play Reverse command NOT issued'
							+ ', Item is already hidden'
							+ '.',
							'StdElementPlay', 3891, null, null,
							errorComment, errorDoNotDisplayTag, errorDoNotAlert);
					}
					//
					PlayAbort = true;// skip issuing play command
					//
				} // end of not displayed
			} // end of playDirection is Forward or Reverse
		} // end of Transition is running or not
	} // end of Transition exists
	//
	// Transition now:
	//		reset (direction change),
	//		continued (via a step),
	//		or no action.
	//
	// Checking Move
	if (timerObj[timerGroup][timerItemMoveKey]) {
		if (timerObj[timerGroup][timerItemMoveKey].timerIsRunning) {
			timerRootKey = timerRootId + timerTypeMove;
			if (playDirection != timerObj[timerGroup][timerItemMoveKey].playDirection) {
				// playDirection is different (while running)
				if (debugTimer && debugTimerDetail && debugTimerMove) {
					ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
						StdTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Deactivate')
						+ ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
						+ ', Already running, deactivating'
						+ '.',
						'StdElementPlay', 3919, null, null,
						errorComment, errorDoNotDisplayTag, errorDoNotAlert);
				}
				// Item will be deactivate and the play command issued
				StdTimerItemDeactivate(timerTypeTransition, timerGroup, timerId, DoNotUseRoot);
			} else {
				// playDirection the same (while running)
				if (debugTimer && debugTimerDetail && debugTimerMove) {
					ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
						StdTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate DoStep')
						+ ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
						+ ', Already running, performing a Move step instead'
						+ '.',
						'StdElementPlay', 3932, null, null,
						errorComment, errorDoNotDisplayTag, errorDoNotAlert);
				}
				//
				if (timerMethod == timerMethodGroup) {
					StdTimerGroupDoStepMove(timerTypeMove, timerGroup, timerId);
				} else {
					StdTimerItemDoStepMove(timerTypeMove, timerGroup, timerId);
				}
				//
				PlayAbort = true;// skip issuing play command
				//
			} // end of playDirection match
		} else {
			// Move is NOT running
			// Check if displayed or not...
			if (playDirection == playDirectionForward) {
				// Forward
				if (timerObj[timerGroup][timerItemMoveKey].elementIsDisplayed = elementIsDisplayed) {
					if (debugTimer && debugTimerDetail && debugTimerMove) {
						ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
							StdTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
							+ ', Play Forward command NOT issued'
							+ ', Item is already displayed...',
							'StdElementPlay', 3956, null, null,
							errorComment, errorDoNotDisplayTag, errorDoNotAlert);
					}
					//
					PlayAbort = true;// skip issuing play command
					//
				}
			} else {
				// Reverse
				if (timerObj[timerGroup][timerItemMoveKey].elementIsDisplayed = elementIsNotDisplayed) {
					if (debugTimer && debugTimerDetail && debugTimerMove) {
						ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
							StdTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
							+ ', Play Reverse command NOT issued'
							+ ', Item is already hidden...',
							'StdElementPlay', 3971, null, null,
							errorComment, errorDoNotDisplayTag, errorDoNotAlert);
					}
					//
					PlayAbort = true;// skip issuing play command
					//
				} // end of not displayed
			} // end of playDirection is Forward or Reverse
		} // end of Move is running or not
	} // end of Move Item exists
	//
	// Move or Transition now:
	//		reset (direction change),
	//		continued (via a step),
	//		or no action.
	//
	// Check if new play aborted
	if (PlayAbort) {
		return;
	} // skip issuing play command
	//
	// ...................................... //
	// Cascase Direction (Down or Up)
	var layoutCascadeDown = true;
	var layoutCascadeRight = true;
	if (menuImageOffsetTopAll[oObjGroupIndex][indexGroup] > 0) {
		layoutCascadeDown = true;
	} else { layoutCascadeDown = false; }
	//
	oObjIndex = oObjGroupImageIndex;// StdElementItemIndexSetFromObj(oObjNext);
	//
	// POSITION
	// elementLeftOrig, elementTopOrig, elementLeftDest, elementTopDest,
	var oObjIndexTemp = oObjIndex;
	if (!IsImageLarge) { oObjIndexTemp = oObjRootIndex; }
	elementLeftOrig = menuImagePositionLeft[oObjGroupIndex][oObjIndexTemp][IsSmall];
	// if CascadeRight
	if (!IsImageLarge) {
		if (oObjGroupIndex < 3) {
			elementLeftOrig += menuImagePositionWidth[oObjGroupIndex][oObjIndexTemp][IsSmall];
		}
	}
	if (IsImageLarge) {
		if (oObjGroupIndex >= 3) {
			elementLeftOrig += menuImagePositionWidth[oObjGroupIndex][oObjIndexTemp][IsSmall];
		}
	}
	elementTopOrig = menuImagePositionTop[oObjGroupIndex][oObjIndexTemp][IsSmall];
	// if (layoutCascadeDown && IsImageLarge) {
	// 		elementTopOrig += menuImagePositionHeight[oObjGroupIndex] [oObjIndexTemp] [IsSmall];
	// }
	//
	elementLeftDest = menuImagePositionLeft[oObjGroupIndex][oObjIndex][IsImageLarge];
	elementTopDest = menuImagePositionTop[oObjGroupIndex][oObjIndex][IsImageLarge];
	// elementLeftDest = oObjNext.style.posLeft;
	// elementTopDest = oObjNext.style.posTop;
	//
	//
	if (debugTimer && debugTimerMove) {
		ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
			StdTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Item Position')
			+ ', Item orgin and destination set'
			+ ', Orig: ( ' + elementTopOrig + ', ' + elementLeftOrig + ' )'
			+ ', Dest: ( ' + elementTopDest + ', ' + elementLeftDest + ' )',
			'StdElementPlay', 10341, null, null,
			errorComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	//
	// DURATION
	// elementMoveDuration = 2;// 2 / 90
	// elementMoveStepMax = 100;// 100 / 200
	// elementMoveInterval = 5;// 5 / 10
	// elementMoveDelay = 0;
	//
	// Play Animation for this image
	var filterObjId = oObjNext.id;
	var filterId = 1;
	//
	// FILTER
	filterCommand = '';
	// These are filter indexes not object
	startIndex = 1; endIndex = 18;
	if (filterIsOn || filterResizeIsOn) {
		//
		if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
			ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
				StdTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Get')
				+ ', Filter Get command issued'
				+ '.',
				'StdElementPlay', 4055, null, null,
				errorComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		//
		StdFilterGet(filterPlayAll, startIndex, endIndex,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjIndex,
			filterObjId, filterId);
	}
	//
	// ...................................... //
	// Visibility
	// oObjNext.style.display= 'block';
	// oObjNextImage.style.display= 'block';
	// ...................................... //
	//
	// ...................................... //
	// Run Animation
	// ...................................... //
	//
	// ...................................... //
	// Play the Randomly Selected Filter Effect
	if (filterIsOn) {
		//
		// if (filterObj[filterIdPassed].filterDoEnable) {
		if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
			ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
				StdTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Enable')
				+ ', Filter Enable command issued'
				+ '.',
				'StdElementPlay', 4085, null, null,
				errorComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		//
		StdFilterEnable(filterPlayAll, startIndex, endIndex,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjGroupImageIndex,
			filterObjId, filterId);
		// }
		//
		// // Each form below accesses the alpha filter of the object.
		// oObjNext.filters.item('DXImageTransform.Microsoft.Alpha').enabled = 0     // Named index
		//
		// if (filterObj[filterIdPassed].filterDoApply) {
		if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
			ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
				StdTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Apply')
				+ ', Filter Apply command issued'
				+ '.',
				'StdElementPlay', 4104, null, null,
				errorComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		//
		StdFilterApply(filterPlayAll, startIndex, endIndex,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjGroupImageIndex,
			filterObjId, filterId);
		// }
		//
		if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
			ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
				StdTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Start')
				+ ', Filter Start command issued'
				+ '.',
				'StdElementPlay', 4119, null, null,
				errorComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		//
		StdTimerStartFilter(playDirection, timerMethod, StdTimerGroupDoStepFilter, StdTimerItemDoStepFilter,
			filterPlayAll, startIndex, endIndex,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjGroupImageIndex,
			filterObjId, filterId);
		//
		// if (filterObj[filterIdPassed].filterDoPlay) {
		if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
			ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
				StdTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Play')
				+ ', Filter Vendor Play command issued'
				+ '.',
				'StdElementPlay', 4135, null, null,
				errorComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		//
		StdFilterPlay(playDirection, filterPlayAll, startIndex, endIndex,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjGroupImageIndex,
			filterObjId, filterId);
		// }
	}
	//
	// ...................................... //
	// Begin Movement from Origin to Position
	// Element Move
	if (moveIsOn) {
		//
		var tempSize;
		if (playDirection = playDirectionReverse) {
			tempSize = 1.0;
			oObjNext.style.left = elementLeftDest + 'px';
			oObjNext.style.top = elementTopDest + 'px';
		} else {
			tempSize = 0.05;
			oObjNext.style.left = elementLeftOrig + 'px';
			oObjNext.style.top = elementTopOrig + 'px';
		}
		//
		if (filterIsOn || filterResizeIsOn) {
			if (filterResizeIsOn) { StdFilterResize(oObjNext, filterClassMatrix, tempSize); }
		}
		// ...................................... //
		// Visibility
		if (oObjNext.style.display != 'block') { oObjNext.style.display = 'block'; }
		//
		if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
			ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
				StdTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Start')
				+ ', Move Start command issued'
				+ '.',
				'StdElementPlay', 4174, null, null,
				errorComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		//
		StdTimerStartMove(playDirection, timerMethod, StdTimerGroupDoStepMove, StdTimerItemDoStepMove,
			filterPlayAll, startIndex, endIndex,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjGroupImageIndex,
			filterObjId, filterId);
		//
	} else if (filterIsOn || filterResizeIsOn) {
		//
		// **if (browserAnimationIsIe && filterCommand.length) { eval(filterCommand);filterCommand = ''; }
		if (filterResizeIsOn && !elementIsDisplayed) {
			//
			if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
				ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
					StdTimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Resize')
					+ ', Resize command issued'
					+ '.',
					'StdElementPlay', 4194, null, null,
					errorComment, errorDoNotDisplayTag, errorDoNotAlert);
			}
			//
			StdFilterResize(oObjNext, filterClassMatrix, 0.05);
		}
		// ...................................... //
		// Visibility
		if (oObjNext.style.display != 'block') { oObjNext.style.display = 'block'; }
		//
	}
	//
}
// SectionBlock Element (Menu Image) Show / Hide function (s)
// ...................................... //
// Menu Show
// 		StdElementGroupShowRange
//		StdElementItemShowIndex
//		StdElementGroupShowStack
//		StdElementItemToggle
//		StdElementItemShow
// Menu Hide
// 		StdElementGroupToggleRange
//		StdElementItemHide
// ...................................... //
// SectionBlock Show Toggle function (s)
// ...................................... //
// StdElementGroupToggleRange
// ...................................... //
function StdElementGroupToggleRange(HideImage, HideImageLarge, startIndex, endIndex, IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	if (loadFirstJava) { StdElementObjectCreate(); }
	if (loadFirstMenuImage) { StdMenuImagesHtmlBuild(); }
	//
	// Objects
	oObjIndex = oObjGroupImageIndex;// StdElementItemIndexSetFromObj(oObjNext);
	StdElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	if (IsImageLarge) {
		oObjNext = oObjLarge; oObjNextImage = oObjImageLarge; oObjNextParent = oObj; oObjNextLarge = oObjLarge;
	} else {
		oObjNext = oObj; oObjNextImage = oObjImage; oObjNextParent = oObjParent; oObjNextLarge = oObjLarge;
	}
	//
	var startObjoObjIndex = startIndex;
	var endObjoObjIndex = endIndex;
	var oObjIndexCurr = startObjoObjIndex;
	//
	if (oObjNext.style.display == 'none') {
		oObjLocked = true;
		IgnoreLock = false;
		StdElementGroupShowStack(IsImageLarge, oObjNextParent.id, oObjNextImage.id, oObjNext.id, iImageSize, oObjGroupIndex, endIndex, oObjLocked, IgnoreLock);
		//
	} else {
		oObjLocked = false;
		IgnoreLock = true;
		while (oObjIndexCurr < 1 + endObjoObjIndex) {
			//
			menuImageLocked[oObjGroupIndex][oObjIndexCurr][IsImageLarge] = false;
			// Objects
			StdElementItemGetAllFromIndex(oObjGroupIndex, oObjIndexCurr);
			//
			if (HideImage) {
				StdElementItemHide(IsImageLarge,
					oObjParent, oObjImage, oObj, oObjLarge,
					oObjGroupIndex, oObjIndexCurr,
					oObjLocked, IgnoreLock);
			}
			if (HideImageLarge) {
				if (oObjLarge.style.display = 'block') {
					StdElementItemHide(true,
						oObj, oObjImageLarge, oObjLarge, oObjLarge,
						oObjGroupIndex, oObjIndexCurr,
						oObjLocked, IgnoreLock);
				}
			}
			//
			oObjIndexCurr++;
		}
	}
}
// StdMenu Toggle Menu Show Item (Mouse Down function)
// ...................................... //
function StdElementItemToggle(IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	if (loadFirstJava) { StdElementObjectCreate(); }
	if (loadFirstMenuImage) { StdMenuImagesHtmlBuild(); }
	//
	// Objects
	oObjIndex = oObjGroupImageIndex;// StdElementItemIndexSetFromObj(oObjNext);
	StdElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	if (IsImageLarge) {
		oObjNext = oObjLarge; oObjNextImage = oObjImageLarge; oObjNextParent = oObj; oObjNextLarge = oObjLarge;
		oObjLocked = menuImageLocked[oObjGroupIndex][oObjIndex][IsSmall];
	} else {
		oObjNext = oObj; oObjNextImage = oObjImage; oObjNextParent = oObjParent; oObjNextLarge = oObjLarge;
		// oObjLocked = menuImageLocked[oObjGroupIndex] [oObjIndex] [IsSmall];
	}
	//
	if (oObjNext.style.display == 'none') {
		StdElementItemShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupImageIndex, menuImageLocked[oObjGroupIndex][oObjIndex][IsImageLarge], IgnoreLock);
		oObjNext.style.display = 'block';
	} else {
		if (IsImageLarge) {
			// Is this wrong?
			StdElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjGroupIndex, oObjGroupImageIndex, menuImageLocked[oObjGroupIndex][oObjIndex][IsImageLarge], true);
		} else {
			StdElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjGroupIndex, oObjGroupImageIndex, true, IgnoreLock);
			// StdElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjGroupIndex, oObjGroupImageIndex, menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge], IgnoreLock);
			oObjNext.style.display = 'none';
		}
	}
	//
}
// StdMenu Menu Show Item and all Previous (Mouse Over function)
// ...................................... //
function StdElementGroupShowStack(IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	// load and validate event and objects
	StdElementEventFromHtmlCheck(null, debugLogEvents);
	if (eventCurrId == oObjNextParentId
		&& !eventMouseOverEnabled
		&& eventType == 'mouseover'
	) {
		return;
	}
	//
	if (loadFirstJava) { StdElementObjectCreate(); }
	if (loadFirstMenuImage) { StdMenuImagesHtmlBuild(); }
	//
	// Objects
	oObjIndex = oObjGroupImageIndex;// StdElementItemIndexSetFromObj(oObjNext);
	StdElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	//
	oObjNextValid = oObjValid;
	if (IsImageLarge) {
		oObjNext = oObjLarge;
		oObjNextImage = oObjImageLarge;
		oObjNextParent = oObj;
	} else {
		oObjNext = oObj;
		oObjNextImage = oObjImage;
		oObjNextParent = oObjParent;
	}
	oObjNextLarge = oObjLarge;
	//
	if (oObjNextValid || !oObjNext) {
		// Handle and cascade event
		if (eventType != 'mouseover' || eventMouseOverEnabled
			|| (oObjNext.style.display == 'block' && !eventMouseOverEnabled)
		) {
			//
			imgZindex += 1;
			oObjNext.style.zIndex = imgZindex;
			// process images in group above and including this location
			var startoObjIndex = 1;
			var endoObjIndex = StdElementItemIndexSetFromObj(oObjNext);
			var oObjIndexCurr = startoObjIndex;
			while (oObjIndexCurr < 1 + endoObjIndex) {
				// Objects
				StdElementItemGetAllFromIndex(oObjGroupIndex, oObjIndexCurr);
				// Set Lock Test
				// if (oObjLocked = true) { menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge] = oObjLocked; }
				if (!IgnoreLock) { menuImageLocked[oObjGroupIndex][oObjIndexCurr][IsImageLarge] = oObjLocked; }
				// Reveal Hidden Images
				StdElementItemShow(IsImageLarge, oObjParent, oObjImage, oObj, oObjLarge, iImageSize, oObjGroupIndex, oObjIndexCurr, menuImageLocked[oObjGroupIndex][oObjIndexCurr][IsImageLarge], true);
				oObjIndexCurr++;
			}
			// done
		} else {
			// skipped due to mouse event settings
		}
	} else { ErrorOccured(Event, oObjNext, oObj, "No next image to show", errorElementWarn, true, false); }
}
// StdElementGroupShowRange
// ...................................... //
function StdElementGroupShowRange(startIndex, endIndex, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	// ...................................... //
	// Build Menu Images Div
	if (loadFirstJava) { StdElementObjectCreate(); }
	if (loadFirstMenuImage) { StdMenuImagesHtmlBuild(); }
	//
	var startObjoObjIndex = startIndex;
	var endObjoObjIndex = oObjGroupImageIndex;// StdElementItemIndexSetFromObj(oObjNext);
	var oObjIndexCurr = startObjoObjIndex;
	while (oObjIndexCurr < 1 + endObjoObjIndex) {
		//
		oObjIndexCurr++;
	}
}
// SectionBlock (Menu) Show function (s)
// ...................................... //
// Show using index #
// ...................................... //
function StdElementItemShowIndex(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	if (loadFirstJava) { StdElementObjectCreate(); }
	if (loadFirstMenuImage) { StdMenuImagesHtmlBuild(); }
	StdElementGroupShowStack(IsImageLarge, oObjNextParent.id, oObjNextImage.id, oObjNext.id, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
}
// StdMenu Menu Show Item (Mouse Over function)
// ...................................... //
function StdElementItemShowId(e, IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, oObjNextLargeId, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	// look for duplicate mouse over events (bubbling)
	if (!StdElementEventFromHtmlCheck(e, debugLogEvents)) { return; }
	//
	// Objects
	oObjIndex = oObjGroupImageIndex;// StdElementItemIndexSetFromObj(oObjNext);
	StdElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	if (IsImageLarge) {
		oObjNext = oObjLarge; oObjNextImage = oObjImageLarge; oObjNextParent = oObj; oObjNextLarge = oObjLarge;
		oObjLocked = menuImageLocked[oObjGroupIndex][oObjIndex][IsSmall];
	} else {
		oObjNext = oObj; oObjNextImage = oObjImage; oObjNextParent = oObjParent; oObjNextLarge = oObjLarge;
	}
	//
	StdElementItemShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
	//
}
// StdMenu Menu Show Item (Mouse Over function)
// ...................................... //
function StdElementItemShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	if (StdTimerStartMoveBusy(timerTypeMove, oObjGroupIndex, oObjGroupImageIndex, debugLogEvents)) { return; }
	//
	if (loadFirstJava) { StdElementObjectCreate(); }
	if (loadFirstMenuImage) { StdMenuImagesHtmlBuild(); }
	//
	oObjIndex = oObjGroupImageIndex;// StdElementItemIndexSetFromObj(oObjNext);
	LastTochedId = oObjNext.id;
	//
	if (debugTimer && debugTimerTransition) {
		ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
			StdTimerKeyText('Show', oObjGroupIndex, oObjIndex)
			+ ', ' + oObjNext.id
			+ ', ' + ((moveIsOn || filterIsOn) ? 'Animated' : 'Unanimated')
			+ ', Time:' + Date()
			+ '.',
			'StdElementItemShow', 10141, oObjNext, null,
			errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	//
	StdWindowClientWidth();
	//
	// if (IsImageLarge) {
	// Objects
	// StdElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	// Style Visibility
	// oObjLarge.style.display= 'block';
	// oObjImageLarge.style.display= 'block';
	// }
	if (oObjNext.style.display != 'block') {
		//
		// Width and Height
		LastId = oObjNext.id
		//
		// ...................................... //
		// Image Size
		var elementWidthDefault = iImageSize + (menuImageBorderWidth * 2);
		var elementHeightDefault = (iImageSize * oObjImageSizeRatio) + (menuImageBorderWidth * 2);
		//
		////////////////////////////////////////////
		// Position
		// ...................................... //
		//
		// ...................................... //
		// Parent Postion
		// ...................................... //
		// Get the offset width of that parent element
		StdElementPosCalculate(oObjNextParent);
		//
		// ...................................... //
		// Position Control
		// Save the Left position (of the first image in the group)
		if (oObjIndex = 1) {
			// Store Parent Postion (note only first is stored at this time)
			menuImagePositionLeft[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjLeft;
			menuImagePositionTop[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjTop;
			menuImagePositionWidth[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjWidth;
			menuImagePositionHeight[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjHeight;
			//
			// Cascase Direction
			// Adjust the Left position for the image width
			// Left Column wants Top Right of Parent Div
			// Right Column wants Top Left of Parent Div
		}
		//
		// ...................................... //
		// Cascade Control
		// ...................................... //
		// Cascase Row and Column
		var cascadeRow = 1;
		var cascadeColumn = 1;
		cascadeColumn = (oObjIndex - 1) % oObjectRowMax[oObjGroupIndex] + 1;
		cascadeRow = Math.floor((oObjIndex - 1) / oObjectRowMax[oObjGroupIndex]) + 1;
		// (oObjIndex - cascadeColumn + oObjectRowMax[oObjGroupIndex]) / oObjectRowMax[oObjGroupIndex];
		// ...................................... //
		// Cascase Direction (Down or Up)
		var layoutCascadeDown = true;
		var layoutCascadeRight = true;
		if (menuImageOffsetTopAll[oObjGroupIndex][indexGroup] > 0) {
			layoutCascadeDown = true;
		} else { layoutCascadeDown = false; }
		// Animation
		// ...................................... //
		if (layoutIndex = layoutWindowed) {
			layoutCascadeDown = true;
			filterMotionDirectionSourceAngle = 292.5;
			filterMotionDirection = 'rightdown';
		}
		// Top Position
		// ...................................... //
		// Offset
		if (IsImageLarge) {
			oObjNextOffsetTop = menuImageOffsetTopLarge[oObjGroupIndex];
			oObjNextOffsetTop += menuImageOffsetTopLarge[indexGroup];
			if (!layoutCascadeDown) { oObjNextOffsetTop = -oObjNextOffsetTop; }
			oObjNextTop = menuImagePositionTop[oObjGroupIndex][oObjIndex][IsSmall];
			//
			// oObjNextTop += menuImagePositionHeight[oObjGroupIndex] [oObjIndex] [IsSmall];
			//
			oObjNextTop += oObjNextOffsetTop;
		} else {
			// Small Image
			oObjNextOffsetTop = menuImageOffsetTopAll[oObjGroupIndex][indexGroup];
			oObjNextOffsetTop += menuImageOffsetTopAll[oObjGroupIndex][oObjIndex];
			// ...................................... //
			// Set Top
			// View Option Adjustments
			// Windowed Layout Format
			if (layoutIndex = layoutWindowed) {
				oObjNextOffsetTop = 30;
				// Set Top
				oObjNextOffsetTop += elBodyMainCenterTop.offsetHeight;
				oObjNextTop = ((oObjIndex - 1) * 50) + oObjNextOffsetTop;
				if (IsImageLarge) { oObjNextTop += 100; }
			} else {
				//  Standard Side Menu Layout Format
				// Set Top
				if (oObjIndex = 1) {
					oObjNextTop = oObjTop;
				} else {
					// oObjNextTop = oObjTop;
					oObjNextTop = menuImagePositionTop[oObjGroupIndex][oObjIndex - 1][IsImageLarge];
				}
				oObjNextTop += oObjNextOffsetTop;
				if (IsImageLarge) {
					if (oObjNextOffsetTop > 50) {
						oObjNextTop += oObjNextOffsetTop;
					} else { oObjNextTop += 100; }
				}
				//
			}
		}
		// Set Style Top for menu image box
		// ...................................... //
		oObjNext.style.top = oObjNextTop + 'px';
		// Menu Thumb Link Postioning (Top or Bottom)
		// ...................................... //
		// Large Image Handling
		if (!IsImageLarge) {
			// Small Image
			// Link Text Position Up or Down
			//      (determined by Cascade Direction)
			if (layoutCascadeDown) {
				// Display Top
				oObjNext.childNodes[0].style.display = 'block';
				oObjNext.childNodes[2].style.display = 'none';
			} else {
				// Display Bottom
				oObjNext.childNodes[0].style.display = 'none';
				oObjNext.childNodes[2].style.display = 'block';
			}
		} else {
			// Large Image
			// Link Text Position Up or Down
			if (layoutCascadeDown) {
				// Display Top
				oObjNext.childNodes[0].childNodes[0].style.display = 'block';
				oObjNext.childNodes[0].childNodes[2].style.display = 'none';
			} else {
				// Display Bottom
				oObjNext.childNodes[0].childNodes[0].style.display = 'none';
				oObjNext.childNodes[0].childNodes[2].style.display = 'block';
			}
		}
		// Cascase Direction (Right or Left)
		// ...................................... //
		if (menuImageOffsetLeftAll[oObjGroupIndex][indexGroup] > 0) {
			layoutCascadeRight = true;
		} else { layoutCascadeRight = false; }
		//
		if (layoutCascadeRight) {
			// Left Column (Left)
			// ...................................... //
			if (layoutCascadeDown) {
				filterMotionDirectionSourceAngle = 315;
				filterMotionDirectionSourceAngle = (oObjNextOffsetTop / oObjNextOffsetLeft * 45) + 270;
				filterMotionDirection = 'rightdown';
			} else {
				filterMotionDirectionSourceAngle = 225;
				filterMotionDirectionSourceAngle = Math.abs(oObjNextOffsetTop / oObjNextOffsetLeft * 45) + 180;
				filterMotionDirection = 'rightup';
			}
		} else {
			// Right Column
			// ...................................... //
			if (layoutCascadeDown) {
				filterMotionDirectionSourceAngle = 45;
				filterMotionDirectionSourceAngle = (oObjNextOffsetTop / oObjNextOffsetLeft * 45);
				filterMotionDirection = 'leftdown';
			} else {
				filterMotionDirectionSourceAngle = 135;
				filterMotionDirectionSourceAngle = Math.abs(oObjNextOffsetTop / oObjNextOffsetLeft * 45) + 90;
				filterMotionDirection = 'leftup';
			}
		}
		// Left Position
		// ...................................... //
		// Offset
		if (IsImageLarge) {
			oObjNextOffsetLeft = menuImageOffsetLeftLarge[oObjGroupIndex];
			oObjNextOffsetLeft += menuImageOffsetLeftLarge[indexGroup];
			if (!layoutCascadeRight) { oObjNextOffsetLeft = -oObjNextOffsetLeft; }
			//
			oObjNextLeft = menuImagePositionLeft[oObjGroupIndex][oObjIndex][IsSmall];
			//
			if (layoutCascadeRight) {
				oObjNextLeft += menuImagePositionWidth[oObjGroupIndex][oObjIndex][IsSmall];
			} else {
				oObjNextLeft -= elementWidthDefault;
				// menuImagePositionWidth[oObjGroupIndex] [oObjIndex] [IsImageLarge];
			}
			//
			oObjNextLeft += oObjNextOffsetLeft;
		} else {
			oObjNextOffsetLeft = menuImageOffsetLeftAll[oObjGroupIndex][indexGroup];// Group Default Offset
			oObjNextOffsetLeft += menuImageOffsetLeftAll[oObjGroupIndex][oObjIndex];// Item specific default
			//
			// ...................................... //
			// View First Image Adjustments
			var menuImageOffsetFirst = menuImageOffsetFirstAll[oObjGroupIndex][indexLeft];
			// Windowed Layout Format
			if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) != 1) { menuImageOffsetFirst = 0; }
			if (layoutIndex == layoutWindowed) {
				// oObjNextOffsetLeft = oObjNextOffsetLeft * 25 / Math.abs(oObjNextOffsetLeft);
				menuImageOffsetFirst = 0;
				// oObjNextOffsetLeft = 0;// some hard coded setting?
			}
			// if (layoutIndex == layoutWindowed) { oObjNextOffsetTop = Math.abs(oObjNextOffsetTop); }
			//
			// ...................................... //
			// Left Position Calculation
			// ...................................... //
			// Adjust Left Position for Page Overflow
			// Cascade Maximum exceeded (Left)
			// Cascase Direction
			if (layoutCascadeRight) {
				// ...................................... //
				// Left Column (Left)
				// One First Column of Row
				if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) == 1) {
					// indicates both First and First of Next Row
					if (layoutIndex = layoutWindowed) {
						oObjNextOffsetLeft = 0;
						oObjNextLeft = ((oObjGroupIndex - 1) / 6 * layoutWidth)
							+ menuImageOffsetFirst
							+ oObjNextOffsetLeft;// (ie. Right Top)
						// XXXXXXXX client width etc (refreshing?)
						// Use Parent Position plus offset
						oObjNextLeft = (menuImagePositionLeft[oObjGroupIndex][oObjRootIndex][IsImageLarge]
							+ menuImagePositionWidth[oObjGroupIndex][oObjRootIndex][IsImageLarge])
							+ menuImageOffsetFirst
							+ oObjNextOffsetLeft;// (ie. Right Top)
					}
				} else {
					// Cascade Next Left Column By Top and Left Offsets
					oObjNextLeft = menuImagePositionLeft[oObjGroupIndex][oObjIndex - 1][IsImageLarge]
						+ oObjNextOffsetLeft;// Right Edge of Parent
					// oObjNextLeft = (oObjLeft)
				}
				//
			} else {
				// ...................................... //
				// Right Column
				// Cascade Maximum exceeded (Right)
				if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) == 1) {
					if (layoutIndex = layoutWindowed) {
						oObjNextLeft = ((oObjGroupIndex - 1) / 6 * layoutWidth);
					} else {
						oObjNextLeft = menuImagePositionLeft[oObjGroupIndex][oObjRootIndex][IsImageLarge]
							- (iImageSize + 10)
							+ menuImageOffsetFirst
							+ oObjNextOffsetLeft;// (ie. Left Top)
					}
					// if (layoutIndex == layoutWindowed && oObjGroupIndex > 2) { oObjNextLeft += 75; }
				} else {
					// (oObjLeft)
					if (layoutIndex == layoutWindowed) { menuImageOffsetFirst = 0; }
					oObjNextLeft = menuImagePositionLeft[oObjGroupIndex][oObjIndex - 1][IsImageLarge]
						+ oObjNextOffsetLeft;// Right Edge of Parent
				}
			} // end of Cascade Right or Left
		} // end of Large or Small
		// Set Left for menu image box
		// ...................................... //
		oObjNext.style.left = oObjNextLeft + 'px';
		// Column Overflow
		// ...................................... //
		// Left Column (Left)
		// ...................................... //
		// Maximum Screen Width Exceeded (Left)
		// note this should be an adjustable value
		var oObjNextLeft; var imageLeftEdge; var imageRightEdge; var bodyLeftEdge; var bodyRightEdge;
		//
		StdElementPosGet(UseScroll, UseBase, elBodyMainCenterCenter, 0, 0);
		bodyLeftEdge = oObjLeft;
		bodyRightEdge = oObjLeft + oObjWidth;
		// bodyLeftEdge = StdElementLeftMaxGet(DoNotUseScroll, UseBase, elBodyMainCenterCenter);
		// bodyRightEdge = bodyLeftEdge + StdElementWidthMaxGet(DoNotUseScroll, UseBase, elBodyMainCenterCenter);
		oObjNextLeft = StdElementLeftMaxGet(UseScroll, UseBase, oObjNext);
		//
		var oObjNextLeftChanged = false;
		do {
			imageRightEdge = oObjNextLeft
				+ elementWidthDefault;
			//
			if (imageRightEdge + 10 > bodyRightEdge) {
				oObjNextLeft -= 50; oObjNextLeftChanged = true;
			}
		} while (imageRightEdge + 10 > bodyRightEdge);
		//
		do {
			imageLeftEdge = oObjNextLeft;
			//
			if (imageLeftEdge - 10 < bodyLeftEdge) {
				oObjNextLeft += 50; oObjNextLeftChanged = true;
			}
		} while (imageLeftEdge - 10 < bodyLeftEdge);
		//
		if (oObjNextLeftChanged) { oObjNext.style.left = oObjNextLeft + 'px'; }
		// Set Object Style Left
		// ...................................... //
		// oObjNext.style.left = oObjNext.style.posLeft;
		// ...................................... //
		// Store Postion
		StdElementPosGet(UseScroll, UseBase, oObjNext, elementWidthDefault, elementHeightDefault);
		menuImagePositionLeft[oObjGroupIndex][oObjIndex][IsImageLarge] = oObjLeft;// parseInt(oObjNext.style.left);
		menuImagePositionTop[oObjGroupIndex][oObjIndex][IsImageLarge] = oObjTop;// parseInt(oObjNext.style.top);
		menuImagePositionWidth[oObjGroupIndex][oObjIndex][IsImageLarge] = oObjWidth;// oObjNext.offsetWidth;
		menuImagePositionHeight[oObjGroupIndex][oObjIndex][IsImageLarge] = oObjHeight;// oObjNext.offsetHeight;
		// Filters
		// ...................................... //
		// Z Index
		// ...................................... //
		imgZindex += 1;
		oObjNext.style.zIndex = imgZindex + oObjIndex;
		// Filter Apply Command
		// ...................................... //
		if (moveIsOn || filterIsOn) {
			playDirection = playDirectionForward;
			// playDirection = playDirectionReverse;
			StdElementPlayAgain(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjIndex, false, true);
			// oObjNext.filters[0].apply();
			// oObjNext.filters[1].apply();
			// oObjNext.filters.item('DXImageTransform.Microsoft.Wheel').apply();
			// oObjNext.filters.item('DXImageTransform.Microsoft.Spin').apply();
			// oObjNext.filters.item[1].apply();
			// oObjNext.filters.item(1).Apply();
			// Visibility
			oObjNext.style.display = 'block';
		} else {
			// Visibility
			// ...................................... //
			oObjNext.style.display = 'block';
		}
		// Filter Item Creation
		// ...................................... //
		// oObjNext.filters.item = new Array(1);
		// Filter Item Set
		// ...................................... //
		// oObjNext.filters.item(0) = '-ms-filter:progid:DXImageTransform.Microsoft.Matrix(sizingMethod= ' + quoteOpen + 'auto expand' + quoteClose + ', duration= ' + quoteOpen + '1.5' + quoteClose + ')';
		// Set Object Style Filter
		// ...................................... //
		// oObjNext.style.filter =
		// 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod= ' + quoteOpen + 'auto expand' + quoteClose + ', duration= ' + quoteOpen + '1.5' + quoteClose + ')';
		// 'progid:DXImageTransform.Microsoft.
		// Sample / Test Filters
		// ...................................... //
		// Filter Test Microsoft
		// oObjNextImage.style.filter = 'filter:progid:DXImageTransform.Microsoft.Wheel(duration= 3);filter:progid:DXImageTransform.Microsoft.Slide(slideStyle= ' + quoteOpen + 'HIDE' + quoteClose + ', duration= 3, bands= 1);';
		// oObjNext.filters[0] = 'filter:progid:DXImageTransform.Microsoft.Wheel(duration= 3);';
		// oObjNext.filters[1] = 'filter:progid:DXImageTransform.Microsoft.Slide(slideStyle= ' + quoteOpen + 'HIDE' + quoteClose + ', duration= 3, bands= 1);';
		// Filter Play Command
		// ...................................... //
		// oObjNext.filters[0].play();
		// oObjNext.filters.item(0).Play();
		// oObjNext.filters[1].play();
		// StdFilterResetThenAnimate(oObjNext);
		// StdFilterSpin(oObjNext);
		// Z Index
		// ...................................... //
		imgZindex += 1;
		oObjNext.style.zIndex = imgZindex + oObjIndex;
		//
		// ...................................... //
		// end of display 'none'
	} else {
		// ...................................... //
		// Z Index
		imgZindex += 1;
		if (IsImageLarge) {
			oObjNext.style.zIndex = imgZindex + oObjIndex;
			oObjNextParent.style.zIndex = imgZindex + oObjIndex;
			if (oObjNextParent.style.display != 'block') {
				oObjNextParent.style.display = 'block';
			}
		} else {
			oObjNext.style.zIndex = imgZindex + oObjIndex;
			if (oObjNextLarge.style.display = 'block') { oObjNextLarge.style.zIndex = imgZindex + oObjIndex; }
		}
	}
	// Dispaly Lock vs MouseOut Disappear
	// ...................................... //
	// if (oObjLocked = true) { menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge] = oObjLocked; }
	if (!IgnoreLock) { menuImageLocked[oObjGroupIndex][oObjIndex][IsImageLarge] = oObjLocked; }
}
// SectionBlock (Menu) Hide function (s)
// ...................................... //
// StdElementItemHideId
// ...................................... //
function StdElementItemHideId(e, IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, oObjNextLargeId, oObjNextGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	// load and validate event and objects
	if (!StdElementEventFromHtmlCheck(e, debugLogEvents)) { return; }
	//
	// Objects
	oObjIndex = oObjGroupImageIndex;// StdElementItemIndexSetFromObj(oObjNext);
	StdElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	if (IsImageLarge) {
		oObjNext = oObjLarge; oObjNextImage = oObjImageLarge; oObjNextParent = oObj; oObjNextLarge = oObjLarge;
		oObjLocked = menuImageLocked[oObjGroupIndex][oObjIndex][IsSmall];
	} else {
		oObjNext = oObj; oObjNextImage = oObjImage; oObjNextParent = oObjParent; oObjNextLarge = oObjLarge;
	}
	//
	StdElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjNextGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
	//
}
// StdMenu StdElementItemHide
// ...................................... //
function StdElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjNextGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	if (StdTimerStartMoveBusy(oObjNext.id + 'Move', oObjGroupIndex, oObjIndex, debugLogEvents)) { return; }
	//
	if (loadFirstJava) { StdElementObjectCreate(); }
	if (loadFirstMenuImage) { StdMenuImagesHtmlBuild(); }
	var oObjNextIndex = oObjIndex = oObjGroupImageIndex;// StdElementItemIndexSetFromObj(oObjNextGroupIndex, oObjNext);
	// StdElementItemGetAllFromIndex(oObjNextGroupIndex, oObjNextIndex);
	//
	if (!IgnoreLock && menuImageLocked[oObjNextGroupIndex][oObjNextIndex][IsImageLarge] == true) {
		if (debugTimer && debugTimerTransition) {
			ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
				StdTimerKeyText('Hide', oObjGroupIndex, oObjIndex)
				+ ', ' + oObjNext.id
				+ ', Do not hide locked item'
				+ ', Time:' + Date()
				+ '.',
				'StdElementItemHide', 9876, oObjNext, null,
				errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		return;
	}
	//
	if (debugTimer && debugTimerTransition) {
		ConsoleMessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
			StdTimerKeyText('Hide', oObjGroupIndex, oObjIndex)
			+ ', ' + oObjNext.id
			+ ', ' + ((moveIsOn || filterIsOn) ? 'Animated' : 'Unanimated')
			+ ', Time:' + Date()
			+ '.',
			'StdElementItemHide', 9889, oObjNext, null,
			errorElementComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	//
	if (moveIsOn || filterIsOn) {
		//
		// playDirection = playDirectionForward;
		var playDirection = playDirectionReverse;
		var iImageSize;
		if (IsImageLarge) { iImageSize = oObjImageSizeLarge; } else { iImageSize = oObjImageSizeSmall; }
		StdElementPlayAgain(playDirection, IsImageLarge,
			oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
			iImageSize, oObjNextGroupIndex, oObjNextIndex, false, true);
		// oObjNext.filters[0].apply();
		// oObjNext.filters[1].apply();
		// oObjNext.filters.item('DXImageTransform.Microsoft.Wheel').apply();
		// oObjNext.filters.item('DXImageTransform.Microsoft.Spin').apply();
		// oObjNext.filters.item[1].apply();
		// oObjNext.filters.item(1).Apply();
		//
		// Visibility
		// oObjNext.style.display= 'block';
	} else {
		// ...................................... //
		// Visibility
		oObjNext.style.display = 'none';
		// will become a filter play...
		StdTimerItemDeactivate(timerTypeMove, oObjNextGroupIndex, oObjNextIndex);
		StdTimerItemDeactivate(timerTypeTransition, oObjNextGroupIndex, oObjNextIndex);
	}
	//
	//
	if (!IgnoreLock) { menuImageLocked[oObjNextGroupIndex][oObjNextIndex][IsImageLarge] = oObjLocked; }
	//
	// oObj.width= 0;
	// oObj.height= 0;
	// oObj.style.display= 'none';
	// oObjImage.style.display= 'none';
	// oObjLarge.style.display= 'none';
	// oObjImageLarge.style.display= 'none';
}
// StdElementItemIndexSetFromName
// ...................................... //
function StdElementItemIndexSetFromName(oObjPassed) {
	if (!oObjPassed) {
		oObjNotFound = false;
		oObjGroupIndex = 4; oObjIndex = 1; // todo might be wrong
		return oObjIndex;
	}
	//
	for (imgCn = 0; imgCn < 1 + imgMax; imgCn++) {
		if (oObjPassed.name = 'img' + imgCn) { return imgCn; }
	}
	return 0;
}
// ..................................................................................... _//

script_state = "Mdm Standard Page Element functions loaded. (Group, Item, Play)";
if (debugLoadIsOn) { debugger; }
