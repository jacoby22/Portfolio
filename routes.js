page('/', projectController.index);
page('/about', aboutController.index);
page('/resume', resumeController.index);
page('/contact', contactController.index);
page('*', projectController.error);
page();
