"use strict";

angular.module("main")
	.component("employeeTable", {
		controller: function ($scope, DataService) {
			console.log("Calling DataService");
			let self = this;

			self.data = [];

			DataService.getData()
				.then(function (data) {
					$scope.$apply(function () {
						self.data = data;
						console.log(self.data);
					});
				})
				.catch(function (error) {
					console.error(error);
				});

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

			self.sortTable = function (heading) {
				console.log(`Sort Table by ${heading}`);

				switch (heading) {
					case "Name": {
						self.data = self.data.sort(self.sortBy("name", self.nameSortToggle));
						self.nameSortToggle = !self.nameSortToggle;
						break;
					}
					case "Job Title": {
						self.data = self.data.sort(self.sortBy("jobTitle", self.jobTitleSortToggleAsc));
						self.jobTitleSortToggleAsc = !self.jobTitleSortToggleAsc;
						break;
					}
					case "Tenure": {
						self.data = self.data.sort(self.sortByNum("tenure", self.tenureSortToggleAsc));
						self.tenureSortToggleAsc = !self.tenureSortToggleAsc;
						break;
					}
					case "Gender": {
						self.data = self.data.sort(self.sortBy("gender", self.genderSortToggleAsc));
						self.genderSortToggleAsc = !self.genderSortToggleAsc;
						break;
					}
					default:
						break;
				}
			}
		},
		template: `
			<div>
				Employee Table
				<employee-table-headings sort-table="$ctrl.sortTable"></employee-table-headings>
				<employee-table-row employee-data="employee" ng-repeat="employee in $ctrl.data">
				</employee-table-row>
			</div>
		`
	});