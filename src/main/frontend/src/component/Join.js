import React from 'react'
import { useNavigate } from 'react-router-dom'

const Join = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <p>만 14세 이상 국내 거주인 회원가입</p>
                <p onClick={()=>{navigate('/joinPage')}}>만 14세 이상 회원가입하기</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Join