import React from "react";


const EventDetail = ({ event, onClose }) => {
    return (
      <div className="modal fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-10"> {/* Tailwind CSS classes */}
        <div className="modal-content bg-white p-4 rounded-lg shadow-md">
          <h2>Event Details</h2>
          <p>
            <b>Event Name:</b> {event.name || event.pin}
          </p>
          <p>
            <b>Start Time:</b> {event.startTime}
          </p>
          <p>
            <b>End Time:</b> {event.endTime}
          </p>
          <h3>Files</h3>
          <ul>
            {event.files &&
              event.files.map((file) => (
                <li key={file.url}>
                  <a href={file.url} target="_blank" rel="noopener noreferrer">
                    {file.name}
                  </a>
                </li>
              ))}
            {!event.files && <p>No files associated with this event.</p>}
          </ul>
          <h3>Attendees</h3>
          <ul>
            {event.attendees &&
              event.attendees.map((attendee) => (
                <li key={attendee.name}>{attendee.name}</li>
              ))}
            {!event.attendees && <p>No attendees listed for this event.</p>}
          </ul>
          <button onClick={onClose} className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700">Close</button>
        </div>
      </div>
    );
  };
  
  export default EventDetail;