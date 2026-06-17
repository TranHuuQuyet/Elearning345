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
