(function () {
  angular.module("ngMaterialGridDemo", ['ngMaterial', 'ng-material-grid']).
      controller('MainController', function ($scope) {
    $scope.config = {
      theme: 'primary',
      footer: false,
      columnDefs: [
        {
          field: 'name',
          headerText: 'Name',
          align: 'start'
        },
        {
          field: 'age',
          headerText: 'Age',
          align: 'start'
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
      { name: 'Ashwin', age: 23, dob: '23/12/2010' }
    ]
  });
})();