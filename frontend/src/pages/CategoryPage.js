import React from 'react';
import data from '../data.json';
import {
  Background,
  ButtonContainer,
  MainContainer,
  StyledLink,
  StyledQuestionHeader,
} from '../components/Styled';

const timesavers = data.timesavers;
// const suppliers = data.timesavers[0].suppliers;

const CategoryOptions = ({ category, index }) => (
  <div>
    <StyledLink to="/suppliers">
      <span>{category}</span>
    </StyledLink>
  </div>
);

// const SupplierOptions = ({ title, description, href }) => (
//   <>
//     <div>
//       <a href={href}>
//         <StyledButtonOptions>
//           <span>{title}</span>
//           <div style={{ display: 'flex', flexDirection: 'row' }}>
//             <span style={{ fontSize: '14px' }}>fr</span>
//             <span>{description}</span>
//           </div>
//         </StyledButtonOptions>
//       </a>
//     </div>
//   </>
// );

export default function CategoryPage() {
  return (
    <MainContainer>
      <Background>
        <StyledQuestionHeader
          style={{
            transform: 'none',
            // textTransform: 'uppercase',
            marginBottom: '50px',
            marginTop: '50px',
            fontSize: '50px',
          }}
        >
          Here are your Time Savers
        </StyledQuestionHeader>
        <ButtonContainer>
          {timesavers.map((timesaver, index) => (
            <CategoryOptions
              key={timesaver.category}
              category={timesaver.category}
            />
          ))}
          <StyledLink
            to="/results"
            style={{
              backgroundColor: '#F9F67F',
              width: 'auto',
              marginTop: '50px',
              fontSize: '40px',
              color: 'black',
            }}
          >
            Back to Results
          </StyledLink>
        </ButtonContainer>

        {/* <ButtonContainer>
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
        </ButtonContainer> */}
      </Background>
    </MainContainer>
  );
}
