$.getJSON('https://api.unsplash.com/photos/random/?client_id=6caf1758c800234726cbbf3ed443fb1a53b66304f32d7447f72900bb2ed5c51c', function(data){
    console.log(data);
    var photoDescription = data.alt_description;
    var imageURLReg = data.urls.regular;
    var downloadLink = data.links.download;
   
    $('#picture').append('<img src=' + imageURLReg + '>');
    $('#pictureCaption').append('<p>' + photoDescription + '</p>');
    $('#downloadLink').attr('href', downloadLink);
});


$('#randomPicture').click(function(){
  $.getJSON('https://api.unsplash.com/photos/random/?client_id=6caf1758c800234726cbbf3ed443fb1a53b66304f32d7447f72900bb2ed5c51c', function(data){
    console.log(data);
    var photoDescription = data.alt_description;
    var imageURLReg = data.urls.regular;
    var downloadLink = data.links.download;
    
    $('#picture').empty();
    $('#pictureCaption').empty();
    $('#picture').append('<img src=' + imageURLReg + '>');
    $('#pictureCaption').append('<p>' + photoDescription + '</p>');
    $('#downloadLink').attr('href', downloadLink);
    });  
})



