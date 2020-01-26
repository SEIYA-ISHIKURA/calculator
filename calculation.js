//数値の定義
let result = "0";    //計算結果
let myAns = "<br>";     //現在入力した値
let myInput = "";  //現在入力している計算式の保持
let myKey = ""; 　 // 現在入力している演算子
let myFlg = 0      //１つ前に入力したのは数字or演算子（０：数字　１：演算子）
let status = "start";  //現在の状態（start→calculation→calBtn→finish）
let mode = "integer_mode";  //小数の入力管理変数（整数入力中：integer_mode、小数入力中：decimal_mode）

//AC初期化
function calcInit() {
  switch (myKey) {
    case '/':
            let btn_d = document.getElementById('btn_divi');
            btn_d.classList.remove('focus');
            break;
    case '*':
            let btn_m = document.getElementById('btn_multi');
            btn_m.classList.remove('focus');
            break;
    case '-':
            let btn_s = document.getElementById('btn_sub');
            btn_s.classList.remove('focus');
            break;
    case '+':
            let btn_a = document.getElementById('btn_add');
            btn_a.classList.remove('focus');
            break;
  }
  result = "0";
  myAns = "<br>";
  myInput = "";
  myKey = "";
  myFlg = 0;
  status = "start";
  mode = "integer_mode";
  // document.getElementById('pannel1').innerHTML = myKey;
  document.getElementById('pannel2').innerHTML = myAns;
  document.getElementById('output').innerHTML = result;
}

//小数点の入力管理
function calcInput(num) {
  if (mode=="integer_mode") {
    number (num);
  } else if (mode=="decimal_mode") {
    if (num!='.') {
      number (num);
    } else return;
  }
}

//数値の入力と表示（関数として呼び出す）
function number(num) {
  if (status=="start") {
    if (num=='.') {
      myInput = 0;
    }
  }
  if (status=="calBtn") {
    switch (myKey) {
      case '/':
              let btn_d = document.getElementById('btn_divi');
              btn_d.classList.remove('focus');
              break;
      case '*':
              let btn_m = document.getElementById('btn_multi');
              btn_m.classList.remove('focus');
              break;
      case '-':
              let btn_s = document.getElementById('btn_sub');
              btn_s.classList.remove('focus');
              break;
      case '+':
              let btn_a = document.getElementById('btn_add');
              btn_a.classList.remove('focus');
              break;
    }
    if (num=='.') {
      myInput += 0;
    }
  }
  if (status=="finish") {
    calcInit (); 　　　　　　　//AC初期化関数の実行
    if (num=='.') {
      myInput = 0;
    }
    status = "calculation";
    myFlg = 0;
    myInput += num;
    if(num=='.') mode = "decimal_mode";
    document.getElementById('pannel2').innerHTML = myInput;
  } else {
    status = "calculation";
    myFlg = 0;
    myInput += num;
    if(num=='.') mode = "decimal_mode";
    document.getElementById('pannel2').innerHTML = myInput;
  }
}

//演算子の入力と表示
function calcRun(key) {
  if (status=="start") {
    return;
  }
  if (status=="finish") {
    status == "calculation";
  }
  if (myFlg==0) {
    status = "calBtn";
    myFlg = 1;
    myKey = key;
    myInput += key;
    mode = "integer_mode";
    // document.getElementById('pannel1').innerHTML = myKey;
    document.getElementById('pannel2').innerHTML = myInput;
    switch (myKey) {
      case '/':
              let btn_d = document.getElementById('btn_divi');
              btn_d.classList.add('focus');
              break;
      case '*':
              let btn_m = document.getElementById('btn_multi');
              btn_m.classList.add('focus');
              break;
      case '-':
              let btn_s = document.getElementById('btn_sub');
              btn_s.classList.add('focus');
              break;
      case '+':
              let btn_a = document.getElementById('btn_add');
              btn_a.classList.add('focus');
              break;
    }
  }
}


//演算の実行
function calcEqual() {
  if (status=="start") {
    return;
  }
  if (myFlg==0) {
    status = "finish";
    myKey = "=";
    result = eval(myInput);
    // document.getElementById('pannel1').innerHTML = myKey;
    document.getElementById('pannel2').innerHTML = myInput + "=";
    document.getElementById('output').innerHTML = result;
  }
}
