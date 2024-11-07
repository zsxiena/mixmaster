import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList.jsx";


const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

export const loader = async () =>{
    const searchTerm = ''
    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
    console.log(response)
    return {drinks:response.data.drinks, searchTerm}; 
}


const Landing =() => {
    const {drinks, searchTerm} = useLoaderData()
    console.log(drinks)
    return <>
    <CocktailList/>
        </>
}

export default Landing;