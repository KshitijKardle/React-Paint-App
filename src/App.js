import "./App.css";

function App() {
  const startDrawing = (e) => {};
  const draw = (e) => {};
  const stopDrawing = (e) => {};

  return (
    <div className="App">
      <h1>Paint</h1>
      <div className="board">
        <canvas
          width={"1080px"}
          height={"540px"}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
        />
      </div>
    </div>
  );
}

export default App;
