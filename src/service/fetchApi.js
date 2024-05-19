
const base_url = "https://rickandmortyapi.com/api"

const fetchApi = async (category, queries="") => {
    try{       
        const queryParams = new URLSearchParams(queries);
        const url = `${base_url}/${category}?${queryParams}`
        console.log("This is the url", url)
        const response = await fetch(url)
        const data = await response.json()
        console.log("Data got in response", data)
        return data

    } catch(error) {

        console.log("Error while fetching the api")
        console.error("Error mila", error)
        return []
        
    }
}

export default fetchApi