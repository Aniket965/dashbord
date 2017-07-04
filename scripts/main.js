$(document).ready(function () {

    initializeSocialLinks();

})

function initializeSocialLinks() {
    $('.fa-facebook').click(function () {
        window.open("https://www.facebook.com/aniket.sharma.583671", "facebook");
    });
    $('.fa-twitter').click(function () {
        window.open("https://twitter.com/aniket965as", "twitter");
    });
    $('.fa-rss').click(function () {
        window.open("http://aniket965.tech/blog", "blog");
    });
    $('.fa-linkedin').click(function () {
        window.open("https://www.linkedin.com/in/aniket-sharma-548413131/", "linkedin");
    });
    $('.fa-medium').click(function () {
        window.open("https://medium.com/@aniket965", "medium");
    });
    $('.fa-github').click(function () {
        window.open("https://github.com/aniket965", "github");
    });

}

