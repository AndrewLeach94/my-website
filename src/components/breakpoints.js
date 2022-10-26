export const size = {
    small: '324px',
    medium: '809px',
    large: '1365px',
    xlarge: '1899px',
   };

  export const device = {
    small: `(max-width: ${size.medium})`,
    medium: `(min-width: ${size.medium}) and (max-width: ${size.large})`,
    large: `(min-width: ${size.large}) and (max-width: ${size.xlarge})`,
    xlarge: `(min-width: ${size.xlarge})`,
    
    mediumDown: `(max-width: ${size.large})`,
    largeUp: `(min-width: ${size.large})`,
   }
