import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
// import { Z_DEFAULT_COMPRESSION } from 'zlib';

class Header extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;
    // console.log('header', this.props.logout);
    // console.log('header cookie!', cookies.get('test'));
    cookies.get('test')
      ? (this.state = { login: true })
      : (this.state = { login: false });
  }

  loginchange = () => {
    return this.props.login ? (
      <div>
        <NavLink
          to="/main"
          className="item"
          activeClassName="active"
          onClick={this.props.logout}
        >
          로그아웃
        </NavLink>
        <NavLink to="/Mypage" className="item" activeClassName="active">
          마이페이지
        </NavLink>
      </div>
    ) : (
      <div>
        <NavLink to="/login" className="item" activeClassName="active">
          로그인
        </NavLink>
        <NavLink to="/signup" className="item" activeClassName="active">
          회원가입
        </NavLink>
      </div>
    );
  };

  render() {
    return (
      <div className="header_line">
      <span className="title_mm">멍멍</span> <span className="title_req">레스Q</span>
        <div className="header">
          <NavLink to="/post" className="item" activeClassName="active">
            신고/제보 등록하기
          </NavLink>
          <NavLink to="/main" className="item" activeClassName="active">
            HOME
          </NavLink>
          <NavLink to="/find" className="item" activeClassName="active">
            찾아주세요
          </NavLink>
          <NavLink to="/witness" className="item" activeClassName="active">
            목격했어요
          </NavLink>
          {this.loginchange()}
        </div>
      </div>
    );
  }
}

export default withCookies(Header);

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import "./Header.css";

// const Header = () => {
//   return (
//     <div className="header_line">
//       <div className="header">
//         <NavLink to="/post" className="item" activeClassName="active">신고/제보 등록하기</NavLink> {/*post*/}
//         <NavLink to="/main" className="item" activeClassName="active">HOME</NavLink> {/*main*/}
//         <NavLink to="/find" className="item" activeClassName="active">찾아주세요</NavLink> {/*find*/}
//         <NavLink to="/witness" className="item" activeClassName="active">목격했어요</NavLink> {/*witness*/}
//         <NavLink to="/login" className="item" activeClassName="active">로그인</NavLink> {/*login*/}
//         <NavLink to="/signup" className="item" activeClassName="active">회원가입</NavLink> {/*signup*/}
//         {/* <NavLink to="/mypage" className="item" activeClassName="active">마이페이지</NavLink> {/*mypage */}
//       </div>
//     </div>
//   );
// };

// export default Header;
