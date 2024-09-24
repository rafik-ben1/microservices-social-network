import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import { SelectedChat } from "./pages/SelectedChat";
import { Profile } from "./pages/Profile";

function App() {
  return (
   <BrowserRouter >
     <Routes>
      <Route path="/" element={ <Layout/>  } >
        <Route index element={ <SelectedChat/> } />
        <Route path="profile" element={<Profile />}  />
      </Route>
     </Routes>
   </BrowserRouter >
  );
}

export default App;
