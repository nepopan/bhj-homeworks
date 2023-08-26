document.addEventListener("DOMContentLoaded", function() {
    const modalPopup = document.getElementById("subscribe-modal");
    const closeModal = document.querySelector(".modal__close");
    
    if (!modalPopup || !closeModal) {
      console.error("Modal or close button not found!");
      return;
    }
  
    if (!document.cookie.includes("modalClosed=true")) {
      modalPopup.classList.add("modal_active");
    }
  
    closeModal.addEventListener("click", () => {
      modalPopup.classList.remove("modal_active");
      document.cookie = "modalClosed=true";
    });
  });
  