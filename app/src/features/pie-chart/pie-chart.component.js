"use strict";

/* global Highcharts */

const createPieChart = function (container, title, pieData, seriesTitle) {

	Highcharts.chart(container, {

		chart: {type: "pie"},
		title: {text: title},
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
			data: pieData
		}]
	});

};

const PieChartController = function PieChartController ($scope, $element) {

	const self = this;

	const container = $element.children()[0];

	self.$onInit = function () {

		createPieChart(container, self.title, self.pieData, self.seriesTitle);

	};

	self.$onChanges = function () {

		createPieChart(container, self.title, self.pieData, self.seriesTitle);

	};

};

PieChartController.$inject = ["$scope", "$element"];

angular.module("main")
	.component("pieChart", {
		bindings: {
			title: "<",
			pieData: "<",
			seriesTitle: "<"
		},
		replace: true,
		controller: PieChartController,
		template: `
			<div class="pie-chart-container">
				Pie Chart
			</div>
		`
	});
