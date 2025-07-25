import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../components';


export function UserLayouts() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}