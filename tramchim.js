// Khi trang tải xong
window.addEventListener("load", function () {
    // Hiện chữ
    document.querySelector(".container").classList.add("show");

    // Hiện ảnh
    setTimeout(() => {
        document.querySelectorAll(".img").forEach((el) => {
            el.classList.add("show");
        });
    }, 500);
});

// Nút cuộn lên đầu hiện khi scroll xuống
window.addEventListener("scroll", function () {
    const btn = document.getElementById("topBtn");
    if (window.scrollY > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

// Xử lý nút cuộn lên đầu
document.addEventListener("DOMContentLoaded", function () {
    const topBtn = document.getElementById("topBtn");
    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
