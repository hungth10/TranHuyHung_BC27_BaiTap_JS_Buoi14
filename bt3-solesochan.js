// bài tập 3: đếm số lẻ, số chẵn

// Mồ hình 3 khối
/**
 * input
 * + nhập vào 3 số nguyên
 *
 * các bước xử lý
 * + DOM và gán các giá trị mà user nhập vào các biến tương ứng
 * + tạo và gán 2 biến cho số lẻ, số chẵn
 * + tạo và gán biến cho kết quả
 * + tính toán các biến để phân loại số lẻ số chẵn
 * + in ra kết qua bao nhiều số lẻ, bao nhiêu số chẵn
 *
 * output
 * +in ra biến số lẻ và số chẵn
 */

function chanle() {
  var bt3Num1 = +document.getElementById("bt3-num1").value;
  var bt3Num2 = +document.getElementById("bt3-num2").value;
  var bt3Num3 = +document.getElementById("bt3-num3").value;
  var bt3result = document.getElementById("bt3-result");
  var evenNum = 0;
  var oddNum = 0;

  if (bt3Num1 % 2 === 0) {
    evenNum += 1;
  } else {
    oddNum += 1;
  }

  if (bt3Num2 % 2 === 0) {
    evenNum += 1;
  } else {
    oddNum += 1;
  }

  if (bt3Num3 % 2 === 0) {
    evenNum += 1;
  } else {
    oddNum += 1;
  }

  bt3result.innerHTML =
    "tổng số chẵn: " + evenNum + "<br>" + "tổng số lẻ: " + oddNum;
}
