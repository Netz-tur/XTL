"use strict";

window.addEventListener('load', function() {

    let div_img_guarantee = document.getElementById("div_img_guarantee");

    let img_guarantee = document.getElementById("img_guarantee");

    let div_text_5_year = document.getElementById("div_text_5_year");

    let text_5_year = document.getElementById("text_5_year");

    let div_text_20_people = document.getElementById("div_text_20_people");

    let text_20_people = document.getElementById("text_20_people");




    // let time_block;

    let time_animation = 30;

    let counter_img = 0;

    let counter_one = 0;




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

        let counter = 0;

        let counter_02 = 0;

        let counter_img = 0;

        if (counter_one < 1) {

            counter_one = counter_one + 1;


            setInterval(function() {

                if (counter < 4) {
                    counter = counter + 1;
                    text_5_year.innerHTML = counter;

                    if (counter == 4) {
                        text_5_year.innerHTML = "+ 5";
                    }
                }

            }, 150);


            setInterval(function() {

                if (counter_02 < 19) {
                    counter_02 = counter_02 + 1;
                    text_20_people.innerHTML = counter_02;


                    if (counter_02 == 19) {
                        text_20_people.innerHTML = "+ 20";
                    }
                }


            }, 130);


            setInterval(function() {

                if (counter_img < 14) {
                    counter_img = counter_img + 0.1;
                    div_img_guarantee.style.right = counter_img + "vw";
                    div_img_guarantee.style.timing.function = ease;

                }


            }, 5);


        }











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
    setTimeout(handler, 650);

})