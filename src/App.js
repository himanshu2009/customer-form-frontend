import React, { useState, useEffect } from "react";
import "./App.css";
import PersonDetails from "./components/PersonDetails";
import * as Yup from "yup";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState(

    {
      companyName: '',
      address: '',
      telephoneNumber: '',
      faxNumber: '',
      emailAddress: '',
      websiteAddress: '',
      nameAndTitle: '',
      directEmailAddress: '',
      telephoneNoOfRepresentativeDirect: '',
      telephoneNoOfRepresentativeMobile: '',
      establishedDate: '',
      detailsOfService: '',
      consent: ''
    })

  //     Fax Number
  // Email Address
  // Website Address
  // Name and Title of Company Representative
  // Direct E-mail Address of the Company
  // Telephone Numbers Of Company Representative
  // Direct Number
  // Mobile Number
  // Date Company was established(min. 3 years required)

  // dd-mm-yyyy
  // Gross Annual Sales for the Last Three Years
  // Year
  // CHF
  // Year
  // CHF
  // Year
  // CHF
  // Details Of Service
  // Geographic service area(check one)



  const [grossAnnualSales, setgrossAnnualSales] = useState({
    year1: "",
    chf1: "",

    year2: "",
    chf2: "",

    year3: "",
    chf3: "",
  });

  const [allRadioButtons, setAllRadioButtons] = useState({
    geographicService: "",
    businessType: "",
    legalStructure: "",
  });







  const submitForm = async (data) => {
    // const error2 = validationSchema.validate(data);
    // console.log("error2", error2)
    try {
      // await validationSchema.validate(data, { abortEarly: false });
      const reponse = await axios.post("/api/v1/submitData", data)
      console.log("response", reponse)

    }
    catch (error) {
      console.log("error aya", error.inner)
    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }))

    // setFormdata(" ")
  }


  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);


  // console.log("formdata", formData)

  return (
    <div className="App">


      <PersonDetails formData={formData} setAllRadioButtons={setAllRadioButtons} allRadioButtons={allRadioButtons} grossAnnualSales={grossAnnualSales} setgrossAnnualSales={setgrossAnnualSales} setFormdata={setFormData} onSubmit={submitForm} onChangeHandler={handleChange} />
    </div>
  );


}

export default App
