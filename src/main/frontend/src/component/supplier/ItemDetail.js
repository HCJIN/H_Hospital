import React from 'react'


const ItemDetail = ({show, setShow, item}) => {
  
  const formatTextWithLineBreaks = (text) => {
    return text.replace(/(?:\r\n|\r|\n)/g, '<br>');
  };

  console.log(item)
  return (
    <div className='itemDetail-div'>
      <div className='content-box'>
        <table>
          <colgroup>
            <col width='30%'></col>
            <col width='*'></col>
          </colgroup>
          <tbody>
            <tr>
              <td colSpan={2}>
                <div className='itemBrand'>
                  <p>
                    <span>제조사 : </span>
                    <span>{item.itemBrand}</span>
                  </p>
                  <i className="bi bi-x-circle-fill" onClick={()=>{
                    setShow(false)
                  }}></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='detail-box'>
                  <div className='detail-left-div'>
                    <img src={`http://localhost:8080/images/upload/${item.imgList[0].attachedFileName}`} />
                  </div>
                  <div className='detail-right-div'>
                    <p className='brandP'>제품명 <br></br><span>{item.itemName}</span></p>
                    <p className='introP'>소개 <br></br> <span dangerouslySetInnerHTML={{ __html: formatTextWithLineBreaks(item.itemIntro) }} /></p>
                  </div>
                </div>               
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ItemDetail