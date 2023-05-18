import React, { useCallback, useEffect, useState } from 'react'
import EventItem from '@/components/moleculs/eventItem'
import { getEventList } from '@/services/event';
import { EventModel } from '@/services/models';
import axios from 'axios';


export default function Event() {
    const [eventList, setEventList] = useState([]);

    const getListEvent = useCallback(async() => {
        const data = await getEventList();
        setEventList(data);
    }, [])
    const API_IMG = process.env.NEXT_PUBLIC_IMG;
    
    useEffect(() => {
        getListEvent();
    },[])
  return (
      <>
            <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Kegiatan Kami<br/>
            </h2>
            <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                data-aos="fade-up">
              
                      {eventList.map((item: EventModel) => (
                         
                           <EventItem key={item.id} title={item.nama_acara} img_url={`${API_IMG}/${item.img_url}`} id={item.id} />
                      ))}
                      
                    
                       {/* console.log(axios.defaults.baseURL + item.img_url) */}
              
            </div>
        </div>
    </section>

      </>
  )
}
