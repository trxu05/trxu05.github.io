// Highlight the nav link for the section currently in view.
const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("main section[id]");

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const hash = link.getAttribute("href");
        if (!hash) return;

        event.preventDefault();

        if (hash === "#top") {
            window.scrollTo(0, 0);
        } else {
            document.querySelector(hash)?.scrollIntoView({ block: "start" });
        }

        history.pushState(null, "", hash);
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY < 80) {
        navLinks.forEach((link) => {
            link.style.color = link.getAttribute("href") === "#top" ? "var(--text)" : "";
        });
    }
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.id;
            navLinks.forEach((link) => {
                link.style.color =
                    link.getAttribute("href") === `#${id}` ? "var(--text)" : "";
            });
        });
    },
    { rootMargin: "-45% 0px -50% 0px" }
);

sections.forEach((section) => observer.observe(section));
