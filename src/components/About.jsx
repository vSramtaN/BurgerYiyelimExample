import React from 'react'
import BannerImage from '../assets/banneryeni.jpg'
import '../Styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}></div>
          <div className='aboutBottom'>
            <h1>Hakkımızda</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim omnis modi voluptates doloribus iste eligendi eaque dolore cupiditate magni rerum ut quibusdam, sunt quasi sequi commodi at exercitationem quo voluptas.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, deleniti nostrum! Animi quae magni earum distinctio deleniti iusto aliquam sapiente rem repellendus perferendis, tenetur pariatur facere! Necessitatibus dignissimos amet incidunt.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsam ipsa, accusamus voluptatem fugiat eligendi omnis in illum ea! Quo repellendus quasi id! Nihil a nam vel aliquid. Porro, sint?
            </p>
          </div>
    </div>
  )
}

export default About