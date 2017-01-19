var util    = require( 'util' )
var request = require( 'request' )

const API_KEY = ""
const API_URL = "http://api.test.zoopit.no/v2/order"
const QUOTE_ID = "" //use get quote to aquire.


var options = {
	url : API_URL,
	headers : { 'api-key' : API_KEY },
	json : true,
	method : 'post',
	body : {
		send: true,
		quote_id : QUOTE_ID,
		remote_id : '',
	  pickup_reference : "testtest",
	  pickup : {
			customer : {
				companyname : "FooBar inc"
			},
			address : {
				city    : 'Oslo',
				street  : 'Smalvollveien 65',
				zip     : 1122
			},
			contact : {
				email : 'eksempel@eksempel',
				phone : '9999 44 882'
			},
			comments : ""
	  },
		delivery: {
			customer : {
				firstname : "Nick",
				lastname  : "Mason"
			},
			address : {
				city    : 'Oslo',
				street  : 'Pilestredet 15',
				zip     : 1123
			},
			contact : {
				email : 'eksempel@eksempel',
				phone : '9999 44 882'
			},
			comments : "."
		},
	}
}


request( options , function( err ,reponse , body ) {
	console.log( util.inspect( response.headers , { depth : null } ) )
	console.log( util.inspect( body , { depth : null } ) )
})
