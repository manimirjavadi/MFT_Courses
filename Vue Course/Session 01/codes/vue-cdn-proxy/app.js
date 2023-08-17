const vm = Vue.createApp({
  data() {
    return {
      firstname: "Mani",
      lastname: "Mirjavadi",
    };
  },
}).mount("#app");

setTimeout(() => {
  vm.firstname = "Mansour";
}, 2000);

const input = document.getElementById("first-name");

input.addEventListener("keyup", function () {
  const p = document.querySelector("p");

  p.innerText = this.value;
});
