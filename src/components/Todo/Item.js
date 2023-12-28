import React from "react";
import style from './Item.module.css'

const Item = ({ todo, index, doneTodo }) => {
  return (
    <section className={style.item}>
      <div className={style.container}>
        <div className={style.wrap}>
          <div className={style.box}>
            <h2>
                <span>{`${index + 1}`}</span>
                {todo.name}
            </h2>

            <p className={style.p}>{todo.status === 'new'
                ? 'Todo is not done'
                : todo.status === 'processing'
                    ? 'Todo is Processing'
                    : 'Completed!!!'
            }</p>

            <button className={style.done} onClick={() => doneTodo(todo.id)} >Done</button>
            <button className={style.edit} >Edit</button>
            <button className={style.delete}>Delete</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
