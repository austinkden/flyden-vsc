const airlines = [
  { name: "Aer Lingus", concourse: "A", pod: "21", bags: "7", gates: "A33", customer: "800-474-7424" },
  { name: "Aeromexico", concourse: "A", pod: "20", bags: "intl", gates: "A45", customer: "800-237-6639" },
  { name: "Air Canada", concourse: "A", pod: "20", bags: "11", gates: "A41,A43,A45,A47", customer: "800-247-2262" },
  { name: "Air France", concourse: "A", pod: "23", bags: "intl", gates: "", customer: "800-237-2747" },
  { name: "Alaska Airlines", concourse: "C", pod: "21", bags: "7", gates: "C39", customer: "800-252-7522" },
  { name: "Allegiant", concourse: "A", pod: "21", bags: "5", gates: "A39,A53", customer: "702-505-8888" },
  { name: "American Airlines", concourse: "C", pod: "22", bags: "7,9,17", gates: "C30,C32,C34,C36,C38", customer: "800-433-7300" },
  { name: "Breeze Airways", concourse: "A", pod: "20", bags: "11", gates: "", customer: "501-273-3931" },
  { name: "British Airways", concourse: "A", pod: "22", bags: "intl", gates: "A37", customer: "800-247-9297" },
  { name: "Cayman Airways", concourse: "A", pod: "20", bags: "intl", gates: "A33", customer: "800-422-9626" },
  { name: "Contour Airlines", concourse: "C", pod: "21", bags: "5", gates: "C71", customer: "888-332-6686" },
  { name: "Copa Airlines", concourse: "A", pod: "20", bags: "intl", gates: "A42", customer: "800-359-2672" },
  { name: "Delta Air Lines", concourse: "A", pod: "23", bags: "12", gates: "A48,A49,A50,A51,A52,A53", customer: "800-221-1212" },
  { name: "Denver Air Connection", concourse: "C", pod: "21", bags: "5", gates: "C70", customer: "855-235-9322" },
  { name: "Edelweiss", concourse: "A", pod: "20", bags: "intl", gates: "A41", customer: "800-221-4788" },
  { name: "Frontier Airlines", concourse: "A", pod: "2", bags: "7,8,intl", gates: "A35,A39,A42,A54,A56,A71,A73,A75,A76,A77,A78,A79,A80,A81,A82,A83,A84", customer: "gates-a75-a77" },
  { name: "Icelandair", concourse: "C", pod: "20", bags: "intl", gates: "A37,A39", customer: "800-223-5500" },
  { name: "JetBlue Airways", concourse: "A", pod: "21", bags: "8", gates: "A33,A35", customer: "800-329-0485" },
  { name: "Lufthansa", concourse: "A", pod: "20", bags: "intl", gates: "A41,A45", customer: "800-645-3880" },
  { name: "Southern Airways Express", concourse: "C", pod: "21", bags: "5", gates: "C69", customer: "None" },
  { name: "Southwest Airlines", concourse: "C", pod: "1,2", bags: "1,2,3,4", gates: "C23,C24,C25,C26,C27,C28,C29,C30,C31,C32,C33,C34,C35,C36,C37,C38,C39,C40,C41,C42,C43,C44,C45,C46,C47,C48,C49,C50,C51,C52,C53,C54,C55,C56,C57,C58,C59,C60,C61,C62,C63,C64,C65,C66,C67", customer: "800-435-9792" },
  { name: "Sun Country Airlines", concourse: "A", pod: "20", bags: "11", gates: "A33,A41,A42", customer: "651-905-2737" },
  { name: "Turkish Airlines", concourse: "A", pod: "20", bags: "intl", gates: "A41,A45", customer: "800-874-8875" },
  { name: "United Airlines", concourse: "ABC", pod: "7,8", bags: "14,15,16,17,18,19", gates: "ANY", customer: "800-864-8331" },
  { name: "Viva Aerobus", concourse: "A", pod: "22", bags: "intl", gates: "A37", customer: "866-359-8482" },
  { name: "Volaris", concourse: "A", pod: "20", bags: "intl", gates: "A42,A45,A47", customer: "855-865-2747" },
  { name: "WestJet", concourse: "A", pod: "23", bags: "11", gates: "A41,A45", customer: "888-937-8538" },
];

if (screen.width < 768) {
   const airlineList = document.querySelector("section#gather div.list");
   airlines.forEach(airline => {
      const div = document.createElement("div");
      div.classList.add("airline");
      div.innerHTML = `<img src="img/airlines/${airline.name.toLowerCase().replace(/ /g, '')}.png" alt="${airline.name} logo"><p>${airline.name}</p>`;
      airlineList.appendChild(div);
   });
}