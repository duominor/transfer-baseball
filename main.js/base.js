gsap.registerPlugin(ScrollTrigger);


// ========================================
// 01. 인트로 타이핑
// ========================================

const typingText = document.querySelector(".typing_text");
const typingCursor = document.querySelector(".typing_cursor");

const titleText = "환승야구";
let typingIndex = 0;

function typingTitle() {

    typingCursor.textContent = "_";

    if (typingIndex < titleText.length) {

        typingText.textContent += titleText[typingIndex];
        typingIndex++;

        setTimeout(typingTitle, 280);
    }
}

setTimeout(typingTitle, 1100);



// ========================================
// 02. 배경 라이트
// ========================================

gsap.to(".light_01", {
    x: 260,
    y: 140,
    duration: 18,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".light_02", {
    x: -220,
    y: -120,
    duration: 22,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


// ========================================
// 인터뷰 배경 라이트
// ========================================

gsap.to(".interview_light_left", {
    x: 45,
    y: -30,
    scale: 1.08,
    duration: 17,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".interview_light_right", {
    x: -40,
    y: 35,
    scale: 1.12,
    duration: 19,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});



// ========================================
// 03. 둥실 움직임
// ========================================

function restartDungsil() {

    gsap.to(".dialogue_01", {
        x: 35,
        y: -20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".dialogue_02", {
        x: -30,
        y: 25,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".dialogue_03", {
        x: -25,
        y: -30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".dialogue_04", {
        x: 30,
        y: 18,
        duration: 6.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".dialogue_05", {
        x: -20,
        y: 30,
        duration: 7.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}

restartDungsil();

function startScrollCue() {

    gsap.killTweensOf(".story_scroll_cue");

    gsap.set(".story_scroll_cue", {
        opacity: 0.7,
        y: 0
    });

    gsap.to(".story_scroll_cue", {
        opacity: 0.25,
        y: 6,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}

// ========================================
// 04. 커플명 글자 분리
// ========================================

function splitCoupleName(selector) {

    const couple = document.querySelector(selector);

    if (!couple) return;

    const coupleText = couple.textContent.trim();

    couple.innerHTML = coupleText
        .split("")
        .map(char => `<span>${char === " " ? "&nbsp;" : char}</span>`)
        .join("");

    gsap.set(`${selector} span`, {
        opacity: 0
    });
}

splitCoupleName(".couple_01");
splitCoupleName(".couple_03");
splitCoupleName(".couple_04");
splitCoupleName(".couple_05");



// ========================================
// 05. 인터뷰 초기 설정
// ========================================

const interviewSection =
    document.querySelector(".interview_section");

const questionText =
    document.querySelector(".question_text");

const questionCursor =
    document.querySelector(".question_cursor");

const firstName =
    document.querySelector(".name_first");

const firstAnswer =
    document.querySelector(".answer_text_first");

const secondName =
    document.querySelector(".name_second");

const secondAnswer =
    document.querySelector(".answer_text_second");


// ========================================
// 커플별 인터뷰 데이터
// ========================================

const interviewData = {

    gwakcheol: {
        theme: "emerald",

        question:
            "Q. 헤어질 때 누가 먼저 말했나요?",

        firstName:
            "곽빈",

        firstAnswer:
            `"먼저 말한 사람이 중요한 건<br>
            아니었던 것 같습니다."`,

        secondName:
            "정철원",

        secondAnswer:
            `"제가 말했어요."`
    },


    sanggeon: {
        theme: "purple",

        question:
            "Q. 그때는 정말 ‘졌다’고 생각했나요?",

        firstName:
            "박상원",

        firstAnswer:
            `"네.<br>
            저는 끝까지 안 넘어갈 수 있을 줄 알았습니다."`,

        secondName:
            "박건우",

        secondAnswer:
            `"저는 이겼다고 생각한 적은 없어요.<br>
            그냥 상원이가 대답해주길 기다렸습니다."`
    },


    dongtae: {
        theme: "purple",

        question:
            "Q. X의 마음을 언제부터 알고 있었나요?",

        firstName:
            "문동주",

        firstAnswer:
            `"정확히는 몰랐습니다.<br>
              제가 그렇게 믿고 싶었던 적은 많았어요."`,

        secondName:
            "원태인",

        secondAnswer:
            `"생각보다 일찍 알았습니다.<br>
             동주는 숨기는 걸 잘하는 편은 아니니까요."`
    },



    yoonhan: {
        theme: "emerald",

        question:
            "Q. X의 마음을 잘 알고 있었다고 생각하나요?",

        firstName:
            "윤동희",

        firstAnswer:
            `"아니요, 지금도 잘 모르겠습니다."`,

        secondName:
            "한태양",

        secondAnswer:
            `"알고 있다고 생각했습니다."`
    }

};


// 현재 선택된 인터뷰
let currentInterview = null;
let currentInterviewKey = null;

let questionIndex = 0;

let interviewTriggerCreated = false;
let interviewPlayed = false;


// 답변 처음에 숨김
gsap.set(".interview_answer", {
    opacity: 0
});



// ========================================
// 06. 선택한 커플 인터뷰 세팅
// ========================================

function setInterview(coupleKey) {

    const data =
        interviewData[coupleKey];

    if (!data) return;

    currentInterview = data;
    currentInterviewKey = coupleKey; 


    // 현재 인터뷰 저장
    currentInterview = data;



    // 기존 테마 제거
    interviewSection.classList.remove(
        "theme-emerald",
        "theme-purple"
    );

    // 선택한 테마 추가
    interviewSection.classList.add(
        `theme-${data.theme}`
    );


    // 질문 초기화
    questionText.textContent = "";

    questionIndex = 0;


    // 커서 초기화
    questionCursor.textContent = "│";

    questionCursor.style.opacity = 1;

    questionCursor.style.animation = "";


    // 이름
    firstName.textContent =
        data.firstName;

    secondName.textContent =
        data.secondName;


    // 답변
    firstAnswer.innerHTML =
        data.firstAnswer;

    secondAnswer.innerHTML =
        data.secondAnswer;


    // 답변 다시 숨기기
    gsap.set(".interview_answer", {
        opacity: 0,
        x: 0
    });


    // 인터뷰 재생 상태 초기화
    interviewPlayed = false;
}



// ========================================
// 07. 인터뷰 질문 타이핑
// ========================================

function typingQuestion() {

    if (!currentInterview) return;


    const interviewQuestion =
        currentInterview.question;


    questionCursor.textContent = "_";


    if (
        questionIndex <
        interviewQuestion.length
    ) {

        questionText.textContent +=
            interviewQuestion[questionIndex];

        questionIndex++;


        setTimeout(
            typingQuestion,
            82
        );

    } else {

        setTimeout(() => {

            questionCursor.style.opacity = 0;

            questionCursor.style.animation =
                "none";


            playAnswers();

        }, 700);
    }
}



// ========================================
// 08. 인터뷰 답변 자동 재생
// ========================================

function playAnswers() {

    const tl =
        gsap.timeline();


    // 첫 번째 사람
    tl.fromTo(
        ".answer_first",

        {
            opacity: 0,
            x: -28
        },

        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out"
        }
    )


    // 잠깐 정지
    .to({}, {
        duration: 1.3
    })


    // 두 번째 사람
    .fromTo(
        ".answer_second",

        {
            opacity: 0,
            x: 28
        },

        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out"
        }
    )


    .to({}, {
        duration: 0.5
    })


    .call(function () {

    startInterviewScrollCue();

    if (threeWordsData[currentInterviewKey]) {
        setThreeWords(currentInterviewKey);
        openThreeWords();
    }
    });

}



// ========================================
// 09. 인터뷰 페이지 열기
// ========================================

function openInterview() {

    if (!interviewSection) return;


    interviewSection.classList.add(
        "is_open"
    );


    requestAnimationFrame(() => {

        ScrollTrigger.refresh();


        // 처음 한 번만 생성
        if (
            interviewTriggerCreated
        ) return;


        interviewTriggerCreated = true;


        ScrollTrigger.create({

            trigger:
                ".interview_section",

            start:
                "top 70%",

            onEnter: () => {

                if (
                    interviewPlayed
                ) return;


                interviewPlayed = true;


                setTimeout(() => {

                    typingQuestion();

                }, 500);

            }

        });


        ScrollTrigger.refresh();

    });
}


// ========================================
// 09. 공통 커플 선택 함수
// ========================================

function selectDialogue(
    dialogueSelector,
    coupleSelector,
    coupleInfoSelector = null,
    interviewKey  = null
) {

    const dialogue =
        document.querySelector(dialogueSelector);

    if (!dialogue) return;


    dialogue.addEventListener("click", function () {

        // 현재 둥실 멈춤
        gsap.killTweensOf(dialogueSelector);


        // ========================================
        // 선택 대사 중앙 이동 위치 계산
        // ========================================

        const rect =
            dialogue.getBoundingClientRect();

        const dungsilSection =
            document.querySelector(".dungsil_section");

        const sectionRect =
            dungsilSection.getBoundingClientRect();


        const currentCenterX =
            rect.left + rect.width / 2;

        const currentCenterY =
            rect.top + rect.height / 2;


        const targetX =
            sectionRect.left + sectionRect.width / 2;

        const targetY =
            sectionRect.top + sectionRect.height * 0.45;


        const moveX =
            targetX - currentCenterX;

        const moveY =
            targetY - currentCenterY;


        // ========================================
        // 선택 애니메이션
        // ========================================

        const tl = gsap.timeline();


        // 다른 대사 사라짐
        tl.to(
            `.dialogue:not(${dialogueSelector})`,
            {
                opacity: 0,
                duration: 0.6
            }
        )


        // 선택 대사 중앙 이동
        .to(dialogueSelector, {
            x: `+=${moveX}`,
            y: `+=${moveY}`,
            duration: 1.2,
            ease: "power2.inOut"
        })


        // 잠깐 정지
        .to({}, {
            duration: 0.8
        })


        // 커플명 활성화
        .set(coupleSelector, {
            opacity: 1
        })


        // 커플명 한 글자씩 등장
        .to(`${coupleSelector} span`, {
            opacity: 1,
            duration: 0.15,
            stagger: 0.12
        });


        // ========================================
        // 연애 기간 / 헤어진 기간
        // ========================================

        if (coupleInfoSelector) {

            tl.to({}, {
                duration: 0.35
            })

            .to(coupleInfoSelector, {
                opacity: 0.65,
                duration: 0.6
            });

        }


        // ========================================
        // 다시 고르기 + ↓
        // ========================================

        tl.to({}, {
            duration: 0.35
        })

        .to(".back_to_dungsil", {
            opacity: 0.65,
            duration: 0.5,
            pointerEvents: "auto"
        })

        .call(function () {
            startScrollCue();
        });


        // ========================================
        // 곽빈 × 정철원만 인터뷰 열기
        // ========================================

if (interviewKey) {

    tl.call(function () {

        setInterview(interviewKey);
        openInterview();

    });

}

    });
}


// ========================================
// 인터뷰 ↓
// ========================================

function startInterviewScrollCue() {

    gsap.killTweensOf(".interview_scroll_cue");

    gsap.set(".interview_scroll_cue", {
        opacity: 0.7,
        y: 0
    });

    gsap.to(".interview_scroll_cue", {
        opacity: 0.25,
        y: 6,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}

// ========================================
// 10. 각 대사 연결
// ========================================

// 곽빈 × 정철원
selectDialogue(
    ".dialogue_01",
    ".couple_01",
    ".couple_info_01",
    "gwakcheol"
);

// 박상원 × 박건우
selectDialogue(
    ".dialogue_03",
    ".couple_03",
    ".couple_info_03",
    "sanggeon"
);


// 문동주 × 원태인
selectDialogue(
    ".dialogue_04",
    ".couple_04",
    ".couple_info_04",
    "dongtae"
);


// 윤동희 × 한태양
selectDialogue(
    ".dialogue_05",
    ".couple_05",
    ".couple_info_05",
    "yoonhan"
);



// ========================================
// 11. 다시 고르기
// ========================================

const backButton = document.querySelector(".back_to_dungsil");

backButton.addEventListener("click", function () {

    gsap.killTweensOf(".dialogue");


    // 스크롤 화살표 중지 + 숨김
    gsap.killTweensOf(".story_scroll_cue");

    gsap.set(".story_scroll_cue", {
        opacity: 0,
        y: 0
    });

    const tl = gsap.timeline();


    // 버튼 숨김
    tl.to(".back_to_dungsil", {
        opacity: 0,
        duration: 0.3,
        pointerEvents: "none"
    })


    // 커플명 숨김
    .to(".couple_name", {
        opacity: 0,
        duration: 0.4
    })


    .to(".couple_info", {
    opacity: 0,
    duration: 0.3
    })




    // 커플명 글자 다시 숨김
    .set(".couple_name span", {
        opacity: 0
    })


    // 둥실 원위치
    .to(".dialogue", {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.inOut"
    })


    // 둥실 다시 표시
    .to(".dialogue", {
        opacity: 1,
        duration: 0.5
    })


    // 움직임 재시작
    .call(function () {
        restartDungsil();
    });
});



// ========================================
// 12. 인트로 → 둥실 스크롤
// ========================================

gsap.fromTo(
    ".dungsil_section",
    {
        yPercent: 100
    },
    {
        yPercent: 0,
        ease: "none",

        scrollTrigger: {
            trigger: ".opening_wrap",
            start: "top top",
            end: "+=100%",
            scrub: 1,
            pin: ".opening_wrap",
            anticipatePin: 1
        }
    }
);

// ========================================
// THREE WORDS
// ========================================


// ----------------------------------------
// 기본 요소
// ----------------------------------------

const threeWordsSection =
    document.querySelector(".three_words_section");

const storyWords =
    document.querySelectorAll(".story_word");

const wordsQuestion =
    document.querySelector(".words_question");

const wordsQuestionText =
    document.querySelector(".words_question_text");

const wordsQuestionCursor =
    document.querySelector(".words_question_cursor");

const wordsAnswerFirst =
    document.querySelector(".words_answer_first");

const wordsAnswerSecond =
    document.querySelector(".words_answer_second");

const wordsNameFirst =
    document.querySelector(".words_name_first");

const wordsNameSecond =
    document.querySelector(".words_name_second");

const wordsAnswerFirstText =
    document.querySelector(".words_answer_first_text");

const wordsAnswerSecondText =
    document.querySelector(".words_answer_second_text");

const wordsNextScrollCue =
    document.querySelector(".words_next_scroll_cue");

const backToKeywords =
    document.querySelector(".back_to_keywords");  
    
    
const word01 =
    document.querySelector(".word_01");

const word02 =
    document.querySelector(".word_02");

const word03 =
    document.querySelector(".word_03");    


// ========================================
// 키워드별 질문 + 답변
// ========================================

const threeWordsData = {

    gwakcheol: {

        theme: "emerald",

        firstName: "곽빈",
        secondName: "정철원",

        words: {

            word1: {
                label: "친구",

                question:
                    "Q. 연인이 되기 전과 후, 가장 달라진 건 무엇이었나요?",

                first:
                    "“크게 달라진 건 없었던 것 같습니다.<br>그래서 더 오래 만났던 것 같고요.”",

                second:
                    "“저는 오히려 더 조심하게 됐어요.<br>친구일 때는 안 하던 생각을 많이 했던 것 같아요.”"
            },

            word2: {
                label: "질투",

                question:
                    "Q. X의 어떤 모습이 가장 질투났나요?",

                first:
                    "“힘든 걸 다른 사람한테 먼저 말할 때요.<br>웃는 건 괜찮았는데, 그런 건 좀 싫었습니다.”",

                second:
                    "“빈이는 누구한테나 비슷했어요.<br>그래서 가끔 제가 특별한 사람인지 모르겠을 때가 있었어요.”"
            },

            word3: {
                label: "마지막",

                question:
                    "Q. 마지막으로 함께했던 날, 가장 기억나는 건 무엇인가요?",

                first:
                    "“날씨가 좋았습니다.<br>이상하게 그게 제일 먼저 생각나요.”",

                second:
                    "“빈이가 평소랑 똑같이 웃었던 거요.<br>그래서 더 이상했던 것 같아요.”"
            }
        }
    },


sanggeon: {

    theme: "purple",

    firstName: "박상원",
    secondName: "박건우",

    words: {

        word1: {
            label: "고백",

            question: "Q. 처음 마음을 확인한 순간을 기억하나요?",
            first: "“기억합니다.<br>생각했던 것보다 별일 없어서 조금 당황했습니다.”",
            second: "“웃었던 것 같아요.<br>상원이가 너무 심각한 얼굴을 하고 있어서요.”"
        },

        word2: {
            label: "익숙함",

            question: "Q. 연애하면서 어느 순간 당연해진 것이 있었나요?",
            first: "“연락이요.<br>하루가 끝나면 형한테 할 얘기가 하나씩 생겼습니다.”",
            second: "“같이 밥 먹는 거요.<br>약속을 잡지 않아도 자연스럽게 같이 있었어요.”"
        },

        word3: {
            label: "멈춤",

            question: "Q. X가 달라졌다고 처음 느낀 순간은 언제였나요?",
            first: "“제가 괜찮다고 하면 정말 괜찮은 줄 알기 시작했을 때요.<br>이상하게 그게 편하지 않았습니다.”",
            second: "“그 날은 더 묻는 게 좋은 건지 잘 모르겠더라고요.”"
        }
    }
},

dongtae: {

    theme: "purple",

    firstName: "문동주",
    secondName: "원태인",

    words: {

        word1: {
            label: "장난",

            question: "Q. X의 장난이 진심처럼 느껴진 적이 있었나요?",
            first: "“있었죠.<br>그래서 혼자 의미를 붙인 적도 많았습니다.”",
            second: "“있었습니다.<br>제가 진심으로 한 말도 동주는 장난인 줄 알았을 것 같고요.”"
        },

        word2: {
            label: "새벽",

            question: "Q. 친구였을 때와 연인이 된 뒤, 새벽의 대화는 달라졌나요?",
            first: "“달라졌어요.<br>전에는 아무 말이나 했는데, 사귀고 나서는 한 번씩 생각하고 보냈습니다.”",
            second: "“저는 비슷했던 것 같아요.<br>동주가 보내면 답하고, 그러다 늦게까지 얘기하고.”"
        },

        word3: {
            label: "다시",

            question: "Q. 다시 그때로 돌아가도 X와 연애를 시작할 건가요?",
            first: "“네, 그래도 시작했을 것 같아요.”",
            second: "“잘 모르겠습니다.<br>안 했으면 지금도 옆에 있었을 수도 있으니까요.”"
        }
    }
},

yoonhan: {

    theme: "emerald",

    firstName: "윤동희",
    secondName: "한태양",

    words: {

        word1: {
            label: "고양이",

            question: "Q. X의 장난이 진심처럼 느껴진 적이 있었나요?",
            first: "",
            second: ""
        },

        word2: {
            label: "3년",

            question: "Q. 친구였을 때와 연인이 된 뒤, 새벽의 대화는 달라졌나요?",
            first: "",
            second: ""
        },

        word3: {
            label: "먼저",

            question: "Q. 다시 그때로 돌아가도 X와 연애를 시작할 건가요?",
            first: "",
            second: ""
        }
    }
}



};


let currentThreeWords = null;
let currentThreeWordsKey = null;


function setThreeWords(coupleKey) {

    const data = threeWordsData[coupleKey];

    if (!data) return;


    currentThreeWords = data;
    currentThreeWordsKey = coupleKey;


    // 이름
    wordsNameFirst.textContent = data.firstName;
    wordsNameSecond.textContent = data.secondName;


    // 키워드
    word01.textContent = data.words.word1.label;
    word02.textContent = data.words.word2.label;
    word03.textContent = data.words.word3.label;


    // 테마
    threeWordsSection.classList.remove(
        "theme-emerald",
        "theme-purple"
    );

    threeWordsSection.classList.add(
        `theme-${data.theme}`
    );


    // 초기화
    wordsQuestionText.textContent = "";
    wordsAnswerFirstText.innerHTML = "";
    wordsAnswerSecondText.innerHTML = "";

    gsap.set([
        wordsQuestion,
        wordsAnswerFirst,
        wordsAnswerSecond,
        wordsNextScrollCue,
        backToKeywords
    ], {
        opacity: 0
    });

    gsap.set(backToKeywords, {
        pointerEvents: "none"
    });

    storyWords.forEach((word) => {

        word.style.pointerEvents = "auto";

        gsap.set(word, {
            x: 0,
            y: 0,
            opacity: 1
        });

    });
}





// ========================================
// THREE WORDS 섹션 열기
// ========================================

function openThreeWords() {

    if (!threeWordsSection) return;

    threeWordsSection.classList.add("is_open");

    requestAnimationFrame(() => {

        ScrollTrigger.refresh();

    });

}

// ========================================
// 단어 선택
// ========================================

storyWords.forEach((word) => {

    word.addEventListener("click", function () {

        if (!currentThreeWords) return;


        // 중복 클릭 방지
        storyWords.forEach((item) => {
            item.style.pointerEvents = "none";
        });


        // 선택한 키워드
        const selectedWord =
            word.dataset.word;

        const selectedData =
            currentThreeWords.words[selectedWord];

        if (!selectedData) return;


        // 답변 미리 넣기
        wordsAnswerFirstText.innerHTML =
            selectedData.first;

        wordsAnswerSecondText.innerHTML =
            selectedData.second;


        // 답변 초기화
        gsap.set([
            wordsAnswerFirst,
            wordsAnswerSecond
        ], {
            opacity: 0
        });


        // 선택 단어 위치 계산
        const rect =
            word.getBoundingClientRect();

        const sectionRect =
            threeWordsSection.getBoundingClientRect();


        const currentCenterX =
            rect.left + rect.width / 2;

        const currentCenterY =
            rect.top + rect.height / 2;


        const targetX =
            sectionRect.left + sectionRect.width / 2;

        const targetY =
            sectionRect.top + 100;


        const moveX =
            targetX - currentCenterX;

        const moveY =
            targetY - currentCenterY;


        // 선택 애니메이션
        const tl = gsap.timeline();


        tl.to(
            [...storyWords].filter(
                (item) => item !== word
            ),
            {
                opacity: 0,
                duration: 0.5
            }
        )

        .to(word, {
            x: moveX,
            y: moveY,
            duration: 0.9,
            ease: "power2.inOut"
        })

        .to({}, {
            duration: 0.6
        })

        .set(wordsQuestion, {
            opacity: 1
        })

        .call(function () {

            typingWordsQuestion(
                selectedData.question
            );

        });

    });

});



// ========================================
// 질문 타이핑
// ========================================

function typingWordsQuestion(question) {

    let index = 0;

    wordsQuestionText.textContent = "";

    wordsQuestionCursor.textContent = "_";
    wordsQuestionCursor.style.opacity = 1;


    function type() {

        if (index < question.length) {

            wordsQuestionText.textContent +=
                question[index];

            index++;

            setTimeout(type, 82);

        } else {

            setTimeout(() => {

                wordsQuestionCursor.style.opacity = 0;

                playWordsAnswers();

            }, 700);

        }

    }

    type();
}



// ========================================
// 답변 순차 등장
// ========================================

function playWordsAnswers() {

    const tl = gsap.timeline();


    // 첫 번째 사람
    tl.fromTo(
        wordsAnswerFirst,
        {
            opacity: 0,
            x: -28
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out"
        }
    )

    .to({}, {
        duration: 1.3
    })


    // 두 번째 사람
    .fromTo(
        wordsAnswerSecond,
        {
            opacity: 0,
            x: 28
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out"
        }
    )

    .to({}, {
        duration: 0.8
    })


    // 다른 키워드 보기
    .to(backToKeywords, {
        opacity: 0.65,
        duration: 0.5,
        pointerEvents: "auto"
    })


    // ↓
    .call(function () {
        startWordsNextScrollCue();
    });

}



// ========================================
// THREE WORDS ↓
// ========================================

function startWordsNextScrollCue() {

    gsap.killTweensOf(wordsNextScrollCue);

    gsap.set(wordsNextScrollCue, {
        opacity: 0.7,
        y: 0
    });

    gsap.to(wordsNextScrollCue, {
        opacity: 0.25,
        y: 6,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}



// ========================================
// 다른 키워드 보기
// ========================================

backToKeywords.addEventListener("click", function () {

    gsap.killTweensOf(wordsNextScrollCue);

    gsap.set(wordsNextScrollCue, {
        opacity: 0,
        y: 0
    });


    gsap.set(backToKeywords, {
        opacity: 0,
        pointerEvents: "none"
    });


    const tl = gsap.timeline();


    tl.to(
        [
            wordsQuestion,
            wordsAnswerFirst,
            wordsAnswerSecond
        ],
        {
            opacity: 0,
            duration: 0.4
        }
    )


    .to(storyWords, {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut"
    })


    .call(function () {

        wordsQuestionText.textContent = "";
        wordsQuestionCursor.style.opacity = 0;

        storyWords.forEach((word) => {
            word.style.pointerEvents = "auto";
        });

    });

});