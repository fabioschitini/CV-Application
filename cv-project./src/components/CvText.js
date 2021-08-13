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
                                <p className='normal'>{state.scholl}</p>
                                <div id='study'>                          
                                <p className='normal'>{state.study}</p>
                                    <p className='date'>{state.dateStudy}</p>
                                    </div>
                </div>
                    <div id="practicalExperience">
                                <h1>Pratical Experience</h1> 
                                <div id='position'>
                                    <p className='normal'>{state.positionTitle}</p>
                                    <p className='date' >{state.dateBegin}</p>
                                    <p className='date' id='untilDate'>{state.dateEnd}</p>
                                </div>
                                <p className='normal'>{state.companyName}</p>
                                                               
                                                              
                                <p className='big'>{state.mainTask}</p>
                                                               
                                
                                                 
                                    
                </div>
                        <button onClick={onEditingTask}>Edit</button>
                        
            </div>

                        </div>
                    )
                })
        )
}
export default Text
