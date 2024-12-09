import React from "react";
import AppRouter from "../src/routers/AppRouter";  // Asegúrate de que AppRouter maneje las rutas

function App() {
  return (
    <div className="App">
      {/* Aquí renderizamos el componente AppRouter */}
      <AppRouter />
    </div>
  );
}

export default App;
