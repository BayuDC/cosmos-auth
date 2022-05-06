import { createRoot } from 'react-dom/client';

import App from './App';
import 'bulma/css/bulma.min.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);
