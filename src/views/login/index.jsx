import { Button, Form, Input, message } from 'antd'
import './style.less'
import { useState } from 'react'
import { useAppDispatch } from '@/app/hooks'
import { loginAsync } from './slice'
export default function App() {
  const dispatch = useAppDispatch()
  const [loadings, setLoadings] = useState(false)
  const onFinish = async(values) => {
    setLoadings(true)
    // 分发请求登陆的异步action
    const action = await dispatch(loginAsync(values))
    if (action.type === 'user/loginAsync/fulfilled') {
      message.success('登陆成功!')
    } else {
      message.error('登陆失败!')
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className='login'>
      <div className='bg'>
        <div />
        <div className='form-wrapper'>
          <div className='title'>login</div>
          <Form
            name='basic'
            initialValues={{ username: 'super', password: '111111' }}
            style={{
              width: 330
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              name='username'
              rules={[
                {
                  required: true,
                  message: '请输入用户名'
                }
              ]}
            >
              <Input
                placeholder='用户名'
              />
            </Form.Item>

            <Form.Item
              name='password'
              rules={[
                {
                  required: true,
                  message: '请输入密码'
                }
              ]}
            >
              <Input.Password
                placeholder='密码'
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
    </div>
  )
}
