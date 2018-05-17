const base = "http://staging.quran.com:3000/api/v3"

import axios from "axios"

export default {
  recitations() {
    return axios
      .get(base + "/options/recitations")
      .then(res => Promise.resolve(res.data))
      .catch(error => Promise.reject(error))
  },

  chapters() {
    return axios
      .get(base + "/chapters")
      .then(res => Promise.resolve(res.data))
      .catch(error => Promise.reject(error))
  }
}
