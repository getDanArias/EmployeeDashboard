"use strict";

angular.module("main")
	.component("employeeTable", {
		bindings: {
			employeeData: "<"
		},
		controller: function () {
			let self = this;

			self.nameSortToggleAsc = false;
			self.jobTitleSortToggleAsc = false;
			self.tenureSortToggleAsc = false;
			self.genderSortToggleAsc = false;

			self.sortBy = function sort(prop, orderToggle) {
				return function sortByName (a, b) {
					return a[prop] === b[prop] ?
						0 :
						a[prop] < b[prop] ?
							orderToggle ? 1 : -1 :
							orderToggle ? -1 : 1;
				};
			};

			self.sortByNum = function sort(prop, orderToggle) {
				return function sortByName (a, b) {
					return parseInt(a[prop], 10) === parseInt(b[prop]) ?
						0 :
						parseInt(a[prop], 10) < parseInt(b[prop], 10) ?
							orderToggle ? 1 : -1 :
							orderToggle ? -1 : 1;
				};
			};

			self.sortedColumn = "";
			self.sortAsc = null;

			self.sortTable = function (heading) {
				console.log(`Sort Table by ${heading}`);

				switch (heading) {
					case "Name": {
						self.employeeData = self.employeeData.sort(self.sortBy("name", self.nameSortToggleAsc));
						self.nameSortToggleAsc = !self.nameSortToggleAsc;
						self.sortedColumn = heading;
						self.sortAsc = self.nameSortToggleAsc;
						break;
					}
					case "Job Title": {
						self.employeeData = self.employeeData.sort(self.sortBy("jobTitle", self.jobTitleSortToggleAsc));
						self.jobTitleSortToggleAsc = !self.jobTitleSortToggleAsc;
						self.sortedColumn = heading;
						self.sortAsc = self.jobTitleSortToggleAsc;
						break;
					}
					case "Tenure": {
						self.employeeData = self.employeeData.sort(self.sortByNum("tenure", self.tenureSortToggleAsc));
						self.tenureSortToggleAsc = !self.tenureSortToggleAsc;
						self.sortedColumn = heading;
						self.sortAsc = self.tenureSortToggleAsc;
						break;
					}
					case "Gender": {
						self.employeeData = self.employeeData.sort(self.sortBy("gender", self.genderSortToggleAsc));
						self.genderSortToggleAsc = !self.genderSortToggleAsc;
						self.sortedColumn = heading;
						self.sortAsc = self.genderSortToggleAsc;
						break;
					}
					default:
						break;
				}
			}
		},
		template: `
			<div class="employeeTable">
				<employee-table-headings
					sorted-column="$ctrl.sortedColumn"
					sort-order="$ctrl.sortAsc" 
					sort-table="$ctrl.sortTable">
				</employee-table-headings>
				<div 
					ng-repeat="employee in $ctrl.employeeData" 
					ng-class-odd="'oddRow'" 
					ng-class-even="'evenRow'">
					<employee-table-row employee-row-data="employee">
					</employee-table-row>
				</div>
			</div>
		`
	});