import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import classes from "./menu-bar.module.css";
import { useCallback, useState } from "react";

export default function MenuBar({ editor }) {
  const [isActiveHeading, setIsActiveHeading] = useState(0);

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) return null;

  return (
    <div className={classes.editor__header}>
      {/* HEADING */}
      <Popover variant="custom">
        <PopoverTrigger>
          <button
            type="button"
            className={
              editor.isActive("heading")
                ? `${classes.is__active} ${classes.menu__item}`
                : classes.menu__item
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17 11V4H19V21H17V13H7V21H5V4H7V11H17Z"></path>
            </svg>
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverBody>
            <ul className={classes.list__heading}>
              <li
                className={
                  isActiveHeading === 1 ? classes.heading__active : undefined
                }
              >
                <button
                  type="button"
                  onClick={() => {
                    editor.chain().focus().setHeading({ level: 1 }).run();
                    setIsActiveHeading(1);
                  }}
                >
                  <Text fontSize="2xl">Heading 1</Text>
                </button>
              </li>
              <li
                className={
                  isActiveHeading === 2 ? classes.heading__active : undefined
                }
              >
                <button
                  type="button"
                  onClick={() => {
                    editor.chain().focus().setHeading({ level: 2 }).run();
                    setIsActiveHeading(2);
                  }}
                >
                  <Text fontSize="xl">Heading 2</Text>
                </button>
              </li>
              <li
                className={
                  isActiveHeading === 3 ? classes.heading__active : undefined
                }
              >
                <button
                  type="button"
                  onClick={() => {
                    editor.chain().focus().setHeading({ level: 3 }).run();
                    setIsActiveHeading(3);
                  }}
                >
                  <Text fontSize="lg">Heading 3</Text>
                </button>
              </li>
              <li
                className={
                  isActiveHeading === 4 ? classes.heading__active : undefined
                }
              >
                <button
                  type="button"
                  onClick={() => {
                    editor.chain().focus().setHeading({ level: 4 }).run();
                    setIsActiveHeading(4);
                  }}
                >
                  <Text fontSize="md">Heading 4</Text>
                </button>
              </li>
              <li
                className={
                  isActiveHeading === 5 ? classes.heading__active : undefined
                }
              >
                <button
                  type="button"
                  onClick={() => {
                    editor.chain().focus().setHeading({ level: 5 }).run();
                    setIsActiveHeading(5);
                  }}
                >
                  <Text fontSize="sm">Heading 5</Text>
                </button>
              </li>
              <li
                className={
                  isActiveHeading === 6 ? classes.heading__active : undefined
                }
              >
                <button
                  type="button"
                  onClick={() => {
                    editor.chain().focus().setHeading({ level: 6 }).run();
                    setIsActiveHeading(6);
                  }}
                >
                  <Text fontSize="xs">Heading 6</Text>
                </button>
              </li>
            </ul>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      {/* PARAGRAPH */}
      <button
        type="button"
        onClick={() => editor.commands.setParagraph()}
        className={
          editor.isActive("paragraph")
            ? `${classes.is__active} ${classes.menu__item}`
            : classes.menu__item
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 6V21H10V16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4H20V6H17V21H15V6H12ZM10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14V6Z"></path>
        </svg>
      </button>
      {/* BOLD */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? `${classes.is__active} ${classes.menu__item}`
            : classes.menu__item
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M8 11H12.5C13.8807 11 15 9.88071 15 8.5C15 7.11929 13.8807 6 12.5 6H8V11ZM18 15.5C18 17.9853 15.9853 20 13.5 20H6V4H12.5C14.9853 4 17 6.01472 17 8.5C17 9.70431 16.5269 10.7981 15.7564 11.6058C17.0979 12.3847 18 13.837 18 15.5ZM8 13V18H13.5C14.8807 18 16 16.8807 16 15.5C16 14.1193 14.8807 13 13.5 13H8Z"></path>
        </svg>
      </button>
      {/* ITALIC */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? `${classes.is__active} ${classes.menu__item}`
            : classes.menu__item
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M15 20H7V18H9.92661L12.0425 6H9V4H17V6H14.0734L11.9575 18H15V20Z"></path>
        </svg>
      </button>
      {/* STRIKE */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike")
            ? `${classes.is__active} ${classes.menu__item}`
            : classes.menu__item
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M17.1538 14C17.3846 14.5161 17.5 15.0893 17.5 15.7196C17.5 17.0625 16.9762 18.1116 15.9286 18.867C14.8809 19.6223 13.4335 20 11.5862 20C9.94674 20 8.32335 19.6185 6.71592 18.8555V16.6009C8.23538 17.4783 9.7908 17.917 11.3822 17.917C13.9333 17.917 15.2128 17.1846 15.2208 15.7196C15.2208 15.0939 15.0049 14.5598 14.5731 14.1173C14.5339 14.0772 14.4939 14.0381 14.4531 14H3V12H21V14H17.1538ZM13.076 11H7.62908C7.4566 10.8433 7.29616 10.6692 7.14776 10.4778C6.71592 9.92084 6.5 9.24559 6.5 8.45207C6.5 7.21602 6.96583 6.165 7.89749 5.299C8.82916 4.43299 10.2706 4 12.2219 4C13.6934 4 15.1009 4.32808 16.4444 4.98426V7.13591C15.2448 6.44921 13.9293 6.10587 12.4978 6.10587C10.0187 6.10587 8.77917 6.88793 8.77917 8.45207C8.77917 8.87172 8.99709 9.23796 9.43293 9.55079C9.86878 9.86362 10.4066 10.1135 11.0463 10.3004C11.6665 10.4816 12.3431 10.7148 13.076 11H13.076Z"></path>
        </svg>
      </button>
      {/* UNDERLINE */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={
          editor.isActive("underline")
            ? `${classes.is__active} ${classes.menu__item}`
            : classes.menu__item
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M8 3V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V3H18V12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V3H8ZM4 20H20V22H4V20Z"></path>
        </svg>
      </button>
      {/* SUBSCRIPT */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleSubscript().run()}
        className={
          editor.isActive("subscript")
            ? `${classes.is__active} ${classes.menu__item}`
            : classes.menu__item
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M5.59567 4L10.5 9.92831L15.4043 4H18L11.7978 11.4971L18 18.9943V19H15.4091L10.5 13.0659L5.59092 19H3V18.9943L9.20216 11.4971L3 4H5.59567ZM21.8 16C21.8 15.5582 21.4418 15.2 21 15.2C20.5582 15.2 20.2 15.5582 20.2 16C20.2 16.0762 20.2107 16.15 20.2306 16.2198L19.0765 16.5496C19.0267 16.375 19 16.1906 19 16C19 14.8954 19.8954 14 21 14C22.1046 14 23 14.8954 23 16C23 16.5727 22.7593 17.0892 22.3735 17.4538L20.7441 19H23V20H19V19L21.5507 16.5803C21.7042 16.4345 21.8 16.2284 21.8 16Z"></path>
        </svg>
      </button>
      {/* SUPERSCRIPT */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleSuperscript().run()}
        className={
          editor.isActive("superscript")
            ? `${classes.is__active} ${classes.menu__item}`
            : classes.menu__item
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M5.59567 5L10.5 10.9283L15.4043 5H18L11.7978 12.4971L18 19.9943V20H15.4091L10.5 14.0659L5.59092 20H3V19.9943L9.20216 12.4971L3 5H5.59567ZM21.5507 6.5803C21.7042 6.43453 21.8 6.22845 21.8 6C21.8 5.55817 21.4418 5.2 21 5.2C20.5582 5.2 20.2 5.55817 20.2 6C20.2 6.07624 20.2107 6.14999 20.2306 6.21983L19.0765 6.54958C19.0267 6.37497 19 6.1906 19 6C19 4.89543 19.8954 4 21 4C22.1046 4 23 4.89543 23 6C23 6.57273 22.7593 7.08923 22.3735 7.45384L20.7441 9H23V10H19V9L21.5507 6.5803V6.5803Z"></path>
        </svg>
      </button>
      <div className={classes.divider}></div>
      {/* BULLET LIST */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive("bulletList")
            ? `${classes.is__active} ${classes.menu__item}`
            : classes.menu__item
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path>
        </svg>
      </button>
      {/* ORDERED LIST */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive("orderedList")
            ? `${classes.is__active} ${classes.menu__item}`
            : classes.menu__item
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M8 4H21V6H8V4ZM5 3V6H6V7H3V6H4V4H3V3H5ZM3 14V11.5H5V11H3V10H6V12.5H4V13H6V14H3ZM5 19.5H3V18.5H5V18H3V17H6V21H3V20H5V19.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path>
        </svg>
      </button>
      {/* IMAGE */}
      <button
        type="button"
        onClick={addImage}
        className={
          editor.isActive("image")
            ? `${classes.is__active} ${classes.menu__item}`
            : classes.menu__item
        }
      >
        <svg
          className="icon w-6 h-6 text-gray-200"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
          </g>
        </svg>
      </button>
    </div>
  );
}
