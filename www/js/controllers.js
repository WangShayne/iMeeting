/**
 * Created by Administrator on 2016/7/6 0006.
 */
angular.module("iMeeting.controllers",[])
    .controller("tabs-iMeeting",['$scope','$ionicHistory','$state','$ionicModal',function($scope,$ionicHistory,$state,$ionicModal){

        //位置数据
        //厂区数据
        $scope.factorySite = {site1:"金桥厂区",site2:"玉桥厂区",site3:"你妹厂区"}
        $scope.site = {
            "金桥厂区":["新行政楼","主楼","总装大楼","南楼","求是楼"],
            "玉桥厂区":["大楼","二楼","三楼","四楼","五楼"],
            "你妹厂区":["新行政楼","求毛楼"]
        };
        $scope.siteInfor = {site1:"新行政楼",site2:"主楼",site3:"总装大楼",site4:"南楼",site5:"求是楼"};
        $scope.selectedRow1 = 0;
        $scope.selectedRow2;
        $scope.iMeeting = {siteName1:"",siteName2:"",people:"",date:"",begin:"",finish:"",device:"",repeat:""}
        $scope.showSite = function(i,e) {
            $scope.siteName1 = this.x;
            $scope.siteInfor = $scope.site[$scope.siteName1];
            $scope.selectedRow1 = i;
            $scope.selectedRow2 = null;
            $scope.iMeeting.siteName1 = this.x;
        };

        $scope.selectedList2 = function(i,e){
            $scope.selectedRow2 = i;
            $scope.siteName2 = this.y;
            $scope.iMeeting.siteName2 = this.y;
        };

        $scope.goBack = function (){
            $ionicHistory.goBack();
           // window.history.back();
        };
        $scope.confirmSite = function(){
            $state.go("tabs.tabs-iMeeting",{reload:true})
        };
        $ionicModal.fromTemplateUrl("templates/modal-selectedPeople.html").then(
            function(modal){
                $scope.modal = modal;
            }
        )
    }])
    .controller("tabs-reserve",function(){})
    .controller("tabs-settings",function(){})