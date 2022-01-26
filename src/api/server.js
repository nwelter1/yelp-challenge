const token = "";


export const server_calls = {
    get: async () => {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=food&location=evanston', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Something went wrong while retreiving your data')
        }
        return await response.json()
    }
}