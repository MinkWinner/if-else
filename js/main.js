function numbAscending() {
  var n1 = Number(document.getElementById("n1_Ascending").value);
  var n2 = Number(document.getElementById("n2_Ascending").value);
  var n3 = Number(document.getElementById("n3_Ascending").value);
  var temp = 0;
  if (n1 > n2) {
    //n2<n1
    temp = n1;
    n1 = n2;
    n2 = temp;
    if (n2 > n3) {
      if (n1 > n3) {
        //n3<n2<n1
        temp = n1;
        n1 = n3;
        n3 = temp;
      } else {
        //n2<n3<n1
        temp = n2;
        n2 = n3;
        n3 = temp;
      }
    }
  } else {
    //n1<n2
    if (n2 > n3) {
      //n1 <n2 && n2 >n3
      if (n1 > n3) {
        //n3<n1<n2
        temp = n1;
        n1 = n3;
        n3 = temp;
      } else {
        //n1<n3<n2
        temp = n2;
        n2 = n3;
        n3 = temp;
      }
    }
  }
  document.getElementById("txtAscending").innerHTML = n1 + "<" + n2 + "<" + n3;
}

function sayHi() {
  var user = document.getElementById("selUser").value;
  if (user == "B") {
    user = "Bố!";
  } else if (user == "M") {
    user = "Mẹ!";
  } else if (user == "A") {
    user = "Anh Trai!";
  } else if (user == "E") {
    user = "Em Gái!";
  }
  if (user == "Chọn thành viên") {
    document.getElementById("txtSayHi").innerHTML = "Xin chào Người lạ ơi!";
  } else {
    document.getElementById("txtSayHi").innerHTML = "Xin chào " + user;
  }
}

function countOddEven() {
  var n1 = document.getElementById("n1_countOddEven").value;
  var n2 = document.getElementById("n2_countOddEven").value;
  var n3 = document.getElementById("n3_countOddEven").value;
  var odd = 0; // số lẻ
  var even = 0; // số chẳn
  n1 % 2 == 0 ? even++ : odd++;
  n2 % 2 == 0 ? even++ : odd++;
  n3 % 2 == 0 ? even++ : odd++;

  document.getElementById("txtCountOddEven").innerHTML =
    "Có " + even + " số chẵn, " + odd + " số lẻ";
}

function TriangleType() {
  var n1 = document.getElementById("edge1").value;
  var n2 = document.getElementById("edge2").value;
  var n3 = document.getElementById("edge3").value;
  if (n1 == n2 && n2 == n3) {
    if (n1 == 0) {
      return "Không tồn tại tam giác";
    }
    return "Hình tam giác đều";
  } else if (n1 == n2 || n1 == n3 || n2 == n3) {
    return "Hình tam giác cân";
  } else if (
    n1 * n1 == n2 * n2 + n3 * n3 ||
    n2 * n2 == n1 * n1 + n3 * n3 ||
    n3 * n3 == n2 * n2 + n1 * n1
  ) {
    return "Hình tam giác vuông";
  }
  return "Một loại tam giác nào đó";
}

function changeDate(option) {
  var n1 = Number(document.getElementById("n_day").value);
  var n2 = Number(document.getElementById("n_month").value);
  var n3 = Number(document.getElementById("n_year").value);

  if (n2 > 12 || n2 <= 0) {
    document.getElementById("txtDateTime").innerHTML = "Tháng không xác định";
    return;
  } else if (n3 <= 0) {
    document.getElementById("txtDateTime").innerHTML = "Năm không xác định";
    return;
  } else if (n1 <= 0 || n1 > 31) {
    document.getElementById("txtDateTime").innerHTML = "Ngày không xác định";
    return;
  }

  if (option == "next") {
    if (n2 == 2) {
      if (n3 % 4 == 0) {
        if (n1 == 29) {
          n1 = 1;
          n2++;
        } else if (n1 <= 28) {
          n1++;
        } else {
          document.getElementById("txtDateTime").innerHTML =
            "Ngày không xác định";
          return;
        }
      } else {
        if (n1 == 28) {
          n1 = 1;
          n2++;
        } else if (n1 < 28) {
          n1++;
        } else {
          document.getElementById("txtDateTime").innerHTML =
            "Ngày không xác định";
          return;
        }
      }
    } else if (n2 == 12) {
      if (n1 == 31) {
        n1 = 1;
        n2 = 1;
        n3++;
      } else {
        n1++;
      }
    } else if (
      n2 == 1 ||
      n2 == 3 ||
      n2 == 5 ||
      n2 == 7 ||
      n2 == 8 ||
      n2 == 10
    ) {
      if (n1 == 31) {
        n1 = 1;
        n2++;
      } else n1++;
    } else {
      if (n1 == 30) {
        n1 = 1;
        n2++;
      } else n1++;
    }
  } else if (option == "prev") {
    if (n2 == 2) {
      if (n1 == 1) {
        n1 = 31;
        n2--;
      } else {
        if (n3 % 4 == 0) {
          if (n1 <= 29) {
            n1--;
          } else {
            document.getElementById("txtDateTime").innerHTML =
              "Ngày không xác định";
            return;
          }
        } else {
          if (n1 <= 28) {
            n1--;
          } else {
            document.getElementById("txtDateTime").innerHTML =
              "Ngày không xác định";
            return;
          }
        }
      }
    } else if (n2 == 3) {
      if (n3 % 4 == 0) {
        if (n1 == 1) {
          n1 = 29;
          n2--;
        } else if (n1 <= 30) {
          n2--;
        } else {
          document.getElementById("txtDateTime").innerHTML =
            "Ngày không xác định";
          return;
        }
      } else {
        if (n1 == 1) {
          n1 = 28;
          n2--;
        } else if (n1 <= 30) {
          n2--;
        } else {
          document.getElementById("txtDateTime").innerHTML =
            "Ngày không xác định";
          return;
        }
      }
    } else if (n2 == 4 || n2 == 6 || n2 == 9 || n2 == 11) {
      if (n1 == 1) {
        n1 = 31;
        n2--;
      } else if (n1 <= 30) n1--;
    } else if (n2 == 5 || n2 == 7 || n2 == 8 || n2 == 10 || n2 == 12) {
      if (n1 == 1) {
        n1 = 30;
        n2--;
      } else if (n1 <= 31) n1--;
    } else {
      n1 = 31;
      n2 = 12;
      n3--;
    }
  }

  document.getElementById("txtDateTime").innerHTML = n1 + "/" + n2 + "/" + n3;
}

function countDay() {
  var n1 = document.getElementById("monthInput").value;
  var n2 = document.getElementById("yearInput").value;
  var d = 0;

  if (n1 > 12 || n1 <= 0) {
    document.querySelector("#pill_6 .alert").className = "alert alert-danger";
    document.getElementById("txtDate").innerHTML = "Ngày nhập không hợp lệ!!!";
    return;
  } else if (n2 <= 0) {
    document.querySelector("#pill_6 .alert").className = "alert alert-danger";
    document.getElementById("txtDate").innerHTML = "Năm nhập không hợp lệ !!!";
    return;
  }

  if (n1 == 2) {
    n2 % 4 == 0 ? (d = 29) : (d = 28);
  } else if (
    n1 == 1 ||
    n1 == 3 ||
    n1 == 5 ||
    n1 == 7 ||
    n1 == 8 ||
    n1 == 10 ||
    n1 == 12
  ) {
    d = 31;
  } else d = 30;
  document.querySelector("#pill_6 .alert").className = "alert alert-success";
  document.getElementById("txtDate").innerHTML =
    "Tháng " + n1 + " năm " + n2 + " có " + d + " ngày";
}

function readNum() {
  var x = document.getElementById("readNum").value;
  var hundred = Math.floor(x / 100);
  var ten = Math.floor((x % 100) / 10);
  var unit = (x % 100) % 10;
  if (hundred == 0 || hundred > 9) {
    document.querySelector("#pill_7 .alert").className = "alert alert-danger";
    document.getElementById("txtReadNum").innerHTML = "Nhập số 3 chữ số !!!";
    return;
  }

  document.querySelector("#pill_7 .alert").className = "alert alert-success";
  if (unit == 0 && ten == 0) {
    document.getElementById("txtReadNum").innerHTML =
      numToTxt(hundred) + " trăm ";
  } else if (unit == 0) {
    document.getElementById("txtReadNum").innerHTML =
      numToTxt(hundred) + " trăm " + numToTxt(ten) + " mươi ";
  } else if (ten == 0) {
    document.getElementById("txtReadNum").innerHTML =
      numToTxt(hundred) + " trăm lẻ " + numToTxt(unit);
  } else {
    document.getElementById("txtReadNum").innerHTML =
      numToTxt(hundred) + " trăm " + numToTxt(ten) + " mươi " + numToTxt(unit);
  }
}

function numToTxt(x) {
  switch (x) {
    case 1:
      return "một";
    case 2:
      return "hai";
    case 3:
      return "ba";
    case 4:
      return "bốn";
    case 5:
      return "năm";
    case 6:
      return "sáu";
    case 7:
      return "bảy";
    case 8:
      return "tám";
    case 9:
      return "chín";
    default:
      return "";
  }
}

function findStudentLocation() {
  var sv1 = [
    document.getElementById("sv1").value,
    document.getElementById("x1").value,
    document.getElementById("y1").value,
  ];
  var sv2 = [
    document.getElementById("sv2").value,
    document.getElementById("x2").value,
    document.getElementById("y2").value,
  ];
  var sv3 = [
    document.getElementById("sv3").value,
    document.getElementById("x3").value,
    document.getElementById("y3").value,
  ];
  var truong = [
    document.getElementById("x").value,
    document.getElementById("y").value,
  ];
  var d1 = Math.sqrt(
    Math.pow(sv1[1] - truong[0], 2) + Math.pow(sv1[2] - truong[1], 2)
  );
  var d2 = Math.sqrt(
    Math.pow(sv2[1] - truong[0], 2) + Math.pow(sv2[2] - truong[1], 2)
  );
  var d3 = Math.sqrt(
    Math.pow(sv3[1] - truong[0], 2) + Math.pow(sv3[2] - truong[1], 2)
  );
  if (d1 > d2) {
    if (d1 > d3) {
      return (document.getElementById("txtFindStuLocate").innerHTML =
        "Sinh viên xa trường nhất: " + sv1[0]);
    }
  } else {
    if (d2 > d3) {
      return (document.getElementById("txtFindStuLocate").innerHTML =
        "Sinh viên xa trường nhất: " + sv2[0]);
    }
  }

  return (document.getElementById("txtFindStuLocate").innerHTML =
    "Sinh viên xa trường nhất: " + sv3[0]);
}

document.getElementById("btnAscending").onclick = numbAscending;

document.getElementById("btnSayHi").addEventListener("click", sayHi);

document.getElementById("btnCountOddEven").onclick = function () {
  countOddEven();
};

document
  .getElementById("btnTriangleType")
  .addEventListener("click", function () {
    document.getElementById("txtTriangleType").innerHTML = TriangleType();
  });

document.getElementById("btnPass").onclick = function () {
  changeDate("prev");
};

document.getElementById("btnFuture").addEventListener("click", function () {
  changeDate("next");
});

document.getElementById("btnDate").onclick = function () {
  countDay();
};

document.getElementById("btnReadNum").addEventListener("click", readNum);
