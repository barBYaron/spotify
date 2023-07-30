var singersArr = getSingersFromLocalStorage();
var songsArr = getSongsFromLocalStorage();
var singer;
var selectedSinger = localStorage.getItem("selectedSinger");
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
console.log(singerSongs);
