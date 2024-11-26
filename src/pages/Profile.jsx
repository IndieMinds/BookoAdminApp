import React from 'react';
import Header from '../components/Header';
import { FaUserEdit } from 'react-icons/fa';
import { BkoBtn, BkoInput } from '../components/custom';

const Profile = () => {
  return (
    <div>
      <Header />

      <div className="bg-[#f7f7f7] h-svh relative isolate px-2 pt-40 lg:px-8">
        <div className="mx-auto p-4 rounded shadow-lg shadow-slate-200 bg-white w-7/12 h-[70vh]">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 ">
              Profile
            </h1>
          </div>
          <div className="flex justify-center pt-6">
            <FaUserEdit className="size-10 cursor-pointer" />
          </div>
          <div className="flex justify-between pt-6">
            <div className="px-2 w-full">
              <BkoInput
                id="email"
                name="email"
                type="email"
                label="Email address"
                autoComplete="email"
              />
            </div>
            <div className="px-2 w-full">
              <BkoInput
                id="mobile"
                name="mobile"
                type="mobile"
                label="Contact No."
                autoComplete="mobile"
              />
            </div>
          </div>
          <div className="flex justify-between pt-6">
            <div className="px-2 w-full">
              <BkoInput
                id="firstName"
                name="firstName"
                type="firstName"
                label="First Name"
                autoComplete="firstName"
              />
            </div>
            <div className="px-2 w-full">
              <BkoInput
                id="lastName"
                name="lastName"
                type="lastName"
                label="Last Name"
                autoComplete="lastName"
              />
            </div>
          </div>

          <div className="flex justify-between pt-6">
            <div className="px-2 w-full">
              <BkoInput
                id="city"
                name="city"
                type="city"
                label="City"
                autoComplete="city"
              />
            </div>
            <div className="px-2 w-full">
              <BkoInput
                id="designation"
                name="designation"
                type="designation"
                label="Designation"
                autoComplete="designation"
              />
            </div>
          </div>
          <div className="flex justify-between pt-6">
            <div className="px-2 w-full">
              <label
                htmlFor="address"
                className="block text-sm/6 font-medium text-black"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                className="block w-full mt-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm"
                type="address"
                autoComplete="address"
              />
            </div>
            <div className="px-2 w-full">
              <label
                htmlFor="bio"
                className="block text-sm/6 font-medium text-black"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                className="block w-full mt-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm"
                type="bio"
                autoComplete="bio"
              />
            </div>
          </div>
          <div className="flex justify-center pt-6">
            <BkoBtn label="Save" className="w-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
