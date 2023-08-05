let curr_page = [];
let is_menu_present = false;
let scroll_debounce = true;
const menu = document.querySelector("#mobile-menu");
const menulinks = document.querySelector(".navbar__menu");
const down_arrow = $("#down_arrow");
const navbar_menu = $(".navbarmenu");
const img1 = $(".img_1");
const img2 = $(".img_2");
const img3 = $(".img_3");
const img4 = $(".img_4");
const img5 = $(".img_5");
const img6 = $(".img_6");
const img7 = $(".img_7");
const img8 = $(".img_8");
const img9 = $(".img_9");
const img10 = $(".img_10");
const img11 = $(".img_11");
const img12 = $(".img_12");
const img13 = $(".img_13");
const img14 = $(".img_14");
const img15 = $(".img_15");
const img16 = $(".img_16");
const img17 = $(".img_17");
const img18 = $(".img_18");
const img19 = $(".img_19");
const img20 = $(".img_20");
const img21 = $(".img_21");
const img22 = $(".img_22");
const img23 = $(".img_23");
const img24 = $(".img_24");
const img25 = $(".img_25");
const img26 = $(".img_26");
const img27 = $(".img_27");
const img28 = $(".img_28");

$("body").append(
  '<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>'
);
$(window).on("load", function () {
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader() {
  $("#loadingDiv").fadeOut(500, function () {
    $("#loadingDiv").remove();
  });
}

$(window).bind("mousewheel", function (event) {
  if (event.originalEvent.wheelDelta >= 20 && scroll_debounce) {
    console.log("Scroll up", event.originalEvent.wheelDelta);
    scroll_debounce = false;
    if (curr_page[curr_page.length - 1] == 1) {
      curr_page.pop();
      img1.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-left both"
      );
      img2.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-right both"
      );
      img3.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-right both"
      );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 2) {
      curr_page.pop();
      img4.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-right both"
      );
      img5.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-right both"
      );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 3) {
      curr_page.pop();
      img6.css("animation", "1.2s left-to-right both");
      img7.css("animation", "1.2s left-to-right both");
      img8.css("animation", "1.2s right-to-invisible both");
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 4) {
      curr_page.pop();
      img9.css("animation", "1.2s wipe-out-right both");
      img10.css("animation", "1.2s wipe-out-right both");
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 5) {
      curr_page.pop();
      img11.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-left both"
      );
      img12.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-right both"
      );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 6) {
      curr_page.pop();
      img13.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-up both"
      );
      img14.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-down both"
      );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 7) {
      curr_page.pop();
      img15.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-left both"
      );
      img16.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-right both"
      );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 8) {
      curr_page.pop();
      img17.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-up both"
      );
      img18.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-down both"
      );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 9) {
      curr_page.pop();
      img19.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-left both"
      );
      img20.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-left both"
      );
      img21.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-right both"
      );
      img22.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-right both"
      );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 10) {
      curr_page.pop();
      img23.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-right both"
      );
      img24.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-right both"
      );
      img25.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-right both"
      );
      img26.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-right both"
      );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 11) {
      curr_page.pop();
      img27.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-down both"
      );
      img28.css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-up both"
      );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 12) {
      curr_page.pop();
      navbar_menu.removeClass("navbar_menu");
      down_arrow.css("rotate", "-0deg");
      menu.classList.toggle("is-active");
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    }
  } else if (event.originalEvent.wheelDelta <= -20 && scroll_debounce) {
    console.log("Scroll down", event.originalEvent.wheelDelta);
    scroll_debounce = false;
    if (!curr_page[0]) {
      console.log("1");
      curr_page.push(1);
      img1
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-right-100 both"
        );
      img2
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both"
        );
      img3
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both"
        );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 1) {
      console.log("2");
      curr_page.push(2);
      img4
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both"
        );
      img5
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both"
        );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 2) {
      console.log("3");
      curr_page.push(3);
      img6
        .css("display", "block")
        .css("z-index", "2")
        .css("animation", "1.2s right-to-left both");
      img7
        .css("display", "block")
        .css("z-index", "2")
        .css("animation", "1.2s right-to-left both");
      img8
        .css("display", "block")
        .css("z-index", "2")
        .css(
          "animation",
          "1.2s cubic-bezier(0.25, 1, 0.3, 1) right-to-visible both"
        );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 3) {
      console.log("4");
      curr_page.push(4);
      img9
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both"
        );
      img10
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both"
        );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 4) {
      console.log("5");
      curr_page.push(5);
      img11
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-right-100 both"
        );
      img12
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both"
        );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 5) {
      console.log("6");
      curr_page.push(6);
      img13
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-down both"
        );
      img14
        .css("z-index", "2")
        .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-up both");
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 6) {
      console.log("7");
      curr_page.push(7);
      img15
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-right-100 both"
        );
      img16
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both"
        );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 7) {
      console.log("8");
      curr_page.push(8);
      img17
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-down both"
        );
      img18
        .css("z-index", "2")
        .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-up both");
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 8) {
      console.log("9");
      curr_page.push(9);
      img19
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-right-100 both"
        );
      img20
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-right-100 both"
        );
      img21
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both"
        );
      img22
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both"
        );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 9) {
      console.log("10");
      curr_page.push(10);
      img23
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both"
        );
      img24
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both"
        );
      img25
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both"
        );
      img26
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both"
        );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 10) {
      console.log("11");
      curr_page.push(11);
      img27
        .css("z-index", "2")
        .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-up both");
      img28
        .css("z-index", "2")
        .css(
          "animation",
          "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-down both"
        );
      setTimeout(function () {
        scroll_debounce = true;
      }, 1000);
    } else if (curr_page[curr_page.length - 1] == 11) {
      console.log("12");
      curr_page.push(12);
      menu.classList.toggle("is-active");
      navbar_menu.addClass("navbar_menu");
      down_arrow.css("rotate", "180deg");
    }
    setTimeout(function () {
      scroll_debounce = true;
    }, 1000);
  }
});
menu.addEventListener("click", function () {
  if (curr_page[curr_page.length - 1] == 12) {
    curr_page.pop();
    navbar_menu.removeClass("navbar_menu");
    down_arrow.css("rotate", "-0deg");
  } else if (is_menu_present) {
    navbar_menu.removeClass("navbar_menu");
    $(".down_arr_class").css("display", "flex");
    $(".down_arr_class").css("z-index", "3");
    is_menu_present = false;
  } else if (!is_menu_present) {
    navbar_menu.addClass("navbar_menu");
    $(".down_arr_class").css("z-index", "-1");
    is_menu_present = true;
  }
  menu.classList.toggle("is-active");
});

down_arrow.on("click", function () {
  if (!curr_page[0]) {
    console.log("1");
    curr_page.push(1);
    img1
      .css("z-index", "2")
      .css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-right-100 both"
      );
    img2
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both");
    img3
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both");
  } else if (curr_page[curr_page.length - 1] == 1) {
    console.log("2");
    curr_page.push(2);
    img4
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both");
    img5
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both");
  } else if (curr_page[curr_page.length - 1] == 2) {
    console.log("3");
    curr_page.push(3);
    img6
      .css("display", "block")
      .css("z-index", "2")
      .css("animation", "1.2s right-to-left both");
    img7
      .css("display", "block")
      .css("z-index", "2")
      .css("animation", "1.2s right-to-left both");
    img8
      .css("display", "block")
      .css("z-index", "2")
      .css(
        "animation",
        "1.2s cubic-bezier(0.25, 1, 0.3, 1) right-to-visible both"
      );
  } else if (curr_page[curr_page.length - 1] == 3) {
    console.log("4");
    curr_page.push(4);
    img9
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both");
    img10
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both");
  } else if (curr_page[curr_page.length - 1] == 4) {
    console.log("5");
    curr_page.push(5);
    img11
      .css("z-index", "2")
      .css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-right-100 both"
      );
    img12
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both");
  } else if (curr_page[curr_page.length - 1] == 5) {
    console.log("6");
    curr_page.push(6);
    img13
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-down both");
    img14
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-up both");
  } else if (curr_page[curr_page.length - 1] == 6) {
    console.log("7");
    curr_page.push(7);
    img15
      .css("z-index", "2")
      .css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-right-100 both"
      );
    img16
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both");
  } else if (curr_page[curr_page.length - 1] == 7) {
    console.log("8");
    curr_page.push(8);
    img17
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-down both");
    img18
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-up both");
  } else if (curr_page[curr_page.length - 1] == 8) {
    console.log("9");
    curr_page.push(9);
    img19
      .css("z-index", "2")
      .css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-right-100 both"
      );
    img20
      .css("z-index", "2")
      .css(
        "animation",
        "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-right-100 both"
      );
    img21
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both");
    img22
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both");
  } else if (curr_page[curr_page.length - 1] == 9) {
    console.log("10");
    curr_page.push(10);
    img23
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both");
    img24
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both");
    img25
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both");
    img26
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-left both");
  } else if (curr_page[curr_page.length - 1] == 10) {
    console.log("11");
    curr_page.push(11);
    img27
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-up both");
    img28
      .css("z-index", "2")
      .css("animation", "1.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-down both");
  } else if (curr_page[curr_page.length - 1] == 11) {
    console.log("12");
    curr_page.push(12);
    menu.classList.toggle("is-active");
    navbar_menu.addClass("navbar_menu");
    down_arrow.css("rotate", "180deg");
  } else if (curr_page[curr_page.length - 1] == 12) {
    curr_page = [];
    $(".img_1").css("z-index", "-2").css("animation", "");
    $(".img_2").css("z-index", "-2").css("animation", "");
    $(".img_3").css("z-index", "-2").css("animation", "");
    $(".img_4").css("z-index", "-2").css("animation", "");
    $(".img_5").css("z-index", "-2").css("animation", "");
    $(".img_6").css("z-index", "-2").css("animation", "");
    $(".img_7").css("z-index", "-2").css("animation", "");
    $(".img_8").css("z-index", "-2").css("animation", "");
    $(".img_9").css("z-index", "-2").css("animation", "");
    $(".img_10").css("z-index", "-2").css("animation", "");
    $(".img_11").css("z-index", "-2").css("animation", "");
    $(".img_12").css("z-index", "-2").css("animation", "");
    $(".img_13").css("z-index", "-2").css("animation", "");
    $(".img_14").css("z-index", "-2").css("animation", "");
    $(".img_15").css("z-index", "-2").css("animation", "");
    $(".img_16").css("z-index", "-2").css("animation", "");
    $(".img_17").css("z-index", "-2").css("animation", "");
    $(".img_18").css("z-index", "-2").css("animation", "");
    $(".img_19").css("z-index", "-2").css("animation", "");
    $(".img_20").css("z-index", "-2").css("animation", "");
    $(".img_21").css("z-index", "-2").css("animation", "");
    $(".img_22").css("z-index", "-2").css("animation", "");
    $(".img_23").css("z-index", "-2").css("animation", "");
    $(".img_24").css("z-index", "-2").css("animation", "");
    $(".img_25").css("z-index", "-2").css("animation", "");
    $(".img_26").css("z-index", "-2").css("animation", "");
    $(".img_27").css("z-index", "-2").css("animation", "");
    $(".img_28").css("z-index", "-2").css("animation", "");
    navbar_menu.removeClass("navbar_menu");
    down_arrow.css("rotate", "-0deg");
  }
});

navbar_menu.on("click", function () {
  curr_page.pop();
  menu.classList.toggle("is-active");
  navbar_menu.removeClass("navbar_menu");
  down_arrow.css("rotate", "-0deg");
});
