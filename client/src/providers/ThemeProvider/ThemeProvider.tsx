import { ConfigProvider, theme } from 'antd';
import token from 'assets/json/theme.json';
import { StyleProvider } from '@ant-design/cssinjs';

const { darkAlgorithm } = theme;

const ThemeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <ConfigProvider theme={{ ...token, algorithm: darkAlgorithm }}>
    <StyleProvider>{children}</StyleProvider>
  </ConfigProvider>
);

export default ThemeProvider;
