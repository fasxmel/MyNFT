import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<StrictMode>
<App />
</StrictMode>
</BrowserRouter>
    
)
