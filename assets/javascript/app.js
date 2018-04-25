'use strict';
$(document).ready(function(){

//variables
let topics = ['pikachu', 'squirtle', 'bulbasaur', 'mew', 'eevee', 'psyduck', 'mewtwo', 'charizard', 'togepi','meowth'];
let imageURL = "";
let gifURL = "";
let animateURL= "";
let staticURL ="";
let button;
let gifSearch;
let gifTopic;
let rating;
let newButton;

//clear loaded up gifs
function clearGifs(){
    $('#target').empty();
};

function buttonCreation() {
    //create buttons for beginning array
    topics.map((elem)=> {
            //create buttons
        button = $("<button>");
        button.addClass("btn2");
        // Added a data-attribute
        button.attr("name", elem);
        //console.log(button.attr("name"))
        button.text(elem);
        // Add button to the buttons div
        $("#buttons").append(button);
    }) 
    //function to call api and get gifs on page
    giphySearch();
    $('#searchy').hide();
};

//create button from search bar
$('#search-button').click(function(event){
    event.preventDefault();
    newButton = $('#form').val();
        if (newButton.length > 0) {
            //console.log(newButton.length)
            //push to topics array
            topics.push(newButton);
            //console.log(topics)
            $('#form').val("");
            $('#buttons').empty();
            buttonCreation(); 
        } else if (newButton.length === 0){
            clearGifs();
            $('#target').append(`<div id='searchy'>Please enter a term to search for!</div>`)
        };
});

function giphySearch () {
$('.btn2').click(function () {
    $('#searchy').hide();
    clearGifs();
    gifSearch = ($(this).attr("name"));
    //console.log(gifSearch);
    let myURL = 'https://api.giphy.com/v1/gifs/search?q=' + gifSearch + '&api_key=MDOKk07DjXXDlXDATCMCt4HFeKhQGtq4&limit=10';

    $.ajax({
    url: myURL,
    method: 'GET'
    }).then(function(response){
        //console.log(response)

        //to animate -- change the attr("src", URL)

        //generate gifs
        for (let i =0; i < 10; i++){
            
            //obtain still URL from response object
            imageURL = response.data[i].images.fixed_height_small_still.url;
            //obtain animated URL from response object
            gifURL =  response.data[i].images.fixed_height_small.url;
            rating = response.data[i].rating;
            //to get 's' out of https:// - slice out everything after the 's', add 'http://' to beginning
            let addOn = 'http://';
            let sliced = (imageURL.slice(8,imageURL.length));
            let slicedGif = (gifURL.slice(8, gifURL.length));
            staticURL = addOn.concat(sliced);
            animateURL = addOn.concat(slicedGif);
            //console.log(animateURL);

            //append still gif and rating to DOM
            $('#target').append(`<div id="giphy"> <img src='${staticURL}' data-still=${staticURL} data-animate=${animateURL} data-state="still"> <p> Rating: ${rating} </p> </div>`)
            console.log(staticURL);
            };
        });
    });
};

 //animate gifs
 $('#target').on('click', 'img', function() {            
    //console.log($(this).attr('data-state'));
    let state = $(this).attr('data-state');
    if (state === 'still') {
        //console.log('here');
        //change data-state attribute to animate
        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr('data-state','animate');
    } else if (state === 'animate'){
        //change data-state attribute to still
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-state','still');
    };
});

//show initial array buttons
buttonCreation();

});