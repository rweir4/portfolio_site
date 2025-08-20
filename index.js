import { createRoot } from 'react-dom/client';
import Portfolio from './App.jsx';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<Portfolio />);