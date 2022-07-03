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

//initialization
let i = 0;
addBookToLibrary();

function addBookToLibrary() {
    // generate new elements to store the information from the library
    
    const libraryDiv = document.querySelector('#books');
    const newCard = document.createElement('div');
    const newTitle = document.createElement('h4');
    const newAuthor = document.createElement('div');
    const newPages = document.createElement('div');

    libraryDiv.appendChild(newCard);
    newCard.className = 'card number_' + i;

    newTitle.textContent = myLibrary[i].title;
    newAuthor.textContent = myLibrary[i].author;
    newPages.textContent = 'Total Pages: ' + myLibrary[i].pages;

    //creates the element for the button for the read status. takes the array at position 'i' and toggles the status based on what was inputted
    const newReadStatus = document.createElement('button');
    readStatusToggle = myLibrary[i].readStatus;
    newReadStatus.addEventListener('click', () => {
        readStatusToggle = !readStatusToggle
        readStatus();
    })

    readStatus();
    function readStatus(){
        if (readStatusToggle){
            newReadStatus.textContent = 'Already Read';
            newReadStatus.className = 'cardButtons' + ' green lighten-1' + ' z-depth-1';
        } else {
            newReadStatus.textContent = 'Have Not Read Yet';
            newReadStatus.className = 'cardButtons' + ' blue-grey lighten-3' + ' z-depth-1';
        }
    }
    
    newCard.appendChild(newTitle);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newPages);
    newCard.appendChild(newReadStatus);

    // create the element for removing card
    const removeBookBtn = document.createElement('button');
    removeBookBtn.className = 'cardButtons' + ' red lighten-2' + ' z-depth-1';
    removeBookBtn.textContent = 'Remove Book'
    newCard.appendChild(removeBookBtn);

    removeBookBtn.addEventListener('click', () => {
        libraryDiv.removeChild(newCard);
    });
    i++;
}

let aBook = '';

// querySelects the inputs for the form and creates a new variable 'aBook' using the Book constructor. 
// the newly created 'aBook' gets push to the library array.
function pullBookInfo(){
    const authorValue = document.querySelector('#author');
    const titleValue = document.querySelector('#title');
    const pagesValue = document.querySelector("#pageNum");
    const readStatusCheck = document.querySelector('#readStatus');
    aBook = new Book(authorValue.value, titleValue.value, pagesValue.value, readStatusCheck.checked);
    myLibrary.push(aBook);
}

function formReset(){
    document.getElementById('form').reset();
}

addBookBtn.addEventListener('click', () => {
    document.getElementById("popUpForm").style.display = "block";
    document.getElementById("addBookBtn").style.display = "none";
})

form.addEventListener('submit', () => {
    pullBookInfo();
    addBookToLibrary();  // to do
    formReset();
    document.getElementById("popUpForm").style.display = "none";
    document.getElementById("addBookBtn").style.display = "block";
});

cancelBtn.addEventListener('click', () => {     // clear data
    formReset();
    document.getElementById("popUpForm").style.display = "none";
    document.getElementById("addBookBtn").style.display = "block";
    return;
})