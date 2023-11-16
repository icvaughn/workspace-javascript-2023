// $('body').hide.fadeIn(1000,function(){alert("done");});
// console.log("I am him");

$('h1').click(function(){
    $(this).text("hide the image");
    $('img').hide();
    $('body').children('p').slideToggle();
});

//play with jQuery .each function


//update the image link
$('img').each(function(){
    var path = $(this).attr('src');
    var newpath = "img/"+ path;
    $(this).attr("src", newpath);
    console.log(newpath);


});


$('a').each(function(){
    var newparth = "https://www.google.com/";
    $(this).attr('herf',newparth);

});

