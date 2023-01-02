// Task 1
const onClickVote = async () => {
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
  })
  .then(response => response.json())
  .then(response => console.log(response));
  const date = new Date();
  document.getElementById("vote").innerText = `Your vote is accepted: ${date}`;
}

const voteButton = document.getElementById('vote');
voteButton.addEventListener('click', onClickVote);


// Task 2

const fetchBooks = async () => {
  const books = fetch('./books.json', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
  })
  .then(response => response.json())
  return books;
}

const onClickHandler = async () => {
  const books = await fetchBooks();
  console.log(books);
  document.getElementById("listofbooks").innerHTML="";
  books.map((book) => {
    document.getElementById("listofbooks").insertAdjacentHTML("beforeend",`<li>${book.name}</li>`);
  })
  document.getElementById("download").style.display = "none";
}

const downloadButton = document.getElementById('download');
downloadButton.addEventListener('click', onClickHandler);

