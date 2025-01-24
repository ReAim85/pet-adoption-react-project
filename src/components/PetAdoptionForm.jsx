import React, { useState } from 'react'
import '../utils/validation.js'
import { validation } from '../utils/validation'
import AdopterData from './AdopterData.jsx'

const PetAdoptionForm = () => {

  const [formData, setFormData] = useState([])
  const [value, setValues] = useState({
    petName: "",
    petType: "",
    breed: "",
    adopterName: "",
    email: "",
    phone: ""
  });
  
  const [showTable, setShowTable] = useState(false);
  const {petName, petType, breed, adopterName, email, phone} = value;

  const [errors, setErrors] = useState({
    petName: "",
    petType: "",
    breed: "",
    adopterName: "",
    email: "",
    phone: ""
  })

  const handleChange = (event) => {
    const {name, value} = event.target;
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  
  let errorsCopy = { ...errors };
  const errorR = validation(name, value, errorsCopy);
  setErrors(errorR);
}

const handleSubmit = () => {
  console.log({
    petName,
    breed,
    email,
    phone,
    adopterName    
  })

  if (!petName || !breed || !email || !phone || !adopterName ){
    alert("please fill all the fields")
    return
  }
  
  const hasErrors = Object.values(errors).some((val) => val);
        if (hasErrors) {
            alert("Please fill out all fields");
            return;
        }

  const data = { petName, petType, breed, adopterName, email, phone };
  setFormData((prevData) => [...prevData, data]);
  setShowTable(true);
  setValues({
    petName: "",
    petType: "",
    breed: "",
    adopterName: "",
    email: "",
    phone: ""
  });
  setErrors({
    petName: "",
    petType: "",
    breed: "",
    adopterName: "",
    email: "",
    phone: ""
  })
  }

  const handleGoBack = () => setShowTable(!showTable)
if (!showTable){
  return (
      <div className='form'>
        <div>
          <label htmlFor="petName">Pet Name</label>
          <input 
          type="text" 
          name="petName" 
          placeholder='Pet Name'
          value={petName}
          onChange={handleChange}
          />
          <small>{errors.petName}</small>
        </div>
        <div>
          <label htmlFor="petType">Pet Type</label>
          <select value={petType} name="petType" onChange={handleChange}>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Bird">Bird</option>
          </select>
        </div>
        <div>
          <label htmlFor="breed">Breed</label>
          <input 
          type="text" 
          name="breed"
          value={breed}
          onChange={handleChange} 
          />
          <small>{errors.breed}</small>
        </div>
        <div>
          <label htmlFor="adopterName">Your Name</label>
          <input 
          type="text" 
          name="adopterName"
          value={adopterName}
          onChange={handleChange} 
          />
          <small>{errors.adopterName}</small>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
          type="text" 
          name="email"
          value={email}
          onChange={handleChange} 
          />
          <small>{errors.email}</small>
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input 
          type="text" 
          name="phone"
          value={phone}
          onChange={handleChange} 
          />
          <small>{errors.phone}</small>
        </div>
        <div>
          <button type='Submit' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
  )
}
  return <AdopterData formData={formData} handleGoBack={handleGoBack}></AdopterData>
}

export default PetAdoptionForm