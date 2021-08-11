import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid(),
      edit:false},
      CV: [],
      
    };
    this.onDeletingTask = this.onDeletingTask.bind(this)
    this.onEditingTask=this.onEditingTask.bind(this)
  }
handleChange = (e) => {
  this.setState({
    task : {
      text: e.target.value,
      id: this.state.task.id,
      
    }
  });
};

onSubmitTask = (e) => {
  e.preventDefault();
  this.setState({
    tasks: this.state.tasks.concat(this.state.task),
    task: {
      text: '',
      id: uniqid(),
    },
    number: this.state.number + 1,
    numbers:this.state.numbers.concat(this.state.number)
  });
};
  onDeletingTask(e) {
    
    this.setState({
       tasks: this.state.tasks.filter(task => task.id !== e.target.parentNode.id)
    })
  }
  onEditingTask(e) {
    
  }
  render() {
    const { task, tasks,numbers } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <div id="generalInformation">
          <label htmlFor="nameInput">Enter name</label>
          <input onChange={this.handleChange} value={task.text} type="text" id="nameInput" />
          <label htmlFor="emailInput">Enter email</label>
          <input onChange={this.handleChange} value={task.text} type="text" id="emailInput" />
          <label htmlFor="numberInput">Phone number</label>
          <input onChange={this.handleChange} value={task.text} type="text" id="numberInput" />
          </div>
          <div id=" educationalExperience ">
          <label htmlFor="schoolNameInput">Enter school name</label>
          <input onChange={this.handleChange} value={task.text} type="text" id="schoolNameInput" />
          <label htmlFor="titleOfStudyInput">Enter title of study</label>
          <input onChange={this.handleChange} value={task.text} type="text" id="titleOfStudyInput" />
          <label htmlFor="dateOfStudyInput">date of study</label>
            <input onChange={this.handleChange} value={task.text} type="text" id="dateOfStudyInput" />
          </div>
          <div id=" practicalExperience">
          <label htmlFor="companyNameInput">company name,</label>
          <input onChange={this.handleChange} value={task.text} type="text" id="companyNameInput" />
          <label htmlFor="positionTitleInput">position title</label>
          <input onChange={this.handleChange} value={task.text} type="text" id="positionTitleInput" />
          <label htmlFor="mainTasksInput">main tasks of your jobs</label>
            <input onChange={this.handleChange} value={task.text} type="text" id="dateOfStudyInput" />
            <label htmlFor="dateFromInput"> date you worked from</label>
            <input onChange={this.handleChange} value={task.text} type="text" id="dateFromInput" />
            <label htmlFor="dateUntilInput">date until</label>
            <input onChange={this.handleChange} value={task.text} type="text" id="dateUntilInput" />
            
            </div>
          <button type="submit">
            Submit
          </button>
        </form>
        <Do tasks={tasks} numbers={numbers} deleting={this.onDeletingTask} editing={this.onEditingTask}/>
      </div>
    );
  }
}

export default App;
