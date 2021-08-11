import { Component } from 'react';
import Text from './components/CvText'
import Input from './components/Input'

class App extends Component {
  constructor() {
    super();

    this.state = {
     
      name: '',
        email: '',
          number: '',
            scholl: '',
              study: '',
                dateStudy: '',
                  companyName: '',
                    positionTitle: '',
                      mainTask: '',
                        dateBegin: '',
                          dateEnd: '',
      edit: true,
        submit:false,
      CV: [],
      
    };
    this.onEditingTask = this.onEditingTask.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange=this.onChange.bind(this)
  }
  

handleSubmit = (e) => {
  e.preventDefault();
  this.setState({
    
      name: e.target.name.value,
      email: e.target.email.value,
      number: e.target.number.value,
      scholl: e.target.scholl.value,
      study: e.target.titleOfStudy.value,
      dateStudy: e.target.dateOfStudy.value,
      companyName: e.target.company.value,
      positionTitle: e.target.position.value,
      mainTask: e.target.task.value,
      dateBegin: e.target.begin.value,
      dateEnd: e.target.end.value,
    edit: false,
    submit: true,
        
  })
  this.setState({ CV: [this.state.con] })
};
  
  onEditingTask(e) {
    this.setState({
      edit: true,
      submit:false
   })
  }
  onChange(e) {
  console.log(e.target.value)
  }
  render() {
     

    return (
      <div>
        <Input handleSubmit={this.handleSubmit} state={this.state} onChange={this.onChange} />
        <Text state={this.state} onEditingTask={this.onEditingTask}  />
      </div>
    );
  }
}

export default App;
