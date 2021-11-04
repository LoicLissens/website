import * as React from 'react'

const ContactForm = () => {
    return (
        <div className='contact'>
          <h2>Contact</h2>
          <form id="form-contact"  className="form-contact">
            <p>Nom</p>
            <input id="name" type="text" name="name" maxLength={20}  />
            <p>Prenom</p>
            <input id="firstname" type="text" name="firstname" data-length="20"  />
            <p>Mail</p>
            <input id="email" type="text" name="email" data-length="40"  />
            <p>Message</p>
            <textarea id="message" name="message" rows={10}  ></textarea>
            <button id="send" type="submit" name="submit" value="submit">Envoyer</button>
            {/* <!-- honeypot -->
            <div style="display: none;">
              <label for="Name" >Name</label>
              <input type="text" name="nom" id="nom" value="" />
            </div> */}
          </form>
        </div>
    )
}
export default ContactForm