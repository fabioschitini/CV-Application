import Text from './components/CvText'
import Input from './components/Input'
import React, { useState,useRef } from "react";

const App = () => {
  const form = useRef(null)
  
const [con,setCon]=useState({
        name: '',
        email: '',
      number: '',
        profile: '',
        scholl: '',
        study: '',
      dateStudy: '',
      dateStudy1: '',
        language: '',
      positionTitle: '',
      dateBegin: '',
        dateEnd: '',
        companyName: '',
        mainTask: '',
        extra:''
})
  const [edit, setEdit] = useState(true)
    const [CV,setCV]=useState([])

const handleSubmit = (e) => {
  e.preventDefault();
  setEdit(false)
  setCV([con])
};
  
  const onEditingTask=(e)=> {
    setEdit(true)
      setCV([])
  }
  const onChange = (e) => {

    setCon({
       name: form.current.name.value,
        email: form.current.email.value,
      number: form.current.number.value,
        profile: form.current.profile.value,
        scholl: form.current.scholl.value,
        study: form.current.titleOfStudy.value,
      dateStudy: form.current.dateOfStudy.value,
      dateStudy1: form.current.dateOfStudy1.value,
        language: form.current.language.value,
      positionTitle: form.current.position.value,
      dateBegin: form.current.begin.value,
        dateEnd: form.current.end.value,
        companyName: form.current.company.value,
        mainTask: form.current.task.value,
        extra:form.current.extra.value
    })

  }
    return (
      <div id='container'>
        <div id='vertical'></div>
          <hr id='horizontal'></hr>
        <Input form={form} e edit={edit }  con={con} handleSubmit={handleSubmit}  onChange={onChange} />
        <Text CV={CV} onEditingTask={onEditingTask}  />
      </div>
    );
}

export default App;
