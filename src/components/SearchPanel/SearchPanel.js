import React from "react";
import styleList from './SearchPanel.module.sass';

export default () => {
    const {SearchInput} = styleList;

    return <input type="text"
                  className={`${SearchInput} form-control`}
                  placeholder="type to search"/>;
};