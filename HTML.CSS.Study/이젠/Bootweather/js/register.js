// 1. 회원가입 버튼을 눌렀을때 입력했는지 안했는지 확인

$(".register").click(function () {
  const email = $("#inputEmail3").val();
  const password = $("#inputPassword3").val();
  const gender = $("#gender").val();
  let like = "";

  // 라디오버튼의 value를 가져오는 방법
  // 여러개를 한꺼번에 가져오기 때문에 each를 사용
  $('input[name="gridRadios"]').each(function () {
    var value = $(this).val();
    //  $(this)는 선택자를 가져오는 요소(element)
    //  사용자가 체크한 값만 가져오기
    var checked = $(this).prop("checked"); //체크한 상태인지 아닌지 확인

    if (checked) {
      like = value;
      return; // 함수는 return분을 만나면 끝난다. (목적을 이루면 함수를 끝낸다.)
    }
  });

  // console.log(email, password, gender, like)
  //중요 null , undefinded , ''(빈문자열) , 0 => 무조건 false

  // 2. 비밀번호,이메일 양식에 맞지 않으면 알려주기
  if (!email) {
    //이메일을 입력된게 없을때
    alert("이메일을 입력해주세요!");
    return;
  } else {
    if (!emailCheck(email)) {
      //이메일 형식에 맞지 않을때 
      alert("이메일 형식에 맞지 않습니다");
      return;
    }
  } //이메일이 입력이 됐을때

  if (!password) {
    //패스워드에 입력된게 없을때
    alert("비밀번호를 입력해주세요");
    return;
  } else {
    if (!pwdCheck(password)) {
      //비밀번호 형식에 맞지 않을때
      alert("비밀번호는 특수문자/숫자/문자 포함 형태의 8~15자리 이내입니다.");
      return;
    }
  }
  if (!gender) {
    //성별선택을 안했을때
    alert("성별을 선택해주세요");
    return;
  }

  alert("회원가입이 완료 되었습니다!");
  location.href = "./index.html"
});

// 정규식
function pwdCheck(pwd) {
  //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
  const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return reg.test(pwd); //맞으면 ture , 틀리면 false를 준다.
}

function emailCheck(email) {
  const reg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return reg.test(email); //맞으면 true , 틀리면 false를 준다.
}
