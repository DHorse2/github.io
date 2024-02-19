// Section (Menu Image) Element Item function (s)
// ...................................... //
// SectionBlock Element Item Play function (s)
// Menu Image Play First
function ElementPlayFirst(playDirection, oObjCascade, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
	iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLockedPassed, IgnoreLockPassed) {
	script_state += "MdmAnimationElement:ElementPlayFirst:";
	filterPlayIndex = 1;
	HideImage = false; HideImageLarge = false;
	//
	ElementPlay(playDirection, oObjCascade, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
		iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLockedPassed, IgnoreLockPassed);
}
// ElementPlayNext
// ...................................... //
function ElementPlayNext(playDirection, oObjCascade, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
	iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLockedPassed, IgnoreLockPassed) {
	script_state += "MdmAnimationElement:ElementPlayNext:";
	filterPlayIndex = 1;
	HideImage = false; HideImageLarge = false;
	//
	ElementPlay(playDirection, oObjCascade, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
		iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLockedPassed, IgnoreLockPassed);
}
// ElementPlayAgain
// ...................................... //
function ElementPlayAgain(playDirection, oObjCascade, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
	iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLockedPassed, IgnoreLockPassed) {
	script_state += "MdmAnimationElement:ElementPlayAgain:";
	filterPlayIndex = 1;
	HideImage = false; HideImageLarge = false;
	//
	ElementPlay(playDirection, oObjCascade, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
		iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLockedPassed, IgnoreLockPassed);
}
// ElementPlay
function ElementPlay(playDirection, oObjCascade, IsImageLarge,
	oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
	iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLockedPassed, IgnoreLockPassed) {
	// if (oObjLocked) { return; } else { oObjLocked = true; }
	//
	// Origin and Destination
	var elLeftOrig = 0;
	var elTopOrig = 0;
	var elLeftDest = 0;
	var elTopDest = 0;
	//
	var elementIsRoot = false;
	var filterIdIndex = 1;
	//
	// Timers (and filter transitions) are attached to the Move
	try {
		var timerType = timerTypeMove;
		var timerGroup = oObjGroupIndex;
		var timerGroupItem = oObjGroupItemIndex;
		var timerItemKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
		var timerRootKey = timerRootId + 'Group' + timerGroup + (IsImageLarge ? 'Large' : '') + 'Type' + timerType;
		//
		script_state += "MdmAnimationElement:ElementPlay:" + timerItemKey;

		var oObjSize = {
			Top: 0,
			Left: 0,
			Width: 0,
			Height: 0
		};
		// var oObjTop = 0;
		// var oObjLeft = 0;
		// var oObjWidth = 0;
		// var oObjHeight = 0;

		filterPlayIndex = 1;
		var HideImage = false;
		var HideImageLarge = false;
		//
		if ((UseLog || UseDebug)
			&& (UseLogAnitmation || UseLogTimerTransition || UseLogTimerMove || UseLogTimerDetail)
		) {
			MessageLog(null, DoNotUseDebug, DoUseSingleLine,
				TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseEither, playDirection, 'Request')
				+ ', Play command requested'
				+ ', ' + ((playDirection == playDirectionForward) ? 'Forward' : 'Reverse')
				+ '.',
				'MdmAnimationElement:ElementPlay', 54, 0, null, null,
				errorIsComment, errorDoNotDisplayTag, UseAlert);
		}
		var PlayAbort = false;
		//
		// Bug for testing: var timerGroupItem = oObjNext.id;
		// Checking Transition
		if (!timerObj) { TimerCreateAll(); }

		var debugFunctionIsOn = false;
		if (UseLogTimerDetail
			|| (UseLogTimerTransition && timerType == timerTypeTransition)
			|| (UseLogTimerMove && timerType == timerTypeMove)) {
			debugFunctionIsOn = true; // || UseLogAnitmation
		}
		//
		var timerPlayKey;
		if (timerMethod == timerMethodGroup) {
			timerPlayKey = timerRootKey;
		} else if (timerMethod == timerMethodItem) {
			timerPlayKey = timerItemKey;
		}
		//
		var timerItemMoveKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerTypeMove;
		var timerItemTransitionKey = 'Group' + timerGroup + 'Item' + timerGroupItem + (IsImageLarge ? 'Large' : '') + 'Type' + timerTypeTransition;
		//
		if (timerObj[timerItemTransitionKey]) {
			if (timerObj[timerItemTransitionKey].timerIsRunning) {
				// Running
				if (playDirection != timerObj[timerItemTransitionKey].playDirection) {
					// playDirection is different (while running)
					if (debugFunctionIsOn || UseLogAnitmation) {
						MessageLog(null, DoNotUseDebug, DoUseSingleLine,
							TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Deactivate')
							+ ', Items:' + timerObj[timerItemTransitionKey].timerInstance
							+ ', Already running in opposite direction, deactivating'
							+ '.',
							'MdmAnimationElement:ElementPlay', 73, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
					// Item will be deactivate and the play command issued
					TimerItemDeactivate(timerTypeTransition, timerGroup, timerGroupItem, DoNotUseRoot);
				} else {
					// playDirection the same (while running)
					if (debugFunctionIsOn || UseLogAnitmation) {
						MessageLog(null, DoNotUseDebug, DoUseSingleLine,
							TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Duplicate DoStep')
							+ ', Items:' + timerObj[timerItemTransitionKey].timerInstance
							+ ', Already running, performing a Transition step instead'
							+ '.',
							'MdmAnimationElement:ElementPlay', 86, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
					// the next step will be performed and the new play command skipped
					if (timerMethod == timerMethodGroup) {
						TimerGroupDoStepFilter(timerTypeTransition, timerGroup, timerGroupItem);
					} else {
						TimerItemDoStepFilter(timerTypeTransition, timerGroup, timerGroupItem);
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
					if (timerObj[timerItemTransitionKey].elementIsDisplayed == elementIsDisplayed
						&& playDirection == timerObj[timerItemTransitionKey].playDirection
					) {
						// Already displayed
						if (debugFunctionIsOn || UseLogAnitmation) {
							MessageLog(null, DoNotUseDebug, DoUseSingleLine,
								TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
								+ ', Play Forward command NOT issued'
								+ ', Item is already displayed at destination'
								+ '.',
								'MdmAnimationElement:ElementPlay', 111, 0, null, null,
								errorIsComment, errorDoNotDisplayTag, UseAlert);
						}
						// skip issuing play command
						PlayAbort = true;
					}
				} else {
					// Reverse
					if (timerObj[timerItemTransitionKey].elementIsDisplayed == elementIsNotDisplayed
						&& playDirection == timerObj[timerItemTransitionKey].playDirection
					) {
						// Already hidden
						if (debugFunctionIsOn || UseLogAnitmation) {
							MessageLog(null, DoNotUseDebug, DoUseSingleLine,
								TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
								+ ', Play Reverse command NOT issued'
								+ ', Item should be already hidden'
								+ '.',
								'MdmAnimationElement:ElementPlay', 127, 0, null, null,
								errorIsComment, errorDoNotDisplayTag, UseAlert);
						}
						// skip issuing play command
						PlayAbort = true;
					} // end of not displayed
				} // end of transition playDirection is Forward or Reverse
			} // end of Transition is running or not
		} // end of Transition exists
		//
		// Transition now:
		//		reset (direction change),
		//		continued (via a step),
		//		or no action.
		//
		// Checking Move
		if (timerObj[timerItemMoveKey]) {
			if (timerObj[timerItemMoveKey].timerIsRunning) {
				// Timer is Running
				if (playDirection != timerObj[timerItemMoveKey].playDirection) {
					// playDirection is different (while running)
					if (debugFunctionIsOn || UseLogAnitmation) {
						MessageLog(null, DoNotUseDebug, DoUseSingleLine,
							TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Deactivate')
							+ ', Items:' + timerObj[timerItemMoveKey].timerInstance
							+ ', Already running, deactivating'
							+ '.',
							'MdmAnimationElement:ElementPlay', 155, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
					// Item will be deactivate and the play command issued
					TimerItemDeactivate(timerType, timerGroup, timerGroupItem, DoNotUseRoot);
				} else {
					// playDirection the same (while running)
					if (debugFunctionIsOn || UseLogAnitmation) {
						MessageLog(null, DoNotUseDebug, DoUseSingleLine,
							TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Duplicate DoStep')
							+ ', Items:' + timerObj[timerItemMoveKey].timerInstance
							+ ', Already running, performing a Move step instead'
							+ '.',
							'MdmAnimationElement:ElementPlay', 168, 0, null, null,
							errorIsComment, errorDoNotDisplayTag, UseAlert);
					}
					//
					if (timerMethod == timerMethodGroup) {
						TimerGroupDoStepMove(timerTypeMove, timerGroup, timerGroupItem);
					} else {
						TimerItemDoStepMove(timerTypeMove, timerGroup, timerGroupItem);
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
					if (timerObj[timerItemMoveKey].elementIsDisplayed == elementIsDisplayed) {
						if (debugFunctionIsOn || UseLogAnitmation) {
							MessageLog(null, DoNotUseDebug, DoUseSingleLine,
								TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
								+ ', Play Forward command NOT issued'
								+ ', Item is already displayed...',
								'MdmAnimationElement:ElementPlay', 192, 0, null, null,
								errorIsComment, errorDoNotDisplayTag, UseAlert);
						}
						//
						PlayAbort = true;// skip issuing play command
						//
					}
				} else {
					// Reverse
					if (timerObj[timerItemMoveKey].elementIsDisplayed == elementIsNotDisplayed) {
						if (debugFunctionIsOn || UseLogAnitmation) {
							MessageLog(null, DoNotUseDebug, DoUseSingleLine,
								TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Duplicate Ignored')
								+ ', Play Reverse command NOT issued'
								+ ', Item is already hidden...',
								'MdmAnimationElement:ElementPlay', 207, 0, null, null,
								errorIsComment, errorDoNotDisplayTag, UseAlert);
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
			// Do NOT issue a command
			return;
		} // skip issuing play command

		// ...................................... //
		// Show item
		// ...................................... //
		LastId = oObjNext.id

		// Image Size
		// ...................................... //
		var layoutBlockWidthDefault = iImageSize + (menuImageBorderWidth * 2);
		var elHeightDefault = (iImageSize * oObjImageSizeRatio) + (menuImageBorderWidth * 2);

		//
		// Position Note: This calculation is done in Item Show/Hide
		////////////////////////////////////////////////
		// Parent Postion
		////////////////////////////////////////////////
		// Get the offset width of that parent element
		////////////////////////////////////////////////
		// oObjSize = ElementPosCalculate(oObjNextParent);

		// // Position Control
		// ////////////////////////////////////////////////
		// // Save the Left position (of the first image in the group)
		// if (oObjGroupItemIndex < 2) {
		// 	menuImageRootPosition[oObjGroupIndex][indexTop][IsImageLarge] = oObjSize.Top;// oObjNextTop;// Top
		// 	menuImageRootPosition[oObjGroupIndex][indexLeft][IsImageLarge] = oObjSize.Left;// oObjNextLeft;// Left
		// 	menuImageRootPosition[oObjGroupIndex][indexWidth][IsImageLarge] = oObjSize.Width;// Right
		// 	menuImageRootPosition[oObjGroupIndex][indexHeight][IsImageLarge] = oObjSize.Height;// Bottom
		// 	//
		// 	// Store first Parent Postion in Root (note only first is stored at this time)
		// 	menuImagePositionLeft[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjSize.Left;
		// 	menuImagePositionTop[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjSize.Top;
		// 	menuImagePositionWidth[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjSize.Width;
		// 	menuImagePositionHeight[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjSize.Height;
		// 	//
		// }
		// // Store Parent Postion (note only first is stored at this time)
		// menuImagePositionLeft[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge] = oObjSize.Left;
		// menuImagePositionTop[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge] = oObjSize.Top;
		// menuImagePositionWidth[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge] = oObjSize.Width;
		// menuImagePositionHeight[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge] = oObjSize.Height;

		// // Cascade Control Note: also done in Show/Hide Item
		// // ...................................... //
		// // Cascase Row and Column
		// layoutCascadeRow = 1;
		// layoutCascadeColumn = 1;
		// layoutCascadeColumn = (oObjGroupItemIndex - 1) % oObjectRowMax[oObjGroupIndex] + 1;
		// layoutCascadeRow = Math.floor((oObjGroupItemIndex - 1) / oObjectRowMax[oObjGroupIndex]) + 1;
		// // (oObjGroupItemIndex - layoutCascadeColumn + oObjectRowMax[oObjGroupIndex]) / oObjectRowMax[oObjGroupIndex];

		// // ...................................... //
		// // Cascase Direction (Down or Up)
		// layoutCascadeDown = true;
		// layoutCascadeRight = true;
		// // a negative offset?
		// if (menuImageOffsetTop[oObjGroupIndex][indexGroup][IsImageLarge] < 0) {
		// 	layoutCascadeDown = false;
		// } else { layoutCascadeDown = true; }

		// // Animation
		// // ...................................... //
		// if (layoutIndex == layoutWindowed) {
		// 	layoutCascadeDown = true;
		// 	filterMotionDirectionSourceAngle = 292.5;
		// 	filterMotionDirection = 'rightdown';
		// }

		// POSITION Note: This calculation is done in Item Show/Hide
		// elLeftOrig, elTopOrig, elLeftDest, elTopDest,
		// elTopOrig = menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge][indexTop];
		// elLeftOrig = menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge][indexLeft];

		// var oObjGroupItemIndexTemp = oObjGroupItemIndex;
		// // if (!IsImageLarge) { oObjGroupItemIndexTemp = oObjRootIndex; }
		// //
		// elLeftOrig = menuImagePositionLeft[oObjGroupIndex][oObjGroupItemIndexTemp][IsImageLarge];
		// // if CascadeRight
		// if (!IsImageLarge) {
		// 	if (oObjGroupIndex < bodyMenuGroupUsedLeftCn) {
		// 		elLeftOrig += menuImagePositionWidth[oObjGroupIndex][oObjGroupItemIndexTemp][IsImageLarge];
		// 	}
		// } else {
		// 	if (oObjGroupIndex >= bodyMenuGroupUsedLeftCn) {
		// 		elLeftOrig += menuImagePositionWidth[oObjGroupIndex][oObjGroupItemIndexTemp][IsImageLarge];
		// 	}
		// }
		// elTopOrig = menuImagePositionTop[oObjGroupIndex][oObjGroupItemIndexTemp][IsSmall];


		// if (layoutCascadeDown && IsImageLarge) {
		// 		elTopOrig += menuImagePositionHeight[oObjGroupIndex] [oObjGroupItemIndexTemp] [IsImageLarge];
		// }
		//
		// todo is this correct? Yes but goes out of scope, set in Move Step
		elTopOrig = menuImagePositionOrgin[timerGroup][timerGroupItem][IsImageLarge][indexTop];
		elLeftOrig = menuImagePositionOrgin[timerGroup][timerGroupItem][IsImageLarge][indexLeft];
		//
		elTopDest = menuImagePositionDest[timerGroup][timerGroupItem][IsImageLarge][indexTop];
		elLeftDest = menuImagePositionDest[timerGroup][timerGroupItem][IsImageLarge][indexLeft];
		// A: Orgin or Dest stored? Depreciated
		// elLeftDest = menuImagePositionLeft[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge];
		// elTopDest = menuImagePositionTop[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge];
		// elLeftDest = oObjNext.style.posLeft;
		// elTopDest = oObjNext.style.posTop;
		//
		//

		if (debugFunctionIsOn || UseLogAnitmation) {
			MessageLog(null, DoNotUseDebug, DoUseSingleLine,
				TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirectionNotPassed, 'Item Position')
				+ ', Item orgin and destination set'
				+ ', Orig: ( ' + elTopOrig + ', ' + elLeftOrig + ' )'
				+ ', Dest: ( ' + elTopDest + ', ' + elLeftDest + ' )',
				'MdmAnimationElement:ElementPlay', 271, 0, null, null,
				errorIsComment, errorDoNotDisplayTag, UseAlert);
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
		var filterIdIndex = 1;
		//
		// FILTER
		filterCommand = '';
		// These are filter indexes not object
		startIndex = 1; endIndex = 18;
		if (filterIsOn || filterResizeIsOn) {
			if (debugFunctionIsOn) {
				MessageLog(null, DoNotUseDebug, DoUseSingleLine,
					TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirection, 'Get')
					+ ', Filter Get command issued'
					+ '.',
					'MdmAnimationElement:ElementPlay', 296, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, UseAlert);
			}
			//
			FilterGet(filterPlayAll, startIndex, endIndex,
				oObjNext, oObjNextImage,
				oObjGroupIndex, oObjGroupItemIndex,
				filterObjId, filterIdIndex);
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
			// if (filterObj[filterIdPassed].filterDoEnable) {
			if (debugFunctionIsOn) {
				MessageLog(null, DoNotUseDebug, DoUseSingleLine,
					TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirection, 'Enable')
					+ ', Filter Enable command issued'
					+ '.',
					'MdmAnimationElement:ElementPlay', 326, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, UseAlert);
			}
			//
			FilterEnable(filterPlayAll, startIndex, endIndex,
				oObjNext, oObjNextImage,
				oObjGroupIndex, oObjGroupItemIndex,
				filterObjId, filterIdIndex);
			// }
			//
			// // Each form below accesses the alpha filter of the object.
			// oObjNext.filters.item('DXImageTransform.Microsoft.Alpha').enabled = 0     // Named index
			//
			// if (filterObj[filterIdPassed].filterDoApply) {
			if (debugFunctionIsOn) {
				MessageLog(null, DoNotUseDebug, DoUseSingleLine,
					TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirection, 'Apply')
					+ ', Filter Apply command issued'
					+ '.',
					'MdmAnimationElement:ElementPlay', 345, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, UseAlert);
			}
			//
			FilterApply(filterPlayAll, startIndex, endIndex,
				oObjNext, oObjNextImage,
				oObjGroupIndex, oObjGroupItemIndex,
				filterObjId, filterIdIndex);
			// }
			//
			if (debugFunctionIsOn) {
				MessageLog(null, DoNotUseDebug, DoUseSingleLine,
					TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirection, 'Start')
					+ ', Filter Start command issued'
					+ '.',
					'MdmAnimationElement:ElementPlay', 360, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, UseAlert);
			}
			//
			TimerStartFilter(playDirection, timerMethod, TimerGroupDoStepFilter, TimerItemDoStepFilter,
				filterPlayAll, startIndex, endIndex,
				oObjNext, oObjNextImage,
				oObjGroupIndex, oObjGroupItemIndex,
				filterObjId, filterIdIndex);
			//
			// if (filterObj[filterIdPassed].filterDoPlay) {
			if (debugFunctionIsOn) {
				MessageLog(null, DoNotUseDebug, DoUseSingleLine,
					TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirection, 'Play')
					+ ', Filter Vendor Play command issued'
					+ '.',
					'MdmAnimationElement:ElementPlay', 376, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, UseAlert);
			}
			//
			FilterPlay(playDirection, filterPlayAll, startIndex, endIndex,
				oObjNext, oObjNextImage,
				oObjGroupIndex, oObjGroupItemIndex,
				filterObjId, filterIdIndex);
			// }
		}
		//
		// ...................................... //
		// Begin Movement from Origin to Position
		// Element Move
		if (moveIsOn) {
			//
			var tempSize;
			if (playDirection == playDirectionReverse) {
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
			if (debugFunctionIsOn) {
				MessageLog(null, DoNotUseDebug, DoUseSingleLine,
					TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirection, 'Start')
					+ ', Move Start command issued'
					+ '.',
					'MdmAnimationElement:ElementPlay', 415, 0, null, null,
					errorIsComment, errorDoNotDisplayTag, UseAlert);
			}
			//
			TimerStartMove(playDirection, timerMethod, TimerGroupDoStepMove, TimerItemDoStepMove,
				filterPlayAll, startIndex, endIndex,
				oObjNext, oObjNextImage,
				oObjGroupIndex, oObjGroupItemIndex,
				filterObjId, filterIdIndex);
			//
		} else if (filterIsOn || filterResizeIsOn) {
			// **if (browserAnimationIsIe && filterCommand.length) { eval(filterCommand);filterCommand = ''; }
			if (filterResizeIsOn && !elementIsDisplayed) {
				if (debugFunctionIsOn) {
					MessageLog(null, DoNotUseDebug, DoUseSingleLine,
						TimerTextLog(oObjNext, timerType, timerGroup, timerGroupItem, DoNotUseRoot, playDirection, 'Resize')
						+ ', Resize command issued'
						+ '.',
						'MdmAnimationElement:ElementPlay', 425, 0, null, null,
						errorIsComment, errorDoNotDisplayTag, UseAlert);
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
	} catch (bodyLayoutErr) {
		// Errors:
		// ...................................... //
		script_state = "Item Play error in " + script_state + "::MdmAnimationElement:ElementPlay";
		ErrorCaught(bodyLayoutErr, script_state, errorIsSevere);
	}
	//
}
// SectionBlock Element (Menu Image) Show / Hide function (s)
// ...................................... //
// Menu Show
// 		ElementGroupShowRange
//		ElementItemShowIndex
//		ElementGroupShow
//		ElementItemToggleId
//		ElementItemShow
// Menu Hide
// 		ElementGroupToggle
//		ElementItemHide
// ...................................... //
// SectionBlock Show Toggle function (s)
// ...................................... //
// ElementGroupToggle
// ...................................... //
function ElementGroupToggle(HideImage, HideImageLarge, startIndex, endIndex, IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLockedPassed, IgnoreLockPassed) {
	script_state = "MdmAnimationElement:ElementGroupToggle (" + oObjGroupIndex + ", " + oObjGroupItemIndex + ")";
	try {
		// Log event
		if ((UseLog || UseDebug)
			&& (UseLogAnitmation || UseLogTimerTransition || UseLogTimerMove || UseLogTimerDetail)
		) {
			MessageLog(null, DoNotUseDebug, DoUseSingleLine,
				'Range(' + startIndex + ', ' + endIndex + ') size:' + iImageSize + '. '
				+ 'Started: Toggle small,large: ' + HideImage + ', ' + HideImageLarge + '. '
				+ charNewLineTag,
				'MdmAnimationElement:ElementGroupToggle', 471, 0, null, null,
				errorIsComment, errorDoNotDisplayTag, UseAlert);
			//
		}
		if (loadJavaFirst) { ElementObjectCreate(); }
		if (!loadMenuImageDone) { menuImageGroupInitAll(); }
		//
		// Objects
		if (ElementGroupSetBusy()) {
			// Framework isn't busy, proceed.
			// Object
			var oObject =
				ElementItemGetAllFromIndex(IsImageLarge, oObjNextParentId, 0, oObjGroupIndex, oObjGroupItemIndex);
			if (oObject.oObjValid) {
				if (IsImageLarge) {
					oObjNext = oObject.oObjLarge;
					oObjNextImage = oObject.oObjImageLarge;
					oObjNextParent = oObject.oObj;
					oObjNextLarge = oObject.oObjLarge;
				} else {
					oObjNext = oObject.oObj;
					oObjNextImage = oObject.oObjImage;
					oObjNextParent = oObject.oObjParent;
					oObjNextLarge = oObject.oObjLarge;
				}
				var oObjNextId = oObjNext.id
				var oObjNextDisplay = oObjNext.style.display;
				// var oObjNextParentId = oObjNextParent.id;
				var oObjNextImageId = oObjNextImage.id;
				oObjLockedStackBusy = false;
				//
				if (oObjNextDisplay != 'block') {
					// oObjLockedPassed = true;
					// IgnoreLockPassed = false;
					ElementGroupShow(IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, endIndex, startIndex, oObjLockedPassed, IgnoreLockPassed);
					//
				} else {
					ElementGroupHide(IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, endIndex, startIndex, oObjLockedPassed, IgnoreLockPassed);
				}
			} else { ErrorOccured("MdmAnimationElement:ElementGroupToggle", 525, 0, null, oObjNext, oObj, "Invalid object or type", errorIsWarning, true, false); }
			// oObjLockedStackBusy = false;
		} else { ErrorOccured("MdmAnimationElement:ElementGroupToggle", 526, 0, null, null, null, "Animation framework busy", errorIsWarning, true, false); }
		//
	} catch (bodyLayoutErr) {
		// Errors:
		// ...................................... //
		script_state = "Group Toggle error in " + script_state + "::MdmAnimationElement:ElementGroupToggle";
		ErrorCaught(bodyLayoutErr, script_state, errorIsSevere);
	}
	oObjLockedStackBusy = false;
	//
}
// Menu Toggle Menu Show Item (Mouse Down function)
// ...................................... //
function ElementItemToggleId(IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, oObjGroupItemIndex, startIndex, oObjLockedPassed, IgnoreLockPassed) {
	script_state += "MdmAnimationElement:ElementItemToggleId (" + oObjGroupIndex + ", " + oObjGroupItemIndex + ")";
	if (loadJavaFirst) { ElementObjectCreate(); }
	if (!loadMenuImageDone) { menuImageGroupInitAll(); }
	//
	// Objects
	if (ElementGroupSetBusy()) {
		// Objects
		var oObject =
			ElementItemGetAllFromIndex(IsImageLarge, '', 0, oObjGroupIndex, oObjGroupItemIndex);
		// Objects
		if (oObject.oObjValid) {
			if (IsImageLarge) {
				oObjNext = oObject.oObjLarge;
				oObjNextImage = oObject.oObjImageLarge;
				oObjNextParent = oObject.oObj;
				oObjNextLarge = oObject.oObjLarge;
			} else {
				oObjNext = oObject.oObj;
				oObjNextImage = oObject.oObjImage;
				oObjNextParent = oObject.oObjParent;
				oObjNextLarge = oObject.oObjLarge;
			}
			if (oObjNext.style.display != 'block') {
				ElementItemShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
					iImageSize, oObjGroupIndex, oObjGroupItemIndex, menuImageLocked[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge], IgnoreLockPassed);
			} else {
				if (IsImageLarge) {
					// Is this wrong?
					ElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjGroupIndex, oObjGroupItemIndex, menuImageLocked[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge], IgnoreLockPassed);
				} else {
					ElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjGroupIndex, oObjGroupItemIndex, menuImageLocked[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge], IgnoreLockPassed);
					// ElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjGroupIndex, oObjGroupItemIndex, menuImageLocked[oObjGroupIndex] [oObjGroupItemIndex] [IsImageLarge], IgnoreLockPassed);
				}
			}
		} else { ErrorOccured("MdmAnimationElement:ElementItemToggleId", 558, 0, null, oObjNext, oObj, "Invalid object or type", errorIsWarning, true, false); }
		oObjLockedStackBusy = false;
	} else { ErrorOccured("MdmAnimationElement:ElementItemToggleId", 559, 0, null, oObjNext, oObj, "Animation framework busy", errorIsWarning, true, false); }
	//
}
// Hide Stack of items
function ElementGroupHide(IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, oObjGroupItemIndex, startIndex, oObjLockedPassed, IgnoreLockPassed) {
	script_state = "MdmAnimationElement:ElementGroupHide (" + oObjGroupIndex + ", " + oObjGroupItemIndex + ")";
	try {
		if (!ElementGroupSetBusy()) {
			ErrorOccured("MdmAnimationElement:ElementGroupHide", 660, 0, null, oObjNext, oObj, "Animation framework busy", errorIsWarning, true, false);
			return;
		}
		var startObjoObjIndex = startIndex;
		var endObjoObjIndex = oObjGroupItemIndex;
		var oObjIndexCurr = startObjoObjIndex;
		//
		while (oObjIndexCurr < 1 + endObjoObjIndex) {
			//
			if (IgnoreLockPassed || !menuImageLocked[oObjGroupIndex][oObjIndexCurr][IsImageLarge]) {
				menuImageLocked[oObjGroupIndex][oObjIndexCurr][IsImageLarge] = false;
				// Objects
				var oObject =
					ElementItemGetAllFromIndex(IsImageLarge, oObjNextParentId, 0, oObjGroupIndex, oObjIndex);
				// Objects
				if (oObject.oObjValid) {
					oObjIndex = oObjGroupItemIndex;// ElementItemIndexSetFromObj(oObjNext);
					if (IsImageLarge) {
						oObjNext = oObject.oObjLarge;
						oObjNextImage = oObject.oObjImageLarge;
						oObjNextParent = oObject.oObj;
						oObjNextLarge = oObject.oObjLarge;
					} else {
						oObjNext = oObject.oObj;
						oObjNextImage = oObject.oObjImage;
						oObjNextParent = oObject.oObjParent;
						oObjNextLarge = oObject.oObjLarge;
					}
					//
					if (oObjNext.style.display == 'block') {
						ElementItemHide(IsImageLarge,
							oObj, oObjImageLarge, oObjLarge, oObjLarge,
							oObjGroupIndex, oObjIndexCurr,
							oObjLockedPassed, IgnoreLockPassed);
					}
				} else { ErrorOccured("MdmAnimationElement:ElementGroupHide", 640, 0, Event, oObjNext, oObj, "Image is locked and can't be hidden", errorIsWarning, true, false); }
			} else { ErrorOccured("MdmAnimationElement:ElementGroupHide", 640, 0, Event, oObjNext, oObj, "No next image to hide", errorIsWarning, true, false); }
			oObjIndexCurr++;
		}
		oObjLockedStackBusy = false;
		//
	} catch (bodyLayoutErr) {
		// Errors:
		// ...................................... //
		script_state = "Group Hide error in " + script_state + "::MdmAnimationElement:ElementGroupHide";
		ErrorCaught(bodyLayoutErr, script_state, errorIsSevere);
	}
	//
}
function ElementGroupSetBusy() {
	// Check busy & duplicates
	if (oObjLockedStackBusy) {
		// Busy
		script_state += ":Busy:Cancelled:";
		// if ((UseLog || UseDebug)
		// 	&& (UseLogAnitmation
		// 		&& UseLogTimerDetail)
		// ) {
		// 	MessageLog(null, DoNotUseDebug, DoUseSingleLine,
		// 		'Animation framework is busy'
		// 		+ '!',
		// 		'MdmAnimationElement:ElementGroupSetBusy', 645, 0, null, null,
		// 		errorIsComment, errorDoNotDisplayTag, UseAlert);
		// }
		return false;
	} else {
		// Lock framework
		oObjLockedStackBusy = true;
	}
	return oObjLockedStackBusy;
}
// Menu Menu Show Item and all Previous (Mouse Over function)
// ...................................... //
function ElementGroupShow(IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, oObjGroupItemIndex, startIndex, oObjLockedPassed, IgnoreLockPassed) {
	script_state = "MdmAnimationElement:ElementGroupShow (" + oObjGroupIndex + ", " + oObjGroupItemIndex + ")";
	try {
		// Check busy & duplicates
		if (!ElementGroupSetBusy()) {
			ErrorOccured("MdmAnimationElement:ElementGroupShow", 660, 0, null, oObjNext, oObj, "Animation framework busy", errorIsWarning, true, false);
			return;
		}
		if ((UseLog || UseDebug)
			&& (UseLogAnitmation
				|| UseLogTimerTransition || UseLogTimerMove || UseLogTimerDetail)
		) {
			MessageLog(null, DoNotUseDebug, DoUseSingleLine,
				'Group Show Stack ' + oObjNextImageId.id
				+ ' (' + oObjGroupIndex + ', ' + oObjGroupItemIndex + ')'
				+ ' Size:' + iImageSize + ', ' + IsImageLarge + ' isLarge. '
				// + charNewLineTag
				,
				'MdmAnimationElement:ElementGroupShow', 569, 0, null, null,
				errorIsComment, errorDoNotDisplayTag, UseAlert);
			//
		}
		if (loadJavaFirst) { ElementObjectCreate(); }
		if (!loadMenuImageDone) { menuImageGroupInitAll(); }
		//
		// load and validate event and objects
		// set eventCurr, eventCurrRootObj
		ElementEventFromHtmlCheck(null, UseLogEvents);
		//
		// Don't process the event on the parent elements.
		if (eventCurrId == oObjNextParentId
			&& eventType == 'mouseover'
			// && !UseAnimation
		) {
			oObjLockedStackBusy = false;
			return;
		}

		// Handle and cascade event
		// ...................................... //
		if ((eventType == 'mousedown' || eventType == 'mouseover')
			&& UseAnimation
		) {
			var oObjNextParent;
			var oObjNextImage;
			var oObjNext;
			var oObjNextLarge;

			// process images in group above and including this location
			var startoObjIndex = 1;
			// var endoObjIndex = ElementItemIndexSetFromObj(oObjNext);
			var endoObjIndex = oObjGroupItemIndex;
			var oObjIndexCurr = startoObjIndex;

			while (oObjIndexCurr < 1 + endoObjIndex) {
				//
				if (!IgnoreLockPassed) {
					menuImageLocked[oObjGroupIndex][oObjIndexCurr][IsImageLarge] = oObjLockedPassed;
				}
				// Objects
				var oObject =
					ElementItemGetAllFromIndex(IsImageLarge, oObjNextParentId, 0, oObjGroupIndex, oObjIndexCurr);
				// Objects
				if (oObject.oObjValid) {
					if (IsImageLarge) {
						oObjNext = oObject.oObjLarge;
						oObjNextImage = oObject.oObjImageLarge;
						oObjNextParent = oObject.oObj;
						oObjNextLarge = oObject.oObjLarge;
					} else {
						oObjNext = oObject.oObj;
						oObjNextImage = oObject.oObjImage;
						oObjNextParent = oObject.oObjParent;
						oObjNextLarge = oObject.oObjLarge;
					}
					// //
					// imgZindex += 1;
					// oObjNext.style.zIndex = imgZindex;

					// Set Lock Test
					// if (oObjLockedPassed = true) { menuImageLocked[oObjGroupIndex] [oObjIndex] [IsImageLarge] = oObjLockedPassed; }
					if (!IgnoreLockPassed) { menuImageLocked[oObjGroupIndex][oObjIndexCurr][IsImageLarge] = oObjLockedPassed; }

					// Reveal Hidden Images
					ElementItemShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjIndexCurr, menuImageLocked[oObjGroupIndex][oObjIndexCurr][IsImageLarge], IgnoreLockPassed);

				} else { ErrorOccured("MdmAnimationElement:ElementGroupShow", 627, 0, Event, oObjNext, oObj, "No next image to show", errorIsWarning, true, false); }
				oObjIndexCurr++;
			}
			// done
		} else {
			// skipped due to mouse event settings
		}
		oObjLockedStackBusy = false;
		//
	} catch (bodyLayoutErr) {
		// Errors:
		// ...................................... //
		script_state = "Group Show error in " + script_state + "::MdmAnimationElement:ElementGroupShow";
		ErrorCaught(bodyLayoutErr, script_state, errorIsSevere);
	}
	//
}
// SectionBlock (Menu) Show function (s)
// ...................................... //
// Menu Menu Show Item (Mouse Over function)
// ...................................... //
function ElementItemShowId(IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLockedPassed, IgnoreLockPassed) {
	script_state += "MdmAnimationElement:ElementItemShowId (" + oObjGroupIndex + ", " + oObjGroupItemIndex + ")";
	// look for duplicate mouse over events (bubbling)
	if (!ElementEventFromHtmlCheck(null, UseLogEvents)) { return; }
	//
	// Objects
	if (ElementGroupSetBusy()) {
		oObjIndex = oObjGroupItemIndex;// ElementItemIndexSetFromObj(oObjNext);
		var oObject =
			ElementItemGetAllFromIndex(IsImageLarge, oObjNextParentId, 0, oObjGroupIndex, oObjIndex);
		if (oObject.oObjValid) {
			if (IsImageLarge) {
				oObjNext = oObject.oObjLarge;
				oObjNextImage = oObject.oObjImageLarge;
				oObjNextParent = oObject.oObj;
				oObjNextLarge = oObject.oObjLarge;
				oObjLockedPassed = menuImageLocked[oObjGroupIndex][oObjIndex][IsSmall];
			} else {
				oObjNext = oObject.oObj;
				oObjNextImage = oObject.oObjImage;
				oObjNextParent = oObject.oObjParent;
				oObjNextLarge = oObject.oObjLarge;
			}
			//
			ElementItemShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLockedPassed, IgnoreLockPassed);
			//
		} else { ErrorOccured("MdmAnimationElement:ElementItemShowId", 725, 0, null, oObjNext, oObj, "Invalid object or type", errorIsWarning, true, false); }
		oObjLockedStackBusy = false;
	} else { ErrorOccured("MdmAnimationElement:ElementItemShowId", 726, 0, null, oObjNext, oObj, "Animation framework busy", errorIsWarning, true, false); }
}
// Menu Menu Show Item (Mouse Over function)
var LastTouchedId;
// ...................................... //
function ElementItemShow(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupItemIndex, oObjLockedPassed, IgnoreLockPassed) {
	script_state = "MdmAnimationElement:ElementItemShow:" + oObjGroupIndex + ', ' + oObjGroupItemIndex + ":Start";
	// if (TimerStartMoveBusy(IsImageLarge, timerTypeMove, oObjGroupIndex, oObjGroupItemIndex, UseLogEvents)) { return; }
	//
	if (loadJavaFirst) { ElementObjectCreate(); }
	if (loadMenuImageFirst) { menuImageGroupInitAll(); }
	//
	var oObjNextLeft = 0;
	var imageLeftEdge = 0;
	var imageRightEdge = 0;
	var oObjContainerSize = 0;
	var layoutBodyLeftEdge = 0;
	var layoutBodyRightEdge = 0;

	var oObjSize = {
		Top: 0,
		Left: 0,
		Width: 0,
		Height: 0
	};

	// Cascase Row and Column
	var layoutCascadeRow = 1;
	var layoutCascadeColumn = 1;
	var layoutCascadeDown = true;
	var layoutCascadeRight = true;

	// Offset
	var oObjNextTop = 0;
	var oObjNextOffsetTop = 0;
	var oObjNextLeft = 0;
	var oObjNextOffsetLeft = 0

	try {
		script_state += ":Client";
		oObjIndex = oObjGroupItemIndex; // ElementItemIndexSetFromObj(oObjNext);
		LastTouchedId = oObjNext.id;
		//
		if ((UseLog || UseDebug)
			&& (UseLogAnitmation || UseLogTimerTransition || UseLogTimerMove || UseLogTimerDetail)
		) {
			MessageLog(null, DoNotUseDebug, DoUseSingleLine,
				'Group Show Item '
				+ TimerTextKey(oObjNext, 'Show', oObjGroupIndex, oObjGroupItemIndex)
				+ ', ' + oObjNext.id
				+ ', ' + ((moveIsOn || filterIsOn) ? 'Animated' : 'Unanimated')
				+ ', Time:' + Date()
				+ '.',
				'MdmAnimationElement:ElementItemShow', 694, 0, oObjNext, null,
				errorIsComment, errorDoNotDisplayTag, UseAlert);
		}
		//
		WindowClientWidth();
		//
		script_state += ":Calculate";
		if (oObjNext.style.display != 'block') { // should use isdisplayed todo
			// Show item
			LastId = oObjNext.id
			oObjNext.style.display = 'block';

			// Image Size
			// ...................................... //
			var layoutBlockWidthDefault = iImageSize + (menuImageBorderWidth * 2);
			var elHeightDefault = (iImageSize * oObjImageSizeRatio) + (menuImageBorderWidth * 2);

			// Cascade Control
			// ...................................... //
			// Cascase Row and Column
			layoutCascadeColumn = (oObjGroupItemIndex - 1) % oObjectRowMax[oObjGroupIndex] + 1;
			layoutCascadeRow = Math.floor((oObjGroupItemIndex - 1) / oObjectRowMax[oObjGroupIndex]) + 1;
			// (oObjGroupItemIndex - layoutCascadeColumn + oObjectRowMax[oObjGroupIndex]) / oObjectRowMax[oObjGroupIndex];

			// Cascase Direction (Down or Up)
			// ...................................... //
			if (menuImageOffsetTop[oObjGroupIndex][indexGroup][IsImageLarge] < 0) {
				layoutCascadeDown = false;
			} else { layoutCascadeDown = true; }

			// Cascade Direction (Right or Left)
			// ...................................... //
			if (menuImageOffsetLeft[oObjGroupIndex][indexGroup][IsImageLarge] < 0) {
				layoutCascadeRight = false;
			} else { layoutCascadeRight = true; }

			// Animation
			// ...................................... //
			if (layoutIndex == layoutWindowed) {
				layoutCascadeDown = true;
				filterMotionDirectionSourceAngle = 292.5;
				filterMotionDirection = 'rightdown';
			}

			// Menu Thumb Link Postioning (Top or Bottom)
			// ...................................... //
			script_state += ":Link:Above:" + layoutCascadeDown;
			// Show content (link) above or below image.
			// if (!IsImageLarge) {
			// Small (curently also Large) Image
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

			// Position Control
			// Orgin Parent Postion
			// ...................................... //
			// Get the offset width of that parent element
			oObjSize = ElementPosCalculate(oObjNextParent);
			// Save the Left position (of the first image parent in the small group)
			// todo large image root correct?
			if (layoutCascadeRight) { oObjSize.Left += oObjSize.Width; }
			if (layoutCascadeDown) { oObjSize.Top += oObjSize.Height; }

			if ((IsImageLarge == IsSmall && oObjGroupItemIndex == 1)) {
				// || (IsImageLarge == IsLarge && oObjSize.Valid)) {
				menuImagePositionOrgin[oObjGroupIndex][oObjRootIndex][IsSmall][indexTop] = oObjSize.Top;
				menuImagePositionOrgin[oObjGroupIndex][oObjRootIndex][IsSmall][indexLeft] = oObjSize.Left;
				menuImagePositionOrgin[oObjGroupIndex][oObjRootIndex][IsSmall][indexWidth] = oObjSize.Width;
				menuImagePositionOrgin[oObjGroupIndex][oObjRootIndex][IsSmall][indexHeight] = oObjSize.Height;

				menuImagePositionOrgin[oObjGroupIndex][oObjRootIndex][IsLarge][indexTop] = oObjSize.Top;
				menuImagePositionOrgin[oObjGroupIndex][oObjRootIndex][IsLarge][indexLeft] = oObjSize.Left;
				menuImagePositionOrgin[oObjGroupIndex][oObjRootIndex][IsLarge][indexWidth] = oObjSize.Width;
				menuImagePositionOrgin[oObjGroupIndex][oObjRootIndex][IsLarge][indexHeight] = oObjSize.Height;
				// Store Parent Postion (note only first is stored at this time)
				// menuImagePositionOrgin[oObjGroupIndex][oObjRootIndex][IsImageLarge][indexTop] = oObjSize.Top;
				// menuImagePositionOrgin[oObjGroupIndex][oObjRootIndex][IsImageLarge][indexLeft] = oObjSize.Left;
				// menuImagePositionOrgin[oObjGroupIndex][oObjRootIndex][IsImageLarge][indexWidth] = oObjSize.Width;
				// menuImagePositionOrgin[oObjGroupIndex][oObjRootIndex][IsImageLarge][indexHeight] = oObjSize.Height;
			}
			// Store position
			if (IsImageLarge == IsSmall) {
				menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsSmall][indexTop] = oObjSize.Top;
				menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsSmall][indexLeft] = oObjSize.Left;
				menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsSmall][indexWidth] = oObjSize.Width;
				menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsSmall][indexHeight] = oObjSize.Height;
			}

			// menuImagePositionLeft[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjSize.Left;
			// menuImagePositionTop[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjSize.Top;
			// menuImagePositionWidth[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjSize.Width;
			// menuImagePositionHeight[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjSize.Height;

			// if (layoutCascadeRight) {
			// 	menuImagePositionOrgin[oObjGroupIndex][oObjRootIndex][IsImageLarge][indexLeft] += oObjSize.Width;
			// 	menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge][indexLeft] += oObjSize.Width;
			// }
			// if (layoutCascadeDown) {
			// 	menuImagePositionOrgin[oObjGroupIndex][oObjRootIndex][IsImageLarge][indexTop] += oObjSize.Height;
			// 	menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge][indexTop] += oObjSize.Height;
			// }
			// oObjNext.style.left = oObjNextLeft + 'px';
			// oObjNext.style.top = oObjNextTop + 'px';

			script_state += ":Destination:";
			// Destination
			// ...................................... //
			// Top Position
			// ...................................... //
			// Offset
			// ...................................... //
			//
			script_state += ":OffsetTop:";
			// Group First (anchoring) Offset
			menuImageOffsetFirstTop = menuImageOffsetFirst[oObjGroupIndex][indexTop][IsImageLarge];
			menuImageOffsetFirstLeft = menuImageOffsetFirst[oObjGroupIndex][indexLeft][IsImageLarge];
			oObjNextOffsetTop = 0;
			oObjNextOffsetLeft = 0;
			// Only use Offset First with first row image
			// if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) != 1) { menuImageOffsetFirstLeft = 0; }
			// Windowed
			// if (layoutIndex == layoutWindowed) { menuImageOffsetFirstLeft = 20; }
			// if (IsImageLarge) {
			// 	oObjNextOffsetTop = menuImagePositionDest[oObjGroupIndex][oObjGroupItemIndex][IsSmall][indexTop];
			// 	// oObjNextOffsetTop = menuImageOffsetTop[oObjGroupIndex][indexGroup][IsImageLarge] + 0;
			// 	// oObjNextOffsetTop += menuImageOffsetTop[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge];
			// 	// if (!layoutCascadeDown) { oObjNextOffsetTop = -oObjNextOffsetTop; }
			// 	// //
			// 	// oObjNextTop = menuImagePositionTop[oObjGroupIndex][oObjGroupItemIndex][IsSmall];
			// 	// oObjNextTop += menuImagePositionWidth[oObjGroupIndex][oObjGroupItemIndex][IsSmall];
			// 	// // oObjNextTop += menuImagePositionHeight[oObjGroupIndex] [oObjGroupItemIndex] [IsSmall];
			// 	// oObjNextTop += oObjNextOffsetTop;

			// Origin
			if (IsImageLarge) {
				oObjNextTop = menuImagePositionDest[oObjGroupIndex][oObjGroupItemIndex][IsSmall][indexTop];
			} else {
				// Small Image
				oObjNextTop = menuImagePositionOrgin[oObjGroupIndex][1][IsSmall][indexTop];
			}
			// Offset for start position
			oObjNextOffsetTop = menuImageOffsetFirst[oObjGroupIndex][indexTop][IsImageLarge];
			// Group offset
			var NextOffsetTop = menuImageOffsetTop[oObjGroupIndex][indexGroup][IsImageLarge];
			// Item specific additional offset
			NextOffsetTop += menuImageOffsetTop[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge];
			// Row Calculation - Multiplied by row number
			NextOffsetTop = NextOffsetTop * (oObjGroupItemIndex - 1);
			// Total OffsetTop
			oObjNextOffsetTop += NextOffsetTop;

			script_state += ":Top:" + oObjNextTop + ":" + oObjNextOffsetTop;
			oObjNextTop += oObjNextOffsetTop;
			// ...................................... //
			// Set Top
			// View Option Adjustments
			// Windowed Layout Format
			// if (layoutIndex == layoutWindowed) {
			// 	oObjNextOffsetTop = 30;
			// 	// Set Top
			// 	oObjNextOffsetTop += bodyMainCenterTop.offsetHeight;
			// 	oObjNextTop = ((oObjGroupItemIndex - 1) * 50) + oObjNextOffsetTop;
			// 	if (IsImageLarge) { oObjNextTop += 100; }
			// } else {
			// 	//  Standard Side Menu Layout Format
			// 	// Set Top
			// 	if (oObjGroupItemIndex == 1) {
			// 		oObjNextTop = oObjSize.Top;
			// 	} else {
			// 		// oObjNextTop = oObjSize.Top;
			// 		// Top of previous image
			// 		oObjNextOffsetTop = menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex - 1][IsImageLarge][indexTop];
			// 		// oObjNextTop = menuImagePositionTop[oObjGroupIndex][oObjGroupItemIndex - 1][IsImageLarge];
			// 	}
			// 	oObjNextTop += oObjNextOffsetTop;
			// 	if (IsImageLarge) {
			// 		if (oObjNextOffsetTop > 50) {
			// 			oObjNextTop += oObjNextOffsetTop;
			// 		} else { oObjNextTop += 100; }
			// 	}
			// 	//
			// }
			// Style Top for menu image box
			// ...................................... //
			// oObjNext.style.top = oObjNextTop + 'px';

			// Left Position
			// ...................................... //
			// Offset
			// if (IsImageLarge) {
			// 	// Group Default Offset
			// 	oObjNextOffsetLeft = parseInt(menuImageOffsetLeft[oObjGroupIndex][indexGroup][IsImageLarge]);
			// 	// Item specific default
			// 	oObjNextOffsetLeft += parseInt(menuImageOffsetLeft[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge]);
			// 	// oObjNextOffsetLeft = menuImageOffsetLeftLarge[oObjGroupIndex] + 0;
			// 	// oObjNextOffsetLeft += menuImageOffsetLeftLarge[indexGroup];

			// 	if (!layoutCascadeRight) { oObjNextOffsetLeft = -oObjNextOffsetLeft; }
			// 	//
			// 	oObjNextLeft = parseInt(menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge][indexLeft]);
			// 	// oObjNextLeft = parseInt(menuImagePositionLeft[oObjGroupIndex][oObjGroupItemIndex][IsSmall]);
			// 	//
			// 	if (layoutCascadeRight) {
			// 		// on left side anchor is on the right side of parent.
			// 		// so this is Left + Width. On the right side it's Left.
			// 		oObjNextLeft += parseInt(menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsSmall][indexWidth]);
			// 		// oObjNextLeft += parseInt(menuImagePositionWidth[oObjGroupIndex][oObjGroupItemIndex][IsSmall]);
			// 	} else {
			// 		oObjNextLeft -= parseInt(layoutBlockWidthDefault);
			// 		// menuImagePositionWidth[oObjGroupIndex] [oObjGroupItemIndex] [IsImageLarge];
			// 	}
			// 	//
			// // 	oObjNextLeft += oObjNextOffsetLeft;
			// // } else {
			// // Small image
			// // Group Default Offset
			// oObjNextOffsetLeft = parseInt(menuImageOffsetLeft[oObjGroupIndex][indexGroup][IsImageLarge]);
			// // Item specific default
			// oObjNextOffsetLeft += parseInt(menuImageOffsetLeft[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge]);

			// // View First Image Adjustments
			// // ...................................... //
			// menuImageOffsetFirstLeft = parseInt(menuImageOffsetFirst[oObjGroupIndex][indexLeft]);
			// // Windowed Layout Format
			// if (parseInt(oObjGroupItemIndex % oObjectRowMax[oObjGroupIndex]) != 1) { menuImageOffsetFirstLeft = 0; }
			// // if (layoutIndex == layoutWindowed) {
			// // 	// oObjNextOffsetLeft = oObjNextOffsetLeft * 25 / Math.abs(oObjNextOffsetLeft);
			// // 	menuImageOffsetFirstLeft = 0;
			// // 	// oObjNextOffsetLeft = 0;// some hard coded setting?
			// // }
			// // if (layoutIndex == layoutWindowed) { oObjNextOffsetTop = Math.abs(oObjNextOffsetTop); }

			// // Left Position Calculation
			// // ...................................... //
			script_state += ":OffsetLeft:";
			// Only use Offset First with first row image
			// if ((oObjIndex % oObjectRowMax[oObjGroupIndex]) != 1) { menuImageOffsetFirstLeft = 0; }
			// Windowed
			if (layoutIndex == layoutWindowed) { menuImageOffsetFirstLeft = 20; }
			// Origin
			if (IsImageLarge) {
				oObjNextLeft = menuImagePositionDest[oObjGroupIndex][oObjGroupItemIndex][IsSmall][indexLeft];
			} else {
				// Small Image
				oObjNextLeft = menuImagePositionOrgin[oObjGroupIndex][1][IsImageLarge][indexLeft];
			}
			// Offset for start position
			oObjNextOffsetLeft = menuImageOffsetFirst[oObjGroupIndex][indexLeft][IsImageLarge];
			// Group offset
			var NextOffsetLeft = menuImageOffsetLeft[oObjGroupIndex][indexGroup][IsImageLarge];
			// Item specific additional offset
			NextOffsetLeft += menuImageOffsetLeft[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge];
			// Column Calculation
			NextOffsetLeft = NextOffsetLeft * (layoutCascadeColumn - 1);
			oObjNextOffsetLeft += NextOffsetLeft;
			// Set Left for menu image box
			// ...................................... //
			// oObjNext.style.left = oObjNextLeft + 'px';
			script_state += ":Left:" + oObjNextLeft + ":Offset:" + oObjNextOffsetLeft;
			oObjNextLeft += oObjNextOffsetLeft;

			// Destination Results
			oObjSize.Left = oObjNextLeft;
			oObjSize.Top = oObjNextTop;

			// Column Overflow Adjustment
			// ...................................... //
			// Adjust Left Position for Page Overflow
			// Cascade Maximum exceeded (Left)
			// Left Column (Left)
			// ...................................... //
			// Maximum Screen Width Exceeded (Left)
			// note this should be an adjustable value
			//
			if (IsImageLarge) {
				// start at top right edge of menus if present.
				// start at top left edge of main content.
				oObjContainerSize = ElementPosGet(UseScroll, UseBase, bodyMainCenterCenter, 0, 0);
			} else {
				// Small
				// start to right edge of parent (menu list item)
				oObjContainerSize = ElementPosGet(UseScroll, UseBase, bodyMainCenterCenter, 0, 0);
			}

			script_state += ":Positions";
			layoutBodyLeftEdge = oObjContainerSize.Left;
			layoutBodyRightEdge = oObjContainerSize.Left + oObjContainerSize.Width;
			// layoutBodyLeftEdge = ElementLeftMaxGet(DoNotUseScroll, UseBase, bodyMainCenterCenter);
			// layoutBodyRightEdge = layoutBodyLeftEdge + ElementWidthMaxGet(DoNotUseScroll, UseBase, bodyMainCenterCenter);
			// oObjNextLeft = ElementLeftMaxGet(UseScroll, UseBase, oObjNext);

			// Move Object away from Right edge
			var oObjNextLeftChanged = false;
			do {
				imageRightEdge = oObjNextLeft
					+ layoutBlockWidthDefault;
				//
				if (imageRightEdge + 10 > layoutBodyRightEdge) {
					oObjNextLeft -= 50; oObjNextLeftChanged = true;
				}
			} while (imageRightEdge + 10 > layoutBodyRightEdge);

			// Move Object away from Left edge
			do {
				imageLeftEdge = oObjNextLeft;
				//
				if (imageLeftEdge - 10 < layoutBodyLeftEdge) {
					oObjNextLeft += 50; oObjNextLeftChanged = true;
				}
			} while (imageLeftEdge - 10 < layoutBodyLeftEdge);

			// Set Object Style Left
			if (oObjNextLeftChanged) {
				oObjSize.Left = oObjNextLeft;
				oObjSize.Top = oObjNextTop;
				// oObjNext.style.left = oObjNextLeft + 'px';
			}

			script_state += ":Cascade:Angle";
			// Cascade Angle
			if (layoutCascadeRight) {
				// Left Column (Left)
				// ...................................... //
				if (layoutCascadeDown) {
					filterMotionDirectionSourceAngle = 315;
					filterMotionDirectionSourceAngle = Math.abs(oObjNextOffsetTop / oObjNextOffsetLeft * 45) + 270;
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
					filterMotionDirectionSourceAngle = Math.abs(oObjNextOffsetTop / oObjNextOffsetLeft * 45);
					filterMotionDirection = 'leftdown';
				} else {
					filterMotionDirectionSourceAngle = 135;
					filterMotionDirectionSourceAngle = Math.abs(oObjNextOffsetTop / oObjNextOffsetLeft * 45) + 90;
					filterMotionDirection = 'leftup';
				}
			}
			var oObjCascade = {
				layoutCascadeDown,
				layoutCascadeRight,
				filterMotionDirection,
				filterMotionDirectionSourceAngle
			}
			script_state += ":Direction:" + filterMotionDirection;

			// Store position
			// menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge][indexTop] = oObjSize.Top;
			// menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge][indexLeft] = oObjSize.Left;
			// menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge][indexWidth] = oObjSize.Width;
			// menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge][indexHeight] = oObjSize.Height;

			// menuImagePositionLeft[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjSize.Left;
			// menuImagePositionTop[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjSize.Top;
			// menuImagePositionWidth[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjSize.Width;
			// menuImagePositionHeight[oObjGroupIndex][oObjRootIndex][IsImageLarge] = oObjSize.Height;

			// Store Destination
			// ...................................... //
			// oObjSize = ElementPosGet(UseScroll, UseBase, oObjNext, layoutBlockWidthDefault, elHeightDefault);

			// Store position
			menuImagePositionDest[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge][indexTop] = oObjSize.Top;
			menuImagePositionDest[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge][indexLeft] = oObjSize.Left;
			menuImagePositionDest[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge][indexWidth] = oObjSize.Width;
			menuImagePositionDest[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge][indexHeight] = oObjSize.Height;

			// menuImagePositionLeft[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge] = oObjSize.Left;// parseInt(oObjNext.style.left);
			// menuImagePositionTop[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge] = oObjSize.Top;// parseInt(oObjNext.style.top);
			// menuImagePositionWidth[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge] = oObjSize.Width;// oObjNext.offsetWidth;
			// menuImagePositionHeight[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge] = oObjSize.Height;// oObjNext.offsetHeight;

			if (IsImageLarge == IsSmall) {
				// move to use destination
				menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsLarge][indexTop] = oObjSize.Top;
				menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsLarge][indexLeft] = oObjSize.Left;
				menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsLarge][indexWidth] = oObjSize.Width;
				menuImagePositionOrgin[oObjGroupIndex][oObjGroupItemIndex][IsLarge][indexHeight] = oObjSize.Height;
			}

			script_state += "(t" + oObjSize.Top + ",l" + oObjSize.Left + ",w" + oObjSize.Width + ",h" + oObjSize.Height + ")";

			// Filters
			// ...................................... //

			// Z Index
			// ...................................... //
			// imgZindex += 1;
			// oObjNext.style.zIndex = imgZindex + oObjGroupItemIndex;
			// Z Index
			// ...................................... //
			imgZindex += 1;
			if (IsImageLarge) {
				oObjNextLarge.style.zIndex = imgZindex + oObjGroupItemIndex;
				oObjNextLarge.style.display = 'block';
				oObjNextParent.style.zIndex = imgZindex + oObjGroupItemIndex + 1;
				if (oObjNextParent.style.display != 'block') { oObjNextParent.style.display = 'block'; }
			} else {
				oObjNext.style.zIndex = imgZindex + oObjGroupItemIndex;
				if (oObjNextLarge.style.display == 'block') { oObjNextLarge.style.zIndex = imgZindex + oObjGroupItemIndex; }
			}

			// Filter Apply Command
			// ...................................... //
			script_state += ":Play";
			if (moveIsOn || filterIsOn) {
				playDirection = playDirectionForward;
				// playDirection = playDirectionReverse;
				script_state += ":PlayAgain";
				ElementPlayAgain(playDirection, oObjCascade, IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, iImageSize, oObjGroupIndex, oObjGroupItemIndex, false, true);
				// oObjNext.filters[0].apply();
				// oObjNext.filters[1].apply();
				// oObjNext.filters.item('DXImageTransform.Microsoft.Wheel').apply();
				// oObjNext.filters.item('DXImageTransform.Microsoft.Spin').apply();
				// oObjNext.filters.item[1].apply();
				// oObjNext.filters.item(1).Apply();
				// Visibility
				// oObjNext.style.display = 'block';
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
			// ...................................... //
			// end of display 'none'
		} else {
			// ...................................... //
			// Z Index
			script_state = "MdmAnimationElement:ElementItemShow:" + oObjGroupIndex + ', ' + oObjGroupItemIndex + ":????";
			imgZindex += 1;
			if (IsImageLarge) {
				oObjNextLarge.style.zIndex = imgZindex + oObjGroupItemIndex;
				oObjNextLarge.style.display = 'block';
				oObjNextParent.style.zIndex = imgZindex + oObjGroupItemIndex + 1;
				if (oObjNextParent.style.display != 'block') { oObjNextParent.style.display = 'block'; }
			} else {
				oObjNext.style.zIndex = imgZindex + oObjGroupItemIndex;
				if (oObjNextLarge.style.display == 'block') { oObjNextLarge.style.zIndex = imgZindex + oObjGroupItemIndex; }
			}
		}
		// Dispaly Lock vs MouseOut Disappear
		// ...................................... //
		// if (oObjLockedPassed = true) { menuImageLocked[oObjGroupIndex] [oObjGroupItemIndex] [IsImageLarge] = oObjLockedPassed; }
		if (!IgnoreLockPassed) { menuImageLocked[oObjGroupIndex][oObjGroupItemIndex][IsImageLarge] = oObjLockedPassed; }
		//
	} catch (bodyLayoutErr) {
		// Errors:
		// ...................................... //
		script_state = "Item Show error in " + script_state + "::MdmAnimationElement:ElementItemShow";
		ErrorCaught(bodyLayoutErr, script_state, errorIsSevere);
	}
	//
	script_state = "MdmAnimationElement:ElementItemShow:" + oObjGroupIndex + ', ' + oObjGroupItemIndex + ":Done";
}
// SectionBlock (Menu) Hide function (s)
// ...................................... //
// ElementItemHideId
// ...................................... //
function ElementItemHideId(IsImageLarge, oObjNextParentId, oObjNextImageId, oObjNextId, oObjNextGroupIndex, oObjGroupItemIndex, oObjLockedPassed, IgnoreLockPassed) {
	script_state += "MdmAnimationElement:ElementItemHideId (" + oObjGroupIndex + ", " + oObjGroupItemIndex + ")";
	// load and validate event and objects
	if (!ElementEventFromHtmlCheck(null, UseLogEvents)) { return; }
	//
	// Objects
	if (ElementGroupSetBusy()) {
		var oObject =
			ElementItemGetAllFromIndex(IsImageLarge, oObjNextParentId, 0, oObjGroupIndex, oObjGroupItemIndex);
		if (oObject.oObjValid) {
			if (IsImageLarge) {
				oObjNext = oObject.oObjLarge;
				oObjNextImage = oObject.oObjImageLarge;
				oObjNextParent = oObject.oObj;
				oObjNextLarge = oObject.oObjLarge;
				oObjLockedPassed = menuImageLocked[oObjGroupIndex][oObjGroupItemIndex][IsSmall];
			} else {
				oObjNext = oObject.oObj;
				oObjNextImage = oObject.oObjImage;
				oObjNextParent = oObject.oObjParent;
				oObjNextLarge = oObject.oObjLarge;
			}
			//
			ElementItemHide(IsImageLarge,
				oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge,
				oObjNextGroupIndex, oObjGroupItemIndex, oObjLockedPassed, IgnoreLockPassed);
			//
		} else { ErrorOccured("MdmAnimationElement:ElementItemHideId", 1225, 0, null, oObjNext, oObj, "Invalid object or type", errorIsWarning, true, false); }
		oObjLockedStackBusy = false;
	} else { ErrorOccured("MdmAnimationElement:ElementItemHideId", 1226, 0, null, oObjNext, oObj, "Animation framework busy", errorIsWarning, true, false); }
}
// Menu ElementItemHide
// ...................................... //
function ElementItemHide(IsImageLarge, oObjNextParent, oObjNextImage, oObjNext, oObjNextLarge, oObjNextGroupIndex, oObjGroupItemIndex, oObjLockedPassed, IgnoreLockPassed) {
	script_state += "MdmAnimationElement:ElementItemHide (" + oObjGroupIndex + ", " + oObjGroupItemIndex + ")";
	try {
		// if (TimerStartMoveBusy(IsImageLarge, oObjNext.id + 'Move', oObjGroupIndex, oObjGroupItemIndex, UseLogEvents)) { return; }
		//
		if (loadJavaFirst) { ElementObjectCreate(); }
		if (!loadMenuImageDone) { menuImageGroupInitAll(); }
		var oObjNextIndex = oObjGroupItemIndex;// ElementItemIndexSetFromObj(oObjNextGroupIndex, oObjNext);
		// ElementItemGetAllFromIndex(IsImageLarge, oObjNextParent.id, 0, oObjNextGroupIndex, oObjNextIndex);
		// playDirection = playDirectionForward;
		var playDirection = playDirectionReverse;
		var iImageSize;
		//
		if (!IgnoreLockPassed && menuImageLocked[oObjNextGroupIndex][oObjNextIndex][IsImageLarge] == true) {
			if ((UseLog || UseDebug)
				&& (UseLogAnitmation || UseLogTimerTransition || UseLogTimerMove || UseLogTimerDetail)
			) {
				MessageLog(null, DoNotUseDebug, DoUseSingleLine,
					TimerTextKey(oObjNext, 'Hide', oObjGroupIndex, oObjGroupItemIndex)
					+ ', ' + oObjNext.id
					+ ', ' + ((playDirection == playDirectionForward) ? 'Forward' : 'Reverse')
					+ ', Do not hide locked item'
					+ ', Time:' + Date()
					+ '.',
					'MdmAnimationElement:ElementItemHide', 1127, 0, oObjNext, null,
					errorIsComment, errorDoNotDisplayTag, UseAlert);
			}
			return;
		}
		//
		if ((UseLog || UseDebug)
			&& (UseLogAnitmation || UseLogTimerTransition || UseLogTimerMove || UseLogTimerDetail)
		) {
			MessageLog(null, DoNotUseDebug, DoUseSingleLine,
				TimerTextKey(oObjNext, 'Hide', oObjGroupIndex, oObjGroupItemIndex)
				+ ', ' + oObjNext.id
				+ ', ' + ((moveIsOn || filterIsOn) ? 'Animated' : 'Unanimated')
				+ ', Time:' + Date()
				+ '.',
				'MdmAnimationElement:ElementItemHide', 1140, 0, oObjNext, null,
				errorIsComment, errorDoNotDisplayTag, UseAlert);
		}
		//
		if (moveIsOn || filterIsOn) {
			//
			if (IsImageLarge) { iImageSize = oObjImageSizeLarge; } else { iImageSize = oObjImageSizeSmall; }
			ElementPlayAgain(playDirection, null, IsImageLarge,
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
		if (!IgnoreLockPassed) { menuImageLocked[oObjNextGroupIndex][oObjNextIndex][IsImageLarge] = oObjLockedPassed; }
		//
		// oObj.width= 0;
		// oObj.height= 0;
		// oObj.style.display= 'none';
		// oObjImage.style.display= 'none';
		// oObjLarge.style.display= 'none';
		// oObjImageLarge.style.display= 'none';
		//
	} catch (bodyLayoutErr) {
		// Errors:
		// ...................................... //
		script_state = "Item Hide error in " + script_state + "::MdmAnimationElement:ElementItemHide";
		ErrorCaught(bodyLayoutErr, script_state, errorIsSevere);
	}
	//
}
// ElementItemIndexSetFromName
// ...................................... //
function ElementItemIndexSetFromName(oObjPassed) {
	script_state += "MdmAnimationElement:ElementItemIndexSetFromName";
	if (!oObjPassed) {
		oObjNotFound = false;
		oObjGroupIndex = 4; oObjGroupItemIndex = 1; // todo might be wrong
		return oObjGroupItemIndex;
	}
	//
	for (imgCn = 0; imgCn < 1 + imgMax; imgCn++) {
		if (oObjPassed.id == 'img' + imgCn || oObjPassed.name == 'img' + imgCn) { return imgCn; }
	}
	return 0;
}
// ..................................................................................... _//
script_state = "Mdm Standard Page Element functions loaded. (Group, Item, Play)";
if (debugLoadIsOn) { debugger; }
