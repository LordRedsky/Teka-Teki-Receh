function questionsAndAnswer() {
    const quiz = [
        {
            question: `Istri istri apa yang kecil ?`,
            answer: `microwife`
        },
        {
            question: `Gula gula apa yang bukan gula ?`,
            answer: `Gula aren't`
        },
        {
            question: `Kenapa zombie kalau nyerang barengan ?`,
            answer: `Karena kalau sendri zomblo`
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
            question: `Hewan apa yang paling panjang ?`,
            answer: `Ular antri minyak goreng`
        },
        {
            question: `Kenapa anak Babi kalau jalan nunduk-nunduk?`,
            answer: `Karena malu ibunya Babi`
        },
        {
            question: `Istri istri apa yang kecil`,
            answer: `microwife`
        },
        {
            question: `Istri istri apa yang kecil`,
            answer: `microwife`
        },
        {
            question: `Istri istri apa yang kecil`,
            answer: `microwife`
        }
    ]

    const acak = Math.floor(Math.random() * quiz.length)
    const soal = quiz[acak]
    const questionElement = document.getElementById('tekaTeki')

    questionElement.innerHTML = soal.question

    return soal;
}

const question = questionsAndAnswer()
// console.log(question.value);
const answerElement = document.getElementById('jawaban1')
const cek = document.getElementById('submit')

cek.addEventListener('click', function () {
    console.log(answerElement.value.toLowerCase());
    console.log(question.answer.toLowerCase());
    let result = '' // true or false

    if (answerElement.value.toLowerCase() === question.answer.toLowerCase()) {
        result = 'benar';
    } else {
        result = 'salah'
    }
    console.log(result);
    answerElement.value = '' // reset text area
    // return result
})

const pertanyaanBaru = document.getElementById('next')

pertanyaanBaru.addEventListener('click', function () {
    question = questionsAndAnswer()
})