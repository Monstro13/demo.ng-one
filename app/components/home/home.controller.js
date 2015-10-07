export default class HomeController {
	constructor(Phone) {
		this.Phone = Phone;
		this.phones = [];

		this.init();
	}

	init() {
		this.Phone.all().then((phones) => {
			this.phones = phones;
		});
	};
}

HomeController.$inject = ['Phone'];