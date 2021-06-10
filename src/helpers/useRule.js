import { useState } from "react";

const useRule = () => {
    const [form, setForm] = useState({
        title: "",
        condition: "",
        rules: [{ field1: "", field2: "", field3: [{ input: "" }] }],
        revenuePercentage: "",
    });

    const handlePercentageChange = (e) => {
        const new_form = { ...form };
        new_form.revenuePercentage = e.target.value;
        setForm(new_form);
    };

    const handleAddFields = () => {
        const val = [...form.rules];
        val.push({
            field1: "",
            field2: "",
            field3: [{ input1: "" }],
        });

        const new_form = { ...form };
        new_form.rules = val;
        setForm(new_form);
    };

    const handleAddRule = (index) => {
        console.log(index);
        const val = [...form.rules[index].field3];
        console.log(val);
        if (val) {
            val.push({ input: "" });

            const new_form = { ...form };
            new_form.rules[index].field3 = val;
            setForm(new_form);
        }
    };

    const handleRemoveRule = (id, index) => {
        const val = [...form.rules[id].field3];
        val.splice(index, 1);
        console.log(val);
        const new_form = { ...form };
        new_form.rules[id].field3 = val;
        setForm(new_form);
    };
    const handleRemoveFields = (index) => {
        const values = [...form.rules];
        values.splice(index, 1);
        const new_form = { ...form };
        new_form.rules = values;
        setForm(new_form);
    };

    return {
        form,
        handleAddFields,
        handleRemoveFields,
        handlePercentageChange,
        handleAddRule,
        handleRemoveRule,
    };
};

export default useRule;
