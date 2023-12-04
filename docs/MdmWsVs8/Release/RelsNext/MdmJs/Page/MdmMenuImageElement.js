// SectionBlock Element Item Objects (Menu Images) Get & Index function (s)
// Object Set: Object, Image, Parent, Index (Image Large & Small)
// ElementItemGetAllFromIndex
// ...................................... //
function ElementItemGetAllFromIndex(oObjGroupCn, oObjCn) {
	if (loadFirstJava) { ElementObjectCreate(); } // 3) todo save indexes first?
	oObjIndex = oObjCn;
	oObjGroupIndex = oObjGroupCn;
	oObjValid = true;
	oObjId = new String();
	oObjParentId = new String();
	script_state += " Get(" + oObjGroupCn + ", " + oObjCn + ") ";
	// script_state += "MdmMenuImageElement:ElementItemGetAllFromIndex(" + oObjGroupCn + ", " + oObjCn + ")";

	// ...................................... //
	switch (oObjGroupIndex) {
		// Non Groups
		case 101: oObjValid = false; break;
		case 102: oObjValid = false; break;
		case 103: oObjValid = false; break;
		case 104: oObjValid = false; break;
		// ...................................... //
		// Group 1
		case 1:
			//
			switch (oObjCn) {
				case 0: break;
				case 1:
					oObjId = 'MdmImportTld'; oObjParentId = 'MenuContainerLeft1'; break;
				case 2:
					oObjId = 'MdmNetAppFrame'; oObjParentId = 'MdmImportTld'; break;
				case 3:
					oObjId = 'MdmWebUi'; oObjParentId = 'MdmNetAppFrame'; break;
				case 4:
					oObjId = 'MdmDbUtilClass'; oObjParentId = 'MdmWebUi'; break;
				case 5:
					oObjId = 'MdmOutlookSync'; oObjParentId = 'MdmDbUtilClass'; break;
				case 6:
					oObjId = 'MdmNetVirList'; oObjParentId = 'MdmOutlookSync'; break;
				case 7:
					oObjId = 'MdmSystemMgnt'; oObjParentId = 'MdmNetVirList'; break;
				case 8:
					oObjId = 'MdmWebDev'; oObjParentId = 'MdmSystemMgnt'; break;
				default:
					oObjValid = false;
					oObjId = 'MdmImportTld'; oObjParentId = 'MenuContainerLeft1'; break;
			}
			break;
		// ...................................... //
		// Group 2
		case 2:
			switch (oObjCn) {
				case 0: break;
				case 1:
					oObjId = 'MdmResume'; oObjParentId = 'MenuContainerLeft2'; break;
				case 2:
					oObjId = 'MdmRsmIt'; oObjParentId = 'MdmResume'; break;
				case 3:
					oObjId = 'MdmDghCarBio'; oObjParentId = 'MdmRsmIt'; break;
				case 4:
					oObjId = 'MdmDghAccom'; oObjParentId = 'MdmDghCarBio'; break;
				default:
					oObjValid = false;
					oObjId = 'MdmResume'; oObjParentId = 'MenuContainerLeft2'; break;
			}
			// ...................................... //
			break;
		// Group 3
		case 3: switch (oObjCn) {
			case 0: break;
			case 1:
				oObjId = 'MdmTechRsrch'; oObjParentId = 'MenuContainerLeft3'; break;
			case 2:
				oObjId = 'MdmCogSciProj'; oObjParentId = 'MdmTechRsrch'; break;
			case 3:
				oObjId = 'MdmMvvmProj'; oObjParentId = 'MdmCogSciProj'; break;
			default:
				oObjValid = false;
				oObjId = 'MdmTechRsrch'; oObjParentId = 'MenuContainerLeft3'; break;
		}
			break;
		// ...................................... //
		// Group 4
		case 4:
			switch (oObjCn) {
				case 0: break;
				case 1:
					oObjId = 'MdmImportTld'; oObjParentId = 'MenuContainerRight1'; break;
				case 2:
					oObjId = 'MdmKBil'; oObjParentId = 'MdmImportTld'; break;
				case 3:
					oObjId = 'MdmNetAppFrame'; oObjParentId = 'MdmKBil'; break;
				case 4:
					oObjId = 'MdmSrt'; oObjParentId = 'MdmNetAppFrame'; break;
				case 5:
					oObjId = 'MdmPickTr'; oObjParentId = 'MdmSrt'; break;
				case 6:
					oObjId = 'MdmOutlookSync'; oObjParentId = 'MdmPickTr'; break;
				case 7:
					oObjId = 'MdmPickOss'; oObjParentId = 'MdmOutlookSync'; break;
				case 8:
					oObjId = 'MdmBlank'; oObjParentId = 'MdmPickOss'; break;
				default:
					oObjValid = false;
					oObjId = 'MdmImportTldRight'; oObjParentId = 'MenuContainerRight1'; break;
			}
			break;
		default:
			oObjValid = false;
			oObjId = 'MdmImportTld'; oObjParentId = 'MenuContainerLeft1'; break;
	}
	// ...................................... //
	if (oObjValid) {
		oObj = ElementGetRef(oObj, oObjId, oObjId);
		if (!oObj) { oObjValid = false; } else {
			oObjNotFound = false;
			oObjParent = ElementGetRef(oObjParent, oObjParentId, oObjParentId);
			// oObj = ElementGetRef(oObj, oObjId + 'MenuLine', oObjId + 'MenuLine');
			// oObjParent = ElementGetRef(oObjParent, oObjParentId + 'MenuLine', oObjParentId + 'MenuLine');
			if (!oObjParent) {
				oObjParent = ElementGetRef(oObjParent, oObjParentId, oObjParentId);
			}
			if (!oObjParent) { oObjValid = false; }
			// oObjImage = ElementGetRef(oObjImage, oObjId, oObjId);
			oObjImage = ElementGetRef(oObjImage, oObjId + 'Image', oObjId + 'Image');
			oObjLarge = ElementGetRef(oObjLarge, oObjId + 'Large', oObjId + 'Large');
			oObjImageLarge = ElementGetRef(oObjImageLarge, oObjId + 'Large' + 'Image', oObjId + 'Large' + 'Image');
			oObjText = ElementItemGetDescription(oObjGroupCn, oObjCn);
		}
	}
	if (!oObjValid) {
		oObjNotFound = true;
		oObj = null;
		oObjImage = null;
		oObjParent = null;
		oObjLarge = null;
		oObjImageLarge = null;
		oObjText = "Object (" + oObjGroupCn + ", " + oObjCn + ") Not Found!";
		var errorLogLine = oObjText;
		ErrorOccured("MdmMenuImageElement:ElementItemGetAllFromIndex", 139, 0, null, null, null, errorLogLine, errorIsSevere, errorDoDisplayTag, DoUseAlert);
	}
	//
}
// ElementItemGetDescription
// ...................................... //
function ElementItemGetDescription(oObjGroupCn, oObjCn) {
	oObjIndex = oObjCn;
	oObjGroupIndex = oObjGroupCn;
	switch (oObjGroupIndex) {
		// ...................................... //
		// Non Groups
		case 101: return 'MenuContainerLeft1';
		case 102: return 'MenuContainerLeft2';
		case 103: return 'MenuContainerLeft3';
		case 104: return 'MenuContainerRight1';
		// ...................................... //
		// Group 1
		case 1: switch (oObjCn) {
			case 0: return 'MenuContainerLeft1';
			case 1: return 'C# Schema Converter';
			case 2: return 'C# Application' + charNewLineTag + 'Framework';
			case 3: return 'Web Templates';
			case 4: return 'File System';
			case 5: return 'Outlook Disk Sync';
			case 6: return 'Virtualized List';
			case 7: return 'Windows Best' + charNewLineTag + 'Practices';
			case 8: return 'Web Development';
			default:
				return 'C# Schema Converter';
		}
			return;
		// ...................................... //
		// Group 2
		case 2: switch (oObjCn) {
			case 0: return 'MenuContainerLeft2';
			case 1: return 'Career Home';
			case 2: return 'Resume';
			case 3: return 'Personal Bio';
			case 4: return 'Major Accomplishments';
			default:
				return 'Career Home';
		}
			return;
		// ...................................... //
		// Group 3
		case 3: switch (oObjCn) {
			case 0: return 'MenuContainerLeft3';
			case 1: return 'Applied Technology' + charNewLineTag + 'Research';
			case 2: return 'Cognitive Science' + charNewLineTag + 'Project';
			case 3: return 'C# MVVM / OSS Project';
			default:
				return 'Applied Technology' + charNewLineTag + 'Research';
		}
			return;
		// ...................................... //
		// Group 4
		case 4:
		default:
			switch (oObjCn) {
				case 0: return 'MenuContainerRight1';
				case 1: return 'C# Schema Converter';
				case 2: return 'K-Bil' + charNewLineTag + 'Subscriber Billing' + charNewLineTag + 'System';
				case 3: return 'C# Application' + charNewLineTag + 'Framework';
				case 4: return 'SRT Code' + charNewLineTag + 'Conversion Tool';
				case 5: return 'PickTR Adaptive' + charNewLineTag + 'Protocol';
				case 6: return 'Outlook Disk Sync';
				case 7: return 'Pick Application' + charNewLineTag + 'Framework';
				case 8: return 'Mdm Blank';
				default:
					return 'C# Schema Converter';
			}
			return;
	}
	//
}
// ElementItemGetName
// ...................................... //
function ElementItemGetName(oObjGroupCn, oObjCn) {
	oObjIndex = oObjCn;
	oObjGroupIndex = oObjGroupCn;
	// ...................................... //
	switch (oObjGroupIndex) {
		// ...................................... //
		// Non Groups
		case 101: return 'MenuContainerLeft1';
		case 102: return 'MenuContainerLeft2';
		case 103: return 'MenuContainerLeft3';
		case 104: return 'MenuContainerRight1';
		// ...................................... //
		// Group 1
		case 1: switch (oObjCn) {
			case 0: return 'MenuContainerLeft1';
			case 1: return 'MdmImportTld';
			case 2: return 'MdmNetAppFrame';
			case 3: return 'MdmWebUi';
			case 4: return 'MdmDbUtilClass';
			case 5: return 'MdmOutlookSync';
			case 6: return 'MdmNetVirList';
			case 7: return 'MdmSystemMgnt';
			case 8: return 'MdmWebDev';
			default:
				return 'MdmImportTld';
		}
			return;
		// ...................................... //
		// Group 2
		case 2: switch (oObjCn) {
			case 0: return 'MenuContainerLeft2';
			case 1: return 'MdmResume';
			case 2: return 'MdmRsmIt';
			case 3: return 'MdmDghCarBio';
			case 4: return 'MdmDghAccom';
			default:
				return 'MdmResume';
		}
			return;
		// ...................................... //
		// Group 3
		case 3: switch (oObjCn) {
			case 0: return 'MenuContainerLeft3';
			case 1: return 'MdmTechRsrch';
			case 2: return 'MdmCogSciProj';
			case 3: return 'MdmMvvmProj';
			default:
				return 'MdmTechRsrch';
		}
			return;
		// ...................................... //
		// Group 4
		case 4:
		default:
			switch (oObjCn) {
				case 0: return 'MenuContainerRight1';
				case 1: return 'MdmImportTld';
				case 2: return 'MdmKBil';
				case 3: return 'MdmNetAppFrame';
				case 4: return 'MdmSrt';
				case 5: return 'MdmPickTr';
				case 6: return 'MdmOutlookSync';
				case 7: return 'MdmPickOss';
				case 8: return 'MdmBlank';
				default:
					return 'MdmImportTld';
			}
			return;
	}
	//
}
// ElementItemIndexSetFromObj
// ...................................... //
function ElementItemIndexSetFromObj(oObjPassed) {
	IsImageLarge = IsSmall;
	oObjNotFound = false;
	// switch(oObjGroupIndex) {
	// ...................................... //
	// Non Groups
	// case 101:  elementIsRoot = true;return 101;
	// case 102:  elementIsRoot = true;return 102;
	// case 103:  elementIsRoot = true;return 103;
	// case 104:  elementIsRoot = true;return 104;
	// ...................................... //
	// Group 1
	// case 1:
	// Object Id
	if (!oObjPassed) {
		oObjNotFound = false;
		oObjGroupIndex = 4; oObjIndex = 1;
		return oObjIndex;
	}
	//
	switch (oObjPassed.id) {
		case 'MenuContainerLeft1': oObjGroupIndex = 1; oObjIndex = 0; elementIsRoot = true; break;
		case 'MdmImportTld': oObjGroupIndex = 1; oObjIndex = 1; break;
		case 'MdmNetAppFrame': oObjGroupIndex = 1; oObjIndex = 2; break;
		case 'MdmWebUi': oObjGroupIndex = 1; oObjIndex = 3; break;
		case 'MdmDbUtilClass': oObjGroupIndex = 1; oObjIndex = 4; break;
		case 'MdmOutlookSync': oObjGroupIndex = 1; oObjIndex = 5; break;
		case 'MdmNetVirList': oObjGroupIndex = 1; oObjIndex = 6; break;
		case 'MdmSystemMgnt': oObjGroupIndex = 1; oObjIndex = 7; break;
		case 'MdmWebDev': oObjGroupIndex = 1; oObjIndex = 8; break;
		//
		case 'MdmImportTldL': oObjGroupIndex = 1; oObjIndex = 1; IsImageLarge = IsLarge; break;
		case 'MdmNetAppFrameL': oObjGroupIndex = 1; oObjIndex = 2; IsImageLarge = IsLarge; break;
		case 'MdmWebUi': oObjGroupIndex = 1; oObjIndex = 3; break;
		case 'MdmDbUtilClassL': oObjGroupIndex = 1; oObjIndex = 4; IsImageLarge = IsLarge; break;
		case 'MdmOutlookSyncL': oObjGroupIndex = 1; oObjIndex = 5; IsImageLarge = IsLarge; break;
		case 'MdmNetVirListL': oObjGroupIndex = 1; oObjIndex = 6; IsImageLarge = IsLarge; break;
		case 'MdmSystemMgntL': oObjGroupIndex = 1; oObjIndex = 7; IsImageLarge = IsLarge; break;
		case 'MdmWebDevL': oObjGroupIndex = 1; oObjIndex = 8; IsImageLarge = IsLarge; break;
		// default:oObjGroupIndex = 1;oObject = 1;break;
		// }
		// return;
		// ...................................... //
		// Group 2
		// case 2: switch(oObjPassed.id){
		case 'MenuContainerLeft2': oObjGroupIndex = 2; oObjIndex = 0; elementIsRoot = true; break;
		case 'MdmResume': oObjGroupIndex = 2; oObjIndex = 1; break;
		case 'MdmRsmIt': oObjGroupIndex = 2; oObjIndex = 2; break;
		case 'MdmDghCarBio': oObjGroupIndex = 2; oObjIndex = 3; break;
		case 'MdmDghAccom': oObjGroupIndex = 2; oObjIndex = 4; break;
		//
		case 'MdmResumeL': oObjGroupIndex = 2; oObjIndex = 1; IsImageLarge = IsLarge; break;
		case 'MdmRsmItL': oObjGroupIndex = 2; oObjIndex = 2; IsImageLarge = IsLarge; break;
		case 'MdmDghCarBioL': oObjGroupIndex = 2; oObjIndex = 3; IsImageLarge = IsLarge; break;
		case 'MdmDghAccomL': oObjGroupIndex = 2; oObjIndex = 4; IsImageLarge = IsLarge; break;
		// default:oObjGroupIndex = 2;oObjIndex = 1;break;
		// }
		// return;
		// ...................................... //
		// Group 3
		// case 3: switch(oObjPassed.id){
		case 'MenuContainerLeft3': oObjGroupIndex = 3; oObjIndex = 0; elementIsRoot = true; break;
		case 'MdmTechRsrch': oObjGroupIndex = 3; oObjIndex = 1; break;
		case 'MdmCogSciProj': oObjGroupIndex = 3; oObjIndex = 2; break;
		case 'MdmMvvmProj': oObjGroupIndex = 3; oObjIndex = 3; break;
		// break;
		case 'MdmTechRsrchL': oObjGroupIndex = 3; oObjIndex = 1; IsImageLarge = IsLarge; break;
		case 'MdmCogSciProjL': oObjGroupIndex = 3; oObjIndex = 2; IsImageLarge = IsLarge; break;
		case 'MdmMvvmProjL': oObjGroupIndex = 3; oObjIndex = 3; IsImageLarge = IsLarge; break;
		// default:oObjGroupIndex = 3;oObjIndex = 1;break;
		// }
		// return;
		// ...................................... //
		// Group 4
		// case 4:
		// default:
		// switch(oObjPassed.id) {
		case 'MenuContainerRight1': oObjGroupIndex = 4; oObjIndex = 0; elementIsRoot = true; break;
		case 'MdmImportTldRight': oObjGroupIndex = 4; oObjIndex = 1; break;
		case 'MdmKBil': oObjGroupIndex = 4; oObjIndex = 2; break;
		case 'MdmNetAppFrame': oObjGroupIndex = 4; oObjIndex = 3; break;
		case 'MdmSrt': oObjGroupIndex = 4; oObjIndex = 4; break;
		case 'MdmPickTr': oObjGroupIndex = 4; oObjIndex = 5; break;
		case 'MdmOutlookSync': oObjGroupIndex = 4; oObjIndex = 6; break;
		case 'MdmPickOss': oObjGroupIndex = 4; oObjIndex = 7; break;
		case 'MdmBlank': oObjGroupIndex = 4; oObjIndex = 8; break;
		//
		case 'MdmImportTldRightL': oObjGroupIndex = 4; oObjIndex = 1; IsImageLarge = IsLarge; break;
		case 'MdmKBilL': oObjGroupIndex = 4; oObjIndex = 2; IsImageLarge = IsLarge; break;
		case 'MdmNetAppFrameL': oObjGroupIndex = 4; oObjIndex = 3; IsImageLarge = IsLarge; break;
		case 'MdmSrtL': oObjGroupIndex = 4; oObjIndex = 4; IsImageLarge = IsLarge; break;
		case 'MdmPickTrL': oObjGroupIndex = 4; oObjIndex = 5; IsImageLarge = IsLarge; break;
		case 'MdmOutlookSyncL': oObjGroupIndex = 4; oObjIndex = 6; IsImageLarge = IsLarge; break;
		case 'MdmPickOssL': oObjGroupIndex = 4; oObjIndex = 7; IsImageLarge = IsLarge; break;
		case 'MdmBlankL': oObjGroupIndex = 4; oObjIndex = 8; IsImageLarge = IsLarge; break;
		//
		default: oObjNotFound = true; oObjGroupIndex = 4; oObjIndex = 1; break;
	}
	return oObjIndex;
	// }
	//
}
script_state = "Mdm Website Main Custom Getters for the Images used";
if (debugLoadIsOn) { debugger; }
