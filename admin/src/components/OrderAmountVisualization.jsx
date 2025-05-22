import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const OrderAmountVisualization = ({ orders }) => {
  // Group orders by status and calculate total amounts
  const statusData = useMemo(() => {
    if (!orders || orders.length === 0) return [];
    
    const statusGroups = {};
    
    // Group by status
    orders.forEach(order => {
      const status = order.status || 'Unknown';
      if (!statusGroups[status]) {
        statusGroups[status] = {
          status,
          totalAmount: 0,
          count: 0
        };
      }
      
      // Add to total and count
      statusGroups[status].totalAmount += parseFloat(order.amount) || 0;
      statusGroups[status].count += 1;
    });
    
    // Convert to array for chart
    return Object.values(statusGroups);
  }, [orders]);
  
  // Calculate overall stats
  const stats = useMemo(() => {
    if (!orders || orders.length === 0) 
      return { total: 0, average: 0, highest: 0, lowest: 0 };
    
    const amounts = orders.map(order => parseFloat(order.amount) || 0);
    const total = amounts.reduce((sum, amount) => sum + amount, 0);
    
    return {
      total: total.toFixed(2),
      average: (total / orders.length).toFixed(2),
      highest: Math.max(...amounts).toFixed(2),
      lowest: Math.min(...amounts).toFixed(2)
    };
  }, [orders]);

  if (!orders || orders.length === 0) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg text-center">
        No order data available for visualization
      </div>
    );
  }

  return (
    <div className="mt-8 mb-8">
      <h5 className="text-lg font-medium mb-4">Order Amount Analysis</h5>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
          <p className="text-sm text-blue-600">Total Orders Value</p>
          <p className="text-2xl font-bold">₹{stats.total}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg shadow-sm">
          <p className="text-sm text-green-600">Average Order Value</p>
          <p className="text-2xl font-bold">₹{stats.average}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg shadow-sm">
          <p className="text-sm text-purple-600">Highest Order</p>
          <p className="text-2xl font-bold">₹{stats.highest}</p>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg shadow-sm">
          <p className="text-sm text-amber-600">Lowest Order</p>
          <p className="text-2xl font-bold">₹{stats.lowest}</p>
        </div>
      </div>
      
      {/* Chart */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h6 className="text-md font-medium mb-4">Orders by Status</h6>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={statusData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="status" />
              <YAxis />
              <Tooltip formatter={(value) => `₹${value}`} />
              <Legend />
              <Bar dataKey="totalAmount" name="Total Amount" fill="#8884d8" />
              <Bar dataKey="count" name="Order Count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default OrderAmountVisualization;