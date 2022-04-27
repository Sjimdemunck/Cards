import React from 'react';
import { IUser } from '../containers/Authentication'

interface DashboardProps {
    user: IUser
    theme: string
    
}

export const Dashboard = ({user, theme}: DashboardProps) => {
    return(
        <>
            <h2>
                Dashboard
            </h2>
        </>
    )
}