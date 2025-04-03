document.addEventListener("DOMContentLoaded", function () {

    const openModalBtn = document.getElementById("open-modal-btn");
    const modal = document.getElementById("addProductModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const addProductForm = document.getElementById("addProductForm");
    const productListBody = document.getElementById("product-list");

    openModalBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
        addProductForm.reset();
    });

    
    cancelBtn.addEventListener("click", function () {
        modal.style.display = "none";
        addProductForm.reset();
    });

    
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
            addProductForm.reset();
        }
    });

    
    addProductForm.addEventListener("submit", function (e) {
        e.preventDefault();

        
        const productCode = document.getElementById("productCode").value.trim();
        const productName = document.getElementById("productName").value.trim();
        const categoryValue = document.getElementById("categorySelect").value;
        const status = document.querySelector('input[name="status"]:checked').value;
        const quantity = document.getElementById("quantity").value;
        const price = document.getElementById("price").value;
        const discount = document.getElementById("discount").value;
        const productDetail = document.getElementById("productDetail").value;
        
        const imageFile = document.getElementById("imageInput").files[0];
        

        
        const newRow = document.createElement("tr");
    
        newRow.innerHTML = `
        <td>${productCode}</td>
        <td>${productName}</td>
        <td>${Number(price).toLocaleString()} đ</td>
        <td>${quantity}</td>
        <td>${discount}%</td>
        <td class="${status === "active" ? "active-status1" : "inactive-status"}">
          ${status === "active" ? "🟢 Đang hoạt động" : "🔴 Ngừng hoạt động"}
        </td>
        <td>
          <i class="fas fa-edit edit"></i>
          <i class="fas fa-trash delete"></i>
        </td>
      `;
        productListBody.appendChild(newRow);

        
        modal.style.display = "none";
        addProductForm.reset();
    });
});
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("addProductModal");
const closeModal = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelBtn");


openModalBtn.addEventListener("click", () => {
   
    modal.classList.add("show");
});


function hideModal() {
    console.log("111111");
    
    modal.classList.remove("show");
}

closeModal.addEventListener("click", hideModal);
cancelBtn.addEventListener("click", hideModal);


window.addEventListener("click", (e) => {
    if (e.target === modal) {
        hideModal();
    }
});
