export const createPageUrl = (pageName) => {
    const routes = {
      'Portfolio': '/',
      'Projects': '/projects'
    };
    return routes[pageName] || '/';
  };