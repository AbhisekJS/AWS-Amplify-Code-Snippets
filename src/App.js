import "./App.css";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listRecipes } from "./graphql/queries";
import { createRecipe, deleteRecipe, updateRecipe } from "./graphql/mutations";
import { Button, Col, Input, List, Row, Typography } from "antd";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState("");
  const [edit, setEdit] = useState(false);
  const [idValue, setIdValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { listRecipes: recipeItems },
      } = await API.graphql({ query: listRecipes });
      setRecipes(recipeItems?.items);
    };
    fetchData();
  }, []);

  console.log(recipes);

  const createNewRecipe = async () => {
    // const name = prompt("What is the name of the recipe?");
    const { data } = await API.graphql({
      query: createRecipe,
      variables: { input: { name } },
    });
    setRecipes([...recipes, data.createRecipe]);
    setName("");
  };

  const deleteRecipeItem = async (vlaue) => {
    await API.graphql({
      query: deleteRecipe,
      variables: { input: { id: vlaue } },
    });
    setRecipes([...recipes.filter((recipe) => recipe.id !== vlaue)]);
  };

  const updateRecipeItem = async () => {
    await API.graphql({
      query: updateRecipe,
      variables: { input: { id: idValue, name } },
    });
    setEdit(false);
    setIdValue("");
    setName("");
  };

  const editItem = (id) => {
    setName(recipes.find((recipe) => recipe.id === id)?.name);
    setIdValue(id);
    setEdit(true);
  };

  return (
    <div style={{marginTop:'1rem'}}>
      <Row>
        <Col span={12} offset={6}>
          <Input.Group compact>
            <Input
              placeholder="What is the name of the recipe?"
              style={{ width: "calc(100% - 80px)" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button
              type="primary"
              onClick={edit ? updateRecipeItem : createNewRecipe}
            >
              {edit ? "Edit" : "Submit"}
            </Button>
          </Input.Group>
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <List
            itemLayout="horizontal"
            dataSource={recipes}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<Typography.Text>{item.name}</Typography.Text>}
                />
                <Button
                  type="ghost"
                  onClick={() => {
                    editItem(item.id);
                  }}
                >
                  Edit
                </Button>
                <Button
                  type="danger"
                  onClick={() => {
                    deleteRecipeItem(item.id);
                  }}
                >
                  Delete
                </Button>
              </List.Item>
            )}
          />
          ,
        </Col>
      </Row>
    </div>
  );
}

export default App;
