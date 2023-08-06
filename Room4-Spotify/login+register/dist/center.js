//classes - songs, singers, playlists
//class of oll the songs.
//song - id, name of the song, artist, audio.
var Song = /** @class */ (function () {
    function Song(id, name, artist, audio, img) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.audio = audio;
        this.img = img;
    }
    return Song;
}());
var songsArray = [
    new Song(1, 'Can not feel my face', 'Red Band', new Audio('../dist/media/redBand&ninet.mp3'), '../dist/media/220px-Red_-_band_press_photo.jpg'),
    new Song(5, 'קומה 58', 'עומר אדם', new Audio('../dist/media/[YT2mp3.info] - עומר אדם – קומה 58   (Prod. by Assaf Tzrouya) (128kbps).mp3'), '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg'),
    new Song(2, 'Peaches', 'Justin Bieber', new Audio('../dist/media/JustinBieber-Peaches.mp3'), '../dist/media/justin-bieber-gettyimages-1202421980.jpg'),
    new Song(3, 'Girls Like You', 'Maroon 5', new Audio('../dist/media/Maroon5-GirlsLikeYou.mp3'), '../dist/media/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg'),
    new Song(4, 'התעוררתי עם נמר', 'עומר אדם', new Audio('../dist/media/עומר אדם&איזי-התעוררתיעםנמר.mp3'), '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg'),
    new Song(6, '505', 'Justin Bieber', new Audio('../dist/media/505.mp3'), '../dist/media/justin-bieber-gettyimages-1202421980.jpg'),
    new Song(11, 'סיגליות', 'עומר אדם', new Audio('../dist/media/עומר אדם - סיגליות.mp3'), '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg'),
    new Song(12, "בן 30", 'עומר אדם', new Audio('../dist/media/עומר-אדם_בן30.mp3'), '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg'),
    new Song(13, "אני", 'עומר אדם', new Audio('../dist/media/עומר-אדם_אני.mp3'), '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg'),
    new Song(14, "חורף באוטו", 'עומר אדם', new Audio('../dist/media/עומר-אדם_חורף-באוטו.mp3'), '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg'),
    new Song(15, "יום שישי", 'עומר אדם', new Audio('../dist/media/עומר-אדם_יום-שישי.mp3'), '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg'),
    new Song(16, "מודה אני", 'עומר אדם', new Audio('../dist/media/עומר-אדם_מודה-אני.mp3'), '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg'),
    new Song(17, "שנינו הפכים", 'עומר אדם', new Audio('../dist/media/עומר-אדם_שנינו-הפכים.mp3'), '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg'),
    new Song(18, 'Powerful', 'Red Band', new Audio('../dist/media/[YT2mp3.info] - Full Trunk & Redband - Powerful (Major Lazer Cover) (128kbps).mp3'), '../dist/media/220px-Red_-_band_press_photo.jpg'),
    new Song(19, 'Wanna be yours', 'Red Band', new Audio('../dist/media/[YT2mp3.info] - נינט ורד בנד- Crazy (128kbps).mp3'), '../dist/media/220px-Red_-_band_press_photo.jpg'),
    new Song(20, 'Crazy', 'Red Band', new Audio('../dist/media/[YT2mp3.info] - Redband - אין כמו בבית (128kbps).mp3'), '../dist/media/220px-Red_-_band_press_photo.jpg'),
    new Song(21, 'Do I wanna know', 'Red Band', new Audio('../dist/media/[YT2mp3.info] - רד בנד וגל ניסמן - Do I wanna know (פול טראנק) (לייב אצל עידו פורת) (128kbps).mp3'), '../dist/media/220px-Red_-_band_press_photo.jpg'),
    new Song(22, 'Beauty And A Beat', 'Justin Bieber', new Audio('../dist/media/[YT2mp3.info] - Justin Bieber - Beauty And A Beat ft. Nicki Minaj (128kbps).mp3'), '../dist/media/justin-bieber-gettyimages-1202421980.jpg'),
    new Song(23, 'Boyfriend', 'Justin Bieber', new Audio('../dist/media/[YT2mp3.info] - Justin Bieber - Boyfriend (128kbps).mp3'), '../dist/media/justin-bieber-gettyimages-1202421980.jpg'),
    new Song(24, 'Ghost', 'Justin Bieber', new Audio('../dist/media/[YT2mp3.info] - Justin Bieber - Ghost (128kbps).mp3'), '../dist/media/justin-bieber-gettyimages-1202421980.jpg'),
    new Song(25, 'Intentions', 'Justin Bieber', new Audio('../dist/media/[YT2mp3.info] - Justin Bieber - Intentions (Official Video (Short Version)) ft. Quavo (128kbps).mp3'), '../dist/media/justin-bieber-gettyimages-1202421980.jpg'),
    new Song(26, 'Sorry', 'Justin Bieber', new Audio('../dist/media/[YT2mp3.info] - Justin Bieber - Sorry (PURPOSE _ The Movement) (128kbps).mp3'), '../dist/media/justin-bieber-gettyimages-1202421980.jpg'),
    new Song(27, 'What Do You Mean', 'Justin Bieber', new Audio('../dist/media/[YT2mp3.info] - Justin Bieber - What Do You Mean_ (128kbps).mp3'), '../dist/media/justin-bieber-gettyimages-1202421980.jpg'),
    new Song(28, 'Memories', 'Maroon 5', new Audio('../dist/media/[YT2mp3.info] - Maroon 5 - Memories (Official Video) (128kbps).mp3'), '../dist/media/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg'),
    new Song(29, 'One More Night', 'Maroon 5', new Audio('../dist/media/[YT2mp3.info] - Maroon 5 - One More Night (Official Music Video) (128kbps).mp3'), '../dist/media/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg'),
    new Song(30, 'Payphone', 'Maroon 5', new Audio('../dist/media/[YT2mp3.info] - Maroon 5 - Payphone ft. Wiz Khalifa (Explicit) (Official Music Video) (128kbps).mp3'), '../dist/media/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg'),
    new Song(31, 'She Will Be Loved', 'Maroon 5', new Audio('../dist/media/[YT2mp3.info] - Maroon 5 - She Will Be Loved (Official Music Video) (128kbps).mp3'), '../dist/media/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg'),
    new Song(32, 'Sugar', 'Maroon 5', new Audio('../dist/media/[YT2mp3.info] - Maroon 5 - Sugar (Official Music Video) (128kbps).mp3'), '../dist/media/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg'),
    new Song(33, 'This Love', 'Maroon 5', new Audio('../dist/media/[YT2mp3.info] - Maroon 5 - This Love (Official Music Video) (128kbps).mp3'), '../dist/media/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg'),
];
//class of oll the singers.
//singer - id, name of the singer, img, genre, songs.
var Singer = /** @class */ (function () {
    function Singer(id, name, img, genre, songs) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.genre = genre;
        this.songs = songs;
    }
    return Singer;
}());
var singersArray = getSingersFromLocalStorage();
if (singersArray.length === 0) {
    var singer1 = new Singer(1, 'Red Band', '../dist/media/220px-Red_-_band_press_photo.jpg', 'rock', []);
    var singer2 = new Singer(2, 'Justin Bieber', '../dist/media/justin-bieber-gettyimages-1202421980.jpg', 'pop', []);
    var singer3 = new Singer(3, 'Maroon 5', '../dist/media/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg', 'pop', []);
    var singer4 = new Singer(4, 'עומר אדם', '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg', 'mediterranean', []);
    singersArray.push(singer1, singer2, singer3, singer4);
}
;
// console.log(singersArray[1].songs)
//class how join singers and their songs.
var SingersSong = /** @class */ (function () {
    function SingersSong(singers, songs) {
        this.singers = singers;
        this.songs = songs;
        this.id = Math.random().toString(16).slice(2).toString();
    }
    return SingersSong;
}());
//create array of singers and their songs.
function createSingersSongsArray(singers, songs) {
    var singersSongsArray = [];
    var _loop_1 = function (singer) {
        var songsBySinger = songs.filter(function (song) { return song.artist === singer.name; });
        var singersSong = new SingersSong([singer], songsBySinger);
        singersSongsArray.push(singersSong);
    };
    for (var _i = 0, singers_1 = singers; _i < singers_1.length; _i++) {
        var singer = singers_1[_i];
        _loop_1(singer);
    }
    return singersSongsArray;
}
var singersSongsArray = createSingersSongsArray(singersArray, songsArray);
console.log(singersSongsArray.forEach(function (singersSong) { return singersSong.songs.forEach(function (song) { return console.log(song.name); }); }));
//
//songs local storage.
saveSongsToLocalStorage(songsArray);
function saveSongsToLocalStorage(song) {
    localStorage.setItem('songsArray', JSON.stringify(song));
}
function getSongsFromLocalStorage() {
    try {
        var songsStorage = localStorage.getItem('songsArray');
        if (!songsStorage)
            return [];
        var songsArray_1 = JSON.parse(songsStorage);
        if (!songsArray_1)
            throw new Error('Songs not found');
        if (!Array.isArray(songsArray_1))
            throw new Error('songsArray is not array');
        var songs = songsArray_1.map(function (song) { return new Song(song.id, song.name, song.artist, song.audio, song.img); });
        return songs;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
//singers local storage.
function saveSingersToLocalStorage(singer) {
    localStorage.setItem('singersArray', JSON.stringify(singer));
}
function getSingersFromLocalStorage() {
    try {
        var singersStorage = localStorage.getItem('singersArray');
        if (!singersStorage)
            return [];
        var singersArray_1 = JSON.parse(singersStorage);
        if (!singersArray_1)
            throw new Error('Singers not found');
        if (!Array.isArray(singersArray_1))
            throw new Error('singersArray is not array');
        var singers = singersArray_1.map(function (singer) { return new Singer(singer.id, singer.name, singer.img, singer.genre, singer.songs); });
        return singers;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
//singersSongs local storage.
function saveSingersSongsToLocalStorage(singersSong) {
    localStorage.setItem('singersSongsArray', JSON.stringify(singersSong));
}
;
function getSingersSongsFromLocalStorage() {
    try {
        var singersSongsStorage = localStorage.getItem('singersSongsArray');
        if (!singersSongsStorage)
            return [];
        var singersSongsArray_1 = JSON.parse(singersSongsStorage);
        if (!singersSongsArray_1)
            throw new Error('SingersSongs not found');
        if (!Array.isArray(singersSongsArray_1))
            throw new Error('singersSongsArray is not array');
        var singersSongs = singersSongsArray_1.map(function (singersSong) { return new SingersSong(singersSong.singers, singersSong.songs); });
        return singersSongs;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
;
