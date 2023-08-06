const selectedIDarr: number[] = []

function handleSearchPlaylists(ev: any) {
    try {
        const searchTerms = ev.target.value;
        const pattern = new RegExp(searchTerms, 'i');

        const foundParagraphs: (string | undefined)[] = songs.map((paragraph, i) => {
            const isMatch = pattern.test(paragraph.name)
            if (isMatch && searchTerms != "") {
                return paragraph
            }
        }).filter((paragraph) => paragraph !== undefined);

        renderParagraphs(foundParagraphs, document.querySelector('.searchSolution'))

    } catch (error) {
        console.error(error)
    }
}


function renderParagraphs(paragraphs: (string | undefined)[], htmlElement: HTMLElement | null) {
    try {

        if (!htmlElement) throw new Error('htmlElement is required');
        const html = paragraphs.map(paragraph => renderParagraph(paragraph)).join(' ');
        htmlElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }
}

function renderParagraph(paragraph: string | undefined) {
    try {
        if (!paragraph) throw new Error('paragraph is required');
        const songID = idControll(paragraph)
        return `<button onclick="addToPlaylist(${songID})" class="found">
      <div class="found__artist">'${paragraph.artist}'</div>
      <div class="found__name">'${paragraph.name}'</div>
      <img class="found__img" src="${paragraph.img}" alt="">

      </button>`

    } catch (error) {
        console.error(error)
    }
}

function handleSongClick(songID) {
    localStorage.setItem("selectedSongId", songID)
    window.location.href = '../playSong/player.html?${songID}';
    // renderPlayer(song.id);
}
function addToPlaylist(id: number) {
    console.log(id)
    selectedIDarr.push(id)
    const selectedIDarrSTORE = JSON.stringify(selectedIDarr)
    localStorage.setItem("selectedIDarr", selectedIDarrSTORE)
    addToplaylistRoot(id);
}
function getSongById(id) {
    try {
        for (const element of songs) {
            if (element.id === id) {
                return element;
            }
        }
        // If the song with the given ID is not found, return null or throw an error.
        return null;
    } catch (error) {
        console.error(error);
        // Handle the error appropriately.
    }
}
const playlistRoot = document.querySelector(".playlistRoot") as HTMLElement;
function addToplaylistRoot(id) {
    const song = getSongById(id);
    const html =
        `<div class="playlistRoot__playlistSong">
        <img class="playlistRoot__playlistSong__img" src="${song.img}" alt="">
        <div class="playlistRoot__playlistSong__name">${song.name}</div>
        <div class="playlistRoot__playlistSong__artist">${song.artist}</div>
    </div>`
playlistRoot.innerHTML += html;
}

function createdPlaylistDone(ev:any){
    ev.preventDefault();
    debugger;
    const playlistName = ev.target.name.value;
    localStorage.setItem("newPlaylist", playlistName);
    window.location.href = "../main/main.html"


}
