$("#project-list").on('click', 'div', function() {
  $('#projectSection').children().hide();
  $('#projectSection').css('display', 'block');

  let data = $(this).data('project');//takes the value of the div ex: data-project = "Bus Mall"
  console.log(data);
  $('[data-project="' + data + '"]').show();


});







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
