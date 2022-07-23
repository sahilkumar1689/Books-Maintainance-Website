show();

let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let bkinput = document.getElementById('bkname');
    let authorinput = document.getElementById('Authorname');
    let foption = document.getElementById('EEEBooks');
    let soption = document.getElementById('CSBooks');
    let toption = document.getElementById('MBooks');
    let optionValue;
    if (foption.checked) {
        optionValue = foption.value;
    }
    else if (soption.checked) {
        optionValue = soption.value;
    }
    else if (toption.checked) {
        optionValue = toption.value;
    }

    let books = localStorage.getItem('book');
    let authors = localStorage.getItem('author');
    let types = localStorage.getItem('type');
    let bookobj = [];
    let authorobj = [];
    let typeobj = [];

    if (books == null, authors == null, types == null) {
        bookobj = [];
        authorobj = [];
        typeobj = [];
    }
    else {
        bookobj = JSON.parse(books)
        authorobj = JSON.parse(authors);
        typeobj = JSON.parse(types);
    }
    bookobj.push(bkinput.value);
    authorobj.push(authorinput.value);
    typeobj.push(optionValue);
    localStorage.setItem('book', JSON.stringify(bookobj));
    localStorage.setItem('author', JSON.stringify(authorobj));
    localStorage.setItem('type', JSON.stringify(typeobj));
    console.log(bookobj);
    console.log(authorobj);
    console.log(typeobj);
    bkinput.value = "";
    authorinput.value = "";
    optionValue.value = "";
    show();


})

// Make a funtion to show the books :
function show() {
    let books = localStorage.getItem('book');
    let authors = localStorage.getItem('author');
    let types = localStorage.getItem('type');
    let bookobj = [];
    let authorobj = [];
    let typeobj = [];

    if (books == null, authors == null, types == null) {
        bookobj = [];
        authorobj = [];
        typeobj = [];
    }
    else {
        bookobj = JSON.parse(books)
        authorobj = JSON.parse(authors);
        typeobj = JSON.parse(types);
    }
    let tbodyhtml = "";
    bookobj.forEach(function (element, index) {
        tbodyhtml += ` <tr class = "trRow">
        <th scope="row">${index + 1}</th>
        <td class ="booksName">${element}</td>
        <td>${authorobj[index]}</td>
        <td>${typeobj[index]}</td>
        <td><button id =${index} onclick="deletebooks(this.id)" style="background-color:#0d6efd; color : white; border:1px solid #0d6efd; border-radius:10px;">-</button></td>
        </tr>`;
    })
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = tbodyhtml;
}

// Make a funtiont to delete the books:
function deletebooks(btnindex) {
    let books = localStorage.getItem('book');
    let authors = localStorage.getItem('author');
    let types = localStorage.getItem('type');
    let bookobj = [];
    let authorobj = [];
    let typeobj = [];

    if (books == null, authors == null, types == null) {
        bookobj = [];
        authorobj = [];
        typeobj = [];
    }
    else {
        bookobj = JSON.parse(books)
        authorobj = JSON.parse(authors);
        typeobj = JSON.parse(types);
    }
    bookobj.splice(btnindex, 1);
    authorobj.splice(btnindex, 1);
    typeobj.splice(btnindex, 1);
    localStorage.setItem('book', JSON.stringify(bookobj));
    localStorage.setItem('author', JSON.stringify(authorobj));
    localStorage.setItem('type', JSON.stringify(typeobj));
    show();
}

// Make a search code :
let srcbtn = document.querySelector('.frm #sbtn');
srcbtn.addEventListener("click", function (e) {
    e.preventDefault();
    let search = document.querySelector('.frm #itxt');
    let searchvalue = search.value;

    let rows = document.querySelectorAll('.trRow');

    Array.from(rows).forEach(function (element) {
        let booksname = element.getElementsByClassName('booksName')[0].innerText;
        if (booksname.includes(searchvalue)) {
            element.style.display = "show()";
        }
        else {
            element.style.display = "none";
        }
    })

})
