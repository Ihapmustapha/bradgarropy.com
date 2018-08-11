import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

// components
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

// favicon
import favicon from "../icons/favicon.ico"

// styles
import "./index.css"


const Layout = ({children, data}) => {

    return (

        <div>

            <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                    {name: "description", content: "Sample"},
                    {name: "keywords", content: "sample, something"},
                ]}
                link={[
                    {rel: "icon", type: "image/png", href: favicon},
                ]}
            />

            <div className="container">

                <Navigation/>

                <div className="content">
                    {children()}
                </div>

                <Footer/>

            </div>

        </div>

    )
}


Layout.propTypes = {
    children: PropTypes.func,
    data: PropTypes.object,
}


export const query = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
            title
            }
        }
    }
`


// exports
export default Layout
