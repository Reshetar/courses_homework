// Starting list
const musicList = [
  {
    id: 1,
    img: "https://content.discogs.com/media/roots-300x300.jpeg",
    name: "Things Fall Apart",
    artist: "The Roots",
    year: 2013,
    genre: "Hip Hop, Conscious",
    country: "USA",
  },
  {
    id: 2,
    img: "https://content.discogs.com/media/wilco-300x300.jpeg",
    name: "Summerteeth",
    artist: "Wilco",
    year: 2009,
    genre: "Rock",
    country: "USA",
  },
  {
    id: 3,
    img: "https://content.discogs.com/media/Album-Cover-Moby-–-Play-300x300.jpg",
    name: "Play",
    artist: "Moby",
    year: 2001,
    genre: "Electronic",
    country: "USA",
  },
  {
    id: 4,
    img: "https://content.discogs.com/media/dre-300x298.jpeg",
    name: "2001",
    artist: "Dr. Dre",
    year: 2021,
    genre: "Hip Hop",
    country: "UK",
  },
];

// Generation list

const generationList = (list) => {
  let startList = "";
  for (var key in list) {
    startList += `
      <div class="item">
        <button class="btn_col"><img src="./img/dark-heart.svg" /></button>
        <img src="${list[key].img}" />
        <h2>${list[key].name}</h2>
        <h3>${list[key].artist}</h3>
        <p><span>Year:</span> ${list[key].year}</p>
        <p><span>Style:</span> ${list[key].genre}</p>
        <p><span>Country:</span> ${list[key].country}</p>
        <button class="btn_like" id="like">Add <span>+</span></button>
      </div>
      `;
  }

  document.getElementById("list").innerHTML = startList;
  console.log("render");
};

generationList(musicList);

// Generation liked list

const generationLikedList = (list) => {
  let startList = "";
  for (var key in list) {
    startList += `
      <div class="item">
        <button class="btn_col"><img src="./img/dark-heart.svg" /></button>
        <img src="${list[key].img}" />
        <h2>${list[key].name}</h2>
        <h3>${list[key].artist}</h3>
        <p><span>Year:</span> ${list[key].year}</p>
        <p><span>Style:</span> ${list[key].genre}</p>
        <p><span>Country:</span> ${list[key].country}</p>
        <button class="btn_like liked" id="like">Add <span>+</span></button>
      </div>
      `;
  }

  document.getElementById("liked_list").innerHTML = startList;
};

// filter by Artist
const filterByArtist = (list, value) => {
  let results = list.filter((item) => item.artist.includes(value));
  return results;
};

// filter by Genre
const filterByGenre = (list, value) => {
  let results = list.filter((item) => item.genre.includes(value));
  return results;
};

// filter by Decade
const filterByDecade = (list, value) => {
  let getFirstValue = value.split("-");

  var listOfYears = [];
  for (var i = getFirstValue[0]; i <= getFirstValue[1]; i++) {
    listOfYears.push(i);
  }

  let results = [];

  for (let index = 0; index < listOfYears.length; index++) {
    list.map((item) => {
      if (listOfYears[index] == item.year) {
        results.push(item);
      }
    });
  }

  return results;
};

// filter by Country
const filterByCountry = (list, value) => {
  let results = list.filter((item) => item.country.includes(value));
  return results;
};

// Submit form
function search(event) {
  event.preventDefault();
  let artist = document.querySelector("#artist");
  let genreItem = document.getElementById("genre");
  let genreItem_text = genreItem.options[genreItem.selectedIndex].text;

  let decadeItem = document.getElementById("decade");
  let decadeItem_value = decadeItem.options[decadeItem.selectedIndex].value;

  let countryItem = document.getElementById("country");
  let countryItem_text = countryItem.options[countryItem.selectedIndex].text;

  let finalResult = filterByArtist(musicList, artist.value);

  if (genreItem_text !== "Genre") {
    finalResult = filterByGenre(finalResult, genreItem_text);
  }

  if (decadeItem_value !== "") {
    finalResult = filterByDecade(finalResult, decadeItem_value);
  }

  if (countryItem_text !== "Country") {
    finalResult = filterByCountry(finalResult, countryItem_text);
  }

  generationList(finalResult);
}
let form = document.querySelector("#filter_form");
form.addEventListener("submit", search);

// Like feauture
let likeNumber = 0;
let likeArrayOfItems = [];
console.log(likeNumber);

let likeButton = document.querySelectorAll("button.btn_like");

function likeFunction(element) {
  element.classList.toggle("liked");

  let likedElement =
    element.parentElement.getElementsByTagName("h2")[0].innerHTML;

  musicList.forEach((value) => {
    if (!likeArrayOfItems.includes(value) && likedElement == value.name) {
      likeArrayOfItems.push(value);
      likeNumber++;
    } else if (likeArrayOfItems.includes(value) && likedElement == value.name) {
      const indexElement = likeArrayOfItems.findIndex(
        (item) => item.name == likedElement
      );
      likeArrayOfItems.splice(indexElement, 1);
      likeNumber--;
    }
  });

  if (likeNumber == 0) {
    document.querySelector(".btn_like_head span").innerHTML = "";
  } else {
    document.querySelector(".btn_like_head span").innerHTML = likeNumber;
  }
}

likeButton.forEach(function (element) {
  element.addEventListener("click", () => likeFunction(element), false);
});

// Liked generation list

let likedHeadButton = document.querySelectorAll(".btn_like_head");

function likedListFunction(element) {
  generationLikedList(likeArrayOfItems);
  document.getElementById("list").classList.toggle("hidden");
  document.getElementById("liked_list").classList.toggle("hidden");
  document.getElementById("pagination").classList.toggle("hidden");
  if (likeNumber == 0) {
    console.log("trye");
    document.getElementById("liked_list").innerHTML = "<p>Empty list</p>";
  }
}

likedHeadButton.forEach(function (element) {
  element.addEventListener("click", () => likedListFunction(element), false);
});

// Collection feauture

let collectionButton = document.querySelectorAll("button.btn_col");

function collectionFunction(element) {
  element.classList.toggle("col_added");
  alert("Try add feature");
}

collectionButton.forEach(function (element) {
  element.addEventListener("click", () => collectionFunction(element), false);
});

// Head collection function

let collectionHeadButton = document.querySelectorAll(".btn_collection");

collectionHeadButton.forEach(function (element) {
  element.addEventListener("click", () => alert("Try add function"), false);
});
