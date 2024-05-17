import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Admin = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Welcome to Admin Panel</h2>
      <hr />
      <div className="d-flex flex-column justify-content-center gap-3 text-center align-items-center font-weight-bold">
        <Link to={"/existing-rooms"} className="btn btn-primary w-25">
          Manage Rooms
        </Link>
        <Link to={"/existing-bookings"} className="btn btn-primary w-25">
          Manage Bookings
        </Link>
      </div>
    </div>
  );
};

export default Admin;
