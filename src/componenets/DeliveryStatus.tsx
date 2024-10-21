import React, { useState } from 'react';

// Define props for DeliveryStatus
interface DeliveryStatusProps {
  isTruckLeft: boolean;
  onTruckDeparture: (items: number) => void; // Function to call when the truck departs with items
  remainingItems: number; // Pass remaining items to the component
  onTruckUsed: () => void; // Callback to increase the count of trucks used
}

const DeliveryStatus: React.FC<DeliveryStatusProps> = ({ isTruckLeft, onTruckDeparture, remainingItems, onTruckUsed }) => {
  const [itemCount, setItemCount] = useState<number>(5); // Default item count

  const handleDispatch = () => {
    if (itemCount < 5) {
      alert("You must dispatch at least 5 items.");
      return;
    }
    if (itemCount > 20) {
      alert("You cannot dispatch more than 20 items.");
      return;
    }
    if (itemCount > remainingItems) {
      alert("You cannot dispatch more items than are available in the warehouse.");
      return;
    }

    onTruckDeparture(itemCount); // Dispatch with the specified number of items
    onTruckUsed(); // Increase the count of trucks used
    setItemCount(5); // Reset to default after dispatch
  };

  return (
    <div className="delivery-status">
      <h2>Delivery Status</h2>
      <p>{isTruckLeft ? `The truck has left the warehouse with ${itemCount} items.` : "The truck is still in the warehouse."}</p>
      {!isTruckLeft && remainingItems >= 5 && (
        <div>
          <label>
            Items to dispatch (5-20):
            <input 
              type="number" 
              value={itemCount} 
              min={5} 
              max={20} 
              onChange={(e) => setItemCount(Number(e.target.value))} 
            />
          </label>
          <button onClick={handleDispatch}>Dispatch Truck</button>
        </div>
      )}
      {remainingItems < 5 && !isTruckLeft && (
        <p>Cannot dispatch truck. Not enough items in warehouse.</p>
      )}
    </div>
  );
};

export default DeliveryStatus;
