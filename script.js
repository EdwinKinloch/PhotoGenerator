

$.getJSON('https://api.unsplash.com/photos/random/?client_id=6caf1758c800234726cbbf3ed443fb1a53b66304f32d7447f72900bb2ed5c51c', function(data){
    console.log(data);
    var photoDescription = data.alt_description;
    var imageURL = data.urls.regular;
   
    $('#picture').append('<img src=' + imageURL + '>');
    $('#pictureCaption').append('<p>' + photoDescription + '</p>');

});