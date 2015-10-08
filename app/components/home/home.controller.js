class HomeController {
	constructor(Phone) {
		this.Phone = Phone;
		this.phones = [];
		this.pattern = "";

		this.init();
	}

	init() {
		this.Phone.all().then((phones) => {
			this.phones = phones;
		});
	};
}

HomeController.$inject = ['Phone'];

export default HomeController;