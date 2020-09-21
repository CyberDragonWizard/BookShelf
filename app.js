// key: DfnU9VwvPJOPJd5h3g2HWQ
// secret: 2n5rFBQ6g1vCRBgh1vShUxjzCipLgLBZSDJ9izEg8

const fetchData = async () => {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=annihilation'

    try {
        const response = await axios.get(url)
        console.log(response.data.items)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}
fetchData()