const searchForm = document.querySelector('#searchForm')
searchForm.addEventListener('submit', async function (e) {
    e.preventDefault()
    console.log('submitted')
    const searchTerm = searchForm.elements.query.value
    const config = { params: {q: searchTerm} }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    // console.log(res.data[0].show.image.medium)
    makeImages(res.data)
})

const makeImages = function (shows) {
    for(let result of shows) {
        if(result.show.image) {
            const img = document.createElement('IMG')
            img.src = result.show.image.medium
            document.body.append(img)
        }
    }

}