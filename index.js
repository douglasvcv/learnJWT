import {GoogleSpreadsheet} from 'google-spreadsheet'
import {JWT} from 'google-auth-library'

const servicesAccountAuth = new JWT({
    email: process.env.EMAIL_GOOGLE,
    key: process.env.KEY_GOOGLE,
    scopes:[
        'https://www.googleapis.com/auth/spreadsheets'
    ]    
})

