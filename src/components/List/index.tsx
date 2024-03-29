import React, { useState } from "react";
import style from "./List.module.scss";
import Item from "./Item";

export default function List() {
  const [tasks, setTasks] = useState([
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "Javascript",
      time: "01:00:00",
    },
    {
      task: "Typescript",
      time: "01:00:00",
    },
  ]);
  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          console.log("clicado");
          setTasks([...tasks, { task: "Estudo 1", time: "01:00:00" }]);
        }}
      >
        Studies of the day
      </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </ul>
    </aside>
  );
}
