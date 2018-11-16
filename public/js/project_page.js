(function(module) {
  const projectPage = {};
  projectPage.show = () => {
      $("main > section").hide();
      $("#project-list").show();

  };


  module.projectPage = projectPage;
})(window);





