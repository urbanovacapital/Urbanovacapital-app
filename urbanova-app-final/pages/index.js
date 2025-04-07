import { useState } from "react";

export default function Home() {
  const [userType, setUserType] = useState("");
  const [investment, setInvestment] = useState("");
  const [investedAmount, setInvestedAmount] = useState(85000); // Ejemplo
  const [targetAmount, setTargetAmount] = useState(100000); // Ejemplo

  const handleInvest = () => {
    const amount = parseFloat(investment);
    if (!isNaN(amount)) {
      setInvestedAmount(prev => prev + amount);
      setInvestment("");
    }
  };

  const progress = Math.min((investedAmount / targetAmount) * 100, 100);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Bienvenido a UrbaNova Capital</h1>

      <div style={{ marginTop: "2rem" }}>
        <p>¿Eres propietario o inversor?</p>
        <button onClick={() => setUserType("propietario")}>Propietario</button>
        <button onClick={() => setUserType("inversor")} style={{ marginLeft: "1rem" }}>Inversor</button>
      </div>

      {userType === "inversor" && (
        <div style={{ marginTop: "2rem", borderTop: "1px solid #ccc", paddingTop: "1rem" }}>
          <h2>Proyecto en marcha</h2>
          <p><strong>Propiedad:</strong> Piso 2 habitaciones reformado a 5 habitaciones</p>
          <p><strong>Inversión total requerida:</strong> {targetAmount.toLocaleString()} €</p>
          <p><strong>Capital ya invertido:</strong> {investedAmount.toLocaleString()} €</p>
          <progress value={progress} max="100" style={{ width: "100%", height: "24px" }} />
          <p style={{ marginTop: "1rem" }}>Falta por invertir: {(targetAmount - investedAmount).toLocaleString()} €</p>

          <div style={{ marginTop: "1rem" }}>
            <input
              type="number"
              placeholder="¿Cuánto quieres invertir?"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              style={{ padding: "8px", width: "200px", marginRight: "1rem" }}
            />
            <button onClick={handleInvest}>Invertir</button>
          </div>
        </div>
      )}

      {userType === "propietario" && (
        <div style={{ marginTop: "2rem", borderTop: "1px solid #ccc", paddingTop: "1rem" }}>
          <h2>Colabora con UrbaNova</h2>
          <p>Te ayudamos a reformar y alquilar tu piso al máximo rendimiento.</p>
        </div>
      )}
    </div>
  );
}
