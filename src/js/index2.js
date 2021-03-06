// step 1 요구사항 구현을 위한 전략

// TODO 메뉴 추가
// - [x] 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
// - [x] 메뉴의 이름을 입력 받고 버튼 입력으로 추가한다.
// - [x] 추가되는 메뉴의 마크업은 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>`안에
// 삽입
// - [x] 총 메뉴 갯수를 count하여 상단에 보여준다.
// - [x] 메뉴가 추가되고 나면, input 값은 빈 값으로 초기화한다.
// - [x] 사용자 입력값이 빈 값이라면 추가되지 않는다.

// TODO 메뉴 수정
// - [x] 메뉴의 수정은 button click event를 받고, 메뉴 수정하는 모달창이 뜬다.
// - [x] 모달창에서 신규메뉴명을 입력 받고, 확인 버튼을 누르면 메뉴가 수정된다.

// TODO 메뉴 삭제
// - [x] 메뉴의 삭제는 button click event를 받고, 메뉴 삭제 confirm 모달창이 뜬다.
// - [x] 확인 버튼을 클릭하면 메뉴가 삭제된다.
// - [x] 삭제 처리 후 총 메뉴 갯수를 count하여 상단에 보여준다. 요구사항 분석의 중요성을 알고 앞으로 프로그램을 만들기 전 항상
// 요구사항 분석의 중요성을 알고 앞으로 프로그램을 만들기 전 항상 요구사항 분석 철저하게 하기! 요구사항 분석이 왜 중요한가?? 목적을
// 명확하게 체크하지 않으면 길을 해맨다. 상세하게 기재하면 모르는 부분 막히는 부분을 알고 쉽게 해쳐나갈 수 있다. 모르는 부분은 기능
// 구현을 하면서 학습하면서 해결할 수 있다. 필요한 지식을 빠르게 파악하고 얻을 수 있다. Refactoring이란?? 코드에서 중복을
// 줄이고 가독성을 높여 줌

// 선택자 추가
const $ = (selector) => document.querySelector(selector);
// 총 개수 추가
const updateMenuCount = () => {
  const liCount = $("#espresso-menu-list").querySelectorAll("li").length;
  $(".menu-count").innerHTML = `총 ${liCount}개`;
};
// 메뉴 추가
const addMenu = () => {
  const espressoMenuName = $("#espresso-menu-name").value;
  const menuItemTemplate = (espressoMenuName) => {
    return `
                    <li class="menu-list-item d-flex items-center py-2">
                        <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
                        <button
                            type="button"
                            class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
                        >
                        수정
                        </button>
                        <button
                        type="button"
                        class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
                    >
                        삭제
                        </button>
                    </li>`;
  };

  // html을 넣을 때는 innerHTML활용(enter를 누를때마다 새롭게 덮어씌움) insertAdjacentHTML(원하는 위치 속성에
  // 맞게 추가 가능)
  $("#espresso-menu-list").insertAdjacentHTML(
    "beforeend",
    menuItemTemplate(espressoMenuName)
  );
  updateMenuCount();
  // input 입력 후 빈 문자열로 초기화
  $("#espresso-menu-name").value = "";
};

function App() {
  // 메뉴 수정
  const editMenu = (event) => {
    if (event.target.classList.contains("menu-edit-button")) {
      const $menuName = event.target.closest("li").querySelector(".menu-name");
      const updatedMenuName = prompt(
        "메뉴명을 수정하세요",
        $menuName.innerText
      );
      $menuName.innerText = updatedMenuName;
    }
  };

  const deleteMenu = (event) => {
    if (event.target.classList.contains("menu-remove-button")) {
      const find = confirm("정말 삭제하시겠습니까?");
      if (find === true) {
        event.target.closest("li").remove();
        const menuDeleteCount = $("#espresso-menu-list").querySelectorAll(
          "li"
        ).length;
        $(".menu-count").innerHTML = `총 ${menuDeleteCount}개`;
      }
    }
  };
  $("#espresso-menu-list").addEventListener("click", (event) => {
    editMenu(event);
    deleteMenu(event);
  });

  // form 태그가 자동으로 전송되는걸 막아준다.
  $("#espresso-menu-form").addEventListener("submit", (event) => {
    event.preventDefault();
  });
  // 메뉴의 이름을 입력받는 건
  $("#espresso-menu-form").addEventListener("keypress", (event) => {
    // 엔터키 입력 시 그리고 form에 값이 존재 할 때
    if (event.key !== "Enter") {
      return;
    }
    if ($("#espresso-menu-name").value === "") {
      alert("값을 입력해주세요.");
      return;
    }
    addMenu();
  });
}

function buttonSubmit() {
  $("#espresso-menu-submit-button").addEventListener("click", (event) => {
    const espressoMenuName = $("#espresso-menu-name").value;
    if (espressoMenuName === "") {
      alert("메뉴를 입력해주세요");
      return;
    }
    addMenu();
  });
}

App();
buttonSubmit();
