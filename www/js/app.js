/**
 * Created by Administrator on 2016/7/5 0005.
 */
angular.module("iMeeting",["ionic","iMeeting.controllers"])
    .run(function($ionicPlatform,$ionicHistory) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('bottom');


        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('center');

        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');

        $stateProvider
            //��tab
            .state('tabs', {
                url: '/tabs',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })
            //iMeetingҳ��
            .state("tabs.iMeeting",{
                url:"/tabs-iMeeting",
                views:{
                    "tabs-iMeeting":{
                        templateUrl:"templates/tabs-iMeeting.html",
                        controller:"tabs-iMeeting",
                    }
                }
            })
            //iMeetingҳ�������ת
            //ѡ��λ��ҳ��
           /* .state("device",{
                url:"/device",
                templateUrl:"templates/modal-selectedDevice.html",
                controller:"tabs-iMeeting"
            })*/

           .state("tabs.reserve",{
                url:"/tabs-reserve",
                views:{
                    "tabs-reserve":{
                        templateUrl:"templates/tabs-reserve.html",
                        controller:"tabs-reserve"
                    }
                }
            })
            .state("tabs.settings",{
                url:"/tabs-settings",
                views:{
                    "tabs-settings":{
                        templateUrl:"templates/tabs-settings.html",
                        controller:"tabs-settings"
                    }
                }
            })

        $urlRouterProvider.otherwise("tabs/tabs-iMeeting")



    })
