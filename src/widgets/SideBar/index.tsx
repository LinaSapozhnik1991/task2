"use client"; // Убедитесь, что этот компонент клиентский

import React from 'react';
import Sidebar from './Sidebar';

interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

const SidebarContainer: React.FC<{ user: User }> = ({ user }) => {
    const handleButtonClick = () => {
        console.log('Кнопка нажата!');
    };

    return <Sidebar user={user} onCreateFolder={handleButtonClick} />;
};

export default SidebarContainer;
