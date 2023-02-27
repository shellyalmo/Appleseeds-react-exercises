import { useGlobalContext } from "../context/DarkModeContext";

const Homepage = () => {
  const { dark, toggleDarkMode } = useGlobalContext();

  console.log(dark, "dark Homepage");
  return (
    <div>
      <button onClick={toggleDarkMode}>
        {dark ? "Make it light" : "Make it dark"}
      </button>
      <h1>The home page</h1>
    </div>
  );
};

export default Homepage;
