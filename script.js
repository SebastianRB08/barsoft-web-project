const menuToggle = document.querySelector(".menu-toggle");
const navigationMenu = document.querySelector(".navigation-menu");
const demoDialog = document.querySelector(".demo-dialog");
const demoForm = document.querySelector(".demo-form");
const formMessage = document.querySelector(".form-message");
const demoTriggers = document.querySelectorAll(".demo-trigger");
const dialogClose = document.querySelector(".dialog-close");

if (menuToggle && navigationMenu) {
  function closeMenu() {
    navigationMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Open menu" : "Close menu");
    navigationMenu.classList.toggle("is-open", !isExpanded);
  });

  navigationMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  if (demoDialog && demoForm && formMessage && dialogClose) {
    function openDemo(event) {
      if (event) {
        event.preventDefault();
      }
      closeMenu();
      formMessage.textContent = "";
      demoForm.reset();
      demoDialog.showModal();
      demoDialog.querySelector("#name").focus();
    }

    demoTriggers.forEach((trigger) => {
      trigger.addEventListener("click", openDemo);
    });

    dialogClose.addEventListener("click", () => {
      demoDialog.close();
    });

    demoDialog.addEventListener("close", () => {
      formMessage.textContent = "";
    });

    demoDialog.addEventListener("click", (event) => {
      if (event.target === demoDialog) {
        demoDialog.close();
      }
    });

    demoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      formMessage.textContent = "Thank you! This demo form works in your browser, but it does not send your information to a server.";
    });
  }
}

const currentYear = document.querySelector("#current-year");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
