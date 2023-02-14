theme1 = {
  /* background 1*/
  "--main-bg": "hsl(222, 26%, 31%)",
  "--keypad-bg": "hsl(223, 31%, 20%)",
  "--screen-bg": "hsl(224, 36%, 15%)",

  /*Text 1*/
  "--text-blue": "hsl(221, 14%, 31%)",
  "--text-white": "hsl(0, 0%, 100%)",
  "--screen-text": "hsl(0, 0%, 100%)",

  /*Keys 1*/
  "--keys-func-bg": "hsl(225, 21%, 49%)",
  "--keys-func-hover": "hsl(225, 51%, 76%)",
  "--keys-func-shadow": "hsl(224, 28%, 35%)",

  "--keys-equal-bg": "hsl(6, 63%, 50%)",
  "--keys-equal-hover": "hsl(6, 93%, 67%)",
  "--keys-equal-shadow": "hsl(6, 70%, 34%)",

  "--keys-bg": "hsl(30, 25%, 89%)",
  "--keys-hover": "hsl(0, 0%, 100%)",
  "--keys-shadow": "hsl(28, 16%, 65%)",
};
theme2 = {
  /* background 2*/
  "--main-bg": "hsl(0, 0%, 90%)",
  "--keypad-bg": "hsl(0, 5%, 81%)",
  "--screen-bg": "hsl(0, 0%, 93%)",

  /*Text 2*/
  "--text-blue": "hsl(60, 10%, 19%)",
  "--text-white": "hsl(0, 0%, 100%)",
  "--screen-text": "hsl(221, 14%, 31%)",

  /*Keys 2*/
  "--keys-func-bg": "hsl(185, 42%, 37%)",
  "--keys-func-hover": "hsl(1185, 62%, 64%)",
  "--keys-func-shadow": "hsl(185, 58%, 25%)",

  "--keys-equal-bg": "hsl(25, 98%, 40%)",
  "--keys-equal-hover": "hsl(26, 38%, 70%)",
  "--keys-equal-shadow": "hsl(25, 99%, 27%)",

  "--keys-bg": "hsl(45, 7%, 89%)",
  "--keys-hover": "hsl(0, 0%, 100%)",
  "--keys-shadow": "hsl(35, 11%, 61%)",
};
theme3 = {
  /* background 3*/
  "--main-bg": "hsl(268, 75%, 9%)",
  "--keypad-bg": "hsl(268, 99%, 30%)",
  "--screen-bg": "hsl(268, 71%, 12%)",

  /*Text 3*/
  "--text-blue": "hsl(52, 100%, 62%)",
  "--text-white": "hsl(0, 0%, 100%)",
  "--screen-text": "hsl(52, 100%, 62%)",

  /*Keys 3*/
  "--keys-func-bg": "hsl(281, 89%, 26%)",
  "--keys-func-hover": "hsl(283, 99%, 76%)",
  "--keys-func-shadow": "hsl(285, 91%, 52%)",

  "--keys-equal-bg": "hsl(176, 100%, 44%)",
  "--keys-equal-hover": "hsl(176, 93%, 67%)",
  "--keys-equal-shadow": "hsl(177, 92%, 70%)",

  "--keys-bg": "hsl(268, 47%, 21%)",
  "--keys-hover": "hsl(0, 0%, 100%)",
  "--keys-shadow": "hsl(290, 70%, 36%)",
};

var buttons = document.querySelectorAll(".toggle");
var lastActive = 0;
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", function () {
    buttons[lastActive].classList.remove("active");
    button.classList.add("active");
    lastActive = i;

    applyTheme(i);
    console.log("lastActive", lastActive);
  });
}

themes = [theme1, theme2, theme3];

function applyTheme(index) {
  const rootEl = document.querySelector(":root");

  const selectedTheme = themes[index];

  for (let key in selectedTheme) {
    rootEl.style.setProperty(key, selectedTheme[key]);
  }
}

applyTheme(0);
