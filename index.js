import {GoogleSpreadsheet} from 'google-spreadsheet'

import {JWT} from 'google-auth-library'

import 'dotenv/config'

//it is only the try
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const servicesAccountAuth = new JWT({
    email: process.env.EMAIL_GOOGLE,
    key: process.env.KEY_GOOGLE,
    scopes:[
        'https://www.googleapis.com/auth/spreadsheets'
    ]    
})

const doc = new GoogleSpreadsheet("1VT-WRi5WVbFyDlvUcENATjiud61-eIApsQKp_3YX1gs", servicesAccountAuth)


await doc.loadInfo()
console.log(doc.title)
await doc.updateProperties({title:'renomeando documento'})

const sheets = doc.sheetsByIndex[0]
console.log(sheets.title)
console.log(sheets.rowCount)

const newSheet = await doc.addSheet({title:'another sheet'})
await newSheet.delete()