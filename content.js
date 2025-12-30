const avatar = document.querySelector(
  "[aria-label='Change your avatar']"
)?.parentElement;

avatar.classList.add("github-winter-avatar-container");

const img = document.createElement("img");
img.src =
  "https://github.com/anuragbansall/github-winter-extension/blob/main/assets/snow-fall.gif?raw=true";
img.classList.add("github-winter-snow-fall");

avatar.appendChild(img);
