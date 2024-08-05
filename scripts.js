document.getElementById('startAnimation').addEventListener('click', function() {
    const container = document.getElementById('animationContainer');

    function createBall() {
        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.style.width = `${Math.random() * 30 + 10}px`;
        ball.style.height = ball.style.width;
        ball.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
        ball.style.position = 'absolute';
        ball.style.top = `${Math.random() * 100}%`;
        ball.style.left = `-${ball.style.width}`;
        container.appendChild(ball);

        // Animate the ball
        ball.animate([
            { transform: 'translateX(100vw)' }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'linear',
            iterations: 1
        });

        // Remove ball after animation
        ball.addEventListener('animationend', function() {
            ball.remove();
        });
    }

    setInterval(createBall, 300); // Create a new ball every 300ms
});
