// Constructer
function book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display constructor
function display() {

}


// add method to display prototype
display.prototype.add = function (addbook) {
    console.log(`Adding to UI`);
    let add_book = document.getElementById('add-book')
    let ui_string = `<tr>
                        <td>${addbook.name}</td>
                        <td>${addbook.author}</td>
                        <td>${addbook.type}</td>    
                    </tr>`;
    add_book.innerHTML += ui_string;
};

//implimenting clear function
display.prototype.clear = function () {
    let libraryform = document.getElementById('library-form');
    libraryform.reset();
};

//implimenting validate function
display.prototype.validate = function (addbook) {
    if (addbook.name.length<2||addbook.author.length<2){
        return false;
    }
    else{
        return true;
    }
}


display.prototype.show = function (type, message) {
    let msg = document.getElementById('msg');
    msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message: </strong> ${message}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div> `

    setTimeout(() => {
        msg.innerHTML=''; 
    }, 5000);
}


//add submit event listener to library-form
let libraryform = document.getElementById('library-form');
libraryform.addEventListener('submit', libraryformsubmit);

function libraryformsubmit(e) {
    e.preventDefault();

    console.log(`submitted`);
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('Author').value;
    let type;
    // fiction, computerprogramming, cooking
    if (Fiction.checked) {
        type = Fiction.value;
    }
    else if (Computer_Programming.checked) {
        type = Computer_Programming.value;
    }
    else if (Cooking.checked) {
        type = Cooking.value;
    }


    let addbook = new book(name, author, type);
    console.log(addbook);

    let Display = new display();
    if (Display.validate(addbook)) {
        Display.add(addbook);
        Display.clear();
        Display.show('success', `Your book has been successfully added.`)
    }
    else{
        //show error to user
        Display.show('danger', `Sorry! You cannot add this book.`);
    }

}