import React from "react";
import { useAppDispatch, useAppSelector } from "./Selectors/hooks";
import { RootState } from "./Selectors/store";
import { increment, decrement } from "./Selectors/todoSlice";
import {
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useUsersQuery,
} from "./Services/usersApi";

export const Counter: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state: RootState) => state.todoSlice);
  const { data, error, isLoading, isFetching, isSuccess } = useUsersQuery();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      {todos.count}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      With APi
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {isSuccess && (
        <div className="data">
          {data?.map((user) => (
            <li key={user.id}>
              {user.id} - {user.userId} - {user.title}
            </li>
          ))}
        </div>
      )}
      <AddCounter />
    </div>
  );
};

export const AddCounter = () => {
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const user = {
    title: "check it now with add ",
    body: "value willbe on urgent basis added",
    id: 4,
    userId: 4,
  };
  const userUpdate = {
    title: "check it now with update",
    body: "value willbe on urgent basis updated",
    id: 4,
    userId: 4,
  };
  const addHandler = async () => {
    await addUser(user);
  };
  const updateHandler = async () => {
    await updateUser(userUpdate);
  };
  const deleteHandler = async () => {
    await deleteUser(user.id);
  };
  return (
    <>
      <button onClick={addHandler}> Add Users</button>
      <button onClick={updateHandler}>Update Users</button>
      <button onClick={deleteHandler}>Delete Users</button>
    </>
  );
};
