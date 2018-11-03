import React, { Component } from 'react';

import { Link } from "react-router-dom";


class Find_section1 extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      // <div>
      // {console.log(this.props.findData[0].title)}
      // </div>
      <div className="find_section2_posts">
        {this.props.findData.map((find, idx) => (
        <div key={idx}>
        <Link to="/find">
        <article className="find_article" key={idx}>
            {/* {console.log(find)} */}
            <img className="find_section2_post" src={`${find.petimage}`}  />
            <div className="article_title">{
              find.title.length > 24 ? 
              `${find.title.slice(0,24)} ...` : find.title
            }
            </div>
            <div className="article_location">실종장소: {find.location}</div>
            <div className="article_pet_inf">종류: {find.petbreed} / {find.petsex}</div>
            <div className="article_pet_reward">사례금: {find.reward}</div>
            <div className="article_pet_post_date">Date: {find.postdate}</div>
        </article>
      </Link>
      </div>
      ))}
      </div>
    );
  }
}

export default Find_section1;
