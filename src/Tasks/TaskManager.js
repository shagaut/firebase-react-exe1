import "../css/taskManager.css";
import Task from "./Task";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import AddTask from "./AddTask";

function TaskManager() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [quest, setQuest] = useState([]);

  useEffect(() => {
    const taskColRef = query(collection(db, "adventure"));
    onSnapshot(taskColRef, (snapshot) => {
      const listeQuest = [];
      snapshot.docs.map((doc) => {
        listeQuest.push(doc);
      });
      setQuest(listeQuest);
    });
  }, []);

  return (
    <div className="taskManager">
      <header>Quest Manager</header>

      <div className="taskManager__container">
        <button>Enregistrer/Connexion</button>
        <button onClick={() => setOpenAddModal(true)}>Add Quest +</button>
        <div className="taskManager__tasks">
          {quest.map((quest) => (
            <Task
              id={quest.id}
              key={quest.id}
              completed={quest.data().completed}
              questName={quest.data().questName}
              userID={quest.data().userID}
            />
          ))}
        </div>
      </div>

      {openAddModal && (
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
    </div>
  );
}

export default TaskManager;
