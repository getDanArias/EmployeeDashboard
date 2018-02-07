"use strict";

const DataService = function DataService ($http) {

	const self = this;

	self.employeeData = [];

	self.fetchData = function fetchData () {

		return new Promise((resolve, reject) => {

			$http.get("new_hire.json")
				.then(function (data) {

					self.employeeData = data;
					resolve();

				})
				.catch(function (error) {

					console.error(error);
					self.employeeData = null;
					reject(error);

				});

		});

	};

	this.getData = function getData () {

		return new Promise((resolve, reject) => {

			self.fetchData()
				.then(function () {

					resolve(self.employeeData.data);

				})
				.catch(function (error) {

					reject(error);

				});

		});

	};

};

DataService.$inject = ["$http"];

angular.module("main")
	.service("DataService", DataService);
