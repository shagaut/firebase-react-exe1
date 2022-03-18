import Modal from "../Components/Modal";
import { useState } from "react";
import "../css/addTask.css";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

function AddTask({ onClose, open }) {
  const [questName, setQuestName] = useState("");
  const [userID, setUserID] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "adventure"), {
        questName: questName,
        userID: userID,
        completed: false,
      });
      // objet sous cette forme:
      // {
      //   title: title,
      //   description: description,
      //   completed: false,
      //   created: Timestamp.now(),
      // }
      onClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Modal modalLable="Add Quest" onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className="addTask" name="addTask">
        <input
          type="text"
          name="title"
          onChange={(e) => setQuestName(e.target.value)}
          value={questName}
          placeholder="Enter Quest Name"
        />
        <input
          type="text"
          onChange={(e) => setUserID(e.target.value)}
          placeholder="Enter User ID"
          value={userID}
        ></input>
        <button type="submit">Done</button>
      </form>
    </Modal>
  );
}

export default AddTask;
