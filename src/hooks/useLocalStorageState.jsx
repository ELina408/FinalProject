import {useEffect, useState} from "react";

const useLocalStorageState = (key, defaultValue) => {
    defaultValue = JSON.stringify(defaultValue)
    const [state, setState] = useState(() => {
        let value;
        try {
            value = JSON.parse(window.localStorage.getItem(key) || JSON.parse(defaultValue));
        } catch (e) {
            value = JSON.parse(defaultValue);
        }
        return value;
    });
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);
    return [state, setState];

};

export default useLocalStorageState;
