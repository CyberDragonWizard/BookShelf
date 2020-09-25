
const url = `https://www.googleapis.com/books/v1/volumes?q=`
const input = document.querySelector('#input');
const button = document.querySelector('#search-button');
const searchResults = document.querySelector('.results');


//Use the search bar to retrieve data from the API. 
button.addEventListener('click', async (e) => {
    e.preventDefault();
    let userInput = input.value;
    const response = await axios.get(url + userInput)
    renderList(response.data.items)

    input.value = ''
})


//Uses specific data from the API and applies it to the DOM
const renderList = (book) => {
    removeData()
    book.forEach(data => {
     
    const title = document.createElement('h3');
    const resultsDiv = document.querySelector('.results')
    const bookDiv = document.createElement('div')
    bookDiv.classList = ('book-div')
    resultsDiv.append(bookDiv)

    //Title, author, and cover image data are appended to div.book-div.
    title.innerHTML = data.volumeInfo.title;
    bookDiv.appendChild(title);
    
    //If the data isn't available, nothing, including "undefined" will be appended
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

    //Appends the 'Description Button' to each search result
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
        
        //The eventlistener will trigger the hidden modal containing the description data depending on the if statement
        // as well as triggering the modal animation.
        descriptionContent.classList.add('modal-activate')

        //The vairable statement will append the description data to the modal as intended.
            const description= document.createElement('p');
            description.innerHTML = descriptionString
            
            const modalDiv = document.querySelector('.modal')
            modalDiv.innerHTML = "";

            const descriptionDiv = document.createElement('div')
            descriptionDiv.classList = ('description-div')
            modalDiv.appendChild(descriptionDiv)

            descriptionDiv.appendChild(description)

            //An 'exit' button will be appended to the top of the modal
            const closeButton = document.createElement('button')
            closeButton.setAttribute('class', 'close-button' )
            closeButton.innerHTML = 'Close'
            modalDiv.appendChild(closeButton)

            //The close button will simply remove the modal, again showing the search results
            closeButton.addEventListener('click', () => {
            descriptionContent.classList.remove('modal-activate')
            })

            //This if statement will act if the there is no description or labeled as "undefinded"
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

//removeData will remove the search results once another searched is placed
const removeData = () => {
    const oldData = document.querySelector('.results')
    while (oldData.lastChild) {
        oldData.removeChild(oldData.lastChild)
    }
}




