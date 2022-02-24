import Home from "./components/Home";
import FeedbackProvider from "./context/FeedbackProvider";

function App() {
  return (
    <div className="App">
      <FeedbackProvider>
        <Home />
      </FeedbackProvider>
    </div>
  );
}

export default App;
