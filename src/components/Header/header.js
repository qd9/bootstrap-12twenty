(function(angular) {
    'use strict';

    function HeaderController() {
    	var vm = this;
    	vm.onInit = onInit;
    	vm.toggle = toggle;
    	function onInit() {
    		vm.leftNavBarObj = [
    			{
    				titles: ['Home']
    			},
    			{
    				titles: ['Students','Employers','Contacts']
    			},
    			{
    				titles: ['Tasks','Activity Stream']
    			},
    			{
    				titles: ['Reporting Dashboards', 'Custom Reports','12Twenty Reports','Standard Reports']
    			},
    			{
    				titles: ['Research Tools']
    			},
    			{
    				titles: ['OCI and Job Listings', 'Appointments', 'Events', 'Candidate Search', 'Resume Books']
    			}
    		];
    		vm.isCollapsed = false;
    	}
    	function toggle() {
    		vm.isCollapsed = !vm.isCollapsed;
    	}
    }

    angular.module('myApp').component("topHeader", {
        templateUrl: 'components/Header/header.html',
        controller: HeaderController,
        bindToCotroller: true,
        controllerAs: 'vm'
    });


})(window.angular);