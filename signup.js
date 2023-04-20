const signupForm = document.getElementById("signup-form");
const snsInput = document.getElementById("sns");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止表单提交
    const password = snsInput.value.trim();
    if (password === "1234") {
        // 如果密码正确，则重定向到home.html页面
        window.location.href = "login1.html";
    } else {
        // 如果密码不正确，则清空密码输入框并聚焦
        snsInput.value = "";
        snsInput.focus();
        alert("Incorrect SNS. Please try again.");
    }
});