import React from 'react'
import BannerImage from '../assets/banner.png'
import '../Styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${BannerImage})`}} >

      </div>
      <div className='rightSide'>
          <h1>Bizimle İletişime Geçin</h1>
          <form> 
            <label>Ad Soyad</label>
            <input type="text" name='name' placeholder='Lütfen Adınızı ve Soyadınızı Giriniz'/>
          </form>
          <form> 
            <label>Email</label>
            <input type="email" name='email' placeholder='Lütfen Emailinizi Giriniz'/>
          </form>
          <form> 
            <label>Mesajınız</label>
            <textarea type="text" name='message' rows="6" placeholder='Lütfen Mesajınızı Giriniz'/>
          </form>
      </div>
    </div>
  )
}

export default Contact