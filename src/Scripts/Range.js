import $ from "jquery"


import '../../node_modules/jquery-ui/ui/widgets/tooltip'
import '../../node_modules/jquery-ui/ui/widgets/slider'

$('[data-toggle="tooltip"]').tooltip(); // slider-range
$("#slider-range").slider({
    range: true,
    min: 10000,
    max: 10000000,
    values: [10000, 10000000],
    slide: function slide(event, ui) {
        $("#amount").val("  از  " + ui.values[0] + "  تومان  تا  " + ui.values[1] + "  تومان");
    }
});
$("#amount").val("  از  " + $("#slider-range").slider("values", 0) + "  تومان  تا  " + $("#slider-range").slider("values", 1) + "  تومان");