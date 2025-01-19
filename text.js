jQuery(document).ready(function() {
    $('.text-header p').mousemove(function(e) {
        var rXP = (e.pageX - this.offsetLeft - $(this).width() / 2);
        var rYP = (e.pageY - this.offsetTop - $(this).height() / 2);
        $(this).css('text-shadow',
            +rYP / 10 + 'px ' + rXP / 80 + 'px rgba(227, 6, 19, .8), ' +
            rYP / 8 + 'px ' + rXP / 60 + 'px rgba(255, 237, 0, 1), ' +
            rXP / 70 + 'px ' + rYP / 12 + 'px rgba(0, 159, 227, .7)'
        );
    }).mouseout(function(){
        $(this).css('text-shadow', 'none'); // Убираем тень при выходе мыши
    });
});