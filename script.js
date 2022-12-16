/* Прокручивает страницу вверх при нажатии на кнопку */
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});

$(document).ready(function(){

    $(".navigation-mob").on("click", function () {
        
        let checkboxStatus = $(".checkbox").prop('checked', false);
                
    })

    if ($('checkbox').is(':checked')) {
        $(".grey-phone").css({"display": "none"}); 
        $(".white-phone").css({"display": "none"}); 
        $("html").css({"scroll-behavior": "smooth"});
    
    }

    
}); 

