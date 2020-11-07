import axios from "axios";


const CORONABACK_API_URL = "http://localhost:8080";
const CASOS_API_URL = `${CORONABACK_API_URL}`;


class CoorMunicipioService {
  devolverCoorMunicipios() {
    return axios.get(`${CASOS_API_URL}/Municipios`);
  }
}

export default new CoorMunicipioService();
