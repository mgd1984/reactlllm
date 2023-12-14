import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ModelList from './components/ModelList';
import PromptForm from './components/PromptForm';
import './services/llmService';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PromptForm />} />
        <Route path="/models" element={<ModelList />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;