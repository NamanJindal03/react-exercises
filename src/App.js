import {Link, Routes, Route} from 'react-router-dom'
import Root from './Root';
import Home from './Home';
import Blogs from './Blogs';
import Child from './Blog';
import Navigation from './Navigation';
import BlogsLayout from './BlogsLayout';
import ArchivedBlogs from './ArchivedBlogs';
function App() {
  return (
    <>
    <Navigation />
    
    {/* <Routes>
      <Route path='/home' element={<Home/>}></Route>
    </Routes> */}
    {/* <AppRoutes /> */}
      <Routes>
        <Route path='/' element={<Root/>}></Route>
        {/* useParams */}
        <Route path='/home'  element={<Home/>}></Route>




        <Route path='/blogs' element={<BlogsLayout/>} >
          <Route index element={<Blogs/>} />
          <Route path=':blogId' element={<Child/>}></Route>
          <Route path='archive_blogs' element={<ArchivedBlogs/>}></Route>
        </Route>
        



        <Route path='*' element={<div>Error Page</div>} />


      </Routes>
    </>

    /* blogs/2/232930293029 */
  );
}

export default App;
