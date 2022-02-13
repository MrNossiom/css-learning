const paths = document.querySelectorAll('.logo path');

for (let i = 0; i < paths.length; i++) {
	console.log(`Path ${i + 1} is ${paths[i].getTotalLength()} long.`);
}
