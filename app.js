const quiz = [
    {
        question: 'ゲーム史上最も売れたのは次のうちどれか？',
        answers: [
            'ファミコン', 
            'スイッチ', 
            'プレステ', 
            'DS'
        ],
        correct: 'DS'
    },{
        question: 'ADAPTにいないのは？',
        answers: [
            '小出', 
            '白浜', 
            '加藤', 
            '池田'
        ],
        correct: '池田'
    },{
        question: 'TWICEじゃないのは？',
        answers: [
            'JIHYO', 
            'MOMO', 
            'TAKUMI', 
            'NAYEON'
        ],
        correct: 'TAKUMI'
    },
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解！！');
        score++;
    }
    else {
        window.alert('バカなの？？');
    }
    quizIndex++;
    if (quizIndex < quizLength) {
        setupQuiz();
    }
    else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です．');
    }
};

let handleIndex = 0;
while (handleIndex < buttonLength) {
    $button[handleIndex].addEventListener('click', (e) => {
        clickHandler(e)
    })
    handleIndex++;
}