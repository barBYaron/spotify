//classes - songs, singers, playlists

//class of oll the songs.
//song - id, name of the song, artist, audio.
class Song {
    constructor(public id: number, public name: string, public artist: string, public audio: HTMLAudioElement, public img: string) {
    }
}

const songsArray: Song[] = [
    new Song(1, 'Can not feel my face', 'Red Band', new Audio('../dist/media/redBand&ninet.mp3'), '../dist/media/220px-Red_-_band_press_photo.jpg'),
    new Song(5, 'קומה 58', 'עומר אדם', new Audio('../dist/media/[YT2mp3.info] - עומר אדם – קומה 58   (Prod. by Assaf Tzrouya) (128kbps).mp3'), '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg'),
    new Song(2, 'Peaches', 'Justin Bieber', new Audio('../dist/media/JustinBieber-Peaches.mp3'), '../dist/media/justin-bieber-gettyimages-1202421980.jpg',),
    new Song(3, 'Girls Like You', 'Maroon 5', new Audio('../dist/media/Maroon5-GirlsLikeYou.mp3'), '../dist/media/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg'),
    new Song(4, 'התעוררתי עם נמר', 'עומר אדם', new Audio('../dist/media/עומר אדם&איזי-התעוררתיעםנמר.mp3'), '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg'),
    new Song(6, '505', 'Justin Bieber', new Audio('../dist/media/505.mp3'), '../dist/media/justin-bieber-gettyimages-1202421980.jpg',),
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




]


//class of oll the singers.
//singer - id, name of the singer, img, genre, songs.
class Singer {

    constructor(public id: number, public name: string, public img: string, public genre: string, public songs: Song[]) {

    }
}

const singersArray: Singer[] = getSingersFromLocalStorage();
if (singersArray.length === 0) {
    const singer1 = new Singer(1, 'Red Band', '../dist/media/220px-Red_-_band_press_photo.jpg', 'rock', []);
    const singer2 = new Singer(2, 'Justin Bieber', '../dist/media/justin-bieber-gettyimages-1202421980.jpg', 'pop', []);
    const singer3 = new Singer(3, 'Maroon 5', '../dist/media/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg', 'pop', []);
    const singer4 = new Singer(4, 'עומר אדם', '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg', 'mediterranean', []);
    singersArray.push(singer1, singer2, singer3, singer4);
};
// console.log(singersArray[1].songs)

//class how join singers and their songs.
class SingersSong {
    id: string;
    constructor(public singers: Singer[], public songs: Song[]) {
        this.id = Math.random().toString(16).slice(2).toString();
    }
}

//create array of singers and their songs.
function createSingersSongsArray(singers: Singer[], songs: Song[]): SingersSong[] {
    const singersSongsArray: SingersSong[] = [];

    for (const singer of singers) {
        const songsBySinger = songs.filter(song => song.artist === singer.name);
        const singersSong = new SingersSong([singer], songsBySinger);
        singersSongsArray.push(singersSong);
    }

    return singersSongsArray;
}
const singersSongsArray = createSingersSongsArray(singersArray, songsArray);
console.log(singersSongsArray.forEach(singersSong => singersSong.songs.forEach(song => console.log(song.name))));
//

//songs local storage.
saveSongsToLocalStorage(songsArray)
function saveSongsToLocalStorage(song: Song[]) {
    localStorage.setItem('songsArray', JSON.stringify(song));
}

function getSongsFromLocalStorage(): Song[] {
    try {
        const songsStorage = localStorage.getItem('songsArray');

        if (!songsStorage) return [];

        const songsArray = JSON.parse(songsStorage);

        if (!songsArray) throw new Error('Songs not found');
        if (!Array.isArray(songsArray)) throw new Error('songsArray is not array');

        const songs = songsArray.map(song => new Song(song.id, song.name, song.artist, song.audio, song.img));
        return songs;
    } catch (error) {
        console.error(error);
        return [];
    }
}

//singers local storage.
function saveSingersToLocalStorage(singer: Singer[]) {
    localStorage.setItem('singersArray', JSON.stringify(singer));
}

function getSingersFromLocalStorage(): Singer[] {
    try {
        const singersStorage = localStorage.getItem('singersArray');

        if (!singersStorage) return [];

        const singersArray = JSON.parse(singersStorage);

        if (!singersArray) throw new Error('Singers not found');
        if (!Array.isArray(singersArray)) throw new Error('singersArray is not array');

        const singers = singersArray.map(singer => new Singer(singer.id, singer.name, singer.img, singer.genre, singer.songs));
        return singers;
    } catch (error) {
        console.error(error);
        return [];
    }
}

//singersSongs local storage.
function saveSingersSongsToLocalStorage(singersSong: SingersSong[]) {
    localStorage.setItem('singersSongsArray', JSON.stringify(singersSong));
};

function getSingersSongsFromLocalStorage(): SingersSong[] {
    try {
        const singersSongsStorage = localStorage.getItem('singersSongsArray');

        if (!singersSongsStorage) return [];

        const singersSongsArray = JSON.parse(singersSongsStorage);

        if (!singersSongsArray) throw new Error('SingersSongs not found');
        if (!Array.isArray(singersSongsArray)) throw new Error('singersSongsArray is not array');

        const singersSongs = singersSongsArray.map(singersSong => new SingersSong(singersSong.singers, singersSong.songs));
        return singersSongs;
    } catch (error) {
        console.error(error);
        return [];
    }
};