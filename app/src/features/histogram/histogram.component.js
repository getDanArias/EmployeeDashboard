"use strict";

angular.module("main")
	.component("histogram", {
		bindings: {
			title: "<",
			barData: "<"
		},
		replace: true,
		controller: function ($scope, $element) {
			let self = this;

			let container = $element.children()[0];

			self.$onInit = function () {
				Highcharts.chart(container, {
					chart: {
						type: 'column'
					},
					title: {
						text: self.title
					},
					xAxis: {
						categories: self.barData.map(dataEntry => dataEntry.name)
					},
					yAxis: {
						title: null
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
						name: "Gender",
						data: self.barData.map(dataEntry => dataEntry.y)
					}]
				});
			}
		},
		template: `
			<div class="bar-chart-container">
				Bar Chart
			</div>
		`
	});