import React from "react"

const CopySvg = ({fillColor}) => {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.00044 6.12787L6 15.75C6 17.7382 7.5473 19.3651 9.50344 19.492L9.75 19.5L16.3716 19.5011C16.0624 20.3744 15.2293 21 14.25 21H9C6.51472 21 4.5 18.9853 4.5 16.5V8.25C4.5 7.27017 5.12631 6.43663 6.00044 6.12787ZM17.25 3C18.4926 3 19.5 4.00736 19.5 5.25V15.75C19.5 16.9926 18.4926 18 17.25 18H9.75C8.50736 18 7.5 16.9926 7.5 15.75V5.25C7.5 4.00736 8.50736 3 9.75 3H17.25ZM17.25 4.5H9.75C9.33579 4.5 9 4.83579 9 5.25V15.75C9 16.1642 9.33579 16.5 9.75 16.5H17.25C17.6642 16.5 18 16.1642 18 15.75V5.25C18 4.83579 17.6642 4.5 17.25 4.5Z" fill="#F6F8F8"/>
        </svg>
    );
};

export default CopySvg;