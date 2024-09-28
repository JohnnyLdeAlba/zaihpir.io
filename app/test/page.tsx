import "../theme.css";

class t_theme {

  constructor() {

    this.textColor1 = "enigma_text_color_1";
    this.borderColor1 = "enigma_border_color_1";
    this.bgColor1 = "enigma_bg_color_1";
    this.bgColor2 = "enigma_bg_color_2";
    this.bgColor3 = "enigma_bg_color_3";
  }
}

const theme = new t_theme();

const Header = ({ children = '' }) => {

  return <div className={`
    ${ theme.bgColor2 }
    ${ theme.textColor1 }
    px-2 py-1
    rounded-t-lg
    font-bold
    text-sm
  `}>
    { children }
  </div>;
}

const Footer = ({ children = '' }) => {

  return <div className={`
    ${ theme.bgColor2 }
    ${ theme.textColor1 }
    px-2 py-1
    rounded-b-lg
    font-bold
    text-sm
    text-right
  `}>
    { children }
  </div>;
}

const Com = ({
  header = true, 
  footer = '',
  title = '',
  children = '' } ) => {

  return <div className={`
    ${ theme.borderColor1 }
    ${ theme.bgColor3 } 
    p-px
    rounded-lg
  `}>
    { header ? <Header>{ title }</Header> : '' }
    <TextBody>Test</TextBody>
    { footer ? <Footer>{ footer }</Footer> : '' }
  </div>;
} 

const Col = ({ children }) => {

  return <div className="p-2">
    { children }
  </div>; 
}

const Col2 = ({ children }) => {

  return <div className="w-1/2 p-2">
    { children }
  </div>; 
}

const TextBody = ({ children }) => {

  return <div className="px-2 py-1 text-sm">
    { children }
  </div>
}

const Panel = () => {

  return <div className={`
    ${ theme.borderColor1 }
    ${ theme.bgColor1 }
    my-8 mx-auto
    p-2
    w-[800px]
  `}>
      <Col>
        <Com title="Console" footer="Expand" />
      </Col>
      <Col>
        <Com title="Bulletin" footer="Previous Entries" />
      </Col>
      <div className="flex flex-row">
        <Col2>
          <Com title="Suscribers" />
        </Col2>
        <Col2>
          <Com title="About Me" />
        </Col2>
      </div>
  </div>;
}

export const Page = () => {

  return <Panel />;
}

export default Page;
