import React from 'react'
import { HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client'
import './index.css'
import { client } from './api'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<HashRouter>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</HashRouter>
	</React.StrictMode>
)
