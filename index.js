const quiz = [{
        question: `Istri istri apa yang kecil ?`,
        answer: `microwife`
    },
    {
        question: `Gula gula apa yang bukan gula ?`,
        answer: `Gula aren't`
    },
    {
        question: `Gang apa yang selalu bikin ibu-ibu kesel ?`,
        answer: `Gang-guin suaminya`
    },
    {
        question: `Pemain bola mana yang beratnya 3kg ?`,
        answer: `Bambang Tabung Gas`
    },
    {
        question: `Bebek bebek apa yang jalannya mutar ke kiri terus ?`,
        answer: `Bebek dikunci stang`
    },
    {
        question: `Siapa presiden yang imut ?`,
        answer: `Kim Jong Unch`
    },
    {
        question: `Penyanyi luar negeri yang suka sepedaan ?`,
        answer: `Selena Gowes`
    },
    {
        question: `Buah apa yang nggak punya otak ?`,
        answer: `Semuanya`
    },
    {
        question: `Gajah apa yang belalainya pendek?`,
        answer: `Gajah Pesek`
    },
    {
        question: `Sayur apa yang muncul di akhir film?`,
        answer: `Tomat`
    }
]

function questionsAndAnswer() {
    for (let i = 0; i < quiz.length; i++) {
        document.getElementById(`pertanyaan${i+1}`).innerText = quiz[i].question
    }
}

questionsAndAnswer()


let nama;
let listScoreLeaderboard = []
let listNameLeaderboard = []

if (localStorage.length !== 0) {
    listNameLeaderboard = localStorage.Name.split(",")
    listScoreLeaderboard = localStorage.Score.split(",")
}

function clickFunc(origin, destination) {
    document.getElementById(`${origin}`).style.display = 'none'
    document.getElementById(`${destination}`).style.display = 'flex'
    nama = document.getElementById('nama').value
    if (origin === 'home' && !nama) {
        document.getElementById(`${origin}`).style.display = 'flex'
        document.getElementById(`${destination}`).style.display = 'none'
        if (!name) {
            alert("Nama tidak boleh kosong!!!")
        }
    } else if (origin === 'home' && nama.length > 8) {
        document.getElementById(`${origin}`).style.display = 'flex'
        document.getElementById(`${destination}`).style.display = 'none'
        if (!name) {
            alert("Nama terlalu panjang!!!")
        }
    }


    if (destination === 'home') {
        document.getElementById('nama').value = ''
        for (let i = 1; i <= 10; i++) {
            document.getElementById(`jawaban${i}`).value = ''
        }
    }
    if (destination === 'leaderboard') {
        document.getElementById('currentScore').innerText = cekJawaban()
        listNameLeaderboard.push(nama)
        listScoreLeaderboard.push(cekJawaban())
        window.localStorage.setItem('Name', listNameLeaderboard)
        window.localStorage.setItem('Score', listScoreLeaderboard)
        document.querySelector('.name').innerHTML = ''
        document.querySelector('.score').innerHTML = ''
        leaderboardRender()
    }

}

function cekJawaban() {

    let score = 0
    for (let i = 0; i < quiz.length; i++) {
        let perSoal = quiz[i]
        let perJawaban = perSoal.answer
        let jawabanUser = document.getElementById(`jawaban${i+1}`).value
        if (jawabanUser.toLowerCase() === perJawaban.toLowerCase()) {
            score += 10
        }
    }
    return score
}


function leaderboardRender() {
    let nameParent = document.querySelector('.name')
    let scoreParent = document.querySelector('.score')

    let nameArray = localStorage.Name.split(",")
    let scoreArray = localStorage.Score.split(",")

    let temp;
    let temp2;
    for (let i = 0; i < nameArray.length; i++) {
        for (let j = 0; j < nameArray.length; j++) {
            if (scoreArray[j] < scoreArray[j + 1]) {
                temp = scoreArray[j]
                scoreArray[j] = scoreArray[j + 1]
                scoreArray[j + 1] = temp

                temp2 = nameArray[j]
                nameArray[j] = nameArray[j + 1]
                nameArray[j + 1] = temp2
            }
        }
    }

    for (let i = 0; i < nameArray.length; i++) {
        let Name = nameArray[i]
        let pemain = document.createElement('h2')
        pemain.innerHTML = Name
        nameParent.appendChild(pemain)

        let Score = scoreArray[i]
        let nilai = document.createElement('h2')
        nilai.innerHTML = Score
        scoreParent.appendChild(nilai)
        if (i === 3) {
            break
        }
    }
}

if (localStorage.length !== 0) {
    leaderboardRender()
}