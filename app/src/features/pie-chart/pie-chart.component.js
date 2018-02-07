"use strict";

angular.module("main")
	.component("pieChart", {
		bindings: {
			title: "<",
			pieData: "<",
			seriesTitle: "<"
		},
		replace: true,
		controller: function ($scope, $element) {
			let self = this;

			let container = $element.children()[0];

			self.$onInit = function () {
				Highcharts.chart(container, {
					chart: {
						type: 'pie'
					},
					title: {
						text: self.title
					},
					plotOptions: {
						pie: {
							allowPointSelect: true,
							cursor: 'pointer',
							dataLabels: {
								enabled: true,
								format: '<b>{point.name}</b>: {point.percentage:.1f} %'
							}
						}
					},
					series: [{
						name: self.seriesTitle,
						data: self.pieData
					}]
				});
			}
		},
		template: `
			<div class="pie-chart-container">
				Pie Chart
			</div>
		`
	});