import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Gustavo",
          email: "ms.gustavo@outlook.com",
          bio: "Sou um programador",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
