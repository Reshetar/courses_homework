// Task 1
$( document ).ready(function() {
  $('a[href^="https://"]').not('a[href*=gusdecool]').attr('target','_blank');
});


// Task 2
$(".head").css("background-color", "#00ff54");
$(".head .inner").css("font-size", "35px");

// Task 3

$( document ).ready(function() {
  $('div').each(function (i, item) {
    const $div = $(item);
    if ($div.prev()[0].localName === 'h3') {
        $div.prev().before($div);
    }
  })    
});

// Task  4

$(document).ready(function() {
  $('input:checkbox').on('click', function () {
    let checkedBoxes = 0;
    $('input:checkbox').each(function (i, item) {
        if ($(this).is(":checked")) {
          checkedBoxes += 1;
        } 
    })
    $('input:checkbox').each(function (i, item) {
        if (checkedBoxes >= 3) {
          item.disabled = true;
        }
    })
})
});