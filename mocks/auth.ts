import type {DefaultRequestMultipartBody, MockedRequest, RestHandler} from 'msw'
import {rest} from 'msw'

export const authHandlers: Array<
  RestHandler<MockedRequest<DefaultRequestMultipartBody>>
> = [
  rest.get('/profile', async (req, res, ctx) => {

    return res(
      ctx.json({
        name: 'yule',
        email: 'is.yuler@gmail.com',
        avatar: 'https://www.gravatar.com/avatar/795ef183243c812afd218f555acb1df6',
      })
    )
  }),

  rest.post('/login', async (req, res, ctx) => {
    const { username } = await req.json()

    return res(
      ctx.json({
        username,
      })
    )
  }),
]