import React from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { Section2, MainContainer } from "components/sections"

const ContactForm = styled.form`
  display: block;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid var(--borderColor);
  padding: 15px;
  border-radius: 5px;
  background-color: var(--mainColor);
  margin-bottom: 50px;
`
const FormLabel = styled.label`
  line-height: 2.7em;
`
const FormInput = styled.input`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: var(--secondaryColor);
  border-radius: 5px;
  border: 1px solid var(--borderColor);
  font-size: 14px;
`

const FormTextArea = styled.textarea`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: var(--secondaryColor);
  border-radius: 5px;
  border: 1px solid var(--borderColor);
  font-size: 14px;

  min-height: 100px;
  font-size: 14px;
`

const SendButton = styled.button`
  margin-top: 10px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fff;
  background-color: var(--buttonColor);
  border: none;
`

const Contact = () => {
  const { register, errors } = useForm()

  return (
    <Section2 id="contact">
      <MainContainer>
        <h3 style={{ textAlign: "center" }}>Get In Touch</h3>
        <ContactForm
          action="https://send.pageclip.co/cUBUdTiedO9NHcjzvwd6NzAMOixeQsjB"
          className="pageclip-form"
          method="post"
        >
          <div>
            <FormLabel>Name</FormLabel>
            <FormInput
              type="text"
              name="name"
              ref={register({ required: true })}
            />
            {errors.name && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>

          <div>
            <FormLabel>Subject</FormLabel>
            <FormInput
              type="text"
              name="subject"
              ref={register({ required: true })}
            />
            {errors.subject && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>

          <div>
            <FormLabel>Email</FormLabel>
            <FormInput
              type="email"
              name="email"
              ref={register({ required: true })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>

          <div>
            <FormLabel>Message</FormLabel>
            <FormTextArea name="message" ref={register({ required: true })} />
            {errors.message && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>

          <SendButton type="submit" className="pageclip-form__submit">
            Send
          </SendButton>
        </ContactForm>
      </MainContainer>
    </Section2>
  )
}

export default Contact
