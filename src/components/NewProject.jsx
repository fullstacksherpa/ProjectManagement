import React from "react";
import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const model = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation...

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      model.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={model} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-600 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forget to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure to enter value in all
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
              onClick={handleSave}>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
