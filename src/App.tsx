import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [scrolled, setScrolled] = useState(0);

  // const scrollProgress = (event: any) => {
  //   const scrollPx = document.documentElement.scrollTop;
  //   const winHeightPx =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;

  //   const scrollLen = Math.ceil(
  //     ((scrollPx / winHeightPx) * 100) / 0.558659217877095
  //   );

  //   if (scrollLen > 178) return;

  //   setScrolled(scrollLen);
  // };

  const scrollProgress = () => {
    const scrollPx =
      document.documentElement.scrollTop || document.body.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollLen = Math.ceil((scrollPx / winHeightPx) * 177 + 1);

    setScrolled(scrollLen);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);

    return () => removeEventListener("scroll", scrollProgress);
  }, []);

  const getIndex = () => {
    return scrolled.toString().padStart(5, "0");
  };

  return (
    <div className="main-container">
      <header className="img-header">
        <img
          src={`/images/tunnel_animation/Wide_Animation_${getIndex()}.png`}
          alt=""
        />
      </header>
    </div>
  );
};

export default App;
