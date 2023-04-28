let songIndex = 0;
let musicElement = new Audio('music/4.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gifimg = document.getElementById('gif');
let gifimg1 = document.getElementById('gif1');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let musicbox = Array.from(document.getElementsByClassName('songItemPlay'));
let music = [
    {
        audioName: 'Ni Lake 3Peg Baliye',
        filePath: 'music/1.mp3',
        coverPath: 'covers/1.jpg'
    },
    {
        audioName: 'Brown Rang --Yo Yo Honey Singh',
        filePath: 'music/2.mp3',
        coverPath: 'covers/2.jpg'
    },
    {
        audioName: 'O Saki Saki',
        filePath: 'music/3.mp3',
        coverPath: 'covers/3.jpg'
    },
    {
        audioName: 'Kaho Na Kaho',
        filePath: 'music/4.mp3',
        coverPath: 'covers/4.jpg'
    },
    {
        audioName: 'Give Me Some Sunshine',
        filePath: 'music/5.mp3',
        coverPath: 'covers/5.jpg'
    },
    {
        audioName: '16 vi taypya',
        filePath: 'music/6.mp3',
        coverPath: 'covers/6.jpg'
    },
    {
        audioName: 'Manali Trance',
        filePath: 'music/7.mp3',
        coverPath: 'covers/7.jpg'
    },
    {
        audioName: 'Tu thaam le jo daman',
        filePath: 'music/8.mp3',
        coverPath: 'covers/8.jpg'
    },
    {
        audioName: 'Thar Kuriyo -Ap Dhillon',
        filePath: 'music/10.mp3',
        coverPath: 'covers/10.jpg'
    }
];
// Playing / pausing Music
masterPlay.addEventListener('click', () => {
    if (musicElement.paused || musicElement.currentTime <= 0) {
        musicElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gifimg.style.opacity = 1;
        gifimg1.style.opacity = 0.5;
    } else {
        musicElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gifimg.style.opacity = 0;
        gifimg1.style.opacity = 0;
    }
})
// adding events in music 
musicElement.addEventListener('timeupdate', () => {
    //update seekbar
    let progress = parseInt((musicElement.currentTime / musicElement.duration) * 100);
    myProgressBar.value = progress;
    if (musicElement.currentTime == musicElement.duration) {
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gifimg.style.opacity = 0;
        gifimg1.style.opacity = 0;
    }
})
//progressbar update
myProgressBar.addEventListener('change', () => {
    musicElement.currentTime = myProgressBar.value * musicElement.duration / 100;

})

//giving src and title of song
songItems.forEach((element, i) => {
    element.getElementsByClassName('itemImg')[0].src = music[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = music[i].audioName;
});

//playing music on click on the music tab

let makeallplays = () => {
    musicbox.forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-play-circle')
    })
}
musicbox.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-circle-pause');
        musicElement.src = `music/${songIndex + 1}.mp3`;
        document.getElementById('msName').innerText = music[songIndex].audioName;
        musicElement.currentTime = 0;
        musicElement.play();
        gifimg.style.opacity = 1;
        gifimg1.style.opacity = 0.5;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

//previous button
document.getElementById('prev').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1
    }
    musicElement.src = `music/${songIndex + 1}.mp3`;
    document.getElementById('msName').innerText = music[songIndex].audioName;
    musicElement.currentTime = 0;
    musicElement.play();
    gifimg.style.opacity = 1;
    gifimg1.style.opacity = 0.5;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
//Next button click
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 8) {
        songIndex = 0
    }
    else {
        songIndex += 1
    }
    musicElement.src = `music/${songIndex + 1}.mp3`;
    document.getElementById('msName').innerText = music[songIndex].audioName;
    musicElement.currentTime = 0;
    musicElement.play();
    gifimg.style.opacity = 1;
    gifimg1.style.opacity = 0.5;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})


// space bar function.

document.onkeydown = function (e) {
    if (e.keyCode === 32) {
    if (musicElement.paused) { 
    musicElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gifimg.style.opacity = 1;
    gifimg1.style.opacity = 0.5;
    } else {
    musicElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gifimg.style.opacity = 0;
    gifimg1.style.opacity =0;
    }
    }
    }
    
    
    
    
    
    