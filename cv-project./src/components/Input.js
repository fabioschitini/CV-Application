const Input = (props) => {
    const { handleSubmit } = props
    const { state } = props
    const { onChange } = props
    const {thiss} =props
    if (state.edit) {
        
        return (
            <form onSubmit={handleSubmit} onChange={onChange}>
                <div id="generalInformation">
                    
                        <textarea placeholder="Name" required onChange={onChange} value={state.con.name} ref={node => (thiss.inputName = node)} name="name" type="text" id="nameInput" />
                        <div id='name'>
                <textarea placeholder="Email" required  type='email'onChange={ onChange} value={ state.con.email} ref={node => (thiss.inputEmail = node)} name="email" type="text" id="emailInput" />
                        <textarea placeholder="Phone" required onChange={onChange} value={state.con.number} ref={node => (thiss.inputPhone = node)} name="number" type="text" id="numberInput" />
                        </div>
            </div>
                <div id="educationalExperience">
                    <h1>Educational Experience</h1>
                <textarea  placeholder="An Overview of you profile" required  onChange={ onChange} value={ state.con.profile}ref={node => (thiss.inputProfile = node)} name="profile" type="text" id="profileInput" />
                <textarea placeholder="Scholl"className='normal' required  onChange={ onChange} onChange={ onChange}value={ state.con.scholl} ref={node => (thiss.inputScholl = node)} name="scholl" type="text" id="schoolNameInput" />
                <div id='study'>
                <textarea placeholder="Title of studied"className='normal' required   onChange={ onChange} value={ state.con.study} ref={node => (thiss.inputStudy = node)} name="titleOfStudy" type="text" id="titleOfStudyInput" />
                        <textarea  placeholder="Date" type='date' className='date' required maxlength="4"onChange={onChange} value={state.con.dateStudy} ref={node => (thiss.inputDate = node)} name="dateOfStudy" type="text" id="dateOfStudyInput" />
                        </div>
            </div>
                <div id="practicalExperience">
                    <h1>Pratical Experience</h1>
                    <div id='position'>
                                        <textarea placeholder="Position " className='normal' required  onChange={ onChange} value={ state.con.positionTitle} ref={node => (thiss.inputTitle= node)} name="position" type="text" id="positionTitleInput" />
                    <textarea maxlength="4" placeholder="From" className='date' type='date' required onChange={onChange} value={state.con.dateBegin} ref={node => (thiss.inputBegin = node)} name="begin" type="text" id="dateFromInput" />
                <textarea maxlength="4" placeholder="Until" className='date' type='date' required  onChange={ onChange} value={ state.con.dateEnd} ref={node => (thiss.inputEnd = node)} name="end" type="text" id="dateUntilInput" />
                    </div>
                <textarea placeholder="Company " className='normal' required  onChange={ onChange} value={ state.con.companyName} ref={node => (thiss.inputCompany = node)} name="company" type="text" id="companyNameInput" />
               
                <textarea placeholder="Tasks" className='big' required  onChange={ onChange} value={ state.con.mainTask} ref={node => (thiss.inputTask = node)} name="task" type="text" id="mainTasksInput" />
                
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


