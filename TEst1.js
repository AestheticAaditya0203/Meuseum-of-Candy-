
/* 
const getStarWars = async (id) => {
    try {
        const config = {
            params: {
                ExchangeCode: 'NMS',
                headers: {
                    'X-RapidAPI-Host': 'yahoofinance-stocks1.p.rapidapi.com',
                    'X-RapidAPI-Key': 'f7b4212df6mshdc8240257f728dbp13c9c3jsn5f4ba64d7af7'
                }
            }
        };
        const res = await axios.get('https://yahoofinance-stocks1.p.rapidapi.com/companies/list-by-exchange', config);
        console.log("you got ur results", res.data);
    }
    catch (e) {
        console.log("Sry!!, you got an error", e);
    }
}
 */
const options =  axios.get({
    method: 'GET',
    url: 'https://yahoofinance-stocks1.p.rapidapi.com/companies/list-by-exchange',
    params: {ExchangeCode: 'NMS'},
    headers: {
      'X-RapidAPI-Host': 'yahoofinance-stocks1.p.rapidapi.com',
      'X-RapidAPI-Key': 'f7b4212df6mshdc8240257f728dbp13c9c3jsn5f4ba64d7af7'
    }
  });