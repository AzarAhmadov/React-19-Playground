import { FC } from 'react'
import Header from '../common/Header/Header'
import { Outlet } from 'react-router-dom'

const MainLayout: FC = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout
