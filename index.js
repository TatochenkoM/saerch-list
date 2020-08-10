class DataList {
	constructor(containerId, inputId, listId, label, options) {
		this.containerId = containerId;
		this.inputId = inputId;
		this.listId = listId;
		this.label = label;
		this.options = options;
	}

	create(filter = "") {
		const list = document.getElementById(this.listId);
		const filterOptions = this.options.filter(
			(d) => {
				return filter === "" || d.name.includes(filter)
			}
		);
		list.innerHTML = filterOptions
			.map((o) => {
				return `<li id=${o.id}>${o.name}</li>`})
			.join("");
	}

	addListeners(datalist) {
		const container = document.getElementById(this.containerId);
		const label = document.getElementById(this.label);
		const input = document.getElementById(this.inputId);
		const list = document.getElementById(this.listId);
		container.addEventListener("click", (e) => {
			if (e.target.id === this.inputId) {
				container.classList.toggle("active");
			} 
		});

		input.addEventListener("input", (e) => {
			if (!container.classList.contains("active")) {
				container.classList.add("active");
			}
			datalist.create(input.value);
		});

		list.addEventListener("click", (e) => {
			if (e.target.nodeName.toLocaleLowerCase() === "li") {
				input.value = e.target.innerText;
				label.setAttribute("value", e.target.id);
				container.classList.remove("active");
			}
		});
	}
}

const jsonData = [
	{
		"name": "shynz",
		"id": 9799,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "skyfloow",
		"id": 9798,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "jspractice",
		"id": 9797,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Dimon2333",
		"id": 9796,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": "I'm learning React&Redux",
		"followed": false
	  },
	  {
		"name": "TreepToon",
		"id": 9795,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Ya_Mihail_",
		"id": 9794,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "_Mihail_",
		"id": 9793,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "ulya",
		"id": 9792,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "dony_bro",
		"id": 9791,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "venchass2",
		"id": 9790,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "dennnnnnnnnnnnnn",
		"id": 9789,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Kononuchenko",
		"id": 9788,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "m_misha",
		"id": 9787,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "cziabata",
		"id": 9786,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Dankos",
		"id": 9785,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "AnnaK",
		"id": 9784,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "misha_m",
		"id": 9783,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "vladislavt",
		"id": 9782,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Test_Bubo_Scandiacus",
		"id": 9781,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Bubo_Scandiacus_Test",
		"id": 9780,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Egori4",
		"id": 9779,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Leviafhan484",
		"id": 9778,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Torshin",
		"id": 9777,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "ReactYbica2020",
		"id": 9776,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "sportsmen111",
		"id": 9775,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "sportsmen",
		"id": 9774,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "vasiliy11123",
		"id": 9773,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "vasiliy",
		"id": 9772,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "VoronID",
		"id": 9771,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "yurchuk_k",
		"id": 9770,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "lubomyr224",
		"id": 9769,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "ArturKarapetyan",
		"id": 9768,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "_andri_gel_",
		"id": 9767,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "dddy",
		"id": 9766,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Yanchers",
		"id": 9765,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Karin_Park",
		"id": 9764,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "JS Samurai",
		"id": 9763,
		"uniqueUrlName": null,
		"photos": {
		  "small": "https://social-network.samuraijs.com/activecontent/images/users/9763/user-small.jpg?v=1",
		  "large": "https://social-network.samuraijs.com/activecontent/images/users/9763/user.jpg?v=1"
		},
		"status": "React is way of life",
		"followed": false
	  },
	  {
		"name": "dkflbrbtd",
		"id": 9762,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "azizbek_komilov",
		"id": 9761,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "relise",
		"id": 9760,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "yoyoman",
		"id": 9759,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "sobbabobba",
		"id": 9758,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": "123",
		"followed": false
	  },
	  {
		"name": "Vagner",
		"id": 9757,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Liptor",
		"id": 9756,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "waku",
		"id": 9755,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "reziko961",
		"id": 9754,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": "rezi giorgadze",
		"followed": false
	  },
	  {
		"name": "M_a_x",
		"id": 9753,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "sdm777",
		"id": 9752,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "St-Mirudistok-Ps",
		"id": 9751,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "malaeva228",
		"id": 9750,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "dmitriim",
		"id": 9749,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Im_Mistaer",
		"id": 9748,
		"uniqueUrlName": null,
		"photos": {
		  "small": "https://social-network.samuraijs.com/activecontent/images/users/9748/user-small.jpg?v=1",
		  "large": "https://social-network.samuraijs.com/activecontent/images/users/9748/user.jpg?v=1"
		},
		"status": "ку всем!",
		"followed": false
	  },
	  {
		"name": "Kirill_Solovyov",
		"id": 9747,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "alexndr1g",
		"id": 9746,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "shanless",
		"id": 9745,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "AntonDzya",
		"id": 9744,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "reactlviv",
		"id": 9743,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "123456",
		"id": 9742,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "GrinMorg",
		"id": 9741,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Nstotti",
		"id": 9740,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Petya2",
		"id": 9739,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Petya",
		"id": 9738,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "anubis666",
		"id": 9737,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Labeerint",
		"id": 9736,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "vladislavzelinskii",
		"id": 9735,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "djihard1",
		"id": 9734,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "djihard",
		"id": 9733,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "aynur",
		"id": 9732,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "datas",
		"id": 9731,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": "MY STATUUUUUUUUUZZ",
		"followed": false
	  },
	  {
		"name": "data",
		"id": 9730,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "poop_sock",
		"id": 9729,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Newtest",
		"id": 9728,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "test1234",
		"id": 9727,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "algepy",
		"id": 9726,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "juniorwebdel888",
		"id": 9725,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "juniorwebdel",
		"id": 9724,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "nyaw_tyan",
		"id": 9723,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "sed0001",
		"id": 9722,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "qwert028",
		"id": 9721,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "abishovcode028",
		"id": 9720,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "avinar_028",
		"id": 9719,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "igorek",
		"id": 9718,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "dotrinidro",
		"id": 9717,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "pavelkukusk",
		"id": 9716,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "pavelkuk",
		"id": 9715,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "auyshta",
		"id": 9714,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "koylyak",
		"id": 9713,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "react1000",
		"id": 9712,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": "12",
		"followed": false
	  },
	  {
		"name": "react100",
		"id": 9711,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "VladPatsiuk",
		"id": 9710,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": "Learning React is great!!!!",
		"followed": false
	  },
	  {
		"name": "Ilia_ov",
		"id": 9709,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Rovel8",
		"id": 9708,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "samo_dur_andre",
		"id": 9707,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Natalka77712",
		"id": 9706,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "bakhtiyarrem",
		"id": 9705,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Melon",
		"id": 9704,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "moiz23",
		"id": 9703,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "moiz",
		"id": 9702,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "is_bubux_c",
		"id": 9701,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  },
	  {
		"name": "Fibi",
		"id": 9700,
		"uniqueUrlName": null,
		"photos": {
		  "small": null,
		  "large": null
		},
		"status": null,
		"followed": false
	  }];
  

const datalist = new DataList(
	"user-search",
	"user-search__input",
	"user-search__list",
	"user-search__lable",
	jsonData
);

datalist.create();
datalist.addListeners(datalist);