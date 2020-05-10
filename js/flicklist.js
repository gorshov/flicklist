var api = {
    root: "https://api.themoviedb.org/3",
    token: "79cac75ea4961a258546cd642c279087" // TODO put your api key here
}

/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, prints the results to the console
 */
function testTheAPI() {
    $.ajax({
        url: api.root + "/discover/movie",
        data: {
            api_key: api.token,
        },
        success: function (response) {
            console.log("We got a response from The Movie DB!");
            console.log(response);
        },
        error: () => {
			console.log("An error occurred while connection to api.")
        }
    });
}


console.log("The script loaded!");
testTheAPI();
