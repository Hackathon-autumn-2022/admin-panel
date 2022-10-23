import axios from "axios";

export const api = axios.create({
  baseURL: "http://0.0.0.0",
  timeout: 5000
});

const EMPTY_ARRAY = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});

export const getExponents = () =>
  api
    .get(`/v1/exponents`)
    .then((res) => res.data.items)
    .catch((err) => {
      console.error(err);
      return EMPTY_ARRAY;
    });


export const postExponent = (body) =>
  api
    .post(`/v1/exponent`, body)
    .then((res) => res.data.items)
    .catch((err) => {
      console.error(err);
      return EMPTY_OBJECT;
    });

