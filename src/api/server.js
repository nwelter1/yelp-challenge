export const server_calls = {
    get: async () => {
        const response = await fetch('http://localhost:5000/api/city/chicago/food', {
            method: 'GET'
        });
        if (!response.ok){
            throw new Error('Something went wrong while retreiving your data')
        }
        return await response.json()
        
    }
}