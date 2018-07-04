import axios from "axios";

export default {
  // Place search API call
  getPlaces: function (query, lat, lng) {
    return axios.get('/api/maps/' + query + "/" + lat + "/" + lng);
  },
  // Gets all businesses
  getBusinesses: function () {
    return axios.get("/api/businesses");
  },
  // Gets the business with the given id
  getBusiness: function (id) {
    return axios.get("/api/businesses/" + id);
  },
  // Deletes the business with the given id
  deleteBusiness: function (id) {
    return axios.delete("/api/businesses/" + id);
  },
  // Saves a business to the database
  saveBusiness: function (businessData) {
    return axios.post("/api/businesses", businessData);
  },
  // Saves a deal to the Deals collection, populates it within the appropriate deals[] for a business document.
  saveDeal: function (id, dealData) {
    return axios.post("/api/businesses/" + id + "/deals", dealData);
  },
  // saveDeal: function (id, dealData) {
  //   return axios.post(`/api/businesses/${id}/deals`, dealData);
  // }
  // Get the deals with the given id
  getDeals: function (id) {
    return axios.get("/api/businesses/" + id + "/deals");
  }
};