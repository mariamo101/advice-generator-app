const button = document.querySelector("button");
const adviceP = document.querySelector("p");
const adviveNum = document.querySelector("span");
console.log(button);
console.log(adviceP);
console.log(adviveNum);

async function advices() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    // 1. `data`: ეს არის ცვლადი, რომელიც ინახავს JSON მონაცემებს,
    // რომლებიც დაბრუნებულია API დან და  შეიცავს რჩევის ინფორმაციას.
    //3. `data.slip.advice`: ეს წვდება API-ს მიერ მოცემულ კონკრეტულ რჩევას.
    // თვისება `"advice"` და “id“ ჩადგმულია JSON პასუხის `"slip"` თვისებაში.
    const id = data.slip.id;
    const advice = data.slip.advice;
    adviveNum.textContent = id;
    adviceP.textContent = `"${advice}"`;
    console.log("ID:", id);
    console.log("Advice:", advice);
  } catch (error) {
    console.log(error.message);
  }
}
button.addEventListener("click", () => {
  advices();
  console.log("hello");
});
