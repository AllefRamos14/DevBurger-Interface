import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { FilterOption, Filter } from './styles';
import { OrderStatusOptions } from './OrderStatus';

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [rows, setRows] = useState([]);
  const [filteredOrders, setfilteredOrders] = useState([]);
  const [activeStatus, setactiveStatus] = useState(0);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders');


      setOrders(data);
      setfilteredOrders(data);

    }

    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id, // corrigido aqui
      date: order.createdAt,
      status: order.status,
      products: order.products.map(product => ({
        ...product,
        quantity: product.quantity ?? 1,  // garante quantity definido
      })),
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));
    setRows(newRows);
  }, [filteredOrders]);

  function handleStatus(status) {
    if (status.id === 0) {
      setfilteredOrders(orders);
    } else {
      const newOrders = orders.filter((order) => order.status === status.value);

      setfilteredOrders(newOrders);
    }
    setactiveStatus(status.id)
  }
  useEffect(() => {
    if (activeStatus === 0) {
      setfilteredOrders(orders);
    } else {
      const statusIndex = OrderStatusOptions.findIndex(
        (item) => item.id === activeStatus,
      );
      const newFilteredOrders = orders.filter(
        (order) => order.status === OrderStatusOptions[statusIndex].value,
      );
      setfilteredOrders(newFilteredOrders);
    }
  }, [orders]);

  return (
    <>
      <Filter>
        {OrderStatusOptions.map((status) => (
          <FilterOption
            key={status.id}
            onClick={() => handleStatus(status)}
            $isActiveStatus={activeStatus === status.id}
          >
            {status.label}
          </FilterOption>
        ))}
      </Filter>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedidos</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do Pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
