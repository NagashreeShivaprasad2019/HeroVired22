
import './App.css';
import Content from './component/Content/Content';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Subheader from './component/Subheader/Subheader';
import Subheader2 from './component/Subheader/Subheader2';
import Search from './component/Content/Search';
import SearchJob from './component/Content/SearchJob';


function App() {
  return (
    <div className="App">
      <Header />
      <Subheader/><br/><br/>
      <Subheader2/><br/><br/>
     
      <SearchJob/><br/><br/>
     
      <Content /><br/><br/><br/><br/><br/><br/><br/>
    
      <Footer />
    </div>
  );
}

export default App;
