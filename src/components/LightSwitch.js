export default function LightSwitch({isOn,toggleLight})
{
return(
    <div>
    <button onClick = {toggleLight}>
        {isOn ? "Turn off":"turn on"}
    </button>
    </div>
);
}
