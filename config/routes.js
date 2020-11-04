import LangueController from './../src/controllers/LangueController';

export default (app) => {

  // POST ROUTES
  app.get(`/api/langue`, LangueController.getAll);
  app.get(`/api/langue/:params`, LangueController.get);
  app.post(`/api/langue`, LangueController.insert)
  app.put(`/api/langue/:id`, LangueController.update);
  app.delete(`/api/langue/:id`, LangueController.delete);

}
