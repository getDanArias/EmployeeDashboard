"use strict";

function getJobTitleCountData(data) {
	let jobTitlesSet = new Set();
	let jobTitlesCountMap = new Map();

	// Get unique Job Titles in a Set.
	data.map(dataElement => {
		jobTitlesSet.add(dataElement.jobTitle);
	});

	// Create map of Job Titles to keep count.
	for (let jobTitle of jobTitlesSet) {
		jobTitlesCountMap.set(jobTitle, 0);
	}

	// Count Job Titles in Data.
	data.map(dataElement => {
		jobTitlesCountMap.set(dataElement.jobTitle, jobTitlesCountMap.get(dataElement.jobTitle) + 1);
	});

	return jobTitlesCountMap;
}

function getGenderCountData(data) {
	let genderSet = new Set();
	let genderCountMap = new Map();

	// Get unique Job Titles in a Set.
	data.map(dataElement => {
		genderSet.add(dataElement.gender);
	});

	// Create map of Job Titles to keep count.
	for (let gender of genderSet) {
		genderCountMap.set(gender, 0);
	}

	// Count Job Titles in Data.
	data.map(dataElement => {
		genderCountMap.set(dataElement.gender, genderCountMap.get(dataElement.gender) + 1);
	});

	return genderCountMap;
}

function getPieData(dataMap) {
	let pieChartData = [];

	for (let dataEntry of dataMap) {
		pieChartData.push({
			name: dataEntry[0],
			y: dataEntry[1]
		})
	}

	return pieChartData;
}

angular.module("main")
	.component("dashboard", {
		controller: function ($scope, DataService) {
			let self = this;

			self.loading = true;
			self.data = [];

			self.jobTitlePieChartTitle = "Employees by Job Title";
			self.jobTitlePieChartData = [];

			self.genderBarChartTitle = "Employees by Gender";
			self.genderBarChartData = [];

			this.$onInit = function () {
				DataService.getData()
					.then(function (data) {
						self.data = data;

						$scope.$apply(function () {
							self.loading = false;

							self.jobTitlePieChartData = getPieData(getJobTitleCountData(self.data));
							self.genderBarChartData = getPieData(getGenderCountData(self.data));

						});
					})
					.catch(function (error) {
						console.error(error);
					});
			}
		},
		template: `
			<dashboard-header title="'Corporate Employees'"></dashboard-header>
			<div ng-if="!$ctrl.loading">
				<employee-table employee-data="$ctrl.data"></employee-table>
				<div class="dashboard-charts">
					<div class="chart">
						<pie-chart 
							title="$ctrl.jobTitlePieChartTitle" 
							pie-data="$ctrl.jobTitlePieChartData">
						</pie-chart>
					</div>
					<div class="chart">
						<histogram 
							title="$ctrl.genderBarChartTitle"
							bar-data="$ctrl.genderBarChartData">
						</histogram>
					</div>
				</div>
			</div>
			
		`
	});