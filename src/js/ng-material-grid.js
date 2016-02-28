(function () {
  angular.module("ng-material-grid", ['ngSanitize']).
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
            var fieldVal = _.get(datum, def.field);
            def.val = def.cellValue ? def.cellValue(fieldVal, datum) : fieldVal;
            rowData.push(def);
          });
          scope.rows.push(rowData);
        });

      }
    }
  })
})();