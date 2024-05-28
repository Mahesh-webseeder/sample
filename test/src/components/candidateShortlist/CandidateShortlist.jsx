import React, { useState, useEffect } from "react";
import Header from "../Header";

const initialData = [
  {
    id: 1,
    name: "Deepak",
    candidateId: "17156636854885S",
    Jobposition: "jabalpur",
    SortlistedDate: "23-05-2024",
    interviewDate: "1-06-2024",
  },
  {
    id: 2,
    name: "Deepak",
    candidateId: "17156636854885S",
    Jobposition: "jabalpur",
    SortlistedDate: "23-05-2024",
    interviewDate: "1-06-2024",
  },
];

const CandidateShortlist = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isManageMode, setIsManageMode] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    setData(initialData);
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.candidateId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.Jobposition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      setData(data.filter((item) => item.id !== id));
    }
  };

  const handleEdit = (candidate) => {
    setSelectedCandidate(candidate);
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const updatedData = data.map((item) =>
      item.id === selectedCandidate.id ? selectedCandidate : item
    );
    setData(updatedData);
    setIsEditModalOpen(false);
  };

  return (
    <>
      <Header name="Create" />
      <div
        className={`p-6 px-10 bg-gray-100 min-h-screen ${
          isModalOpen || isEditModalOpen ? "blur-sm" : ""
        }`}
      >
        <div className="flex justify-end">
          <div className="space-x-1 mb-5">
            {!isManageMode && (
              <button
                className="px-3 py-2 border rounded bg-blue-500 text-white md:inline-block"
                onClick={() => setIsModalOpen(true)}
              >
                Add Shortlist
              </button>
            )}
            <button
              className="px-3 py-2 border rounded bg-blue-500 text-white md:inline-block"
              onClick={() => setIsManageMode(!isManageMode)}
            >
              {isManageMode ? "Done" : "Manage Shortlist"}
            </button>
          </div>
        </div>
        <div className="px-6 pb-6 bg-white overflow-x-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 p-6">
            <label className="font-semibold mb-2 md:mb-0">
              Show
              <select
                className="ml-2 border p-1"
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              entries
            </label>
            <ul className="flex space-x-2 mt-2 md:mt-0">
              <li className="p-1 border cursor-pointer">Copy</li>
              <li className="p-1 border cursor-pointer">CSV</li>
              <li className="p-1 border cursor-pointer">Excel</li>
              <li className="p-1 border cursor-pointer">PDF</li>
              <li className="p-1 border cursor-pointer">Print</li>
            </ul>
            <div className="mt-2 md:mt-0">
              <label className="font-semibold">Search: </label>
              <input
                type="text"
                placeholder="Search"
                className="border rounded p-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 font-semibold border">SL</th>
                  <th className="py-2 border font-semibold">Name</th>
                  <th className="py-2 border font-semibold">Candidate Id</th>
                  <th className="py-2 border font-semibold">Job Position</th>
                  <th className="py-2 border font-semibold">ShortList Date</th>
                  <th className="py-2 border font-semibold">Interview Date</th>
                  {isManageMode && (
                    <th className="py-2 border font-semibold">Actions</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {currentEntries.map((item, index) => (
                  <tr key={item.id} className="text-center">
                    <td className="py-2 border bg-gray-100">
                      {indexOfFirstEntry + index + 1}
                    </td>
                    <td className="py-2 border bg-gray-100">{item.name}</td>
                    <td className="py-2 border bg-gray-100">
                      {item.candidateId}
                    </td>
                    <td className="py-2 border bg-gray-100">
                      {item.Jobposition}
                    </td>
                    <td className="py-2 border bg-gray-100">
                      {item.SortlistedDate}
                    </td>
                    <td className="py-2 border bg-gray-100">
                      {item.interviewDate}
                    </td>
                    {isManageMode && (
                      <td className="py-2 border bg-gray-100">
                        <button
                          className="px-2 py-1 text-green-600"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="px-2 py-1 text-red-600"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-end items-center space-x-3 ">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded"
            >
              Previous
            </button>
            <div className="space-x-2 mx-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-2 py-1 border rounded  ${
                    currentPage === index + 1 ? " bg-blue-500 text-white" : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-2/5">
            <h2 className="text-xl font-bold mb-4">Add Shortlist</h2>
            <form>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Name</label>
                <input type="text" className="border p-2 rounded w-full" />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Candidate ID</label>
                <input type="text" className="border p-2 rounded w-full" />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Job Position</label>
                <input type="text" className="border p-2 rounded w-full" />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">
                  ShortList Date
                </label>
                <input type="date" className="border p-2 rounded w-full" />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">
                  Interview Date
                </label>
                <input type="date" className="border p-2 rounded w-full" />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-2/5">
            <h2 className="text-xl font-bold mb-4">Edit Shortlist</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Name</label>
                <input
                  type="text"
                  className="border p-2 rounded w-full"
                  value={selectedCandidate.name}
                  onChange={(e) =>
                    setSelectedCandidate({
                      ...selectedCandidate,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Candidate ID</label>
                <input
                  type="text"
                  className="border p-2 rounded w-full"
                  value={selectedCandidate.candidateId}
                  onChange={(e) =>
                    setSelectedCandidate({
                      ...selectedCandidate,
                      candidateId: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Job Position</label>
                <input
                  type="text"
                  className="border p-2 rounded w-full"
                  value={selectedCandidate.Jobposition}
                  onChange={(e) =>
                    setSelectedCandidate({
                      ...selectedCandidate,
                      Jobposition: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">
                  ShortList Date
                </label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={selectedCandidate.SortlistedDate}
                  onChange={(e) =>
                    setSelectedCandidate({
                      ...selectedCandidate,
                      SortlistedDate: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">
                  Interview Date
                </label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={selectedCandidate.interviewDate}
                  onChange={(e) =>
                    setSelectedCandidate({
                      ...selectedCandidate,
                      interviewDate: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CandidateShortlist;
