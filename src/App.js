import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MyProvider from './MyProvider';
import ProductList from './ProductList';



class App extends Component {
    render() {
        return (
            <div className='App'>
                <MyProvider>


                    <h1 className="App-title">Welcome to my car store</h1>

                    <ProductList />

                </MyProvider>
            </div>

        );
    }
}

export default App;
