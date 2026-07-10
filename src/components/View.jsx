import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const ViewCars = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/hospital-data.json"
      )
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <div className="row">
          {data.map((value, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow">

                <div className="card-body">
                  <h5 className="card-title text-center mb-3">
                    {value.name}
                  </h5>

                  <p><strong>Patient ID:</strong> {value.patientId}</p>
                  <p><strong>Age:</strong> {value.age}</p>
                  <p><strong>Gender:</strong> {value.gender}</p>
                  <p><strong>Blood Group:</strong> {value.bloodGroup}</p>
                  <p><strong>Doctor:</strong> {value.doctor}</p>
                  <p><strong>Room No:</strong> {value.roomNo}</p>
                  <p><strong>Admission Date:</strong> {value.admissionDate}</p>
                  <p><strong>Mobile:</strong> {value.mobile}</p>

                  <div className="text-center mt-3">
                    <button className="btn btn-primary">
                      View Details
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewCars;