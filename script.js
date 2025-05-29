const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

document.querySelectorAll('#navbar .shop-submenu > a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Đóng các submenu khác nếu có
        document.querySelectorAll('#navbar .shop-submenu').forEach(function(item) {
            if (item !== link.parentElement) item.classList.remove('active');
        });
        // Toggle submenu hiện tại
        link.parentElement.classList.toggle('active');
    });
});

