/**
 * Created by Administrator on 2016/7/6 0006.
 */
angular.module("iMeeting.controllers",[])
    .controller("tabs-iMeeting",['$scope','$ionicHistory','$state','$ionicModal',function($scope,$ionicHistory,$state,$ionicModal){

        //位置数据
        //厂区数据
        //$http.get
        $scope.factorySite = {site1:"金桥厂区",site2:"玉桥厂区",site3:"你妹厂区"}
        $scope.site = {
            "金桥厂区":["新行政楼","主楼","总装大楼","南楼","求是楼"],
            "玉桥厂区":["大楼","二楼","三楼","四楼","五楼"],
            "你妹厂区":["新行政楼","求毛楼"]
        };
        $scope.siteInfor = {site1:"新行政楼",site2:"主楼",site3:"总装大楼",site4:"南楼",site5:"求是楼"};
        $scope.selectedRow1 = 0;
        $scope.selectedRow2;
        $scope.iMeeting = {siteName1:"",siteName2:"",people:"",date:"",begin:"",finish:"",device:{baiban:"",huatong:"",touyingyi:""},repeat:{}};
        $scope.iMeetingFactory = {siteName1:"金桥厂区",siteName2:"",people:"",date:"",begin:"",finish:"",device:{baiban:"",huatong:"",touyingyi:""},repeat:{}};
        $scope.week = {"day1":"星期一","day2":"星期二","day3":"星期三","day4":"星期四","day5":"星期五","day6":"星期六","day7":"星期日"};
        $scope.chooseWeek = {
            "day1": {"val": false, name:"星期一"},
            "day2": {"val": false, name:"星期二"},
            "day3": {"val": false, name:"星期三"},
            "day4": {"val": false, name:"星期四"},
            "day5": {"val": false, name:"星期五"},
            "day6": {"val": false, name:"星期六"},
            "day7": {"val": false, name:"星期日"}
        };
        $scope.chooseMonth = {
                               "week1":{
                                   "day1": {"val": false, name:"第1周星期一"},
                                   "day2": {"val": false, name:"第1周星期二"},
                                   "day3": {"val": false, name:"第1周星期三"},
                                   "day4": {"val": false, name:"第1周星期四"},
                                   "day5": {"val": false, name:"第1周星期五"},
                                   "day6": {"val": false, name:"第1周星期六"},
                                   "day7": {"val": false, name:"第1周星期日"}
                               },
                               "week2":{
                                   "day1": {"val": false, name:"第2周星期一"},
                                   "day2": {"val": false, name:"第2周星期二"},
                                   "day3": {"val": false, name:"第2周星期三"},
                                   "day4": {"val": false, name:"第2周星期四"},
                                   "day5": {"val": false, name:"第2周星期五"},
                                   "day6": {"val": false, name:"第2周星期六"},
                                   "day7": {"val": false, name:"第2周星期日"}
                               },
                               "week3":{
                                   "day1": {"val": false, name:"第3周星期一"},
                                   "day2": {"val": false, name:"第3周星期二"},
                                   "day3": {"val": false, name:"第3周星期三"},
                                   "day4": {"val": false, name:"第3周星期四"},
                                   "day5": {"val": false, name:"第3周星期五"},
                                   "day6": {"val": false, name:"第3周星期六"},
                                   "day7": {"val": false, name:"第3周星期日"}
                               },
                               "week4":{
                                   "day1": {"val": false, name:"第4周星期一"},
                                   "day2": {"val": false, name:"第4周星期二"},
                                   "day3": {"val": false, name:"第4周星期三"},
                                   "day4": {"val": false, name:"第4周星期四"},
                                   "day5": {"val": false, name:"第4周星期五"},
                                   "day6": {"val": false, name:"第4周星期六"},
                                   "day7": {"val": false, name:"第4周星期日"}
                               },
                            };
        $scope.goBack = function (){
            $ionicHistory.goBack();
           // window.history.back();
        };

        /**选择位置页面**/
        $ionicModal.fromTemplateUrl("templates/modal-selectedSite.html",{
            scope: $scope,
            animation: 'slide-in-up'
        }).then(
            function(modal){
                $scope.modalSite = modal;
            }

        );
        $scope.showSite = function(i,e) {
            $scope.siteName1 = this.x;
            $scope.siteInfor = $scope.site[$scope.siteName1];
            $scope.selectedRow1 = i;
            $scope.selectedRow2 = null;
            $scope.iMeetingFactory.siteName1 = this.x;
        };

        $scope.selectedList2 = function(i,e){
            $scope.selectedRow2 = i;
            $scope.siteName2 = this.y;
            $scope.iMeetingFactory.siteName2 = this.y;
        };
        $scope.confirmSite = function(){
            $scope.iMeeting =  $scope.iMeetingFactory;
            $scope.modalSite.hide();
        };

        /**选择人数**/
        $ionicModal.fromTemplateUrl("templates/modal-selectedPeople.html",{
            scope: $scope,
            animation: 'slide-in-up'
        }).then(
            function(modal){
                $scope.modalPeople = modal;
            }

        );


        /**选择设备**/
        $ionicModal.fromTemplateUrl("templates/modal-selectedDevice.html",{
            scope: $scope,
            animation: 'slide-in-up'
        }).then(
            function(modal){
                $scope.modalDevice = modal;
            }
        );
        $scope.baiban = false;
        $scope.huatong = false;
        $scope.touyingyi = false;
        $scope.deviceBaiban = function(){
            $scope.baiban = !$scope.baiban;
            $scope.iMeetingFactory.device.baiban = $scope.baiban;
        };
        $scope.deviceHuatong = function(){
            $scope.huatong = !$scope.huatong;
            $scope.iMeetingFactory.device.huatong = $scope.huatong;
        };
        $scope.deviceTouyingyi = function(){
            $scope.touyingyi = !$scope.touyingyi;
            $scope.iMeetingFactory.device.touyingyi = $scope.touyingyi;
        };
        $scope.confirmDevice = function(){
            $scope.iMeeting.device = $scope.iMeetingFactory.device;
            $scope.modalDevice.hide()
        };

        /**选择是否重复**/
        $ionicModal.fromTemplateUrl("templates/modal-selectedRepeat.html",{
            scope: $scope,
            animation: 'slide-in-up'
        }).then(
            function(modal){
                $scope.modalRepeat = modal;
            }
        );

        $scope.repeat = {week:{"val":"","data":{}},month:{"val":"","data":{}}};
        $scope.repeat.week.data = $scope.chooseWeek;
        $scope.repeat.month.data = $scope.chooseMonth;
        $scope.iMeetingFactory.repeat = $scope.repeat;
        $scope.toggleWeek = function(){
            $scope.repeat.week.val = true;
            $scope.repeat.month.val = false;
            $scope.iMeetingFactory.repeat = $scope.repeat;
            console.log($scope.iMeetingFactory)
        };
        $scope.toggleMonth = function(){
            $scope.repeat.week.val = false;
            $scope.repeat.month.val = true;
            $scope.iMeetingFactory.repeat = $scope.repeat;
            console.log($scope.iMeetingFactory)
        };


        //每周重复日选择
        $scope.day1 = function(){
            $scope.chooseWeek.day1.val = !$scope.chooseWeek.day1.val;
            $scope.iMeetingFactory.repeat.week.data = $scope.chooseWeek;
        };
        $scope.day2 = function(){
            $scope.chooseWeek.day2.val = !$scope.chooseWeek.day2.val;
            $scope.iMeetingFactory.repeat.week.data = $scope.chooseWeek;
        };
        $scope.day3 = function(){
            $scope.chooseWeek.day3.val = !$scope.chooseWeek.day3.val;
            $scope.iMeetingFactory.repeat.week.data = $scope.chooseWeek;
        };
        $scope.day4 = function(){
            $scope.chooseWeek.day4.val = !$scope.chooseWeek.day4.val;
            $scope.iMeetingFactory.repeat.week.data = $scope.chooseWeek;
        };
        $scope.day5 = function(){
            $scope.chooseWeek.day5.val = !$scope.chooseWeek.day5.val;
            $scope.iMeetingFactory.repeat.week.data = $scope.chooseWeek;
        };
        $scope.day6 = function(){
            $scope.chooseWeek.day6.val = !$scope.chooseWeek.day6.val;
            $scope.iMeetingFactory.repeat.week.data = $scope.chooseWeek;
        };
        $scope.day7 = function(){
            $scope.chooseWeek.day7.val = !$scope.chooseWeek.day7.val;
            $scope.iMeetingFactory.repeat.week.data = $scope.chooseWeek;
        };

        //每月重复日选择
        $scope.w1d1 = function(){
            $scope.chooseMonth.week1.day1.val =  !$scope.chooseMonth.week1.day1.val;
            $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w2d1 = function(){
            $scope.chooseMonth.week2.day1.val =  !$scope.chooseMonth.week2.day1.val;
            $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w3d1 = function(){
            $scope.chooseMonth.week3.day1.val =  !$scope.chooseMonth.week3.day1.val;
            $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w4d1 = function(){
            $scope.chooseMonth.week4.day1.val =  !$scope.chooseMonth.week4.day1.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };

        $scope.w1d2 = function(){
            $scope.chooseMonth.week1.day2.val =  !$scope.chooseMonth.week1.day2.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w2d2 = function(){
            $scope.chooseMonth.week2.day2.val =  !$scope.chooseMonth.week2.day2.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w3d2 = function(){
            $scope.chooseMonth.week3.day2.val =  !$scope.chooseMonth.week3.day2.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w4d2 = function(){
            $scope.chooseMonth.week4.day2.val =  !$scope.chooseMonth.week4.day2.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };

        $scope.w1d3 = function(){
            $scope.chooseMonth.week1.day3.val =  !$scope.chooseMonth.week1.day3.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w2d3 = function(){
            $scope.chooseMonth.week2.day3.val =  !$scope.chooseMonth.week2.day3.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w3d3 = function(){
            $scope.chooseMonth.week3.day3.val =  !$scope.chooseMonth.week3.day3.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w4d3 = function(){
            $scope.chooseMonth.week4.day3.val =  !$scope.chooseMonth.week4.day3.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };

        $scope.w1d4 = function(){
            $scope.chooseMonth.week1.day4.val =  !$scope.chooseMonth.week1.day4.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w2d4 = function(){
            $scope.chooseMonth.week2.day4.val =  !$scope.chooseMonth.week2.day4.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w3d4 = function(){
            $scope.chooseMonth.week3.day4.val =  !$scope.chooseMonth.week3.day4.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w4d4 = function(){
            $scope.chooseMonth.week4.day4.val =  !$scope.chooseMonth.week4.day4.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };

        $scope.w1d5 = function(){
            $scope.chooseMonth.week1.day5.val =  !$scope.chooseMonth.week1.day5.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w2d5 = function(){
            $scope.chooseMonth.week2.day5.val =  !$scope.chooseMonth.week2.day5.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w3d5 = function(){
            $scope.chooseMonth.week3.day5.val =  !$scope.chooseMonth.week3.day5.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w4d5 = function(){
            $scope.chooseMonth.week4.day5.val =  !$scope.chooseMonth.week4.day5.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };

        $scope.w1d6 = function(){
            $scope.chooseMonth.week1.day6.val =  !$scope.chooseMonth.week1.day6.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w2d6 = function(){
            $scope.chooseMonth.week2.day6.val =  !$scope.chooseMonth.week2.day6.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w3d6 = function(){
            $scope.chooseMonth.week3.day6.val =  !$scope.chooseMonth.week3.day6.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w4d6 = function(){
            $scope.chooseMonth.week4.day6.val =  !$scope.chooseMonth.week4.day6.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };

        $scope.w1d7 = function(){
            $scope.chooseMonth.week1.day7.val =  !$scope.chooseMonth.week1.day7.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w2d7 = function(){
            $scope.chooseMonth.week2.day7.val =  !$scope.chooseMonth.week2.day7.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w3d7 = function(){
            $scope.chooseMonth.week3.day7.val =  !$scope.chooseMonth.week3.day7.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };
        $scope.w4d7 = function(){
            $scope.chooseMonth.week4.day7.val =  !$scope.chooseMonth.week4.day7.val;
             $scope.iMeetingFactory.repeat.month.data = $scope.chooseMonth;
        };

        $scope.confirmRepeat = function(){
          $scope.iMeeting.repeat = $scope.iMeetingFactory.repeat;
            if($scope.iMeeting.repeat.week.data!='' && ($scope.iMeeting.repeat.week.data.day1.val || $scope.iMeeting.repeat.week.data.day2.val || $scope.iMeeting.repeat.week.data.day3.val || $scope.iMeeting.repeat.week.data.day4.val || $scope.iMeeting.repeat.week.data.day5.val || $scope.iMeeting.repeat.week.data.day6.val || $scope.iMeeting.repeat.week.data.day7.val)){
                $scope.iMeeting.repeat.week.val = true;
            }else{
                $scope.iMeeting.repeat.week.val = false
            }

            if( $scope.iMeeting.repeat.month.data!=''  &&  ($scope.iMeeting.repeat.month.data.week1.day1.val
                    || $scope.iMeeting.repeat.month.data.week1.day2.val
                    || $scope.iMeeting.repeat.month.data.week1.day3.val
                    || $scope.iMeeting.repeat.month.data.week1.day4.val
                    || $scope.iMeeting.repeat.month.data.week1.day5.val
                    || $scope.iMeeting.repeat.month.data.week1.day6.val
                    || $scope.iMeeting.repeat.month.data.week1.day7.val
                    || $scope.iMeeting.repeat.month.data.week2.day1.val
                    || $scope.iMeeting.repeat.month.data.week2.day2.val
                    || $scope.iMeeting.repeat.month.data.week2.day3.val
                    || $scope.iMeeting.repeat.month.data.week2.day4.val
                    || $scope.iMeeting.repeat.month.data.week2.day5.val
                    || $scope.iMeeting.repeat.month.data.week2.day6.val
                    || $scope.iMeeting.repeat.month.data.week2.day7.val
                    || $scope.iMeeting.repeat.month.data.week3.day1.val
                    || $scope.iMeeting.repeat.month.data.week3.day2.val
                    || $scope.iMeeting.repeat.month.data.week3.day3.val
                    || $scope.iMeeting.repeat.month.data.week3.day4.val
                    || $scope.iMeeting.repeat.month.data.week3.day5.val
                    || $scope.iMeeting.repeat.month.data.week3.day6.val
                    || $scope.iMeeting.repeat.month.data.week3.day7.val
                    || $scope.iMeeting.repeat.month.data.week4.day1.val
                    || $scope.iMeeting.repeat.month.data.week4.day2.val
                    || $scope.iMeeting.repeat.month.data.week4.day3.val
                    || $scope.iMeeting.repeat.month.data.week4.day4.val
                    || $scope.iMeeting.repeat.month.data.week4.day5.val
                    || $scope.iMeeting.repeat.month.data.week4.day6.val
                    || $scope.iMeeting.repeat.month.data.week4.day7.val
                )){$scope.iMeeting.repeat.month.val = true;}
                else{$scope.iMeeting.repeat.month.val = false}

          $scope.modalRepeat.hide();
        };

        $scope.$on('$destroy', function() {
            $scope.modalSite.remove();
            $scope.modalPeople.remove();
            $scope.modalDevice.remove();
            $scope.modalRepeat.remove();
        });
    }])
    .controller("tabs-reserve",function(){})
    .controller("tabs-settings",function(){})