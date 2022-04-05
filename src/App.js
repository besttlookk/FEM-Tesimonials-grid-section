import Card from "./components/Card";
import dataArr from "./data.json";
function App() {
  return (
    <>
      <main>
        <div className="grid">
          {dataArr.map((data) => (
            <Card data={data} key={data.name} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
