const $selectButton = document.querySelector(".dropdown-menu-btn");
const $menuItems = document.querySelector(".dropdown-menu-items");

const svgCheck = `
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke-width="0"></g>
    <g stroke-linecap="round" stroke-linejoin="round"></g>
    <g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
        fill="#000000"
      ></path>
    </g>
  </svg>
`;

$selectButton.addEventListener("click", function () {
  const dataState = this.getAttribute("data-state");
  if (dataState === "open") {
    this.setAttribute("data-state", "closed");
  } else {
    this.setAttribute("data-state", "open");
  }
});

$menuItems.addEventListener("click", function (e) {
  if (e.target.classList.contains("dropdown-menu-item")) {
    [...$menuItems.children].forEach((menuItem) => {
      if (menuItem !== e.target) {
        menuItem.setAttribute("data-state", "unchecked");
        menuItem.children[1].innerHTML = "";
      } else {
        menuItem.setAttribute("data-state", "checked");
        menuItem.children[1].innerHTML = `${svgCheck}`;
      }
    });

    const valueElement = e.target.querySelector(".dropdown-menu-item-value");
    const value = valueElement.innerText;
    $selectButton.children[0].innerText = value;
    $selectButton.setAttribute("data-state", "closed");
  }
});
