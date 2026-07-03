console.log("Borneo Bird Tour homepage loaded.");

document.querySelectorAll(".scroll-link").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (!target) return;

        const startPosition = window.pageYOffset;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 30;
        const distance = targetPosition - startPosition;
        const duration = 900;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;

            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            const ease = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    });
});