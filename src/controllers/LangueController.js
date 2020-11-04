import Controller from  './Controller';
import LangueService from  "./../services/LangueService";
import Langue from  "./../models/Langue";
const langueService = new LangueService(
  new Langue().getInstance()
);

class LangueController extends Controller {

  constructor(service) {
    super(service);
  }
  
}

export default new LangueController(langueService);
