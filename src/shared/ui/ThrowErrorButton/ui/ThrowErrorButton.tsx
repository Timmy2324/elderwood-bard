import { useEffect, useState } from 'react';

export const ThrowErrorButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <button type="button" onClick={onThrow}>
            +
        </button>
    );
};
