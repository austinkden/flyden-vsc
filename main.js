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

const airlineListItems = document.querySelectorAll("section.airline div.list div.airline");

airlineListItems.forEach(airline => {
   airline.addEventListener("click", () => {
      if (airline.classList.contains("selected")) {
         document.querySelector("section.airline button.submit").classList.remove("allowed");
         airline.classList.remove("selected");
      } else {
         document.querySelectorAll("section.airline div.list div.airline").forEach(airline => {
            airline.classList.remove("selected");
         });

         airline.classList.add("selected");
         document.querySelector("section.airline button.submit").classList.add("allowed");
      }
   });
});