
// end: js spiner
$(document).ready(function () {
    if ($(".swiper-introduce").length) {
        var swiper2 = new Swiper(".swiper-introduce", {
            speed: 1000,
            spaceBetween: 12,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,
            autoHeight: false,
        });
    }
    if ($(".months-swiper").length) {
        const swiperMonth = new Swiper(".months-swiper", {
            slidesPerView: "auto",
            spaceBetween: 12,
            initialSlide: 5,
            centeredSlides: true,
            centeredSlidesBounds: true,
            slideToClickedSlide: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: false,
            observer: true,
            observeParents: true
        });
    }
    if ($(".days-swiper").length) {
        const swiperDay = new Swiper(".days-swiper", {
            slidesPerView: "auto",
            spaceBetween: 12,
            centeredSlides: true,
            centeredSlidesBounds: true,
            slideToClickedSlide: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: false,
            observer: true,
            observeParents: true,
        });
    }

    if ($(".cinema-swiper").length) {
        const swiperCinema = new Swiper(".cinema-swiper", {
            slidesPerView: "auto",
            spaceBetween: 16,
            slideToClickedSlide: true,
            centeredSlides: true,
            centeredSlidesBounds: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: false,
            observer: true,
            observeParents: true,
        });
    }

    const picker = new Litepicker({
        element: document.getElementById('CarDateStart'),
        elementEnd: document.getElementById('CarDateEnd'),
        parentEl: document.getElementById('CarListCalendar'),
        inlineMode: true,
        singleMode: false,
        autoRefresh: true,
        numberOfMonths: 12,
        allowRepick: true,
        lang: 'vi-VN',
        format: 'DD/MM/YYYY',
        showTooltip: false,
        tooltipText: {
            one: 'ngày',
            other: 'ngày'
        },
        tooltipNumber: (totalDays) => {
            return totalDays - 1;
        },
        setup: (picker) => {
            $('.list-choose-calendar__footer').hide();
            picker.on('selected', (date1, date2) => {
                $('.list-choose-calendar__body').css("padding-bottom", "158px");
                $('.list-choose-calendar__footer').show();
            });
        },
    });
});
