// Section (Menu Image) Element Item function (s)
// ...................................... //
// SectionBlock Element Item Play function (s)
// Menu Image Play First
function ElementPlayFirst(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
	oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	filterPlayIndex = 1;
	HideImage = false; HideImageLarge = false;
	//
	ElementPlay(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
		oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
}
// ElementPlayNext
// ...................................... //
function ElementPlayNext(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
	oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	filterPlayIndex = 1;
	HideImage = false; HideImageLarge = false;
	//
	ElementPlay(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
		oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
}
// ElementPlayAgain
// ...................................... //
function ElementPlayAgain(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
	oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	filterPlayIndex = 1;
	HideImage = false; HideImageLarge = false;
	//
	ElementPlay(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
		oObjImageSizePassed, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
}
// ElementPlay
function ElementPlay(playDirection, IsImageLarge,
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
		MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
			TimerLogText(timerType, timerGroup, timerId, DoNotUseEither, playDirection, 'Request')
			+ ', Play command requested'
			+ '.',
			'ElementPlay', 3819, null, null,
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
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
						TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Deactivate')
						+ ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
						+ ', Already running, deactivating'
						+ '.',
						'ElementPlay', 3837, null, null,
						errorComment, errorDoNotDisplayTag, errorDoNotAlert);
				}
				// Item will be deactivate and the play command issued
				TimerItemDeactivate(timerTypeTransition, timerGroup, timerId, DoNotUseRoot);
			} else {
				// playDirection the same (while running)
				if (debugTimer && debugTimerDetail && debugTimerTransition) {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
						TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate DoStep')
						+ ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
						+ ', Already running, performing a Transition step instead'
						+ '.',
						'ElementPlay', 3850, null, null,
						errorComment, errorDoNotDisplayTag, errorDoNotAlert);
				}
				// the next step will be performed and the new play command skipped
				if (timerMethod == timerMethodGroup) {
					TimerGroupDoStepFilter(timerTypeTransition, timerGroup, timerId);
				} else {
					TimerItemDoStepFilter(timerTypeTransition, timerGroup, timerId);
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
				if (timerObj[timerGroup][timerItemTransitionKey].elIsDisplayed = elIsDisplayed) {
					if (debugTimer && debugTimerDetail && debugTimerTransition) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
							TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
							+ ', Play Forward command NOT issued'
							+ ', Item is already displayed'
							+ '.',
							'ElementPlay', 3875, null, null,
							errorComment, errorDoNotDisplayTag, errorDoNotAlert);
					}
					//
					PlayAbort = true;// skip issuing play command
					//
				}
			} else {
				// Reverse
				if (timerObj[timerGroup][timerItemTransitionKey].elIsDisplayed = elIsNotDisplayed) {
					if (debugTimer && debugTimerDetail && debugTimerTransition) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
							TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
							+ ', Play Reverse command NOT issued'
							+ ', Item is already hidden'
							+ '.',
							'ElementPlay', 3891, null, null,
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
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
						TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Deactivate')
						+ ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
						+ ', Already running, deactivating'
						+ '.',
						'ElementPlay', 3919, null, null,
						errorComment, errorDoNotDisplayTag, errorDoNotAlert);
				}
				// Item will be deactivate and the play command issued
				TimerItemDeactivate(timerTypeTransition, timerGroup, timerId, DoNotUseRoot);
			} else {
				// playDirection the same (while running)
				if (debugTimer && debugTimerDetail && debugTimerMove) {
					MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
						TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate DoStep')
						+ ', Items:' + timerObj[timerGroup][timerRootKey].timerInstance
						+ ', Already running, performing a Move step instead'
						+ '.',
						'ElementPlay', 3932, null, null,
						errorComment, errorDoNotDisplayTag, errorDoNotAlert);
				}
				//
				if (timerMethod == timerMethodGroup) {
					TimerGroupDoStepMove(timerTypeMove, timerGroup, timerId);
				} else {
					TimerItemDoStepMove(timerTypeMove, timerGroup, timerId);
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
				if (timerObj[timerGroup][timerItemMoveKey].elIsDisplayed = elIsDisplayed) {
					if (debugTimer && debugTimerDetail && debugTimerMove) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
							TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
							+ ', Play Forward command NOT issued'
							+ ', Item is already displayed...',
							'ElementPlay', 3956, null, null,
							errorComment, errorDoNotDisplayTag, errorDoNotAlert);
					}
					//
					PlayAbort = true;// skip issuing play command
					//
				}
			} else {
				// Reverse
				if (timerObj[timerGroup][timerItemMoveKey].elIsDisplayed = elIsNotDisplayed) {
					if (debugTimer && debugTimerDetail && debugTimerMove) {
						MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
							TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
							+ ', Play Reverse command NOT issued'
							+ ', Item is already hidden...',
							'ElementPlay', 3971, null, null,
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
	oObjIndex = oObjGroupImageIndex;// ElementItemIndexSetFromObj(oObjNext);
	//
	// POSITION
	// elLeftOrig, elTopOrig, elLeftDest, elTopDest,
	var oObjIndexTemp = oObjIndex;
	if (!IsImageLarge) { oObjIndexTemp = oObjRootIndex; }
	elLeftOrig = menuImagePositionLeft[oObjGroupIndex][oObjIndexTemp][IsSmall];
	// if CascadeRight
	if (!IsImageLarge) {
		if (oObjGroupIndex < 3) {
			elLeftOrig += menuImagePositionWidth[oObjGroupIndex][oObjIndexTemp][IsSmall];
		}
	}
	if (IsImageLarge) {
		if (oObjGroupIndex >= 3) {
			elLeftOrig += menuImagePositionWidth[oObjGroupIndex][oObjIndexTemp][IsSmall];
		}
	}
	elTopOrig = menuImagePositionTop[oObjGroupIndex][oObjIndexTemp][IsSmall];
	// if (layoutCascadeDown && IsImageLarge) {
	// 		elTopOrig += menuImagePositionHeight[oObjGroupIndex] [oObjIndexTemp] [IsSmall];
	// }
	//
	elLeftDest = menuImagePositionLeft[oObjGroupIndex][oObjIndex][IsImageLarge];
	elTopDest = menuImagePositionTop[oObjGroupIndex][oObjIndex][IsImageLarge];
	// elLeftDest = oObjNext.style.posLeft;
	// elTopDest = oObjNext.style.posTop;
	//
	//
	if (debugTimer && debugTimerMove) {
		MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
			TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirectionNotPassed, 'Item Position')
			+ ', Item orgin and destination set'
			+ ', Orig: ( ' + elTopOrig + ', ' + elLeftOrig + ' )'
			+ ', Dest: ( ' + elTopDest + ', ' + elLeftDest + ' )',
			'ElementPlay', 10341, null, null,
			errorComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	//
	// DURATION
	// elementMoveDuration = 2;// 2 / 90
	// elMoveStepMax = 100;// 100 / 200
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
			MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
				TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Get')
				+ ', Filter Get command issued'
				+ '.',
				'ElementPlay', 4055, null, null,
				errorComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		//
		FilterGet(filterPlayAll, startIndex, endIndex,
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
			MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
				TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Enable')
				+ ', Filter Enable command issued'
				+ '.',
				'ElementPlay', 4085, null, null,
				errorComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		//
		FilterEnable(filterPlayAll, startIndex, endIndex,
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
			MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
				TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Apply')
				+ ', Filter Apply command issued'
				+ '.',
				'ElementPlay', 4104, null, null,
				errorComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		//
		FilterApply(filterPlayAll, startIndex, endIndex,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjGroupImageIndex,
			filterObjId, filterId);
		// }
		//
		if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
			MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
				TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Start')
				+ ', Filter Start command issued'
				+ '.',
				'ElementPlay', 4119, null, null,
				errorComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		//
		TimerStartFilter(playDirection, timerMethod, TimerGroupDoStepFilter, TimerItemDoStepFilter,
			filterPlayAll, startIndex, endIndex,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjGroupImageIndex,
			filterObjId, filterId);
		//
		// if (filterObj[filterIdPassed].filterDoPlay) {
		if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
			MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
				TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Play')
				+ ', Filter Vendor Play command issued'
				+ '.',
				'ElementPlay', 4135, null, null,
				errorComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		//
		FilterPlay(playDirection, filterPlayAll, startIndex, endIndex,
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
			oObjNext.style.left = elLeftDest + 'px';
			oObjNext.style.top = elTopDest + 'px';
		} else {
			tempSize = 0.05;
			oObjNext.style.left = elLeftOrig + 'px';
			oObjNext.style.top = elTopOrig + 'px';
		}
		//
		if (filterIsOn || filterResizeIsOn) {
			if (filterResizeIsOn) { FilterResize(oObjNext, filterClassMatrix, tempSize); }
		}
		// ...................................... //
		// Visibility
		if (oObjNext.style.display != 'block') { oObjNext.style.display = 'block'; }
		//
		if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
			MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
				TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Start')
				+ ', Move Start command issued'
				+ '.',
				'ElementPlay', 4174, null, null,
				errorComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		//
		TimerStartMove(playDirection, timerMethod, TimerGroupDoStepMove, TimerItemDoStepMove,
			filterPlayAll, startIndex, endIndex,
			oObjNext, oObjNextImage,
			oObjGroupIndex, oObjGroupImageIndex,
			filterObjId, filterId);
		//
	} else if (filterIsOn || filterResizeIsOn) {
		//
		// **if (browserAnimationIsIe && filterCommand.length) { eval(filterCommand);filterCommand = ''; }
		if (filterResizeIsOn && !elIsDisplayed) {
			//
			if (debugTimer && debugTimerDetail && (debugTimerMove || debugTimerTransition)) {
				MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
					TimerLogText(timerType, timerGroup, timerId, DoNotUseRoot, playDirection, 'Resize')
					+ ', Resize command issued'
					+ '.',
					'ElementPlay', 4194, null, null,
					errorComment, errorDoNotDisplayTag, errorDoNotAlert);
			}
			//
			FilterResize(oObjNext, filterClassMatrix, 0.05);
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
// 		ElementGroupShowRange
//		ElementItemShowIndex
//		ElementGroupShowStack
//		ElementItemToggle
//		ElementItemShow
// Menu Hide
// 		ElementGroupToggleRange
//		ElementItemHide
// ...................................... //
// SectionBlock Show Toggle function (s)
// ...................................... //
// ElementGroupToggleRange
// ...................................... //
function ElementGroupToggleRange(HideImage, HideImageLarge, startIndex, endIndex, IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	if (loadFirstJava) { ElementObjectCreate(); }
	if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
	//
	// Objects
	oObjIndex = oObjGroupImageIndex;// ElementItemIndexSetFromObj(oObjNext);
	ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	if (IsImageLarge) {
		oObjNext = oObjLarge; oObjNextImage = oObjImageLarge; oObjNextParent = oObj; oObjNextLarge = oObjLarge;
	} else {
		oObjNext = oObj; oObjNextImage = oObjImage; oObjNextParent = oObjParent; oObjNextLarge = oObjLarge;
	}
	if (oObjNext) {
		//
		var startObjoObjIndex = startIndex;
		var endObjoObjIndex = endIndex;
		var oObjIndexCurr = startObjoObjIndex;
		//
		if (oObjNext.style.display == 'none') {
			oObjLocked = true;
			IgnoreLock = false;
			ElementGroupShowStack(IsImageLarge, oObjNextParent.id, oObjNextImage.id, oObjNext.id, iImageSize, oObjGroupIndex, endIndex, oObjLocked, IgnoreLock);
			//
		} else {
			oObjLocked = false;
			IgnoreLock = true;
			while (oObjIndexCurr < 1 + endObjoObjIndex) {
				//
				menuImageLocked[oObjGroupIndex][oObjIndexCurr][IsImageLarge] = false;
				// Objects
				ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndexCurr);
				//
				if (HideImage) {
					ElementItemHide(IsImageLarge,
						oObjParent, oObjImage, oObj, oObjLarge,
						oObjGroupIndex, oObjIndexCurr,
						oObjLocked, IgnoreLock);
				}
				if (HideImageLarge) {
					if (oObjLarge.style.display = 'block') {
						ElementItemHide(true,
							oObj, oObjImageLarge, oObjLarge, oObjLarge,
							oObjGroupIndex, oObjIndexCurr,
							oObjLocked, IgnoreLock);
					}
				}
				//
				oObjIndexCurr++;
			}
		}
	} else { ErrorOccured(Event, oObjNext, oObj, "No next image to show", MessageElementWarn, true, false); }
}
// Menu Toggle Menu Show Item (Mouse Down function)
// ...................................... //
function ElementItemToggle(IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	if (loadFirstJava) { ElementObjectCreate(); }
	if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
	//
	// Objects
	oObjIndex = oObjGroupImageIndex;// ElementItemIndexSetFromObj(oObjNext);
	ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	if (oObjNext) {
		if (IsImageLarge) {
			oObjNext = oObjLarge; oObjNextImage = oObjImageLarge; oObjNextParent = oObj; oObjNextLarge = oObjLarge;
			oObjLocked = menuImageLocked[oObjGroupIndex][oObjIndex][IsSmall];
		} else {
			oObjNext = oObj; oObjNextImage = oObjImage; oObjNextParent = oObjParent; oObjNextLarge = oObjLarge;
			// oObjLocked = menuImageLocked[oObjGroupIndex] [oObjIndex] [IsSmall];
		}
		//
		if (oObjNext.style.display == 'none') {
			ElementItemShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupImageIndex, menuImageLocked[oObjGroupIndex][oObjIndex][IsImageLarge], IgnoreLock);
			oObjNext.style.display = 'block';
		} else {
			if (IsImageLarge) {
				// Is this wrong?
				ElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjGroupIndex, oObjGroupImageIndex, menuImageLocked[oObjGroupIndex][oObjIndex][IsImageLarge], true);
			} else {
				ElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjGroupIndex, oObjGroupImageIndex, true, IgnoreLock);
				// ElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjGroupIndex, oObjGroupImageIndex, menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge], IgnoreLock);
				oObjNext.style.display = 'none';
			}
		}
	} else { ErrorOccured(Event, oObjNext, oObj, "No next image to show", MessageElementWarn, true, false); }
	//
}
// Menu Menu Show Item and all Previous (Mouse Over function)
// ...................................... //
function ElementGroupShowStack(IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	// load and validate event and objects
	ElementEventFromHtmlCheck(null, debugLogEvents);
	if (eventCurrId == oObjNextParentId
		&& !eventMouseOverEnabled
		&& eventType == 'mouseover'
	) {
		return;
	}
	//
	if (loadFirstJava) { ElementObjectCreate(); }
	if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
	//
	// Objects
	oObjIndex = oObjGroupImageIndex;// ElementItemIndexSetFromObj(oObjNext);
	ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
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
	if (oObjNextValid && oObjNext) {
		// Handle and cascade event
		if (eventType != 'mouseover' || eventMouseOverEnabled
			|| (oObjNext.style.display == 'block' && !eventMouseOverEnabled)
		) {
			//
			imgZindex += 1;
			oObjNext.style.zIndex = imgZindex;
			// process images in group above and including this location
			var startoObjIndex = 1;
			var endoObjIndex = ElementItemIndexSetFromObj(oObjNext);
			var oObjIndexCurr = startoObjIndex;
			while (oObjIndexCurr < 1 + endoObjIndex) {
				// Objects
				ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndexCurr);
				// Set Lock Test
				// if (oObjLocked = true) { menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge] = oObjLocked; }
				if (!IgnoreLock) { menuImageLocked[oObjGroupIndex][oObjIndexCurr][IsImageLarge] = oObjLocked; }
				// Reveal Hidden Images
				ElementItemShow(IsImageLarge, oObjParent, oObjImage, oObj, oObjLarge, iImageSize, oObjGroupIndex, oObjIndexCurr, menuImageLocked[oObjGroupIndex][oObjIndexCurr][IsImageLarge], true);
				oObjIndexCurr++;
			}
			// done
		} else {
			// skipped due to mouse event settings
		}
	} else { ErrorOccured(Event, oObjNext, oObj, "No next image to show", MessageElementWarn, true, false); }
}
// ElementGroupShowRange
// ...................................... //
function ElementGroupShowRange(startIndex, endIndex, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	// ...................................... //
	// Build Menu Images Div
	if (loadFirstJava) { ElementObjectCreate(); }
	if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
	//
	var startObjoObjIndex = startIndex;
	var endObjoObjIndex = oObjGroupImageIndex;// ElementItemIndexSetFromObj(oObjNext);
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
function ElementItemShowIndex(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	if (loadFirstJava) { ElementObjectCreate(); }
	if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
	ElementGroupShowStack(IsImageLarge, oObjNextParent.id, oObjNextImage.id, oObjNext.id, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
}
// Menu Menu Show Item (Mouse Over function)
// ...................................... //
function ElementItemShowId(e, IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, oObjNextLargeId, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	// look for duplicate mouse over events (bubbling)
	if (!ElementEventFromHtmlCheck(e, debugLogEvents)) { return; }
	//
	// Objects
	oObjIndex = oObjGroupImageIndex;// ElementItemIndexSetFromObj(oObjNext);
	ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	if (IsImageLarge) {
		oObjNext = oObjLarge; oObjNextImage = oObjImageLarge; oObjNextParent = oObj; oObjNextLarge = oObjLarge;
		oObjLocked = menuImageLocked[oObjGroupIndex][oObjIndex][IsSmall];
	} else {
		oObjNext = oObj; oObjNextImage = oObjImage; oObjNextParent = oObjParent; oObjNextLarge = oObjLarge;
	}
	//
	ElementItemShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
	//
}
// Menu Menu Show Item (Mouse Over function)
// ...................................... //
function ElementItemShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	if (TimerStartMoveBusy(timerTypeMove, oObjGroupIndex, oObjGroupImageIndex, debugLogEvents)) { return; }
	//
	if (loadFirstJava) { ElementObjectCreate(); }
	if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
	//
	oObjIndex = oObjGroupImageIndex;// ElementItemIndexSetFromObj(oObjNext);
	LastTochedId = oObjNext.id;
	//
	if (debugTimer && debugTimerTransition) {
		MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
			TimerKeyText('Show', oObjGroupIndex, oObjIndex)
			+ ', ' + oObjNext.id
			+ ', ' + ((moveIsOn || filterIsOn) ? 'Animated' : 'Unanimated')
			+ ', Time:' + Date()
			+ '.',
			'ElementItemShow', 10141, oObjNext, null,
			MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	//
	WindowClientWidth();
	//
	// if (IsImageLarge) {
	// Objects
	// ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
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
		var layoutBlockWidthDefault = iImageSize + (menuImageBorderWidth * 2);
		var elHeightDefault = (iImageSize * oObjImageSizeRatio) + (menuImageBorderWidth * 2);
		//
		////////////////////////////////////////////
		// Position
		// ...................................... //
		//
		// ...................................... //
		// Parent Postion
		// ...................................... //
		// Get the offset width of that parent element
		ElementPosCalculate(oObjNextParent);
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
				oObjNextOffsetTop += bodyMainCenterTop.offsetHeight;
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
				oObjNextLeft -= layoutBlockWidthDefault;
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
		ElementPosGet(UseScroll, UseBase, bodyMainCenterCenter, 0, 0);
		bodyLeftEdge = oObjLeft;
		bodyRightEdge = oObjLeft + oObjWidth;
		// bodyLeftEdge = ElementLeftMaxGet(DoNotUseScroll, UseBase, bodyMainCenterCenter);
		// bodyRightEdge = bodyLeftEdge + ElementWidthMaxGet(DoNotUseScroll, UseBase, bodyMainCenterCenter);
		oObjNextLeft = ElementLeftMaxGet(UseScroll, UseBase, oObjNext);
		//
		var oObjNextLeftChanged = false;
		do {
			imageRightEdge = oObjNextLeft
				+ layoutBlockWidthDefault;
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
		ElementPosGet(UseScroll, UseBase, oObjNext, layoutBlockWidthDefault, elHeightDefault);
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
			ElementPlayAgain(playDirection, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjIndex, false, true);
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
		// FilterResetThenAnimate(oObjNext);
		// FilterSpin(oObjNext);
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
// ElementItemHideId
// ...................................... //
function ElementItemHideId(e, IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, oObjNextLargeId, oObjNextGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	// load and validate event and objects
	if (!ElementEventFromHtmlCheck(e, debugLogEvents)) { return; }
	//
	// Objects
	oObjIndex = oObjGroupImageIndex;// ElementItemIndexSetFromObj(oObjNext);
	ElementItemGetAllFromIndex(oObjGroupIndex, oObjIndex);
	if (IsImageLarge) {
		oObjNext = oObjLarge; oObjNextImage = oObjImageLarge; oObjNextParent = oObj; oObjNextLarge = oObjLarge;
		oObjLocked = menuImageLocked[oObjGroupIndex][oObjIndex][IsSmall];
	} else {
		oObjNext = oObj; oObjNextImage = oObjImage; oObjNextParent = oObjParent; oObjNextLarge = oObjLarge;
	}
	//
	ElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjNextGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock);
	//
}
// Menu ElementItemHide
// ...................................... //
function ElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjNextGroupIndex, oObjGroupImageIndex, oObjLocked, IgnoreLock) {
	if (TimerStartMoveBusy(oObjNext.id + 'Move', oObjGroupIndex, oObjIndex, debugLogEvents)) { return; }
	//
	if (loadFirstJava) { ElementObjectCreate(); }
	if (loadFirstMenuImage) { MenuImagesHtmlBuild(); }
	var oObjNextIndex = oObjIndex = oObjGroupImageIndex;// ElementItemIndexSetFromObj(oObjNextGroupIndex, oObjNext);
	// ElementItemGetAllFromIndex(oObjNextGroupIndex, oObjNextIndex);
	//
	if (!IgnoreLock && menuImageLocked[oObjNextGroupIndex][oObjNextIndex][IsImageLarge] == true) {
		if (debugTimer && debugTimerTransition) {
			MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
				TimerKeyText('Hide', oObjGroupIndex, oObjIndex)
				+ ', ' + oObjNext.id
				+ ', Do not hide locked item'
				+ ', Time:' + Date()
				+ '.',
				'ElementItemHide', 9876, oObjNext, null,
				MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
		}
		return;
	}
	//
	if (debugTimer && debugTimerTransition) {
		MessageLog(eventCurr, DoNotUseDebug, DoUseSingeLine,
			TimerKeyText('Hide', oObjGroupIndex, oObjIndex)
			+ ', ' + oObjNext.id
			+ ', ' + ((moveIsOn || filterIsOn) ? 'Animated' : 'Unanimated')
			+ ', Time:' + Date()
			+ '.',
			'ElementItemHide', 9889, oObjNext, null,
			MessageElementComment, errorDoNotDisplayTag, errorDoNotAlert);
	}
	//
	if (moveIsOn || filterIsOn) {
		//
		// playDirection = playDirectionForward;
		var playDirection = playDirectionReverse;
		var iImageSize;
		if (IsImageLarge) { iImageSize = oObjImageSizeLarge; } else { iImageSize = oObjImageSizeSmall; }
		ElementPlayAgain(playDirection, IsImageLarge,
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
		TimerItemDeactivate(timerTypeMove, oObjNextGroupIndex, oObjNextIndex);
		TimerItemDeactivate(timerTypeTransition, oObjNextGroupIndex, oObjNextIndex);
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
// ElementItemIndexSetFromName
// ...................................... //
function ElementItemIndexSetFromName(oObjPassed) {
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
