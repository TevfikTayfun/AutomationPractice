//Fetch training with async

const axios = require("axios");

const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return results;
};


fetchData(1);
/*fetchData(1)
  .then((response) => {
    console.log("Data fetched:", response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

console.log("it's working");

*/
module.exports = fetchData;
