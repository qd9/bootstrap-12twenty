(function(angular) {
    'use strict';

    function eventController() {
        var ctrl = this;

        ctrl.eventsData = [

            { "student_group": "Test", "employer_name": "TestCompany", "event_type": "Mock Interviews| The Sea of Tranquility", "date": "04/22/2017", "event_status": "Registration Closed", "registrants": "0" },

            { "student_group": "Spring Career Fair", "employer_name": "TestCompany", "event_type": "Career Workshop|C.201", "date": "04/24/2017", "event_status": "Registration Open", "registrants": "8" },

            { "student_group": "Parker CMC", "employer_name": "Various", "event_type": "Company Events|Other", "date": "04/24/2017", "event_status": "Registration Closed", "registrants": "45" },

            { "student_group": "Parker CMC", "employer_name": "Various", "event_type": "Company Events|Other", "date": "04/26/2017", "event_status": "Registration Closed", "registrants": "30" },

            { "student_group": "Job Fair 1", "employer_name": "TestCompany", "event_type": "Career Fair|", "date": "04/26/2017", "event_status": "Registration Open", "registrants": "0" }

        ];

        ctrl.toggleAllEvents = function() {
            ctrl.eventsData.forEach(function(event) {
                event.selected = ctrl.allSelected;
            });
        };

        ctrl.selectEvent = function(event) {
            event.selected = !event.selected;
        };
    }

    angular.module('myApp').component("events", {
        templateUrl: 'components/Events/events.html',
        controller: eventController
    });


})(window.angular);
