import { useEffect, useState } from "react"

const useFetch = <T = unknown>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data.articles))
            .catch(setError)
            .finally(() => setLoading(false));
    }, [url]);
    return { data, loading, error };
}

export default useFetch;