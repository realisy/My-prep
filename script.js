$(document).ready(function() {
  console.log("Script included!");
    $('.dish_name').click(function(){
        $('.food_pic').slideToggle('slow');
    });
    $( "#directions_selectable" ).selectable({
        stop: function() {
            var result = $( "#select-result" ).empty();
            $( ".ui-selected", this ).each(function() {
                var index = $( "#directions_selectable li" ).index( this );
                result.append( " #" + [ index + 1 ] );
            });
        }
    });
    $(":checkbox").css({
       'width' : '1em',
       'height' : '1em'
    });
    $( this ).tooltip({
        track: true
    });
});