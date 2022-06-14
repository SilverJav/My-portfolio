// Writing effect
let i = 0;
let text = "Hello, my name is Javiera...";



setTimeout(function typing() {
    if (i < text.length) {
        document.getElementById('text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 90);
    }
}, 2500);



$(function () {

  $("a").click(function(event) {
    if (this.hash !== "") {
        event.preventDefault();

        var gato = this.hash;

        $('html, body').animate({
            scrollTop: $(gato).offset().top
        }, 1000, function() {
            window.location.hash = gato;
        });
    }
  });

    $('[data-toggle="tooltip"]').tooltip();
});

