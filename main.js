let airline = "Unknown Airline";
let bags = "Unknown Bags";
let security = "Unknown Security";
let gate = "Unknown Gate";

history.pushState(null, document.title, location.href);
let currentPage = 0;
const startButton = document.querySelector("section.welcome button.start");
startButton.addEventListener("click", () => {
   currentPage = 1;
   document.querySelector("div.background-gradient").classList.remove("shown");
   document.body.classList.add("shown");
   document.querySelector("section.welcome").classList.add("hidden");
   setTimeout(() => {
      document.querySelector("section.welcome").classList.add("gone");
      setTimeout(() => {
         document.querySelector("section.airline").classList.remove("gone");
         setTimeout(() => {
            document.querySelector("section.airline").classList.remove("hidden");
         }, 25);
      }, 25);
   }, 375);
})

const airlineListItems = document.querySelectorAll("section.airline div.list div.option");

airlineListItems.forEach(airline => {
   airline.addEventListener("click", () => {
      if (airline.classList.contains("selected")) {
         document.querySelector("section.airline button.next").classList.remove("allowed");
         airline.classList.remove("selected");
      } else {
         document.querySelectorAll("section.airline div.list div.option").forEach(airline => {
            airline.classList.remove("selected");
         });

         airline.classList.add("selected");
         document.querySelector("section.airline button.next").classList.add("allowed");
      }
   });
});

const airlineSearch = document.querySelector("section.airline input.search");

airlineSearch.addEventListener("input", () => {
   document.querySelectorAll("section.airline div.list div.option").forEach(airline => {
      if (airline.querySelector("p").textContent.toLowerCase().includes(airlineSearch.value.toLowerCase())) {
         airline.classList.remove("hidden");
      } else {
         airline.classList.add("hidden");
      }
   });
});


const airlineNextButton = document.querySelector("section.airline button.next");

airlineNextButton.addEventListener("click", () => {
   currentPage = 2;
   airline = document.querySelector("section.airline div.list div.option.selected p").textContent;
   document.querySelector("section.airline").classList.add("hidden");
   setTimeout(() => {
      document.querySelector("section.airline").classList.add("gone");
      setTimeout(() => {
         document.querySelector("section.bags").classList.remove("gone");
         setTimeout(() => {
            document.querySelector("section.bags").classList.remove("hidden");
         }, 25);
      }, 25);
   }, 375);
});

const bagsListItems = document.querySelectorAll("section.bags div.list div.option");

bagsListItems.forEach(opt => {
   opt.addEventListener("click", () => {
      if (opt.classList.contains("selected")) {
         document.querySelector("section.bags button.next").classList.remove("allowed");
         opt.classList.remove("selected");
      } else {
         document.querySelectorAll("section.bags div.list div.option").forEach(opt => {
            opt.classList.remove("selected");
         });

         opt.classList.add("selected");
         document.querySelector("section.bags button.next").classList.add("allowed");
      }
   });
});

const bagsNextButton = document.querySelector("section.bags button.next");

bagsNextButton.addEventListener("click", () => {
   currentPage = 3;
   bags = document.querySelector("section.bags div.list div.option.selected p").textContent;
   document.querySelector("section.bags").classList.add("hidden");
   setTimeout(() => {
      document.querySelector("section.bags").classList.add("gone");
      setTimeout(() => {
         document.querySelector("section.security").classList.remove("gone");
         setTimeout(() => {
            document.querySelector("section.security").classList.remove("hidden");
         }, 25);
      }, 25);
   }, 375);
});

window.addEventListener("popstate", (event) => {
   event.preventDefault();
   history.pushState(null, document.title, location.href);
   console.log("Detected!");

   if (currentPage == 1) {
      currentPage = 0;
      document.querySelector("section.airline").classList.add("hidden");
      setTimeout(() => {
         document.querySelector("section.airline").classList.add("gone");
         setTimeout(() => {
            document.querySelector("section.welcome").classList.remove("gone");
            setTimeout(() => {
               document.querySelector("section.welcome").classList.remove("hidden");
            }, 25);
         }, 25);
      }, 375);
   } else if (currentPage == 2) {
      currentPage = 1;
      document.querySelector("section.bags").classList.add("hidden");
      setTimeout(() => {
         document.querySelector("section.bags").classList.add("gone");
         setTimeout(() => {
            document.querySelector("section.airline").classList.remove("gone");
            setTimeout(() => {
               document.querySelector("section.airline").classList.remove("hidden");
            }, 25);
         }, 25);
      }, 375);
   } else {
      window.close();
   }
});