import React, { useState } from 'react';
import Header from '../components/Header';
import { FaUserEdit } from 'react-icons/fa';
import { BkoBtn, BkoInput } from '../components/custom';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactTimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const SlotPge = () => {
  const [time, setTime] = useState('10:00'); // Default time
  const [checked, setChecked] = useState('10:00'); // Default time

  const [selectedDate, setSelectedDate] = useState(null); // State to hold the selected date

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime); // Update the time in state
  };
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <Header />

      <div className="bg-[#f7f7f7] h-svh relative isolate px-2 pt-32 lg:px-8">
        <div className="mx-auto p-4 rounded shadow-lg shadow-slate-200 bg-white px-6 w-8/12 h-[42vh]">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 ">
              Create a Slot
            </h1>
          </div>
          {/* <div className="flex justify-center pt-6">
                        <FaUserEdit className="size-10 cursor-pointer" />
                    </div> */}
          <div className="flex justify-between pt-5">
            <div className="px-2 w-full">
              <BkoInput
                id="designation"
                name="designation"
                type="text"
                label="Designation"
                placeholder="Designation"
                autoComplete="designation"
              />
            </div>
            <div className="px-2 w-full">
              <label className="block text-sm/6 font-medium text-black">
                Date
              </label>
              <ReactDatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM-dd-yyy" // Custom format for displaying the date
                placeholderText="MM-DD-YYYY"
                className="block w-full mt-1 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm"
              />
            </div>
            <div className="px-2 w-full">
              <BkoInput
                id="time"
                name="time"
                type="text"
                label="Time"
                autoComplete="time"
              />
            </div>
            {/* <div className="px-2 w-full">
                            <BkoInput
                                id="mobile"
                                name="mobile"
                                type="number"
                                label="Contact No."
                                autoComplete="mobile"
                            />
                        </div> */}
          </div>
          <div className="flex justify-between pt-5">
            <div className="px-2 w-full">
              <label
                htmlFor="discription"
                className="block text-sm/6 font-medium text-black"
              >
                Discription
              </label>
              <textarea
                id="discription"
                name="discription"
                type="text"
                placeholder="Discription"
                className="block w-full mt-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm"
                autoComplete="discription"
              />
            </div>
          </div>
          {/* <div className="flex justify-between pt-5">

                        <div className=" flex align-center px-2 w-full ">
                            <div className='mt-3 w-4/12'>
<input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
                                <label className="inline-flex items-center ms-1">Do you charge</label>
                            </div>
                            <div className=" flex px-2 w-full">
                            <label className="inline-flex items-center text-black me-2">Amount: </label>

                                <BkoInput
                                    id="amount"
                                    name="amount"
                                    type="number"
                                    placeholder='Enter Amount'
                                    autoComplete="amount"
                                />
                            </div>
                        </div>
                        <div className=" flex justify-end align-start px-2 w-full">
                            <div>
                                <BkoBtn label="Save" className="w-48 mt-0" />
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default SlotPge;
