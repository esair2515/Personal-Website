// Function to create and animate confetti balls
document.getElementById('launch-balls').addEventListener('click', function() {
    const numberOfBalls = 50; // Number of balls to create
    const duration = 5000; // Duration in milliseconds

    for (let i = 0; i < numberOfBalls; i++) {
        createBall();
    }

    setTimeout(removeBalls, duration);
});

function createBall() {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    document.body.appendChild(ball);

    // Set random starting position
    ball.style.left = `${Math.random() * 100}vw`;
    ball.style.top = `${Math.random() * 100}vh`;

    // Set random color
    ball.style.backgroundColor = getRandomColor();

    // Animate the ball to move across the screen
    const endX = Math.random() * window.innerWidth;
    const endY = Math.random() * window.innerHeight;

    requestAnimationFrame(() => {
        ball.style.transform = `translate(${endX - parseFloat(ball.style.left)}px, ${endY - parseFloat(ball.style.top)}px)`;
    });
}

function removeBalls() {
    const balls = document.querySelectorAll('.ball');
    balls.forEach(ball => ball.remove());
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update marker position on scroll
function updateMarker() {
    const marker = document.querySelector('.scrollbar-marker');
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    // Calculate the marker's position
    const markerPosition = (scrollY / (scrollHeight - viewportHeight)) * viewportHeight;

    marker.style.top = `${markerPosition}px`;
}

// Update marker on scroll
window.addEventListener('scroll', updateMarker);

// Initial marker position
updateMarker();
