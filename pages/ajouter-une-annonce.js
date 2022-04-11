import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap'

import { IoChevronBackCircle } from "react-icons/io5"

function Announcement() {
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')


  console.log(type)
  console.log(category)
  return (
    <>
    <Link href="/"><a style={{color: 'black'}}><IoChevronBackCircle />Acceuil</a></Link>
      <h1 style={{textAlign:'center', marginBottom:'10px'}}>Votre Annonce</h1>
      <div style={{width:'50vw', margin:'20px auto'}}>
      <Container fluid>
              <Form >
              <Form.Group className="mb-3" onChange={(e)=> setType(e.target.value)}>
              <Form.Label>Votre offre<span style={{color:"red"}}>*</span></Form.Label>  
              <Form.Check name="offer" type="radio" value="aLouer" label="A Louer" />
              <Form.Check name="offer" type="radio"  value="aVendre" label="A Vendre"  />
              </Form.Group>  

              <Form.Group className="mb-3" onChange={(e)=> setCategory(e.target.value)}>
              <Form.Label>Catégorie<span style={{color:"red"}}>*</span></Form.Label>  
              <Form.Select  as="select" size='sm'>
                <option>Choisissez la Catégorie</option>
                <option name="apartement">Apartement</option>
                <option name="maison">Maison</option>
                <option name="terrain">Terrain</option>
                <option name="local-commercial">Local Commercial</option>
                <option name="bureau">Bureau</option>
                <option name="autre">Autre</option>
              </Form.Select>
              </Form.Group>  

              { category === 'Apartement' &&
              <>
              <Form.Group className="mb-3">
                <Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                      Surface
                    </Form.Label>
                    <Form.Control name="surface" className="mb-2" type="number" placeholder="Entrer la surface en m²" id="inlineFormInput" size='sm' />
                  </Col>
               
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                      salle de bain
                    </Form.Label>
                    <Form.Control name="salle-de-bain" className="mb-2" type="number" placeholder="Nombre salle de bain" id="inlineFormInput" size='sm' />
                  </Col>
                 
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                      chambre
                    </Form.Label>
                    <Form.Control name="chambre" className="mb-2" type="number" placeholder="Nombre de chambre" id="inlineFormInput" size='sm' />
                  </Col>
                  
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                      totale pièce
                    </Form.Label>
                    <Form.Control name="totale-pièce" className="mb-2" type="number" placeholder="Totale pièce" id="inlineFormInput" size='sm' />
                  </Col>
                  </Row>
              </Form.Group> 

              <Form.Group className="mb-3"> 
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                      détails supplémentaire
                </Form.Label>
               <Form.Check name="options" type="checkbox" value="Vue mer" label="Vue mer" />
               <Form.Check name="options" type="checkbox"  value="Jardin" label="Jardin"  />
               <Form.Check name="options" type="checkbox" value="Piscine" label="Piscine" />
               <Form.Check name="options" type="checkbox"  value="Chauffage centrale" label="Chauffage centrale"  />
               <Form.Check name="options" type="checkbox" value="Climatiseur" label="Climatiseur" />
               <Form.Check name="options" type="checkbox"  value="Ascenseur" label="Ascenseur"  />
              </Form.Group> 
              </>
              }

              { category === 'Maison' &&
              <>
              <Form.Group className="mb-3">
                <Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                      Surface
                    </Form.Label>
                    <Form.Control name="surface" className="mb-2" type="number" placeholder="Entrer la surface en m²" id="inlineFormInput" size='sm' />
                  </Col>
               
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                      salle de bain
                    </Form.Label>
                    <Form.Control name="salle-de-bain" className="mb-2" type="number" placeholder="Nombre salle de bain" id="inlineFormInput" size='sm' />
                  </Col>
                 
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                      chambre
                    </Form.Label>
                    <Form.Control name="chambre" className="mb-2" type="number" placeholder="Nombre de chambre" id="inlineFormInput" size='sm' />
                  </Col>
                  
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                      totale pièce
                    </Form.Label>
                    <Form.Control name="totale-pièce" className="mb-2" type="number" placeholder="Totale pièce" id="inlineFormInput" size='sm' />
                  </Col>
                  </Row>
              </Form.Group> 

              <Form.Group className="mb-3"> 
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                      détails supplémentaire
                </Form.Label>
               <Form.Check name="options" type="checkbox" value="Vue mer" label="Vue mer" />
               <Form.Check name="options" type="checkbox"  value="Jardin" label="Jardin"  />
               <Form.Check name="options" type="checkbox" value="Piscine" label="Piscine" />
               <Form.Check name="options" type="checkbox"  value="Chauffage centrale" label="Chauffage centrale"  />
               <Form.Check name="options" type="checkbox" value="Climatiseur" label="Climatiseur" />
               <Form.Check name="options" type="checkbox"  value="Ascenseur" label="Ascenseur"  />
              </Form.Group> 
              </>
              }

              { category === 'Terrain' &&
              <Form.Group className="mb-3">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                      Surface
                    </Form.Label>
                    <Form.Control name="surface" className="mb-2" type="number" placeholder="Entrer la surface en m²" id="inlineFormInput" size='sm' />
              </Form.Group> 
              }

{ (category === 'Local Commercial' || category === 'Bureau') &&
              <>
              <Form.Group className="mb-3">
                <Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                      Surface
                    </Form.Label>
                    <Form.Control name="surface" className="mb-2" type="number" placeholder="Entrer la surface en m²" id="inlineFormInput" size='sm' />
                  </Col>
               
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                      salle de bain
                    </Form.Label>
                    <Form.Control name="salle-de-bain" className="mb-2" type="number" placeholder="Nombre salle de bain" id="inlineFormInput" size='sm' />
                  </Col>
                 
                  {/* <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                      chambre
                    </Form.Label>
                    <Form.Control name="chambre" className="mb-2" type="number" placeholder="Nombre de chambre" id="inlineFormInput" size='sm' />
                  </Col> */}
                  
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                      totale pièce
                    </Form.Label>
                    <Form.Control name="totale-pièce" className="mb-2" type="number" placeholder="Totale pièce" id="inlineFormInput" size='sm' />
                  </Col>
                  </Row>
              </Form.Group> 

              <Form.Group className="mb-3"> 
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                      détails supplémentaire
                </Form.Label>
               <Form.Check name="options" type="checkbox"  value="Chauffage centrale" label="Chauffage centrale"  />
               <Form.Check name="options" type="checkbox" value="Climatiseur" label="Climatiseur" />
               <Form.Check name="options" type="checkbox"  value="Ascenseur" label="Ascenseur"  />
              </Form.Group> 
              </>
              }

              <Form.Group className="mb-3">
              <Form.Label>Titre de votre annonce<span style={{color:"red"}}>*</span></Form.Label>
              <Form.Control name="title-announcement" type="text" placeholder="Entrer votre Titre d'annonce"  size='sm'/>
              </Form.Group>
              
              <Form.Group className="mb-3">
              <Form.Label>Description<span style={{color:"red"}}>*</span></Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Entrer votre description de l'annonce"  size='sm'/>
              </Form.Group>
          
              <Form.Group className="mb-3">
              <Form.Label>Prix<span style={{color:"red"}}>*</span></Form.Label>
              <InputGroup>
              <FormControl id="inlineFormInputGroupUsername" placeholder="Prix" />
              <InputGroup.Text>DT</InputGroup.Text>
              </InputGroup>
              </Form.Group>

              <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Télécharger un ou plusieurs fichiers<span style={{color:"red"}}>*</span></Form.Label>
              <Form.Control type="file" multiple />
              </Form.Group>

              <Form.Group className="mb-3">
              <Form.Label>Ville<span style={{color:"red"}}>*</span></Form.Label>  
              <Form.Select  as="select" size='sm'>
                <option>Choisissez une ville</option>
                <option name="apartement">La Marsa</option>
                <option name="maison">Sidi Bou Said</option>
                <option name="terrain">Gammarth</option>
                <option name="local-commercial">Sidi Daoud</option>
                <option name="bureau">Carthage</option>
                <option name="autre">Autre</option>
              </Form.Select>
              </Form.Group> 

              <Form.Group className="mb-3">
              <Form.Label>Adresse exact<span style={{color:"red"}}>*</span></Form.Label>
              <Form.Control name="announcement-title" type="text" placeholder="Entrer l'adresse de l'annonce"  size='sm'/>
              </Form.Group>

              <Button variant="primary" type="submit">
              Envoyer
              </Button>
          </Form>
      </Container>
      </div>
  </>
  )
}

export default Announcement