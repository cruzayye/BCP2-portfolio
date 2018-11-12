/////////////////blog
(function(module) {
  const blogPage = {};
  blogPage.show = () => {
      $("main > section").hide();
      $(".blogSpot").show();

  };


  module.blogPage = blogPage;
})(window);
