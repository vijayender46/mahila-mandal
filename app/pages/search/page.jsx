'use client'

import React from 'react';
import { useSearchParams } from 'next/navigation';
import events from "../../constants/events";
import Image from 'next/image';

import demo from '../../../src/images/demo.png';

// Define the searchEvents function
function searchEvents() {
    // Convert the query to lowercase for case-insensitive search
    const searchParams = useSearchParams()
    const searchText = searchParams.get('q')
    const lowercaseQuery = searchText?.toLowerCase() || '';
    
  
    // Filter events based on matching eventTitle containing the search query
    const filteredEvents = events.data.filter((event) => {
      const eventTitle = event.eventTitle.toLowerCase();
  
      return eventTitle.includes(lowercaseQuery);
    });
  
    // return filteredEvents.map((event) => event.eventTitle);
    return filteredEvents;
  }
  
  export default function SearchResults() {
    const searchParams = useSearchParams()
    const searchText = searchParams.get('q')
    // Use the searchEvents function to filter event titles based on the search query
    const filteredEvents = searchEvents(searchText);
  
    return (
      <div className='container mx-auto py-12'>
        <h1>Search Results for: <i>{searchText}</i></h1>
        {filteredEvents.length === 0 ? (
          <div className='py-12 text-center'>
            <h3 className='my-8'>No results found</h3>
          </div>
        ) : (
          <ul>
            {filteredEvents.map((event) => (
              <li className='my-10' key={event.id}>
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
                          <Image decoding="async" src={demo} width={300} height={200} alt={event.description} />
                      </a>                                        
                      <div className="meta-decor">{event.date} {event.month}</div>                                    
                  </div>
                  <div className="content-wrap">
                      <div className="meta-wrap">
                          <span className="item">
                              <span className="icon ci ci-clock1"></span>{event.time}</span>
                              <span className="item">
                                  <span className="icon ci ci-map-marker-solid"></span>{event.place}</span>
                                  
                      </div>                                        
                      <h3 className="headline-2"> 
                              {event.eventTitle}
                      </h3>                                        
                      <div className="desc">{event.description}</div>                                    
                      
                  </div>
              </div>
          </li>
            ))}
          </ul>
        )}
      </div>
    );
  }