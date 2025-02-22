import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faPlus,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import styles from "./DropdownWithList.module.scss";

export interface DropdownWithListProps {
  label: string;
  options: string[];
  selectedOption: string;
  size?: "small" | "medium" | "large";
  active?: boolean;
  isSelect?: boolean;
  hover?: boolean;
  disabled?: boolean;
  isOpen: boolean;
  onOptionSelect: (option: string) => void; 
  message?: string;
  setMessage?: (msg: string | null) => void;
}

const DropdownWithList: React.FC<DropdownWithListProps> = ({
  options,
  isOpen,
  selectedOption,
  size = "medium",

  disabled,
  isSelect,
  onOptionSelect,
  message = "Не найдено",

}) => {
  const dropdownClass = classNames(styles.dropdown, styles[size], {
   
    [styles.disabled]: disabled,
  });

  return (
    <div className={dropdownClass}>
      <div className={classNames(styles.input, { [styles.open]: isOpen })}>
        <span className={styles.selectedText}>
          {selectedOption || "Выберите"}
        </span>
        <span className={styles.icon}>
          {selectedOption && (
            <>
              <FontAwesomeIcon
                icon={faTimes}
                className={styles.clearIcon}
                aria-label="Очистить выбор"
              />
            </>
          )}
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            className={styles.toggleIcon}
          />
        </span>
      </div>

      {isOpen && (
        <div className={styles.dropdownListContainer}>
          <ul className={styles.options}>
            {options.length > 0 ? (
              options.map((option) => (
                <li
                  key={option}
                  className={styles.option}
                  onClick={() => {
                    onOptionSelect(option); 
                  }}
                >
                  <div className={styles.optionContent}>
                    <FontAwesomeIcon icon={faPlus} className={styles.plusIcon} />
                    <span className={styles.optionText}>{option}</span>
                  </div>
                </li>
              ))
            ) : (
              <li className={styles.option}>{message}</li>
            )}
          </ul>
        </div>
      )}

      {isSelect && !isOpen && (
        <div className={styles.messageContainer}>
          <div className={styles.message}>{message}</div>
        </div>
      )}
    </div>
  );
};

export default DropdownWithList;
