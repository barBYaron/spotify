var singersArr = getSingersFromLocalStorage();
var songsArr = getSongsFromLocalStorage();
var singer;
debugger;
var selectedSingerstored = localStorage.getItem("selectedSinger");
var selectedSinger = JSON.parse(selectedSingerstored);
singersArr.forEach(function (option) {
    if (option.id == selectedSinger) {
        singer = option;
    }
});
var docTitle = document.querySelector(".titleRoot");
title(docTitle, singer);
function title(root, singer) {
    var html = "" + singer.name;
    root.innerHTML = html;
}
var singerSongs = [];
songsArr.forEach(function (option) {
    if (option.artist == singer.name) {
        singerSongs.push(option);
    }
});
//creates the top header background img dinamicly
debugger;
var topHeader = document.querySelector(".topHeader");
topHeader.style.backgroundImage = "url(" + singer.img + ")";
topheaderCreator(topHeader);
function topheaderCreator(div) {
    var html = "<h1 class=\"topHeader__name\">" + singer.name + "</h1>";
    div.innerHTML += html;
}
songsCreator(singerSongs);
function songsCreator(songs) {
    var songsRoot = document.querySelector(".songsRoot");
    var html = songs.map(function (song) {
        debugger;
        return "\n    <div class=\"songsRoot__song\" onclick=\"openPlay(" + song.id + ")\">\n    <img class=\"songsRoot__song__img\" src=\"" + song.img + "\" alt=\"\">\n    <div \"songsRoot__song__name\">" + song.name + "</div>\n    </div>";
    }).join('');
    songsRoot.innerHTML = html;
}
function openPlay(song) {
    localStorage.setItem("selectedSongId", song);
    window.location.href = '../playSong/player.html?${song.id}';
}
