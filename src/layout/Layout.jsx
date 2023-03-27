import { Outlet } from 'react-router-dom'
import { Layout, Button } from 'antd'
const { Header, Content, Footer, Sider } = Layout
function LayoutComponent() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider></Sider>
      <Layout>
        <Header>11</Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default LayoutComponent
