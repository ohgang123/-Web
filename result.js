document.addEventListener("DOMContentLoaded", function () {
    const resultElement = document.getElementById("result");
    const descriptionElement = document.getElementById("description");
    const restartButton = document.getElementById("restart-button");

    // 로컬 스토리지에서 사용자 결과 가져오기
    const userResult = localStorage.getItem("mbti_result");

    // 연서의 정답 (고정값)
    const correctAnswer = "KWCJD"; // 연서의 음식 취향 정답
    const correctDescription = "한식 덕후! 하지만 양식과 중식도 포기할 수 없는 미식가!";

    // 각 알파벳 설명 (고정 텍스트)
    const foodLabelsText = "K - 한식, W - 양식, C - 중식, J - 일식, D - 디저트";

    // "연서의 음식 취향 정답" 고정 텍스트
    const correctAnswerText = `연서의 음식 취향 정답: ${correctAnswer} - ${correctDescription}`;

    // 음식 유형별 설명 매핑 (앞 두 글자 기준)
    const foodDescriptions = {
        "KW": "한식과 양식을 넘나드는 균형 잡힌 미식가! 삼겹살과 파스타 둘 다 포기 못 해!",
        "KC": "중식과 한식을 사랑! 짜장면과 불고기를 모두 즐기는 스타일!",
        "KJ": "일식과 한식을 애정! 초밥과 김치찌개, 두 개의 조화를 완벽히 즐긴다!",
        "KD": "한식과 디저트를 모두 좋아! 떡볶이도 좋고, 케이크도 좋고!",
        "WK": "양식과 한식을 사랑! 브런치도 좋지만 따뜻한 국밥도 못 참지!",
        "WC": "양식과 중식을 즐기는 글로벌한 입맛! 스테이크와 마라탕, 둘 다 놓칠 수 없지!",
        "WJ": "양식과 일식을 선호! 크림 파스타와 초밥을 좋아하는 감각적인 미식가!",
        "WD": "양식과 디저트라면 완벽한 조합! 크로와상과 마카롱, 달달한 걸 좋아하는 타입!",
        "CK": "중식과 한식을 좋아! 얼큰한 짬뽕도, 된장찌개도 포기 못 해!",
        "CW": "중식과 양식을 즐기는 스타일! 짜장면도 좋고, 피자도 좋은!",
        "CJ": "일식과 중식을 애정! 초밥과 마라탕, 환상의 조합!",
        "CD": "중식과 디저트를 사랑! 탕수육도 좋고, 케이크도 환상적이지!",
        "JK": "일식과 한식을 골고루 즐기는 미식가! 규동과 삼겹살, 완벽한 조화!",
        "JW": "일식과 양식을 넘나드는! 초밥도 좋고, 크림 파스타도 놓칠 수 없지!",
        "JC": "일식과 중식을 애정하는 감각적인 입맛! 라멘과 짜장면, 고민할 필요 없어!",
        "JD": "일식과 디저트 덕후! 모찌도 좋고, 마카롱도 좋고, 달달한 게 좋아!"
    };

    if (userResult) {
        // 사용자 결과 표시
        resultElement.textContent = `${userResult}`;

        // 앞 두 글자로 설명 가져오기
        const prefix = userResult.substring(0, 2);
        descriptionElement.textContent = foodDescriptions[prefix] || "새로운 미식 유형이 탄생했어요!";

        // 연서의 음식 취향 정답 추가 (기존 설명 바로 아래)
        const correctAnswerElement = document.createElement("p");
        correctAnswerElement.textContent = correctAnswerText;
        correctAnswerElement.classList.add("text-center", "fw-bold", "mt-2"); // "mt-3" → "mt-2"로 간격 줄임

        // 각 알파벳 설명 추가 (정답 바로 아래)
        const labelsElement = document.createElement("p");
        labelsElement.textContent = foodLabelsText;
        labelsElement.classList.add("text-center", "fw-bold", "mt-2"); // "mt-3" → "mt-2"로 간격 줄임

        // 설명 요소 바로 아래에 추가 (빈 공간 줄이기)
        descriptionElement.insertAdjacentElement("afterend", correctAnswerElement);
        correctAnswerElement.insertAdjacentElement("afterend", labelsElement);
    } else {
        resultElement.textContent = "아직 테스트를 진행하지 않았습니다!";
        descriptionElement.textContent = "";
        restartButton.textContent = "테스트 하러 가기";
    }
});
