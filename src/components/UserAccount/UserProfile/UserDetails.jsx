import React from 'react'

export default function UserCard({onEdit}) {
  return (
    <div className="card-body" id="userCardBody">
    <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">Full Name</h6>
      </div>
      <div className="col-sm-9 text-secondary">John Doe</div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">Email</h6>
      </div>
      <div className="col-sm-9 text-secondary">JohnDoe@mail.com</div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">Phone</h6>
      </div>
      <div className="col-sm-9 text-secondary">(239) 816-9029</div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">BirthDay</h6>
      </div>
      <div className="col-sm-9 text-secondary">01-01-2001</div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">Address</h6>
      </div>
      <div className="col-sm-9 text-secondary">
        Bay Area, San Francisco, CA
      </div>
    </div>
    <hr />
        <button id="editbtn" onClick={onEdit}>Edit</button>
  </div>
  )
}
