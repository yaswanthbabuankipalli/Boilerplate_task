document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('hurry-up').addEventListener('click', function() {
        var phoneNumber = document.getElementById('phone-num').value;
        if (phoneNumber.trim() === '') {
            alert('Please enter your phone number.');
        } else {
            alert('Thank you for your interest! Your order will be processed shortly.');
        }
    });
});