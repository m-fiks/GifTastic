'use strict';
$(document).ready(function(){

//variables
let topics = ['pikachu', 'squirtle', 'bulbasaur', 'mew', 'eevee', 'psyduck', 'mewtwo', 'charizard', 'togepi','meowth'];
let imageURL = "";
let button;
let gifSearch;

//clear loaded up gifs
function clearGifs(){
    $('#target').empty();
};

function buttonCreation() {
    //create buttons for array
    for(let i = 0; i <topics.length; i++){
        let gifTopic = topics[i];
        //create buttons
        button = $("<button>");
        button.addClass("btn2");
        // Added a data-attribute
        button.attr("name", gifTopic);
        //console.log(button.attr("name"))
        button.text(gifTopic);
        // Addbutton to the buttons div
        $("#buttons").append(button);
        //function to call api and get gifs on page
        giphySearch();
    };
};

//create button from search bar
$('#search-button').click(function(event){
    event.preventDefault();
    let newButton = $('#form').val();
    topics.push(newButton);
    //console.log(topics)
    $('#form').val("");
    $('#buttons').empty();
    buttonCreation(); 
});

function giphySearch () {
$('.btn2').click(function () {
    clearGifs();
    gifSearch = ($(this).attr("name"));
    //console.log(gifSearch);
    let myURL = 'https://api.giphy.com/v1/gifs/search?q=' + gifSearch + '&api_key=MDOKk07DjXXDlXDATCMCt4HFeKhQGtq4&limit=10';
$.ajax({
    url: myURL,
    method: 'GET'
    }).then(function(response){
        //search for gifs
        for (let i =0; i < 10; i++){
            imageURL = response.data[i].images.fixed_height_small.url;
            let rating = response.data[i].rating;
            //splice out the s index=4
            let addOn = 'http://';
            let sliced = (imageURL.slice(8,imageURL.length));
            let gifURL = addOn.concat(sliced);
            //console.log(gifURL);
            $('#target').append(`<div> <img src='${gifURL}'> </img> <p> Rating: ${rating} </p> </div>`)
        };
    });
});
};

//show initial array buttons
buttonCreation();

});