document.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const contactSection = document.getElementById('contact');
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - footer.offsetHeight) {
        footer.classList.add('visible');
        contactSection.style.marginBottom = `${footer.offsetHeight}px`;
    } else {
        footer.classList.remove('visible');
        contactSection.style.marginBottom = '0';
    }
});
