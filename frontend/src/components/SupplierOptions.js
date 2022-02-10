import React from 'react';
import { StyledButtonOptions } from './Styled';

const SupplierOptions = ({ title, description, href, test }) => (
  <>
    <div>
      <a href={href}>
        <StyledButtonOptions>
          <span>{title}</span>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <span style={{ fontSize: '14px' }}>fr</span>
            <span>{description}</span>
            <span>{test}</span>
          </div>
        </StyledButtonOptions>
      </a>
    </div>
  </>
);

export default SupplierOptions;
