import React, { useContext } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"

const IndexPage = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      {state.theme}
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "TOGGLE_THEME" })
        }}
      >
        Toggle Theme
      </button>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <React.Fragment>
        <Helmet>
          <script
            src={`https://www.google.com/recaptcha/api.js? r=${Math.random()}`}
            async
            defer
          ></script>
        </Helmet>
        <form>
          <div
            className="g-recaptcha"
            data-sitekey={process.env.RECAPTURE_SITE_KEY}
          ></div>
        </form>
      </React.Fragment>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
