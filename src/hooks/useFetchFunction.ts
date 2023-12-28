import { useState, useRef } from "react";

type FetchFunction = () => Promise<any>;
type FetchStatus = "loading" | "error" | "ready";

export const useFetchFunction = (fetchFunctions: Array<FetchFunction>) => {
  const [status, setStatus] = useState<FetchStatus>("loading");
  const data = useRef<null | Array<any>>();

  Promise.all(fetchFunctions.map((func: FetchFunction) => func()))
    .then((res) => {
      data.current = res;
      setStatus("ready");
    })
    .catch((err) => {
      console.error(err);
      setStatus("error");
    });

  return { status, data };
};
