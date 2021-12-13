const emailRule = [

    value => !!value || 'This field is required.',

    value => (value || '').length <= 30 || 'Max 30 characters',

    value => {

        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return pattern.test(value) || 'Invalid e-mail.'

    },

]
const nameRule = [

    value => !!value || 'This field is required.',

    value => (value || '').length <= 10 || 'Max 10 characters',

]

const passwordRule =[

    value => !!value || 'Password is required',

    value => (value && value.length >= 8) ,
    v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',

  ]
const ageRule =[
    v => !!v || 'age is required',
    v => v >= 10  || 'you are under age',
  ]
//  const imageRule=[
//    (value) => !value ||   'image is required'      ,
//     // value.size < 2000000 || "Avatar size should be less than 2 MB!",
//  ]

export {

    nameRule,

    emailRule,

    passwordRule,

    ageRule,
    // imageRule,

}
