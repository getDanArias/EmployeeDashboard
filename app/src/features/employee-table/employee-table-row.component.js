"use strict";

angular.module("main")
	.component("employeeTableRow", {
		bindings: {employeeRowData: "<"},
		transclude: true,
		template: `
			<ng-transclude>
				<div class="employeeTableRow">
					<div class="employeeTableCell">{{$ctrl.employeeRowData.name}}</div>
					<div class="employeeTableCell">{{$ctrl.employeeRowData.jobTitle}}</div>
					<div class="employeeTableCell">{{$ctrl.employeeRowData.tenure}}</div>
					<div class="employeeTableCell">{{$ctrl.employeeRowData.gender}}</div>
				</div>
			</ng-transclude>
			
		`
	});
