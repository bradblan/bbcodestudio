import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactForm from "../components/contactform"

const ContactUs = () => {
  const title = "Contact Us"

  return (
    <Layout title={title}>
      <SEO title={title} />
      <h1 class="text-center">{title}</h1>
      <div class="image-home bigger mx-auto my-5">
        <img
          src="https://imgs.xkcd.com/comics/the_important_field.png"
          alt="The Important Field by XKCD"
        />
      </div>
      <ContactForm />
      <div class="row mt-3">
        <div class="col-6 image-home mx-auto">
          <img
            src="https://imgs.xkcd.com/comics/emails.png"
            alt="Emails by XKCD"
            class="medium"
          />
        </div>
        <div class="col-6 image-home mx-auto">
          <img
            src="https://imgs.xkcd.com/comics/machine_learning_captcha.png"
            alt="Machine Learning Captcha by XKCD"
            class="medium"
          />
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs
