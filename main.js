$(document).ready(function(){
  $(".modal-wrapper").click(function(e){
    var link_element = $(e.currentTarget);

    var  = link_element.class(".model-link")

    var pop_up = $("#modal");

    p.attr("src", .model-link);
    centerImage(pop_up);

    $(".modal-outer").show();
      
    $(".modal-outer").click(function(){
      $(".modal-outer").hide();
    });
  });
});

//I'm trying to get this to function the same way as the lightbox but there is not "data"
//reference like the lightbox where it was tagged "data-ing-url" to do ths from so I'm getting an error
//in the console. I'm really struggling with these and need some help so that I can understand it and re-submit
//later in the week

function centerImage(pop_up) {


  pop_up.load(function(){
    var page_height = $(window).height();
    var pop_up_height = pop_up.height();
    var pop_up_height_offset = ( page_height - pop_up_height) / 2;
    pop_up.parent().css("margin-top", pop_up_height_offset);
  });
};  