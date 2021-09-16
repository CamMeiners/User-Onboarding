import React from 'react'

export default function MemberForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a User</h2>

        {/* 🔥 DISABLE THE BUTTON */}
        <button id='submitBtn' disabled={disabled}>submit</button>

        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Name:&nbsp;
          <input
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>

        <label>&nbsp;Email:&nbsp;
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>
        <label>&nbsp;Password:&nbsp;
          <input
            type='text'
            onChange={onChange}
            value={values.password}
            name='password'
          >
          </input>
        </label>
        <label>&nbsp;Terms of Service
          <input 
            type="checkbox"
            name="termsOfService"
            checked={values.termsOfService}
            onChange={onChange}
          />
        </label>
      </div>

      
    </form>
  )
}
