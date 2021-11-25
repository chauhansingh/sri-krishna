let divStyle = {
    background: 'gray',
    padding: '20px',
    margin: '20px',
    width: '30%'
}
let Contact = props =>
    <div style={divStyle}>
        <p><span style={{background:'orange', color: 'white'}}>
            {props.name}
        </span>:
        <span> 
            {props.mobile}
        </span></p>
    </div>
export default Contact;