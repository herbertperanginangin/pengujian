import DetailEVent from '@/components/organism/DetailEvent'
import Footer from '@/components/organism/footer'
import Navbar from '@/components/organism/Navbar'
import { getDetailEvent } from '@/services/event'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

export default function Detail() {
  const { query, isReady } = useRouter();
  const [dataItem,setDataItem ] = useState({
    nama_acara: '',
    tanggal_acara: '',
    harga: '',
    deskripsi: '',
    img_url: '',
    id: ''
  })

  const getEventDetailApi = useCallback(async (id: any) => {
    const data = await getDetailEvent(id)
    setDataItem(data)
  },[])
  
  useEffect(() => {
    if (isReady) {
      getEventDetailApi(query.id)
    }else{

    }
  },[isReady])
  return (
      <>
          
           <Navbar />
    <DetailEVent data={dataItem} />
 

    <Footer />
      </>
  )
}
