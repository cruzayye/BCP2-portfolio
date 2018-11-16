///////////routes

page('/blog', blogPage.show);
page('/projects', projectPage.show);
page('/github', githubController.index);
// page('/blog', blogPage.show);

page();