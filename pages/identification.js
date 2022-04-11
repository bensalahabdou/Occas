import Link from 'next/link'
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { IoChevronBackCircle } from 'react-icons/io5';

import * as Styles from '../styles/sign.module.css';


function Signin() {
  return (
    <>
    <div className={Styles.sign}>
    <Link href="/"><a className={Styles.linkback}><IoChevronBackCircle />Acceuil</a></Link>
      <h1 className={Styles.signhead}>S&apos;identifier</h1>
      <div className={Styles.signcontainer}>
      <Container fluid>
              <Form >
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"  size="sm"/>
              <Form.Text className="text-muted">
                  Vous n&apos;avez pas un compte ? <Link href="/inscription"><a>Créer un compte</a></Link>
              </Form.Text>
              </Form.Group>
          
              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" size="sm" />
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

export default Signin