import './App.css';
import * as yup from 'yup';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import schema from './formSchema';
import MemberForm from './Components/MemberForm'
import Member from './Components/Member'

const initialFormValues = {
  name: '',
  email: '', 
//name and email reset upon form submission, password does not for some reason.  
  password:'',
  termsOfService: false,
}

const initialFormErrors = {
  name: '',
  email: '', 
  password:'',
}
const initialMembers = []
const initialDisabled = true

export default function App(){
  const [members, setMembers] = useState(initialMembers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getMembers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setMembers(res.data);
      }).catch(err => console.error(err))
  }
  const postNewMember = newMember => {
    axios.post('https://reqres.in/api/users', newMember)
    .then(res =>{
      setMembers([res.data, ...members]);
      setFormValues(initialFormValues);
    }).catch(err => {
      setFormValues(initialFormValues);
    })
  }
  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(()=> setFormErrors({...formErrors,[name]:''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }
  const inputChange = (name,value) => {
    validate(name,value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const formSubmit = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    postNewMember(newMember);
  }
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  
  
  return (
    <div className='container'>
      <header><h1>User Onboarding</h1></header>

      <MemberForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        members?.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  )


}
