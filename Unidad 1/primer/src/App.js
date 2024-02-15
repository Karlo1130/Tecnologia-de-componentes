import './App.css';
import input from './input.js';
import button from './button.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nuevo Usuario</h1>
        
        {input("Usuario", 'text')}
        {input("Correo", 'text')}
        {input("Contraseña", 'text')}
        
        <div id="checkboxDiv">
          {input("Acepto término y condiciones.", 'checkbox')}
        </div>

        <div id="buttonDiv">
          {button("Cancelar", true)}
          {button("Aceptar", false)}
        </div>

      </header>
    </div>
  );
}

export default App;
