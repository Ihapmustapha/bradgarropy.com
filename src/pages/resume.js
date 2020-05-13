import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"

const Resume = styled.section`
    a:not(.anchor) {
        color: rgba(0, 0, 0, 0.8);
        box-shadow: inset 0 -2px ${({theme}) => theme.colors.primary};

        &:hover {
            box-shadow: inset 0 -25px 0 ${({theme}) => theme.colors.primary};
        }
    }
`

const ResumePage = ({data}) => {
    const {html} = data.resume

    return (
        <Layout>
            <Meta title="resume" />
            <Facebook title="👔 resume" description="" />
            <Twitter title="👔 resume" description="" />

            <Resume dangerouslySetInnerHTML={{__html: html}} />
        </Layout>
    )
}

ResumePage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        resume: markdownRemark(
            fileAbsolutePath: {regex: "/content/pages/resume/"}
        ) {
            html
        }
    }
`

export default ResumePage
