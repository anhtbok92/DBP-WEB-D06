import axios from 'axios';
import {useEffect, useState} from "react";

const useCallApi = (url = '') => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const res = await axios.get(url);
            if (res.status === 200) {
                setData(res.data || null);
            }
        } catch (error) {
            console.log('error', error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { isLoading, data };
}

export default useCallApi;