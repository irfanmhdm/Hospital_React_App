import React from 'react'

const RegPatient = () => {
  return (
    <div>

         <div className="container bg-secondary p-5 mt-3 rounded">
        <div className="row">
          <div className="col-12">

            <div className="row g-3">

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Admission Number</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Date of Birth</label>
                <input type="date" className="form-control" />
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
                <label className="form-label">Class / Grade</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Section</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Parent / Guardian Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Contact Number</label>
                <input type="tel" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" />
              </div>

              <div className="col-12">
                <label className="form-label">Address</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>

              <div className="col-12 text-center mt-3">
                <button className="btn btn-success px-5">
                  Submit
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