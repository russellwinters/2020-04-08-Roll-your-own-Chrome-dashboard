//Getting Wallpaper

const WALLPAPER = document.getElementById("wallpaper");

(async function () {
  let data = await fetch(
    "https://api.unsplash.com/photos/random?client_id=c18sgyD21esFad_4EYynf0Sf8b8e_KdbfAIMkYMJabQ"
  );
  let json = await data.json();
  WALLPAPER.src = json.urls.regular;
})();

//Adding Links
const LINK_SECTION = document.getElementById("links");

let link;
chrome.bookmarks.getRecent(5, (arr) => {
  console.log(arr);
  arr.forEach((obj) => {
    link = document.createElement("a");
    link.target = "_blank";
    link.href = obj.url;
    link.innerText = obj.title;
    link.classList.add("links__anchor", "text");

    LINK_SECTION.appendChild(link);
  });
});

//Adding Quote
const SECTION = document.getElementById("quote");

(async function () {
  let data = await fetch("https://type.fit/api/quotes");
  let json = await data.json();
  let randomNumber = Math.floor(Math.random() * 1500);
  SECTION.innerText = json[randomNumber].text;
})();
