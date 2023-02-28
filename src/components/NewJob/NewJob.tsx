import React, { useState, useEffect } from "react"

//types
import { Job } from "../../types/models"
import { JobFormData } from "../../types/forms"

interface jobProp {
  handleAddJob : (addJob: Job) => void
}

const NewJob = (props: jobProp): JSX.Element => {
  const[form, setForm] = useState<JobFormData>({
      companyName: '',
      logo: '',
      position: '',
      applyLink: '',
      salary: 0,
      id: 0,
      createdAt: '',
      updatedAt: '', 
    }
  )
  console.log('THIS IS MY FORM DATA',form);
  

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    try {
      props.handleAddJob(form)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <h1>Hello</h1>
    </>
  )
}

export default NewJob 