const Input = (props) => {
    const { handleSubmit } = props
    const { state } = props
    const { onChange } = props
    const {thiss} =props
    if (state.edit) {
        
        return (<form onSubmit={handleSubmit} onChange={onChange}>
            <div id="generalInformation">
                <label htmlFor="nameInput">Enter name</label>
                <input required  onChange={ onChange} value={ state.con.name}ref={node => (thiss.inputName = node)} name="name" type="text" id="nameInput" />
                <label htmlFor="emailInput">Enter email</label>
                <input required  onChange={ onChange} value={ state.con.email} ref={node => (thiss.inputEmail = node)} name="email" type="text" id="emailInput" />
                <label htmlFor="numberInput">Phone number</label>
                <input required  onChange={ onChange}  value={ state.con.number} ref={node => (thiss.inputPhone = node)} name="number" type="text" id="numberInput" />
            </div>
            <div id=" educationalExperience ">
                <label htmlFor="schoolNameInput">Enter school name</label>
                <input required  onChange={ onChange} onChange={ onChange}value={ state.con.scholl} ref={node => (thiss.inputScholl = node)} name="scholl" type="text" id="schoolNameInput" />
                <label htmlFor="titleOfStudyInput">Enter title of study</label>
                <input required   onChange={ onChange} value={ state.con.study} ref={node => (thiss.inputStudy = node)} name="titleOfStudy" type="text" id="titleOfStudyInput" />
                <label htmlFor="dateOfStudyInput">date of study</label>
                <input required  onChange={ onChange} value={ state.con.dateStudy} ref={node => (thiss.inputDate = node)} name="dateOfStudy" type="text" id="dateOfStudyInput" />
            </div>
            <div id=" practicalExperience">
                <label htmlFor="companyNameInput">company name,</label>
                <input required  onChange={ onChange} value={ state.con.companyName} ref={node => (thiss.inputCompany = node)} name="company" type="text" id="companyNameInput" />
                <label htmlFor="positionTitleInput">position title</label>
                <input required  onChange={ onChange} value={ state.con.positionTitle} ref={node => (thiss.inputTitle= node)} name="position" type="text" id="positionTitleInput" />
                <label htmlFor="mainTasksInput">main tasks of your jobs</label>
                <input required  onChange={ onChange} value={ state.con.mainTask} ref={node => (thiss.inputTask = node)} name="task" type="text" id="mainTasksInput" />
                <label htmlFor="dateFromInput"> date you worked from</label>
                <input required  onChange={ onChange}  value={ state.con.dateBegin}ref={node => (thiss.inputBegin = node)} name="begin" type="text" id="dateFromInput" />
                <label  htmlFor="dateUntilInput">date until</label>
                <input required  onChange={ onChange} value={ state.con.dateEnd} ref={node => (thiss.inputEnd = node)} name="end" type="text" id="dateUntilInput" />
            
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


