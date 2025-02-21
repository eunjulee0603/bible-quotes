let verses = [];

fetch('verses.json')
    .then(response => response.json())
    .then(data => {
        verses = data;
        getRandomVerse();
    })
    .catch(error => {
        console.error("구절 불러오기 실패:", error);
    });

function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    document.getElementById("verse").textContent = verses[randomIndex];
}
