import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddMeeting = ({ onCloseAddMeeting, addMeetingToEpg }) => {
  const [showModal, setShowModal] = useState(true);

  const addObject = (e) => {
    e.preventDefault();

    const uuid = uuidv4();
    const newMeeting = {
      id: uuid,
      title: name,
      channelUuid: channelUuid,
      since: since,
      till: till,
    };
    addMeetingToEpg(newMeeting);
    onCloseAddMeeting();
  };

  const [name, setName] = useState("");
  const [channelUuid, setChannelUuid] = useState("");
  const [since, setSince] = useState("");
  const [till, setTill] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);
    onCloseAddMeeting();
  };

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white rounded-2xl p-6 relative w-5/6 sm:w-[600px]">
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 rounded-rt-2xl p-3 text-gray-600 hover:text-red-500"
            >
              X
            </button>

            <h2 className="text-lg text-[#ECAB22] font-mono font-bold mb-4">
              Add Meeting
            </h2>

            <form onSubmit={addObject}>
              <div className="mb-4">
                <label
                  htmlFor="schedule-for"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  Host
                </label>
                <select
                  id="schedule-for"
                  className="border border-[#07522A] text-[#ECAB22] rounded w-full py-2 px-3"
                >
                  <option value=""></option>
                  <option value="">Mobile App</option>
                  <option value="">Infography</option>
                  <option value="">Wireframes</option>
                  <option value="">Team Management</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="room"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  Room
                </label>
                <select
                  id="room"
                  value={channelUuid}
                  onChange={(e) => setChannelUuid(e.target.value)}
                  className="border border-[#07522A] text-[#ECAB22] rounded w-full py-2 px-3"
                >
                  <option value=""></option>
                  <option value="16fdfefe-e466-4090-bc1a-57c43937f826">
                    Mobile App
                  </option>
                  <option value="96aaf72c-b5ed-4ce4-937d-1912e4f8bf0d">
                    Designs
                  </option>
                  <option value="06d3366b-9ec2-46e8-a741-df3ee1abeed7">
                    Infography
                  </option>
                  <option value="b51689be-8eb4-4481-b208-6bbcb7fb47c2">
                    Wireframes
                  </option>
                  <option value="b51689be-8eb4-4481-b208-6bbcb7fb47c3">
                    Team Management
                  </option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  Meeting Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-[#07522A] rounded w-full py-2 px-3"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  Description
                </label>
                <input
                  id="description"
                  type="text"
                  className="border border-[#07522A] rounded w-full py-2 px-3"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="start"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  Start Time
                </label>
                <input
                  id="start"
                  type="datetime-local"
                  value={since}
                  onChange={(e) => setSince(e.target.value)}
                  className="border border-[#07522A] rounded w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="end"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  End Time
                </label>
                <input
                  id="end"
                  type="datetime-local"
                  value={till}
                  onChange={(e) => setTill(e.target.value)}
                  className="border border-[#07522A] rounded w-full py-2 px-3"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#07522A] hover:bg-[#71e1a5] text-[#ECAB22] font-bold py-2 px-4 rounded"
                >
                  + Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMeeting;
