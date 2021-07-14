

export default function Results(props) {
    //set state here

    const styles = {
        body:{
            backgroundColor:'black',
            color:'white',
            height:'150px',
            display:'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
        },
        text:{
            fontSize:'50px'
        }
    }
  return (
    <>
    <div style={styles.body}>
        <p style={styles.text}>{props.value}</p>
    </div>
    </>
  );
}
