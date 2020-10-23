import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Form, Container } from "react-bootstrap"

const url =
  "https://script.google.com/macros/s/AKfycbyaM3C_1m1_XA3JiQDNW6NOgVWv4fKeKapuMpP1KYB5SRNSx4_W/exec"

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    errors,
    setError,
    reset,
    formState: { isSubmitting },
  } = useForm()
  const onSubmit = async data => {
    try {
      if (data.location) {
        return false
      }
      var form = document.getElementById("googleForm")
      var elements = form.elements
      var fields = Object.keys(elements)

      var formData = {}
      fields.forEach(function (name) {
        var element = elements[name]

        // singular form elements just have one value
        formData[name] = element.value

        // when our element has multiple items, get their values
        if (element.length) {
          var data = []
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i)
            if (item.checked || item.selected) {
              data.push(item.value)
            }
          }
          formData[name] = data.join(", ")
        }
      })

      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields)
      formData.formGoogleSheetName = form.dataset.sheet || "responses" // default sheet name
      formData.formGoogleSendEmail = form.dataset.email || "" // no email by default
      var thedata = formData.data
      var encoded = Object.keys(thedata)
        .map(function (k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(thedata[k])
        })
        .join("&")

      await fetch(url, {
        method: "POST",
        body: encoded,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      setSubmitted(true)
      reset()
    } catch (error) {
      setError(
        "submit",
        "submitError",
        `Oops! There seems to be an issue! ${error.message}`
      )
    }
  }

  const showSubmitError = msg => <p className="msg-error">{msg}</p>

  const showThankYou = (
    <div className="msg-confirm">
      <p>Awesome! Your message was sent.</p>
      <button type="button" onClick={() => setSubmitted(false)}>
        Send another message?
      </button>
    </div>
  )

  const showForm = (
    <Container>
      <Form
        id="googleForm"
        class="gform"
        method="POST"
        action={url}
        data-email="bradblan@gmail.com"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div class="row">
          <div class="col-6">
            <Form.Group controlId="firstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                ref={register({ required: true, maxLength: 20 })}
                name="firstname"
                type="text"
                size="lg"
                disabled={isSubmitting}
              />
              {errors.firstname && <span>This field is required</span>}
            </Form.Group>
          </div>
          <div class="col-6">
            <Form.Group controlId="lastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                ref={register({ required: true, maxLength: 20 })}
                name="lastname"
                type="text"
                size="lg"
                disabled={isSubmitting}
              />
              {errors.lastname && <span>This field is required</span>}
            </Form.Group>
          </div>
        </div>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            ref={register({
              required: true,
            })}
            name="email"
            type="text"
            size="lg"
            pattern="^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$"
            placeholder="someone@somewhere.com"
            disabled={isSubmitting}
          />
          {errors.email && <span>This field is required</span>}
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            ref={register({ maxLength: 300 })}
            name="message"
            as="textarea"
            rows="3"
            placeholder="Tell us what's on your mind..."
          />
        </Form.Group>
        <Form.Group controlId="Location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            ref={register}
            name="location"
            type="text"
            tabindex="-1"
            autocomplete="off"
          />
        </Form.Group>
        <button
          class="btn btn-lg btn-primary"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </Form>
    </Container>
  )
  return (
    <div id="contactUs">
      <div class="form-errors">
        {errors && errors.submit && showSubmitError(errors.submit.message)}
      </div>
      <div id="contactForm">{submitted ? showThankYou : showForm}</div>
    </div>
  )
}

export default ContactForm
