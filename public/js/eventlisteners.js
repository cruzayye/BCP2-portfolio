
$("#project-list").on('click', 'div', function() {

  $('#projectSection').children().hide();

  $('#projectSection').css('display', 'block');
  let data = $(this).data('project');//takes the value of the div ex: data-project = "Bus Mall"
  console.log(data);
  // $('[data-project="' + data + '"]').show();
  
  //make a loop that goes over the data attr and matches the name of the array in order to display. 
  projectsArray.forEach(function(project) {
    if(project.name == data){
       $('[data-project="' + data + '"]').show();
      console.log(project);

      
    }
    


  });


});
// console.log(localStorage.rawData);





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
