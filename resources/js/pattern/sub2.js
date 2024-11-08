
// 검색을 하면 이미지가 사라지고 영화 컴포넌트 보여지게 만들기
document.addEventListener("DOMContentLoaded", function () {
    const selects = document.querySelectorAll(".main-search select");
    const input = document.querySelector(".main-search input[type='text']");
    const mainContImg = document.querySelector(".main-cont__img");
    const mainContWrap = document.querySelector(".main-cont__wrap");

    function checkAllFilled() {
        // 모든 select 요소가 선택되었는지 확인
        const allSelectsFilled = Array.from(selects).every(
            (select) => select.value && select.value !== ""
        );

        // input 요소가 비어있지 않은지 확인
        const isInputFilled = input.value.trim() !== "";

        if (allSelectsFilled && isInputFilled) {
            mainContImg.style.display = "none";
            mainContWrap.style.display = "flex"; // main-cont__wrap 표시
        } else {
            mainContImg.style.display = ""; // 조건이 충족되지 않으면 다시 표시
            mainContWrap.style.display = "none"; // main-cont__wrap 숨김
        }
    }

    // select 요소의 변경 이벤트 리스너 추가
    selects.forEach((select) => select.addEventListener("change", checkAllFilled));

    // input 요소의 포커스 아웃(blur) 이벤트 리스너 추가
    input.addEventListener("blur", checkAllFilled);
});