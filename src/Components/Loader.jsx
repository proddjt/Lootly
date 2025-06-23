import styles from "./css/Loader.module.css"

function Loader (){
    return (
        <div className={`${styles.spinner} my-8 ms-8`}>
            <div></div>   
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
        </div>
    )
}

export default Loader