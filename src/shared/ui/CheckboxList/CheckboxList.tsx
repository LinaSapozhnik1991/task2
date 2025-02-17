import React from "react";
import Checkbox, { CheckboxProps } from "../Checkbox/Checkbox";
import styles from "./CheckboxList.module.scss";

interface CheckboxListProps {
  items: CheckboxProps[];
}

const CheckboxList: React.FC<CheckboxListProps> = ({ items }) => {

  const renderCheckboxes = (items: CheckboxProps[]) => {
    return items.map((item) => (
      <div key={item.id} className={styles.checkboxItem}>
        <Checkbox id={item.id} label={item.label} state={item.state} />

        {item.children && item.children.length > 0 && (
          <div className={styles.nestedCheckboxes}>
            {renderCheckboxes(item.children)}
          </div>
        )}
      </div>
    ));
  };

  return <div className={styles.checkboxList}>{renderCheckboxes(items)}</div>;
};

export default CheckboxList;
