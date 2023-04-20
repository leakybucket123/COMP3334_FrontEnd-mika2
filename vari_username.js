const loginForm = document.getElementById("login-form");
const passwordForm = document.getElementById("password-form");
const userIdInput = document.getElementById("user-id");
const passwordInput = document.getElementById("password");

function validateUserId() {
    const userId = userIdInput.value.trim();
    if (userId.toLowerCase() === "jehan") {
        // 如果用户ID正确，则显示密码输入表单，并将用户ID输入框禁用
        loginForm.style.display = "none";
        passwordForm.style.display = "block";
        userIdInput.disabled = true;
        passwordInput.focus();
    } else {
        // 如果用户ID不正确，则弹出警告框
        alert("Please sign up first.");
    }
}

passwordForm.addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止表单提交

    const password = passwordInput.value.trim();
    if (password === "123456") {
        // 如果密码正确，则重定向到home.html页面
        window.location.href = "home.html";
    } else {
        // 如果密码不正确，则清空密码输入框并聚焦
        passwordInput.value = "";
        passwordInput.focus();
        alert("Incorrect password. Please try again.");
    }
});