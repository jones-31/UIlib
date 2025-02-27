import "./Home.css";
import { useState } from "react";


function Home() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    const formData = new FormData(e.target);
    formData.append("access_key", "e2e44643-7988-47f0-924b-f8b43641ad1f");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    console.log(formData);
    const result = await response.json();
    console.log(response);
    if (response.ok) {
      setMessage("Form submitted successfully!");
      e.target.reset(); // Reset form after submission
    } else {
      setMessage("Error: " + (result.message || "Something went wrong!"));
    }
  };

  return (
    <>
      <div className="landingsearch" id="home">
        <div className="searchsec">
          <h1>Some Text</h1>
          <br />
          <br />
          <div className="input-box">
            <i className="fa-solid fa-magnifying-glass ileft"></i>
            <input type="text" placeholder="Search here..." />
            <i className="fa-solid fa-magnifying-glass iright"></i>
          </div>
        </div>
      </div>
      <div className="aboutsec" id="about">
        <h1>About</h1>
      </div>
      
      <div className="contactsec" id="contact">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="apikey"
              value="e2e44643-7988-47f0-924b-f8b43641ad1f"
            />

            <h1>Contact Us</h1>
            <br />
            <br />
            <div className="input-field">
              <input type="text" name="name" required spellcheck="false" />
              <label>Name</label>
            </div>

            <div className="input-field">
              <input type="text" name="company_name" required spellcheck="false" />
              <label>Company Name</label>
            </div>

            <div className="input-field">
              <input type="text" name="company_email" required spellcheck="false" />
              <label>Contact Email</label>
            </div>

            <div className="input-field">
              <textarea type="text" name="contact_reason" required spellcheck="false" />
              <label>Contact Reason</label>
            </div>

            <div className="btnpanel">
              <button type="submit">Submit</button>
            </div>

            {message && <p>{message}</p>}
          </form>
        </div>

        <div className="map">
          <br />
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093154!2d144.95373531531894!3d-37.8162797420216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3e1d7fd%3A0x2b2fa35a0653db8b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633579553345!5m2!1sen!2sau"
            width="100%"
            height="60%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>

<bsdk-button className="btn btn-primary" onclick={()=>alert('Button Clicked!')}>Click Me</bsdk-button>
<button className="btn btn-success"> normal button</button>
        </div>
      </div>
    </>
  );
}

export default Home;
