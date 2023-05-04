import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import React from 'react';

const QSelectField = (props) => {
    const {label, required, options, fullWidth, ...rest} = props;

    return (
        <FormControl fullWidth variant="standard">
            <InputLabel>{label}</InputLabel>
            <Select required={required}
                    onChange={props.onChange}
                    defaultValue={''}
                    {...rest}
                    MenuProps={{
                        style: {
                            maxHeight: 400,
                        },
                    }}>
                {options.map(el => (
                    <MenuItem key={el.id} value={el.value}>
                        {el.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default QSelectField;
