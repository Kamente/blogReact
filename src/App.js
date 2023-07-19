// import logo from './logo.svg';
import './App.css';

//parent component
function BlogPost() {
  return (
    <div>
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
    </div>
  );
}

//child component. It is returned in the parent component
function BlogContent(props) {
  return <div>{props.articleText}</div>;
}

export default BlogPost;



// function parentComponent() {
//   return (
//     <div>
//       <ChildComponent theTxt="parentComponent" />
//     </div>
//   )
// }

// function ChildComponent(props) {
//   return (
//     <div>{props.theTxt}</div>
//   );
// }
// export default parentComponent;
