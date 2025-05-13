import classes from "./Modal.module.css";




export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className={classes.cmodalBackdrop} onClick={onClose}>

            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={classes.greenLine}></div>
                <div className={classes.modalClose} onClick={onClose}>
                    ✕
                </div>
                {children}
            </div>
        </div>
    );
}