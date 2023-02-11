import React from 'react'
import { Pagination as AntdPagination } from 'antd';

const Pagination = ({activePage, totalNumOfContent, maxContent, position, ...props}) => {

    if(!position){
        position = "center";
    }

    if(!maxContent){
        maxContent =  12
    }

    if(!totalNumOfContent){
        totalNumOfContent = 0
    }

  return (
    <div className={`page-pagination flex-container ${position === "right"? "justify-end" : ""} ${position === "center"? "justify-center" : ""} align-center `}>

        {activePage && isFinite(activePage)? (

            <AntdPagination current={activePage} pageSize={maxContent} showSizeChanger={false} hideOnSinglePage total={totalNumOfContent} {...props} />

        ) : (
            <AntdPagination pageSize={maxContent} showSizeChanger={false} hideOnSinglePage total={totalNumOfContent} {...props} />

        )}
      
    </div>
  )
}

export default Pagination
