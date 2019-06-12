import React from "react";
import Container from "../elements/Container";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";

const LastScreen = () => (
    <Container>
        <h1>Kijk omhoog</h1>
        <p>
           Vul je mail voor meer info over hoe je 'greenwashing' kunt herkennen.
        </p>
        <p>
            <label>
                <input type="text" name="name" />
            </label>
        </p>
        <ButtonGroup>
            <Button showDelay={1000} writeFile="1" to="/" primary>
                Versturen
            </Button>
            <Button showDelay={1000} writeFile="1" to="/">
                Nee bedankt
            </Button>
        </ButtonGroup>
    </Container>
);

export default LastScreen;
