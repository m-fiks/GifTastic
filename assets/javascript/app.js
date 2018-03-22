'use strict';
$(document).ready(function(){
// giphy: 
// MDOKk07DjXXDlXDATCMCt4HFeKhQGtq4
// -limit:10
// -rating: 
// https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=MDOKk07DjXXDlXDATCMCt4HFeKhQGtq4&limit=5
let topics = ['pikachu', 'squirtle', 'bulbasaur', 'mew', 'eevee', 'psyduck', 'mewtwo', 'charizard', 'togepi','meowth'];
let imageURL = "";
let searchTerm = 'charizard';
let button;
let myURL = 'https://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=MDOKk07DjXXDlXDATCMCt4HFeKhQGtq4&limit=5';

function buttonCreation() {

    for(let i = 0; i <topics.length; i++){
    let gifTopic = topics[i];
   
    //create buttons
    button = $("<button>");
    button.addClass("btn");

    // Added a data-attribute
    button.attr("name", gifTopic);
    //console.log(button.attr("name"))
    button.text(gifTopic);
    // Addbutton to the buttons div
    $("#buttons").append(button);
    };

    $('.btn').click(function (){
    let gifSearch = ($(this).attr("name"));
    console.log(gifSearch);
    })
};

buttonCreation();

// $.ajax({
//     url: myURL,
//     method: 'GET'
//     }).then(function(response){
//         console.log(response)
//         for (let i =0; i < 5; i++){
//             imageURL = response.data[i].images.fixed_height.url;
//             let rating = response.data[i].rating;
//             //splice out the s index=4
//             let addOn = 'http://';
//             let sliced = (imageURL.slice(8,imageURL.length));
//             let gifURL = addOn.concat(sliced);
//             //console.log(gifURL);
//             $('#target').append(`<div> <h4> Rating: ${rating} </h4> <img src='${gifURL}'> </img> </div>`)
//     };
// });

});
   