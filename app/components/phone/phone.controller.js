class PhoneController {
	constructor(Phone, $state) {
		this.phone = {};

		this.activate(Phone, $state);
	}

	activate(Phone, $state) {
		let phoneId = $state.params.phoneId;
		Phone.byId(phoneId).then((phone) => {
			this.phone = phone;
			this.phone.mainImageUrl = this.phone.images[0];
		});
	};

	setImage(img) {
		this.phone.mainImageUrl = img;
	};
}

PhoneController.$inject = ['Phone', '$state'];

export default PhoneController;