const bcryptjs=require('bcryptjs')

const users=[
    {
        name: 'admin',
        email: 'admin@gmail.com',
        password: bcryptjs.hashSync('12345',10) ,
        isAdmin: true
    },
    {
        name: 'gsaha1',
        email: 'gsaha1@gmail.com',
        password: bcryptjs.hashSync('12345',10),
        
    },
    {
        name: 'gsaha2',
        email: 'gsaha2@gmail.com',
        password: bcryptjs.hashSync('12345',10),
        
    }
]

module.exports=users;