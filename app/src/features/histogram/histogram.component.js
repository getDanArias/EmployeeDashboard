"use strict";

/* global Highcharts */

const createBarChart = function (container, title, barData, seriesTitle) {

	Highcharts.chart(container, {
		chart: {type: "column"},
		title: {text: title},
		xAxis: {categories: barData.map((dataEntry) => dataEntry.name)},
		yAxis: {

			title: null,
			allowDecimals: false,
			minorTickInterval: 1

		},
		plotOptions: {

			pie: {

				allowPointSelect: true,
				cursor: "pointer",
				dataLabels: {
					enabled: true,
					format: "<b>{point.name}</b>: {point.percentage:.1f} %"

				}

			}

		},
		series: [{
			name: seriesTitle,
			data: barData.map((dataEntry) => dataEntry.y)
		}]
	});

};

const HistogramController = function HistogramController ($scope, $element) {

	const self = this;

	const container = $element.children()[0];

	self.$onChanges = function () {

		createBarChart(container, self.title, self.barData, self.seriesTitle);

	};

};

HistogramController.$inject = ["$scope", "$element"];

angular.module("main")
	.component("histogram", {
		bindings: {
			title: "<",
			barData: "<",
			seriesTitle: "<"
		},
		replace: true,
		controller: HistogramController,
		template: `
			<div class="bar-chart-container">
				Bar Chart
			</div>
		`
	});
