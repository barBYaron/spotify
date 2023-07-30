const singersArr:Singer[] = getSingersFromLocalStorage();
const songsArr:Song[] = getSongsFromLocalStorage();

let singer:Singer
const selectedSinger = localStorage.getItem("selectedSinger");
singersArr.forEach(option=> {
    if(option.id == selectedSinger){
       singer = option;
    }
    
})
const docTitle = document.querySelector(".titleRoot") as HTMLElement;

title(docTitle,singer);
function title(root:HTMLElement,singer:Singer){
    const html = `${singer.name}`
    root.innerHTML = html; 
}
const singerSongs:Songs[]=[]
songsArr.forEach(option=>{
    if(option.artist==singer.name){
        singerSongs.push(option);
    }
})
console.log(singerSongs)