exports.action = function(data, callback, config, SARAH) {
	var config = config.modules.MultiUrl;
	
	console.log('-------');
	console.log(config.description)
	console.log('-------');

	var url1 = (typeof config.URL1 != 'undefined') ? config.URL1 : false;
	var url2 = (typeof config.URL2 != 'undefined') ? config.URL2 : false;
	var url3 = (typeof config.URL3 != 'undefined') ? config.URL3 : false;
	var url4 = (typeof config.URL4 != 'undefined') ? config.URL4 : false;
	var url5 = (typeof config.URL5 != 'undefined') ? config.URL5 : false;
	
	//var PhraseConfirm = config.PhraseConfirm;

	var request = require('request');

	
	if(url1 != false) {
		request({ 'uri' : url1 }, 
		function (err, response, body){});
	}

	if(url2 != false) {	
		request({ 'uri' : url2 }, 
		function (err, response, body){});
	}

	if(url3 != false) {	
		request({ 'uri' : url3 }, 
		function (err, response, body){});
	}
	
	if(url4 != false) {
		request({ 'uri' : url4 }, 
		function (err, response, body){});
	}
	
	if(url5 != false) {
		request({ 'uri' : url5 }, 
		function (err, response, body){});
	}
	
	callback({'tts' : ""});

	return;
}