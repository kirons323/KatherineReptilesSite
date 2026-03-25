import { useState } from "react";
import "../css/Reptiles.css";
import reptiles from "./ReptileInfo";

export default function Reptiles() {
  const [selected, setSelected] = useState("leopardGeckos");
  const selectedReptile = reptiles[selected];

  return (
    <section className="reptile-container">
      <div className="reptile-card">
        <h1>My Reptiles 🦎</h1>

        {/* Reptile Selector */}
        <div className="reptile-selector">
          {Object.keys(reptiles).map((key) => (
            <button
              key={key}
              className={`reptile-button ${selected === key ? "active" : ""}`}
              onClick={() => setSelected(key)}
            >
              {reptiles[key].name}
            </button>
          ))}
        </div>

        {/* Pets */}
        <div className="pets-grid">
          {selectedReptile.pets.map((pet, index) => (
            <div className="pet-card" key={index}>
              <div className="pet-image-wrapper">
                <img
                  src={`/Images/ReptilePhotos/${pet.image}`}
                  alt={pet.name}
                />
              </div>
              <h3>{pet.name}</h3>
              <p className="pet-fun-fact">{pet.funFact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}