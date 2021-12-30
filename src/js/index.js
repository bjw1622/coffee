// step 1 요구사항 구현을 위한 전략

// TODO 메뉴 추가
// - [] 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
// - [] 추가되는 메뉴의 마크업은 `<ul id="espresso-menu-list">`
// - [] 총 메뉴 갯수를 count하여 상단에 보여준다.
// - [] 메뉴가 추가되고 나면, input 값은 빈 값으로 초기화한다.
// - [] 사용자 입력값이 빈 값이라면 추가되지 않는다.

// TODO 메뉴 수정
// - [] 메뉴의 수정은 button click event를 받고, 메뉴 수정하는 모달창이 뜬다.
// - [] 모달창에서 신규메뉴명을 입력 받고, 확인 버튼을 누르면 메뉴가 수정된다.

// TODO 메뉴 삭제
// - [] 메뉴의 삭제는 button click event를 받고, 메뉴 삭제 confirm 모달창이 뜬다.
// - [] 확인 버튼을 클릭하면 메뉴가 삭제된다.
// - [] 삭제 처리 후 총 메뉴 갯수를 count하여 상단에 보여준다.



// 요구사항 분석이 왜 중요한가??

// 목적을 명확하게 체크하지 않으면 길을 해맨다. 상세하게 기재하면 모르는 부분 막히는 부분을 알고 쉽게 해쳐나갈 수 있다.
// 모르는 부분은 기능 구현을 하면서 학습하면서 해결할 수 있다.
// 필요한 지식을 빠르게 파악하고 얻을 수 있다.

// const $ = (selector) => document.querySelector(selector);
const $ = function (selector){
    return document.querySelector(selector);
}

function App(){
    // form태그가 자동으로 전송되는걸 막아준다.
    $('#espresso-menu-form').addEventListener("submit",(event) => {
        event.preventDefault();
    })
    // 메뉴의 이름을 입력받는 건
    $('#espresso-menu-form').addEventListener('keypress',(event) =>{
        if(event.key === "Enter"){
            console.log($("#espresso-menu-name").value)
        }
    })
}
App();