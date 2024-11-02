import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaCalendarAlt } from 'react-icons/fa';
import { BiNews, BiCog } from 'react-icons/bi';
import { AiOutlineUser, AiOutlinePieChart } from 'react-icons/ai';
import { CircularProgressbar } from 'react-circular-progressbar';

const Dashboard = () => {
  return (
    <div className="flex h-screen">

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Welcome Dean,</h1>
          <div className="text-right">
            <p className="font-medium">Admin</p>
            <p className="text-sm text-gray-500">Admin@gmail.com</p>
          </div>
        </header>

        {/* Stats Section */}
        <section className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
            <p className="text-lg">Number of Students</p>
            <p className="text-3xl font-bold">400</p>
          </div>
          <div className="bg-purple-600 text-white p-6 rounded-lg text-center">
            <p className="text-lg">Current Semester</p>
            <p className="text-3xl font-bold">2</p>
          </div>
          <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
            <p className="text-lg">No of Staffs</p>
            <p className="text-3xl font-bold">15</p>
          </div>
          <div className="bg-purple-600 text-white p-6 rounded-lg text-center">
            <p className="text-lg">No of Levels</p>
            <p className="text-3xl font-bold">5</p>
          </div>
        </section>

        {/* Calendar Progress and Student Stats */}
        <section className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Calendar Progress</h3>
            <div className="space-y-4">
              <p>2 of 15 weeks - Semester Progress</p>
              <p>50 days - Days to Exams</p>
              <p>2 of 2 semesters - Year Semesters</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Students</h3>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <p>Levels Distribution</p>
                {/* Add a chart here using Chart.js or Recharts */}
              </div>
              <div className="w-1/2">
              
                <p>80% Male, 20% Female</p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium">19th July, 2024</p>
              <p className="text-sm text-gray-600">9am - SOC Encryptos League starts</p>
              <p className="text-sm text-gray-500">A football league for the graduating set of SOC</p>
              <a href="#" className="text-blue-600">More details</a>
            </div>
            <div>
              <p className="font-medium">19th July, 2024</p>
              <p className="text-sm text-gray-600">9am - FUTA 200th Inaugural Conference</p>
              <p className="text-sm text-gray-500">FUTA will be having its 200th inaugural lecture</p>
              <a href="#" className="text-blue-600">More details</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
