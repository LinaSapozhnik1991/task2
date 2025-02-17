import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./DropdownTag.module.scss";
import classNames from "classnames";

export interface DropdownTagProps {
  tags: string[];
  onTagRemove: (tag: string) => void;
  onTagAdd: (tag: string) => void;
  size?: "large" | "medium" | "small";
  className?: string;
  options: string[];
}

const DropdownTag: React.FC<DropdownTagProps> = ({
  tags,
  onTagRemove,
  onTagAdd,
  size = "medium",
  className,
  options = [],
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter(
    (option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !tags.includes(option)
  );

  const handleTagSelect = (option: string) => {
    if (!tags.includes(option)) {
      onTagAdd(option);
    }
    setSearchTerm("");
    setIsOpen(false);
  };

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sizeClass = classNames(
    styles.dropdownTag,
    {
      [styles.large]: size === "large",
      [styles.medium]: size === "medium",
      [styles.small]: size === "small",
      [styles.singleTag]: tags.length === 1,
      [styles.multipleTags]: tags.length > 1,
    },
    className
  );

  return (
    <div className={sizeClass} ref={dropdownRef}>
      <div className={styles.dropdownInput} onClick={handleToggleDropdown}>
        <div className={styles.sizeLabel}>
          {tags.length > 0 ? (
            tags.map((tag) => (
              <div
                key={tag}
                className={classNames(styles.tag, {
                  [styles.singleTag]: tags.length === 1,
                  [styles.multipleTags]: tags.length > 1,
                })}
              >
                {tag}
                <button
                  className={styles.removeButton}
                  onClick={() => onTagRemove(tag)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            ))
          ) : (
            <span className={styles.placeholder}>
              {`${size.charAt(0).toUpperCase() + size.slice(1)} Dropdown`}
            </span>
          )}
        </div>
        <FontAwesomeIcon icon={faChevronDown} className={styles.toggleIcon} />
      </div>

      {isOpen && (
        <div className={styles.options}>
          <div className={styles.searchContainer}>
            <div className={styles.searchInputContainer}>
              <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Поиск..."
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.optionList}>
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                className={styles.option}
                onClick={() => handleTagSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownTag;
