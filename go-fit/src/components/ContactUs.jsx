export function ContactUs() {
  return (
    <div className="container contact">
      <h2 className="main-title text-center">CONTACT</h2>
      <div className="col-md-12">
            <div className="row">
              <div >
                <span>Call :</span>
                <p>+201151747091</p>
                <span>Email :</span>
                <p>Team@61.gmail.com</p>
              </div>


              <div className="col-md-4 mb-1">Connect Us : <br />
                <input name="name" placeholder="Name" className="contact-input mb-2" /><br />
                <input name="email" placeholder="Email" className="contact-input mb-2" /><br />
                <input
                  name="subject"
                  placeholder="Subject"
                  className="contact-input mb-2"
                /><br />
                <input type="textarea" name="message"
                  placeholder="Message"
                  className="contact-textarea mb-2"
                /> <br />
                <input className="form-btn" type="submit" value="Send Message" />
              </div>
            </div>
      </div>
    </div>
  );
}
