const color = document.getElementById('colorDiv');

    color.addEventListener('mousemove', function(event) {
        // cursor position
        const x = event.offsetX;
        const y = event.offsetY;
        // *********
        // values stay between 0-255 for rgb
        const red = x % 255;
        const green = y % 255;
        const blue = (x + y) % 255;

        // Set the background color
        this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
