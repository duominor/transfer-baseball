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

    oseom: {
        theme: "emerald",

        question:
            "Q. X와 헤어지는 걸 생각해본 적이 있었나요?",

        firstName:
            "오태곤",

        firstAnswer:
            `“없었던 것 같습니다.<br>
              힘들면 같이 힘들면 된다고 생각했어요.”`,

        secondName:
            "한유섬",

        secondAnswer:
            `“있었습니다.
             이상하게 잘 지낼 때 더 많이 생각했습니다.”`
    },



    sanggeon: {
        theme: "purple",

        question:
            "Q. 먼저 마음을 인정하면 지는 거라고 생각했나요?",

        firstName:
            "박상원",

        firstAnswer:
            `"네, 저는 끝까지 안 넘어갈 수 있을 줄 알았습니다."`,

        secondName:
            "박건우",

        secondAnswer:
            `"저는 이겼다고 생각한 적은 없어요.
              그냥 상원이가 대답해주길 기다렸습니다."`
    },


    dongtae: {
        theme: "purple",

        question:
            "Q. X와 연인이 됐다는 게 실감난 순간은 언제였나요?",

        firstName:
            "문동주",

        firstAnswer:
            `"처음 데이트했을 때요.<br>
              평소랑 똑같은데 괜히 다르게 느껴졌어요.”`,

        secondName:
            "원태인",

        secondAnswer:
            `"처음 손잡았을 때요. <br>그때는 좀 의식되더라고요."`
    },



    yoonhan: {
        theme: "emerald",

        question:
            "Q. X에게 좋아한다는 말을 자주 했나요?",

        firstName:
            "윤동희",

        firstAnswer:
            `"네, 생각나면 그냥 말했던 것 같아요."`,

        secondName:
            "한태양",

        secondAnswer:
            `"저도 표현은 했어요.<br>
              동희가 가끔 ‘그게 다야?’라고 하긴 했지만요."`
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
            sectionRect.top + sectionRect.height * 0.30;


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


// 오태곤 × 한유섬
selectDialogue(
    ".dialogue_02",
    ".couple_02",
    ".couple_info_02",
    "oseom"
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
    
oseom: {

    theme: "emerald",

    firstName: "오태곤",
    secondName: "한유섬",

    words: {

        word1: {
            label: "기다림",

            question: "Q. X가 자신을 기다리고 있다고 느낀 순간이 있었나요?",
            first: "“형이 늦으면 기다리면 되죠.<br>그걸 특별하게 생각한 적은 없었습니다.”",
            second: "“있었습니다. 저는 생각보다 그런 걸 오래 기억하는 편입니다.”"
        },

        word2: {
            label: "겁",

            question: "Q. X를 좋아하면서 가장 무서웠던 건 무엇이었나요?",
            first: "“형이 혼자 괜찮다고 결론 내리는 거요.<br>제가 괜찮은지는 안 물어보고.”",
            second: "“끝나는 거요.<br> 별일이 없을 때도 가끔 그런 생각을 했습니다.”"
        },

        word3: {
            label: "함께",

            question: "Q. 사랑하는 사람을 위해 포기할 수 있는 것도 사랑이라고 생각하나요?",
            first: "“잘 모르겠습니다.<br> 저는 같이 방법을 찾는 게 먼저라고 생각합니다.”",
            second: "“네. 그 사람한테 그게 더 좋은 일이라면요.”"
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
            first: "“당황했죠, 티 안내려고 했는데 형이 자꾸 웃었어요”",
            second: "“웃었던 것 같아요.<br>상원이가 너무 심각한 얼굴을 하고 있어서요.”"
        },

        word2: {
            label: "설렘",

            question: "Q. 사귀고 나서 설렜던 순간이 있었나요?",
            first: "“형이 처음으로 보고 싶다고 했을 때요, 티는 안 냈지만.”",
            second: "“같이 있다가 제가 잠깐 잠들었는데 깨니까 상원이가 옆에 있더라고요. 그때 좀 설렜어요.”"
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
            first: "“있었죠. 그래서 혼자 의미를 붙인 적도 많았습니다.”",
            second: "“있었습니다.<br>제가 진심으로 한 말도 동주는 장난인 줄 알았을 것 같고요.”"
        },

        word2: {
            label: "새벽",

            question: "Q. 친구였을 때와 연인이 된 뒤, 새벽의 대화는 달라졌나요?",
            first: "“달라졌어요. 전에는 아무 말이나 했는데, 사귀고 나서는 한 번씩 생각하고 보냈습니다.”",
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

            question: "Q. X를 고양이 같다고 생각한 이유는 무엇인가요?",
            first: "“제가 다가가면 멀어졌어요.<br> 그런데 진짜 멀어지려고 하면 또 먼저 왔고요.”",
            second: "“그건 동희 생각이고요.<br> 저는 그냥 제가 편할 때 간 겁니다.”"
        },

        word2: {
            label: "3년",

            question: "Q. 두 사람이 가까워진 3년을 어떻게 기억하나요?",
            first: "“제가 태양이한테 공들인 시간이요. 진짜 오래 걸렸다고 생각했습니다.”",
            second: "“저는 좀 다르게 기억합니다. 좋아하는 사람이 계속 가까워지던 시간이었어요.”"
        },

        word3: {
            label: "먼저",

            question: "Q. 둘 사이에서 누가 더 먼저 움직였다고 생각하나요?",
            first: "“저요. 거의 항상 제가 먼저였다고 생각했습니다.”",
            second: "“동희가 먼저 한 건 많습니다. <br>그런데 좋아한 건 제가 먼저였던 것 같아요.”"
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

        // 곽철에서 키워드를 하나라도 선택하면 X소개서 열기
if (currentThreeWordsKey === "gwakcheol") {
    openGwakcheolStory();
}


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






// x소개서

const storyData = {

    gwakcheol: {
        firstName: "곽빈",
        secondName: "정철원",

        firstTitle: "곽빈 → 정철원",
        secondTitle: "정철원 → 곽빈",

        theme: "emerald",


        firstLetter: [
            `철원이는 웃음도 눈물도 많은 사람이었습니다.
            기쁜 것도, 속상한 것도 잘 숨기지 못했고
            그래서 많은 사람들이 철원이의 여러 얼굴을 알고 있었습니다.`,

            `그게 가끔은 질투가 났습니다. 웃는 얼굴은 누구에게나 보여줘도 괜찮았는데,
            무너지는 모습만큼은 나한테만 보여줬으면 좋겠다고 생각했거든요.
            지금 생각하면 조금 이기적인 마음이었던 것 같습니다.`,

            `그런 마음까지 들게 할 만큼
            저는 철원이를 많이 좋아했습니다.
            저희를 보는 사람들은
            아마 꽤 잔잔한 연애를 했다고 생각했을 겁니다.
            그런데 잔잔하다는 게
            마음까지 작았다는 뜻은 아니었습니다.`,

            `저희는 잔잔했고,
            그만큼 뜨거웠습니다.
            그래서 헤어질 때도
            누가 잘못했다고 생각하지 않았습니다.
            좋아하는 마음이 없어진 것도 아니었습니다.`,

            `제가 아는 정철원은
            제가 가장 오래 설명하지 않아도 됐던 사람입니다.
            그리고 지금도
            그때의 저희가 잘못됐다고 생각하지 않습니다.`
        ],


        secondLetter: [
             `  빈이는 제 말을 잘 들어주는 사람이었습니다.
                제가 별것도 아닌 이야기를 오래 해도
                같이 웃어주는 사람이었습니다.`,

            `   그래서 저는 빈이 옆에서
                말을 참 많이 했습니다.
                좋은 일이 있어도 먼저 말했고,
                힘든 일이 있어도 다 말했습니다.
                그게 너무 당연해서
                언제부터 그렇게 됐는지는 잘 기억나지 않습니다.`,

            `   같이 있으면 제가 어떤 모습이어도
                괜찮을 것 같은 기분이 들었습니다.
                그래서 빈이한테는
                좋은 모습만 보여주고 싶다는 생각을
                별로 하지 않았던 것 같습니다.`,

            `   연인이 되고 나서도 크게 달라지지는 않았습니다.
                겉으로는요, 
                그런데 저는 생각보다 많이 설렜습니다.
                그래서 오래 갈 거라고 생각했던 것 같습니다.
                그리고 그만큼 같이 많은 걸 해보기도 했구요.`,

            `   제가 먼저 헤어지자고 했을때 
                빈이는 붙잡지 않았어요 사실.. 조금 서운하기도 했는데.. 
                그래도 헤어진 걸 후회하지 않습니다.
                빈이를 좋아했던 것도 후회하지 않고요.
                그 사람과 보낸 4년 3개월은
                끝났다고 해서 없어지는 시간이 아니니까요.`
        ],

        nextLove: {
            first:
                `네,
                철원이도 좋은 사람을 만났으면 좋겠습니다.
                힘들 때는 그 사람한테 꼭 말했으면 좋겠고요.`,

            second:
                `네,
                다시 누군가를 많이 좋아해보고 싶어요.`
        },

        nextPerson: {
            first: `귀여운 사람이요.
                제가 귀여운 사람을 좋아해서요.`,

            second: `좋아하면 좋아한다고 티 많이 내주는 사람이요.`
        }

       
    }

};


function initLetterFade() {

    gsap.utils.toArray(".letter_piece").forEach((piece) => {

        gsap.fromTo(piece,
            {
                opacity: 0.2,
                y: 15
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,

                scrollTrigger: {
                    trigger: piece,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

    });

}

function setStory(coupleKey) {

    const data = storyData[coupleKey];

    if (!data) return;

    // X소개서 이름
    document.querySelector(".x_name_first").textContent = data.firstTitle;
    document.querySelector(".x_name_second").textContent = data.secondTitle;

    // X소개서 본문
    document.querySelector(".x_body_first").innerHTML =
        data.firstLetter
            .map(text => `
                <div class="letter_piece">
                    <p>${text}</p>
                </div>
            `)
            .join("");

    document.querySelector(".x_body_second").innerHTML =
        data.secondLetter
            .map(text => `
                <div class="letter_piece">
                    <p>${text}</p>
                </div>
            `)
            .join("");

    // X END
    document.querySelector(".x_end_first").textContent = data.firstName;
    document.querySelector(".x_end_second").textContent = data.secondName;

    // NEXT LOVE
    document.querySelector(".next_name_first").textContent = data.firstName;
    document.querySelector(".next_name_second").textContent = data.secondName;

    document.querySelector(".next_text_first").innerHTML =
        data.nextLove.first;

    document.querySelector(".next_text_second").innerHTML = 
    data.nextLove.second;

    // NEXT PERSON
document.querySelector(".next_person_name_first").textContent = data.firstName;
document.querySelector(".next_person_name_second").textContent = data.secondName;

document.querySelector(".next_person_content .next_text_first").textContent =
    data.nextPerson.first;

document.querySelector(".next_person_content .next_text_second").textContent =
    data.nextPerson.second;


}

function initStoryAnimations() {

    // X소개서 후반부 밝아짐
    gsap.to(".x_letter_section", {
        backgroundColor: "#F1F0EB",
        color: "#111517",
        ease: "none",

        scrollTrigger: {
            trigger: ".x_letter_section",
            start: "76% center",
            end: "bottom bottom",
            scrub: true
        }
    });


    // 곽빈 × 정철원
    const xEndTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".x_end",
            start: "top top",
            end: "+=70%",
            scrub: true,
            pin: true
        }
    });

    xEndTl
        .to({}, { duration: 0.4 })
        .to(".x_end_mark", {
            opacity: 0,
            duration: 0.9
        });


    // NEXT LOVE
    gsap.to(".next_love_label", {
        opacity: 1,
        duration: 1,

        scrollTrigger: {
            trigger: ".next_love_content",
            start: "top 75%",
            toggleActions: "play none none none"
        }
    });


    gsap.to(".next_love_header h2", {
        opacity: 1,
        duration: 0.8,

        scrollTrigger: {
            trigger: ".next_love_content",
            start: "top 65%",
            toggleActions: "play none none none"
        }
    });


    gsap.utils.toArray(".next_answer").forEach((answer) => {

        gsap.fromTo(answer,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1.2,

                scrollTrigger: {
                    trigger: answer,
                    start: "top 55%",
                    toggleActions: "play none none none"
                }
            }
        );

    });


    // NEXT PERSON
gsap.to(".next_person_label", {
    opacity: 1,
    duration: 1,

    scrollTrigger: {
        trigger: ".next_person_content",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});

gsap.to(".next_person_header h2", {
    opacity: 1,
    duration: 0.8,

    scrollTrigger: {
        trigger: ".next_person_content",
        start: "top 65%",
        toggleActions: "play none none none"
    }
});

gsap.utils.toArray(".next_person_answer").forEach((answer) => {

    gsap.fromTo(
        answer,
        { opacity: 0 },
        {
            opacity: 1,
            duration: 1.2,

            scrollTrigger: {
                trigger: answer,
                start: "top 55%",
                toggleActions: "play none none none"
            }
        }
    );

});

}


let gwakcheolStoryOpened = false;

function openGwakcheolStory() {

    // 이미 열렸으면 다시 실행하지 않기
    if (gwakcheolStoryOpened) return;

    gwakcheolStoryOpened = true;

    // 곽철 X소개서 내용 넣기
    setStory("gwakcheol");

    // 숨겨둔 영역 열기
    document.querySelector(".x_letter_section").style.display = "block";
    document.querySelector(".x_end").style.display = "flex";
    document.querySelector(".next_intro").style.display = "flex";
    document.querySelector(".next_love_content").style.display = "block";
    document.querySelector(".next_person_content").style.display = "block";

    // 화면이 열린 다음 GSAP 연결
    requestAnimationFrame(() => {

        initLetterFade();
        initStoryAnimations();

        ScrollTrigger.refresh();

    });

}