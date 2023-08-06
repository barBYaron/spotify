var songs = getSongsFromLocalStorage();
var singers = getSingersFromLocalStorage();
var singersSong = getSingersSongsFromLocalStorage();
//detect the profile you singedIn/Registered with
var profileID = localStorage.getItem("profileID");
var profiles = localStorage.getItem("profiles");
var profilesArr = JSON.parse(profiles);
var selectedProfilearr = profilesArr.filter(function (profile) { return (profile.id == profileID); });
var selectedProfile = selectedProfilearr[0];
console.log(selectedProfile);
//changing the document title
var docTitle = document.querySelector("#docTitle");
docTitleDynamic(docTitle, selectedProfile);
function docTitleDynamic(div, profile) {
    div.innerHTML = "SoundMaster - " + profile.firstName + "'s page";
}
//Makes a beautiful transition between the sections.
//copy from register.ts
var observerr = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});
var hiddennElements = document.querySelectorAll('.hiddenn');
hiddennElements.forEach(function (el) { return observerr.observe(el); });
//
greetingByName();
function greetingByName() {
    var name = selectedProfile.firstName;
    var div = document.querySelector("#greeting");
    var html = "<h1>Hello " + name + "!</h1>";
    div.innerHTML = html;
}
function getGreetingByTimeOfDay(rootElement, currentTime) {
    try {
        if (!rootElement)
            throw new Error("rootElement is null or undefined");
        var hours = currentTime.getHours();
        var greeting = "";
        if (hours >= 22 || hours < 5) {
            greeting = "Good Night";
        }
        else if (hours >= 5 && hours < 12) {
            greeting = "Good Morning";
        }
        else if (hours >= 12 && hours < 18) {
            greeting = "Good Afternoon";
        }
        else if (hours >= 18 && hours < 22) {
            greeting = "Good Evening";
        }
        else {
            greeting = "Good Day"; // Just in case there's an error or unexpected input
        }
        if (rootElement) {
            rootElement.innerText = greeting;
        }
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
var headerElement = document.querySelector("#header");
getGreetingByTimeOfDay(headerElement, new Date());
//show recently heard songs.
function renderSongs(rootElement, songs) {
    try {
        if (!rootElement)
            throw new Error('Root element is not found');
        if (!songs)
            throw new Error('Songs not found');
        var slicedSongs = songs.slice(0, 4); // Take the first 6 songs
        var html = slicedSongs.map(function (song) {
            return "\n                   <button class=\"recentlyHeard__box box\" onclick=\"openPlay(this)\" id=\"" + song.id + "\">\n                     <img src=\"" + song.img + "\">\n                     <h3>" + song.name + "</h3>\n                 </button>";
        }).join('');
        rootElement.innerHTML = html;
        saveSongsToLocalStorage(songsArray);
        // console.log(html)
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
renderSongs(document.querySelector('#recentlyHeard'), songsArray);
//open play song page.
function openPlay(song) {
    localStorage.setItem("selectedSongId", song.id);
    window.location.href = '../playSong/player.html?${song.id}';
    // renderPlayer(song.id);
}
//get random song.
function getRandomSong(songs) {
    try {
        if (!songs)
            throw new Error('Songs not found');
        if (songs.length === 0) {
            return null;
        }
        var randomIndex = Math.floor(Math.random() * songs.length);
        return songs[randomIndex];
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
//render random song.
function displayRandomSong(rootElement, songs) {
    try {
        if (!rootElement)
            throw new Error('Root element is not found');
        if (!songs)
            throw new Error('Songs not found');
        var randomSong = getRandomSong(songs);
        if (randomSong && rootElement) {
            var html = "\n        <button onclick=\"openPlay(this)\" class=\"randomSong\" id=\"" + randomSong.id + "\">\n          <img src=\"" + randomSong.img + "\" alt=\"" + randomSong.name + "\">\n          <h2>" + randomSong.name + "</h2>\n        </button> ";
            rootElement.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
displayRandomSong(document.querySelector("#randomSong"), songsArray);
//difaind the audio element.
// Function to play audio when clicking on the image
function playAudio(audioElement) {
    //difaind the audio element.
    // Get the audio element
    var audio = audioElement;
    // Check if the audio is paused or not
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
}
//create playlist for each singer.
// Function to render the playlist of songs for each singer on the DOM
function renderPlaylist(rootElement, singer) {
    try {
        if (!rootElement)
            throw new Error('Root element is not found');
        if (!singer)
            throw new Error('Singer not found');
        var html = singer.map(function (singer) {
            return "\n            <div class=\"playlistBySinger box\" onclick=\"renderSingerPage(" + singer.id + ")\">\n              <img src=\"" + singer.img + "\" >\n              <h3>" + singer.name + "</h3>\n            </div>";
        }).join('');
        rootElement.innerHTML = html;
        saveSingersToLocalStorage(singer);
        // console.log(html)
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
renderPlaylist(document.querySelector('#playlistContainer'), singersArray);
function renderSingerPage(id) {
    debugger;
    console.log("function activated");
    localStorage.setItem("selectedSinger", id);
    window.location.href = "../singer/singer.html";
}
function search() {
    var searchBar = document.querySelector(".headerSection__searchSection");
    var searchIcon = document.querySelector("#searchLogo");
    searchIcon.style.display = "none";
    searchBar.style.width = "6vw";
}
function idControll(paragraph) {
    try {
        var matchedSong = songs.find(function (song) { return "" + song.name === paragraph.name; });
        if (matchedSong) {
            return matchedSong.id;
        }
        return null;
    }
    catch (error) {
        console.error(error);
    }
}
// RegExp
function handleSearch(ev) {
    debugger;
    try {
        var searchTerms_1 = ev.target.value;
        var pattern_1 = new RegExp(searchTerms_1, 'i');
        var foundParagraphs = songs.map(function (paragraph, i) {
            var isMatch = pattern_1.test(paragraph.name);
            if (isMatch && searchTerms_1 != "") {
                return paragraph;
            }
        }).filter(function (paragraph) { return paragraph !== undefined; });
        renderParagraphs(foundParagraphs, document.querySelector('#headerSection__paragraphs'));
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
        return "<button onclick=\"handleSongClick(" + songID + ")\" class=\"found\">\n      <div class=\"found__artist\">'" + paragraph.artist + "'</div>\n      <div class=\"found__name\">'" + paragraph.name + "'</div>\n      <img class=\"found__img\" src=\"" + paragraph.img + "\" alt=\"\">\n\n      </button>";
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
//   -----------------------------
