"use strict";
var log = require('../logger');
var config = require('../../config');
var debug = require('debug')('response');

module.exports = function(data){
	debug("sending ok response");
	var req = this.req;
	var res = this;

	log.info('Sending ok response: ', data);
	if(data){
		res.status(200).json({status: 'success', data: data});
	}else{
		res.status(200).json({status: 'success'});
	}
};
