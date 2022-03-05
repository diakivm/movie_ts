import React, {FC} from 'react'
import {Pagination} from 'react-bootstrap'
import { animateScroll as scroll } from 'react-scroll'
import SomeFunc from '../../../utils/SomeFunc'
import './PaginationList.scss'

interface PaginationListProps {
    pagination: any
    setPagination: any
}

const PaginationList: FC<PaginationListProps> = ({pagination, setPagination}) => {

  let leftArray = [1,2,3,4]
  let rightArray = [pagination.totalPages-3, pagination.totalPages-2, pagination.totalPages-1, pagination.totalPages]

  function moveNext(){
    if(pagination.totalPages >= pagination.currentPage + 1){
        setPagination({...pagination, currentPage: ++pagination.currentPage})
        scroll.scrollToTop()
    }
  }

  function movePrev(){
    if( 0 <  pagination.currentPage - 1){
        setPagination({...pagination, currentPage: --pagination.currentPage})
        scroll.scrollToTop()
    }
  }

  function changePage(num: number) {
    if( 0 <  pagination.currentPage + num && pagination.totalPages >= pagination.currentPage + num && num != pagination.currentPage)
      setPagination({...pagination, currentPage: pagination.currentPage + num})
      scroll.scrollToTop()
  }

  function changePageR(num: number) {
    if( num != pagination.currentPage)
      setPagination({...pagination, currentPage: num})
      scroll.scrollToTop()
  }

  return (
  <Pagination>
   <Pagination.Prev onClick={movePrev}/>
    {
       pagination.totalPages <= 4 ?
                                 <>
                                  {
                                        SomeFunc.getArray(pagination.totalPages).map((item) => {
                                       return pagination.currentPage === item ? 
                                                                             <Pagination.Item key={item} active onClick={() => changePageR(item)}>{item}</Pagination.Item>
                                                                             :
                                                                             <Pagination.Item key={item} onClick={() => changePageR(item)}>{item}</Pagination.Item>

                                     })
                                  }
                                 </>
                                 : (
              pagination.currentPage < 4 ?
                                          <>
                                            {
                                                leftArray.map(item => {
                                                  return pagination.currentPage === item ? 
                                                                                        <Pagination.Item key={item} active onClick={() => changePageR(item)}>{item}</Pagination.Item>
                                                                                        :
                                                                                        <Pagination.Item key={item} onClick={() => changePageR(item)}>{item}</Pagination.Item>

                                                })
                                              }
                                              <Pagination.Ellipsis />
                                              <Pagination.Item onClick={() => changePageR(pagination.totalPages)}>{pagination.totalPages}</Pagination.Item> 
                                          </>
              : pagination.currentPage+2 >= pagination.totalPages ?
                                          <>
                                              <Pagination.Item onClick={() => changePageR(1)}>1</Pagination.Item>
                                              <Pagination.Ellipsis />
                                              {
                                              rightArray.map(item => {
                                                  return pagination.currentPage === item ? 
                                                                                        <Pagination.Item key={item} active onClick={() => changePageR(item)}>{item}</Pagination.Item>
                                                                                        :
                                                                                        <Pagination.Item key={item} onClick={() => changePageR(item)}>{item}</Pagination.Item>

                                                })
                                              }
                                          </>
              :
                                          <>
                                          <Pagination.Item onClick={() => changePageR(1)}>1</Pagination.Item>
                                            <Pagination.Ellipsis />
                                              <Pagination.Item onClick={() => changePage(-2)}>{pagination.currentPage - 2}</Pagination.Item>
                                              <Pagination.Item onClick={() => changePage(-1)}>{pagination.currentPage - 1}</Pagination.Item>
                                              <Pagination.Item active>{pagination.currentPage}</Pagination.Item>
                                              <Pagination.Item onClick={() => changePage(1)}>{pagination.currentPage + 1}</Pagination.Item>
                                            <Pagination.Ellipsis />
                                          <Pagination.Item onClick={() => changePageR(pagination.totalPages)}>{pagination.totalPages}</Pagination.Item>
                                          </>
        )

    }
   <Pagination.Next onClick={moveNext}/>
 </Pagination>
  )
}

export default PaginationList
