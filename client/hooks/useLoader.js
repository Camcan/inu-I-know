import { useEffect } from "react";

export default function useLoader(initialValue) {
  const checkLoad = setInterval(() => {
    if (document.readyState === "complete") {
      loader(0);
      clearInterval(checkLoad);
    }
  }, 10);

  const setProgress = (amt) => {
    document.getElementById("stop1").setAttribute("offset", amt);
    document.getElementById("stop2").setAttribute("offset", amt);
  };

  const loader = (e) => {
    setProgress(e);
    const progress = (e += 0.01);
    if (progress < 1) {
      setTimeout(loader, 10, e);
    } else {
      document.getElementById("loader-wrapper").className = "loaded";
    }
  };

  useEffect(() => loader(initialValue), []);
}
