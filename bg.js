const color = document.getElementById('colorDiv');

    color.addEventListener('mousemove', function(event) {
        // Get the X and Y coordinates of the cursor relative to the element
        const x = event.offsetX;
        const y = event.offsetY;

        // Calculate RGB values based on cursor position
        // Modulo 255 ensures values stay within the 0-255 range for RGB
        const red = x % 255;
        const green = y % 255;
        const blue = (x + y) % 255;

        // Set the background color
        this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });