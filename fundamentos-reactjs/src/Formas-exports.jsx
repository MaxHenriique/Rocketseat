// props: { author: "", content: "" }

export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  )
}

// Default Exports vs Named Exports

// (Default Exports)
// export default Post

// (Named Exports)
// export function Post() {
//     return <p>Post</p>
// }
