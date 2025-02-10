import "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DockDemo } from "./components/platform/dock";
import Homepage from "./pages/Homepage";
import { useSelector } from "react-redux";

const App = () => {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <div data-theme={theme === 0 ? `wireframe` : `black`}>
      <BrowserRouter>
        <DockDemo />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
