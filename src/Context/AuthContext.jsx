import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'

const AuthContext = createContext()
const initState = { isAuth: false, user: {} }

const reduce = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { isAuth: true, user: payload.user }
    case "LOGOUT":
      return initState
    default:
      return state
  }

}

export default function AuthContextProvider({ children }) {

  const [isAppLoading, setisAppLoading] = useState(true);
  const [state, dispatch] = useReducer(reduce, initState);

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem('todos')) || []
    if (todo) {
      const user = todo.user;
      dispatch({ type: 'LOGIN', payload: { user } })
    }

    setTimeout(() => {
      setisAppLoading(false)
    }, 1000);

  }, [])
  return (
    <AuthContext.Provider value={{ ...state, isAppLoading, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuthContext = () => useContext(AuthContext)