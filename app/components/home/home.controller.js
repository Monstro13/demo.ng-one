class HomeController {
	constructor($scope, Phone, $state) {
		this.phones = [];
		this.pattern = "";

		this.activate($scope, Phone, $state);
	}

	activate($scope, Phone, $state) {
		Phone.all().then((phones) => {
			this.phones = phones;
		});

		$scope.$on('$stateChangeSuccess', () => {
			this.subState = ($state && $state.params && $state.params.phoneId);
		});
	};
}

HomeController.$inject = ['$scope', 'Phone', '$state'];

export default HomeController;