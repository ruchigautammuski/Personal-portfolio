$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    
    });

    $('window').on('scroll load',function(){

        $('#mennu').removeClass('fa-times');
        $('header').removeClass('toggle');
    
    });

    //smooth scrolling

    



});
    