const toggleButton = document.querySelector(".dark-light");
const colors = document.querySelectorAll(".color");

colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    colors.forEach((c) => c.classList.remove("selected"));
    const theme = color.getAttribute("data-color");
    document.body.setAttribute("data-theme", theme);
    color.classList.add("selected");
  });
});



const detailArea = document.getElementById("details-area");
const chatArea = document.getElementById("conversation-area");

function showDetails() {
  if ( detailArea.classList.contains("d-none") ) {
    detailArea.classList.remove("d-none");
    detailArea.classList.add("d-flex");
  } else  {
    detailArea.classList.remove("d-flex");
    detailArea.classList.add("d-none");
  }
}


function toggleChat() {
  if (chatArea.classList.contains("d-none")) {
    chatArea.classList.remove("d-none");
    chatArea.classList.add("d-flex");
  } else {
    chatArea.classList.remove("d-flex");
    chatArea.classList.add("d-none");
  }
}