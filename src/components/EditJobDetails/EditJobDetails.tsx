import { useState } from "react"
import { useLocation } from "react-router"

//types
import { Job } from "../../types/models"
import { JobFormData } from "../../types/forms"

interface jobProp {
  handleUpdateJob : (JobData: JobFormData, jobId:number) => void
}

const EditJobDetails = (props: jobProp): JSX.Element => {
  const {state}: {state: Job} = useLocation()

  const[form, setForm] = useState<JobFormData>({
    companyName: state.companyName,
    logo: state.logo,
    position: state.position,
    applyLink: state.applyLink,
    salary: state.salary,
  }
)

const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
  setForm({ ...form, [evt.target.name]: evt.target.value})
}

const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
  evt.preventDefault()
  try {
    props.handleUpdateJob(form, state.id)
  } catch (error) {
    console.log(error);
  }
}

  const salary = form?.salary ? form.salary : 'Not specified'
  const jobLink = form?.applyLink ? form.applyLink : ''



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
              value={jobLink}
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
              value={salary}
              onChange={handleChange}
              />
              <h6>leave salary blank if not specified</h6>
        </div>
        <button type="submit">Finish Edit</button>
      </form>
    </div>
  )
}

export default EditJobDetails