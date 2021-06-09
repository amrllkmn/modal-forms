import { useState } from "react";

const useRule = () => {
    const [rules, setRule] = useState([
        { field1: "", field2: "", field3: [{ input1: "" }] },
    ]);

    const handleAddFields = () => {
        const val = [...rules];
        val.push({
            fieldSelect1: "",
            fieldSelect2: "",
            field3: [{ input1: "" }],
        });
        setRule(val);
        console.log(val);
    };

    const handleRemoveFields = (index) => {
        const values = [...rules];
        values.splice(index, 1);
        setRule(values);
    };

    return {
        rules,
        handleAddFields,
        handleRemoveFields,
    };
};

export default useRule;
