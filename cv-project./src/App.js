import { Component } from 'react';
import Text from './components/CvText'
import Input from './components/Input'

class App extends Component {
  constructor() {
    super();

    this.state = {
      con: {
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
        dateEnd: ''
      },
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
    edit: false,
    submit: true,
    CV:[this.state.con]
        
  })
  console.log(this.state.CV)
};
  
  onEditingTask(e) {
    this.setState({
      edit: true,
      submit: false,
      CV:[]
   })
  }
  onChange(e) {
    this.setState({
      con: {
        name: this.inputName.value,
        email: this.inputEmail.value,
        number: this.inputPhone.value,
        scholl: this.inputScholl.value,
        study: this.inputStudy.value,
        dateStudy: this.inputDate.value,
        companyName: this.inputCompany.value,
        positionTitle: this.inputTitle.value,
        mainTask: this.inputTask.value,
        dateBegin: this.inputBegin.value,
        dateEnd: this.inputEnd.value
      }
    })
  }
  render() {
     

    return (
      <div>
        <Input thiss={this }handleSubmit={this.handleSubmit} state={this.state} onChange={this.onChange} />
        <Text state={this.state} onEditingTask={this.onEditingTask}  />
      </div>
    );
  }
}

export default App;
