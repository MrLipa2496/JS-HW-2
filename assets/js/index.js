// Завдання на if

// 2

// const isOnline = false;

// !isOnline
//   ? alert(
//       "Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет"
//     )
//   : alert("Ваше повідомлення відправлено");

// 3

// const purchasePrice = Number(prompt("Введіть суму покупки: "));

// if (purchasePrice > 800) {
//   alert(
//     `Вам нараховано знижку 5%. Потрібно заплатити ${
//       purchasePrice - purchasePrice * 0.05
//     }`
//   );
// } else if (purchasePrice > 500) {
//   alert(
//     `Вам нараховано знижку 3%. Потрібно заплатити ${
//       purchasePrice - purchasePrice * 0.03
//     }`
//   );
// } else {
//   alert(`Вам НЕ нараховано знижку. Потрібно заплатити ${purchasePrice}`);
// }

// 4

const isLogin = true;
const isMale = false;

if (isLogin) {
  const newLocal = `
  <header class="header">
  <a href="#"
    ><img
      class = "logo"
      src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg"
      alt="logo"
  /></a>
  <div class = "user-info">
  <p class = "user-name">Alex</p>
  <img
    class="user-photo ${isMale ? "male" : "female"} "
    src=" ${
      isMale
        ? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
    }"
    alt="user-photo"
  />
  </div>
</header>`;
  document.write(newLocal);
} else {
  document.write(`
  <header class="header">
  <a href="#"
    ><img
      class = "logo"
      src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg"
      alt="logo"
  /></a>
  <div class = "btn-wraper">
  <button class="log-btn">Login</button>
  <button class="reg-btn">Register</button>
  </div>
</header>
`);
}

// 1

const isDay = false;

if (isDay) {
  document.write("<p class = 'light-theme'>Світла тема</p>");
} else {
  document.write("<p class = 'dark-theme'>Темна тема</p>");
}

// Завдання на switch..case

// 1

const dayOfTheWeek = +prompt("Введіть номер дня тиждня: ");

switch (dayOfTheWeek) {
  case 1:
    alert("Понеділок");
    break;
  case 2:
    alert("Вівторок");
    break;
  case 3:
    alert("Середа");
    break;
  case 2:
    alert("Четверг");
    break;
  case 5:
    alert("П'ятниця");
    break;
  case 6:
    alert("Субота");
    break;
  case 7:
    alert("Неділя");
    break;
  default:
    alert("ТАКОГО ДНЯ ТИЖНЯ НЕ ІСНУЄ");
    break;
}

const DAY = +prompt("Введіть номер дня: ");

switch (true) {
  case DAY >= 1 && DAY <= 10:
    alert("перша декада");
    break;
  case DAY >= 11 && DAY <= 20:
    alert("друга декада");
    break;
  case DAY >= 21 && DAY <= 31:
    alert("третя декада");
    break;
  default:
    alert("Введено некоректне число дня.");
    break;
}
