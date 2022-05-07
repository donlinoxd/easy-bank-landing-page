import ThemeStyledProvider from "./components/styled/Theme.styled";
import Home from "./pages/Home";

const App = () => {
  return (
    <ThemeStyledProvider>
      <Home />
    </ThemeStyledProvider>
  );
};

export default App;
