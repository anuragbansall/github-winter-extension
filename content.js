// (function () {
//   "use strict";

//   function isProfilePage() {
//     const path = window.location.pathname.split("/").filter(Boolean);
//     return path.length === 1;
//   }

//   if (!isProfilePage()) return;

//   document.documentElement.classList.add("github-winter-edition");

//   // Optional: Add a winter banner
//   const header = document.querySelector(".js-profile-editable-area");
//   if (header) {
//     const banner = document.createElement("div");
//     banner.className = "winter-banner";
//     banner.innerText = "❄ Winter Edition ❄";
//     header.prepend(banner);
//   }

//   // Example: Snow effect (lightweight)
//   function createSnowflake() {
//     const snowflake = document.createElement("div");
//     snowflake.className = "snowflake";
//     snowflake.style.left = Math.random() * window.innerWidth + "px";
//     snowflake.style.animationDuration = 3 + Math.random() * 5 + "s";
//     snowflake.innerText = "❄";
//     document.body.appendChild(snowflake);

//     setTimeout(() => snowflake.remove(), 8000);
//   }

//   setInterval(createSnowflake, 500);
// })();
