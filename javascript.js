const addBookBtn = document.querySelector('#addBookBtn');
const submitBtn = document.querySelector('#submitBtn');
const cancelBtn = document.querySelector('#cancelBtn');
const form = document.querySelector('#form');




let myLibrary = [
    {author: 'J.K. Rowling', title: 'Harry Potter and the Philosopher\'s Stone', pages: '10', readStatus: false,}
];

function Book(author, title, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
}

let i = 0;
addBookToLibrary();

function addBookToLibrary() {
    const libraryDiv = document.querySelector('#books');
    const newCard = document.createElement('div');
    const newTitle = document.createElement('h4');
    const newAuthor = document.createElement('div');
    const newPages = document.createElement('div');
    const newReadStatus = document.createElement('button');

    libraryDiv.appendChild(newCard);
    newCard.className = 'card number_' + i;

    newTitle.textContent = myLibrary[i].title;
    newAuthor.textContent = myLibrary[i].author;
    newPages.textContent = 'Total Pages: ' + myLibrary[i].pages;
    newReadStatus.textContent = myLibrary[i].readStatus;

    newCard.appendChild(newTitle);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newPages);
    newCard.appendChild(newReadStatus);

    i++;
}

function createLibraryCard() {


}


let aBook = '';

function pullBookInfo(){
    const authorValue = document.querySelector('#author');
    const titleValue = document.querySelector('#title');
    const pagesValue = document.querySelector("#pageNum");
    const readStatusCheck = document.querySelector('#readStatus');
    aBook = new Book(authorValue.value, titleValue.value, pagesValue.value, readStatusCheck.checked);
    myLibrary.push(aBook);
    console.log(aBook.author);
    console.log(aBook.title);
    console.log(aBook.pages);
    console.log(aBook.readStatus);
    console.table(myLibrary);
}

addBookBtn.addEventListener('click', () => {
    document.getElementById("popUpForm").style.display = "block";
    document.getElementById("addBookBtn").style.display = "none";
})

form.addEventListener('submit', () => {
    pullBookInfo();
    addBookToLibrary();  // to do
    document.getElementById("popUpForm").style.display = "none";
    document.getElementById("addBookBtn").style.display = "block";
});

cancelBtn.addEventListener('click', () => {     // clear data
    document.getElementById("popUpForm").style.display = "none";
    document.getElementById("addBookBtn").style.display = "block";
})