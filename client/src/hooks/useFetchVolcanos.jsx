import { useState, useCallback, useMemo } from "react";

export default function useFetchVolcanos() {
  const [selectCountry, setSelectCountry] = useState("");
  const [selectDistance, setSelectDistance] = useState("none");
  const [subRegions, setSubRegions] = useState({});
  const [volcanoes, setVolcanos] = useState([]);
  const [errors, setErrors] = useState("");

  const fetchVolcanosFunction = useCallback(async () => {
    const baseRequest = `${
      import.meta.env.VITE_API_ENDPOINT
    }/volcanoes?country=${encodeURI(selectCountry)}`;
    const fullRequest =
      selectDistance === "none"
        ? baseRequest
        : `${baseRequest}&populatedWithin=${encodeURIComponent(
            selectDistance
          )}`;
    try {
      const response = await fetch(fullRequest);
      const json = await response.json();
      if (response.status === 400) {
        setErrors(json.message);
        return;
      }
      if (response.status === 200) {
        setVolcanos(json);
        return;
      }
    } catch {
      setErrors("Server Error");
    }
  }, [selectCountry, selectDistance]);

  useMemo(() => {
    let set = new Set();
    volcanoes.map((element) => set.add(element.subregion));
    setSubRegions(set);
  }, [volcanoes, setSubRegions]);

  const fetchVolcanos = useMemo(() => {
    return fetchVolcanosFunction;
  }, [fetchVolcanosFunction]);

  return {
    subRegions,
    selectCountry,
    selectDistance,
    setSelectCountry,
    setSelectDistance,
    fetchVolcanos,
    volcanoes,
    errors,
  };
}
