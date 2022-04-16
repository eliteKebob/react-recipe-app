import { useState, useEffect } from "react"
import axios from "axios"
import { AiOutlineSearch, AiFillCheckCircle } from "react-icons/ai"
import { toast } from "react-toastify"
import RecipeResults from "../components/RecipeResults"

const Landing = () => {
  const [query, setQuery] = useState("")
  const [tags, setTags] = useState("")
  const [selectedTag, setSelectedTag] = useState("")
  const [recipes, setRecipes] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchRecipes()
  }

  const handleClear = () => {
    setQuery("")
    setSelectedTag("")
    setRecipes("")
  }

  const fetchTags = async () => {
    if (tags === "") {
      try {
        const response = await axios({
          method: "get",
          url: "https://tasty.p.rapidapi.com/tags/list",
          headers: {
            "X-RapidAPI-Host": "tasty.p.rapidapi.com",
            "X-RapidAPI-Key": `${process.env.REACT_APP_KEY}`,
          },
        })
        if (response.data) {
          setTags(response.data)
          console.log(response.data)
        }
      } catch (error) {
        toast.error("Could not get the tags!")
        console.log(error)
      }
    } else {
      return
    }
  }

  const fetchRecipes = async () => {
    if (query !== "" && selectedTag !== "") {
      try {
        const response = await axios({
          method: "GET",
          url: "https://tasty.p.rapidapi.com/recipes/list",
          params: {
            from: "0",
            size: "20",
            tags: `${selectedTag}`,
            q: `${query}`,
          },
          headers: {
            "X-RapidAPI-Host": "tasty.p.rapidapi.com",
            "X-RapidAPI-Key": `${process.env.REACT_APP_KEY}`,
          },
        })
        if (response.data) {
          setRecipes(response.data)
          console.log(response.data)
        }
      } catch (error) {
        toast.error("Could not get the recipe that you wanted!")
        console.log(error)
      }
    } else {
      toast.info("Please fill all fields!")
    }
  }

  useEffect(() => {
    if (tags === "") {
      fetchTags()
    } else {
      return
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className="wrapper">
      <div className="banner"></div>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Food name or an ingredient"
          />
          <button type="submit">
            <AiOutlineSearch />
          </button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </form>
      </div>
      <div className="tags">
        <h3>Select The Tag that Perfect For You</h3>
        <div className="tagsList">
          <div className="tag-group">
            <span className="dietary">-Dietary-</span>
            {tags?.results
              ? tags?.results
                  .filter((k) => k.type === "dietary")
                  .map((tag, idx) => (
                    <span
                      tag={tag}
                      key={idx}
                      className={`${tag?.type}`}
                      onClick={() => setSelectedTag(tag?.name)}
                    >
                      {tag?.display_name}{" "}
                      {selectedTag === tag?.name ? <AiFillCheckCircle /> : ""}
                    </span>
                  ))
              : ""}
          </div>
          <div className="tag-group">
            <span className="meal">-Meal-</span>
            {tags?.results
              ? tags?.results
                  .filter((k) => k.type === "meal")
                  .map((tag, idx) => (
                    <span
                      tag={tag}
                      key={idx}
                      className={`${tag?.type}`}
                      onClick={() => setSelectedTag(tag?.name)}
                    >
                      {tag?.display_name}{" "}
                      {selectedTag === tag?.name ? <AiFillCheckCircle /> : ""}
                    </span>
                  ))
              : ""}
          </div>
          <div className="tag-group">
            <span className="appliance">-Appliance-</span>
            {tags?.results
              ? tags?.results
                  .filter((k) => k.type === "appliance")
                  .map((tag, idx) => (
                    <span
                      tag={tag}
                      key={idx}
                      className={`${tag?.type}`}
                      onClick={() => setSelectedTag(tag?.name)}
                    >
                      {tag?.display_name}{" "}
                      {selectedTag === tag?.name ? <AiFillCheckCircle /> : ""}
                    </span>
                  ))
              : ""}
          </div>
          <div className="tag-group">
            <span className="seasonal">-Seasonal-</span>
            {tags?.results
              ? tags?.results
                  .filter((k) => k.type === "seasonal")
                  .map((tag, idx) => (
                    <span
                      tag={tag}
                      key={idx}
                      className={`${tag?.type}`}
                      onClick={() => setSelectedTag(tag?.name)}
                    >
                      {tag?.display_name}{" "}
                      {selectedTag === tag?.name ? <AiFillCheckCircle /> : ""}
                    </span>
                  ))
              : ""}
          </div>
          <div className="tag-group">
            <span className="occasion">-Occasion-</span>
            {tags?.results
              ? tags?.results
                  .filter((k) => k.type === "occasion")
                  .map((tag, idx) => (
                    <span
                      tag={tag}
                      key={idx}
                      className={`${tag?.type}`}
                      onClick={() => setSelectedTag(tag?.name)}
                    >
                      {tag?.display_name}{" "}
                      {selectedTag === tag?.name ? <AiFillCheckCircle /> : ""}
                    </span>
                  ))
              : ""}
          </div>
          <div className="tag-group">
            <span className="holiday">-Holiday-</span>
            {tags?.results
              ? tags?.results
                  .filter((k) => k.type === "holiday")
                  .map((tag, idx) => (
                    <span
                      tag={tag}
                      key={idx}
                      className={`${tag?.type}`}
                      onClick={() => setSelectedTag(tag?.name)}
                    >
                      {tag?.display_name}{" "}
                      {selectedTag === tag?.name ? <AiFillCheckCircle /> : ""}
                    </span>
                  ))
              : ""}
          </div>
          <div className="tag-group">
            <span className="difficulty">-Difficulty-</span>
            {tags?.results
              ? tags?.results
                  .filter((k) => k.type === "difficulty")
                  .map((tag, idx) => (
                    <span
                      tag={tag}
                      key={idx}
                      className={`${tag?.type}`}
                      onClick={() => setSelectedTag(tag?.name)}
                    >
                      {tag?.display_name}{" "}
                      {selectedTag === tag?.name ? <AiFillCheckCircle /> : ""}
                    </span>
                  ))
              : ""}
          </div>
          <div className="tag-group">
            <span className="dish_style">-Dish Style-</span>
            {tags?.results
              ? tags?.results
                  .filter((k) => k.type === "dish_style")
                  .map((tag, idx) => (
                    <span
                      tag={tag}
                      key={idx}
                      className={`${tag?.type}`}
                      onClick={() => setSelectedTag(tag?.name)}
                    >
                      {tag?.display_name}{" "}
                      {selectedTag === tag?.name ? <AiFillCheckCircle /> : ""}
                    </span>
                  ))
              : ""}
          </div>
        </div>
      </div>
      <div className="recipes" id="recipes">
        {recipes?.results
          ? recipes?.results.map((recipe, idx) => (
              <RecipeResults recipe={recipe} key={idx} />
            ))
          : ""}
      </div>
    </div>
  )
}
export default Landing
