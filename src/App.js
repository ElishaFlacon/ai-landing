import 'react-dom';
import './styles/App.css';
import FaceScan from './components/FaceScan';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


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