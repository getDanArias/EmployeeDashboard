"use strict";

angular.module("main").component("employeeTableHeadings", {
	bindings: {
		sortTable: "<",
		sortedColumn: "<",
		sortOrder: "<"
	},
	controller: function controller() {

		var self = this;

		self.headings = ["Name", "Job Title", "Tenure", "Gender"];

		self.sortClasses = {
			none: ["fas", "fa-sort"],
			asc: ["fas", "fa-sort-up"],
			desc: ["fas", "fa-sort-down"]
		};

		self.sortClass = self.sortClasses.none;
	},

	template: "\n\t\t\t<div class=\"employeeTableHeadings\">\n\t\t\t\t<div \n\t\t\t\tng-repeat=\"heading in $ctrl.headings\"\n\t\t\t\tclass=\"employeeTableCell\">\n\t\t\t\t\t{{heading}}\n\t\t\t\t\t<div class=\"sort-arrows\" ng-click=\"$ctrl.sortTable(heading)\">\n\t\t\t\t\t\t<i ng-class=\"heading === $ctrl.sortedColumn ?\n\t\t\t\t\t\t\t$ctrl.sortOrder ? $ctrl.sortClasses.asc : $ctrl.sortClasses.desc :\n\t\t\t\t\t\t\t$ctrl.sortClass\"\n\t\t\t\t\t\t></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t"
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mZWF0dXJlcy9lbXBsb3llZS10YWJsZS9lbXBsb3llZS10YWJsZS1oZWFkaW5nLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29tcG9uZW50IiwiYmluZGluZ3MiLCJzb3J0VGFibGUiLCJzb3J0ZWRDb2x1bW4iLCJzb3J0T3JkZXIiLCJjb250cm9sbGVyIiwic2VsZiIsImhlYWRpbmdzIiwic29ydENsYXNzZXMiLCJub25lIiwiYXNjIiwiZGVzYyIsInNvcnRDbGFzcyIsInRlbXBsYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUUMsTUFBUixDQUFlLE1BQWYsRUFDRUMsU0FERixDQUNZLHVCQURaLEVBQ3FDO0FBQ25DQyxXQUFVO0FBQ1RDLGFBQVcsR0FERjtBQUVUQyxnQkFBYyxHQUZMO0FBR1RDLGFBQVc7QUFIRixFQUR5QjtBQU1uQ0MsV0FObUMsd0JBTXJCOztBQUViLE1BQU1DLE9BQU8sSUFBYjs7QUFFQUEsT0FBS0MsUUFBTCxHQUFnQixDQUNmLE1BRGUsRUFFZixXQUZlLEVBR2YsUUFIZSxFQUlmLFFBSmUsQ0FBaEI7O0FBT0FELE9BQUtFLFdBQUwsR0FBbUI7QUFDbEJDLFNBQU0sQ0FBQyxLQUFELEVBQVEsU0FBUixDQURZO0FBRWxCQyxRQUFLLENBQUMsS0FBRCxFQUFRLFlBQVIsQ0FGYTtBQUdsQkMsU0FBTSxDQUFDLEtBQUQsRUFBUSxjQUFSO0FBSFksR0FBbkI7O0FBTUFMLE9BQUtNLFNBQUwsR0FBaUJOLEtBQUtFLFdBQUwsQ0FBaUJDLElBQWxDO0FBRUEsRUF6QmtDOztBQTBCbkNJO0FBMUJtQyxDQURyQyIsImZpbGUiOiJzcmMvZmVhdHVyZXMvZW1wbG95ZWUtdGFibGUvZW1wbG95ZWUtdGFibGUtaGVhZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuYW5ndWxhci5tb2R1bGUoXCJtYWluXCIpXG5cdC5jb21wb25lbnQoXCJlbXBsb3llZVRhYmxlSGVhZGluZ3NcIiwge1xuXHRcdGJpbmRpbmdzOiB7XG5cdFx0XHRzb3J0VGFibGU6IFwiPFwiLFxuXHRcdFx0c29ydGVkQ29sdW1uOiBcIjxcIixcblx0XHRcdHNvcnRPcmRlcjogXCI8XCJcblx0XHR9LFxuXHRcdGNvbnRyb2xsZXIgKCkge1xuXG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblxuXHRcdFx0c2VsZi5oZWFkaW5ncyA9IFtcblx0XHRcdFx0XCJOYW1lXCIsXG5cdFx0XHRcdFwiSm9iIFRpdGxlXCIsXG5cdFx0XHRcdFwiVGVudXJlXCIsXG5cdFx0XHRcdFwiR2VuZGVyXCJcblx0XHRcdF07XG5cblx0XHRcdHNlbGYuc29ydENsYXNzZXMgPSB7XG5cdFx0XHRcdG5vbmU6IFtcImZhc1wiLCBcImZhLXNvcnRcIl0sXG5cdFx0XHRcdGFzYzogW1wiZmFzXCIsIFwiZmEtc29ydC11cFwiXSxcblx0XHRcdFx0ZGVzYzogW1wiZmFzXCIsIFwiZmEtc29ydC1kb3duXCJdXG5cdFx0XHR9O1xuXG5cdFx0XHRzZWxmLnNvcnRDbGFzcyA9IHNlbGYuc29ydENsYXNzZXMubm9uZTtcblxuXHRcdH0sXG5cdFx0dGVtcGxhdGU6IGBcblx0XHRcdDxkaXYgY2xhc3M9XCJlbXBsb3llZVRhYmxlSGVhZGluZ3NcIj5cblx0XHRcdFx0PGRpdiBcblx0XHRcdFx0bmctcmVwZWF0PVwiaGVhZGluZyBpbiAkY3RybC5oZWFkaW5nc1wiXG5cdFx0XHRcdGNsYXNzPVwiZW1wbG95ZWVUYWJsZUNlbGxcIj5cblx0XHRcdFx0XHR7e2hlYWRpbmd9fVxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzb3J0LWFycm93c1wiIG5nLWNsaWNrPVwiJGN0cmwuc29ydFRhYmxlKGhlYWRpbmcpXCI+XG5cdFx0XHRcdFx0XHQ8aSBuZy1jbGFzcz1cImhlYWRpbmcgPT09ICRjdHJsLnNvcnRlZENvbHVtbiA/XG5cdFx0XHRcdFx0XHRcdCRjdHJsLnNvcnRPcmRlciA/ICRjdHJsLnNvcnRDbGFzc2VzLmFzYyA6ICRjdHJsLnNvcnRDbGFzc2VzLmRlc2MgOlxuXHRcdFx0XHRcdFx0XHQkY3RybC5zb3J0Q2xhc3NcIlxuXHRcdFx0XHRcdFx0PjwvaT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgXG5cdH0pO1xuIl19
