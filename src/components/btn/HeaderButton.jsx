import classes from './HeaderButton.module.css'

export default function HeaderButton(children){
    return(
        <button className={classes.headButton}>{children}</button>
    )
}