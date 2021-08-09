import React from 'react';
import ReactJson from 'react-json-view'


const List = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <p>There is not information</p>;
    // console.log("Valor REPO", repos[0]);
    return (

        <ReactJson key={repos.id} src={repos} name={"All Countries"} collapsed={1} />

    );
};

export default List;
