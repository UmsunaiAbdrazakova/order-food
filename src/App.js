import { Header } from "./components/header/Header";
import { MealsSummary } from "./components/meals-summary/MealsSummary";
import Meals from "./components/meals/Meals";
import { Modal } from "./components/UI/Modal";

function App() {
  return (
    <div>
      <Header />
      <MealsSummary />
      <Meals />
      <Modal/>
    </div>
  );
}

export default App;
