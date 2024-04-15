const Info = (props) => {
    let {lang}=props;
  return (
    <div>
        <h1>Top programming language</h1>
        {lang.map((item,index)=>(
            <li key={index.id}>{item.name}</li>
        ))}
    </div>
  )
}

export default Info