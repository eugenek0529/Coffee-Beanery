import { useState } from 'react'
import eventData from '../data/events.json'

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(eventData?.events?.[0] || {
    id: 0,
    name: "Loading...",
    date: "",
    time: "",
    description: "Event details are loading..."
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl text-coffee-text text-center mb-16 font-adobe">
        July Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {eventData.events.map((event) => (
            <button
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className={`w-full text-left p-4 rounded-lg transition-all
                ${selectedEvent.id === event.id 
                  ? 'bg-coffee-text text-white' 
                  : 'bg-white hover:bg-gray-50'
                }`}
            >
              <div className="font-semibold text-lg">{event.name}</div>
              <div className={`text-sm ${
                selectedEvent.id === event.id 
                  ? 'text-white/80' 
                  : 'text-gray-500'
              }`}>
                {event.date}
              </div>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="h-[300px] rounded-lg mb-4 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-lg">Event Image</span>
          </div>
          
          <h3 className="text-2xl font-bold text-coffee-text mb-2">
            {selectedEvent.name}
          </h3>
          
          <div className="text-gray-500 mb-4">
            <div>{selectedEvent.date}</div>
            <div>{selectedEvent.time}</div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            {selectedEvent.description}
          </p>
          
          <button className="mt-6 bg-coffee-text text-white px-6 py-2 rounded-md 
            hover:opacity-90 transition-opacity">
            Register Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Events