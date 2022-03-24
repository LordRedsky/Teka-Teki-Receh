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
    // console.log(acak);
    const question = quiz[acak].question
    console.log(question);

    // const questionElement = document.getElementById('question')
}

questionsAndAnswer()

// console.log(questionsAndAnswer());