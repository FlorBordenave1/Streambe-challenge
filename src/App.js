import "./App.css"
import AuthState from "./context/AuthContext/AuthState"
import UsersState from "./context/UsersContext/UsersState"
import { Login } from "./pages/Login/Login"
import { ProtectedRoutes } from "./components/ProtectedRoutes"
import { Dashboard } from "./pages/Dashboard/Dashboard"
import { AppProvider } from "./context/AppProvider"
import { Route, Routes, Navigate } from "react-router-dom"

function App() {
  return (
    <AppProvider>
      <AuthState>
        <UsersState>
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/home" element={<Dashboard />} />
            </Route>
          </Routes>
        </UsersState>
      </AuthState>
    </AppProvider>
  )
}

export default App
