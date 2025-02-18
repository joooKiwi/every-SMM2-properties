import 'bootstrap/dist/js/bootstrap.esm'
import './index.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap.scss'
import 'lang/i18n'

import {createRoot}    from 'react-dom/client'
import reportWebVitals from 'reportWebVitals'

import IndexComponent   from 'IndexComponent'
import {isInProduction} from 'variables'

createRoot(document.getElementById('root')!,)
    .render(<IndexComponent/>,)

if (isInProduction) {
    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals()
}
