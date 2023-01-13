const key = 'SHGeVzlOv0Z16tWKv0eNApMijy9nDNtT'
const getWeather = async (id) =>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);

    const data =  await response.json();

    return data[0];
};


// getting city infor mation
const getCity = async (city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'

    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query);
    
    if(response.status !== 200){
        throw new Error('cannot fetch api please check if api is correct and debug your code')
    }
    const data =  await response.json();

    return data[0];
};


    
