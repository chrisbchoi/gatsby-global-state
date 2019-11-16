import React, { useContext } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"

const SecondPage = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <span>{state.theme}</span>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "TOGGLE_THEME" })
        }}
      >
        Toggle Theme
      </button>

      <Link to="/">Go back t}o the homepage</Link>
    </Layout>
  )
}

export default SecondPage
