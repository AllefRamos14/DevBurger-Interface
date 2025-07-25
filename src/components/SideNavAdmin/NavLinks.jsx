import {  ListIcon,  ListPlusIcon,  ReceiptIcon } from "@phosphor-icons/react";

export const NavLinks = [
    {
        id: 1,
        label: 'Pedidos',
        path: '/admin/pedidos',
        icon: <ReceiptIcon />,
    },
    {
        id: 2,
        label: 'Produtos',
        path: '/admin/produtos',
        icon: <ListIcon />,
    },
    {
        id: 3,
        label: 'Adicionar Produtos',
        path: '/admin/novo-produtos',
        icon: <ListPlusIcon />,
    },

];