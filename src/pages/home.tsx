import styled from "styled-components";
import AddToDo from "../components/add-todo";
import ToDoList from "../components/todo-list";

function HomePage() {
  return (
    <Wrapper>
      <header>
        <h1>To Do List</h1>
      </header>
      <main>
        <AddToDo />
        <ToDoList />
      </main>
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
