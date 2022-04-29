// Bài tập 4: xác định tam giác

// Mồ hình 3 khối
/**
 * input
 * + nhập vào chiều dài 3 cạnh của tam giác
 *
 * các bước xử lý
 * + DOM và gán chiều dài 3 cạnh của tam giác vào 3 biến
 * + tạo và gán biến cho kết quả
 * + so sánh chiều dài 3 cạnh tam giác với nhau
 * + in ra kết quả đây là tam giác gì
 *
 * output
 * + loại tam giác
 */

function triangle() {
  var edge1 = +document.getElementById("bt4-num1").value;
  var edge2 = +document.getElementById("bt4-num2").value;
  var edge3 = +document.getElementById("bt4-num3").value;
  var bt4result = document.getElementById("bt4-result");

  if (edge1 === edge2 && edge2 === edge3) {
    bt4result.innerHTML = "Đây Là Tam Giác Đều";
  } else if (edge1 === edge2 || edge1 === edge3 || edge2 === edge3) {
    bt4result.innerHTML = "Đây Là Tam Giác Cân";
  } else if (
    Math.pow(edge1, 2) === Math.pow(edge2, 2) + Math.pow(edge3, 2) ||
    Math.pow(edge2, 2) === Math.pow(edge1, 2) + Math.pow(edge3, 2) ||
    Math.pow(edge3, 2) === Math.pow(edge1, 2) + Math.pow(edge2, 2)
  ) {
    bt4result.innerHTML = "Đây Là Tam Giác Vuông";
  } else if (edge1 ===0 || edge2 === 0 || edge3 === 0) {
    bt4result.innerHTML = "Đây Không Phải Tam Giác";
  } else {
    bt4result.innerHTML = "Đây Là Tam Giác Thường";
  }
}
