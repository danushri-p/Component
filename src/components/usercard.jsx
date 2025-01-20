// write the component code here
import React from "react";

function Usercard() {
  function getUserDetails() {
    return {
      profilePhoto: "https://m.media-amazon.com/images/I/81VxAGc1DBL.png",
      name: "Danushri Prakash",
      email: "danushri@gmail.com",
      phone: "9324567892",
      address: "Christ College, kannmanike, Bangalore",
    };
  }

  const user = getUserDetails();

  return (
    <div className="bg-white shadow-lg rounded-lg p-5 w-64 text-center border border-gray-300">
      <img
        src={user.profilePhoto}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-600 text-sm">📧 {user.email}</p>
      <p className="text-gray-600 text-sm">📞 {user.phone}</p>
      <p className="text-gray-600 text-sm">📍 {user.address}</p>
    </div>
  );
}

export default Usercard;
