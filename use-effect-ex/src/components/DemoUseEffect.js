import { useEffect, useState } from "react";

const DemoUseEffect = () => {
  const [contador, setContador] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [nombreValido, setNombreValido] = useState(false);

  console.log('Renderizando componente...');

  // 1️⃣ SIN arreglo → se ejecuta en cada render
  useEffect(() => {
    console.log('useEffect SIN arreglo → cada render');
  });

  // 2️⃣ Con arreglo vacío → solo al montar el componente
  useEffect(() => {
    console.log('useEffect con [] → solo una vez al inicio');
  }, []);

  // 3️⃣ Con dependencia [contador]
  useEffect(() => {
    console.log(`useEffect con [contador] → contador cambió a ${contador}`);
  }, [contador]);

  // 4️⃣ Con dependencia [nombre]
  useEffect(() => {
    console.log(`useEffect con [nombre] → nombre cambió a "${nombre}"`);
    if (nombre && nombre.length >= 3) {
      setNombreValido(true);
    } else {
      setNombreValido(false);
    }
  }, [nombre]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Demostración de useEffect</h2>

      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar contador</button>

      <hr />

      <p>Nombre: {nombre || '(sin nombre)'}</p>
      <input
        type="text"
        placeholder="Escribe un nombre..."
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      {
        !nombreValido && (
          <span className="alert alert-danger">no cumple</span>
        )
      }
    </div>
  );
};

export default DemoUseEffect;