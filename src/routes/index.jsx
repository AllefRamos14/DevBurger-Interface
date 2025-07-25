import { Navigate, Route, Routes, } from "react-router-dom";
import {
    Home,
    Login,
    Register,
    Menu,
    Cart,
    Checkout,
    CompletePayment,
    Orders,
    NewProduct,
    EditProduct,
    Products,

} from "../containers";
import { UserLayouts } from "../layouts/UserLayouts";
import { AdminLayout } from "../layouts/AdminLayout";


export function Router() {
    return (
        <Routes>
            {/* Redireciona a raiz para /Login */}
            <Route path="/" element={<Navigate to="/Login" />} />

            {/* Rotas do usuário */}
            <Route path="/User" element={<UserLayouts />}>
                <Route path='Home' element={<Home />} />
                <Route path='Cardapio' element={<Menu />} />
                <Route path='Carrinho' element={<Cart />} />
                <Route path='Checkout' element={<Checkout />} />
                <Route path='CompletePayment' element={<CompletePayment />} />
            </Route>

            {/* Rotas do admin */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="pedidos" element={<Orders />} />
                <Route path="novo-produtos" element={<NewProduct />} />
                <Route path="editar-produto" element={<EditProduct />} />
                <Route path="produtos" element={<Products />} />
                 
               
            </Route>

            {/* Autenticação */}
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
        </Routes>
    );
}

// export const router = createBrowserRouter([

//     {
//         path: '/',
//         element: <Navigate to="/Login" replace />,
//     },

//     {
//         path: '/Home',
//         element: (
//             <>
//                 <Header />
//                 <Home />,
//                 <Footer />
//             </>
//         ),
//     },

//     {
//         path: '/Login',
//         element: <Login />,
//     },
//     {
//         path: '/Register',
//         element: <Register />,
//     },
//     {
//         path: '/Cardapio',
//         element: (
//             <>
//                 <Header />
//                 <Menu />,
//             </>
//         ),
//     },
//     {
//         path: '/Carrinho',
//         element: (
//             <Cart />
//         ),
//     },
//     {
//         path: '/Checkout',
//         element: (
//             <Checkout/>
//         ),
//     },
//     {
//         path: '/CompletePayment',
//         element: (
//             <CompletePayment />
//         ),
//     },
// ]);