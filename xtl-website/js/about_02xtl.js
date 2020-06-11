"use strict";

window.addEventListener('load', function() {

    let div_img_guarantee = document.getElementById("div_img_guarantee");

    let img_guarantee = document.getElementById("img_guarantee");

    let div_text_5_year = document.getElementById("div_text_5_year");

    let text_5_year = document.getElementById("text_5_year");

    let div_text_20_people = document.getElementById("div_text_20_people");

    let text_20_people = document.getElementById("text_20_people");


    // let time_block;

    // let time_animation = 30;

    // let counter_img = 0;


    function isElementInViewport(el) {
        let top = el.offsetTop;
        let left = el.offsetLeft;
        let width = el.offsetWidth;
        let height = el.offsetHeight;

        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    }



    function onVisibilityChange(el, callback) {
        let old_visible;
        return function() {
            let visible = isElementInViewport(el);
            if (visible != old_visible) {
                old_visible = visible;
                if (typeof callback == "function") {
                    callback();
                }
            }
        }
    }

    let handler = onVisibilityChange(div_img_guarantee, function() {

        let counter = 2;

        let counter_02 = 2;

        let timer = setInterval(function() {

            if (counter < 4) {
                counter = counter + 1;
                text_5_year.innerHTML = counter;

                if (counter == 4) {
                    text_5_year.innerHTML = "+ 5";
                }
            }





        }, 500);


        let timer_02 = setInterval(function() {

            if (counter_02 < 20) {
                counter_02 = counter_02 + 1;
                text_20_people.innerHTML = counter_02;
            }










        }, 200);



        function img_animation() {
            let curPosX = 1060;
            let interval;
            let n = 10;
            let width = document.documentElement.clientWidth;
            let img_width = 102;
            interval = setInterval(left, 10);

            function left() {
                div_img_guarantee.style.left = (curPosX -= n) + "vw";
                if (curPosX <= 0) {
                    clearInterval(interval);
                    interval = setInterval(right, 10);
                }
            }

        }


    })

    if (window.addEventListener) {
        addEventListener('DOMContentLoaded', handler, false);
        addEventListener('load', handler, false);
        addEventListener('scroll', handler, false);
        addEventListener('resize', handler, false);
    } else if (window.attachEvent) {
        attachEvent('onDOMContentLoaded', handler); // IE9+ :(
        attachEvent('onload', handler);
        attachEvent('onscroll', handler);
        attachEvent('onresize', handler);
    }

})