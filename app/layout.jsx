import React from 'react'
import '@styles/global.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata =  {
    title: 'Promptopia',
    description: 'Discover and share AI prompts'
}

const layout = ({children }) => {
  return (
    <html lang='en'>
        <body>
            <div className="main"></div>
            <div className="gradient" />

            <main className="app">
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default layout