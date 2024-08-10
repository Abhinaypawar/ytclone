import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import { useAuth } from "./context/AuthProvider";
import Loading from "./loader/Loading";
// import { useAuth } from "./context/AuthProvider";

function App() {
     const{loading}=useAuth()
  return (
    <div>
      {loading && <Loading></Loading>}

      <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="search/:searchQuery" element={<Search/>}/>
      <Route path="/video/:id" element={<PlayingVideo></PlayingVideo>}/>

     </Routes>
    </div>
  );
}

export default App;
