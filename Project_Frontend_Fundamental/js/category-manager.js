document.addEventListener("DOMContentLoaded", function () {
    // Tìm modal & các phần tử liên quan
    const modal = document.getElementById("addCategoryModal"); // trùng id="addCategoryModal"
    const openModalBtn = document.getElementById("openModal"); // Nút "Thêm mới danh mục"
    const closeModalBtn = document.getElementById("closeModalBtn"); // Dấu X
    const cancelBtn = document.getElementById("cancelBtn"); // Nút Hủy
    const form = document.getElementById("addCategoryForm");
  
    // Sự kiện mở modal
    openModalBtn.addEventListener("click", function () {
      // Hiển thị modal (bằng cách chỉnh display)
      modal.style.display = "flex"; 
    });
  
    // Sự kiện đóng modal khi bấm vào X 
    closeModalBtn.addEventListener("click", function () {
      modal.style.display = "none";
      form.reset(); // Nếu muốn reset form
    });
  
    // Đóng modal khi bấm "Hủy"
    cancelBtn.addEventListener("click", function () {
      modal.style.display = "none";
      form.reset();
    });
  
    // Đóng modal khi click ra ngoài nội dung (nếu muốn)
    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
        form.reset();
      }
    });
  
    // Xử lý submit form
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Lấy dữ liệu
      const categoryCode = document.getElementById("categoryCode").value.trim();
      const categoryName = document.getElementById("categoryName").value.trim();
      const status = document.querySelector('input[name="status"]:checked').value;
  
      // Thêm vào bảng - (bạn cần <tbody> có id="categoryTableBody" để chèn dòng)
      // ... code chèn vào bảng ...
  
      // Đóng modal
      modal.style.display = "none";
      form.reset();
    });
  });
  