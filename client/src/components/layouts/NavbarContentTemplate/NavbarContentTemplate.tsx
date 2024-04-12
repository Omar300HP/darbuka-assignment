import { Image, Layout } from 'antd';

const { Header: AdHeader, Content } = Layout;

const Header = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  return (
    <AdHeader
      data-testid="header"
      className="z-10 flex h-[88px] flex-row justify-center  items-center rounded-xl border-borderColor border-opacity-30 bg-black  bg-opacity-70 backdrop-blur-xl xs:h-[55px] xs:px-4"
    >
      <Image
        src={'/logos/darbuka-logo.png'}
        preview={false}
        alt="darbuka-logo"
        className="w-[139px] xs:w-[40px] cursor-pointer"
      />

      {children}
    </AdHeader>
  );
};

const NavbarContentTemplate: React.FC<{
  children: React.ReactNode;
  headerActions?: React.ReactNode;
}> = ({ children, headerActions }) => (
  <Layout
    className={'h-[100vh] relative w-screen overflow-hidden bg-transparent '}
  >
    <div className="absolute w-full h-full bg-[url('/backgrounds/boards-bg.jpg')] bg-cover bg-center bg-no-repeat -z-10 grayscale contrast-50"></div>
    <Header>{headerActions}</Header>
    <Content
      data-testid="content"
      className={
        'flex h-[calc(100%_-_88px)] min-h-[calc(100%_-_88px)] w-screen flex-col content-center items-center overflow-y-auto pb-4 pt-6 xs:h-[calc(100%_-_55px)] xs:min-h-[calc(100%_-_55px)] xs:pt-[14px]  lg:pb-0'
      }
    >
      {children}
    </Content>
  </Layout>
);

export default NavbarContentTemplate;
