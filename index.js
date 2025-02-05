const questions = [
    {
        id: 1,
        text: "연서가 지금 가장 먹고 싶은 것은? 1. 김치찌개 2. 스테이크",
        yes: "K",
        no: "W",
    },
    {
        id: 2,
        text: "연서가 면 요리 중에서 더 좋아하는 것은? 1. 짬뽕 2. 라멘",
        yes: "C",
        no: "J",
    },
    {
        id: 3,
        text: "연서가 식사 후에 꼭 먹어야 하는 것은? 1. 디저트 2. 추가 밥",
        yes: "D",
        no: "K",
    },
    {
        id: 4,
        text: "연서가 회식을 한다면? 1. 삼겹살 2. 피자",
        yes: "K",
        no: "W",
    },
    {
        id: 5,
        text: "연서가 배달을 시킨다면? 1. 중국음식 2. 일식",
        yes: "C",
        no: "J",
    },
    {
        id: 6,
        text: "연서가 아침 식사로 더 먹고 싶은 것은? 1. 죽 2. 크루아상",
        yes: "K",
        no: "W",
    },
    {
        id: 7,
        text: "연서가 뜨끈한 국물이 당길 때? 1. 설렁탕 2. 짬뽕",
        yes: "K",
        no: "C",
    },
    {
        id: 8,
        text: "연서가 한 가지 음식만 먹어야 한다면? 1. 초밥 2. 떡볶이",
        yes: "J",
        no: "K",
    },
    {
        id: 9,
        text: "연서가 디저트가 더 끌리는 순간은? 1. 케이크 2. 쿠키",
        yes: "D",
        no: "W",
    },
    {
        id: 10,
        text: "연서가 야식으로 더 땡기는 것은? 1. 마라탕 2. 돈까스",
        yes: "C",
        no: "J",
    },
    {
        id: 11,
        text: "연서가 브런치를 먹는다면? 1. 팬케이크 2. 비빔밥",
        yes: "W",
        no: "K",
    },
    {
        id: 12,
        text: "연서가 길거리 음식 중 하나만 선택해야 한다면? 1. 호떡 2. 타코야키",
        yes: "K",
        no: "J",
    },
    {
        id: 13,
        text: "연서가 치킨을 먹는다면? 1. 양념치킨 2. 깐풍기",
        yes: "K",
        no: "C",
    },
    {
        id: 14,
        text: "연서가 점심을 먹는다면? 1. 크림 파스타 2. 초밥",
        yes: "W",
        no: "J",
    },
    {
        id: 15,
        text: "연서가 단짠 조합 중에서 더 선호하는 것은? 1. 떡볶이+순대 2. 케이크+커피",
        yes: "K",
        no: "D",
    },
    {
        id: 16,
        text: "연서가 혼밥할 때 고른다면? 1. 국밥 2. 햄버거",
        yes: "K",
        no: "W",
    },
    {
        id: 17,
        text: "연서가 밥 없이도 괜찮다면? 1. 피자 2. 양장피",
        yes: "W",
        no: "C",
    },
    {
        id: 18,
        text: "연서가 가장 만족스러웠던 음식 경험은? 1. 고급 한식 코스요리 2. 미슐랭 양식 레스토랑",
        yes: "K",
        no: "W",
    },
    {
        id: 19,
        text: "연서가 오늘 기분에 따라 선택한다면? 1. 짬뽕 2. 파스타",
        yes: "C",
        no: "W",
    },
    {
        id: 20,
        text: "연서가 외국 여행을 간다면 가장 먼저 먹고 싶은 것은? 1. 일본 라멘 2. 중국 훠궈",
        yes: "J",
        no: "C",
    }
];


  
  // 현재 보여지는 질문의 인덱스
  let currentQuestionIndex = 0;
  
  // 각 질문에 대한 답변을 저장하는 배열
  const answers = [];
  
  // "예" 버튼 클릭 시 실행되는 함수
  function onYesButtonClick() {
    // 현재 질문에 대한 답변을 answers 배열에 저장
    answers[currentQuestionIndex] = questions[currentQuestionIndex].yes;
  
    // 다음 질문으로 이동
    currentQuestionIndex++;
  
    // 마지막 질문일 경우 결과 페이지로 이동
    if (currentQuestionIndex === questions.length) {
      calculateResult();
      return;
    }
  
    // 다음 질문으로 이동한 후, 해당 질문을 보여줌
    const nextQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const questionNumberElement = document.getElementById('question-number');
  
    questionElement.textContent = nextQuestion.text;
    questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;
  }
  
  // "아니오" 버튼 클릭 시 실행되는 함수
  function onNoButtonClick() {
    // 현재 질문에 대한 답변을 answers 배열에 저장
    answers[currentQuestionIndex] = questions[currentQuestionIndex].no;
  
    // 다음 질문으로 이동
    currentQuestionIndex++;
  
    // 마지막 질문일 경우 결과 페이지로 이동
    if (currentQuestionIndex === questions.length) {
      calculateResult();
      return;
    }
  
    // 다음 질문으로 이동한 후, 해당 질문을 보여줌
    const nextQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const questionNumberElement = document.getElementById('question-number');
  
    questionElement.textContent = nextQuestion.text;
    questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;
  }
  
  // 페이지 로드 시, 첫 번째 질문을 보여줌
  const firstQuestion = questions[0];
  const questionElement = document.getElementById('question');
  const questionNumberElement = document.getElementById('question-number');
  
  questionElement.textContent = firstQuestion.text;
  questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;
  
  // "예" 버튼과 "아니오" 버튼에 이벤트 부여
  const yesButton = document.getElementById('yes-button');
  const noButton = document.getElementById('no-button');
  
  yesButton.addEventListener('click', onYesButtonClick);
  noButton.addEventListener('click', onNoButtonClick);
  
  function calculateResult() {
    // 음식 카테고리별 점수 저장 객체
    const scores = { K: 0, W: 0, C: 0, J: 0, D: 0 };

    // 각 질문의 응답을 점수로 반영
    for (let i = 0; i < questions.length; i++) {
        const userAnswer = answers[i];
        scores[userAnswer]++;
    }

    // 점수가 높은 순서대로 정렬하여 최종 결과 생성
    const sortedFoodType = Object.entries(scores)
        .sort((a, b) => b[1] - a[1]) // 내림차순 정렬
        .map(entry => entry[0]) // 알파벳만 추출
        .join(""); // 문자열로 변환

    // 결과 값을 로컬 스토리지에 저장하고 result.html로 이동
    localStorage.setItem("mbti_result", sortedFoodType);
    location.href = "result.html";
}
