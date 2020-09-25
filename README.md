# Project Overview

## Project Name

BookShelf

## Project Description

BookShelf is interactive search app. that allows a user to search for a specific book, read its description, and save/favorite results.

## API and Data Sample

'https://www.googleapis.com/books/v1/volumes?q=[bookTitleGoesHere]'

(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {kind: "books#volume", id: "qUo0AQAAQBAJ", etag: "DT+rKBOdOdY", selfLink: "https://www.googleapis.com/books/v1/volumes/qUo0AQAAQBAJ", volumeInfo: {…}, …}
1: {kind: "books#volume", id: "BtaVOPKPzssC", etag: "343QbgsS8NI", selfLink: "https://www.googleapis.com/books/v1/volumes/BtaVOPKPzssC", volumeInfo: {…}, …}
2: {kind: "books#volume", id: "pjBHDwAAQBAJ", etag: "0RwQi3zDW0I", selfLink: "https://www.googleapis.com/books/v1/volumes/pjBHDwAAQBAJ", volumeInfo: {…}, …}


## Wireframes

https://imgur.com/a/O7zdPN7


#### MVP 

- Find and use external api 
- Create a search bar that hits external api
- Display search results on the body of the page
- Create a description button the displays the description of the book from api
- Professionaly style with CSS
- Create animations for the interactive elements of the webpage

#### PostMVP  

- Add subtle SFX to the interactive elements of the web page
- Allow user to add search results to favorite bar
- More advanced styling

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Sept 21| Project Approval | Incomplete
|Sept 22| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Sept 23| MVP | Incomplete
|Sept 24| Post MVP/Styling | Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix

https://imgur.com/a/5gKXhKK

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with API | H | 5.5hrs|6  |  |
| DOM Manipulation | H | 7hrs|  9|  |
| HTML/Form Layout | H | 5hrs| 4.5 |  |
| Interaction via JS | H | 5.5hrs| 7.5 |  |
| CSS Styling| H | 8hrs| 9.5 |  |
| CSS Animations| H | 5hrs|4  |  |


| Total | H | hrs| 36 | 39.5 |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

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

This code is far too big and ugly but it took me forever to get to work, so I'm extra proud of it.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
