import {
    useState,
    useEffect
} from 'react';
export default url => {
    const [results, setResults] = useState([]);
    const [validate, setValidate] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetch(url);
                const json = await data.json();
                setResults(json);
                setValidate(true);
            } catch (error) {
                setError(error);
                setValidate(false);
            }
        };
        fetchData();
    }, [url]);
    return [results, validate, error];
};