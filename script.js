const newCatBtn = document.querySelector('.newCat');
const newCatBtnNoGif = document.querySelector('.newCatNG');

const catFrame = document.querySelector('.catImage');

newCatBtn.addEventListener('click', getCat);

/*NON GIF button*/
newCatBtnNoGif.addEventListener('click', getCatNG);

async function getCat(){
    const catData = await fetch('https://cataas.com/cat/gif?json=true');

    const catJSON = await catData.json();

    var catURLsuffix = catJSON.url;
    var catURL = 'https://cataas.com' + catURLsuffix;

    // console.log(catURL)

    catFrame.setAttribute('src', catURL);
}

async function getCatNG(){
    const catData = await fetch('https://cataas.com/cat?json=true');

    const catJSON = await catData.json();

    var catURLsuffix = catJSON.url;
    var catURL = 'https://cataas.com' + catURLsuffix;

    // console.log(catURL)

    catFrame.setAttribute('src', catURL);
}