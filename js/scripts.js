$(document).ready(function(){
    // Activate #playPauseCarousel
    $('#indexCarousel').carousel({ interval: 3000 });
    $('#carouselBtnControl').click(function(){
        if ($('#carouselBtnControl').children('span').hasClass('fa-pause')) {
            $('#indexCarousel').carousel('pause');
            $('#carouselBtnControl').children('span').removeClass('fa-pause');
            $('#carouselBtnControl').children('span').addClass('fa-play');
        }
        else if ($('#carouselBtnControl').children('span').hasClass('fa-play')) {
            $('#indexCarousel').carousel('cycle');
            $('#carouselBtnControl').children('span').removeClass('fa-play');
            $('#carouselBtnControl').children('span').addClass('fa-pause');
        }
    });
    
    // Activate modal button
    $('#reserveTableBtn').click(function(){
        $('#reserveTable').modal('toggle');
    });
    $('#loginModalBtn').click(function(){
        $('#loginModal').modal('toggle');
    });
});