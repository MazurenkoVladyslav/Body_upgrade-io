document.addEventListener('DOMContentLoaded', function() {
    const sidePopup = document.querySelector('.side-popup');
    
    sidePopup.addEventListener('mouseover', function() {
        sidePopup.style.right = '0';
    });

    sidePopup.addEventListener('mouseout', function() {
        sidePopup.style.right = '-250px';
    });
});
