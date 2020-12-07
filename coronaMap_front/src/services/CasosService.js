import axios from "axios";

const DATA = "data1";
const CORONABACK_API_URL = "http://localhost:8080";
const CASOS_API_URL = `${CORONABACK_API_URL}/${DATA}`;

class CasosService {
  devolverCasos() {
    return axios.get(`${CASOS_API_URL}`);
  }
}

export default new CasosService();