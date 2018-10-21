$("#project-list").on('click', 'div', function() {
  // $('#project-details').hide();//hides the previous content.
  $("#project-details").css("display", "block");// project is originally set to display: none;

  var data = $(this).data('project');//takes the value of the div ex: data-project = "Bus Mall"
  $('#project-details [data-project="' + data + '"]').show();






});



//  $("#project-list").on('click', 'div', function(){
//    $('content').hide();//start off by hiding the template
//    var data = $(this).data('project'); //referencing data attr | ex: data-project ="Cocktail App"
//    $('#project-details [data-project ="' + data + '"]').show();//within section #project details passing through the data attribute. 

//  });

 $(".menu").click(function(){
   $("nav img").toggleClass('icon');
 });







// ======old code, this was too repetitive so theres an easier way to do this======
 
 // $("#busmall").click(function() {
  //   projectsArray[1].toHtml();
    
  // });
  // $("#cocktail").click(function() {
  //   projectsArray[0].toHtml();
    
  // });
  // $("#cookiestore").click(function() {
  //   projectsArray[2].toHtml();
    
  // });
  // $("#quiz").click(function() {
  //   projectsArray[3].toHtml();
    
  // });


  // $(".menu").click(function() {
  //   $("nav img").toggleClass('icon');
    
  // });
