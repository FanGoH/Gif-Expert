export const getGifs =  async(categoryName) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoryName)}&limit=10&api_key=qwBAwoFNicsvkSr7PqZK30to28LVRQwA`;

    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = await data.map(img => {
                        return {id: img.id, title: img.title, url: img.images?.downsized_medium.url}});

    return gifs;
    
}