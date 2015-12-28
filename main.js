angular.module("MailboxApp", ["ui.router"])

.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/inbox");
        $stateProvider.state("inbox", {
            url: "/inbox",
            templateUrl:"partials/inbox.html",
            controller: function($scope, messageStore) {
                //console.log("inbox")
                $scope.messages = messageStore.getMessages();
            }
        })
    })
.service("messageStore", function() {
        var messages = [];
        var sampleSize = 100;
        for ( var i = 0 ; i < sampleSize; i++ ) {
            messages.push( {
                sender: "john.smith" + i + "@gmail.com",
                date: Date.now() - i * 2400000000,
                id: i,
                subject: "Report #" + i,
                body: "This is the e-mail message body"
            })

            return {
                getMessages: function() {
                    return messages;
                }
            }
        }
    })