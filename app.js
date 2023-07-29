let curr_page = [];
let is_menu_present = false;
const menu = document.querySelector("#mobile-menu");
const menulinks = document.querySelector(".navbar__menu");
menu.addEventListener("click", function () {
  if (curr_page[curr_page.length - 1] == 12) {
    curr_page.pop();
    $(".navbarmenu").removeClass("navbar_menu");
    $("#down_arrow").css("rotate", "-0deg");
  }
  else if (is_menu_present) {
    $(".navbarmenu").removeClass("navbar_menu");
    $("#down_arrow").css("z-index", "2");
    is_menu_present = false;
  } else if (!is_menu_present) {
    $(".navbarmenu").addClass("navbar_menu");
    $("#down_arrow").css("z-index", "-1");
    is_menu_present = true;
  }
  menu.classList.toggle("is-active");
});

$("#down_arrow").on("click", function () {
  if (!curr_page[0]) {
    curr_page.push(1);
    $(".img_1").addClass("img1");
    $(".img_2").addClass("img2");
    $(".img_3").addClass("img3");
  } else if (curr_page[curr_page.length - 1] == 1) {
    console.log("2");
    curr_page.push(2);
    $(".img_4").addClass("img4");
    $(".img_5").addClass("img5");
  } else if (curr_page[curr_page.length - 1] == 2) {
    console.log("3");
    curr_page.push(3);
    $(".img_6").addClass("img6");
    $(".img_7").addClass("img7");
    $(".img_8").addClass("img8");
  } else if (curr_page[curr_page.length - 1] == 3) {
    console.log("4");
    curr_page.push(4);
    $(".img_9").addClass("img9");
    $(".img_10").addClass("img10");
  } else if (curr_page[curr_page.length - 1] == 4) {
    console.log("5");
    curr_page.push(5);
    $(".img_11").addClass("img11");
    $(".img_12").addClass("img12");
  } else if (curr_page[curr_page.length - 1] == 5) {
    console.log("6");
    curr_page.push(6);
    $(".img_13").addClass("img13");
    $(".img_14").addClass("img14");
  } else if (curr_page[curr_page.length - 1] == 6) {
    console.log("7");
    curr_page.push(7);
    $(".img_15").addClass("img15");
    $(".img_16").addClass("img16");
  } else if (curr_page[curr_page.length - 1] == 7) {
    console.log("8");
    curr_page.push(8);
    $(".img_17").addClass("img17");
    $(".img_18").addClass("img18");
  } else if (curr_page[curr_page.length - 1] == 8) {
    console.log("9");
    curr_page.push(9);
    $(".img_19").addClass("img19");
    $(".img_20").addClass("img20");
    $(".img_21").addClass("img21");
    $(".img_22").addClass("img22");
  } else if (curr_page[curr_page.length - 1] == 9) {
    console.log("10");
    curr_page.push(10);
    $(".img_23").addClass("img23");
    $(".img_24").addClass("img24");
    $(".img_25").addClass("img25");
    $(".img_26").addClass("img26");
  } else if (curr_page[curr_page.length - 1] == 10) {
    console.log("11");
    curr_page.push(11);
    $(".img_27").addClass("img27");
    $(".img_28").addClass("img28");
  } else if (curr_page[curr_page.length - 1] == 11) {
    console.log("12");
    curr_page.push(12);
    menu.classList.toggle("is-active");
    $(".navbarmenu").addClass("navbar_menu");
    $("#down_arrow").css("rotate", "180deg");
  } else if (curr_page[curr_page.length - 1] == 12) {
    // menulinks.classList.toggle("active");
    curr_page = [];
    $(".img_1").removeClass("img1");
    $(".img_2").removeClass("img2");
    $(".img_3").removeClass("img3");
    $(".img_4").removeClass("img4");
    $(".img_5").removeClass("img5");
    $(".img_6").removeClass("img6");
    $(".img_7").removeClass("img7");
    $(".img_8").removeClass("img8");
    $(".img_9").removeClass("img9");
    $(".img_10").removeClass("img10");
    $(".img_11").removeClass("img11");
    $(".img_12").removeClass("img12");
    $(".img_13").removeClass("img13");
    $(".img_14").removeClass("img14");
    $(".img_15").removeClass("img15");
    $(".img_16").removeClass("img16");
    $(".img_17").removeClass("img17");
    $(".img_18").removeClass("img18");
    $(".img_19").removeClass("img19");
    $(".img_20").removeClass("img20");
    $(".img_21").removeClass("img21");
    $(".img_22").removeClass("img22");
    $(".img_23").removeClass("img23");
    $(".img_24").removeClass("img24");
    $(".img_25").removeClass("img25");
    $(".img_26").removeClass("img26");
    $(".img_27").removeClass("img27");
    $(".img_28").removeClass("img28");
    $(".navbarmenu").removeClass("navbar_menu");
    $("#down_arrow").css("rotate", "-0deg");
  }
  console.log(curr_page);
});

$(".navbarmenu").on("click", function () {
  curr_page.pop();
  menu.classList.toggle("is-active");
  $(".navbarmenu").removeClass("navbar_menu");
  $("#down_arrow").css("rotate", "-0deg");
});
