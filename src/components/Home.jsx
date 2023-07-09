import { MotionWrap } from './wrapper';
import Sidebar from './Home/Sidebar';
import Info from "./Home/Info";


const Home = () => {

  return (
      <div className="h-screen bg-slate-900 flex flex-nowrap justify-between place-items-center pl-5 ">
        <Sidebar />
        <Info />

      </div>
  )
}


export default Home
