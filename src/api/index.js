import axios from 'axios'
import config from '../config'
export default {
  getOffer (fechaIni,fechaFin) {
    return axios({
      url: config.serverURI + '/v1/ofertas?FechaIni=' + fechaIni + '&FechaFin=' + fechaFin,
      method: 'get',
      headers:{'content-type': 'application/json','x-api-key': config.keyApiOffer}
    })
  },
}
