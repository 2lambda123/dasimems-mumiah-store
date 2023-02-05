import React, { useEffect, useState } from "react";
import OrderProductDetails from "./OrderProductDetails";
import { GetData, formatPrice } from "../../../utils/helpers";
import SubmitBtn from "../../form/SubmitBtn";

const Order = ({ order, ...props }) => {

  const [orderDetails, setOrderDetails] = useState(null)
  const [products, setProducts] = useState([])
  const [orderTimeline, setOrderTimeline] = useState([]);

  useEffect(()=>{

    if(order){

      if(order.id){

        GetData(`/invoices/${order?.id}`).then(res => {
          setOrderDetails(res?.data?.invoice);
        }).catch(err=>{
          console.log(err)
        })
      }
      if(order.timeline){

        setOrderTimeline(order?.timeline)
      }


    }

    


  }, [order])

  useEffect(()=>{

    if(orderDetails){

      setProducts(orderDetails?.items?.map(prod => ({
        image: prod?.product?.image,
        amount: prod?.quantity,
        sizes: prod?.size,
        id: prod?.product?.id,
        name: prod?.product?.name,
        price: prod?.product?.price
      })))


    }


  }, [orderDetails])

  return (
    <div {...props} className="order-card">
      <div className="order-card-header flex-container space-between align-center">
        <div className="order-details">
          <h3 className="order-id">#{order?.reference}</h3>

          <div className="order-details-content flex-container align-center">
            <p className="order-date">{/* {order?.amount?.symbol} */}{formatPrice(order?.total)}</p>

            <p className="divider"> - </p>

            {orderTimeline.length > 0 && <p className={`order-status`}>
              {orderTimeline[orderTimeline.length - 1]?.title}
            </p>}
          </div>
        </div>

        {orderDetails && !orderDetails.paid && <div className="order-action">
          <SubmitBtn onClick={()=>{
            window.open(order?.checkout)
          }} className="order-action-button" text="Pay" />
        </div>}
      </div>

      <div className="order-card-content">
        {products?.map((product, index) => {
          return <OrderProductDetails key={index} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Order;
