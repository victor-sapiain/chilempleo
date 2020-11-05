import axios from 'axios'
import config from '../config'
export default {
  getOffer (fechaIni,fechaFin) {
    return axios({
      url: config.serverURIOffer + '/v1/ofertas?FechaIni=' + fechaIni + '&FechaFin=' + fechaFin,
      method: 'get',
      headers:{'content-type': 'application/json','x-api-key': config.keyApiOffer}
    })
  },
  getSearchOffer (fechaIni,fechaFin,busqueda) {
    return axios({
      url: config.serverURISearchOffer + '/v1/ofertas?FechaIni=' + fechaIni + '&FechaFin=' + fechaFin + '&Busqueda=' + busqueda,
      method: 'get',
      headers:{'content-type': 'application/json','x-api-key': config.keyApiSearchOffer}
    })
  },
}
