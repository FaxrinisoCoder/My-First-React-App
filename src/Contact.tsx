import contact_photo from './assets/ghhgnhg_1.png'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <div className="continer23">
        <div className="team_texts">
          <h2 className="team_title2">Contact Us</h2>
          <p className="team_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="continer2">
        <div className="grid_contact">
          <div className="contact_left">
            <form className="form">
              <label className='label' htmlFor="name">Name</label>
              <input className='input' type="text" name="name" id="name" />
              <label className='label' htmlFor="email">Email</label>
              <input className='input' type="text" name="email" id="email" />
              <label className='label' htmlFor="massage">Message</label>
              <input className='input input2' type="text" name="massage" id="massge" />
              <button  type="submit" className="btn_contact">
                Submit
              </button>
            </form>
          </div>
          <div className="contact_right">
            <img className="contact_photo" src={contact_photo} alt="pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
