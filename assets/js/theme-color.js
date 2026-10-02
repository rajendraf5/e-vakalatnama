// All your theme buttons
const buttons = [
  // "lightBtn",
  "blackBtn",
  "greenBtn",
  "greyBtn",
  "blueBtn",
  "orangeBtn",
  // "purpleBtn",
  // "redBtn",
  "tealBtn",
  "skyBtn",
  "roseBtn",
  "lavenderBtn",
  "mintBtn",
  // "peachBtn",
  "aquaBtn",
  "yellowBtn"
];

// Add click events
buttons.forEach(id => {
  document.getElementById(id).onclick = () => {

    // CHANGE THE THEME
    // if (id === "lightBtn")  document.documentElement.setAttribute("data-bs-theme", "light");
    if (id === "blackBtn")   document.documentElement.setAttribute("data-bs-theme", "dark");
    if (id === "greenBtn")  document.documentElement.setAttribute("data-bs-theme", "green");
    if (id === "greyBtn") document.documentElement.setAttribute("data-bs-theme", "grey");
    if (id === "blueBtn")   document.documentElement.setAttribute("data-bs-theme", "blue");
    if (id === "orangeBtn") document.documentElement.setAttribute("data-bs-theme", "orange");
    // if (id === "purpleBtn") document.documentElement.setAttribute("data-bs-theme", "purple");
    // if (id === "redBtn") document.documentElement.setAttribute("data-bs-theme", "red");
    if (id === "tealBtn") document.documentElement.setAttribute("data-bs-theme", "teal");
    if (id === "skyBtn") document.documentElement.setAttribute("data-bs-theme", "sky");
    if (id === "roseBtn") document.documentElement.setAttribute("data-bs-theme", "rose");
    if (id === "lavenderBtn") document.documentElement.setAttribute("data-bs-theme", "lavender");
    if (id === "mintBtn") document.documentElement.setAttribute("data-bs-theme", "mint");
    // if (id === "peachBtn") document.documentElement.setAttribute("data-bs-theme", "peach");
    if (id === "aquaBtn") document.documentElement.setAttribute("data-bs-theme", "aqua");
    if (id === "yellowBtn") document.documentElement.setAttribute("data-bs-theme", "yellow");

    // REMOVE active from all buttons
    buttons.forEach(btnId => {
      document.getElementById(btnId).classList.remove("active2");
    });

    // ADD active to clicked button
    document.getElementById(id).classList.add("active2");
  };
});