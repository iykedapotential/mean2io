"use strict";
var log = require('../logger');

module.exports = function(data, message){
	log.error('sending request failed response: ', data, message || 'request failed');

	if (data !== undefined && data !== null) {
		if(Object.keys(data).length === 0 && JSON.stringify(data) === JSON.stringify({})){
			data = data.toString();
		}
	}

	if(data){
		this.status(422).json({status: 'fail', data: data, message: message ? message : 'request failed'});
	}else{
		this.status(422).json({status: 'fail', message: message ? message : 'request failed'});
	}
};
