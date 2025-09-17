    const menuToggle = document.getElementById("menu-toggle");
    const headerMenus = document.querySelector(".header-menus");
    
    menuToggle.addEventListener("click", function() {
    headerMenus.classList.toggle("active");
    if (headerMenus.classList.contains("active")) {
        this.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        this.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
    });

    document.getElementById("contact-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: formData
    });

    if (response.ok) {
        alert("✅ Message sent successfully! We’ll reply to your email soon.");
        this.reset();
    } else {
        alert("❌ Failed to send message. Please try again.");
    }
});