const API_KEY ='dbe49e48993a4ad8f07dfef65713470c';
const BASE_URL= 'https://api.themoviedb.org/3/';

//trending/all/day?api_key=<<api_key>>//

const getData = url => fetch(url)
    .then(response => {
        if(response.ok) {
            return response.json()
        }
        throw `Что - то пошло не так , ошибка ${response.status}`
})

.catch(err => console.error(err));

export const getTriends = async ()=> {
    const url = `${BASE_URL}trending/all/day?api_key=${API_KEY}`;
    const data = await getData(url);
    console.log('data:', data);
};