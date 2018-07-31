window.onload = function () {
	//Create Elements on document with Informatino
	let a = new Elements ({
			info: '#info',
			div: 'div',
			class: "samsung-galaxy",
			style: "item",
			img: "img/img-1.jpg",
			link: "Samsung galaxy",
			inf: "Смартфон Samsung G920F Galaxy S6 SS 32GB Sapphire Black"
	});

	let b = new Elements ({
			info: '#info',
			div: 'div',
			class: "nokia-experia",
			style: "item",
			img: "img/img-3.jpg",
			link: "Nokia Experia",
			inf: "Смартфон Nokia experia 2244 SS 64GB Sapphire white."
	});

	let c = new Elements ({
			info: '#info',
			div: 'div',
			class: "Alcatel",
			style: "item",
			img: "img/img-4.jpg",
			link: "Alcatel",
			inf: "Смартфон Alcatel 1234 SS 128GB black and white."
	});

	let d = new Elements ({
			info: '#info',
			div: 'div',
			class: "Iphone",
			style: "item",
			img: "img/img-5.jpg",
			link: "Iphone X",
			inf: "Смартфон Iphon X 64GB black and white."
	});

	let f = new Elements ({
			info: '#info',
			div: 'div',
			class: "Iphone",
			style: "item",
			img: "img/img-6.jpg",
			link: "Iphone 6",
			inf: "Смартфон Iphon 6 164GB Green."
	});

	function Elements (obj) {
		let el = this;
		el.info = document.querySelector(obj.info);
		el.div = document.createElement(obj.div);
		el.class = obj.class;
		el.img = obj.img;
		el.link = obj.link;
		el.inf = obj.inf;
		el.style = obj.style;
		let a = `<a href='#' class="link">${obj.link}</a>`;
		
		el.info.appendChild(el.div);
		el.div.innerHTML += `<img src="${obj.img}"></img>`;
		el.div.innerHTML += a;
		el.div.innerHTML += `<p>${obj.inf}</p>`;
		el.div.classList.add(obj.class);
		el.div.classList.add(obj.style);
	}

	//click for each element of the link 
	let allLink = document.querySelectorAll('.link');
	for(let i = 0; i < allLink.length; i++) {
		allLink[0].addEventListener('click', function () {
			p.open(
				`<h1>samsung-galaxy</h1>
				<img src="img/img-1.jpg"></img>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ad, dolorem! Molestiae aliquid facere in, tempore officiis cumque rerum modi alias cupiditate error, perspiciatis officia ullam quia! Non consequatur, modi nam nihil delectus, harum illo soluta molestias veritatis, fugiat architecto recusandae laudantium vel dicta iusto, exercitationem cum voluptatibus! Reiciendis corporis illum dolores commodi fuga doloribus voluptatem odio quaerat! Nulla sint facilis nam eos quisquam asperiores incidunt delectus tempora doloribus fuga sunt officiis nihil magnam iste laudantium </p>`
				);
		})
		allLink[1].addEventListener('click', function () {
			p.open(
				`<h1>Nokia Experia</h1>
				<img src="img/img-3.jpg"></img>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ad, dolorem! Molestiae aliquid facere in, tempore officiis cumque rerum modi alias cupiditate error, perspiciatis officia ullam quia! Non consequatur, modi nam nihil delectus, harum illo soluta molestias veritatis, fugiat architecto recusandae laudantium vel dicta iusto, exercitationem cum voluptatibus! Reiciendis corporis illum dolores commodi fuga doloribus voluptatem odio quaerat! Nulla sint facilis nam eos quisquam asperiores incidunt delectus tempora doloribus fuga sunt officiis nihil magnam iste laudantium </p>`
				);
		})
		allLink[2].addEventListener('click', function () {
			p.open(
				`<h1>Alcatel</h1>
				<img src="img/img-4.jpg"></img>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ad, dolorem! Molestiae aliquid facere in, tempore officiis cumque rerum modi alias cupiditate error, perspiciatis officia ullam quia! Non consequatur, modi nam nihil delectus, harum illo soluta molestias veritatis, fugiat architecto recusandae laudantium vel dicta iusto, exercitationem cum voluptatibus! Reiciendis corporis illum dolores commodi fuga doloribus voluptatem odio quaerat! Nulla sint facilis nam eos quisquam asperiores incidunt delectus tempora doloribus fuga sunt officiis nihil magnam iste laudantium </p>`
				);
		})
		allLink[3].addEventListener('click', function () {
			p.open(
				`<h1>Iphone X</h1>
				<img src="img/img-5.jpg"></img>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ad, dolorem! Molestiae aliquid facere in, tempore officiis cumque rerum modi alias cupiditate error, perspiciatis officia ullam quia! Non consequatur, modi nam nihil delectus, harum illo soluta molestias veritatis, fugiat architecto recusandae laudantium vel dicta iusto, exercitationem cum voluptatibus! Reiciendis corporis illum dolores commodi fuga doloribus voluptatem odio quaerat! Nulla sint facilis nam eos quisquam asperiores incidunt delectus tempora doloribus fuga sunt officiis nihil magnam iste laudantium </p>`
				);
		})
		allLink[4].addEventListener('click', function () {
			p.open(
				`<h1>Iphone 6</h1>
				<img src="img/img-6.jpg"></img>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ad, dolorem! Molestiae aliquid facere in, tempore officiis cumque rerum modi alias cupiditate error, perspiciatis officia ullam quia! Non consequatur, modi nam nihil delectus, harum illo soluta molestias veritatis, fugiat architecto recusandae laudantium vel dicta iusto, exercitationem cum voluptatibus! Reiciendis corporis illum dolores commodi fuga doloribus voluptatem odio quaerat! Nulla sint facilis nam eos quisquam asperiores incidunt delectus tempora doloribus fuga sunt officiis nihil magnam iste laudantium </p>`
				);
		})
	}

	let sam = document.querySelector('.samsung');
	
	//Create modal window for each element
		function Popup() {
		
		/* инициализация */
		var elem = document.querySelector('body');
		elem.insertAdjacentHTML("beforeEnd","<div class='overlay'></div><div class='modal'></div>");
		
		this.overlay = document.querySelector('.overlay');
		this.modal = document.querySelector('.modal');
		
		var popup = this;
		
		this.open = function(content) {
			popup.modal.innerHTML = content;
			popup.overlay.style.display = 'block';
			popup.modal.style.display = 'block';
		}
		
		this.close = function() {
			popup.overlay.style.display = 'none';
			popup.modal.style.display = 'none';
		}
		
		this.overlay.onclick = popup.close;
	}
	var p = new Popup();
	
	


	//Create search sistem 
	let input = document.querySelector('.search');
	let divs = document.querySelectorAll(".item");
	input.addEventListener('input', function search(obj) {
		if(input.value === "samsung" || input.value === "Samsung" || input.value ===  "SAMSUNG") {
			for (let i = 0; i < divs.length; i++) {
				divs[i].style.display = "none";
				divs[0].style.display = "block";
			}
		} else if(input.value === "nokia" || input.value === "Nokia" || input.value ===  "NOKIA") {
			for (let i = 0; i < divs.length; i++) {
				divs[i].style.display = "none";
				divs[1].style.display = "block";
			}
		}

		else if(input.value === "alcatel" || input.value === "Alcatel" || input.value ===  "ALCATEL") {
			for (let i = 0; i < divs.length; i++) {
				divs[i].style.display = "none";
				divs[2].style.display = "block";
			}
		}

		else if(input.value === "iphone" || input.value === "Iphone" || input.value ===  "IPHONE") {
			for (let i = 0; i < divs.length; i++) {
				divs[i].style.display = "none";
				divs[3].style.display = "block";
				divs[4].style.display = "block";
			}
		}

		else {
			for (let i = 0; i < divs.length; i++) {
				divs[i].style.display = "block";
			}
		}
	})

































}
