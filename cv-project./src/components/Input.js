const Input = (props) => {
    const { handleSubmit } = props
    const { edit } = props
    const { onChange } = props
    const { con } = props
    const {form}=props
    const { email }=props
    const { test } = props

    if (edit) {
        
        return (
            <form ref={form } onSubmit={handleSubmit} onChange={onChange} name='normal'>
                <div onChange={onChange} id='all'>
                <div id="generalInformation">
                        <textarea placeholder="Name" required onChange={onChange} name="name" type="text" id="nameInput" />
                        <div id='name'>
                <textarea  placeholder="Email" required  type='email'onChange={ onChange} value={ con.email}  name="email" type="text" id="emailInput" />
                        <textarea placeholder="Phone" required onChange={onChange} value={con.number}  name="number" type="text" id="numberInput" />
                        </div>
            </div>
                <div id="educationalExperience">
                    <h1>Educational Experience</h1>
                <textarea  placeholder="An Overview of you profile" required  onChange={ onChange} value={ con.profile} name="profile" type="text" id="profileInput" />
                <textarea placeholder="Scholl"className='degree' required  onChange={ onChange} onChange={ onChange}value={ con.scholl}  name="scholl" type="text" id="schoolNameInput" />
                <div id='study'>
                <textarea placeholder="Degree"className='degree' required   onChange={ onChange} value={ con.study}  name="titleOfStudy" type="text" id="titleOfStudyInput" />
                        <textarea  placeholder="From"  className='date' required minLength="4"  maxLength="4" onChange={onChange} value={con.dateStudy}  name="dateOfStudy"  id="dateOfStudyInput" />
                        <textarea   placeholder="Until"  className='date' required minlength="4" maxlength="4"onChange={onChange} value={con.dateStudy1}  name="dateOfStudy1"  id="dateOfStudyInput1" />
                    </div>
                <textarea placeholder="Language "className='extra'   onChange={ onChange} onChange={ onChange}value={ con.language}  name="language" type="text" id="schoolNameInput" />

            </div>
                <div id="practicalExperience">
                    <h1>Pratical Experience</h1>
                    <div id='position'>
                                        <textarea placeholder="Position " className='normal' required  onChange={ onChange} value={ con.positionTitle}  name="position" type="text" id="positionTitleInput" />
                    <textarea minlength="4"  maxlength="4" placeholder="From" className='date' type='date' required onChange={onChange} value={con.dateBegin}  name="begin" type="text" id="dateFromInput" />
                <textarea minlength="4"  maxlength="4" placeholder="Until" className='date' type='date' required  onChange={ onChange} value={ con.dateEnd}  name="end" type="text" id="dateUntilInput" />
                    </div>
                <textarea placeholder="Company " className='normal' required  onChange={ onChange} value={ con.companyName}  name="company" type="text" id="companyNameInput" />
               
                <textarea placeholder="Tasks" className='big' required  onChange={ onChange} value={ con.mainTask}  name="task" type="text" id="mainTasksInput" />
                                <textarea placeholder="Cursos Extras"className='extra alonePading'    onChange={ onChange} value={con.extra}  name="extra" type="text" id="schoolNameInput" />

            </div>
            <button type="submit">
                        Submit
          </button>
                    </div>
        </form>
        )
    }
        return null

}

export default Input


