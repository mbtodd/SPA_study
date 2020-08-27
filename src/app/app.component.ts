import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
export interface ISPAData {
  caseId: number;
  caseName: string;
  AssignedToDisplayName: string;
  WorkflowDisplayName: string;
  HighestWorkFlowHorizontalAttained: string;
  OpenedOn: string;
  caseCategoryName: string;
  WorkflowRouteName: string;
  DaysOpen: number;
  CompletedOn: null;
  DaysAssigned: number;
  Score: number;
  FollowUpFlag: number;
  FollowUpComment: null;
  SystemNote: string;
  RouteAction: string;
  CaseTabGroupName: string;
  isLocked: boolean;
  linkedCaseId: number;
  daysInStatus: null;
  LastAnalyzedBy: null;
  ModifiedByDisplayName: string;
  CaseNumber: string;
  AssignedOn: string;
  CreatedOn: string;
  WorkflowPositionID: number;
  AssignedToUserID: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];

const SPA_DATA: ISPAData[] = [
  {
    caseId: 179309,
    // tslint:disable-next-line: max-line-length
    caseName: 'Intumommower International Company', AssignedToDisplayName: 'Dykes, James',
    WorkflowDisplayName: 'Alert Review', HighestWorkFlowHorizontalAttained: 'Alert Review',
    OpenedOn: '2018-11-15T19:37:56.33',
    caseCategoryName: 'Other',
    WorkflowRouteName: 'Assign Case',
    DaysOpen: 649,
    CompletedOn: null,
    DaysAssigned: 649,
    Score: 0,
    FollowUpFlag: 0,
    FollowUpComment: null,
    SystemNote: null,
    RouteAction: 'P',
    CaseTabGroupName: 'AML',
    isLocked: true,
    linkedCaseId: 182121,
    daysInStatus: null,
    LastAnalyzedBy: null,
    ModifiedByDisplayName: 'Dykes, James',
    CaseNumber: '0EA265AA-E942-B1D1-20F7-6619BA310FEF', AssignedOn: '2018-11-15T19:37:33.71',
    CreatedOn: '2017-07-11T00:12:33.13',
    WorkflowPositionID: 112,
    AssignedToUserID: '2dfafae3-a429-4143-b1f6-76ee29743565'
  },
  {
    // tslint:disable-next-line: max-line-length
    caseId: 179082, caseName: 'Tonia Cohen', AssignedToDisplayName: 'Dykes, James', WorkflowDisplayName: 'RFI Queue', HighestWorkFlowHorizontalAttained: 'RFI Queue', OpenedOn: '2018-05-04T14:13:35.41', caseCategoryName: 'Other', WorkflowRouteName: 'Additional Information Requested', DaysOpen: 844, CompletedOn: null, DaysAssigned: 728, Score: 0, FollowUpFlag: 0, FollowUpComment: null, SystemNote: null, RouteAction: 'P', CaseTabGroupName: 'AML', isLocked: false, linkedCaseId: null, daysInStatus: null, LastAnalyzedBy: null, ModifiedByDisplayName: 'Grebenshchik, Aleksey', CaseNumber: 'FBF1A9DB-92E4-3D63-4318-535DEE935A98', AssignedOn: '2018-08-28T19:04:08.72', CreatedOn: '2017-07-11T00:12:33.13', WorkflowPositionID: 115, AssignedToUserID: '2dfafae3-a429-4143-b1f6-76ee29743565'
  },
  {
    // tslint:disable-next-line: max-line-length
    caseId: 178588, caseName: 'Frosipefor  Corp.', AssignedToDisplayName: 'Dykes, James', WorkflowDisplayName: 'Case Team Leader ', HighestWorkFlowHorizontalAttained: 'Case Team Leader ', OpenedOn: '2018-04-24T20:09:57.873', caseCategoryName: 'Other', WorkflowRouteName: 'For Further Review', DaysOpen: 854, CompletedOn: null, DaysAssigned: 728, Score: 0, FollowUpFlag: 0, FollowUpComment: null, SystemNote: null, RouteAction: 'P', CaseTabGroupName: 'AML', isLocked: false, linkedCaseId: null, daysInStatus: null, LastAnalyzedBy: null, ModifiedByDisplayName: 'Dykes, James', CaseNumber: '17A6CFED-5C4C-C5AF-5980-81CA2AF462EE', AssignedOn: '2018-08-28T18:39:26.213', CreatedOn: '2017-07-11T00:12:33.13', WorkflowPositionID: 113, AssignedToUserID: '2dfafae3-a429-4143-b1f6-76ee29743565'
  },
  {
    // tslint:disable-next-line: max-line-length
    caseId: 178478, caseName: 'Dopfropar Direct Corp.', AssignedToDisplayName: 'Dykes, James', WorkflowDisplayName: 'Case Team Leader ', HighestWorkFlowHorizontalAttained: 'Case Team Leader ', OpenedOn: '2018-04-24T20:09:43.393', caseCategoryName: 'Other', WorkflowRouteName: 'For Further Review', DaysOpen: 854, CompletedOn: null, DaysAssigned: 728, Score: 0, FollowUpFlag: 0, FollowUpComment: null, SystemNote: null, RouteAction: 'P', CaseTabGroupName: 'AML', isLocked: false, linkedCaseId: null, daysInStatus: null, LastAnalyzedBy: null, ModifiedByDisplayName: 'Dykes, James', CaseNumber: 'F2D1D858-D461-C522-93CF-3DC8F3658C33', AssignedOn: '2018-08-28T18:39:26.197', CreatedOn: '2017-07-11T00:12:33.13', WorkflowPositionID: 113, AssignedToUserID: '2dfafae3-a429-4143-b1f6-76ee29743565'
  },
  {
    // tslint:disable-next-line: max-line-length
    caseId: 178920, caseName: 'Uppebazz  ', AssignedToDisplayName: 'Dykes, James', WorkflowDisplayName: 'Case Team Leader ', HighestWorkFlowHorizontalAttained: 'Case Team Leader ', OpenedOn: '2018-04-24T20:06:50.033', caseCategoryName: 'Other', WorkflowRouteName: 'For Further Review', DaysOpen: 854, CompletedOn: null, DaysAssigned: 728, Score: 0, FollowUpFlag: 0, FollowUpComment: null, SystemNote: null, RouteAction: 'P', CaseTabGroupName: 'AML', isLocked: false, linkedCaseId: 182114, daysInStatus: null, LastAnalyzedBy: null, ModifiedByDisplayName: 'Dykes, James', CaseNumber: 'E0318960-17DA-BD78-63C4-3D9808B86666', AssignedOn: '2018-08-28T18:39:26.177', CreatedOn: '2017-07-11T00:12:33.13', WorkflowPositionID: 113, AssignedToUserID: '2dfafae3-a429-4143-b1f6-76ee29743565'
  },
  {
    // tslint:disable-next-line: max-line-length
    caseId: 179493, caseName: 'Eddie Huff', AssignedToDisplayName: 'Dykes, James', WorkflowDisplayName: 'Case Team Leader ', HighestWorkFlowHorizontalAttained: 'Case Team Leader ', OpenedOn: '2018-04-24T20:12:36.843', caseCategoryName: 'Other', WorkflowRouteName: 'For Further Review', DaysOpen: 854, CompletedOn: null, DaysAssigned: 728, Score: 0, FollowUpFlag: 0, FollowUpComment: null, SystemNote: null, RouteAction: 'P', CaseTabGroupName: 'AML', isLocked: false, linkedCaseId: null, daysInStatus: null, LastAnalyzedBy: null, ModifiedByDisplayName: 'Dykes, James', CaseNumber: '4B73030A-4DF2-679A-F6E0-7218C3F8EB9F', AssignedOn: '2018-08-28T18:39:26.157', CreatedOn: '2017-07-11T00:12:33.13', WorkflowPositionID: 113, AssignedToUserID: '2dfafae3-a429-4143-b1f6-76ee29743565'
  },
  {
    // tslint:disable-next-line: max-line-length
    caseId: 179357, caseName: 'Lomhupazz Direct Inc', AssignedToDisplayName: 'Dykes, James', WorkflowDisplayName: 'Case Team Leader ', HighestWorkFlowHorizontalAttained: 'Case Team Leader ', OpenedOn: '2018-05-04T13:22:36.57', caseCategoryName: 'Other', WorkflowRouteName: 'For Further Review', DaysOpen: 844, CompletedOn: null, DaysAssigned: 728, Score: 100, FollowUpFlag: 0, FollowUpComment: null, SystemNote: null, RouteAction: 'P', CaseTabGroupName: 'AML', isLocked: false, linkedCaseId: 182114, daysInStatus: null, LastAnalyzedBy: null, ModifiedByDisplayName: 'Dykes, James', CaseNumber: '63365E75-B90E-BD02-FD48-0B33E91BFDC5', AssignedOn: '2018-08-28T18:39:26.083', CreatedOn: '2017-07-11T00:12:33.13', WorkflowPositionID: 113, AssignedToUserID: '2dfafae3-a429-4143-b1f6-76ee29743565'
  },
  {
    // tslint:disable-next-line: max-line-length
    caseId: 181544, caseName: 'Suzanne Holmes', AssignedToDisplayName: 'Dykes, James', WorkflowDisplayName: 'RFI Queue', HighestWorkFlowHorizontalAttained: 'RFI Queue', OpenedOn: '2018-05-17T19:38:17.99', caseCategoryName: 'Other', WorkflowRouteName: 'Additional Information Requested', DaysOpen: 831, CompletedOn: null, DaysAssigned: 831, Score: 0, FollowUpFlag: 0, FollowUpComment: null, SystemNote: 'Pooled', RouteAction: 'P', CaseTabGroupName: 'AML', isLocked: false, linkedCaseId: null, daysInStatus: null, LastAnalyzedBy: null, ModifiedByDisplayName: 'Dykes, James', CaseNumber: '21E0CAE7-3DB5-FB4B-81A1-412049E9ED53', AssignedOn: '2018-05-17T20:18:38.253', CreatedOn: '2017-07-11T00:12:33.13', WorkflowPositionID: 115, AssignedToUserID: '2dfafae3-a429-4143-b1f6-76ee29743565'
  },
  {
    // tslint:disable-next-line: max-line-length
    caseId: 179028, caseName: 'Surnipover WorldWide Inc', AssignedToDisplayName: 'Dykes, James', WorkflowDisplayName: 'Case Team Leader ', HighestWorkFlowHorizontalAttained: 'Case Team Leader ', OpenedOn: '2017-11-14T21:11:37.98', caseCategoryName: 'Other', WorkflowRouteName: 'For Further Review', DaysOpen: 1015, CompletedOn: null, DaysAssigned: 831, Score: 100, FollowUpFlag: 0, FollowUpComment: null, SystemNote: null, RouteAction: 'P', CaseTabGroupName: 'AML', isLocked: false, linkedCaseId: null, daysInStatus: null, LastAnalyzedBy: null, ModifiedByDisplayName: 'Dykes, James', CaseNumber: '346BF16E-0AE1-F2D0-E57D-027EAC20FD15', AssignedOn: '2018-05-17T18:11:50.787', CreatedOn: '2017-07-11T00:12:33.13', WorkflowPositionID: 113, AssignedToUserID: '2dfafae3-a429-4143-b1f6-76ee29743565'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['caseId', 'caseName', 'AssignedToDisplayName', 'WorkflowDisplayName', 'HighestWorkFlowHorizontalAttained', 'OpenedOn', 'caseCategoryName', 'WorkflowRouteName', 'DaysOpen', 'DaysAssigned', 'Score', 'FollowUpFlag', 'SystemNote' ];
  dataSource = SPA_DATA;

    constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DataElementDialog);
  }
}

// Dialog logic


@Component({
  selector: 'app-data-dialog',
  templateUrl: 'data-dialog.html',
})
export class DataElementDialog { }
