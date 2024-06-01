import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Preview from "./pages/Preview";
import { UserContext, UserProvider } from './context/UserContext';
import Search from "./pages/Search";
import Bookshelves from "./pages/Bookshelves";
import Register from "./components/Register";
import Login from "./components/Login";
import BookLists from "./components/shelves/BookLists";
import { useContext } from 'react';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={(props) =>
                user ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};
import NoPage from "./pages/NoPage";
//import LogoutBtn from "./components/logout"

export default function App() {
    return (
        <BrowserRouter>
            <UserProvider>
                <Routes>
                
                        

                    <Route path="/" element={<Home />} />
                    <Route path="/preview" element={<Preview />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/bookshelves" element={<Bookshelves />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NoPage />} />

                    <PrivateRoute path="/shelves" component={<BookLists />} />
                        

                </Routes>
             </UserProvider> 
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
