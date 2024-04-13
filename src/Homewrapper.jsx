import Home from "./home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const HomeWrapper = () => {
    return <Home />;
  };
  export default HomeWrapper;
<Route path="/" element={<HomeWrapper />} />