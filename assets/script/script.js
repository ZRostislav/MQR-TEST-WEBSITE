const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");

menuToggle.onclick = function () {
  navigation.classList.toggle("open");
  menuToggle.classList.toggle("open");
};

const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

//Slides

function slidesPlugins(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide");
  // const news__slides = document.querySelectorAll(".news__slide");

  slides[activeSlide].classList.add("active");
  // news__slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();

      slide.classList.add("active");
      // news__slide.classList.add("active")
    });
  }


  // for (const slide of slides) {
  //   slide.addEventListener("click", () => {
  //     clearActiveClasses();

  //     news__slides.classList.add("active");
  //   });
  // }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    // news__slides.forEach((news__slide) => {
    //   news__slide.classList.remove("active");
    // });
  }
}

// function News(activeNews = 0) {
//     const news__slides = document.querySelectorAll(".news__slide");

//     news__slides[activeNews].classList.add("active");

//     for (const news__slide of news__slides) {
//       news__slide.addEventListener("click", () => {
//         clearActiveClassesNews();

//         news__slide.classList.add("active");
//       });
//     }

//     function clearActiveClassesNews() {
//       news__slides.forEach((news__slide) => {
//         news__slide.classList.remove("active");
//       });
//     }
//   }

slidesPlugins(0);

//NEWS

// function toggleId() {
//   var element = document.getElementById("news__slide__id");
//   if (element.id === "news__slide__id") {
//     element.id = "new-id";
//   } else {
//     element.id = "news__slide__id";
//   }
// }

function changeColor1() {
  var element = document.getElementById("news__slide__id");
  element.style.backgroundImage = "url('https://s5.picofile.com/file/8108214000/Game_News.jpg')";
}

function changeColor2() {
  var element = document.getElementById("news__slide__id");
  element.style.backgroundImage = "url('https://static10.tgstat.ru/channels/_0/4b/4b201708fc5948106c2ef8d88bdb74ee.jpg')";
}

function changeColor3() {
  var element = document.getElementById("news__slide__id");
  element.style.backgroundImage = "url('https://s5.picofile.com/file/8108214000/Game_News.jpg')";
}

function changeColor4() {
  var element = document.getElementById("news__slide__id");
  element.style.backgroundImage = "url('https://static10.tgstat.ru/channels/_0/4b/4b201708fc5948106c2ef8d88bdb74ee.jpg')";
}

function changeColor5() {
  var element = document.getElementById("news__slide__id");
  element.style.backgroundImage = "url('https://s5.picofile.com/file/8108214000/Game_News.jpg')";
}

var changeColorButton = document.getElementById("sliders__idv1");
changeColorButton.addEventListener("click", changeColor1);

var changeColorButton = document.getElementById("sliders__idv2");
changeColorButton.addEventListener("click", changeColor2);

var changeColorButton = document.getElementById("sliders__idv3");
changeColorButton.addEventListener("click", changeColor3);

var changeColorButton = document.getElementById("sliders__idv4");
changeColorButton.addEventListener("click", changeColor4);

var changeColorButton = document.getElementById("sliders__idv5");
changeColorButton.addEventListener("click", changeColor5);

changeColor1();




