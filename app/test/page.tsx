import "../theme.css";

class t_theme {

  constructor() {

    this.textColor1 = "enigma_text_color_1";
    this.borderColor1 = "enigma_border_color_1";
    this.borderColor2 = "enigma_border_color_2";
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
    m-1
    px-2 py-1
    font-bold
    text-sm
    tracking-wider
  `}>
    { children }
  </div>;
}

const Footer = ({ children = '' }) => {

  return <div className={`
    ${ theme.bgColor2 }
    ${ theme.textColor1 }
    m-1
    px-2 py-1
    font-bold
    text-sm
    text-right
    tracking-wider
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
  `}>
    { header ? <Header>{ title }</Header> : '' }
    <TextBody>Test</TextBody>
    { footer ? <Footer>{ footer }</Footer> : '' }
  </div>;
} 

const Com2 = ({
  header = true, 
  footer = '',
  title = '',
  children = '' } ) => {

  return <div className={`
    ${ theme.borderColor1 }
    ${ theme.bgColor3 } 
    p-px
  `}>
    { header ? <Header>{ title }</Header> : '' }
    <TextBody2>&gt; _</TextBody2>
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

const TextBody2 = ({ children }) => {

  return <div className="flex items-end mx-1 my-1 px-2 py-2 h-[100px] text-sm font-bold bg-black">
    { children }
  </div>
}

const Panel = () => {

  return <div className={`
    ${ theme.borderColor1 }
    ${ theme.bgColor2 }
    mx-auto
    w-[800px]
  `}>
    <Header>Profile - Johnny L. de Alba</Header>
    <div className="p-2">
      <Col>
        <Com2 title="Console" footer="Expand" />
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
    </div>
  </div>;
}

export const Page = () => {

  return <div className="h-screen bg-[#12152c] p-8">
    <Panel />
  </div>;
}

export default Page;
