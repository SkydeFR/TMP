import React, { Component } from 'react';
import './Book.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Book extends Component {
  render() {
    return (
      <div>
        <h1>Réserver</h1>
        <div class="card">
          <Form>
            <FormGroup>
              <Label for="TypeEvent">Type d'événement</Label>
              <Input type="select" name="TypeEvent" id="TypeEvent" placeholder="Evénement">
                <option>Anniversaire</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="Epoque">Epoque</Label>
              <Input type="select" name="Epoque" id="Epoque" placeholder="Date">
                <option>...</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="Epoque">Destination</Label>
              <Input type="select" name="Destination" id="Destination" placeholder="Lieu">
                <option>...</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="Duree">Durée</Label>
              <Input type="select" name="Duree" id="Duree" placeholder="Durée">
                <option>...</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="DateReservee">Date à réserver</Label>
              <Input type="date" name="Date" id="Date" placeholder="DateReservee" />
            </FormGroup>

            <FormGroup>
              <Label for="NbPersonnes">Nombre de personne(s)</Label>
              <Input type="texte" name="NbPersonnes" id="NbPersonnes" placeholder="1" />
            </FormGroup>

            <Button>Réserver</Button>
          </Form>
        </div>
        <br />
      </div>
    );
  }
}

export default Book;
