import React from 'react';
// import styled from 'styled-components';

import SupplierOptions from '../components/SupplierOptions';
import data from '../data.json';
import {
  Background,
  ButtonContainer,
  MainContainer,
  StyledQuestionHeader,
} from '../components/Styled';
// const timesaver = data.timesavers[category];
// const category = data.timesavers.category;

const suppliers = data.timesavers[0].suppliers;

export default function SupplierPage() {
  return (
    <MainContainer>
      <Background>
        <StyledQuestionHeader
          style={{
            transform: 'none',
            textTransform: 'uppercase',
            marginBottom: '50px',
            marginTop: '50px',
          }}
        >
          {data.timesavers[0].category}
        </StyledQuestionHeader>
        <ButtonContainer>
          {suppliers.map((supplier, index) => (
            <SupplierOptions
              key={supplier.description}
              hexa={supplier.hexa}
              title={supplier.title}
              description={supplier.description}
              image={supplier.image}
              href={supplier.href}
            />
          ))}
        </ButtonContainer>
      </Background>
    </MainContainer>
  );
}
