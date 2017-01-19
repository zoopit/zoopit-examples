var util    = require( 'util' )
var request = require( 'request' )
const API_KEY = ""
const API_URL = "https://api.test.zoopit.no/v2/quote/3"



var options = {
	url : API_URL,
	headers : { 'api-key' : API_KEY },
	json : true,
	strictSSL : false,
	
	qs : {
		pickup : 1122,
		delivery : 1123,
		weight : 10,
		goods: [{Name:"A Great Product"}],
	}
}


request( options , function( err, response , body ) {
	console.log( util.inspect( response.headers , { depth : null } ) )
	console.log( util.inspect( body , { depth : null } ) )
})

