import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import { SelectedChat } from "./pages/SelectedChat";

function App() {
  return (
   <BrowserRouter >
     <Routes>
      <Route path="/" element={ <Layout/>  } >
        <Route index element={ <SelectedChat/> } />
      </Route>
     </Routes>
   </BrowserRouter >
  );
}

export default App;
