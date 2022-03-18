import Modal from "../Components/Modal";
import "../css/taskItem.css";

function TaskItem({ onClose, open, questName, userID }) {
  return (
    <Modal modalLable="Quête selectionnée" onClose={onClose} open={open}>
      <div className="taskItem">
        <h2>{questName}</h2>
        <p>{userID}</p>
      </div>
    </Modal>
  );
}

export default TaskItem;
