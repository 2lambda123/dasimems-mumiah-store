import React, { useCallback, useEffect } from 'react'
import { order } from '../../utils/constant'
import EmptyOrder from "../../assets/lotties/unavilable.json"
import { Error, Loading, Order as OrderComponent } from '../../components'
import { GetData } from '../../utils/helpers'
import { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [orderLoading, setOrderLoading] = useState(false)
  const [orderLoadErr, setOrderLoadErr] = useState(false)

  const getOrders = useCallback(()=>{

    GetData("/invoices").then(res => {

      setOrders(res.data.invoices)
      setOrderLoading(true)

    }).catch(err => {
      setOrderLoadErr(true)
    })

  }, [])

  useEffect(()=>{

    getOrders();

    document.addEventListener("visibilitychange", () => {

        if(!document.hidden){
          getOrders();
        }

    });

  }, [getOrders])


  if(!orderLoading){
    return <Loading />
  }

  if(orderLoadErr){
    return <Error />
  }

  return (
    <div className="orders">

        <h1 className="title">Order History</h1>

        <div className='order-contents'>

          {orders.length < 1? (<>
          
            <div className="flex-container align-center justify-center full-width column">

              <Player
                src={EmptyOrder}
                style={{
                  maxWidth: "300px"
                }}
                autoplay
                loop

              />

              <p>You have no orders at the present moment</p>

            </div>
          
          </>): (

            orders.map((ord, index)=>{
                return(

                    <OrderComponent order={ord} key={index} />
                )
            })
          )}


        </div>
      
    </div>
  )
}

export default Orders
