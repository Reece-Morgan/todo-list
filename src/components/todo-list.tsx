import styled from "styled-components";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/to-dos/to-dos";

function ToDoList() {
  const dispatch = useDispatch();
  const { todos } = useAppSelector((state) => state.ToDos);

  const markAsCompleted = (todo: string) => {
    dispatch(removeTodo(todo));
  };

  return (
    <Wrapper>
      <Title>Your ToDo List</Title>
      {todos.length === 0 ? (
        <NoToDos>
          <p>Your To Do List is currently empty</p>
          <p>Add a new ToDo above</p>
        </NoToDos>
      ) : (
        <ToDos>
          <List>
            {todos.map((todo, i) => (
              <ListItem key={i}>
                <ToDoItem>{todo}</ToDoItem>
                <Button onClick={() => markAsCompleted(todo)}>
                  Mark as Completed
                </Button>
              </ListItem>
            ))}
          </List>
        </ToDos>
      )}
    </Wrapper>
  );
}

export default ToDoList;

const Wrapper = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`;

const NoToDos = styled.section``;

const ToDos = styled.section``;

const Title = styled.h2`
  color: #fd1d1d;
`;

const List = styled.ul``;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 10px 0;
`;

const ToDoItem = styled.p`
  margin: 0px;
`;

const Button = styled.button`
  height: 20px;
  margin: 0 20px;
  min-width: 140px;
  cursor: pointer;border: 0;
  background: linear-gradient(90deg, #fd1d1d, #a23fe3);
  color: #fff;
  cursor: pointer;
  &:hover {
    background: linear-gradient(90deg, #f43232, #b15aeb);
  }
`;
