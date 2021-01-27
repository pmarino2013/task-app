import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export default function TaskAdd({ tarea, handleChange, handleEnter }) {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder=""
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="tarea"
          value={tarea.item}
          onChange={handleChange}
          onKeyDown={handleEnter}
          autoComplete="off"
          maxLength="30"
        />
      </InputGroup>
    </div>
  );
}
