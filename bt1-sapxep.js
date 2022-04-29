// bài tập 1: sắp xếp các số theo thứ tự tăng dần

// MÔ hình 3 khối
/**
 * input
 * + nhập vào 3 số nguyên
 *
 * các bước xử lý
 * + DOM và gán 3 số nguyên mà người dùng nhập vào các biến
 * + tạo và gán biến cho kết quả
 * + So sánh 3 số đó với nhau bằng if else
 * + in ra kết quả
 *
 * output
 * + in ra 3 số đó theo thứ tự tăng dần
 *
 */

function arrangeBT1() {
  var bt1Num1 = +document.getElementById("bt1-num1").value;
  var bt1Num2 = +document.getElementById("bt1-num2").value;
  var bt1Num3 = +document.getElementById("bt1-num3").value;
  var bt1result = document.getElementById("bt1-result");

    if (bt1Num1 <= bt1Num2 && bt1Num1  <= bt1Num3) {
        if (bt1Num2 <= bt1Num3) {
            bt1result.innerHTML = bt1Num1 + ',' + bt1Num2 + ',' + bt1Num3
        } else {
            bt1result.innerHTML = bt1Num1 + ',' + bt1Num3 + ',' + bt1Num2
        }
    }

    if (bt1Num2 <= bt1Num1 && bt1Num2  <= bt1Num3) {
        if (bt1Num1 <= bt1Num3) {
            bt1result.innerHTML = bt1Num2 + ',' + bt1Num1 + ',' + bt1Num3
        } else {
            bt1result.innerHTML = bt1Num2 + ',' + bt1Num3 + ',' + bt1Num1
        }
    }

    if (bt1Num3 <= bt1Num1 && bt1Num3  <= bt1Num2) {
        if (bt1Num1 <= bt1Num2) {
            bt1result.innerHTML = bt1Num3 + ',' + bt1Num1 + ',' + bt1Num2
        } else {
            bt1result.innerHTML = bt1Num3 + ',' + bt1Num2 + ',' + bt1Num1
        }
    }
}


