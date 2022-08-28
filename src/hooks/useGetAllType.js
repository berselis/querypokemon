
import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetAllType = () => {
    const [types, setTyes] = useState([]);
    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/type/';
        axios.get(url)
        .then(res =>{
            setTyes(res.data.results.map(ty => ty.name))
        }).catch(msj => console.log(msj))
    }, []);
    return types.sort();
}

export default useGetAllType