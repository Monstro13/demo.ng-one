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
		let deferred = this.$q.defer();

		this.$http.get('./phones/' + id + '.json').then((response) => {
			deferred.resolve(response.data);
		});

		return deferred.promise;
	};
}

Phone.$inject = ['$http', '$q'];

export default Phone;