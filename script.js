//Initialize the variables

let songIndex = 0;
let audioElement = new Audio('songs/perfectsong.mp3');
// audioElement.play(); //this will play automatically when website opens in the background
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');


let songs = [
    {songName: "A Thousand Years", filePath: "songs/thousandyears.mp3", coverPath: "assets/thousandyearscoverpic.jpg" },
    {songName: "Ed Sheeran - Perfect", filePath: "songs/thousandyears.mp3", coverPath: "assets/perfectsongcoverimg.jpeg" },
    {songName: "Night Changes", filePath: "songs/thousandyears.mp3", coverPath: "assets/nightchangescover2.jpg" },
    {songName: "Lutt Putt Gaya(From 'Dunki')", filePath: "songs/thousandyears.mp3", coverPath: "assets/dunkicoverimg.jpeg" },
    {songName: "Hamari Adhuri Kahani", filePath: "songs/thousandyears.mp3", coverPath: "assets/hamariadhurikahanicoverimg.jpeg" },
    {songName: "Channa Mereya", filePath: "songs/thousandyears.mp3", coverPath: "assets/channamerayacoverimg.jpeg" },
]

//Handle Play/Pause click
masterPlay.addEventListener('click', ()=> {
   if (audioElement.paused || audioElement.currentTime <= 0) {
          audioElement.play()
          masterPlay.classList.remove('fa-circile-play');
          masterPlay.classList.add('fa-circle-pause');

    } else {
          audioElement.pause()
          masterPlay.classList.add('fa-circile-play');
          masterPlay.classList.remove('fa-circle-pause');
    }
})

//Listen to Events
myProgressBar.addEventListener('timeupdate', (element)=> {
    console.log(element);
})