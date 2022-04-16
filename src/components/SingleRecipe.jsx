const SingleRecipe = ({ recipe, setRecipeOpen }) => {
  return (
    <div className="singleRecipeWrapper" onClick={() => setRecipeOpen(false)}>
      <span onClick={() => setRecipeOpen(false)} className="closeIcon">
        X
      </span>
      <div className="recipeInfo">
        <div className="recipeContent">
          <h1>{recipe.name}</h1>
          <h5>{recipe.description}</h5>
          {recipe.instructions ? (
            <h3 style={{ color: "red" }}>INSTRUCTIONS</h3>
          ) : (
            ""
          )}
          {recipe.instructions
            ? recipe.instructions.map((k, idx) => (
                <h4 k={k} key={idx}>
                  {k.display_text}
                </h4>
              ))
            : "There is no instructions for this recipe :("}
        </div>
        <div className="recipeVideo">
          {recipe.original_video_url ? (
            <>
              <video className="recipeVideoControl" controls>
                <source src={recipe.original_video_url} type="video/mp4" />
              </video>
            </>
          ) : (
            <>
              <img
                src={recipe.thumbnail_url}
                alt="img"
                style={{ height: "250px" }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
export default SingleRecipe
