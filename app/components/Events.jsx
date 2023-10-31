import React from 'react'
import events from "../constants/events";
import Image from 'next/image';

import demo from '../../src/images/demo.png';


export default function Events({limit}) {
    const limitedEvents = events.data.slice(0, limit);
  return (
    <ul>
        {limitedEvents.map((item) => (
            <li className='my-10' key={item.id}>
                <div className="mm-event-list">
                    <div className="image-wrap">                    
                        <a className="thumb" href="#"
                        style={{
                            backgroundImage: `url(${demo.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        aria-label="Play for the world with us">
                            <Image decoding="async" src={demo} width={300} height={200} alt={item.description} />
                        </a>                                        
                        <div className="meta-decor">{item.date} {item.month}</div>                                    
                    </div>
                    <div className="content-wrap">
                        <div className="meta-wrap">
                            <span className="item">
                                <span className="icon ci ci-clock1"></span>{item.time}</span>
                                <span className="item">
                                    <span className="icon ci ci-map-marker-solid"></span>{item.place}</span>
                                    
                        </div>                                        
                        <h3 className="headline-2"> 
                                {item.eventTitle}
                        </h3>                                        
                        <div className="desc">{item.description}</div>                                    
                        
                    </div>
                </div>
            </li>
        ))}
    </ul>
  )
}
