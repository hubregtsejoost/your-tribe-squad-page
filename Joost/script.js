const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
        } else {
            entry.target.classList.remove("in-view")
        }
    });
}, {
    treshold: [0, 1]
})

const tags = document.querySelectorAll(".card")

tags.forEach((tag) => {
    observer.observe(tag)
})