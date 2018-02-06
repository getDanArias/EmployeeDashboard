"use strict";

angular.module("main")
	.component("employeeTableRow", {
		bindings: {
			employeeData: "<"
		},
		template: `
			<div class="employeeTableRow">
				<div class="employeeTableCell">{{$ctrl.employeeData.name}}</div>
				<div class="employeeTableCell">{{$ctrl.employeeData.jobTitle}}</div>
				<div class="employeeTableCell">{{$ctrl.employeeData.tenure}}</div>
				<div class="employeeTableCell">{{$ctrl.employeeData.gender}}</div>
			</div>
		`
	});
