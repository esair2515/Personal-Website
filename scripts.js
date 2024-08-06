// Confetti script for the launch-balls button
document.getElementById("launch-balls").addEventListener("click", function() {
    for (let i = 0; i < 100; i++) {
        createBall();
    }
});

function createBall() {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.style.left = `${Math.random() * 100}vw`;
    ball.style.backgroundColor = getRandomColor();
    document.body.appendChild(ball);

    ball.style.transform = `translateY(${window.innerHeight + 100}px)`;
    
    ball.addEventListener("transitionend", () => ball.remove());
}

function getRandomColor() {
    const colors = ["#ff5733", "#33ff57", "#3683ff", "#ff33a8", "#ffd700"];
    return colors[Math.floor(Math.random() * colors.length)];
}
