import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./views/components/Header/Header";
import { FinalScreen } from "./views/FinalScreen/FinalScreen";
import { Home } from "./views/HomePage/HomePage";
import { VocabularyQuiez } from "./views/VocabularyQuiezPage/VocabularyQuiez";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/test" element={<VocabularyQuiez />} />
        <Route path="/score" element={<FinalScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
