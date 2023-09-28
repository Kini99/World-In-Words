import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Post from './Post';
import Write from './Write';

const MainRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/post/:id" element={<Post />}/>
    <Route path="/write" element={<Write />}/>
   </Routes>
  )
}

export default MainRoutes