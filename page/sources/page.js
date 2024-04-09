
var myState = null
  , myMenu = []
  , myApp = null
  , myScope = null
angular.module('myApp', []);
angular.module('myApp').controller('myController', function($scope) {
    // ใส่โค้ดสำหรับการควบคุมการทำงานของหน้าเว็บ 
    $scope.Page = {}
    $scope.State = {}
    $scope.Store = {}
    $scope.update = function() {
        $scope.$$phase || $scope.$apply()
    }
    $scope.pageBack = function() {
        myNavigator.popPage()
    }
    $scope.getPageName = function() {
        return $scope.__currentPage
    }
    $scope.toggleElement = function(a) {
        try {
            a.classList.toggle("ng-hide")
        } catch (a) {
            console.error(a)
        }
    }
    $scope.getState = function(a) {
        try {
            if (!a)
                return $scope.State;
            else if ($scope.State.hasOwnProperty(a))
                return $scope.State[a]
        } catch (b) {
            console.error(b, a)
        }
    }

    myScope = $scope
});
function getuser() {
    fetch('http://localhost:4200/api/user')
        .then(response => {
            // เช็คสถานะของ response
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // แปลง response เป็น JSON
            return response.json();
        })
        .then(data => {
            // ทำสิ่งที่ต้องการกับข้อมูลที่ได้รับ

            console.log(data);
            myScope.State.user = data;
            myScope.update();
            // $("#displayUser").text(data)
        })
        .catch(error => {
            // จัดการข้อผิดพลาดที่เกิดขึ้น
            console.error('There was a problem with the fetch operation:', error);
        });
}
