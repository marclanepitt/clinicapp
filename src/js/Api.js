import axios from "axios";

class Api {
  constructor() {
    this.uuid =  "";
    this.apiVersion = "v1";
    this.url = "http://localhost:8000/api";
    this.user = {};

  }

  generateUrl(url, version=null) {
    if(version == null) {
      return `${this.url}/${url}`;
    } else {
      return `${this.url}/${version}/${url}`;
    }
  }

  generateTokenHeader() {
    return {Authorization : `Token ${this.uuid}` };
  }

  getClinics() {
    return axios.get(this.generateUrl("clinics/list", this.apiVersion))
    .then((response) => {
      return response.data;
    });
  }

  getClinic(id) {
    return axios.get(this.generateUrl("clinics/detail/"+id+"/", this.apiVersion))
    .then((response) => {
      return response.data;
    });
  }

  getReviews(id) {
    return axios.get(this.generateUrl("clinics/reviews/"+id+"/", this.apiVersion))
    .then((response) => {
      return response.data;
    });
  }
}


export default class ApiInstance {
  static get instance() {
    if (!this[Api]) {
      this[Api] = new Api();
    }
    return this[Api];
  }
}
