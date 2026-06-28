// cunghoangdao
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const tracuuBnt = document.getElementById("tim-kiem");
const canchiResult = document.getElementById("can-chi");
const diachiResult = document.getElementById("dia-chi");

const layCan_Diachi = (year) => {
  const can = [
    "Quý",
    "Giáp",
    "Ất",
    "Bính",
    "Đinh",
    "Mậu",
    "Kỷ",
    "Canh",
    "Tân",
    "Nhâm",
  ];
  const dia = [
    "Hợi",
    "Tý",
    "Sửu",
    "Dần",
    "Mão",
    "Thìn",
    "Tỵ",
    "Ngọ",
    "Mùi",
    "Thân",
    "Dậu",
    "Tuất",
  ];
  return can[year % 10] + " " + dia[year % 12];
};
const Cunghoangdao = (day, month) => {
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    return "Bạch Dương";
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    return "Kim Ngưu";
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return "Song Tử";
  } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    return "Cự Giải";
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    return "Sư Tử";
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    return "Xử Nữ";
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    return "Thiên Bình";
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    return "Thiên Yết";
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    return "Nhân Mã";
  } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    return "Ma Kết";
  } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    return "Bảo Bình";
  } else {
    return "Song Ngư";
  }
};

tracuuBnt.addEventListener("click", () => {
  const day = Number(dayInput.value);
  const month = Number(monthInput.value);
  const year = Number(yearInput.value);

  const can = layCan_Diachi(year);
  const dia = Cunghoangdao(day, month);

  canchiResult.textContent = "Can chi năm sinh: " + can;
  diachiResult.textContent = "Cung hoàng đạo: " + dia;
  Toastify({
    text: "Tra cứu thành công",
    duration: 3000,
    gravity: "top",
    position: "right",
    close: true,
    stopOnFocus: true,
    style: {
      background: "#28a745",
    },
  }).showToast();
});
//danh ba nguoi dung ngau nhien
const taiDanhbaBtn = document.querySelector("#tai-danh-ba");
const danhSach = document.querySelector("#danh-sach");

taiDanhbaBtn.addEventListener("click", async () => {
  try {
    danhSach.innerHTML = "";
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    const users = data.results;

    users.forEach((user) => {
      danhSach.innerHTML += `
     <div class="user-card">
        <img src="${user.picture.large}" alt="Avatar">
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.email}</p>
        <span>${user.location.country}</span>
      </div>
    `;
      Toastify({
        text: "Tải danh bạ thành công!",
        duration: 3000,
        gravity: "top",
        position: "right",
        close: true,
        stopOnFocus: true,
        style: {
          background: "#28a745",
        },
      }).showToast();
    });
  } catch (error) {
    danhSach.innerHTML = "Khong tai duoc du lieu";
    console.log(error);
  }
});
//Đăng kí thông tin cư trú
const chonTinh = document.querySelector("#tinh");
const chonXa = document.querySelector("#xa");
const taiDulieu = async () => {
  try {
    const response = await fetch("https://provinces.open-api.vn/api/v2/p/");
    const data = await response.json();

    chonTinh.innerHTML = '<option value="">--chọn tỉnh--</option>';
    data.forEach((province) => {
      chonTinh.innerHTML += `<option value="${province.code}">${province.name}</option>`;
    });

    chonTinh.addEventListener("change", async () => {
      const code = chonTinh.value;
      if (!code) return;

      const response = await fetch(
        `https://provinces.open-api.vn/api/v2/p/${code}?depth=2`,
      );

      const data = await response.json();

      chonXa.innerHTML = `<option value="">--Chọn xã--</option>`;

      data.wards.forEach((ward) => {
        chonXa.innerHTML += `
            <option value="${ward.code}">
                ${ward.name}
            </option>
        `;
      });
    });
  } catch (error) {
    console.log(error);
  }
};
taiDulieu();
const form = document.getElementById("formDangKy");
const ketQua = document.getElementById("thong-tin");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const hoten = document.getElementById("hoten").value;
  const cccd = document.getElementById("cccd").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const gioitinh = document.getElementById("gioitinh").value;

  const day = document.getElementById("ngay").value;
  const month = document.getElementById("thang").value;
  const year = document.getElementById("nam").value;

  const tinh = document.getElementById("tinh");
  const xa = document.getElementById("xa");

  const tenTinh = tinh.options[tinh.selectedIndex].text;
  const tenXa = xa.options[xa.selectedIndex].text;

  const diaChi = document.getElementById("address-input").value;

  ketQua.innerHTML = `
       <div class = "hien-thong-tin">
        <h2>Thông tin đã đăng ký</h2>
        <p><strong>Họ và tên:</strong> ${hoten}</p>
        <p><strong>CCCD:</strong> ${cccd}</p>
        <p><strong>Số điện thoại:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Giới tính:</strong> ${gioitinh}</p>
        <p><strong>Ngày sinh:</strong> ${day}/${month}/${year}</p>
        <p><strong>Địa chỉ:</strong> ${diaChi}, ${tenXa}, ${tenTinh}</p>
       </div>
    `;
  Toastify({
    text: "Đăng ký cư trú thành công!",
    duration: 3000,
    gravity: "top",
    position: "right",
    close: true,
    stopOnFocus: true,
    style: {
      background: "#28a745",
    },
  }).showToast();
});
//thoi tiet mini
const cityInput = document.querySelector("#city-input");
const timCity = document.querySelector("#tim-city");
const ketquaThoitiet = document.querySelector("#ket-qua-thoi-tiet");

timCity.addEventListener("click", async () => {
  try {
    const tenCity = cityInput.value;
    const keyapi = "fdd094c187636b83850c5cc2bc0dab0a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${tenCity}&appid=${keyapi}&units=metric&lang=vi`;
    const response = await fetch(url);
    if (response.status === 404) {
      throw new Error("sai tên thành phố");
    }
    const data = await response.json();
    ketquaThoitiet.innerHTML = `
<div class="weather-card">
  <h3>Thành phố: ${data.name}</h3>
  <p>Nhiệt độ: ${data.main.temp}</p>
  <p>Độ ẩm: ${data.main.humidity}</p>
</div>

  `;
    Toastify({
      text: "Tra cứu thời tiết thành công!",
      duration: 3000,
      gravity: "top",
      position: "right",
      close: true,
      stopOnFocus: true,
      style: {
        background: "#28a745",
      },
    }).showToast();
  } catch (error) {
    if (error.message === "sai tên thành phố") {
      ketquaThoitiet.innerHTML = `<p>Tên thành phố không tìm thấy. <p/>`;
    } else {
      ketquaThoitiet.innerHTML = `
      <p style="color:red">
      Rồi xong mất mạng rồi!
      </p>
      `;
    }

    console.log(error);
  }
});
//btn
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
//hbg
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu-item");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});
