import React from 'react'

export default function UserInfo() {
  return (
    <div className="card">
              <div className="card-body" id="userImageCard">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                  />
                  <div className="mt-3">
                    <h4>John Doe</h4>
                    <p className="text-secondary mb-1">JohnDoe@mail.com</p>
                    <p className="text-muted font-size-sm">Company</p>
                  </div>
                </div>
              </div>
            </div>
  )
}
