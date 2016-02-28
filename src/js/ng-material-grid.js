(function () {
  angular.module("ng-material-grid", []).
      directive("ngMaterialGrid", function () {
    return {
      restrict: 'EA',
      scope: {
        config: '=',
        data: '='
      },
      templateUrl: 'ng-material-grid.html',
      link: function (scope, element, attrs) {
        scope.theme = "md-" + (scope.config.theme || 'primary');

        scope.rows = [];
        _.each(scope.data, function (datum) {
          var rowData = [];
          _.each(scope.config.columnDefs, function (def) {
            rowData.push({
              val: _.get(datum, def.field),
              width: def.width,
              align: def.align
            });
          });
          scope.rows.push(rowData);
        });

      }
    }
  })
})();