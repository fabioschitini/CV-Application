const Text = (props) => {
    const { state } = props
    const { onEditingTask } = props
        return (
            state.CV.map(state => {
                return (
                    <div key={2}>
                        <div id='text'>
                
               
                <div id="general-information">
                    <h1>{state.name}</h1>
                    <h2>{state.email}</h2>
                    <h2>{state.number}</h2>
                </div> 

                <div id="Educational-Experience">
                    <h1>{state.scholl}</h1>
                    <h2>{state.study}</h2>
                    <h2>{state.dateStudy}</h2>
                </div>
                <div id="Profisional-Experience">
                    <h1>{state.companyName}</h1>
                    <h2>{state.positionTitle}</h2>
                    <h2>{state.mainTask}</h2>
                    <h2>{state.dateBegin}</h2>
                    <h2>{state.dateEnd}</h2>
                </div>
                        <button onClick={onEditingTask}>Edit</button>
                        
            </div>

                        </div>
                    )
                })
        )
}
export default Text
