import React from "react";

function BasicInformation() {
  const data = [
    {
      id: 1,
      name: "Deepak",
      candidateId: "17156636854885S",
      Photograph: "",
      email: "ddhakad@gmail.com",
      ssn: "8342634634",
      phone: "8342634634",
      Action: "",
    },
    {
      id: 2,
      name: "XYZ Mojito",
      candidateId: "17154162023505S",
      Photograph: "",
      email: "admin@admin.com",
      ssn: "5151111115",
      phone: "98888687",
      Action: "",
    },
  ];

  return (
    <table className="min-w-full bg-white border">
      <thead>
        <tr>
          <th className="py-2 border">SL</th>
          <th className="py-2 border">Name</th>
          <th className="py-2 border">Candidate Id</th>
          <th className="py-2 border">Photograph</th>
          <th className="py-2 border">Email</th>
          <th className="py-2 border">SSN</th>
          <th className="py-2 border">Phone</th>
          <th className="py-2 border">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id} className="text-center">
            <td className="py-2 border bg-gray-100">{index + 1}</td>
            <td className="py-2 border bg-gray-100">{item.name}</td>
            <td className="py-2 border bg-gray-100">{item.candidateId}</td>
            <td className="py-2 border bg-gray-100">{item.Photograph}</td>
            <td className="py-2 border bg-gray-100">{item.email}</td>
            <td className="py-2 border bg-gray-100">{item.ssn}</td>
            <td className="py-2 border bg-gray-100">{item.phone}</td>
            <td className="py-2 border bg-gray-100">{item.Action}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BasicInformation;
