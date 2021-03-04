import {
    useState,
    useEffect
} from 'react';
//Paths
import pokemones from '../paths/pokemones'
export default () => {
    const [results, setResults] = useState([]);
    const [validate, setValidate] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function fetchData(url) {
            try {
                const data = await fetch(url);
                const json = await data.json();
                return json;
            } catch (error) {
                setError(error);
                setValidate(false);
            }
        };
        async function fetchManyData(){
            let promises = [];
            for(let i=1;i<=200;i++){
                const data = fetchData(pokemones.getTodos.concat(`${i}`));
                if(data){
                    promises.push(data);
                }
            }
            const data = await Promise.all(promises);
            setResults(data);
            setValidate(true);
        }
        fetchManyData();
    }, []);
    return [results, validate, error];
};