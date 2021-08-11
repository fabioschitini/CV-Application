const Input = (props) => {
    const { handleSubmit } = props
    const { state } = props
    const {onChange}=props
    if (state.edit) {
           
        
        return (<form onSubmit={handleSubmit} onChange={onChange}>
            <div id="generalInformation">
                <label htmlFor="nameInput">Enter name</label>
                <input name="name" type="text" id="nameInput" />
                <label htmlFor="emailInput">Enter email</label>
                <input name="email" type="text" id="emailInput" />
                <label htmlFor="numberInput">Phone number</label>
                <input name="number" type="text" id="numberInput" />
            </div>
            <div id=" educationalExperience ">
                <label htmlFor="schoolNameInput">Enter school name</label>
                <input name="scholl" type="text" id="schoolNameInput" />
                <label htmlFor="titleOfStudyInput">Enter title of study</label>
                <input name="titleOfStudy" type="text" id="titleOfStudyInput" />
                <label htmlFor="dateOfStudyInput">date of study</label>
                <input name="dateOfStudy" type="text" id="dateOfStudyInput" />
            </div>
            <div id=" practicalExperience">
                <label htmlFor="companyNameInput">company name,</label>
                <input name="company" type="text" id="companyNameInput" />
                <label htmlFor="positionTitleInput">position title</label>
                <input name="position" type="text" id="positionTitleInput" />
                <label htmlFor="mainTasksInput">main tasks of your jobs</label>
                <input name="task" type="text" id="mainTasksInput" />
                <label htmlFor="dateFromInput"> date you worked from</label>
                <input name="begin" type="text" id="dateFromInput" />
                <label htmlFor="dateUntilInput">date until</label>
                <input name="end" type="text" id="dateUntilInput" />
            
            </div>
            <button type="submit">
                Submit
          </button>
        </form>
        )
    }
        return null

}

export default Input


