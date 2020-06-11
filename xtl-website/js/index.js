"use strict";

window.addEventListener('load', function() {

    let div_cookies = document.getElementById('div_cookies');

    let cookies_button = document.getElementById('cookies_button');

    let text_cokies_ok = document.getElementById('text_cokies_ok');

    let text_long_cookies = document.getElementById('text_long_cookies');

    let text_cookies_more_detail = document.getElementById('text_cookies_more_detail');

    let img_option = document.getElementById('img_option');

    let div_your_acount = document.getElementById('div_your_acount');

    let input_button_send = document.getElementById("input_button_send");

    let div_haupt_web_text = document.getElementById("div_haupt_web_text");

    let div_haupt_long_web_text = document.getElementById("div_haupt_long_web_text");

    function text_img_netz() {





        let img_index_fb = document.getElementById("img_index_fb");

        let img_index_in = document.getElementById("img_index_in");

        let img_index_telegram = document.getElementById("img_index_telegram");

        let img_index_vk = document.getElementById("img_index_vk");

        let img_gmail = document.getElementById("img_index_gmail");

        let img_tw = document.getElementById("img_tw");

        let img_inni = document.getElementById("img_inni");

        img_index_fb.title.style.animation.delay = "0s";



    }






    div_your_acount.style.display = "none";


    // input_button_send.onclick = function() {

    //     if () {


    //     } else {

    //     }

    // };

    // cookies_button.onclick = function() {

    //     div_cookies.style.display = "none"; // скрыть

    //     cookies_button.style.display = "none";

    //     text_cokies_ok.style.display = "none";

    //     text_long_cookies.style.display = "none";

    //     text_cookies_more_detail.style.display = "none";
    // };



    // text_cokies_ok.onclick = function() {

    //     div_cookies.style.display = "none"; // скрыть

    //     cookies_button.style.display = "none";

    //     text_cokies_ok.style.display = "none";

    //     text_long_cookies.style.display = "none";

    //     text_cookies_more_detail.style.display = "none";
    // };

    img_option.onclick = function() {

        if (div_your_acount.style.display == "none") {

            div_your_acount.style.display = "block";
        } else {
            div_your_acount.style.display = "none";
        }





    }

    function animation_web() {
        let start = Date.now(); // запомнить время начала

        let timer = setInterval(function() {
            // сколько времени прошло с начала анимации?
            let timePassed = Date.now() - start;

            if (timePassed >= 2000) {
                clearInterval(timer); // закончить анимацию через 2 секунды
                return;
            }

            // отрисовать анимацию на момент timePassed, прошедший с начала анимации
            draw(timePassed);

            // в то время как timePassed идёт от 0 до 2000
            // left изменяет значение от 0px до 400px
            function draw(timePassed) {


            }

            clearInterval(timer);

        }, 20);

        // в то время как timePassed идёт от 0 до 2000
        // left изменяет значение от 0px до 400px





    }




})