"use client";
import { useRef } from "react";
import { useOutsideClick } from "@/hooks/outsideClick";

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const openModalHandler = () => {
    dialogRef.current?.showModal();
  };
  const closeModalHandler = () => {
    dialogRef.current?.close();
  };
  useOutsideClick(divRef, closeModalHandler);

  return (
    <div>
      <button onClick={openModalHandler}>Open</button>
      <dialog ref={dialogRef}>
        <div ref={divRef}>
          <h1>This is modal heading</h1>
          <button onClick={closeModalHandler}>close</button>
        </div>
      </dialog>
    </div>
  );
}
