//Initialize the variables

let songIndex = 0;
let audioElement = new Audio('songs/perfectsong.mp3');
// audioElement.play(); //this will play automatically when website opens in the background
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let bottomTitle = document.getElementsByClassName('bottom-title');
let songBottomImg = document.getElementsByClassName('bottom-img');



let songs = [
    {songName: "A Thousand Years", filePath: "songs/athousandyears.mp3", coverPath: "assets/thousandyearscoverpic.jpg" },
    {songName: "Ed Sheeran - Perfect", filePath: "songs/perfectsong.mp3", coverPath: "assets/perfectsongcoverimg.jpeg" },
    {songName: "Night Changes", filePath: "songs/nightchanges.mp3", coverPath: "assets/nightchangescover2.jpg" },
    {songName: "Lutt Putt Gaya(From 'Dunki')", filePath: "songs/luttputtgaya.mp3", coverPath: "assets/dunkicoverimg.jpeg" },
    {songName: "Hamari Adhuri Kahani", filePath: "songs/hamariadhurikahani.mp3", coverPath: "assets/hamariadhurikahanicoverimg.jpeg" },
    {songName: "Channa Mereya", filePath: "songs/channamereya.mp3", coverPath: "assets/channamerayacoverimg.jpeg" },
]



songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('title')[0].innerText = songs[i].songName;
})


//Handle Play/Pause click
masterPlay.addEventListener('click', ()=> {
   if (audioElement.paused || audioElement.currentTime <= 0) {
          audioElement.src = songs[songIndex].filePath;    //song in 0 index will play first when we click master play button
          audioElement.play()
          masterPlay.classList.remove('fa-circle-play');
          masterPlay.classList.add('fa-circle-pause');
          gif.style.opacity = 1;

    } else {
          audioElement.pause()
          masterPlay.classList.add('fa-circle-play');
          masterPlay.classList.remove('fa-circle-pause');
          gif.style.opacity = 0;
    }
});

//Listen to Events and update progress bar according to song
audioElement.addEventListener('timeupdate', (element)=> {
    // console.log(element.timeStamp);
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100); 
    // console.log(progress);
    myProgressBar.value = progress;

    //If song ends Master button should change and gif hides
    if(myProgressBar.value == 100) {
        gif.style.opacity = 0;
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
    }
    
});

//adding eventListener to seek bar. When we seek progress bar, song will change to that part
myProgressBar.addEventListener('change',() => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration/100);
});

//make other buttons pause while click on particular song
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })

}

//add click event for each songItem play button
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filePath; 
        audioElement.currentTime = 0;
        audioElement.play();
        
        //also change masterbutton icon when click on song list 
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        bottomTitle[0].innerText = songs[songIndex].songName;
        
    })
})

//add eventlistener to next and previous buttons
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>4) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    bottomTitle[0].innerText = songs[songIndex].songName; //change song title in the bottom 
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    songBottomImg[0].src = songs[songIndex].coverPath;
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex == 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    bottomTitle[0].innerText = songs[songIndex].songName; //change song title in the bottom 
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    songBottomImg[0].src = songs[songIndex].coverPath;
})