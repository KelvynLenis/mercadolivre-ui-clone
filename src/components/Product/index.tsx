import React from 'react';

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';
import tshirtImage from '../../assets/tshirt.png';
import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem ipsum</p>
        <p className="description">
          Receba o produto que você está esperando ou devolvemos o seu dinheiro
        </p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">
          Sem garantia.
        </p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nunc pretium porttitor neque, a mattis purus congue at. 
      Phasellus tincidunt diam lorem, quis fringilla magna consequat viverra. Vestibulum sollicitudin ligula sed interdum fermentum. 
      In nisi dui, volutpat vel laoreet vitae, lacinia in ante. 
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
    </p>
  </Description>
);

export default Product;