import React from "react";
import { UserContext } from "../App";
import { StylesContext } from "../state/styles-context";

export function User() {
  const { mapStyles, changeStyles } = React.useContext(StylesContext);

  function setNewStyles() {
    const newFeatureType = "Test"
    changeStyles([
      {
        featureType: newFeatureType,
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
  }

  return (
    <div>
      <h1>Map Styles</h1>
      <p><b>Feature Type:</b> {mapStyles[0].featureType}</p>
      <button onClick={setNewStyles}>Change Styles</button>
    </div>
  );
}
