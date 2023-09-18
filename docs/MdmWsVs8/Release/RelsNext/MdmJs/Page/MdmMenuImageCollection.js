function fnMenuObjectSetAll(oObjGroupCn, oObjCn) {
    oObjIndex = oObjCn;
    oObjGroupIndex = oObjGroupCn;
    ////////////////////////////////////////////////
    switch (oObjGroupIndex) {
        // Non Groups
        case 101: return MenuContainerLeft1;
        case 102: return MenuContainerLeft2;
        case 103: return MenuContainerLeft3;
        case 104: return MenuContainerRight1;
        ////////////////////////////////////////////////
        // Group 1
        case 1:
            //
            switch (oObjCn) {
                case 0:
                    return MenuContainerLeft1;
                case 1:
                    oObj = MdmImportTld;
                    oObjImage = MdmImportTldImage;
                    oObjParent = MenuContainerLeft1;
                    oObjLarge = MdmImportTldLarge;
                    oObjImageLarge = MdmImportTldLargeImage;
                    oObjText = "Database Schema";
                    return MdmImportTld;
                case 2:
                    oObj = MdmNetAppFrame;
                    oObjImage = MdmNetAppFrameImage;
                    oObjParent = MdmImportTld;
                    oObjLarge = MdmNetAppFramel12;
                    oObjImageLarge = MdmNetAppFramelImage;
                    oObjText = "Application Framework";
                    return MdmNetAppFrame;
                case 3:
                    oObj = MdmNetVirList;
                    oObjImage = MdmNetVirListImage;
                    oObjParent = MdmNetAppFrame;
                    oObjLarge = MdmNetVirListl;
                    oObjImageLarge = MdmNetVirListlImage;
                    oObjText = "Virtualized List";
                    return MdmNetVirList;
                case 4:
                    oObj = MdmDbUtilClass;// MdmDbUtilClass
                    oObjImage = MdmDbUtilClassImage;
                    oObjParent = MdmNetVirList;
                    oObjLarge = MdmDbUtilClassl;
                    oObjImageLarge = MdmDbUtilClasslImage;
                    oObjText = "File System";
                    return MdmDbUtilClass;
                case 5:
                    oObj = MdmOutlookSync;
                    oObjImage = MdmOutlookSyncImage;
                    oObjParent = MdmDbUtilClass;
                    oObjLarge = MdmOutlookSyncl;
                    oObjImageLarge = MdmOutlookSynclImage;
                    oObjText = "Outlook Folder Integration";
                    return MdmOutlookSync;
                case 6:
                    oObj = MdmSystemMgnt;
                    oObjImage = MdmSystemMgntImage;
                    oObjParent = MdmOutlookSync;
                    oObjLarge = MdmSystemMgntl;
                    oObjImageLarge = MdmSystemMgntlImage;
                    oObjText = "Windows Best Practices";
                    return MdmSystemMgnt;
                case 7:
                    oObj = MdmWebDev;
                    oObjImage = MdmWebDevImage;
                    oObjParent = MdmSystemMgnt;
                    oObjLarge = MdmWebDevl;
                    oObjImageLarge = MdmWebDevlImage;
                    oObjText = "Web Development";
                    return MdmWebDev;
                default:
                    oObj = MdmImportTld;
                    oObjImage = MdmImportTldImage;
                    oObjParent = MenuContainerLeft1;
                    oObjLarge = MdmImportTldLarge;
                    oObjImageLarge = MdmImportTldLargeImage;
                    oObjText = "Database Schema";
                    return MdmImportTld;
            }
            return;
        ////////////////////////////////////////////////
        // Group 2
        case 2:
            switch (oObjCn) {
                case 0: return MenuContainerLeft2;
                case 1:
                    oObj = MdmResume;
                    oObjImage = MdmResumeImage;
                    oObjParent = MenuContainerLeft2;
                    oObjLarge = MdmResumel;
                    oObjImageLarge = MdmResumelImage;
                    oObjText = "Career Home";
                    return MdmResume;
                case 2:
                    oObj = MdmRsmIt;
                    oObjImage = MdmRsmItImage;
                    oObjParent = MdmResume;
                    oObjLarge = MdmRsmItl;
                    oObjImageLarge = MdmRsmItlImage;
                    oObjText = "Resume";
                    return MdmRsmIt;
                case 3:
                    oObj = MdmDghCarBio;
                    oObjImage = MdmDghCarBioImage;
                    oObjParent = MdmRsmIt;
                    oObjLarge = MdmDghCarBiol;
                    oObjImageLarge = MdmDghCarBiolImage;
                    oObjText = "Personal Bio";
                    return MdmDghCarBio;
                case 4:
                    oObj = MdmDghAccom;
                    oObjImage = MdmDghAccomImage;
                    oObjParent = MdmDghCarBio;
                    oObjLarge = MdmDghAccoml;
                    oObjImageLarge = MdmDghAccomlImage;
                    oObjText = "Major Accomplishments";
                    return MdmDghAccom;
                default:
                    oObj = MdmResume;
                    oObjImage = MdmResumeImage;
                    oObjParent = MenuContainerLeft2;
                    oObjLarge = MdmResumel;
                    oObjImageLarge = MdmResumelImage;
                    oObjText = "Career Home";
                    return MdmResume;
            }
            ////////////////////////////////////////////////
            return;
        // Group 3
        case 3: switch (oObjCn) {
            case 0: return MenuContainerLeft3;
            case 1:
                oObj = MdmTechRsrch;
                oObjImage = MdmTechRsrchImage;
                oObjParent = MenuContainerLeft3;
                oObjLarge = MdmTechRsrchl;
                oObjImageLarge = MdmTechRsrchlImage;
                oObjText = "Applied Technology Research";
                return MdmTechRsrch;
            case 2:
                oObj = MdmCogSciProj;
                oObjImage = MdmCogSciProjImage;
                oObjParent = MdmTechRsrch;
                oObjLarge = MdmCogSciProjl;
                oObjImageLarge = MdmCogSciProjlImage;
                oObjText = "Cognitive Science Project";
                return MdmCogSciProj;
            case 3:
                oObj = MdmMvvmProj;
                oObjImage = MdmMvvmProjImage;
                oObjParent = MdmCogSciProj;
                oObjLarge = MdmMvvmProjl;
                oObjImageLarge = MdmMvvmProjlImage;
                oObjText = "C# MVVM / OSS Project";
                return MdmMvvmProj;
            default:
                oObj = MdmTechRsrch;
                oObjImage = MdmTechRsrchImage;
                oObjParent = MenuContainerLeft3;
                oObjLarge = MdmTechRsrchl;
                oObjImageLarge = MdmTechRsrchlImage;
                oObjText = "Applied Technology Research";
                return MdmTechRsrch;
        }
            return;
        ////////////////////////////////////////////////
        // Group 4
        case 4:
        default:
            switch (oObjCn) {
                case 0: return MenuContainerRight1;
                case 1:
                    oObj = MdmImportTldRIght;
                    oObjImage = MdmImportTldImage;
                    oObjParent = MenuContainerRight1;
                    oObjLarge = MdmImportTldLarge;
                    oObjImageLarge = MdmImportTldLargeImage;
                    oObjText = "C# Schema Converter";
                    return MdmImportTldRIght;
                case 2:
                    oObj = MdmKBil;
                    oObjImage = MdmKBilImage;
                    oObjParent = MdmImportTldRIght;
                    oObjLarge = MdmKBill;
                    oObjImageLarge = MdmKBillImage;
                    oObjText = "K-Bil<br>Subscriber Billing<br>System";
                    return MdmKBil;
                case 3:
                    oObj = MdmNetAppFrame;
                    oObjImage = MdmNetAppFrameImage;
                    oObjParent = MdmKBil;
                    oObjLarge = MdmNetAppFramel;
                    oObjImageLarge = MdmNetAppFramelImage;
                    oObjText = "C# Application Framework";
                    return MdmNetAppFrame;
                case 4:
                    oObj = MdmSrt;
                    oObjImage = MdmSrtImage;
                    oObjParent = MdmNetAppFrame;
                    oObjLarge = MdmSrtl;
                    oObjImageLarge = MdmSrtlImage;
                    oObjText = "SRT Code Conversion Tool";
                    return MdmSrt;
                case 5:
                    oObj = MdmPickTr;
                    oObjImage = MdmPickTrImage;
                    oObjParent = MdmSrt;
                    oObjLarge = MdmPickTrl;
                    oObjImageLarge = MdmPickTrlImage;
                    oObjText = "PickTR Adaptive Protocol";
                    return MdmPickTr;
                case 6:
                    oObj = MdmOutlookSync;
                    oObjImage = MdmOutlookSyncImage;
                    oObjParent = MdmPickTr;
                    oObjLarge = MdmOutlookSyncl;
                    oObjImageLarge = MdmOutlookSynclImage;
                    oObjText = "Outlook Disk Sync";
                    return MdmOutlookSync;
                case 7:
                    oObj = MdmPickOss;
                    oObjImage = MdmPickOssImage;
                    oObjParent = MdmOutlookSync;
                    oObjLarge = MdmPickOssl;
                    oObjImageLarge = MdmPickOsslImage;
                    oObjText = "Pick Application Framework";
                    return MdmPickOss;
                case 8:
                    oObj = MdmBlank;
                    oObjImage = MdmBlankImage;
                    oObjParent = MdmPickOss;
                    oObjLarge = MdmBlankl;
                    oObjImageLarge = MdmBlanklImage;
                    oObjText = "Mdm Blank";
                    return MdmBlank;
                default:
                    oObj = MdmImportTldRIght;
                    oObjImage = MdmImportTldImage;
                    oObjParent = MenuContainerRight1;
                    oObjLarge = MdmImportTldLarge;
                    oObjImageLarge = MdmImportTldLargeImage;
                    oObjText = "C# Schema Converter";
                    return MdmImportTldRIght;
            }
            return;
    }
    //
}
//
// ------------------------------------------------------------------------------------- _//
// function fnMenuObjectTextSet(oObjGroupCn, oObjCn)
////////////////////////////////////////////////
function fnMenuObjectTextSet(oObjGroupCn, oObjCn) {
    oObjIndex = oObjCn;
    oObjGroupIndex = oObjGroupCn;
    switch (oObjGroupIndex) {
        ////////////////////////////////////////////////
        // Non Groups
        case 101: return "MenuContainerLeft1";
        case 102: return "MenuContainerLeft2";
        case 103: return "MenuContainerLeft3";
        case 104: return "MenuContainerRight1";
        ////////////////////////////////////////////////
        // Group 1
        case 1: switch (oObjCn) {
            case 0: return "MenuContainerLeft1";
            case 1: return "C# Schema Converter";
            case 2: return "C# Application<br>Framework";
            case 3: return "Virtualized List";
            case 4: return "File System";
            case 5: return "Outlook Disk Sync";
            case 6: return "Windows Best<br>Practices";
            case 7: return "Web Development";
            default:
                return "C# Schema Converter";
        }
            return;
        ////////////////////////////////////////////////
        // Group 2
        case 2: switch (oObjCn) {
            case 0: return "MenuContainerLeft2";
            case 1: return "Career Home";
            case 2: return "Resume";
            case 3: return "Personal Bio";
            case 4: return "Major Accomplishments";
            default: return "Career Home";
        }
            return;
        ////////////////////////////////////////////////
        // Group 3
        case 3: switch (oObjCn) {
            case 0: return "MenuContainerLeft3";
            case 1: return "Applied Technology<br>Research";
            case 2: return "Cognitive Science<br>Project";
            case 3: return "C# MVVM / OSS Project";
            default: return "Applied Technology<br>Research";
        }
            return;
        ////////////////////////////////////////////////
        // Group 4
        case 4:
        default:
            switch (oObjCn) {
                case 0: return "MenuContainerRight1";
                case 1: return "C# Schema Converter";
                case 2: return "K-Bil<br>Subscriber Billing<br>System";
                case 3: return "C# Application<br>Framework";
                case 4: return "SRT Code<br>Conversion Tool";
                case 5: return "PickTR Adaptive<br>Protocol";
                case 6: return "Outlook Disk Sync";
                case 7: return "Pick Application<br>Framework";
                case 8: return "Mdm Blank";
                default: return "C# Schema Converter";
            }
            return;
    }
    //
}
//
// ------------------------------------------------------------------------------------- _//
// function fnMenuObjectNameSet(oObjGroupCn, oObjCn)
////////////////////////////////////////////////
function fnMenuObjectNameSet(oObjGroupCn, oObjCn) {
    oObjIndex = oObjCn;
    oObjGroupIndex = oObjGroupCn;
    ////////////////////////////////////////////////
    switch (oObjGroupIndex) {
        ////////////////////////////////////////////////
        // Non Groups
        case 101: return "MenuContainerLeft1";
        case 102: return "MenuContainerLeft2";
        case 103: return "MenuContainerLeft3";
        case 104: return "MenuContainerRight1";
        ////////////////////////////////////////////////
        // Group 1
        case 1: switch (oObjCn) {
            case 0: return "MenuContainerLeft1";
            case 1: return "MdmImportTld";
            case 2: return "MdmNetAppFrame";
            case 3: return "MdmNetVirList";
            case 4: return "MdmDbUtilClass";
            case 5: return "MdmOutlookSync";
            case 6: return "MdmSystemMgnt";
            case 7: return "MdmWebDev";
            default: return "MdmImportTld";
        }
            return;
        ////////////////////////////////////////////////
        // Group 2
        case 2: switch (oObjCn) {
            case 0: return "MenuContainerLeft2";
            case 1: return "MdmResume";
            case 2: return "MdmRsmIt";
            case 3: return "MdmDghCarBio";
            case 4: return "MdmDghAccom";
            default: return "MdmResume";
        }
            return;
        ////////////////////////////////////////////////
        // Group 3
        case 3: switch (oObjCn) {
            case 0: return "MenuContainerLeft3";
            case 1: return "MdmTechRsrch";
            case 2: return "MdmCogSciProj";
            case 3: return "MdmMvvmProj";
            default: return "MdmTechRsrch";
        }
            return;
        ////////////////////////////////////////////////
        // Group 4
        case 4:
        default:
            switch (oObjCn) {
                case 0: return "MenuContainerRight1";
                case 1: return "MdmImportTld";
                case 2: return "MdmKBil";
                case 3: return "MdmNetAppFrame";
                case 4: return "MdmSrt";
                case 5: return "MdmPickTr";
                case 6: return "MdmOutlookSync";
                case 7: return "MdmPickOss";
                case 8: return "MdmBlank";
                default: return "MdmImportTld";
            }
            return;
    }
    //
}
//
// ------------------------------------------------------------------------------------- _//
// fnMenuIndexSet
////////////////////////////////////////////////
function fnMenuIndexSet(oObjGroupIndex, oObjPassed) {
    switch (oObjGroupIndex) {
        ////////////////////////////////////////////////
        // Non Groups
        case 101: return 101;
        case 102: return 102;
        case 103: return 103;
        case 104: return 104;
        ////////////////////////////////////////////////
        // Group 1
        case 1: switch (oObjPassed) {
            case MenuContainerLeft1: return 0;
            case MdmImportTld: return 1;
            case MdmNetAppFrame: return 2;
            case MdmNetVirList: return 3;
            case MdmDbUtilClass: return 4;
            case MdmOutlookSync: return 5;
            case MdmSystemMgnt: return 6;
            case MdmWebDev: return 7;
            //
            case MdmImportTldLarge: return 1;
            case MdmNetAppFramel12: return 2;
            case MdmNetVirListl: return 3;
            case MdmDbUtilClassl: return 4;
            case MdmOutlookSyncl: return 5;
            case MdmSystemMgntl: return 6;
            case MdmWebDevl: return 7;
            default: return 1;
        }
            return;
        ////////////////////////////////////////////////
        // Group 2
        case 2: switch (oObjPassed) {
            case MenuContainerLeft2: return 0;
            case MdmResume: return 1;
            case MdmRsmIt: return 2;
            case MdmDghCarBio: return 3;
            case MdmDghAccom: return 4;
            //
            case MdmResumel: return 1;
            case MdmRsmItl: return 2;
            case MdmDghCarBiol: return 3;
            case MdmDghAccoml: return 4;
            default: return 1;
        }
            return;
        ////////////////////////////////////////////////
        // Group 3
        case 3: switch (oObjPassed) {
            case MenuContainerLeft3: return 0;
            case MdmTechRsrch: return 1;
            case MdmCogSciProj: return 2;
            case MdmMvvmProj: return 3;
            //
            case MdmTechRsrchl: return 1;
            case MdmCogSciProjl: return 2;
            case MdmMvvmProjl: return 3;
            default: return 1;
        }
            return;
        ////////////////////////////////////////////////
        // Group 4
        case 4:
        default:
            switch (oObjPassed) {
                case MenuContainerRight1: return 0;
                case MdmImportTldRIght: return 1;
                case MdmKBil: return 2;
                case MdmNetAppFrame: return 3;
                case MdmSrt: return 4;
                case MdmPickTr: return 5;
                case MdmOutlookSync: return 6;
                case MdmPickOss: return 7;
                case MdmBlank: return 8;
                //
                case MdmImportTldLarge: return 1;
                case MdmKBill: return 2;
                case MdmNetAppFramel: return 3;
                case MdmSrtl: return 4;
                case MdmPickTrl: return 5;
                case MdmOutlookSyncl: return 6;
                case MdmPickOssl: return 7;
                case MdmBlankl: return 8;
                default: return 1;
            }
            return;
    }
    //
}
//
// ------------------------------------------------------------------------------------- _//
// fnMenuIndexSetByName
////////////////////////////////////////////////
function fnMenuIndexSetByName(oObjPassed) {
    for (imgCn = 0; imgCn < 1 + imgMax; imgCn++) {
        //    alert(imgCn + "--" + imgUsedCn + "--" + imgMax);
        //    alert(oObjPassed.name);
        if (oObjPassed.name = "img" + imgCn) {
            //    alert("Object No: " + imgCn);
            return imgCn;
        }
    }
    //alert("Object No: " + 0);
    return 0;
}