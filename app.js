const id = (id) => document.getElementById(id);
const adviceId = id("advice-number"),
  adviceContainer = id("advice-container"),
  button = id("btn");

const fetchAdvices = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      const advicesArr = Object.values(data),
        adviceIds = advicesArr.map((adId) => adId.id),
        advices = advicesArr.map((ad) => ad.advice);
      adviceId.textContent = `advice #${adviceIds}`;
      adviceContainer.textContent = `"${advices}"`;
    });
};

fetchAdvices();

button.addEventListener("click", fetchAdvices);
