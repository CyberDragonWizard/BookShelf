
const url = `https://www.googleapis.com/books/v1/volumes?q=`
const input = document.querySelector('#input');
const button = document.querySelector('#search-button');

button.addEventListener('click', async (e) => {
    e.preventDefault();
    let userInput = input.value;
    const response = await axios.get(url + userInput)
    renderList(response.data.items)

    input.value = ''
})

const searchResults = document.querySelector('.results');

const renderList = (book) => {
    removeData()
    book.forEach(data => {
    
      
    const title = document.createElement('h3');
    const resultsDiv = document.querySelector('.results')
    const bookDiv = document.createElement('div')
    bookDiv.classList = ('book-div')
    resultsDiv.append(bookDiv)

    title.innerHTML = data.volumeInfo.title;
    bookDiv.appendChild(title);

    if (data.volumeInfo.authors !== undefined) {
    const author = document.createElement('h4');
    author.innerHTML = "By: " + data.volumeInfo.authors;
    bookDiv.appendChild(author);
    }
        
    if (data.volumeInfo.imageLinks !== undefined) {
    const cover = document.createElement('img');
    cover.setAttribute('src', data.volumeInfo.imageLinks.thumbnail);
    bookDiv.appendChild(cover);
    }

    bookDiv.appendChild(createDescriptionButton(data.volumeInfo.description))
    searchResults.appendChild(bookDiv);

    })

}

const createDescriptionButton = (descriptionString) => {
    let descriptionContent = document.querySelector('.description-content')
    let descriptionButton = document.createElement('button')
    descriptionButton.innerHTML = 'Show Description'
    descriptionButton.setAttribute('class', 'description-button')
    descriptionButton.addEventListener('click', () => {
        
        descriptionContent.classList.add('modal-activate')
        if (descriptionString !== undefined) {
            const description= document.createElement('p');
            description.innerHTML = descriptionString
            

            const modalDiv = document.querySelector('.modal')
            modalDiv.innerHTML = "";

            const descriptionDiv = document.createElement('div')
            descriptionDiv.classList = ('description-div')
            modalDiv.appendChild(descriptionDiv)

            descriptionDiv.appendChild(description)

            const closeButton = document.createElement('button')
            closeButton.setAttribute('class', 'close-button' )
            closeButton.innerHTML = 'Close'
            modalDiv.appendChild(closeButton)

            closeButton.addEventListener('click', () => {
            descriptionContent.classList.remove('modal-activate')
            })
            }
        if (descriptionString === undefined) {
            const description= document.createElement('p');
            description.innerHTML = "Description unavailable."
                
    
            const modalDiv = document.querySelector('.modal')
            modalDiv.innerHTML = "";
            
            const descriptionDiv = document.createElement('div')
            descriptionDiv.classList = ('description-div')
            modalDiv.appendChild(descriptionDiv)

            const closeButton = document.createElement('button')
            closeButton.setAttribute('class', 'close-button' )
            closeButton.innerHTML = 'Close'
            modalDiv.appendChild(closeButton)

            closeButton.addEventListener('click', () => {
            descriptionContent.classList.remove('modal-activate')
            })
    
            descriptionDiv.appendChild(description) 
        }
    })

    return  descriptionButton   
}

const removeData = () => {
    const oldData = document.querySelector('.results')
    while (oldData.lastChild) {
        oldData.removeChild(oldData.lastChild)
    }
}

const removeDescription = () => {
    const oldData = document.querySelector('.modal-content')
    while (oldData.lastChild) {
        oldData.removeChild(oldData.lastChild)
    }
}



