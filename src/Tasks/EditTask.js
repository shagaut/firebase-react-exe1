import Modal from "../Components/Modal";
import { useState } from "react";
import "../css/editTask.css";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

function EditTask({ open, onClose, toEditTitle, toEditDescription, id }) {
  const [title, setTitle] = useState(toEditTitle);
  const [description, setDescription] = useState(toEditDescription);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // À faire
      // update seulement les membres title et description
      // Utiliser les states *title* et *description*
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
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          value={title}
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button type="submit">Edit</button>
      </form>
    </Modal>
  );
}

export default EditTask;
