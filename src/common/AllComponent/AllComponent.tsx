import React, {useState} from 'react';
import {InputUniversal} from "../InputUniversal/InputUniversal";
import {CheckboxUniversal} from "../Checkbox/Checkbox";
import {ButtonUniversal} from "../Button/Button";



function AllComponentn() {
    const [value, setValue] = useState<string>('')

    const onChangeInputHandler = (newValue: string) => {
        setValue(newValue)
    }

    const [checked, setChecked] = useState<boolean>(true)
    const onChangeCheckBoxHandler = (newValue: boolean) => {
        setChecked(!checked)
    }

    return (
        <div>
            <InputUniversal
                label={'Login'}
                message={'Login is required'}
                class={'green-input'}
                onChange={onChangeInputHandler}
                value={value}
            />
            <div>
                <CheckboxUniversal
                    checked={checked}
                    class={"checkbox"}
                    onChange={onChangeCheckBoxHandler}
                />
            </div>
            <div>
                <ButtonUniversal
                    class={"button-help"}
                    name={"Help Me"}
                />
            </div>
        </div>



    )
}



export default AllComponentn;