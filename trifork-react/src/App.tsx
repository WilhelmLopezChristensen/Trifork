import React from 'react';
import './App.css';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { CreatePost, DeletePost, GetPost } from './domain/utils';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [postTable, setPostTable] = React.useState([]);

  React.useEffect(() => {
    getPostTable();
  }, [postTable]);
  

  const getPostTable = async () => {
    setPostTable(await GetPost());
  };

  const onSubmit = async (data: any) => {
    await CreatePost(data);
    reset();
  };

  const onDelete = async (id: any) => {
    await DeletePost(id);
  };

  return (
    <div style={{textAlign:"center"}}>
      <h1>Inventory system</h1>
      <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledManagerViewContent>
              <StyledInput type="text" placeholder="Category" {...register("category", {required: true})} />
              {errors.category && errors.category.type === "required" && (<span>This is required</span>)}              
              <StyledInput type="text" placeholder="Brand" {...register("brand", {required: true})}/>
              {errors.brand && errors.brand.type === "required" && (<span>This is required</span>)}
              <StyledInput type="number" placeholder="Barcode"  {...register("barcode", {required: true})}/>
              {errors.barcode && errors.barcode.type === "required" && (<span>This is required</span>)}
              <StyledButton type={"submit"}>Add Product</StyledButton>
        </StyledManagerViewContent>
      </form>
      <StyledTable>
        <tr>
          <th>Category</th>
          <th>Brand</th>
          <th>Barcode</th>
          <th></th>
        </tr>
        {postTable && postTable.map((post: any) => (
          <tr>
            <td>{post.category}</td>
            <td>{post.brand}</td>
            <td>{post.barcode}</td>
            <td><button onClick={() => onDelete(post.postId)}>Delete</button></td>
          </tr>
          ))}
      </StyledTable>
      </div>
    </div>
  );
}

const StyledManagerViewContent = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin: 20px;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 300px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  th {
    background-color: #4c4e52;
    color: #ffffff;
    text-align: center;
    padding: 12px 15px;
  }
  td {
    padding: 12px 15px;
  }
  tr {
    border-bottom: 1px solid #dddddd;
    text-align: center;
  }
`;

const StyledInput = styled.input`
  padding: 7px;
  font-size: 14px;
  margin-bottom: 10px;
  width: 320px;
  border-radius: 4px;
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: gray;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;

  &:hover {
    background-color: darkgray;
  }
`;