import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/auth-context.jsx'
import { QuizProvider } from './context/quiz-context.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <AuthProvider >
        <QuizProvider>
          <App />
        </QuizProvider>
      </AuthProvider>
    </BrowserRouter>
)
