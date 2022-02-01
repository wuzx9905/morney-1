import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 20px;
  >ul{
    display: flex;
    >li{
      width: 33.333%;
      text-align: center;
      display:flex;
      flex-direction: column;
      align-items: center;
      padding: 4px 0;
      .icon{
        width: 24px;
        height: 24px;
      }
    }
  }
`

const Nav = ()=>{
    return(
        <NavWrapper>
            <ul>
                <li>
                    <Icon name="tag"/>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <Icon name="money"/>
                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <Icon name="chart"/>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav;