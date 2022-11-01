// 00. 속성값 dynamic 문서 객체 선택
let target = document.querySelector("#dynamic");
/*
  dynamic이라는 속성값을 가지는 문서 객체를 선택하라는 의미
  따라서 HTML 파일에 p 태그의 문서 객체가 할당된다.
*/

function randomString(){
  // 01. 배열 변수 작성
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"]

  // 02. stringArr 배열 변수 중에서 랜덤하게 하나를 선택
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  /*
    stringArr[i] : i+1번째 변수를 선택
    Math.random()*4 : 최대값 4 미만의 랜덤 숫자가 형성됨
    stringArr.length : stringArr의 길이를 의미
      이후, 콘솔창에서 console.log(Math.random()*stringArr.length)확인해보자.
      실제로는 자연수가 아니라, 실수 범위의 소수점까지 랜덤숫자가 형성됨, 다만, stringArr.length 미만 범위에서
    Math.floor() : Math 객체에 소수점을 버림 (for 자연수만 형성하기 위해)

    결과물 : Math.floor(Math.random() * stringArr.length)
  */

  // 03. selectString을 통해 선택된 문자열을 다시 배열로 만듦
  let selectStringArr = selectString.split("");
  /*
   split() : 선택된 문자열을 출력
   split("") : 선택된 문자열을 "글자"로 하나씩 낱개로 쪼갬
  */

  return selectStringArr;
}

// 04. selectStringArr로 만든 랜덤 글자 배열을 하나씩 '출력' 함수
function dynamic(randomArr){

  if(randomArr.length > 0){
    target.textContent += randomArr.shift();
    setTimeout(function(){
      dynamic(randomArr);
    }, 80);
  }else{
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString());
/*
  target : 00. 속성값 dynamic 문서 객체를 의미함
  random.shift(); : 'random'이라는 배열이 있으면, 해당 배열의 처음값(첫 번째 배열)부터 바깥으로 꺼내서 출력
  target.textContent += randomArr.shift(); : target 문서 객체에 textContent로 randomArr이 갖는 첫 번째 배열을 shift하여 꺼내서 출력을 의미, 따라서 'L'이 빠지고 빠진 'L'은 Website 화면에 출력

  상기 과정을 (아직 randomArr.length > 0일 때,) 반복하기 위해 재귀함수의 원리를 이용해 dynamic을 다시 호출하자.
    setTimeout(dynamic, 80); : 다만, setTimeout을 이용해서 0.8초의 간격으로 호출하자
    setTimeout(function(){
      dynamic(randomArr);
    }, 80); : dynamic을 다시 매개변수 randomArr로 변경하여 호출

  결과적으로 해당 function(함수)가 randomArr.length > 0까지 해당 함수는 계속 반복된다.
  dynamic(selectStringArr); : dynamic을 호출할 때, selectStringArr의 랜덤 글자 배열 호출
  dynamic(randomString()); : '함수'로 selectStringArr의 랜덤 글자 배열 호출
    ★ selectStringArr 변수에서 randomString() 함수로 바꾸는 이유 : 그냥 selectStringArr의 경우, 리셋 함수를 실행할 때, let stringArr부터 실행이 안되고, let selectStringArr로 넘어가므로 target.textContent = ""; 이후 작동이 안됨.

  그리고 출력이 다 되었으면,
    else를 통해 3초 뒤에 다른 매개변수를 다시 타이핑할 수 있도록 하자.
    resetTyping 함수를 만들자
*/

// 05. resetTyping으로 타이핑 '리셋' 함수
function resetTyping(){
  target.textContent = "";
  dynamic(randomString());
}
/*
  target.textContent = ""; : 기존 글자 배열을 공란으로 만들어 삭제
  dynamic(randomString()); : dynamic 함수를 randomArr을 randomString()으로 하여 호출
*/

// 커서 깜빡임 효과
function blink(){
  target.classList.toggle("active");
}
setInterval(blink, 500);
