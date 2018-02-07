"use strict";

/* eslint id-length: "off" */

var getJobTitleCountData = function getJobTitleCountData(data) {

	var jobTitlesSet = new Set();
	var jobTitlesCountMap = new Map();

	// Get unique Job Titles in a Set.
	data.map(function (dataElement) {
		return jobTitlesSet.add(dataElement.jobTitle);
	});

	// Create map of Job Titles to keep count.
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = jobTitlesSet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var jobTitle = _step.value;


			jobTitlesCountMap.set(jobTitle, 0);
		}

		// Count Job Titles in Data.
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	data.map(function (dataElement) {
		return jobTitlesCountMap.set(dataElement.jobTitle, jobTitlesCountMap.get(dataElement.jobTitle) + 1);
	});

	return jobTitlesCountMap;
};

var getGenderCountData = function getGenderCountData(data) {

	var genderSet = new Set();
	var genderCountMap = new Map();

	// Get unique Job Titles in a Set.
	data.map(function (dataElement) {
		return genderSet.add(dataElement.gender);
	});

	// Create map of Job Titles to keep count.
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = genderSet[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var gender = _step2.value;


			genderCountMap.set(gender, 0);
		}

		// Count Job Titles in Data.
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	data.map(function (dataElement) {
		return genderCountMap.set(dataElement.gender, genderCountMap.get(dataElement.gender) + 1);
	});

	return genderCountMap;
};

var getPieData = function getPieData(dataMap) {

	var pieChartData = [];

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = dataMap[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var dataEntry = _step3.value;


			pieChartData.push({
				name: dataEntry[0],
				y: dataEntry[1]
			});
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}

	return pieChartData;
};

angular.module("main").component("dashboard", {
	controller: function controller($scope, DataService) {

		var self = this;

		self.loading = true;
		self.data = [];

		self.controlBarButtons = [{
			label: "Add Employee",
			action: function action() {

				event.stopPropagation();
				console.log("Thank you for hiring me!");

				self.data.push({
					name: "Dan Arias",
					jobTitle: "Front-End Developer",
					tenure: "1",
					gender: "Male"
				});

				self.jobTitlePieChartData = getPieData(getJobTitleCountData(self.data));
				self.genderBarChartData = getPieData(getGenderCountData(self.data));
			}
		}];

		self.jobTitlePieChartTitle = "Employees by Job Title";
		self.jobTitlePieChartSeriesTitle = "Job Title";
		self.jobTitlePieChartData = [];

		self.genderBarChartTitle = "Employees by Gender";
		self.genderBarChartSeriesTitle = "Gender";
		self.genderBarChartData = [];

		this.$onInit = function () {

			DataService.getData().then(function (data) {

				self.data = data;

				$scope.$apply(function () {

					self.loading = false;

					self.jobTitlePieChartData = getPieData(getJobTitleCountData(self.data));
					self.genderBarChartData = getPieData(getGenderCountData(self.data));
				});
			}).catch(function (error) {

				console.error(error);
			});
		};
	},

	template: "\n\t\t\t<dashboard-header title=\"'Corporate Employees'\"></dashboard-header>\n\t\t\t<div ng-if=\"!$ctrl.loading\">\n\t\t\t\t<control-bar>\n\t\t\t\t\t<control-bar-button \n\t\t\t\t\t\tng-repeat=\"button in $ctrl.controlBarButtons\" \n\t\t\t\t\t\ttitle=\"button.label\" \n\t\t\t\t\t\taction=\"button.action\">\n\t\t\t\t\t</control-bar-button>\n\t\t\t\t</control-bar>\n\t\t\t\t<employee-table employee-data=\"$ctrl.data\"></employee-table>\n\t\t\t\t<div class=\"dashboard-charts\">\n\t\t\t\t\t<div class=\"chart\">\n\t\t\t\t\t\t<pie-chart \n\t\t\t\t\t\t\ttitle=\"$ctrl.jobTitlePieChartTitle\" \n\t\t\t\t\t\t\tseries-title=\"$ctrl.jobTitlePieChartSeriesTitle\"\n\t\t\t\t\t\t\tpie-data=\"$ctrl.jobTitlePieChartData\">\n\t\t\t\t\t\t</pie-chart>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"chart\">\n\t\t\t\t\t\t<histogram \n\t\t\t\t\t\t\ttitle=\"$ctrl.genderBarChartTitle\"\n\t\t\t\t\t\t\tseries-title=\"$ctrl.genderBarChartSeriesTitle\"\n\t\t\t\t\t\t\tbar-data=\"$ctrl.genderBarChartData\">\n\t\t\t\t\t\t</histogram>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t"
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2Rhc2hib2FyZC5jb21wb25lbnQuanMiXSwibmFtZXMiOlsiZ2V0Sm9iVGl0bGVDb3VudERhdGEiLCJkYXRhIiwiam9iVGl0bGVzU2V0IiwiU2V0Iiwiam9iVGl0bGVzQ291bnRNYXAiLCJNYXAiLCJtYXAiLCJkYXRhRWxlbWVudCIsImFkZCIsImpvYlRpdGxlIiwic2V0IiwiZ2V0IiwiZ2V0R2VuZGVyQ291bnREYXRhIiwiZ2VuZGVyU2V0IiwiZ2VuZGVyQ291bnRNYXAiLCJnZW5kZXIiLCJnZXRQaWVEYXRhIiwiZGF0YU1hcCIsInBpZUNoYXJ0RGF0YSIsImRhdGFFbnRyeSIsInB1c2giLCJuYW1lIiwieSIsImFuZ3VsYXIiLCJtb2R1bGUiLCJjb21wb25lbnQiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiRGF0YVNlcnZpY2UiLCJzZWxmIiwibG9hZGluZyIsImNvbnRyb2xCYXJCdXR0b25zIiwibGFiZWwiLCJhY3Rpb24iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0ZW51cmUiLCJqb2JUaXRsZVBpZUNoYXJ0RGF0YSIsImdlbmRlckJhckNoYXJ0RGF0YSIsImpvYlRpdGxlUGllQ2hhcnRUaXRsZSIsImpvYlRpdGxlUGllQ2hhcnRTZXJpZXNUaXRsZSIsImdlbmRlckJhckNoYXJ0VGl0bGUiLCJnZW5kZXJCYXJDaGFydFNlcmllc1RpdGxlIiwiJG9uSW5pdCIsImdldERhdGEiLCJ0aGVuIiwiJGFwcGx5IiwiY2F0Y2giLCJlcnJvciIsInRlbXBsYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQSxJQUFNQSx1QkFBdUIsU0FBdkJBLG9CQUF1QixDQUFVQyxJQUFWLEVBQWdCOztBQUU1QyxLQUFNQyxlQUFlLElBQUlDLEdBQUosRUFBckI7QUFDQSxLQUFNQyxvQkFBb0IsSUFBSUMsR0FBSixFQUExQjs7QUFFQTtBQUNBSixNQUFLSyxHQUFMLENBQVMsVUFBQ0MsV0FBRDtBQUFBLFNBQWlCTCxh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Q0FBNUI7QUFDQTRCLFNBQUtXLGtCQUFMLEdBQTBCeEIsV0FBV0osbUJBQW1CaUIsS0FBSzVCLElBQXhCLENBQVgsQ0FBMUI7QUFFQTtBQWpCRixHQUR3QixDQUF6Qjs7QUF1QkE0QixPQUFLWSxxQkFBTCxHQUE2Qix3QkFBN0I7QUFDQVosT0FBS2EsMkJBQUwsR0FBbUMsV0FBbkM7QUFDQWIsT0FBS1Usb0JBQUwsR0FBNEIsRUFBNUI7O0FBRUFWLE9BQUtjLG1CQUFMLEdBQTJCLHFCQUEzQjtBQUNBZCxPQUFLZSx5QkFBTCxHQUFpQyxRQUFqQztBQUNBZixPQUFLVyxrQkFBTCxHQUEwQixFQUExQjs7QUFFQSxPQUFLSyxPQUFMLEdBQWUsWUFBWTs7QUFFMUJqQixlQUFZa0IsT0FBWixHQUNFQyxJQURGLENBQ08sVUFBVTlDLElBQVYsRUFBZ0I7O0FBRXJCNEIsU0FBSzVCLElBQUwsR0FBWUEsSUFBWjs7QUFFQTBCLFdBQU9xQixNQUFQLENBQWMsWUFBWTs7QUFFekJuQixVQUFLQyxPQUFMLEdBQWUsS0FBZjs7QUFFQUQsVUFBS1Usb0JBQUwsR0FBNEJ2QixXQUFXaEIscUJBQXFCNkIsS0FBSzVCLElBQTFCLENBQVgsQ0FBNUI7QUFDQTRCLFVBQUtXLGtCQUFMLEdBQTBCeEIsV0FBV0osbUJBQW1CaUIsS0FBSzVCLElBQXhCLENBQVgsQ0FBMUI7QUFFQSxLQVBEO0FBU0EsSUFkRixFQWVFZ0QsS0FmRixDQWVRLFVBQVVDLEtBQVYsRUFBaUI7O0FBRXZCZCxZQUFRYyxLQUFSLENBQWNBLEtBQWQ7QUFFQSxJQW5CRjtBQXFCQSxHQXZCRDtBQXlCQSxFQWhFc0I7O0FBaUV2QkM7QUFqRXVCLENBRHpCIiwiZmlsZSI6InNyYy9jb3JlL2Rhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogZXNsaW50IGlkLWxlbmd0aDogXCJvZmZcIiAqL1xuXG5jb25zdCBnZXRKb2JUaXRsZUNvdW50RGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cblx0Y29uc3Qgam9iVGl0bGVzU2V0ID0gbmV3IFNldCgpO1xuXHRjb25zdCBqb2JUaXRsZXNDb3VudE1hcCA9IG5ldyBNYXAoKTtcblxuXHQvLyBHZXQgdW5pcXVlIEpvYiBUaXRsZXMgaW4gYSBTZXQuXG5cdGRhdGEubWFwKChkYXRhRWxlbWVudCkgPT4gam9iVGl0bGVzU2V0LmFkZChkYXRhRWxlbWVudC5qb2JUaXRsZSkpO1xuXG5cdC8vIENyZWF0ZSBtYXAgb2YgSm9iIFRpdGxlcyB0byBrZWVwIGNvdW50LlxuXHRmb3IgKGNvbnN0IGpvYlRpdGxlIG9mIGpvYlRpdGxlc1NldCkge1xuXG5cdFx0am9iVGl0bGVzQ291bnRNYXAuc2V0KGpvYlRpdGxlLCAwKTtcblxuXHR9XG5cblx0Ly8gQ291bnQgSm9iIFRpdGxlcyBpbiBEYXRhLlxuXHRkYXRhLm1hcCgoZGF0YUVsZW1lbnQpID0+IGpvYlRpdGxlc0NvdW50TWFwLnNldChkYXRhRWxlbWVudC5qb2JUaXRsZSwgam9iVGl0bGVzQ291bnRNYXAuZ2V0KGRhdGFFbGVtZW50LmpvYlRpdGxlKSArIDEpKTtcblxuXHRyZXR1cm4gam9iVGl0bGVzQ291bnRNYXA7XG5cbn07XG5cbmNvbnN0IGdldEdlbmRlckNvdW50RGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cblx0Y29uc3QgZ2VuZGVyU2V0ID0gbmV3IFNldCgpO1xuXHRjb25zdCBnZW5kZXJDb3VudE1hcCA9IG5ldyBNYXAoKTtcblxuXHQvLyBHZXQgdW5pcXVlIEpvYiBUaXRsZXMgaW4gYSBTZXQuXG5cdGRhdGEubWFwKChkYXRhRWxlbWVudCkgPT4gZ2VuZGVyU2V0LmFkZChkYXRhRWxlbWVudC5nZW5kZXIpKTtcblxuXHQvLyBDcmVhdGUgbWFwIG9mIEpvYiBUaXRsZXMgdG8ga2VlcCBjb3VudC5cblx0Zm9yIChjb25zdCBnZW5kZXIgb2YgZ2VuZGVyU2V0KSB7XG5cblx0XHRnZW5kZXJDb3VudE1hcC5zZXQoZ2VuZGVyLCAwKTtcblxuXHR9XG5cblx0Ly8gQ291bnQgSm9iIFRpdGxlcyBpbiBEYXRhLlxuXHRkYXRhLm1hcCgoZGF0YUVsZW1lbnQpID0+XG5cdFx0Z2VuZGVyQ291bnRNYXAuc2V0KGRhdGFFbGVtZW50LmdlbmRlciwgZ2VuZGVyQ291bnRNYXAuZ2V0KGRhdGFFbGVtZW50LmdlbmRlcikgKyAxKSk7XG5cblx0cmV0dXJuIGdlbmRlckNvdW50TWFwO1xuXG59O1xuXG5jb25zdCBnZXRQaWVEYXRhID0gZnVuY3Rpb24gKGRhdGFNYXApIHtcblxuXHRjb25zdCBwaWVDaGFydERhdGEgPSBbXTtcblxuXHRmb3IgKGNvbnN0IGRhdGFFbnRyeSBvZiBkYXRhTWFwKSB7XG5cblx0XHRwaWVDaGFydERhdGEucHVzaCh7XG5cdFx0XHRuYW1lOiBkYXRhRW50cnlbMF0sXG5cdFx0XHR5OiBkYXRhRW50cnlbMV1cblx0XHR9KTtcblxuXHR9XG5cblx0cmV0dXJuIHBpZUNoYXJ0RGF0YTtcblxufTtcblxuYW5ndWxhci5tb2R1bGUoXCJtYWluXCIpXG5cdC5jb21wb25lbnQoXCJkYXNoYm9hcmRcIiwge1xuXHRcdGNvbnRyb2xsZXIgKCRzY29wZSwgRGF0YVNlcnZpY2UpIHtcblxuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cblx0XHRcdHNlbGYubG9hZGluZyA9IHRydWU7XG5cdFx0XHRzZWxmLmRhdGEgPSBbXTtcblxuXHRcdFx0c2VsZi5jb250cm9sQmFyQnV0dG9ucyA9IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxhYmVsOiBcIkFkZCBFbXBsb3llZVwiLFxuXHRcdFx0XHRcdGFjdGlvbiAoKSB7XG5cblx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJUaGFuayB5b3UgZm9yIGhpcmluZyBtZSFcIik7XG5cblx0XHRcdFx0XHRcdHNlbGYuZGF0YS5wdXNoKHtcblx0XHRcdFx0XHRcdFx0bmFtZTogXCJEYW4gQXJpYXNcIixcblx0XHRcdFx0XHRcdFx0am9iVGl0bGU6IFwiRnJvbnQtRW5kIERldmVsb3BlclwiLFxuXHRcdFx0XHRcdFx0XHR0ZW51cmU6IFwiMVwiLFxuXHRcdFx0XHRcdFx0XHRnZW5kZXI6IFwiTWFsZVwiXG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0c2VsZi5qb2JUaXRsZVBpZUNoYXJ0RGF0YSA9IGdldFBpZURhdGEoZ2V0Sm9iVGl0bGVDb3VudERhdGEoc2VsZi5kYXRhKSk7XG5cdFx0XHRcdFx0XHRzZWxmLmdlbmRlckJhckNoYXJ0RGF0YSA9IGdldFBpZURhdGEoZ2V0R2VuZGVyQ291bnREYXRhKHNlbGYuZGF0YSkpO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblx0XHRcdF07XG5cblx0XHRcdHNlbGYuam9iVGl0bGVQaWVDaGFydFRpdGxlID0gXCJFbXBsb3llZXMgYnkgSm9iIFRpdGxlXCI7XG5cdFx0XHRzZWxmLmpvYlRpdGxlUGllQ2hhcnRTZXJpZXNUaXRsZSA9IFwiSm9iIFRpdGxlXCI7XG5cdFx0XHRzZWxmLmpvYlRpdGxlUGllQ2hhcnREYXRhID0gW107XG5cblx0XHRcdHNlbGYuZ2VuZGVyQmFyQ2hhcnRUaXRsZSA9IFwiRW1wbG95ZWVzIGJ5IEdlbmRlclwiO1xuXHRcdFx0c2VsZi5nZW5kZXJCYXJDaGFydFNlcmllc1RpdGxlID0gXCJHZW5kZXJcIjtcblx0XHRcdHNlbGYuZ2VuZGVyQmFyQ2hhcnREYXRhID0gW107XG5cblx0XHRcdHRoaXMuJG9uSW5pdCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHREYXRhU2VydmljZS5nZXREYXRhKClcblx0XHRcdFx0XHQudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXG5cdFx0XHRcdFx0XHRzZWxmLmRhdGEgPSBkYXRhO1xuXG5cdFx0XHRcdFx0XHQkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRcdFx0XHRzZWxmLmxvYWRpbmcgPSBmYWxzZTtcblxuXHRcdFx0XHRcdFx0XHRzZWxmLmpvYlRpdGxlUGllQ2hhcnREYXRhID0gZ2V0UGllRGF0YShnZXRKb2JUaXRsZUNvdW50RGF0YShzZWxmLmRhdGEpKTtcblx0XHRcdFx0XHRcdFx0c2VsZi5nZW5kZXJCYXJDaGFydERhdGEgPSBnZXRQaWVEYXRhKGdldEdlbmRlckNvdW50RGF0YShzZWxmLmRhdGEpKTtcblxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0fTtcblxuXHRcdH0sXG5cdFx0dGVtcGxhdGU6IGBcblx0XHRcdDxkYXNoYm9hcmQtaGVhZGVyIHRpdGxlPVwiJ0NvcnBvcmF0ZSBFbXBsb3llZXMnXCI+PC9kYXNoYm9hcmQtaGVhZGVyPlxuXHRcdFx0PGRpdiBuZy1pZj1cIiEkY3RybC5sb2FkaW5nXCI+XG5cdFx0XHRcdDxjb250cm9sLWJhcj5cblx0XHRcdFx0XHQ8Y29udHJvbC1iYXItYnV0dG9uIFxuXHRcdFx0XHRcdFx0bmctcmVwZWF0PVwiYnV0dG9uIGluICRjdHJsLmNvbnRyb2xCYXJCdXR0b25zXCIgXG5cdFx0XHRcdFx0XHR0aXRsZT1cImJ1dHRvbi5sYWJlbFwiIFxuXHRcdFx0XHRcdFx0YWN0aW9uPVwiYnV0dG9uLmFjdGlvblwiPlxuXHRcdFx0XHRcdDwvY29udHJvbC1iYXItYnV0dG9uPlxuXHRcdFx0XHQ8L2NvbnRyb2wtYmFyPlxuXHRcdFx0XHQ8ZW1wbG95ZWUtdGFibGUgZW1wbG95ZWUtZGF0YT1cIiRjdHJsLmRhdGFcIj48L2VtcGxveWVlLXRhYmxlPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGFzaGJvYXJkLWNoYXJ0c1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjaGFydFwiPlxuXHRcdFx0XHRcdFx0PHBpZS1jaGFydCBcblx0XHRcdFx0XHRcdFx0dGl0bGU9XCIkY3RybC5qb2JUaXRsZVBpZUNoYXJ0VGl0bGVcIiBcblx0XHRcdFx0XHRcdFx0c2VyaWVzLXRpdGxlPVwiJGN0cmwuam9iVGl0bGVQaWVDaGFydFNlcmllc1RpdGxlXCJcblx0XHRcdFx0XHRcdFx0cGllLWRhdGE9XCIkY3RybC5qb2JUaXRsZVBpZUNoYXJ0RGF0YVwiPlxuXHRcdFx0XHRcdFx0PC9waWUtY2hhcnQ+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNoYXJ0XCI+XG5cdFx0XHRcdFx0XHQ8aGlzdG9ncmFtIFxuXHRcdFx0XHRcdFx0XHR0aXRsZT1cIiRjdHJsLmdlbmRlckJhckNoYXJ0VGl0bGVcIlxuXHRcdFx0XHRcdFx0XHRzZXJpZXMtdGl0bGU9XCIkY3RybC5nZW5kZXJCYXJDaGFydFNlcmllc1RpdGxlXCJcblx0XHRcdFx0XHRcdFx0YmFyLWRhdGE9XCIkY3RybC5nZW5kZXJCYXJDaGFydERhdGFcIj5cblx0XHRcdFx0XHRcdDwvaGlzdG9ncmFtPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0XG5cdFx0YFxuXHR9KTtcbiJdfQ==
