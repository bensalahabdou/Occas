import React from 'react';
import Link from 'next/link';
import { Button, Container, Form, FormControl, InputGroup } from 'react-bootstrap';
import { IoChevronBackCircle } from 'react-icons/io5';

import * as Styles from '../styles/sign.module.css'

function Signup() {
  return (
    <>
    <div className={Styles.sign}>
    <Link href="/"><a className={Styles.linkback}><IoChevronBackCircle />Acceuil</a></Link>
      <h1 className={Styles.signhead}>S&apos;inscrire</h1>
      <div className={Styles.signcontainer}>
      <Container fluid>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicUser">
          <Form.Label>Type de l&apos;utilisateur<span style={{color:"red"}}>*</span></Form.Label>  
          <Form.Select  as="select" size="sm">
            <option>Choisissez un type d&apos;utilisateur</option>
            <option>Particulier</option>
            <option>Professionel</option>
          </Form.Select>
          </Form.Group> 
          
          <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nom et prénom<span style={{color:"red"}}>*</span></Form.Label>  
          <Form.Control name="fullname" type="text" placeholder="Entrer votre nom et prénom"  size="sm" />
          </Form.Group>  

          <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Numèro de Téléphone<span style={{color:"red"}}>*</span></Form.Label>
              <InputGroup>
              <InputGroup.Text>+216</InputGroup.Text>
              <FormControl id="inlineFormInputGroupUsername" placeholder="Numèro de Téléphone" type="number" />
          </InputGroup>
          </Form.Group>  

          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Addresse email<span style={{color:"red"}}>*</span></Form.Label>
          <Form.Control name="email" type="email" placeholder="Entrer votre email"  size="sm"/>
          <Form.Text className="text-muted">
            Vous avez un compte : <Link href="/identification"><a>Se Connecter</a></Link>
          </Form.Text>
          </Form.Group>
      
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe<span style={{color:"red"}}>*</span></Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" size="sm" />
          </Form.Group>
          <Button variant="primary" type="submit">
          Envoyer
          </Button>
      </Form>
      </Container>
      </div>
    </div>
  </>
  )
}

export default Signup