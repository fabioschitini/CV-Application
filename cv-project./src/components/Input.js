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
                <textarea placeholder="Scholl"className='degree' required  onChange={ onChange} onChange={ onChange}value={ state.con.scholl} ref={node => (thiss.inputScholl = node)} name="scholl" type="text" id="schoolNameInput" />
                <div id='study'>
                <textarea placeholder="Degree"className='degree' required   onChange={ onChange} value={ state.con.study} ref={node => (thiss.inputStudy = node)} name="titleOfStudy" type="text" id="titleOfStudyInput" />
                        <textarea  placeholder="From"  className='date' required minlength="4"  maxlength="4" onChange={onChange} value={state.con.dateStudy} ref={node => (thiss.inputDate = node)} name="dateOfStudy"  id="dateOfStudyInput" />
                        <textarea   placeholder="Until"  className='date' required minlength="4" maxlength="4"onChange={onChange} value={state.con.dateStudy1} ref={node => (thiss.inputDate1 = node)} name="dateOfStudy1"  id="dateOfStudyInput1" />
                    </div>
                <textarea placeholder="Language "className='extra'   onChange={ onChange} onChange={ onChange}value={ state.con.language} ref={node => (thiss.inputLanguage = node)} name="scholl" type="text" id="schoolNameInput" />

            </div>
                <div id="practicalExperience">
                    <h1>Pratical Experience</h1>
                    <div id='position'>
                                        <textarea placeholder="Position " className='normal' required  onChange={ onChange} value={ state.con.positionTitle} ref={node => (thiss.inputTitle= node)} name="position" type="text" id="positionTitleInput" />
                    <textarea minlength="4"  maxlength="4" placeholder="From" className='date' type='date' required onChange={onChange} value={state.con.dateBegin} ref={node => (thiss.inputBegin = node)} name="begin" type="text" id="dateFromInput" />
                <textarea minlength="4"  maxlength="4" placeholder="Until" className='date' type='date' required  onChange={ onChange} value={ state.con.dateEnd} ref={node => (thiss.inputEnd = node)} name="end" type="text" id="dateUntilInput" />
                    </div>
                <textarea placeholder="Company " className='normal' required  onChange={ onChange} value={ state.con.companyName} ref={node => (thiss.inputCompany = node)} name="company" type="text" id="companyNameInput" />
               
                <textarea placeholder="Tasks" className='big' required  onChange={ onChange} value={ state.con.mainTask} ref={node => (thiss.inputTask = node)} name="task" type="text" id="mainTasksInput" />
                                <textarea placeholder="Cursos Extras"className='extra alonePading'   onChange={ onChange} onChange={ onChange}value={ state.con.extra} ref={node => (thiss.inputExtra = node)} name="scholl" type="text" id="schoolNameInput" />

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


