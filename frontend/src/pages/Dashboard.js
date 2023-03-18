import React from 'react';

function Dashboard() {
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>This is where you can view your important data and metrics.</p>
      <div>
        <h2>Top Products</h2>
        <ul>
          <li>Product A</li>
          <li>Product B</li>
          <li>Product C</li>
        </ul>
      </div>
      <div>
        <h2>Sales Report</h2>
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>January</td>
              <td>$10,000</td>
            </tr>
            <tr>
              <td>February</td>
              <td>$15,000</td>
            </tr>
            <tr>
              <td>March</td>
              <td>$12,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
