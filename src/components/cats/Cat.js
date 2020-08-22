import React, {useState} from "react";
import classes from "./Cat.module.css";
import catImage from "../../images/cat.png";

const Cat = ({cat, linkDesc, descriptions, descArr}) => {
    const [selected, setSelected] = useState(cat.selected);
    
    let stateCls = '';
    let desc = descArr;
    if (selected) {
        desc = descriptions.selectedDesc;
        stateCls = classes.selected
    }
    if (cat.disabled) {
        desc = descriptions.disabledDesc;
        stateCls = classes.disabled
    }
    
    const changeSelected = () => {
        setSelected(!selected);
    };
    
    return (
        <div className={classes.call}>
            <div className={`${classes.cat}`}>
                <label>
                    <input type="checkbox" name="cat" value={cat.type} className="d-none"
                           disabled={cat.disabled}
                           checked={selected}
                           onChange={changeSelected}
                    />
                    <div className={`${classes.contentTop} ${stateCls}`}>
                        <p className={classes.topText}>{cat.text}</p>
                        <h2 className={classes.name}>{cat.name}</h2>
                        <h3 className={classes.h3}>{cat.type}</h3>
                        <div className={classes.bonus}>
                            <p className="">
                                <strong>{cat.portion.count + ' '}</strong>
                                <span>{cat.portion.text}</span>
                            </p>
                            <p className="">
                                <strong>{cat.mouse.count + ' '}</strong>
                                <span>{cat.mouse.text}</span>
                            </p>
                        </div>
                        <img src={catImage} className={classes.catImg} alt=""/>
                        <div className={`${classes.weight} ${stateCls}`}>
                            <span className={classes.weightCount}>{cat.weight}</span>
                            <span className={classes.weightType}>{cat.weightType}</span>
                        </div>
                    </div>
                </label>
                <p className={`${classes.desc} ${cat.disabled ? classes.yellowColor : ''}`}>
                    {desc + ' '}
                    {!stateCls.length
                        ? <button
                            className={classes.orderLink}
                            onClick={changeSelected}
                        >{linkDesc}</button>
                        : ''}
                </p>
            </div>
        </div>
    )
};

export default Cat;
