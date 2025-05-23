import { useEffect, useState } from "react";

export const useLocalStorage = (key) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let getTodo= JSON.parse(localStorage.getItem(key))||[];
    setData(getTodo);
    console.log("initial data fetch")
  }, []);

  useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(data));
        console.log("data update");
  },[data, key])

  return [data, setData];
};
