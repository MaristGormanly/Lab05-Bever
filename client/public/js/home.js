const { json } = require("body-parser");
const { application } = require("express");

window.addEventListener( 'load', () => {
    getFeed();
})

function getFeed(){
    fetch( '/api/post').then( ( res ) => {
        if( res.status >= 400 ) {
            console.log( "There was a problem with the asynch feed call" );
            return;
        }

       res.json().then( ( posts) => {
        console.log( posts );
        let feedHtml = "<div class='myclass' id='feedContainer'>";
        posts.forEach( post => {
            console.log( post )
            feedHtml += "<h4>" + post.title + "</h4>";
            feedHtml += "<p>" + post.description + "</p>";
            feedHtml += "<hr />";
        });   

        feedHtml += "</div>";

        document.getElementById( 'feed' ).innerHTML = feedHtml;
        })     
    })

document.getElementById('postSubmit').addEventListener('click', () => {
    let title = document.getElementById('titleInput').value;
    let description = document.getElementById('descriptionInput').value;

    fetch('/api/post', {
        method:'post',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: '{"title": "' + title + '", "description": "' + description + '"}'
    }).then(function(response) {
        if (response.status !== 200) {
            console.log('problem with ajax call ' + response.status + " msg: ");
        }
        getFeed();
        return;
    
    });
});
}