const input = document.getElementById('igonan');
const output = document.getElementById('sexyguy');
// i wonder why i have to set id like this.
// just a joy? well, that's not a important point.

function test(a, b){
	if(input.value == a){
		output.innerHTML = b;
	}
}
