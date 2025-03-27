document.addEventListener("DOMContentLoaded", () => {
  addSubmitListener();
  fetchRamenData();
});


const handleClick = (ramen) => {
  const ramenDetail = document.getElementById('ramen-detail');
  console.log(ramenDetail); // Check if this exists

  if (!ramenDetail) {
    console.error("Element #ramen-detail not found!");
    return;
  }

  ramenDetail.innerHTML = `
    <img src="${ramen.image}" alt="${ramen.name}">
    <h2>${ramen.name}</h2>
    <h3>${ramen.restaurant}</h3>
    <p>Rating: ${ramen.rating}</p>
    <p>Comment: ${ramen.comment}</p>
  `;
};


const addSubmitListener = () => {
  const form = document.getElementById("new-ramen");
  if (!form) {
    console.error("Error: #new-ramen form not found!");
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  });
};

const displayRamenItem = (ramen) => {
  const ramenMenu = document.getElementById("ramen-menu");
  if (!ramenMenu) {
    console.error("Error: #ramen-menu not found!");
    return;
  }

  const img = document.createElement("img");
  img.src = ramen.image;
  img.alt = ramen.name;
  img.addEventListener("click", () => handleClick(ramen));

  ramenMenu.append(img);
};


const displayRamens = () => {
  fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramens => {
      ramens.forEach(displayRamenItem);
    });
};

const main = () => {
  displayRamens();
  addSubmitListener();
};

main();


export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
