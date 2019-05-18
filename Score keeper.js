		var gameOver = false;
		var p1Score = 0 ;
		var p1Display = document.querySelector("#p1Display");
		var p1Button = document.querySelectorAll("button")[0]
		var maxN = 5 ;

		var maxB = document.querySelector("input");
	    maxB.addEventListener("change", function(){
	    		maxT.innerHTML = this.value;
	    		maxN = Number(this.value);
					resetEverything();
	    });

		p1Button.addEventListener("click",function(){
			if (!gameOver){
				p1Score++;
				if (p1Score === maxN){
					gameOver = true;
					p1Display.classList.add('colorC1');
				}
				p1Display.textContent = p1Score;
			}
		});

		var p2Score = 0 ;
		var p2Display = document.querySelector("#p2Display");
		var p2Button = document.querySelectorAll("button")[1]
		
		p2Button.addEventListener("click",function(){
			if (!gameOver){
				p2Score++;
				if (p2Score === maxN){
					p2Display.classList.add('colorC2');
					gameOver = true;
				}
				p2Display.textContent = p2Score;
			}
		});

		var reset = document.querySelectorAll("button")[2]
		reset.addEventListener("click", function(){
				p1Score=0;
				p2Score=0;
				p1Display.textContent = p1Score;
				p2Display.textContent = p2Score;
				p1Display.classList.remove('colorC1')
				p2Display.classList.remove('colorC2')
				gameOver=false;
		});

		function resetEverything(){
				p1Score=0;
				p2Score=0;
				p1Display.textContent = p1Score;
				p2Display.textContent = p2Score;
				p1Display.classList.remove('colorC1')
				p2Display.classList.remove('colorC2')
				gameOver=false;
		}
