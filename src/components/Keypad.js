import React from 'react';

export default function Keypad(props) {
    const styles ={ 
         cell:{
            backgroundColor: '#D4D4D2' ,
            height:"100px",
            width:"100px"
             },
        endCell:{
            backgroundColor:'#FF9500',
            color:'#ffffff',
            height:"100px",
            width:"100px"
            },
        endCell2:{
            color:'#ffffff',
                backgroundColor:'#FF9500',
                height:"100px",
                width:"50%"
                },
        body:{
            margin: 0,
            height:"100%" ,
            width:'auto',
            backgroundColor:'black'
        },
        tr:{


        },
        td:{
          
        }
        }

    
  return (
    <div style={styles.body}>
    <table style={styles.body} id="simple-board">
        <tbody>
           <tr>
                   <td  style={styles.cell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="AC" >AC</td>
                   <td  style={styles.cell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="+/-">+/-</td>
                   <td  style={styles.cell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="%">%</td>
                   <td  style={styles.endCell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="÷">÷</td>
                 </tr>
                 <tr>
                   <td  style={styles.cell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="7">7</td>
                   <td  style={styles.cell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="8">8</td>
                   <td  style={styles.cell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="9">9</td>
                   <td  style={styles.endCell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="*">x</td>
                 </tr>
                 <tr>
                   <td  style={styles.cell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="4">4</td>
                   <td  style={styles.cell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="5">5</td>
                   <td  style={styles.cell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="6">6</td>
                   <td  style={styles.endCell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="-">-</td>
                 </tr>
                 <tr>
                   <td  style={styles.cell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="1">1</td>
                   <td  style={styles.cell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="2">2</td>
                   <td  style={styles.cell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="3">3</td>
                   <td  style={styles.endCell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="+">+</td>
                 </tr>   
        </tbody>
                            
    </table>
    <table>
    <tbody>
            <tr style={styles.tr}>
                   <td  style={styles.cell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="0">0</td>
                   <td  style={styles.cell} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name=".">.</td>
                   <td  style={styles.endCell2} onClick={ e => props.onClick(e.target.attributes.name.textContent)} name="=">=</td>
                 </tr>
    </tbody>
    </table>
                
                 

    </div>
  );
}
