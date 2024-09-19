const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.toggle("in-view")
        }
    });
}, {
    rootMargin: "0px",
    treshold: [0, 0.1, 1]
})

const tags = document.querySelectorAll(".card")

tags.forEach((tag) => {
    observer.observe(tag)
})