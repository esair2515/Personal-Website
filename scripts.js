let animationInterval;

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

        // Set random direction for the ball
        const endX = Math.random() * 200 - 100; // Random X direction
        const endY = Math.random() * 200 - 100; // Random Y direction
        ball.style.animation = `moveBall ${Math.random() * 3 + 2}s linear`; // Random animation duration
        ball.style.transform = `translate(${endX}vw, ${endY}vh)`;

        // Remove the ball after its animation is done
        ball.addEventListener('animationend', function() {
            ball.remove();
        });
    }

    // Create a new ball every 300ms
    animationInterval = setInterval(createBall, 300);
});

document.getElementById('stopAnimation').addEventListener('click', function() {
    clearInterval(animationInterval);
});
