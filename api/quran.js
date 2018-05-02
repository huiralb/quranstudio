const base = 'http://staging.quran.com:3000/api/'
const versi = 'v3'

import axios from "axios";

export default class Quran {
  
  constructor(){
    this.base = base+versi
  }

  recitations(){
    axios.get(this.base+'/options/recitations').then((res)=>{
      return res.data
    })
  }
}