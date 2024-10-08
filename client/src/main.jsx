import {createRoot} from 'react-dom/client'

import App from './App.jsx'
import {Provider} from "react-redux";
import {store} from './store/store.js'
import './utils/languages/i18n.js'
import './index.css'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
