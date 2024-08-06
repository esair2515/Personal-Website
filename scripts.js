document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("launch-balls").addEventListener("click", function() {
        for (let i = 0; i < 100; i++) {
            createBall();
        }
    });
});

function createBall() {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.style.left = `${Math.random() * 100}vw`;
    ball.style.backgroundColor = getRandomColor();
    document.body.appendChild(ball);

    // Use setTimeout to delay the transition to ensure it happens
    setTimeout(() => {
        ball.style.transform = `translateY(${window.innerHeight + 100}px)`;
    }, 100); // Small delay to allow ball to be added to the DOM
    
    ball.addEventListener("transitionend", () => ball.remove());
}

function getRandomColor() {
    const colors = ["#ff5733", "#33ff57", "#3683ff", "#ff33a8", "#ffd700"];
    return colors[Math.floor(Math.random() * colors.length)];
}
