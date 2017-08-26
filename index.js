class rezults {
	constructor() {
		this._sent = false;
		this._success = true;
		this._message = '';
		this._data = null;
	}
	data(obj) {
		this._data = Object.assign(this._data, obj);
	}
	done(res) {
		if (!this._sent) {
			this._sent = true;
			res.send({
				success: this._success,
				message: this._message,
				data: this._data
			});
		}
	}
	error(message) {
		this._success = false;
		this._message = message;
	}
}
module.exports = rezults;