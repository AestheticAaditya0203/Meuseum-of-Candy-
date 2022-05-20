const form = document.querySelector('#search');
const input = document.querySelector('#label');
//const button= document.querySelector('#btn'); 

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);

})

const makeImages = (shown) => {
    for (let result of shown) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}
