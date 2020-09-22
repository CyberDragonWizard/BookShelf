
const url = `https://www.googleapis.com/books/v1/volumes?q=`
const input = document.querySelector('#input');
const button = document.querySelector('#search-button');

button.addEventListener('click', async (e) => {
    e.preventDefault();
    let userInput = input.value;
    const response = await axios.get(url + userInput)
    console.log(response)
    renderList(response.data.items)
})

const searchResults = document.querySelector('.results');

const renderList = books => {
    books.forEach(data => {
        const resultsDiv = document.querySelector('.results')
        const bookDiv = document.createElement('div')
        bookDiv.classList = ('book-div')
        resultsDiv.append(bookDiv)


        const title = document.createElement('h3');
        title.innerHTML = data.volumeInfo.title;
        bookDiv.appendChild(title);

        if (data.volumeInfo.authors !== undefined) {
        const author = document.createElement('p');
        author.innerHTML = data.volumeInfo.authors;
        bookDiv.appendChild(author);
        }

        const cover = document.createElement('img');
        cover.setAttribute('src', data.volumeInfo.imageLinks.thumbnail);
        bookDiv.appendChild(cover);

        bookDiv.appendChild(createDescriptionButton())

        const description = document.createElement('p');
        description.innerHTML = data.volumeInfo.description;
        document.querySelector('.modal').appendChild(description);

        const showModal = document.querySelector('.description')
        const descriptionButton = document.querySelector('.description-button')
        descriptionButton.addEventListener('click', () => {
        showModal.classList.add('display-description')
        });

        searchResults.appendChild(bookDiv);
    })

}

function createDescriptionButton() {
    let descriptionButton = document.createElement('button')
    descriptionButton.innerHTML = 'Show Descrition'
    descriptionButton.setAttribute('class', 'description-button')
    // descriptionButton.addEventListener('click', handleDelete)
    return  descriptionButton
}

// const descriptionButton = document.querySelector('.description-button')
// const description = document.querySelector('.description')

// descriptionButton.addEventListener('click', () => {
//     description.classList.add('display-description')
// });

