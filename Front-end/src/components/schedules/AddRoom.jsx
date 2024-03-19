import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const AddRoom = ({ onCloseAddRoom }) => {
  const showModal = true;
  const [room, setRoom] = useState('');
  const [capacity,setCapacity] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    fetch("http://192.168.0.103:8000/api/event/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRoom(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://192.168.0.103:8000/api/event/add_room/",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ room, capacity }),
        }
      );

      if (response.ok) {
        navigate("/MysideBar");
      } else {
        const data = await response.json();
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="relative w-full max-w-md mx-4 bg-white rounded-lg p-6">
            <button
              onClick={onCloseAddRoom}
              className="absolute top-0 right-0 rounded-full p-2 text-[#ECAB22] hover:text-red-500"
            >
              X
            </button>
            <h2 className="text-lg text-[#ECAB22] font-bold mb-4">
              Add Room
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="room"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  Room Name
                </label>
                <select
                  id="room"
                  type="text"
                  className="border border-[#07522A] rounded w-full py-2 px-3"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                >
                  <option></option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="capacity"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  Capacity
                </label>
                <input
                  id="capacity"
                  type="number"
                  className="border border-[#07522A] rounded w-full py-2 px-3"
                  onChange={(e) => setCapacity(e.target.value)}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#07522A] hover:bg-[#71e1a5] text-[#ECAB22] font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddRoom;