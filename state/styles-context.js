import { createContext, useState } from "react";

export const StylesContext = createContext(null);

const StylesProvider = ({ children }) => {
  const [mapStyles, setMapStyles] = useState([
    {
      featureType: "transit.line",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#1c1717",
        },
        {
          saturation: "0",
        },
        {
          weight: "0",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
  ]);

  function changeStyles(style) {
    setMapStyles(style);
  }

  return (
    <StylesContext.Provider value={{ mapStyles, changeStyles }}>
      {children}
    </StylesContext.Provider>
  );
};

export default StylesProvider;
