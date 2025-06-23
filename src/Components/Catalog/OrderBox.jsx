import { useContext } from "react"

import styles from "../css/OrderBox.module.css"
import OrderingContext from "../../Context/OrderingContext"

function OrderBox(){
    const {setOrder} = useContext(OrderingContext)
    return (
        <div className={styles.container}>
            <form>
                <label>
                    <input type="radio" name="order" onClick={() => setOrder('&ordering=name')}/>
                    <span>Nome: A-Z</span>
                </label>
                <label>
                    <input type="radio" name="order" onClick={() => setOrder('&ordering=-name')}/>
                    <span>Nome: Z-A</span>
                </label>
                <label>
                    <input type="radio" name="order" onClick={() => setOrder('&ordering=-released')}/>
                    <span>Data di rilascio: più recente</span>
                </label>
                <label>
                    <input type="radio" name="order" onClick={() => setOrder('&ordering=released')}/>
                    <span>Data di rilascio: più vecchio</span>
                </label>
                <label>
                    <input type="radio" name="order" onClick={() => setOrder('&ordering=-rating')}/>
                    <span>Rating: migliore</span>
                </label>
                <label>
                    <input type="radio" name="order" onClick={() => setOrder('&ordering=rating')}/>
                    <span>Rating: peggiore</span>
                </label>
                <label>
                    <input type="radio" name="order" onClick={() => setOrder('')}/>
                    <span>Nessun ordine</span>
                </label>
            </form>
        </div>
    )
}

export default OrderBox