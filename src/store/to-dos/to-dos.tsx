import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Todos = {
  todos: string[];
};

const initialState: Todos = {
  todos: [],
};

const TodosSlices = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(
        (postcode: string) => postcode !== action.payload
      );
    },
  },
});

const { actions, reducer } = TodosSlices;
export const { addTodo, removeTodo } = actions;
export const ToDosReducer = reducer;
