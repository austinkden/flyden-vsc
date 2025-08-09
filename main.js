const startButton = document.querySelector("section.welcome button.start");

startButton.addEventListener("click", () => {
   startButton.classList.add("moving");
   setTimeout(() => {
      document.querySelector("section.welcome").classList.add("leaving");
      setTimeout(() => {
         document.querySelector("section.welcome").remove();
         setTimeout(() => {
            document.querySelector("section.airline").classList.remove("gone");
            setTimeout(() => {
               document.querySelector("section.airline").classList.remove("hidden");
            }, 25);
         }, 25);
      }, 400);
   }, 400);
});