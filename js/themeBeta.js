// var theme = [
//   {
//     /* background 1*/
//     "--main-bg": "hsl(222, 26%, 31%)",
//     "--keypad-bg": "hsl(223, 31%, 20%)",
//     "--screen-bg": "hsl(224, 36%, 15%)",

//     /*Text 1*/
//     "--text-blue": "hsl(221, 14%, 31%)",
//     "--text-white": "hsl(0, 0%, 100%)",

//     /*Keys 1*/
//     "--keys-func-bg": "hsl(225, 21%, 49%)",
//     "--keys-func-hover": "hsl(225, 51%, 76%)",
//     "--keys-func-shadow": "hsl(224, 28%, 35%)",

//     "--keys-equal-bg": "hsl(6, 63%, 50%)",
//     "--keys-equal-hover": "hsl(6, 93%, 67%)",
//     "--keys-equal-shadow": "hsl(6, 70%, 34%)",

//     "--keys-bg": "hsl(30, 25%, 89%)",
//     "--keys-hover": "hsl(0, 0%, 100%)",
//     "--keys-shadow": "hsl(28, 16%, 65%)",
//   },
//   {
//     /* background 2*/
//     "--main-bg": "hsl(0, 0%, 90%)",
//     "--keypad-bg": "hsl(0, 5%, 81%)",
//     "--screen-bg": "hsl(0, 0%, 93%)",

//     /*Text 2*/
//     "--text-blue": "hsl(60, 10%, 19%)",
//     "--text-white": "hsl(0, 0%, 100%)",

//     /*Keys 2*/
//     "--keys-func-bg": "hsl(185, 42%, 37%)",
//     "--keys-func-hover": "hsl(1185, 62%, 64%)",
//     "--keys-func-shadow": "hsl(185, 58%, 25%)",

//     "--keys-equal-bg": "hsl(25, 98%, 40%)",
//     "--keys-equal-hover": "hsl(26, 38%, 70%)",
//     "--keys-equal-shadow": "hsl(25, 99%, 27%)",

//     "--keys-bg": "hsl(45, 7%, 89%)",
//     "--keys-hover": "hsl(0, 0%, 100%)",
//     "--keys-shadow": "hsl(35, 11%, 61%)",
//   },
//   {
//     /* background 3*/
//     "--main-bg": "hsl(268, 75%, 9%)",
//     "--keypad-bg": "hsl(268, 99%, 30%)",
//     "--screen-bg": "hsl(268, 71%, 12%)",

//     /*Text 3*/
//     "--text-blue": "hsl(52, 100%, 62%)",
//     "--text-white": "hsl(0, 0%, 100%)",

//     /*Keys 3*/
//     "--keys-func-bg": "hsl(281, 89%, 26%)",
//     "--keys-func-hover": "hsl(283, 99%, 76%)",
//     "--keys-func-shadow": "hsl(285, 91%, 52%)",

//     "--keys-equal-bg": "hsl(176, 100%, 44%)",
//     "--keys-equal-hover": "hsl(176, 93%, 67%)",
//     "--keys-equal-shadow": "hsl(177, 92%, 70%)",

//     "--keys-bg": "hsl(268, 47%, 21%)",
//     "--keys-hover": "hsl(0, 0%, 100%)",
//     "--keys-shadow": "hsl(290, 70%, 36%)",
//   },
// ];

// var buttons = document.querySelectorAll(".toggle");
// //console.log(buttons);
// var lastActive = 0;

// const root = document.querySelector(":root");
// console.log(root["--main-bg"]);

// for (let key in Object.keys(theme)) {
//   //let btns = document.querySelectorAll(".buttons>button");

//   let btns = document.querySelectorAll(".buttons>button");
//   //console.log(key, theme[key]["--main-bg"], buttons[key]);
//   buttons[key].addEventListener("click", function () {
//     buttons[lastActive].classList.remove("active");
//     buttons[key].classList.add("active");
//     lastActive = key;
//     //var subArr = theme[key];
//     document.body.style.backgroundColor = theme[key]["--main-bg"];

//     console.log(key, theme[key]["--text-white"], theme[key]["--text-blue"]);
//     console.log(key == 0);
//     key == 0
//       ? (document.body.style.color = theme[key]["--text-white"])
//       : (document.body.style.color = theme[key]["--text-blue"]);

//     let screen = document.getElementById("scrr");
//     console.log(key, theme[key]["--screen-bg"]);
//     screen.style.backgroundColor = theme[key]["--screen-bg"];
//     //screen.style.color = theme[key]["--text-w"];

//     let keypad = document.getElementsByClassName("buttons");
//     keypad[0].style.backgroundColor = theme[key]["--keypad-bg"];
//     btns.forEach(function (btn, j, arr1) {
//       if (btn.matches(".func")) {
//         //
//         btn.addEventListener("mouseenter", function (e) {
//           e.target.style.backgroundColor = theme[key]["--keys-func-hover"];
//         });
//         btn.addEventListener("mouseout", function (e) {
//           e.target.style.backgroundColor = theme[key]["--keys-func-bg"];
//         });
//         btn.style.backgroundColor = theme[key]["--keys-func-bg"];
//         btn.style.borderBottomColor = theme[key]["--keys-func-shadow"];
//       } else if (btn.matches(".equal")) {
//         //
//         btn.addEventListener("mouseenter", function (e) {
//           e.target.style.backgroundColor = theme[key]["--keys-equal-hover"];
//         });
//         btn.addEventListener("mouseout", function (e) {
//           e.target.style.backgroundColor = theme[key]["--keys-equal-bg"];
//         });
//         btn.style.backgroundColor = theme[key]["--keys-equal-bg"];
//         btn.style.borderBottomColor = theme[key]["--keys-equal-shadow"];
//         //console.log(i);
//         //if (i === 2) btn.style.color = subArr["--text-blue"];
//       } else {
//         btn.addEventListener("mouseenter", function (e) {
//           e.target.style.backgroundColor = theme[key]["--keys-hover"];
//         });
//         btn.addEventListener("mouseout", function (e) {
//           e.target.style.backgroundColor = theme[key]["--keys-bg"];
//         });
//         btn.style.backgroundColor = theme[key]["--keys-bg"];
//         btn.style.borderBottomColor = theme[key]["--keys-shadow"];
//         btn.style.color = theme[key]["--text-blue"];
//       }
//     });
//   });

//   // theme.forEach(function (thm, j, arr1) {
//   //   console.log(key, thm[]);
//   // });
// }

// // buttons.forEach(function (button, i, array) {
// //   button.addEventListener("click", function () {
// //     // buttons[lasActive].classList.toggle('active')
// //     buttons[lastActive].classList.remove("active");
// //     button.classList.add("active");
// //     lastActive = i;
// //     var subArr = theme[i];
// //     document.body.style.backgroundColor = subArr["--main-bg"];

// //     console.log(subArr["--main-bg"]);
// //     i === 0
// //       ? (document.body.style.color = subArr["--text-white"])
// //       : (document.body.style.color = subArr["--text-blue"]);

// //     let screen = document.getElementById("scrr");
// //     screen.style.backgroundColor = subArr["--screen-bg"];

// //     let keypad = document.getElementsByClassName("buttons");
// //     keypad[0].style.backgroundColor = subArr["--keypad-bg"];

// //     let btns = document.querySelectorAll(".buttons>button");
// //     btns.forEach(function (btn, j, arr1) {
// //       if (btn.matches(".func")) {
// //         //
// //         btn.addEventListener("mouseenter", function (e) {
// //           e.target.style.backgroundColor = subArr["--keys-func-hover"];
// //         });
// //         btn.addEventListener("mouseout", function (e) {
// //           e.target.style.backgroundColor = subArr["--keys-func-bg"];
// //         });
// //         btn.style.backgroundColor = subArr["--keys-func-bg"];
// //         btn.style.borderBottomColor = subArr["--keys-func-shadow"];
// //       } else if (btn.matches(".equal")) {
// //         //
// //         btn.addEventListener("mouseenter", function (e) {
// //           e.target.style.backgroundColor = subArr["--keys-equal-hover"];
// //         });
// //         btn.addEventListener("mouseout", function (e) {
// //           e.target.style.backgroundColor = subArr["--keys-equal-bg"];
// //         });
// //         btn.style.backgroundColor = subArr["--keys-equal-bg"];
// //         btn.style.borderBottomColor = subArr["--keys-equal-shadow"];
// //         console.log(i);
// //         //if (i === 2) btn.style.color = subArr["--text-blue"];
// //       } else {
// //         btn.addEventListener("mouseenter", function (e) {
// //           e.target.style.backgroundColor = subArr["--keys-hover"];
// //         });
// //         btn.addEventListener("mouseout", function (e) {
// //           e.target.style.backgroundColor = subArr["--keys-bg"];
// //         });
// //         btn.style.backgroundColor = subArr["--keys-bg"];
// //         btn.style.borderBottomColor = subArr["--keys-shadow"];
// //         btn.style.color = subArr["--text-blue"];
// //       }
// //     });
// //   });
// // });
