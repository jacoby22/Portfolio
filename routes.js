page('/', projectController.index, portfolio.selectNav);
page('/about', aboutController.index, portfolio.selectNav);
page('/resume', resumeController.index);
page('/contact', contactController.index, portfolio.selectNav);
page('*', projectController.error);
page();
