import { useState } from "react";

export default function DayOutRequest() {
  const [status, setStatus] = useState(null); // APPROVED | DENIED | null
  const [showMessage, setShowMessage] = useState(false);

  const handleAction = (value) => {
    setStatus(value);
    setShowMessage(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-700 px-4 py-4 mt-1    ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div style={{ backgroundColor: '#e8eaed' }} className="px-8 py-20 rounded">
          <h1 className="text-4xl font-semibold text-gray-800">
            Sanskriti University- Mathura
          </h1>
          <p className="text-3xl font-semibold text-gray-800 mt-2">
            Day out request consent
          </p>
        </div>  

        <p className="mt-8 text-base text-gray-700">
          Kindly approve or deny the hostel Day out request
        </p>

      

        {/* Details */}
        <div className="mt-5 border-t border-gray-300">
          {[
            ["Name", "Apurvi Gupta"],
            ["Residence", "yamuna GIRLS HOSTEL / 319"],
            ["Day out request for", "Medical"],
            ["Requested at", "2025-11-23 11:24:41"],
            ["Dates", "2025-11-23"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-2 sm:grid-cols-3 py-3 border-b border-gray-300"
            >
              <span className="text-gray-700 text-base">{label}</span>
              <span className="text-gray-900 text-base">{value}</span>
            </div>
          ))}

          {/* Action */}
          <div className="grid grid-cols-2 sm:grid-cols-3 py-5">
            <span className="text-gray-700 text-base">Action</span>
            {!status ? (
              <div className="flex gap-5">
                <button
                  onClick={() => handleAction("APPROVED")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition text-sm"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleAction("DENIED")}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-md transition text-sm"
                >
                  Deny
                </button>
              </div>
            ) : (
              <span className="text-gray-900 text-base">
                Day out request has already been {status}
              </span>
            )}
          </div>
        </div>

          {/* Success Message */}
        {showMessage && (
          <div className="mt-6 flex justify-between items-start bg-green-100 border border-green-300 text-green-800 px-5 py-4 rounded-lg">
            <p>
              <span className="font-semibold">Success!</span>{" "}
              Day out request is {status}.
            </p>
            <button
              onClick={() => setShowMessage(false)}
              className="text-xl font-bold leading-none"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
}