import { setSignUp } from '@/services/auth';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function SignUpForm() {
    const [nama, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     const router = useRouter();
    
    const onSubmit = async () => {
        const userForm = {
            email,
            password,
            nama,
        }
        
         const result = await setSignUp(userForm);
            if (result.error) {
                 toast.error(result.message);
            } else {
                toast.success('Register Berhasil');
                router.push('/sign-in');
            }
    }
    return (
        <>
              <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
                <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
                <div className="pt-50">
                 <label  className="form-label text-lg fw-medium color-palette-1 mb-10">Full Name
                        </label>
                <input type="text" className="form-control rounded-pill text-lg"
                    value={nama}
                    onChange={(event)=>setName(event.target.value)}
                        aria-describedby="name" placeholder="Enter your name"/>
                </div>
                <div className="pt-30">
                    <label  className="form-label text-lg fw-medium color-palette-1 mb-10">Email
                        Address</label>
                <input type="email" className="form-control rounded-pill text-lg"
                    value={email}
                     onChange={(event)=>setEmail(event.target.value)}
                        aria-describedby="email" placeholder="Enter your email address"/>
                </div>
                <div className="pt-30">
                    <label className="form-label text-lg fw-medium color-palette-1 mb-10">Password</label>
                <input type="password" className="form-control rounded-pill text-lg" 
                    value={password}
                     onChange={(event)=>setPassword(event.target.value)}
                        aria-describedby="password" placeholder="Your password"/>
                </div>
                <div className="button-group d-flex flex-column mx-auto pt-50">
                     <button
                    type="button"
                    className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
                    onClick={onSubmit}
                    >
                    Register
                    </button>
                    {/* <a className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill" href="/sign-in"
                        role="button">Sign
                        In</a> */}
                </div>
        </>
  )
}
