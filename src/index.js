import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component{

  render(){
    return(
      <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}    
      />
    )
  }
}

function formatDate(date){
  return date.toLocaleDateString();
}


function Avatar(props){
  return(
    <img src={props.user.avatarUrl}
      alt={props.user.name} />
  )
}

function UserInfo(props){
  return(
    <div className="UserInfo">
      <Avatar user={props.user}/>
      {props.user.name}      
    </div>
  )
}

function Comment(props){

  return(
    <div className="comment">
      <UserInfo user={props.author}/>
      {props.text}
      {formatDate(props.date)}
    </div>
  )
}

const comment = {
  date: new Date(),
  text: "Hello world!",
  author:{
    name:'Hello kit',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
