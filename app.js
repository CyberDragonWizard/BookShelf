
const url = `https://www.googleapis.com/books/v1/volumes?q=`
const input = document.querySelector('#input');
const button = document.querySelector('#search-button');

button.addEventListener('click', async (e) => {
    e.preventDefault();
    let userInput = input.value;
    const response = await axios.get(url + userInput)
    console.log(response)
    renderList(response.data.items)
    // displayDes(response.data.items)

    input.value = ''
})

const searchResults = document.querySelector('.results');

const renderList = (book) => {
    removeData()
    book.forEach(data => {
        
        const descriptionDiv = document.querySelector('.results')
        const bookDiv = document.createElement('div')
        bookDiv.classList = ('book-div')
        descriptionDiv.append(bookDiv)


        const title = document.createElement('h3');
        title.innerHTML = data.volumeInfo.title;
        bookDiv.appendChild(title);

        if (data.volumeInfo.authors !== undefined) {
        const author = document.createElement('p');
        author.innerHTML = data.volumeInfo.authors;
        bookDiv.appendChild(author);
        }

        if (data.volumeInfo.imageLinks !== undefined) {
        const cover = document.createElement('img');
        cover.setAttribute('src', data.volumeInfo.imageLinks.thumbnail);
        bookDiv.appendChild(cover);
        }

        if (data.volumeInfo.description !== undefined) {
        const description= document.createElement('p');
        description.innerHTML = data.volumeInfo.description;
        bookDiv.appendChild(description)

        bookDiv.appendChild(createDescriptionButton())
        }

        // const description = document.createElement('p');
        // description.innerHTML = data.volumeInfo.description;
        // document.querySelector('.modal').appendChild(description);

        // const showModal = document.querySelector('.description')
        // const descriptionButton = document.querySelector('.description-button')
        // descriptionButton.addEventListener('click', () => {
        // showModal.classList.add('display-description')
        // });

        searchResults.appendChild(bookDiv);

    })

}

function createDescriptionButton() {
    let descriptionButton = document.createElement('button')
    descriptionButton.innerHTML = 'Show Description'
    descriptionButton.setAttribute('class', 'description-button')
    return  descriptionButton   
}

// const displayDes = (book) => {
//     removeDescription()
//     book.forEach(data => {
//         const descriptionDiv = document.querySelector('.description-content')
//         const modalDiv = document.createElement('div')
//         modalDiv.classList = ('modal-div')
//         descriptionDiv.append(modalDiv)

//         if (data.volumeInfo.description !== undefined) {
//         const description = document.createElement('p');
//         description.innerHTML = data.volumeInfo.description;
//         modalDiv.appendChild(description);
//         }
//     })
// }

const removeData = () => {
    const oldData = document.querySelector('.results')
    while (oldData.lastChild) {
        oldData.removeChild(oldData.lastChild)
    }
}

const removeDescription = () => {
    const oldData = document.querySelector('.description-content')
    while (oldData.lastChild) {
        oldData.removeChild(oldData.lastChild)
    }
}



