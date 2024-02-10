function toggleMenu() {
  const nav = document.querySelector(".nav-hdn");
  nav.classList.toggle("active");
}

fetch("resources/dogo-members.json")
  .then((Response) => Response.json())
  .then((data) => {
    const teamMembers = data.team;
    const teamMembersContainer = document.getElementById("dogos-container");

    teamMembers.forEach((dogo) => {
      const memberElement = document.createElement("div");
      memberElement.classList.add("dogo");
      memberElement.setAttribute("data-aos", "fade-up");
      memberElement.innerHTML = `
        <h3>${dogo.name}</h3>
        <h4>${dogo.area}</h4>
        <img src="${dogo.image}" alt="${dogo.name}">
        <a href="${dogo.contact}">${dogo.contact}</a>
        <p>${dogo.description}</p>
      `;
      teamMembersContainer.appendChild(memberElement);
    });
  })
  .catch((error) => {
    console.log("Error:", error);
  });
