import React from 'react';

function PastExperience() {
  const data = [
    { id: 1, candidateId: '17154162023505S', companyName: 'SADFDSASADS', workingPeriod: '1-5', duties: 'DEVELOPER', supervisor: 'SADVSAV' },
    { id: 2, candidateId: '17156636854885S', companyName: 'Webseeder', workingPeriod: '9:30 - 6:30', duties: 'DEVELOPER', supervisor: 'SADVSAV' }
  ];

  return (
    <table className="min-w-full bg-white border">
      <thead>
        <tr className='border'>
          <th className="py-2 border">SL</th>
          <th className="py-2 border">Candidate Id</th>
          <th className="py-2 border">Company Name</th>
          <th className="py-2 border">Working Period</th>
          <th className="py-2 border">Duties</th>
          <th className="py-2 border">Supervisor</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id} className="text-center border">
            <td className="py-2 border bg-gray-100 ">{index + 1}</td>
            <td className="py-2 border bg-gray-100">{item.candidateId}</td>
            <td className="py-2 border bg-gray-100">{item.companyName}</td>
            <td className="py-2 border bg-gray-100">{item.workingPeriod}</td>
            <td className="py-2 border bg-gray-100">{item.duties}</td>
            <td className="py-2 border bg-gray-100">{item.supervisor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PastExperience;
