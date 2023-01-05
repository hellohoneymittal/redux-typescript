import React from "react";
import { useAppDispatch, useAppSelector } from "./Selectors/hooks";
import { RootState } from "./Selectors/store";
import { increment, decrement } from "./Selectors/todoSlice";

export const Counter: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state: RootState) => state.todos);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      {todos.count}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};
