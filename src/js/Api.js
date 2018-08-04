import axios from "axios";

class Api {
  constructor() {
    this.uuid =  "";
    this.apiVersion = "v1";
    //this.url = "http://localhost:8000/api";
    this.url = "https://class-cal-api.herokuapp.com/api";
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
    return "hi"
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
