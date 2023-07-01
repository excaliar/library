let myLibrary = [];

const container = document.querySelector('.Library');

function Book(author, title, noPages, read) {
    this.author = author
    this.title = title
    this.noPages = noPages
    this.read = read 
}

function addBooktoLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let content = document.createElement('div');
        content.classList.add('contentContainer');
        container.appendChild(content);

        const tit = document.createElement('div');
        tit.classList.add('content');
        tit.classList.add("title");
        tit.textContent = myLibrary[i].title;
        content.appendChild(tit);

        const auth = document.createElement('div');
        auth.classList.add('content');
        auth.classList.add('author');
        auth.textContent = `Author: ${myLibrary[i].author}`;
        content.appendChild(auth);


        const noP = document.createElement('div');
        noP.classList.add('content');
        noP.classList.add('pageNo');
        noP.textContent = `Pages: ${myLibrary[i].noPages}`;
        content.appendChild(noP);

        const re = document.createElement('div');
        re.classList.add('content');
        re.classList.add("read");
        re.textContent = "Read"
        content.appendChild(re);

        const setre = document.createElement('button');
        setre.classList.add(`setre${i}`)
        setre.classList.add("content");
        setre.type = "button"
        setre.textContent = "Delete"
        content.appendChild(setre)

        let check = document.createElement('input');
        check.classList.add(`chek${i}`)
        check.type = "checkbox"
        if (myLibrary[i].read === true) {
            check.checked = true
        } else {
            check.checked = false
        }
        re.appendChild(check)

    }
}

function addNewBooktoDisplay() {
    const sub = document.querySelector('.stop')
    let fo = document.querySelector('.fo')
    sub.addEventListener("click", () => {
        let tt = document.querySelector('#ttitle').value
        let aa = document.querySelector('#aauthor').value
        let np = document.querySelector('#NOPage').value
        let rr = document.querySelector('#RRead')
        if (rr.checked) {
            rr = true;
        } else {
            rr = false;
        }
        
        let j = new Book(aa, tt, np, rr)
        addBooktoLibrary(j)
        container.replaceChildren();
        fo.reset()
        displayBooks();
    })

}

function delChild (event) {
    if (event.target.matches('button')) {
        let tt = event.target.parentElement;
        let pp = tt.querySelector('.title').textContent;
        for (let i = 0; i < myLibrary.length; i++) {
            if (pp == myLibrary[i].title) {
                myLibrary.splice(i, 1)
                container.replaceChildren();
                displayBooks();
            }
        }
    }
}

function deleteChildren() {
    container.addEventListener('click', delChild)
}

function tog(event) {
    if (event.target.matches('input')) {
        let oo = event.target.parentElement.parentElement;
        let na = oo.querySelector('.title').textContent;
        for (let ip = 0; ip < myLibrary.length; ip++) {
            if (na == myLibrary[ip].title) {
                if (myLibrary[ip].read == true) {
                    myLibrary[ip].read = false;
                } else {
                    myLibrary[ip].read = true;
                }
            }
        }
    }
}

function toggleCheck () {
    container.addEventListener('click', tog)
}


displayBooks();
addNewBooktoDisplay();
deleteChildren();
toggleCheck();
