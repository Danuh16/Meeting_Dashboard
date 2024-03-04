import React, { useState } from 'react';
import DatePicker from 'react-tailwindcss-datepicker';



const GanttChart = () => {
    
      return (
        <div className="bg-gray-200 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Mobile Apps Design Schedule</h2>
      </div>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th className="border p-2">Time</th>
            <th className="border p-2">Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">10 AM</td>
            <td className="border p-2">Designs (30 minutes)</td>
          </tr>
          <tr>
            <td className="border p-2">11 AM</td>
            <td className="border p-2">Team Management & Add Meeting (1 hour)</td>
          </tr>
          <tr>
            <td className="border p-2">12 AM</td>
            <td className="border p-2">Infography (2 hours)</td>
          </tr>
          <tr>
            <td className="border p-2">2 PM</td>
            <td className="border p-2">Wireframes (2 hours)</td>
          </tr>
          <tr>
            <td className="border p-2">3 PM</td>
            <td className="border p-2">Vacations (25 minutes)</td>
          </tr>
          <tr>
            <td className="border p-2">4 PM</td>
            <td className="border p-2">Coe (1 hour 30 minutes)</td>
          </tr>
          <tr>
            <td className="border p-2">5 PM</td>
            <td className="border p-2">CСО (1 hour)</td>
          </tr>
          <tr>
            <td className="border p-2">6 PM</td>
            <td className="border p-2">CСО (1 hour)</td>
          </tr>
          <tr>
            <td className="border p-2">7 PM</td>
            <td className="border p-2">Mobile Apps (1 hour)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GanttChart;