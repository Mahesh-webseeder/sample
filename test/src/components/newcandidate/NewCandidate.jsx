import React, { useState } from 'react';
import Header from '../Header';
import BasicInformation from './BasicInformation';
import EducationalInformation from './EducationalInformation';
import PastExperience from './PastExperience';

const NewCandidate = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    altPhone: '',
    ssn: '',
    presentAddress: '',
    permanentAddress: '',
    country: '',
    city: '',
    zipCode: '',
    picture: null,
    education: [
      {
        obtainedDegree: '',
        university: '',
        cgpa: '',
        comments: '',
        visible: true,
      },
    ],
    experience: [
      {
        companyName: '',
        workingPeriod: '',
        duties: '',
        supervisor: '',
        visible: true,
      },
    ],
  });

  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState(0);

  const validate = () => {
    const newErrors = {};
    if (activeTab === 0) {
      if (!formData.firstName) newErrors.firstName = 'First Name is required';
      if (!formData.email) newErrors.email = 'Email Address is required';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e, index = null) => {
    const { name, value, type, files } = e.target;
    if (index === null) {
      setFormData({
        ...formData,
        [name]: type === 'file' ? files[0] : value,
      });
    } else {
      const updatedEducation = formData.education.map((edu, idx) =>
        idx === index ? { ...edu, [name.split('-')[0]]: value } : edu
      );
      setFormData({
        ...formData,
        education: updatedEducation,
      });
    }
  
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };
  

  const handleAddMore = (type) => {
    setFormData({
      ...formData,
      [type]: [
        ...formData[type],
        { obtainedDegree: '', university: '', cgpa: '', comments: '', visible: true },
      ],
    });
  };

  const handleToggleVisibility = (index, type) => {
    const updatedData = formData[type].map((item, idx) =>
      idx === index ? { ...item, visible: !item.visible } : item
    );
    setFormData({
      ...formData,
      [type]: updatedData,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (activeTab < 2) {
        setActiveTab(activeTab + 1);
      } else {
        console.log('Form submitted successfully', formData);
      }
    }
  };

  const handlePrevious = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <BasicInformation formData={formData} handleChange={handleChange} errors={errors} />;
      case 1:
        return (
          <EducationalInformation
            formData={formData}
            handleChange={handleChange}
            handleAddMore={() => handleAddMore('education')}
            handleToggleVisibility={(index) => handleToggleVisibility(index, 'education')}
            errors={errors}
          />
        );
      case 2:
        return (
          <PastExperience
            formData={formData}
            handleChange={handleChange}
            handleAddMore={() => handleAddMore('experience')}
            handleToggleVisibility={(index) => handleToggleVisibility(index, 'experience')}
            errors={errors}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="p-4 bg-gray-100 min-h-screen">
        <div>
          <ul className="flex border-b">
            <li className="mr-1">
              <button
                className={`inline-block p-2 font-semibold border rounded ${
                  activeTab === 0 ? 'bg-green-700 text-white' : 'bg-blue-700 text-white'
                }`}
              >
                Basic Information
              </button>
            </li>
            <li className="mr-1">
              <button
                className={`inline-block p-2 font-semibold border rounded ${
                  activeTab === 1 ? 'bg-green-700 text-white' : 'bg-blue-700 text-white'
                }`}
              >
                Educational Information
              </button>
            </li>
            <li className="mr-1">
              <button
                className={`inline-block p-2 font-semibold border rounded ${
                  activeTab === 2 ? 'bg-green-700 text-white' : 'bg-blue-700 text-white'
                }`}
              >
                Past Experience
              </button>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-8xl mx-auto">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {renderTabContent()}
            <div className="flex justify-end space-x-4">
              {activeTab > 0 && (
                <button type="button" onClick={handlePrevious} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Previous
                </button>
              )}
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                {activeTab < 2 ? 'Next' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewCandidate;
