import { useState } from "react"
import { AiFillVideoCamera, AiOutlineUsergroupDelete } from "react-icons/ai"
import SingleRecipe from "./SingleRecipe"

const RecipeResults = ({ recipe }) => {
  const [recipeOpen, setRecipeOpen] = useState(false)

  return (
    <>
      <div
        className="recipe-result"
        style={{ backgroundImage: `url(${recipe.thumbnail_url})` }}
        onClick={() => setRecipeOpen(!recipeOpen)}
      >
        <div className="recipe-result-info">
          {recipe.original_video_url !== null ? (
            <span className="video">
              Video <AiFillVideoCamera />
            </span>
          ) : (
            ""
          )}
          <span className="servings">
            {recipe.num_servings} servings <AiOutlineUsergroupDelete />
          </span>
        </div>
        <h3>{recipe.name}</h3>
      </div>
      {recipeOpen ? (
        <>
          <SingleRecipe recipe={recipe} setRecipeOpen={setRecipeOpen} />
        </>
      ) : (
        ""
      )}
    </>
  )
}
export default RecipeResults
