import React, {useEffect,useState} from 'react';
import { fetchAllOrders } from "../../../api/services/user/order_services";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';



const OrdersTable = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
      const fetchOrders = async () => {
        try {
          const ordersData = await fetchAllOrders(); // Add 1 to pageNumber for API's page numbering
          setOrders(ordersData);
        } catch (error) {
          console.error("Error fetching all users:", error.message);
        }
      };
  
      fetchOrders();
    });

  
    return (
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>User-ID</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>  
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.user}</TableCell>
                  <TableCell>{order.products.quantity}</TableCell>
                  <TableCell>{order.products.total_price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  

export default OrdersTable;