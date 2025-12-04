import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        fetch(url)
        .then((res) => {
            if (!res.ok) {
            throw new Error("Error al obtener datos");
            }
            return res.json();
        })
        .then((json) => setData(json))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, [url]);

    return { data, loading, error };
}

export default useFetch;