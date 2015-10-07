import angular from 'angular';

class Phone {
	constructor($http, $q) {
        this.$http = $http;
		this.$q = $q;
    };

	all() {
		let deferred = this.$q.defer();

		this.$http.get('./phones/phones.json').then((response) => {
			deferred.resolve(response.data);
		});

		return deferred.promise;
	};

	byId(id) {

	};
}

Phone.$inject = ['$http', '$q'];

export default angular.module('services.phone', [])
	.service('Phone', Phone)
	.name;