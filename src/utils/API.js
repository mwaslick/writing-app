const axios = require("axios")

const APIKey = "96a0095798mshc2bfc62fb7ce085p11e7e2jsn05160f6b40f1"

const API = {

    searchSynonyms: function(query) {
        fetch("https://wordsapiv1.p.rapidapi.com/words/" + query, {
	        "method": "GET",
	        "headers": {
		    "x-rapidapi-key": "96a0095798mshc2bfc62fb7ce085p11e7e2jsn05160f6b40f1",
		    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
	    }
    })
    .then(response => {
	    console.log(response);
    })
    .catch(err => {
	    console.error(err);
    });
    }

}