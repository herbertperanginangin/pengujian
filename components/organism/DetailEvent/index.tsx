import { setCheckout } from '@/services/checkout';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import { JWTPayloadTypes, UserTypes } from '@/services/models';
import Image from 'next/image';

interface DetailEventProps {
    data: {
        nama_acara: string;
        tanggal_acara: string;
        harga: string;
        deskripsi: string;
        img_url: string
        id: string
    }
}


export default function DetailEvent(props: DetailEventProps) {
    const { data } = props;
    const API_IMG = process.env.NEXT_PUBLIC_IMG;
    const router = useRouter();
  
    const [user, setUser] = useState({
        id: 0,
    });
    
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload = payload;
      setUser(userFromPayload);
    }
  }, []);
    
    
    const payloads = {
      user_id: user.id,
      acara_id: parseInt(data.id),
      total: parseInt(data.harga),
    };

    if (!data) {
        return <div>Loading...</div>;
    }

    const onSubmit = async () => {
        const response = await setCheckout(payloads);
        if (response.error) {
            toast.error(response.message);
        } else {
            router.push('/complete-checkout');
            toast.success('Checkout Berhasil');
        }
    };
    
    return (
        <>
            <section className="detail pt-lg-60 pb-50">
                <div className="container-xxl container-fluid">
                    <div className="detail-header pb-50">
                        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Acara</h2>
                        <p className="text-lg color-palette-1 mb-0">yuk ikuti acara ini!</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                            <div className="row align-items-center">
                                <div className="col-md-12 col-4">
                                   
                                    <Image src={`${API_IMG}/${data.img_url}`} width="280" height="380" className="img-fluid" alt=""/>
                                </div>
                                <div className="col-md-12 col-8 d-md-none d-block">
                                    <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">{data.nama_acara}</h2>z
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                            <div className="pb-50 d-md-block d-none">
                                <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">{data.nama_acara}</h2>
                                <p className="mb-0 text-danger font-weight-bold"><NumericFormat
                                    value={data.harga}
                                    
                                    thousandSeparator=","
                                    
                                    displayType="text"
                                    prefix="Rp."
                                    
                                />
                                </p>
                                
                                <p className="mb-0  font-weight-bold">DATE : {data.tanggal_acara}
                                </p>

                                <p>Lakukan pembayaran transfer ke:</p>
                                <p>BANK BRI </p>
                                <p>Atas Nama : Herbert </p>
                                <p>32762876382873</p>
                            </div>
                            <hr />
                            <p className="text-lg color-palette-2 mb-0 text-justify">Deskripsi: {data.deskripsi}</p>
                            <br />
                            <button
                            type="button"
                            className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
                            onClick={onSubmit}
                            >
                            Continue
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
