import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/";

 const setParams = ({ q, page }) =>
  (axios.defaults.params = {
    q,
    page,
    key: "25274379-6b8d04d5236c1ea65da084838",
    per_page: 12,
    image_type: "photo",
    orientation: "horizontal",
  });

export const newSearch = (q ="people", page = 1)  => {
  setParams ({ q, page });
  // console.log({ query, page })
  return axios
  .get("api/")
  .then((res) => {
    // console.log(res)
    if (!res.data.hits.length) {
      throw new Error("Wrong search, enter what you are looking for and we have it :)");
    }
    // console.log(res.data.hits)
    return res.data.hits;
  })
  .catch((err) => {
    throw err;
  });
};
