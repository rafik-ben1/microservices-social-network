import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import { SelectedChat } from "./pages/SelectedChat";
import  Profile  from "./pages/Profile";
import DefaultPage from "./pages/DefaultPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
   <BrowserRouter >
     <Routes>
      <Route path="/" element={ <Layout/>  } >
        <Route index element={ <DefaultPage/> } />
        <Route path="/chats/:chatId" element={ <SelectedChat/> } />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={ <NotFound /> } />
      </Route>
     </Routes>
   </BrowserRouter >
  );
}

export default App;
