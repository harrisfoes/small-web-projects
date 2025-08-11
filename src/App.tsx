import "./App.css";
import Projects from "./sections/Projects.tsx";

function App() {
  return (
    <>
      <main className="font-montserrat">
        <h1 className="py-4 px-4 text-3xl font-bold">
          This is a collection of small projects
        </h1>
        <Projects /> 
      </main>
    </>
  );
}

export default App;
