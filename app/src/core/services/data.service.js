"use strict";

function DataService($http) {
	let self = this;
	self.employeeData = [];

	self.fetchData = function fetchData () {
		console.log(`DataService.getData`);
		return new Promise((resolve, reject) => {
			$http.get('new_hire.json')
				.then(function (data) {
					console.log("First then!");
					self.employeeData = data;
					resolve();
				})
				.catch(function (error) {
					console.error(error);
					self.employeeData = null;
					reject(error);
				})
		});
	};

	this.getData = function getData () {
		return new Promise((resolve, reject) => {
			self.fetchData()
				.then(function () {
					console.log("Second then!");
					resolve(self.employeeData.data);
				})
				.catch(function (error) {
					reject(error);
				})
		});
	}
}

angular.module("main")
	.service('DataService', DataService);