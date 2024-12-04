fetch('modal.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('modalContainer').innerHTML = data;

    const modal = document.getElementById("modal");
    const openModalButton = document.getElementById("openModal");
    const closeModalButton = document.getElementById("closeModal");

    openModalButton.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    closeModalButton.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  })
  .catch(error => console.error('Ошибка загрузки модального окна:', error));