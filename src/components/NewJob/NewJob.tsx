import React, { useState, useEffect } from "react"

//types
import { Job } from "../../types/models"
import { JobFormData } from "../../types/forms"

interface jobProp {
  handleAddJob : (formData: JobFormData) => void
}

const NewJob = (props: jobProp): JSX.Element => {
  const[form, setForm] = useState<JobFormData>({
      companyName: '',
      logo: '',
      position: '',
      applyLink: '',
      salary: 0
    }
  )

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Company Name</h3>
            <input 
              required
              autoComplete="off"
              type="text"
              name="companyName"
              value={form.companyName}
              placeholder=""
              onChange={handleChange}
              />
        </div>
        <div>
          <h3>Company Logo</h3>
            <input
              autoComplete="off"
              type="text"
              name="logo"
              value={form.logo}
              placeholder="Insert image URL here"
              onChange={handleChange}
              />
        </div>
        <div>
          <h3>Position</h3>
            <input 
              required
              autoComplete="off"
              type="text"
              name="position"
              value={form.position}
              placeholder=""
              onChange={handleChange}
              />
        </div>
        <div>
          <h3>Apply Link</h3>
            <input 
              autoComplete="off"
              type="text"
              name="applyLink"
              value={form.applyLink}
              placeholder="Insert job link here"
              onChange={handleChange}
              />
        </div>
        <div>
          <h3>Salary</h3>
            <input
              autoComplete="off"
              type="number"
              name="salary"
              value={form.salary}
              onChange={handleChange}
              />
              <h6>leave salary blank if not specified</h6>
        </div>
        <button type="submit">Create Job</button>
      </form>
    </div>
  )
}

export default NewJob 