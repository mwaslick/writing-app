const axios = require("axios")
const APIKey = "96a0095798mshc2bfc62fb7ce085p11e7e2jsn05160f6b40f1"

const API = {

    searchSynonyms: async function(query) {

        try {
            const response = await axios({
                "method":"GET",
                "url":`https://wordsapiv1.p.rapidapi.com/words/${query}/synonyms`,
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"wordsapiv1.p.rapidapi.com",
                "x-rapidapi-key":"02df4fb51bmsh702ed367223bfccp13c6d8jsnf367d77b2d56"
                }
              })

              return {
                statusCode: 200,
                body: response.data.synonyms,
                headers: {
                  'Access-Control-Allow-Origin': '*'
                }    
            }}
    catch (err) {
        console.log(err)
        }
}}

module.exports = API