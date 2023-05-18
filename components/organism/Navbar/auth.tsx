import { JWTPayloadTypes } from '@/services/models';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import Link from 'next/link';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    nama: '',
  });
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload = payload;
      setIsLogin(true);
      setUser(userFromPayload);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/sign-in');
    setIsLogin(false);
  };

  if (isLogin) {
    return (
        <li onClick={onLogout} className="dropdown-item text-lg color-palette-2">{user.nama} { '>>'}</li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in"  className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button">
        
          Sign In
       
      </Link>
    </li>

  );
}
