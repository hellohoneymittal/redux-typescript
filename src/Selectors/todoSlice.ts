import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
//import { readTodos as fetchTodos } from '../api/jsonstore';
import { AppThunk } from './store';

export interface Todo {
    count: number;
    id?: string,
    completed?: boolean
    text?: string, 
}

const initialState: Todo = {
    count: 0,  
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        increment(state) {
            state.count += 1;
          },
          decrement(state) {
            state.count -= 1;
          },
          clear(state) {
            state.count = 0;
          },
    }
});


export const {increment, decrement, clear} = todoSlice.actions;
export default todoSlice.reducer;



