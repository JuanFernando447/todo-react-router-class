import React from 'react'
import { Link, Outlet } from "react-router";
import { childrenRouterList } from './routes';

const Layout = () => {
    return (
        <div className="layout">
            <aside className="sidebar">
                <ul>
                    {childrenRouterList.map((children) =>
                        <li><Link to={children.path} >{children.text}</Link></li>
                    )}
                </ul>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout