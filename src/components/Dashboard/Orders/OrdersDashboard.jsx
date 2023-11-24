import { useState } from 'react';
import OrdersTable from "./OrdersTable";
import OrderDetails from './OrdersDetails';
import OrderEditForm from './OrderEditForm';

const OrdersDashboard = () => {
    const [order, setOrder] = useState()
    const [showEditForm, setShowEditForm] = useState(false);
    const [showDetailsTable, setShowDetailsTable] = useState(false);
    const [showOrdersTable, setShowOrdersTable] = useState(true);

    const handleShowOrders= () => {
      setShowDetailsTable(false);
      setShowEditForm(false);
      setShowOrdersTable(true);

  };

    const handleEditClick = (order) => {
        setOrder(order)
        setShowEditForm(!showEditForm);
        setShowOrdersTable(!showOrdersTable);

	  };

    const handleDetailsTable = (order) => {
        setOrder(order)
        setShowDetailsTable(!showDetailsTable);
        setShowOrdersTable(!showOrdersTable);
  };

    return (
        <>
            <h1 className='mb-4'> Orders </h1>
            {showDetailsTable ? (
					      <OrderDetails
                    orderID={order.id}
                    handleShowOrders={handleShowOrders}
                />
			      ) : showEditForm ? (
                <OrderEditForm
                    order={order}
                    handleShowOrders={handleShowOrders}
                />
            ) : (
                <OrdersTable
                    handleDetailsTable={handleDetailsTable}
                    handleEditClick={handleEditClick}
                />
			      )}
        </>
    );
};

  export default OrdersDashboard;
