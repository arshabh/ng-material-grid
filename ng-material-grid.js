(function () {
  angular.module("ng-material-grid", []).
      directive("ngMaterialGrid", function () {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'ng-material-grid.html',
      link: function (scope, element, attrs) {}
    }
  })
})();