const addBookBtn = document.querySelector('#addBookBtn');
const submitBtn = document.querySelector('#submitBtn');
const cancelBtn = document.querySelector('#cancelBtn');
const form = document.querySelector('#form');
let aBook = '';

let myLibrary = [
    {author: 'J.K. Rowling', title: 'Harry Potter and the Philosopher\'s Stone', pages: '10', readStatus: false,}
];

function Book(author, title, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(author, title, pages, readStatus) {
    
}

function pullBookInfo(){
    const authorValue = document.querySelector('#author');
    const titleValue = document.querySelector('#title');
    const pagesValue = document.querySelector("#pageNum");
    const readStatusCheck = document.querySelector('#readStatus');
    aBook = new Book(authorValue.value, titleValue.value, pagesValue.value, readStatusCheck.checked);
    console.log(aBook.author);
    console.log(aBook.title);
    console.log(aBook.pages);
    console.log(aBook.readStatus);
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