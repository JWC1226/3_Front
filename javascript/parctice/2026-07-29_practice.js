window.onload = function() { 
    /*
    js코드 작성시
    대상요소확인
    어떤 이벤트가 발생했을시 어떻게 동작해야하는지
    동작할 내용의 이벤트핸들러 함수에 정의
    */
   const textinput = document.querySelector("#textInput");
   textinput.addEventListener('keyup', function(){
    const inputValue = textinput.value;
    document.querySelector("#totalLength").textContent =  inputValue.length;
    document.querySelector("#noSpaceLength").textContent = inputValue.replace(/ /g, '').length;
   });

   const todos = ["커피한잔"];
    const todolist = document.querySelector("#todoList");
function rendortodo() {
    todolist.innerHTML = "";
    todos.forEach((value,index)=>{
        const liel = document.createElement("li");
    liel.className = "list-group-item";
    liel.textContent = value;

    document.querySelector("#todoList").appendChild(liel);
    });
   }

   const addtodobtn = document.querySelector("#addTodoBtn");
   addtodobtn.addEventListener('click', function() {
    const inputValue = document.querySelector("#todoInput").value;
    todos.push(inputValue);
    rendortodo();

    
   });
   rendortodo();

    let numbers = [];

    // numbers 배열의 데이터를 출력, 총합과 평균을 출력
    function showNumbers() {
        // 배열의 데이터를 콤마(,)로 구분해서 #numberArrayDisplay 영역에 출력
        //    배열 내 데이터를 구분자를 사용하여 하나의 문자열로 반환 : 배열.join(구분자)
        document.querySelector("#numberArrayDisplay").textContent = numbers.join(",");

        const sumDisplay = document.querySelector("#sumDisplay");
        const avgDisplay = document.querySelector("#avgDisplay");
        // 배열에 데이터가 없으면 직접 초기화
        if (numbers.length === 0) {
            sumDisplay.textContent = 0;
            avgDisplay.textContent = 0;
            return;
        }

        const total = numbers.reduce((sum, curr) => sum + curr, 0);
        // 합계 #sumDisplay 영역에 배열의 총 합 출력
        sumDisplay.textContent = total;
        // 평균 #avgDisplay 영역에 평균 출력
        avgDisplay.textContent = total / numbers.length;
    }

    // 1) [숫자 추가] 버튼
    const addBtn = document.querySelector("#addNumberBtn");
    // 2) click
    addBtn.addEventListener('click', function() {
        // numbers 배열에 입력된 값 추가
        let num = document.querySelector("#numberInput").value;
        if (num === '') {
            alert("숫자를 입력해주세요.");
            return;
        }
        num = Number(num);
        numbers.push(num);

        // showNumbers() 함수 호출하여 화면에 출력
        showNumbers();
    });

    // 1) [초기화] 버튼
    const clearBtn = document.querySelector("#clearNumbersBtn");

    // 2) click
    clearBtn.addEventListener('click', function() {
        // 배열을 초기화 -> 빈 배열을 저장
        numbers = [];

        // 입력 요소 초기화 -> value 속성을 '' 변경
        document.querySelector('#numberInput').value = '';

        // showNumbers() 함수를 호출하여 화면에 출력
        showNumbers();
    });

 }