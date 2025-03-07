//your JS code here. If required.
document.querySelector("#form").addEventListener("submit",(e) => {
	e.preventDefault();
	const name = document.querySelector("#name").value;
	const age = parseInt(document.querySelector("#age").value);
	if(!name || isNaN(age)){
		alert("Please enter valid details");
		return;
	}

	const promise = new Promise((resolve,reject) => {
		setTimeout(()=>{
			if(age>18){
				resolve(`Welcome,${name}. You can vote`);
			}
			else{
				reject(`Oh sorry. You aren't old enough`);
			}
		},4000);
    });
	promise.then((data)=>{
		alert(data);
	}).catch((err)=>{alert(err)});
})