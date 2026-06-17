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
    });
  } catch (error) {
    danhSach.innerHTML = "Khong tai duoc du lieu";
    console.log(Error);
  }
});
//tra cuu quoc gia// lỗi API
const quocgiaInput = document.querySelector("#quoc-gia");
const timKiem = document.querySelector("#tim-quoc-gia");
const ketQua = document.querySelector("#ket-qua-tim");

timKiem.addEventListener("click", async () => {
  const tenQuocgia = quocgiaInput.value.trim();
  const url = `https://restcountries.com/v3.1/name/${tenQuocgia}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
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
  } catch (error) {
    if (error.message === "sai tên thành phố") {
      ketquaThoitiet.innerHTML = `<p>Nhập sai roài ,làm gì có thành phố nào tên đó nhập lại đi!! <p/>`;
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
