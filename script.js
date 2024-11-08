
function countletter()
{
    var text=document.getElementById("input-box")
    var count=text.value.length
    var max_length=50
    var rem=max_length-count 
    console.log(count)
    if(count<=max_length)
    {
        document.getElementById("letter-count").innerText="Total characters: " + count
        document.getElementById("remaining").innerText="Remaining: " + rem
    }
    else if(count>=50)
    {
        window.alert("Max size reached")
    }
    
}
document.getElementById("input-box").addEventListener("input", countletter)

