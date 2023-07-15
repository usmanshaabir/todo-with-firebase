import React from 'react'

export default function Footer() {

  const year=new Date().getFullYear()
  return (
    <>
      <footer className='bg-primary p-3'>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className='text-center mb-0'>&copy; ${year} All Right Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
