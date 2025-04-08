
import "./formComponentStyle.css";

const FormComponent = () => {
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
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" name="first-name" />
            </div>

            {/* Last Name */}
            <div className="form-field">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" name="last-name" />
            </div>


            {/* Email */}
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
          </div>


          <div className="form-row">
            {/* Gender */}
            <div className="form-field">
              <label>Gender</label>
              <div className="form-radio-field">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  defaultValue="Male"
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  defaultValue="Female"
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>

            {/* Date of Birth */}
            <div className="form-field">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" name="dob" />
            </div>

            {/* Contact */}
            <div className="form-field">
              <label htmlFor="contact">Contact</label>
              <input type="tel" id="contact" name="contact" />
            </div>
          </div>


          <div className="form-row">
            {/* Status */}
            <div className="form-field">
              <label>Status</label>
              <div className="form-radio-field">
                <input
                  type="radio"
                  id="active"
                  name="status"
                  defaultValue="Active"
                />
                <label htmlFor="active">Active</label>
                <input
                  type="radio"
                  id="inactive"
                  name="status"
                  defaultValue="Inactive"
                />
                <label htmlFor="inactive">Inactive</label>
              </div>
            </div>

            {/* Membership */}
            <div className="form-field">
              <label htmlFor="membership">Membership</label>
              <select id="membership" name="membership" >
                <option value="">Select</option>
                <option value="Basic">Basic</option>
                <option value="Premium">Premium</option>
                <option value="VIP">VIP</option>
              </select>
            </div>

            {/* Location */}
            <div className="form-field">
              <label htmlFor="location">Location</label>
              <select id="location" name="location">
                <option value="">Select</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
              </select>
            </div>

          </div>

          <h2>Car Details:</h2>

          <div className="form-row">

            {/* Car Model */}
            <div className="form-field">
              <label htmlFor="car-model">Car Model</label>
              <select id="car-model" name="car-model" >
                <option value="">Select</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Ford">Ford</option>
              </select>
            </div>

            {/* Transmission */}
            <div className="form-field">
              <label>Transmission Type</label>
              <div className="form-radio-field">
                <input
                  type="radio"
                  id="automatic"
                  name="transmission"
                  defaultValue="Automatic"
                />
                <label htmlFor="automatic">Automatic</label>
                <input
                  type="radio"
                  id="manual"
                  name="transmission"
                  defaultValue="Manual"
                />
                <label htmlFor="manual">Manual</label>
              </div>
            </div>


            {/* Fuel Type */}
            <div className="form-field">
              <label>Fuel Type</label>
              <div className="form-radio-field">
                <input
                  type="radio"
                  id="petrol"
                  name="fuel"
                  defaultValue="Petrol"
                />
                <label htmlFor="petrol">Petrol</label>
                <input type="radio" id="diesel" name="fuel" defaultValue="Diesel" />
                <label htmlFor="diesel">Diesel</label>
              </div>
            </div>


          </div>

          <div className="form-button">
            <button type="button" className="cancel-btn">Cancel</button>
            <button type="submit" className="submit-btn">Submit</button>
          </div>

        </div>
      </div>
    </>

  );
};

export default FormComponent;
