const albums = [
    {
        name:"Living Room",
        desc:"This is the Living Room",
        imgSrc: "images/livingRoom.png",
        albumID: 0
    },
    {
        name:"The Click",
        desc:"This is The Click",
        imgSrc: "images/theClick.jpg",
        albumID: 1
    },
    {
        name:"Neotheatre",
        desc:"This is Neotheare",
        imgSrc: "images/neotheater.jpg",
        albumID: 2
    },
    {
        name:"OKO",
        desc:"This is OKO",
        imgSrc: "images/oko.jpg",
        albumID: 3
    },
    {
        name:"Maybe Man",
        desc:"This is Maybe Man",
        imgSrc: "images/maybeMan.jpeg",
        albumID: 4
    }
]

let currentIndex = 2
let currentAlbum = albums[currentIndex];

const currentAlbumSelectionImage = document.getElementById("currentAlbumSelectionImage");
const currentAlbumSelectionName = document.getElementById("currentAlbumSelectionName");
const currentAlbumSelectionDesc = document.getElementById("currentAlbumSelectionDesc");

const item1 = document.getElementById("album1");
const item2 = document.getElementById("album2");
const item3 = document.getElementById("album3");
const item4 = document.getElementById("album4");
const item5 = document.getElementById("album5");

currentAlbumSelectionImage.src = albums[currentIndex].imgSrc;
currentAlbumSelectionName.innerText = albums[currentIndex].name;
currentAlbumSelectionDesc.innerText = albums[currentIndex].desc;

console.log(item1);

item1.addEventListener('click',()=>{
    currentIndex = 0;
    checkAlbum();
});

item2.addEventListener('click',()=>{
    currentIndex = 1;
    checkAlbum();
});

item3.addEventListener('click',()=>{
    currentIndex = 2;
    checkAlbum();
});

item4.addEventListener('click',()=>{
    currentIndex = 3;
    checkAlbum();
});

item5.addEventListener('click',()=>{
    currentIndex = 4;
    checkAlbum();
});

function checkAlbum(){
    console.log(currentIndex);
    for(let album of albums){
        if(currentIndex == album.albumID){
            currentAlbumSelectionImage.src = album.imgSrc;
            currentAlbumSelectionName.innerText = album.name;
            currentAlbumSelectionDesc.innerText = album.desc;
        }
    }
}