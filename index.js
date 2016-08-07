angular.module('app',[]).controller('app', function($scope){
    $scope.test = 'Oliver';
    $scope.checkResult = function(){
        $scope.showResult = true;
    };
    $scope.scratch = [];
    var winningIndex = Math.floor(Math.random()*4);
    for(var i = 0; i<4; i++){
        $scope.scratch[i] = i === winningIndex ? 'won' : 'lost';
    }
});