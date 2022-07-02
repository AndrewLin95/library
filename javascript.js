const addBookBtn = document.querySelector('#addBookBtn');
const submitBtn = document.querySelector('#submitBtn');
const cancelBtn = document.querySelector('#cancelBtn')

addBookBtn.addEventListener('click', () => {
    document.getElementById("popUpForm").style.display = "block";
    document.getElementById("addBookBtn").style.display = "none";
})

submitBtn.addEventListener('click', () => {
    document.getElementById("popUpForm").style.display = "none";
    document.getElementById("addBookBtn").style.display = "block";
})

cancelBtn.addEventListener('click', () => {
    document.getElementById("popUpForm").style.display = "none";
    document.getElementById("addBookBtn").style.display = "block";
})