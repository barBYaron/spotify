var selectedIDarr = [];
function handleSearchPlaylists(ev) {
    try {
        var searchTerms_1 = ev.target.value;
        var pattern_1 = new RegExp(searchTerms_1, 'i');
        var foundParagraphs = songs.map(function (paragraph, i) {
            var isMatch = pattern_1.test(paragraph.name);
            if (isMatch && searchTerms_1 != "") {
                return paragraph;
            }
        }).filter(function (paragraph) { return paragraph !== undefined; });
        renderParagraphs(foundParagraphs, document.querySelector('.searchSolution'));
    }
    catch (error) {
        console.error(error);
    }
}
function renderParagraphs(paragraphs, htmlElement) {
    try {
        if (!htmlElement)
            throw new Error('htmlElement is required');
        var html = paragraphs.map(function (paragraph) { return renderParagraph(paragraph); }).join(' ');
        htmlElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderParagraph(paragraph) {
    try {
        if (!paragraph)
            throw new Error('paragraph is required');
        var songID = idControll(paragraph);
        return "<button onclick=\"addToPlaylist(" + songID + ")\" class=\"found\">\n      <div class=\"found__artist\">'" + paragraph.artist + "'</div>\n      <div class=\"found__name\">'" + paragraph.name + "'</div>\n      <img class=\"found__img\" src=\"" + paragraph.img + "\" alt=\"\">\n\n      </button>";
    }
    catch (error) {
        console.error(error);
    }
}
function handleSongClick(songID) {
    localStorage.setItem("selectedSongId", songID);
    window.location.href = '../playSong/player.html?${songID}';
    // renderPlayer(song.id);
}
function addToPlaylist(id) {
    console.log(id);
    selectedIDarr.push(id);
    var selectedIDarrSTORE = JSON.stringify(selectedIDarr);
    localStorage.setItem("selectedIDarr", selectedIDarrSTORE);
    addToplaylistRoot(id);
}
function getSongById(id) {
    try {
        for (var _i = 0, songs_1 = songs; _i < songs_1.length; _i++) {
            var element = songs_1[_i];
            if (element.id === id) {
                return element;
            }
        }
        // If the song with the given ID is not found, return null or throw an error.
        return null;
    }
    catch (error) {
        console.error(error);
        // Handle the error appropriately.
    }
}
var playlistRoot = document.querySelector(".playlistRoot");
function addToplaylistRoot(id) {
    var song = getSongById(id);
    var html = "<div class=\"playlistRoot__playlistSong\">\n        <img class=\"playlistRoot__playlistSong__img\" src=\"" + song.img + "\" alt=\"\">\n        <div class=\"playlistRoot__playlistSong__name\">" + song.name + "</div>\n        <div class=\"playlistRoot__playlistSong__artist\">" + song.artist + "</div>\n    </div>";
    playlistRoot.innerHTML += html;
}
function createdPlaylistDone(ev) {
    ev.preventDefault();
    debugger;
    var playlistName = ev.target.name.value;
    localStorage.setItem("newPlaylist", playlistName);
    window.location.href = "../main/main.html";
}
