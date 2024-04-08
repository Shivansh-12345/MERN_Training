let display=document.getElementById('display');

const toresult=(value)=>{
    display.value+=value;
}
const toclear=()=>{
    display.value='';
}

const tocalculate=()=>{
    display.value=eval(display.value);
}