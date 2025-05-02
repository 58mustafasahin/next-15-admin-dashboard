import { hashSync } from 'bcryptjs'

const users = [
    {
        id: '410544b2-4002-4278-9854-fec4ba6b6442a',
        name: 'User',
        email: 'user@nextmail.com',
        password: hashSync('123456', 10)
    },
]

export { users }