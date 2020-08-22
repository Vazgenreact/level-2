import React from "react";
import classes from "./Cat.module.css";
import Cat from "./Cat";

const Cats = ({cats: {cats, descriptions}}) => {
    let descArr = descriptions.defaultDesc.split(' ');
    const linkDesc = descArr.pop();
    descArr = descArr.join(' ');
    
    return (
        <div className={classes.cats}>
            {
                cats.map(cat => {
                    return <Cat key={cat.id} cat={cat} linkDesc={linkDesc} descriptions={descriptions}
                                 descArr={descArr}/>
                })
            }
        </div>
    )
};

export default Cats;
