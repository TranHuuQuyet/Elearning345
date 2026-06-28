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
const zodiacSVG = {
  "Bạch Dương": `
    <svg viewBox="0 0 24 24">
      <path d="M7 20V8c0-3 2-5 5-5s5 2 5 5v12"/>
      <circle cx="7" cy="8" r="2"/>
      <circle cx="17" cy="8" r="2"/>
    </svg>
  `,

  "Kim Ngưu": `
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4"/>
      <path d="M6 20c0-4 3-6 6-6s6 2 6 6"/>
    </svg>
  `,

  "Song Tử": `
    <svg viewBox="0 0 24 24">
      <path d="M8 3v18M16 3v18"/>
      <path d="M6 6h12M6 18h12"/>
    </svg>
  `,

  "Cự Giải": `
    <svg viewBox="0 0 24 24">
      <path d="M6 10c2-4 10-4 12 0"/>
      <path d="M6 14c2 4 10 4 12 0"/>
    </svg>
  `,

  "Sư Tử": `
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="10" r="4"/>
      <path d="M12 14v6"/>
      <path d="M8 18h8"/>
    </svg>
  `,

  "Xử Nữ": `
    <svg viewBox="0 0 24 24">
      <path d="M6 20V4"/>
      <path d="M6 6c4-4 8 0 8 4s-4 4-4 8 4 4 4 4"/>
    </svg>
  `,

  "Thiên Bình": `
    <svg viewBox="0 0 24 24">
      <path d="M12 4v10"/>
      <path d="M6 14h12"/>
      <circle cx="12" cy="4" r="2"/>
    </svg>
  `,

  "Bọ Cạp": `
    <svg viewBox="0 0 24 24">
      <path d="M6 6v12"/>
      <path d="M6 18l3-3 3 3 3-3 3 3"/>
    </svg>
  `,

  "Nhân Mã": `
    <svg viewBox="0 0 24 24">
      <path d="M6 18l12-12"/>
      <path d="M10 6h8v8"/>
    </svg>
  `,

  "Ma Kết": `
    <svg viewBox="0 0 24 24">
      <path d="M6 18c4-6 4-12 8-12s4 6 4 12"/>
    </svg>
  `,

  "Bảo Bình": `
    <svg viewBox="0 0 24 24">
      <path d="M4 10c2 2 4-2 6 0s4 2 6 0 4-2 4 0"/>
      <path d="M4 14c2 2 4-2 6 0s4 2 6 0 4-2 4 0"/>
    </svg>
  `,

  "Song Ngư": `
    <svg viewBox="0 0 24 24">
      <path d="M6 6c4 4 4 8 0 12"/>
      <path d="M18 6c-4 4-4 8 0 12"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  `,
};

tracuuBnt.addEventListener("click", () => {
  const day = Number(dayInput.value);
  const month = Number(monthInput.value);
  const year = Number(yearInput.value);

  if (!day || !month || !year) {
    Toastify({
      text: "Vui lòng nhập đầy đủ ngày tháng năm sinh",
      duration: 3000,
      gravity: "top",
      position: "right",
      close: true,
      stopOnFocus: true,
      style: {
        background: "#d62222",
      },
    }).showToast();
    return;
  }
  const can = layCan_Diachi(year);
  const zodiacName = Cunghoangdao(day, month);

  canchiResult.textContent = "Can chi năm sinh: " + can;
  diachiResult.textContent = "Cung hoàng đạo: " + zodiacName;
  const svgBox = document.getElementById("zodiac-svg");

  if (zodiacSVG[zodiacName]) {
    svgBox.innerHTML = zodiacSVG[zodiacName];
    svgBox.style.display = "block";
  } else {
    svgBox.innerHTML = "";
    svgBox.style.display = "none";
  }

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
