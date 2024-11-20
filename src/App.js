import "./App.css";
import { useState, useRef, useEffect } from "react";
import Menu from "./Menu";

function App() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setlineWidth] = useState(1);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(0.5);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [lineColor, lineOpacity, lineWidth]);

  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };
  const draw = (e) => {
    if (!isDrawing) return;
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctxRef.current.stroke();
  };
  const stopDrawing = (e) => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  return (
    <div className="App">
      <h1>Paint</h1>
      <div className="board">
        <Menu
          setLineColor={setLineColor}
          setlineWidth={setlineWidth}
          setLineOpacity={setLineOpacity}
        />
        <canvas
          width={"1080px"}
          height={"540px"}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          ref={canvasRef}
        />
      </div>
    </div>
  );
}

export default App;
