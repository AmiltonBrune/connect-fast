export const dictionaryRoutes = (route) => {
  const dictionary = {
    '/': 'Cliente',
  };

  return dictionary[route] ? dictionary[route] : dictionary['/'];
};
