import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/to-dos/to-dos";

interface FormProps {
  todo: string;
}

function AddTodo() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<FormProps>();

  const onSubmit = handleSubmit(async (data: FormProps) => {
    if (!data.todo) return;

    dispatch(addTodo(data.todo));
    reset();
  });

  return (
    <Wrapper>
      <Title>Add ToDo Item</Title>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          id="todo"
          placeholder="Enter your next To Do item"
          {...register("todo")}
        />
        <Button>Add ToDo</Button>
      </Form>
    </Wrapper>
  );
}

export default AddTodo;

const Wrapper = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #fd1d1d;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0;
  border: 0;
  background-color: #d3d3d3;
  color: #000;
  font-size: 24px;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 0.5rem;
  border: 0;
  background: linear-gradient(90deg, #fd1d1d, #a23fe3);
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(90deg, #f43232, #b15aeb);
  }
`;
