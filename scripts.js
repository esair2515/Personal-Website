document.getElementById('startAnimation').addEventListener('click', function() {
    const container = document.getElementById('animationContainer');

    function createBall() {
        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.style.width = `${Math.random() * 30 + 10}px`;
        ball.style.height = ball.style.width;
        ball.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
        ball.style.top = `${Math.random() * 100}vh`; // Random vertical position
        ball.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        container.appendChild(ball);

        // Set a random animation duration
        const animationDuration = Math.random() * 3000 + 2000;
        ball.style.animationDuration = `${animationDuration}ms`;

        // Remove the ball after its animation is done
        ball.addEventListener('animationend', function() {
            ball.remove();
        });
    }

    // Create a new ball each time the button is clicked
    createBall();
});
