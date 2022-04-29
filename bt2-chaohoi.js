// bài tập 2: chào hỏi user

// Mô hình 3 khối
/**
 * input
 * + nhập tên vào
 *
 * Các bước xử lý
 * + DOM và gán giá trị người nhập vào 1 biến
 * + tạo vào gán biến cho kết quả
 * + so sánh biến đó với tên member trong gia đình
 * + in ra lời chào
 *
 * output
 * + in ra lời chào phù hợp
 */

function greeting() {
  var usernameEl = document.getElementById("bt2-input").value;
  var bt2result = document.getElementById("bt2-result");

  if (usernameEl === "father") {
    bt2result.innerHTML = "Welcome Depp";
  } else if (usernameEl === "mother") {
    bt2result.innerHTML = "Welcome Layla";
  } else if (usernameEl === "brother") {
    bt2result.innerHTML = "Welcome Thomas";
  } else if (usernameEl === "sister") {
    bt2result.innerHTML = "Welcome Eliza";
  } else {
    bt2result.innerHTML = "Welcome " + usernameEl;
  }
}
