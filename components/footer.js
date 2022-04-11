import React from 'react'
import { BsLinkedin, BsTwitter,BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';


const Footer = () => {
  return (
<>
   <div className="container-fluid bg-dark">
        <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
            <div className="col">
              <a href='#' className="p-3 text-white">Occas Immoblier</a>
            </div>
            <div className="col">
                <ul className="p-3 ">
                    <li><a href='#'>Acceuil</a></li>
                    <li><a href='#'>Immoblier</a>
                    <ul className="p-3 ">
                    <li><a href='#'>Neuf</a></li>
                    <li><a href='#'>Usagé</a></li>
                    <li><a href='#'>Tout</a></li>
                    <li><a href='#'>Estimation</a></li>
                    </ul>
                    </li>
                    <li><a href='#'>Accessoire</a></li>
                    <li><a href='#'>Blog</a></li>
                </ul>
            </div>
            <div className="col">
            <ul className="p-3">
                    <li><a className="facebook" href='#'><BsFacebook /> facebook</a></li>
                    <li><a className="twitter" href='#'><BsTwitter /> twitter</a></li>
                    <li><a className="linkedin" href='#'><BsLinkedin /> Linkedin</a></li>
                    <li><a className="instagram" href='#'><BsInstagram /> Instagram</a></li>
                    <li><a className="whatsapp" href='#'><BsWhatsapp /> whatsapp</a></li>
                </ul>
            </div>
        </div>
        <hr className='bg-white' style={{width:'80%', margin:'0 auto'}}/>
        <p className='text text-center text-white'>
           &copy; copyright 2022. Tous les droits sont réservés.
        </p>
   </div> 
</>
  )
}

export default Footer ;