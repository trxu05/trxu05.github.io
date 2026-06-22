// Highlight the nav link for the section currently in view.
const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("main section[id]");

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
