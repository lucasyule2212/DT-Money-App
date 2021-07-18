import 'styled-components;'
declare module 'styled-components'{
  export interface DefaultTheme{
    title:string,
    colors:{
      background: string,
      backgroundHeader:string,
      textTitle:string,
      textBody:string,
      shadow:string
    }
  }
}