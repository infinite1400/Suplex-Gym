
export const exerciseOptions = {
    method: 'GET',
    params: {limit : '10'},
    headers: {
      'X-RapidAPI-Key': 'b068b2304fmsh2c1fa3fcd6addb2p1b385ajsn37932a1c66ca',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData=async (url,options)=>{
    const respone=await fetch(url,options);
    const data=await respone.json();
    return data;
};