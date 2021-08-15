//libraries
import React from 'react';
import MyInput from "../UI/MyInput";
import Select from "../UI/Select";
//Components


const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
                placeholder="Поиск..."
            />
            <Select
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort })}
                defaultValue="сортеровка по..."
                options={[
                    {value: 'title', name: 'по названию'},
                    {value: 'body', name: 'по описанию'},
                ]}
            />
        </div>
    );
};

export default PostFilter;