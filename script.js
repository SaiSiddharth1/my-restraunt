document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('search-input');
    const placeholderText = 'Search, Order, Enjoy, Repeat!';
    let index = 0;

    function typeWriter() {
        if (index < placeholderText.length) {
            searchInput.setAttribute('placeholder', placeholderText.substring(0, index + 1));
            index++;
            setTimeout(typeWriter, 150); // Adjust typing speed here (in milliseconds)
        } else {
            setTimeout(() => {
                index = 0;
                typeWriter();
            }, 2000); // Reset the animation after a pause (in milliseconds)
        }
    }

    typeWriter();
});
