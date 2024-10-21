import React, { useState } from 'react';

import '../App.css';
import WarehouseInventory from './WarehouseInventory';
import DeliveryStatus from './DeliveryStatus';

const LogisticsDashboard: React.FC = () => {
  const [warehouseItems, setWarehouseItems] = useState<number>(100);
  const [isTruckLeft, setIsTruckLeft] = useState<boolean>(false);
  const [trucksUsed, setTrucksUsed] = useState<number>(0); // Track the number of trucks used

  const handleTruckDeparture = (items: number) => {
    setWarehouseItems(prevItems => prevItems - items); // Subtract dispatched items from warehouse
    setIsTruckLeft(true); // Mark truck as having left

    // Automatically reset truck status back to not left after a short delay
    setTimeout(() => {
      setIsTruckLeft(false);
    }, 1000); // Optional: delay can be adjusted or removed
  };

  const handleTruckUsed = () => {
    setTrucksUsed(prevCount => prevCount + 1); // Increment trucks used count
  };

  return (
    <div className="dashboard">
      <h1>Logistics Dashboard</h1>
      <div className="dashboard-content">
        <WarehouseInventory itemCount={warehouseItems} />
        <DeliveryStatus 
          isTruckLeft={isTruckLeft} 
          onTruckDeparture={handleTruckDeparture} 
          remainingItems={warehouseItems} // Pass remaining items to DeliveryStatus
          onTruckUsed={handleTruckUsed} // Pass the truck used callback
        />
        <p>Total Trucks Used: {trucksUsed}</p>
      </div>
    </div>
  );
};

export default LogisticsDashboard;
