angular.module("MEANies", ["ngRoute", "ngResource", "MEANies.controllers", "MEANies.factories", "MEANies.services"])

.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

    .when("/", {
        templateUrl: "views/login.html",
        controller: "LoginController"
    })
    .when("/mario", {
        templateUrl: "views/mario.html"
    })
    .when("/board", {
        templateUrl: "views/board.html",
        controller: "BoardController"
    })
    .when("/login", {
        templateUrl: "views/login.html",
        controller: "LoginController"
    })
    .when("/winner", {
        templateUrl: "views/winner.html",
        controller: "WinnerController"
    })
    .when("/users/create", {
        templateUrl: "views/create_user.html",
        controller: "UserCreateController"
    })
    .when("/mongo_boss", {
        templateUrl: "views/mongo_boss.html",
        controller: "MongoBossController"
    })
    .when("/express_boss", {
        templateUrl: "views/express_boss.html",
        controller: "ExpressBossController"
    })
    .when("/angular_boss", {
        templateUrl: "views/angular_boss.html",
        controller: "AngularBossController"
    })
    .when("/node_boss", {
        templateUrl: "views/node_boss.html",
        controller: "NodeBossController"
    })
    .when("/big_boss", {
        templateUrl: "views/big_boss.html",
        controller: "BigBossController"
    })
    .when("/questions", {
        templateUrl: "views/questions.html",
        controller: "QuestionsController"
    })
    .when("/questions/:id", {
        templateUrl: "views/question.html",
        controller: "QuestionController"
    })
    .otherwise({
        redirectTo: "/"
    })
}]);