// import React from 'react';

// // Define props with TypeScript
// interface WarehouseInventoryProps {
//   itemCount: number;
// }


// const WarehouseInventory: React.FC<WarehouseInventoryProps> = ({ itemCount }) => {
//   return (
//     <div className="warehouse-inventory">
//       <h2>Warehouse Inventory</h2>
//       <p>Items in Warehouse: {itemCount}</p>
//     </div>
//   );
// };

// export default WarehouseInventory;


import React from 'react';

// Define props with TypeScript
interface WarehouseInventoryProps {
  itemCount: number;
}

const WarehouseInventory: React.FC<WarehouseInventoryProps> = ({ itemCount }) => {
  return (
    <div className="warehouse-inventory">
      <h2>Warehouse Inventory</h2>
      <p>Items in Warehouse: {itemCount}</p>
    </div>
  );
};

export default WarehouseInventory;
