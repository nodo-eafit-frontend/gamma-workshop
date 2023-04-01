// import { Header } from "./components/organism";
import { Outlet } from "react-router-dom";



const App = () => {
  return  (
  <>
  {/* <Header />   */}
  <Outlet />
  </>
  );
};

export default App;