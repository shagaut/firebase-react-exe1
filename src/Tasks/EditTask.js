import Modal from "../Components/Modal";
import { useState } from "react";
import "../css/editTask.css";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

function EditTask({ open, onClose, toEditTitle, toEditDescription, id }) {
  const [questName, setQuestName] = useState(toEditTitle);
  const [userID, setUserID] = useState(toEditDescription);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const taskRef = doc(db, "tasks", id);
      await updateDoc(taskRef, {
        title: questName,
        description: userID,
      });
      onClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Modal modalLable="Edit Task" onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className="editTask">
        <input
          type="text"
          name="title"
          onChange={(e) => setQuestName(e.target.value.toUpperCase())}
          value={questName}
        />
        <textarea
          onChange={(e) => setUserID(e.target.value)}
          value={userID}
        ></textarea>
        <button type="submit">Edit</button>
      </form>
    </Modal>
  );
}

export default EditTask;
