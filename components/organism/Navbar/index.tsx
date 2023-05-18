import React from 'react'
import Image from 'next/image'
import Auth from './auth'
import Link from 'next/link'

export default function Navbar() {
  return (
      <>
        <section>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
                  <div className="container-fluid">
                      <Link href="/">
                       
                          <Image src="/icon/logo.svg" width={60} height={60} alt={''} />
                         
                      </Link>
                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                        
                            <Auth/>
                          
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
      </>
  )
}
