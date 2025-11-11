import { useState } from 'react';

export default function RequestTracker() {
  const [pendiente, setPending] = useState(0);
  const [completado, setCompleted] = useState(0);

  async function handleClick() {
    setPending(p => p + 1);
    await delay(3000);
    setPending(p => p - 1);
    setCompleted(c => c + 1);
  }

  return (
    <>
      <h3>
        Pendiente: {pendiente}
      </h3>
      <h3>
        Completado: {completado}
      </h3>
      <button onClick={handleClick}>
        Comprar
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
