import { useState } from "react";
import envVariables from "./envVariables.js";

export default function useFetch(subUrl) {
  const [loading, setLoading] = useState(true);
  const baseUrl = envVariables() + subUrl;

  function get(url) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {mode:'cors'})
        .then(response => response.json())
        .then(data => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch(error => {
          setLoading(false);
          reject(error);
        });
    });
  }

  function post(url, body) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(data => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch(error => {
          setLoading(false);
          reject(error);
        });
    });
  }

  return { get, post, loading };
};