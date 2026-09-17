function login(username, password) {
    return username === 'admin' && password === '123';
}

// Xử lý form đăng nhập
if (typeof document !== 'undefined') {
    const form = document.getElementById('loginForm');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const message = document.getElementById('message');

            if (login(username, password)) {
                message.textContent = 'Đăng nhập thành công!';
            } else {
                message.textContent = 'Sai username hoặc password!';
            }
        });
    }
}

// Cho phép Jest sử dụng hàm login
if (typeof module !== 'undefined') {
    module.exports = { login };
}