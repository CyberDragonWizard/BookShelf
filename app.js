
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
        const bookContainer = document.createElement('div');
        bookContainer.className = 'book-container';

        const title = document.createElement('h3');
        title.innerHTML = data.volumeInfo.title;
        bookContainer.appendChild(title);

        if (data.volumeInfo.authors !== undefined) {
        const author = document.createElement('p');
        author.innerHTML = data.volumeInfo.authors;
        bookContainer.appendChild(author);
        }

        const cover = document.createElement('img');
        cover.setAttribute('src', data.volumeInfo.imageLinks.thumbnail);
        bookContainer.appendChild(cover);

        bookContainer.appendChild(createDescriptionButton())

        searchResults.appendChild(bookContainer);
    })

}

function createDescriptionButton() {
    let descriptionButton = document.createElement('button')
    descriptionButton.innerHTML = 'Show Descrition'
    descriptionButton.addEventListener('click', handleDelete)
    return  descriptionButton
}

function handleDelete() {
    this.parentNode.remove()
}