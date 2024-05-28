// BasicInformation.js
import React from 'react';

const BasicInformation = ({ formData, handleChange, errors }) => (
  <>
    <div className="flex items-center">
      <label className="block text-gray-700 w-1/4 font-bold">First Name *</label>
      <div className="w-[70%]">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className={`w-full mt-2 p-2 border rounded ${errors.firstName ? 'border-red-500' : ''}`}
          placeholder="First Name"
        />
        {errors.firstName && <span className="text-red-500 text-sm mt-1">{errors.firstName}</span>}
      </div>
    </div>
    <div className="flex items-center">
      <label className="block text-gray-700 w-1/4 font-bold">Last Name</label>
      <div className="w-[70%]">
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded"
          placeholder="Last Name"
        />
      </div>
    </div>
    <div className="flex items-center">
      <label className="block text-gray-700 w-1/4 font-bold">Email Address *</label>
      <div className="w-[70%]">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full mt-2 p-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
          placeholder="Email Address"
        />
        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
      </div>
    </div>
    <div className="flex items-center">
      <label className="block text-gray-700 w-1/4 font-bold">Phone *</label>
      <div className="w-[70%]">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full mt-2 p-2 border rounded ${errors.phone ? 'border-red-500' : ''}`}
          placeholder="Phone"
        />
        {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
      </div>
    </div>

    {/* Additional fields */}
    <div className="flex items-center">
      <label className="block text-gray-700 w-1/4 font-bold">Alternative Phone</label>
      <div className="w-[70%]">
        <input
          type="tel"
          name="alternativePhone"
          value={formData.alternativePhone}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded"
          placeholder="Alternative Phone"
        />
      </div>
    </div>
    <div className="flex items-center">
      <label className="block text-gray-700 w-1/4 font-bold">SSN</label>
      <div className="w-[70%]">
        <input
          type="text"
          name="ssn"
          value={formData.ssn}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded"
          placeholder="SSN"
        />
      </div>
    </div>
    <div className="flex items-center">
      <label className="block text-gray-700 w-1/4 font-bold">Present Address</label>
      <div className="w-[70%]">
        <input
          type="text"
          name="presentAddress"
          value={formData.presentAddress}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded"
          placeholder="Present Address"
        />
      </div>
    </div>
    <div className="flex items-center">
      <label className="block text-gray-700 w-1/4 font-bold">Permanent Address</label>
      <div className="w-[70%]">
        <input
          type="text"
          name="permanentAddress"
          value={formData.permanentAddress}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded"
          placeholder="Permanent Address"
        />
      </div>
    </div>
    <div className="flex items-center">
      <label className="block text-gray-700 w-1/4 font-bold">Country</label>
      <div className="w-[70%]">
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded"
          placeholder="Country"
        />
      </div>
    </div>
    <div className="flex items-center">
      <label className="block text-gray-700 w-1/4 font-bold">City</label>
      <div className="w-[70%]">
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded"
          placeholder="City"
        />
      </div>
    </div>
    <div className="flex items-center">
      <label className="block text-gray-700 w-1/4 font-bold">Zip Code</label>
      <div className="w-[70%]">
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded"
          placeholder="Zip Code"
        />
      </div>
    </div>
    <div className="flex items-center">
      <label className="block text-gray-700 w-1/4 font-bold">Picture</label>
      <div className="w-[70%]">
        <input
          type="file"
          name="picture"
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded"
        />
      </div>
    </div>
  </>
);

export default BasicInformation;
