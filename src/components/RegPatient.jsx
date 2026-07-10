import React from 'react'
import Navbar from './Navbar'

const RegPatient = () => {
  return (
    <div>
        <Navbar/>
      <div className="container bg-secondary p-5 mt-3 rounded">
        <div className="row">
          <div className="col-12">

            <div className="row g-3">

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Patient ID</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Age</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Gender</label>
                <select className="form-select">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Blood Group</label>
                <select className="form-select">
                  <option>Select Blood Group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Mobile Number</label>
                <input type="tel" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Disease / Health Complaint</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Doctor Assigned</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Admission Date</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Room Number</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12">
                <label className="form-label">Address</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>

              <div className="col-12 text-center mt-3">
                <button className="btn btn-success px-5">
                  Register Patient
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default RegPatient