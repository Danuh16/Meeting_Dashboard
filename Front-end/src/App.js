import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

const App =()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
