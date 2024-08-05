document.getElementById('startAnimation').addEventListener('click', function() {
    const container = document.getElementById('animationContainer');

    function createBall() {
        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.style.width = `${Math.random() * 30 + 10}px`;
        ball.style.height = ball.style.width;
        ball.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
        ball.style.top = `${Math.random() * (container.clientHeight - parseFloat(ball.style.height))}px`;
        ball.style.left = `-${ball.style.width}`;
        container.appendChild(ball);

        // Remove the ball after its animation is done
        ball.addEventListener('animationend', function() {
            ball.remove();
        });
    }

    setInterval(createBall, 300); // Create a new ball every 300ms
});
