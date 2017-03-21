angular.module('MEANies.factories', [])
.factory('Question', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/questions/:id', { id: '@id' }, {
        'update': { method: 'PUT' }
    });
}])

.factory("User", ["$resource", function($resource) {
    var users = $resource("/api/users/:id", { id : "@id" }, {
        update: {
            method : "PUT"
        },
        me: {
            method: "GET",
            isArray: false,
            url: '/api/users/me'
        }
    });
    return users;
}])

.factory('BossQuestion', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/bosses/:id', { id: '@id' }, {
        'update': { method: 'PUT' }
    });
}])
.factory('BossDoor', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/doors/:id', { id: '@id' }, {
        'update': { method: 'PUT' }
    });
}])