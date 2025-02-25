"use client";
import React, { FC, useState } from "react";
import { Button } from "../../shared/ui/Button/Button";
import { ButtonColors } from "../../shared/ui/Button/Button.types";
import styles from "./Sidebar.module.scss";
import User from "@/entities/user";
import AddFolder from "@/features/folders/addFolder";

interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface SidebarProps {
  user?: UserProps;
  onCreateFolder: () => void;
}

const Sidebar: FC<SidebarProps> = ({ user }) => {
  const [isAddFolderOpen, setIsAddFolderOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsAddFolderOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsAddFolderOpen(false);
  };

  const handleCreateFolder = () => {
    console.log("Папка создана!");
  };

  if (!user) {
    return null;
  }

  return (
    <div className={styles.sidebar} role="complementary">
      <User
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        phone={user.phone}
      />
      <Button
        backgroundColor={ButtonColors.Primary}
        onClick={handleOpenDrawer}
        aria-label="Создать папку"
      >
        + Создать папку
      </Button>
      <AddFolder
        isOpen={isAddFolderOpen}
        onClose={handleCloseDrawer}
        onCreateFolder={handleCreateFolder}
      />
    </div>
  );
};

export default Sidebar;
