import axios from "axios";

export const baseURL = process.env.BASE_URL

function getaxiosInstance() {
  const axiosInstance = axios.create({
    // baseURL:"http://localhost:7000",
    baseURL
  });
  return axiosInstance;
}

export const MakeRequest = {
  get(url, successAction, failureAction) {
    getaxiosInstance()
      .get(url)
      .then((succResp) => {
        if (successAction) {
          successAction(succResp);
        }
      })
      .catch((err) => {
        if (failureAction) {
          failureAction(err);
        }
      });
  },

  post(url, data, successAction, failureAction) {
    getaxiosInstance()
      .post(url, data)
      .then((succResp) => {
        if (successAction) {
          successAction(succResp);
        } 
      })
      .catch((err) => {
        if (failureAction) {
          failureAction(err);
        }
      });
  },
};
