(function(){

    var module = angular.module("app.monsters", ["ionic", "ngCordova", "app.utils"]);

    module.config(function($stateProvider, $urlRouterProvider) {

      $stateProvider.state('app.monsters', {
          url: '/monsters',
          views: {
              'menuContent': {
                  templateUrl: 'app/monsters/monster.list.html',
                  controller: 'MonstersCtrl'
              }
          }
      });

      $stateProvider.state("app.monster_detail", {
          url : '/monsters/:monsterId',
          views: {
              'menuContent': {
                  templateUrl: 'app/monsters/monster.detail.html',
                  controller: 'MonstersDetailCtrl'
              }
          }
      });

    });


    module.controller("MonstersCtrl", function($scope, $timeout, $ionicFilterBar, Monsters){
        var filterBarInstance;

        $scope.monsters = Monsters.getMonsterList();

        $scope.showFilterBar = function () {
            filterBarInstance = $ionicFilterBar.show({
                items: $scope.monsters,
                update: function (filteredItems, filterText) {
                  $scope.monsters = filteredItems;
                  if (filterText) {
                    console.log(filterText);
                  }
                }
            });
        };

        $scope.refreshItems = function () {
            if (filterBarInstance) {
                filterBarInstance();
                filterBarInstance = null;
            }

            $timeout(function () {
                $scope.monsters = Monsters.getMonsterList();
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };
    });


    module.controller("MonstersDetailCtrl", function($scope, $state, Monsters){
        $scope.monster = Monsters.find(parseInt($state.params.monsterId));
    });


    module.factory("Monsters", function($q, $ionicPlatform, $cordovaFile, Utils){

        var monsters = [];

        function openDataFile(){

            //Se regresa promesa ya que la lectura del archivo es asincrona.
            return $q(function(resolve, reject){

                $ionicPlatform.ready(function() {

                    var path = cordova.file.applicationDirectory;
                    path += '/www/app/monsters';
                    var fileName = "monsters.json";

                    $cordovaFile.readAsText(path, fileName)
                    .then(function (success) {
                        resolve(angular.fromJson(success));

                    }, function (error) {
                        reject(angular.toJson(error));
                    });

                });

            });
        };

        return {
            loadData: function(){
                var promesa = openDataFile();
                promesa.then(
                    //onSuccess
                    function(jsonData){
                        monsters = jsonData.monsters;
                        Utils.addIds(monsters);
                    },
                    //onFailure
                    function(reason){
                        console.log(reason);
                    }
                );
            },
            getMonsterList: function(){
                return monsters;
            },
            find(monsterId){
                for(var i = 0; i<monsters.length; i++){
                    if(monsters[i].id === monsterId){
                        return monsters[i];
                    }
                }
                return undefined;
            },
            findByName: function(name){
                for(var i = 0; i<monsters.length; i++){
                    if(monsters[i].name === name){
                        return monsters[i];
                    }
                }
                return undefined;
            }
        }
    });

}());
