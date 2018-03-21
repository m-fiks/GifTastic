'use strict';

// giphy: 
// MDOKk07DjXXDlXDATCMCt4HFeKhQGtq4
// -limit:10
// -rating: 

// https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=MDOKk07DjXXDlXDATCMCt4HFeKhQGtq4&limit=5

let imageURL = "";
let searchTerm = 'charizard';
let myURL = 'https://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=MDOKk07DjXXDlXDATCMCt4HFeKhQGtq4&limit=5';

$.ajax({
    url: myURL,
    method: 'GET'
    }).then(function(response){
        console.log(response)
        for (let i =0; i < 5; i++){
            imageURL = response.data[i].images.fixed_height.url;
            let rating = response.data[i].rating;
            //splice out the s index=4
            let addOn = 'http://';
            let sliced = (imageURL.slice(8,imageURL.length));
            let gifURL = addOn.concat(sliced);
            //console.log(gifURL);
            $('#target').append(`<div> <h4> Rating: ${rating} </h4> <img src='${gifURL}'> </img> </div>`)

        }
});
   