import { Button, Form, Input } from 'antd'
import './style.less'
import { useState } from 'react'
import { setToken } from '../../utils/auth'
export default function App() {
  const [loadings, setLoadings] = useState(false)
  const onFinish = (values) => {
    setLoadings(true)
    // setToken('test')
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className='login'>
      <div className='bg'>
        <div/>
        <div className='form-wrapper'>
          <div className='title'>登录</div>
          <Form
            name='basic'
            initialValues={{ username: 'admin', password: '111111' }}
            labelCol={{
              span: 6
            }}
            wrapperCol={{
              span: 18
            }}
            style={{
              width: 350
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              label='Username'
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Please input your username!'
                }
              ]}
            >
              <Input
              />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]}
            >
              <Input.Password
              />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                span: 24
              }}
            >
              <Button
                loading={loadings}
                style={{
                  width: '100%'
                }}
                type='primary'
                htmlType='submit'
              >
                        Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      {/* <Button type='primary' onClick={() => { setToken('test') }}>token植入</Button>*/}
    </div>
  )
}
