(function () {
  angular.module("ngMaterialGridDemo", ['ngMaterial', 'ng-material-grid']).
      controller('MainController', function ($scope) {
    $scope.config = {
      theme: 'primary',
      footer: true,
      columnDefs: [
        {
          field: 'name',
          headerText: 'Name',
          align: 'start'
        },
        {
          field: 'age',
          headerText: 'Age',
          align: 'start',
          cellFormat: 'html',
          cellValue: function (age, data) {
            return "<span>"+ age +"</span>";
          }
        },
        {
          field: 'dob',
          headerText: 'Date Of Birth',
          align: 'start'
        }
      ]
    };
    $scope.data = [
      { name: 'Arshabh', age: 25, dob: '23/12/2012' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' },
      { name: 'Ashwin', age: 23, dob: '23/12/2010' }
    ]
  });
})();