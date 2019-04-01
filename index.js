window.addEventListener('DOMContentLoaded', function (e) {
    document.querySelectorAll('.navbar-toggler').forEach(function (button) {
        button.addEventListener('click', function () {
            document.querySelector(
                this.getAttribute('data-target')
            ).classList.toggle('show');
        });
    });
});