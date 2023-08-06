const singersArr: Singer[] = getSingersFromLocalStorage();
const songsArr: Song[] = getSongsFromLocalStorage();

let singer: Singer
const selectedSinger = localStorage.getItem("selectedSinger");
singersArr.forEach(option => {
    if (option.id == selectedSinger) {
        singer = option;
    }

})
const docTitle = document.querySelector(".titleRoot") as HTMLElement;

title(docTitle, singer);
function title(root: HTMLElement, singer: Singer) {
    const html = `${singer.name}`
    root.innerHTML = html;
}
const singerSongs: Songs[] = []
songsArr.forEach(option => {
    if (option.artist == singer.name) {
        singerSongs.push(option);
    }
})
//creates the top header background img dinamicly
debugger;
const topHeader = document.querySelector(".topHeader") as HTMLElement;
topHeader.style.backgroundImage = `url(${singer.img})`
topheaderCreator(topHeader)
function topheaderCreator(div) {
const html = `<h1 class="topHeader__name">${singer.name}</h1>`
div.innerHTML += html;
}

songsCreator(singerSongs);
function songsCreator(songs: Song[]) {

    const songsRoot = document.querySelector(".songsRoot") as HTMLElement;
    const html = songs.map((song) => {
        debugger;
        return `
    <div class="songsRoot__song" onclick="openPlay(${song.id})">
    <img class="songsRoot__song__img" src="${song.img}" alt="">
    <div "songsRoot__song__name">${song.name}</div>
    </div>`;
    }).join('');
    songsRoot.innerHTML = html;
    
}




function openPlay(song) {
    localStorage.setItem("selectedSongId", song)
    window.location.href = '../playSong/player.html?${song.id}';
}