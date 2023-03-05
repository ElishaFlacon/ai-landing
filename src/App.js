import 'react-dom';
import './App.css';
import FaceScan from './FaceScan';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {

    return (
        <div className='App'>
            <Header />
            <FaceScan />
            <div className='container'>
                <Main />
            </div>
            <Footer />
        </div>
    );
}


export default App;
