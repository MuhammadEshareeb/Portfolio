$(document).ready(function () {
    $(window).scroll(function () {
        // Checks if window is scrolled more than 550px, adds/removes solid class
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }
    });

    // Smooth scrolling for links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // CV download functionality
    document.getElementById("download-cv").addEventListener("click", function () {
        var cvUrl = 'file:///C:/Users/HP/Downloads/MUHAMMAD%20ESHAREEB%20%7BMERN%20STACK%20DEVELOPER%7D.pdf'; // Replace with actual URL
        var link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Muhammad_Eshareeb_CV.pdf'; // The name of the file to be downloaded
        link.click();
    });
});
