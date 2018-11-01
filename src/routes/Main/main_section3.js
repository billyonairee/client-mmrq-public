import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Main_section2_list2 } from "./Main_sections_list";


export default class main_section3 extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props.witnessData)
    return (
      <div className="main_section2_contents">
        <div className="main_section2_plzfind_line" >
        
        {/*---------------------plz_find_title start----------------------*/}
          <div className="main_section2_plzfind_title">
            <NavLink to ="/find">
              <div className="main_section2_plzfind">우리 아이를 찾아주세요</div>
              <div className="main_section2_plzfind_note">가족을 잃은 슬픔에 애타게 기다리고 있습니다</div>
              <div className="main_section2_plzfind_note">많은 관심과 제보 부탁드립니다.</div>
            </NavLink>
          </div>
        {/*---------------------plz_find_title start----------------------*/}
        
        {/*---------------------article start----------------------*/}
          <div className="main_section2_posts">
           {this.props.witnessData.map((witness, idx)=>{
             return <Main_section2_list2 witness={witness} key={idx} />;
           })}
          </div>
          
        {/*---------------------article end----------------------*/}            
        </div>
      </div>
    );
  }
}

// font-family: 'Jua', sans-serif;