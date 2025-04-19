
import { useNavigate } from "react-router-dom";   // Hook to programmatically navigate between routes
import "./formComponentStyle.css";  // Importing CSS for styling the form
import { FormType, FormValidationType } from "../../interface/interface";   // Interfaces for typing form data and validation messages 
import { useState } from "react";  // React hooks for state and lifecycle
import { carmodelData, locationData, membershipData, submittedFormData, Validators } from "../../constant/constant";    // Static data and validation functions


// FormComponent handles new user registration form logic, validation, and submission
const FormComponent = () => {

  const navigate = useNavigate();  // Used to redirect to different pages

  // Initial structure for form data
  const initialFormData: FormType = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    contact: "",
    status: null,
    membershipId: 0,
    membership: "",
    locationId: 0,
    location: "",
    carModelId: 0,
    carModel: "",
    transmissionType: "",
    fuelType: ""
  }

  // Initial structure for form validation messages
  const initialValidation: FormValidationType = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    contact: "",
    status: "",
    membership: "",
    location: "",
    carModel: "",
    transmissionType: "",
    fuelType: ""
  };

  // State to track form data
  const [formData, setFormData] = useState<FormType>(initialFormData);

  // State to track validation errors
  const [validation, setValidation] = useState(initialValidation);


  // Handles form field value changes
  const handleData = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    let updatedValue: string | number | boolean = value;

    // Convert specific field values to correct types
    if (name === "status") {
      updatedValue = value === "Active";
    } else if (["locationId", "membershipId", "carModelId"].includes(name)) {
      updatedValue = Number(value);
    }

    let updatedForm = {
      ...formData,
      [name]: updatedValue,
    };

    // Update readable type/name based on selected ID values
    if (name === "membershipId") {
      const selected = membershipData.find(item => item.membershipId === Number(value));
      if (selected) {
        updatedForm.membership = selected.membershipType;
      }
    }

    if (name === "locationId") {
      const selected = locationData.find(item => item.locationId === Number(value));
      if (selected) {
        updatedForm.location = selected.location;
      }
    }

    if (name === "carModelId") {
      const selected = carmodelData.find(item => item.carmodelId === Number(value));
      if (selected) {
        updatedForm.carModel = selected.carModel;
      }
    }

    // setFormData((prev) => ({
    //   ...prev,
    //   [name]: updatedValue,
    // }));

    // Update form state and trigger field-level validation
    setFormData(updatedForm);
    validate(event);

  };

  // Validates form fields either on change (if event is passed) or on submit
  const validate = (event?: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    let valid = true;

    // Field-level validation during user input
    if (event) {
      if (event.target.name == "firstName") {
        if (event.target.value.trim() == "" || (!(Validators.isValidName(event.target.value)))) {
          setValidation((prev) => ({ ...prev, firstName: "Enter Valid First Name" }))
          valid = false;
        }
        else {
          setValidation((prev) => ({ ...prev, firstName: "" }))
        }
      }

      if (event.target.name == "lastName") {
        if (event.target.value.trim() == "" || !(Validators.isValidName(event.target.value))) {
          setValidation((prev) => ({ ...prev, lastName: "Enter Valid Last Name" }))
          valid = false;
        }
        else {
          setValidation((prev) => ({ ...prev, lastName: "" }))
        }
      }

      if (event.target.name == "email") {
        if (event.target.value.trim() == "" || !(Validators.isValidEmail(event.target.value))) {
          setValidation((prev) => ({ ...prev, email: "Enter Valid Email" }))
          valid = false;
        }
        else {
          setValidation((prev) => ({ ...prev, email: "" }))
        }
      }

      if (event.target.name == "gender") {
        setValidation((prev) => ({ ...prev, gender: "" }))
      }

      if (event.target.name == "dateOfBirth") {
        setValidation((prev) => ({ ...prev, dateOfBirth: "" }))
      }

      if (event.target.name == "contact") {
        if (event.target.value.trim() == "" || !(Validators.isValidContact(event.target.value))) {
          setValidation((prev) => ({ ...prev, contact: "Enter Valid Contact Number" }))
          valid = false;
        }
        else {
          setValidation((prev) => ({ ...prev, contact: "" }))
        }
      }

      if (event.target.name == "status") {
        setValidation((prev) => ({ ...prev, status: "" }))
      }

      if (event.target.name == "membershipId") {
        setValidation((prev) => ({ ...prev, membership: "" }))
      }

      if (event.target.name == "locationId") {
        setValidation((prev) => ({ ...prev, location: "" }))
      }

      if (event.target.name == "carModelId") {
        setValidation((prev) => ({ ...prev, carModel: "" }))
      }

      if (event.target.name == "transmissionType") {
        setValidation((prev) => ({ ...prev, transmissionType: "" }))
      }

      if (event.target.name == "fuelType") {
        setValidation((prev) => ({ ...prev, fuelType: "" }))
      }


    }
    // Mandatory field validation on sumbit.
    // Form-level validation on submit
    else {
      if (formData.firstName === "") {
        setValidation((prev) => ({ ...prev, firstName: "Enter First Name" }))
        valid = false;
      }
      if (formData.lastName === "") {
        setValidation((prev) => ({ ...prev, lastName: "Enter Last Name" }))
        valid = false;
      }

      if (formData.email === "") {
        setValidation((prev) => ({ ...prev, email: "Enter Email" }))
        valid = false;
      }

      if (formData.gender === "") {
        setValidation((prev) => ({ ...prev, gender: "Choose Gender" }))
        valid = false;
      }

      if (formData.dateOfBirth === "") {
        setValidation((prev) => ({ ...prev, dateOfBirth: "Choose Date of Birth" }))
        valid = false;
      }

      if (formData.contact === "") {
        setValidation((prev) => ({ ...prev, contact: "Enter Contact Number" }))
        valid = false;
      }

      if (formData.status == null) {
        setValidation((prev) => ({ ...prev, status: "Choose Status" }))
        valid = false;
      }

      if (formData.membershipId == 0) {
        setValidation((prev) => ({ ...prev, membership: "Choose Membership" }))
        valid = false;
      }

      if (formData.locationId == 0) {
        setValidation((prev) => ({ ...prev, location: "Choose Location" }))
        valid = false;
      }

      if (formData.carModelId == 0) {
        setValidation((prev) => ({ ...prev, carModel: "Choose CarModel" }))
        valid = false;
      }

      if (formData.transmissionType === "") {
        setValidation((prev) => ({ ...prev, transmissionType: "Select Transmission Type" }))
        valid = false;
      }

      if (formData.fuelType === "") {
        setValidation((prev) => ({ ...prev, fuelType: "Select Fuel Type" }))
        valid = false;
      }
    }
    return valid;
  }

  // Handles form submission, validates data, stores to constant, and navigates to table
  const handleSubmit = () => {
    if (!validate()) return;
    submittedFormData.push(formData);
    console.log("whole data", submittedFormData);
    navigate("/table");
  };

  // Handles cancel/reset by restoring initial form and validation state
  const handleCancel = () => {
    setFormData(initialFormData);
    setValidation(initialValidation);
  };

  return (
    <>
      <div className="main-container">
        <div className="form-container">
          <div className="form-heading">
            <h1>New Registration</h1>
          </div>

          <h2>Basic Information</h2>

          <div className="form-row">
            {/* First Name */}
            <div className="form-field">
              <label htmlFor="first-name">First Name <span>*</span></label>
              <input type="text"
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleData}
              />
              <span className="validation">{validation.firstName}</span>
            </div>


            {/* Last Name */}
            <div className="form-field">
              <label htmlFor="last-name">Last Name <span>*</span></label>
              <input type="text"
                id="last-name"
                name="lastName"
                value={formData.lastName}
                onChange={handleData}
              />
              <span className="validation">{validation.lastName}</span>
            </div>

            {/* Email */}
            <div className="form-field">
              <label htmlFor="email">Email <span>*</span></label>
              <input type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleData} />
              <span className="validation">{validation.email}</span>
            </div>
          </div>

          <div className="form-row">
            {/* Gender */}
            <div className="form-field">
              <label>Gender <span>*</span></label>
              <div className="form-radio-field">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleData}
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleData}
                />
                <label htmlFor="female">Female</label>
              </div>
              <span className="validation">{validation.gender}</span>
            </div>

            {/* Date of Birth */}
            <div className="form-field">
              <label htmlFor="dob">Date of Birth <span>*</span></label>
              <input type="date"
                id="dob"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleData} />
              <span className="validation">{validation.dateOfBirth}</span>
            </div>

            {/* Contact */}
            <div className="form-field">
              <label htmlFor="contact">Contact <span>*</span></label>
              <input type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleData} />
              <span className="validation">{validation.contact}</span>
            </div>
          </div>

          <div className="form-row">
            {/* Status */}
            <div className="form-field">
              <label>Status <span>*</span></label>
              <div className="form-radio-field">
                <input
                  type="radio"
                  id="active"
                  name="status"
                  value="Active"
                  checked={formData.status === true}
                  onChange={handleData}
                />
                <label htmlFor="active">Active</label>
                <input
                  type="radio"
                  id="inactive"
                  name="status"
                  value="Inactive"
                  checked={formData.status === false}
                  onChange={handleData}
                />
                <label htmlFor="inactive">Inactive</label>
              </div>
              <span className="validation">{validation.status}</span>

            </div>

            {/* Membership */}
            <div className="form-field">
              <label htmlFor="membership">Membership <span>*</span></label>
              <select id="membership"
                name="membershipId"
                value={formData.membershipId}
                onChange={handleData}
              >
                <option value="">Select</option>

                {membershipData.map((data, key) => (
                  <option value={data.membershipId}>{data.membershipType}</option>
                ))}

              </select>
              <span className="validation">{validation.membership}</span>
            </div>

            {/* Location */}
            <div className="form-field">
              <label htmlFor="location">Location <span>*</span></label>
              <select id="location"
                name="locationId"
                value={formData.locationId}
                onChange={handleData}
              >
                <option value="">Select</option>
                {locationData.map((data, key) => (
                  <option value={data.locationId}>{data.location}</option>
                ))}
              </select>
              <span className="validation">{validation.location}</span>

            </div>
          </div>

          <h2>Car Details:</h2>

          <div className="form-row">

            {/* Car Model */}
            <div className="form-field">
              <label htmlFor="carModel">Car Model <span>*</span></label>
              <select id="carModel"
                name="carModelId"
                value={formData.carModelId}
                onChange={handleData}
              >
                <option value="">Select</option>
                {carmodelData.map((data, key) => (
                  <option value={data.carmodelId}>{data.carModel}</option>
                ))}
              </select>
              <span className="validation">{validation.carModel}</span>
            </div>

            {/* Transmission */}
            <div className="form-field">
              <label>Transmission Type <span>*</span></label>
              <div className="form-radio-field">
                <input
                  type="radio"
                  id="automatic"
                  name="transmissionType"
                  value="Automatic"
                  checked={formData.transmissionType === "Automatic"}
                  onChange={handleData}
                />
                <label htmlFor="automatic">Automatic</label>
                <input
                  type="radio"
                  id="manual"
                  name="transmissionType"
                  value="Manual"
                  checked={formData.transmissionType === "Manual"}
                  onChange={handleData}
                />
                <label htmlFor="manual">Manual</label>
              </div>
              <span className="validation">{validation.transmissionType}</span>

            </div>

            {/* Fuel Type */}
            <div className="form-field">
              <label>Fuel Type <span>*</span></label>
              <div className="form-radio-field">
                <input
                  type="radio"
                  id="petrol"
                  name="fuelType"
                  value="Petrol"
                  checked={formData.fuelType === "Petrol"}
                  onChange={handleData}
                />
                <label htmlFor="petrol">Petrol</label>
                <input
                  type="radio"
                  id="diesel"
                  name="fuelType"
                  value="Diesel"
                  checked={formData.fuelType === "Diesel"}
                  onChange={handleData}
                />
                <label htmlFor="diesel">Diesel</label>
              </div>
              <span className="validation">{validation.fuelType}</span>

            </div>

          </div>

          {/* Buttons - Submit & Cancel */}
          <div className="form-button">
            <button type="button" className="cancel-btn" onClick={handleCancel} >Cancel</button>
            <button type="button" className="submit-btn" onClick={handleSubmit}>Submit</button>
          </div>

        </div>
      </div>
    </>

  );
};

export default FormComponent;
