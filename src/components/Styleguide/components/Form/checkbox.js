import React from 'react';
import styled from "styled-components"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Wrapper = styled.div`
.MuiCheckbox-root{
    color:#101010;
}`
export default function CheckBox(props) {
    const {name} = props
  return (
    <Wrapper>
        <FormControlLabel control={<Checkbox name="checkedC" color="black"/>} label={name} />
    </Wrapper>
  );
}
