function scrollToTalk() {
    var talksection = document.getElementById("talksection");

    talksection.scrollIntoView({ behavior: "smooth" });
}

$(document).ready(function () {
    $(".testimonial .indicators li").click(function () {
        var i = $(this).index();
        var targetElement = $(".testimonial .tabs li");
        targetElement.eq(i).addClass('active');
        targetElement.not(targetElement[i]).removeClass('active');
    });
    $(".testimonial .tabs li").click(function () {
        var targetElement = $(".testimonial .tabs li");
        targetElement.addClass('active');
        targetElement.not($(this)).removeClass('active');
    });
});
$(document).ready(function () {
    $(".slider .swiper-pagination span").each(function (i) {
        $(this).text(i + 1).prepend("0");
    });
});   

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');

    if (window.scrollY > 30) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
function showLoadingScreen() {
    document.querySelector('.preloader').style.display = 'block';
    document.querySelector('.preloader-icon').style.display = 'block';
}

function hideLoadingScreen() {
    document.querySelector('.preloader').style.display = 'none';
    document.querySelector('.preloader-icon').style.display = 'none';
}
showLoadingScreen();


setTimeout(function () {

    hideLoadingScreen();
}, 2700); 