import React from 'react'
import { createPortal } from 'react-dom'
import Button from './Button'
import {forwardRef, useImperativeHandle, useRef} from 'react'


//here i am using portal, it take 2 paramente. 1 is what to show and 2 is where to put that portal.

const Modal = forwardRef(({children, buttonCaption}, ref) => {
const dialog = useRef()
    useImperativeHandle(ref, ()=>{
        return {
            //open() is method created by our component to other
            open(){
        dialog.current.showModal();
            }
        }
    })
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
        <form method='dialog' className='mt-4 text-right '>
            <Button>{buttonCaption}</Button>
        </form>
    </dialog>, document.getElementById('modal-root')

  )
})

export default Modal
