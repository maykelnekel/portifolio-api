import bcrypt from 'bcrypt'

const hashSenha = (senha: String) => {

bcrypt.hash(senha as string, 10, function(err, hash) {
    if(err){
        return err
    }
    return hash
})}

export default hashSenha