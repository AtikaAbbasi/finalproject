import jwt from 'jsonwebtoken'

export let signinToken = (user)=>{
return jwt.sign(
{
    id: user._id,
    role: user._role,
    email: user.email
},
process.env.JWT_SECRET,
{expiresIn: '1h'}

)

}