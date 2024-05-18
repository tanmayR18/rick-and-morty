
const base_url = "https://rickandmortyapi.com/api"

const fetchApi = async (category, queries="") => {
    try{       

        const url = `${base_url}/${category}?${queries}`
        console.log("This is the url", url)
        const response = await fetch(url)
        const data = await response.json()
        console.log("Data got in response", data)
        return data

    } catch(error) {

        console.log("Error while fetching the api")
        console.error(error)
        return []
        
    }
}

export default fetchApi