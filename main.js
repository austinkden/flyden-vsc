const startButton = document.querySelector("section.welcome button.start");

startButton.addEventListener("click", () => {
   startButton.classList.add("moving");
   setTimeout(() => {
      document.querySelector("section.welcome").classList.add("leaving");
      setTimeout(() => {
         document.querySelector("section.welcome p.intro").remove();
      document.querySelector("section.welcome").classList.add("btn");
      }, 400);
   }, 100);
});