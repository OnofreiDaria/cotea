toggleNav();
filter();
filterSlider();
function toggleNav(){
    $(".open-btn").click(function(e){
        $(".block-nav").addClass("open-nav");
        document.body.style.overflowY = "hidden";
        e.stopPropagation();
    });
    $(".mob-btn").click(function(){
        $(".block-nav").removeClass("open-nav");
        document.body.style.overflowY = "auto";
    });
    $("body").click(function(e){
        e.stopPropagation();
        $(".block-nav").removeClass("open-nav");
    });
    $(".block-nav").click(function(e){
        e.stopPropagation();
    });
}
// SEARCH
$(document).ready(function() {
    $("#close-search").on("click", function(){
        
        $("#search").css({"visibility": "hidden", "opacity" : "0"} );
    });
});
$(document).ready(function() {
    $("body").on("click", function(){
        $("#search").css({"visibility": "hidden", "opacity" : "0"} );
    });
});

$('#search .input-group').on('click', function(e) {
    e.stopPropagation();
    console.log('click')
})

$(document).ready(function() {
    $(".search").on("click", function(){
        $("#search").css({"visibility": "visible", "opacity" : "1"} );
    });
});

// MENU
window.menuBtnIsActive = false;

menuClick();


function menuClick() {
    var checkMobile = isMobile();

    if (checkMobile == true) {
        if( window.menuBtnIsActive == false){
            $('.menu-arrow-bottom').on('click', function(){
                console.log('blalal')
                var sub = $(this).next('.nav-category-sub');
                if(sub.hasClass('expand')) {
                    sub.removeClass('expand')
                } else {
                    sub.addClass('expand')
                }
            })

            window.menuBtnIsActive = true;
        }

    } else {
        $('.menu-arrow-bottom').unbind('click')
        window.menuBtnIsActive = false;
    }
}

$(window).on('resize', function(){
    menuClick();
})

$(window).on('click', function(){
    $('.nav-category-sub').removeClass('expand')
})
$('.nav-category-li, ul').on('click', function(e){
    e.stopPropagation()
})


function isMobile(){
    var isMobile = false;

    if ($(window).width() <= 767) {
        isMobile = true
    }

    return isMobile;
}

// SUB MENU
$('.btn-sub-li').on('click', function(){
    $(this).closest('.nav-sub-li').find('.mob-hidden').removeClass('mob-hidden');
    $(this).css({"visibility": "hidden", "opacity" : "0", "display" : "none"} );
})

$('.dropdown-nav').on('click',function(){
    if($('.sub-nav').hasClass('sub-nav-mob')){
        $(this).closest('.dropdown-nav').find('.sub-nav').removeClass('sub-nav-mob');
    } else {
        $(this).closest('.dropdown-nav').find('.sub-nav').addClass('sub-nav-mob');
    }
    
})
$('.log').on('click',function(){
    $('.preloader-cont').css({"visibility": "visible", "opacity" : "1"} )
})
// TABS
$(document).ready(function(){

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current-tab');
        $('.tab-content').removeClass('current-tab');

        $(this).addClass('current-tab');
        $("#"+tab_id).addClass('current-tab').fadeIn();
    })

});
$(document).ready(function(){

    $('ul.tabs2 li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs2 li').removeClass('current-nav-tab');
        $('.tab-content').removeClass('current-nav-tab');

        $(this).addClass('current-nav-tab');
        $("#"+tab_id).addClass('current-nav-tab').fadeIn();
    })

});

// MAIN MENU

$(document).ready(function() {
    $('.dropdown').on("click",function(e){
        e.stopPropagation();
        $(this).find(" > .sub-nav").toggleClass("visible-nav");
        $(this).siblings().find(".sub-nav").removeClass("visible-nav");

    });
});


// Testimonial
var testimonial = new Swiper('.testemonials .swiper-container', {
    nextButton: '.testimonial-arrow-right',
    prevButton: '.testimonial-arrow-left',
    slidesPerView: 1,
    spaceBetween: 30,
    simulateTouch: true,
    speed: 1000,
    autoplay: 5000,
    loop: true
});
// Slider Products
var products = new Swiper('.block-products-sale .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,
    simulateTouch: true,
    breakpoints: {
        1300: {
            slidesPerView: 3,
            spaceBetween: 20

        },
        967: {
            slidesPerView: 4,
            spaceBetween: 20

        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
            autoplay: 1500,
            loop: true
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        }
    }
});
var stock = new Swiper('.stock-week .swiper-container', {
    loop:true,
    slidesPerView: 5,
    spaceBetween: 10,
    autoplay: 5000,
    speed: 1000,
    simulateTouch: true,
    nextButton: '.swip-arrow-right',
    prevButton: '.swip-arrow-left',
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("btn-active");
        this.nextElementSibling.classList.toggle("show-accordion");
    }
}

// Filter
function filter() {
    if ( $('.filter').length <= 0) {
        return false;
    }

    $('.btn-open-filter').on('click', function() {
        if ( $('.filter').hasClass('open-filter') ) {
            console.log("close filter");
            $('.filter').removeClass('open-filter');
            $("body").css("overflow", "auto");
            $(".ic-close-filter").css({"visibility": "hidden", "opacity": "0"});
            $(".ic-open-filter").css({"visibility": "visible", "opacity": "1"});
        } else {
            $('.filter').addClass('open-filter');
            $("body").css("overflow", "hidden");
            $(".filter").css("overflowY", "scroll");
            $(".ic-open-filter").css({"visibility": "hidden", "opacity": "0"});
            $(".ic-close-filter").css({"visibility": "visible", "opacity": "1"});
        }

    })
}
function filterSlider() {
    if ($('#range-slider').length <= 0) {
        return false;
    }

    $('#range-slider').slider({
        range: true,
        values: [300, 700],
        min: 1,
        max: 1000,
        animate: 'fast',
        step: 1,
        slide: function(e, u) {
            var val = $('#range-slider').slider('option', 'values')
            $('#price-min').val(val[0])
            $('#price-max').val(val[1])
        }
    });
}

$('#product-list').on('click', function(){
    $('.product-container').fadeOut(0, function(){
        $('.product-container').addClass('product-list');
        $('#product-block').removeClass('new-active');
        $('#product-list').addClass('new-active');
    }).fadeIn(500)
})

$('#product-block').on('click', function(){
    $('.product-container').fadeOut(0, function(){
        $('.product-container').removeClass('product-list');
        $('#product-list').removeClass('new-active');
        $('#product-block').addClass('new-active');
    }).fadeIn(500)
})

// BUTTON FOR INPUT amount

$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

// PRODUCT-IMAGE-SLIDER

var galleryTop = new Swiper('.gallery-top', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    simulateTouch: true,
    centeredSlides: true,
    spaceBetween: 10
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    // centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true
});
galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop;

// SETS

var set = new Swiper('.sets .swiper-container', {
    paginationClickable: true,
    nextButton: '.set-arrow-right',
    prevButton: '.set-arrow-left',
    simulateTouch: true,
    spaceBetween: 30,
    autoplay: 5000,
    speed: 1000,
    loop:true
});

var relatedProducts = new Swiper('.products-rel .swiper-container', {
        nextButton: '.products-rel .related-arrow-right',
        prevButton: '.products-rel .related-arrow-left',
        slidesPerView: 4,
        spaceBetween: 30,
        simulateTouch: true,
        loop:true,
        speed:1000,
        breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        550: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
    });

var viewedProducts = new Swiper('.products-viewed .swiper-container', {
        nextButton: '.products-viewed .related-arrow-right',
        prevButton: '.products-viewed .related-arrow-left',
        slidesPerView: 4,
        spaceBetween: 30,
        simulateTouch: true,
        loop:true,
        speed:1000,
        breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        550: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
    });

// Sumoselect
if ($('.orderby').length > 0) {
    $(document).ready(function () {
        $('.orderby').SumoSelect({
            selectAll: false
        });
    });
}

// SHow message Product add in cart
$('.add-cart').on('click', function() {
    showProductMessage(this);
});

function showProductMessage(elm){
    var addProductEl = $(elm).closest('.product-container').find('.added-product');

    addProductEl.addClass('show-product');

    setTimeout(function(){
        addProductEl.removeClass('show-product')
    }, 2000)
}
// Modal windows

var modal = (function() {

    // Cache
    var $modal = $('.modal')
    var $btn = $('.openModal')
    var $close = $modal.find('.modal_close')

    // Events
    $btn.on('click', showModal)
    $modal.on('click', hideModal)

    // Functions
    function showModal(e){
        var id = $(e.target).attr('data-modal')
        $(id).addClass('show')
    }

    function hideModal(e){
        if ($(e.target).hasClass('modal_close') || 
            $(e.target).hasClass('modal')) {

            $modal.removeClass('show')
        }
    }

    return {
        modals: $modal
    }

})();

hiddenErrorText();

$('.form-next').on('click',function(){
    var contInput = $(this).closest('.checkout-step');
    var valid = formValidation(contInput);

    if (valid == true) {
        accordOpen(contInput);
        createCard();
        $('.form-section input').val('');
    }
});

function formValidation(cont){
    var success = false;
    var arr = cont.find('input:not([data-optional])');
    

    for( var i = 0; i < arr.length; i++){
       if($(arr[i]).val() == ''){
            $(arr[i]).next().removeClass('error-hidden');

       } 
    } 

    if($('.form-section .error-hidden').length == arr.length ) {
        success = true;
    }
    

    return success;
}

function accordOpen(nextId) {
    nextId.next().addClass('show-accordion');
}

function createCard(){
    cloneCard();
    var cardsLength = $('.field-address').length;
    var card = $('.field-address').eq(-1);
    var firstName = $('.first-name').val();
    var lastName = $('.last-name').val();
    var country = $('.cart-country').val();
    var city = $('.cart-city').val();
    var region = $('.cart-state').val();
    var postCode = $('.cart-postcode').val();
    var adr1 = $('.cart-adr1').val();
    var tel = $('.cart-tel').val();
    var email = $('.cart-mail').val();

    
    card.find($('.user-name')).html(firstName + ' ' + lastName );
    card.find($('.street')).html(country + ', ' + city + ', ' +  region);
    card.find($('.place')).html(postCode + ', ' + adr1);
    card.find($('.user-tel')).html(tel);
    card.find($('.user-email')).html(email);
}

newAddress();
function newAddress(){
    $('.add-new-address').on('click', function () {
        var destination = $('#scroll-top').offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        $('.form-section input').val('');
        $('.form-section .first-name').focus();
     })
};

function cloneCard() {
    var cloneCard = $('#address1').clone();
    var existedCardsLength = $('.field-address').length;
    cloneCard.find('input').attr('id', 'adr' + existedCardsLength)
    cloneCard.find('label').attr('for', 'adr' + existedCardsLength)

    cloneCard.find('.num-adr').html(existedCardsLength )
    cloneCard.css({'display' : 'block'});
    cloneCard.insertBefore($('.add-new-address'))
}

 function hiddenErrorText(){

    $('.form-section input').keyup(function(){
        if($(this).val() == '') {
            $(this).next().removeClass('error-hidden');
        } else {

            $(this).next().addClass('error-hidden');
        }
    });
 };

btnRemoveAdr();
// Remove field-address
function btnRemoveAdr() {
    $( ".add-adr" ).on('click', '.btn-remove', function() {
        $(this).closest( ".field-address" ).remove();
    });
}
// Open Payment Method
$('.form-next-step2').on('click', function(){
    $(this).closest('.checkout-step').next().addClass('show-accordion');
})
