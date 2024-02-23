import React, { useState, type ChangeEvent } from "react";
import Input from "./Input";

function CreateRangeForm(): React.ReactElement {
  const [game, setGame] = useState("");
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  function onNameChange(e: ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;
    setName(value);
  }
  function onPositionChange(e: ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;
    setPosition(value);
  }
  function onGameChange(e: ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;
    setGame(value);
  }
  return (
    <div>
      <form>
        <Input value={game} name="game" label="Game" onChange={onGameChange} />
        <Input
          value={position}
          name="position"
          label="Position"
          onChange={onPositionChange}
        />
        <Input value={name} name="name" label="Name" onChange={onNameChange} />
      </form>
    </div>
  );
}

export default CreateRangeForm;
