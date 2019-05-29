import React from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import Contact from "../components/Contact"

const ContactPage = () => {
    return (
        <Layout>
            <Meta title="contact"/>
            <Facebook/>
            <Twitter/>

            <Contact/>
        </Layout>
    )
}

export default ContactPage
