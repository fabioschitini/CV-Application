const Text = (props) => {
    const { state } = props
    const { onEditingTask } = props
        return (
            state.CV.map(state => {
                return (
                    <div key={2}>
                        <div id='text'>
                
               
                <div id="generalInformation">
                                <h1>{state.name}</h1>
                                 <div id='name'>
                    <p className='information'>{state.email}</p>
                                    <p className='information' id='number'>{state.number}</p> 
                                    </div>
                </div> 
                <div id="educationalExperience">
                    <h1>Profile</h1> 
                                <p id='profile'>{state.profile}</p>          
                                <p className='normal alonePading'>{state.scholl}</p>
                                <div id='study'>                          
                                <p className='normal'>{state.study}</p>
                                    <p className='date dateText'>{state.dateStudy}-</p>
                                    <p className='date dateText'>{state.dateStudy1}</p>
                                </div>
                                 <p className='extra'>{state.language}</p>
                </div>
                    <div id="practicalExperience">
                                <h1>Pratical Experience</h1> 
                                <div id='position'>
                                    <p className='normal'>{state.positionTitle}</p>
                                    <p className='dateText' >{state.dateBegin}-</p>
                                    <p className=' dateText' id='untilDate'>{state.dateEnd}</p>
                                </div>
                                <p className='normal alonePading'>{state.companyName}</p>                       
                                <p className='big'>{state.mainTask}</p>
                                <p className='extra alonePading'>{state.extra}</p> 
                </div>
                        <button onClick={onEditingTask}>Edit</button>
                        
            </div>

                        </div>
                    )
                })
        )
}
export default Text
