import joi from 'joi'

export default joi.object({
    email : joi.string().email({tlds : false}).required().messages({
        "any.required" : "l'email est obligatoire",
        "string.empty" : "l'email doit etre renseigné",
        "string.email" : "l'email doit etre valid"
    }),
    password  : joi.string().min(6).required().messages({
        "any.required" : "le mot de passe est obligatoire",
        "string.empty" : "le mot de passe doit etre renseigné",
        "string.min" : "le mot de passe doit contenir au moins {{#limit}} caracters"
    })
})