import React from "react";
import { Task } from "@components";
import "./styles.scss";

const tasks = [
  {
    id: "6afaf2b5-a6f1-43ee-9de1-7d79496f279c",
    description: "Planificar Q",
    isDone: true,
  },
  {
    id: "171e1813-80fa-431f-9006-215b7135d749",
    description: "Actualizar caché",
    isDone: false,
  },
];

export const Board = () => {
  return (
    <section>
      {tasks.map(({ description, isDone }) => {
        return (
          <Task
            description={description}
            isDone={isDone}
            onCancel={() => console.log("Cancel")}
            onOk={(value) => console.log("Ok", { value })}
            doTask={() => console.log("Do Task")}
            restoreTask={() => console.log("Do Task")}
          />
        );
      })}
    </section>
  );
};
