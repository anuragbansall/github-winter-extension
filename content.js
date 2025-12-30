const avatar = document.querySelector(
  "[aria-label='Change your avatar']"
)?.parentElement;

avatar.classList.add("github-winter-avatar-container");

const snowFallImg = document.createElement("img");
snowFallImg.src =
  "https://github.com/anuragbansall/github-winter-extension/blob/main/assets/snow-fall.gif?raw=true";
snowFallImg.classList.add("github-winter-snow-fall");

const avatarFrameImg = document.createElement("img");
avatarFrameImg.src =
  "https://github.com/anuragbansall/github-winter-extension/blob/main/assets/winter-avatar-frame.png?raw=true";
avatarFrameImg.classList.add("github-winter-avatar-frame");

avatar.appendChild(snowFallImg);
avatar.appendChild(avatarFrameImg);
