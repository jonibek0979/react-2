import './Header.css'
function Header({data}) {
    // let {data} = props
    return(
       <div className={data % 2 == 0? 'light':'dark'}>
         <h1><i>{data}</i></h1>
         <h1>header</h1>
       </div>

    )
}
export default Header