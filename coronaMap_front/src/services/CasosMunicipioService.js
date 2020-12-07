import axios from "axios";

const DATA = "data1";
const MUN="municipio";
const CORONABACK_API_URL = "http://localhost:8080";
const CASOS_API_URL = `${CORONABACK_API_URL}/${DATA}/${MUN}`;

class CasosMunicipioService {
  devolverCasosMunicipio(MUNICIPIO) {
    return axios.get(`${CASOS_API_URL}/${MUNICIPIO}`);
  }
}

export default new CasosMunicipioService();