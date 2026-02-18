import styled from "@emotion/styled"

const variants = {
  base: `
      height: fit-content;
      padding: 1.30208vw 3.90625vw;
      display: inline-block;
      
      background-color: white;

      text-align: center;

      :hover {
          background-color: black;
          color: white;
          border-radius: calc(10px*2);
          box-shadow: 0 7px 18px -15px hsla(0, 0%, 5%, .04), 0 20px 20px 0 hsla(0, 0%, 5%, .05), 0 24px 19px -30px hsla(0, 0%, 5%, .25);
          scale: 1.1;
      }

      @media (min-width: 320px) {

      }


      @media (min-width: 768px) {
        padding: 16px 53px;
      }

      @media (min-width: 1280px) {
        padding: 1.52778vw 4.51389vw;
      }
  `,
  gallery: `
      
      background-color: oklch(84.5% 0.143 164.978);

      :hover {
          border-radius: calc(10px*2);
          box-shadow: 0 7px 18px -15px hsla(0, 0%, 5%, .04), 0 20px 20px 0 hsla(0, 0%, 5%, .05), 0 24px 19px -30px hsla(0, 0%, 5%, .25);
          scale: 1.1;
      }

      @media (min-width: 1920px){
        border-radius: 1.5625vw;
        height: 11.25vw;
        padding: 2.0833333333vw;

        :hover {
            border-radius: 3.125vw;
         }
      }

      @media (min-width: 1440px) {
        border-radius: 1.7361111111vw;
        height: 11.25vw;
        padding: 1.3888888889vw;
        
        :hover {
            border-radius: 3.4722222222vw;;
         }
    }
      @media (min-width: 1280px) {
        border-radius: 1.953125vw;
        display: flex;
        height: 12.421875vw;
        padding: 1.5625vw;

        :hover {
          border-radius: 3.90625vw;
        }
    }
`,
  control: `
    align-items: center;
    background-color: #FFF;
    border-radius: 12px;
    color: #0e0e0e;
    display: flex;
    justify-content: center;
    position: relative;
    transition: background-color .3s, opacity .3s;
    
    :hover{
      outline: none;
      background-color: #e4e4e4;
    }

    :disabled {
      cursor: not-allowed;
      opacity: .5;
    }
    
    @media (min-width: 768px) {
        height: 48px;
        width: 48px;
    }

    @media (min-width: 1280px) {
        height: 4.296875vw;
        width: 4.296875vw;
    }
  `
} as const

const width = {
  full: '100%',
  fit: 'fit-content'
} as const

interface Props {
  $variant?: keyof typeof variants;
  $width?: keyof typeof width;
}

export const Button = styled.button<Props>`
${({ $variant = 'base', $width = 'fit' }) => {
    const v = variants[$variant]
    const w = width[$width]
    return `
      ${v}
      width: ${w};

      border-radius: 10px;

      font-weight: 600;
      color: black;

      cursor: pointer;

      transition: background-color .3s ease, color .3s ease, border-radius .3s ease, scale .3s ease, box-shadow .3s ease;

     
  `
  }
  }
`