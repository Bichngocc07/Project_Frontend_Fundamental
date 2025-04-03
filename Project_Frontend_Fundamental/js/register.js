
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Lấy giá trị từ form
      const fullname = document.getElementById("fullname").value.trim();
      const firstname = document.getElementById("firstname").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const terms = document.getElementById("terms").checked;
  
      // Xóa thông báo lỗi cũ
      clearErrors();
  
      let hasError = false;
  
      // Kiểm tra họ tên đệm
      if (!fullname) {
        showError("fullnameError", "Họ và tên không được để trống");
        hasError = true;
      }
  
      // Kiểm tra tên
      if (!firstname) {
        showError("firstnameError", "Tên không được để trống");
        hasError = true;
      }
  
      // Kiểm tra email
      if (!email) {
        showError("emailError", "Email không được để trống");
        hasError = true;
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        showError("emailError", "Email phải đúng định dạng");
        hasError = true;
      }
  
      // Kiểm tra mật khẩu
      if (!password) {
        showError("passwordError", "Mật khẩu không được để trống");
        hasError = true;
      } else if (password.length < 8) {
        showError("passwordError", "Mật khẩu tối thiểu 8 ký tự");
        hasError = true;
      }
  
      // Kiểm tra xác nhận mật khẩu
      if (!confirmPassword) {
        showError("confirmError", "Mật khẩu xác nhận không được để trống");
        hasError = true;
      } else if (confirmPassword !== password) {
        showError("confirmError", "Mật khẩu không trùng khớp");
        hasError = true;
      }
  
      // Kiểm tra checkbox
      if (!terms) {
        showError("termsError", "Bạn phải đồng ý với điều khoản");
        hasError = true;
      }
  
      // Nếu không có lỗi → xử lý thành công
      if (!hasError) {
        alert("Đăng ký thành công! Chuyển sang trang đăng nhập...");
        window.location.href = "login.html"; // Thay bằng link trang đăng nhập của bạn
      }
    });
  
    // Hàm hiển thị lỗi
    function showError(id, message) {
      const element = document.getElementById(id);
      if (element) {
        element.innerText = message;
      }
    }
  
    // Hàm xóa toàn bộ lỗi cũ
    function clearErrors() {
      document.querySelectorAll(".error").forEach(el => el.innerText = "");
    }
  });
  