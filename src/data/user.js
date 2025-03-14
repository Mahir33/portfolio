const INFO = {
	main: {
		title: "Portfolio by Adam Wrobel",
		name: "Adam Wrobel",
		emailVisible: "adem.wrobel(at)gmail.com",
		email: "adem.wrobel@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/Mahir33",
		linkedin: "https://www.linkedin.com/in/adam-wrobel-80802a20a/",
		x: "https://x.com/W1112Adam",
		medium: "https://medium.com/@adam.marek.wrobel",
	},

	homepage: {
		title: "Front-end Web Developer and amateur singer.",
		description:
			"I am a Full stack developer with an emphasis on Frontend. I have experience in building SPA React applications using various frontend frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "JavaScript & React Developer | MERN Stack Enthusiast",
		description:
			"I am a JavaScript and React Developer specializing in building dynamic, scalable, and efficient web applications. With hands-on experience in MERN stack development, I focus on writing clean, maintainable code and optimizing performance. I have a strong background in debugging, problem-solving, and unit testing with Jest.js, as well as experience in optimizing bug tracking and resolution to streamline the development process. Passionate about continuous learning, I stay up to date with modern web technologies to enhance my skills and contribute to innovative projects. I am actively seeking opportunities as a JavaScript and React Developer, where I can collaborate with forward-thinking teams and work on impactful applications. Let's connect—check out my projects and resume!",
	},

	projectsDesc: {
		title: "I am Adam W. I live in Germany, where I design my future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	projects: [
		{
			title: "ohMyFlix API",
			description: `The "myFlix API" is a RESTful backend application for managing movies, users, and favorite movie lists. It serves data about movies, directors, and genres, enabling users to interact with this data securely.`,
			techLogo: [
				"https://apps.odoo.com/apps/icon_image?module_id=37657",
				"https://miro.medium.com/v2/resize:fit:1400/1*9oOlDJKiLq1KhGoOivv51A.png",
				"https://raw.githubusercontent.com/detain/svg-logos/master/svg/m/mongodb-icon-2.svg",
				"https://cdn-images-1.medium.com/max/960/1*QTeLq8g_qQ-IL8ry7pBwrg.jpeg",
			],
			linkText: "View Source Code",
			link: "https://github.com/Mahir33/CF-myFlix",
			demoText: "View Live Demo",
			demoLink: "https://myflix-api-mahir-941afb3e93ba.herokuapp.com/",
			previewImg:
				"https://github.com/Mahir33/CF-myFlix/blob/main/assets/code.png?raw=true",
		},

		{
			title: "ohMyFlix App (client)",
			description: `"ohMyFlix Client" is a React-based front-end application for managing and exploring a movie database. It allows users to view movies, manage favorites, and interact with user profiles through a user-friendly and responsive interface.`,
			techLogo: [
				"https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png",
			],
			linkText: "View Source Code",
			link: "https://github.com/Mahir33/CF-myFlix-client",
			demoText: "View Live Demo",
			demoLink: "https://ohmyflix.netlify.app",
			previewImg:
				"https://github.com/Mahir33/CF-myFlix-client/blob/main/assets/movies.png?raw=true",
			caseStudy:
				"https://github.com/Mahir33/portfolio/raw/refs/heads/main/src/data/documents/ohMyFlix-case-study.pptx",
		},
		{
			title: "oh Lets Chat Mobile App",
			description: `"oh Lets Chat" is a mobile chat application built with React Native and Expo. It provides users with a seamless chat experience where they can send messages, share images, and their location. The app uses Google Firebase for real-time data storage and authentication.`,
			techLogo: [
				"https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png",
				"https://cdn.prod.website-files.com/64d4ce10600bd67e51c42838/650d5d9ce364e01cf3cc138f_expo.png",
				"https://www.svgrepo.com/show/353735/firebase.svg",
			],
			linkText: "View Source Code",
			link: "https://github.com/Mahir33/CF-oh-lets-chat",
			previewImg:
				"https://github.com/Mahir33/CF-oh-lets-chat/blob/main/assets/welcome.png?raw=true",
		},
		{
			title: "ohLetsMeet App",
			description: `"ohLetsMeet App" is a serverless, progressive web application (PWA) that provides a smooth and interactive experience for users to view and filter upcoming events. The app integrates with the Google Calendar API to display real-time event data.`,
			techLogo: [
				"https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png",
				"https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-calendar-calendar-platform-icon-vector-png-image_9183258.png",
				"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/2048px-Amazon_Lambda_architecture_logo.svg.png",
			],
			linkText: "View Source Code",
			link: "https://github.com/Mahir33/CF-meet",
			demoText: "View Live Demo",
			demoLink: "https://oh-lets-meet.vercel.app/",
			previewImg:
				"https://raw.githubusercontent.com/Mahir33/CF-ohletsmeet/refs/heads/main/ohLetsMeet-prev.png",
		},
		{
			title: "Professional Portfolio",
			description: `My personal Portfolio Website, which showcases my projects, skills, and professional experience. It serves as a central hub to highlight my work as a developer and provides an easy way for others to learn more about me.`,
			techLogo: [
				"https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png",
			],
			linkText: "View Source Code",
			link: "https://github.com/Mahir33/portfolio",
			demoText: "View Live Demo",
			demoLink: "https://adam-wrobel-web-dev.netlify.app/",
			previewImg:
				"https://github.com/Mahir33/portfolio/blob/main/assets/main.png?raw=true",
		},
		{
			title: "Pokédex App",
			description: ` The **Pokédex App** is a responsive web application that allows users to browse and learn about various Pokémon. The app fetches data from an external API and presents it in an intuitive and user-friendly interface.`,
			techLogo: [
				"https://apps.odoo.com/apps/icon_image?module_id=37657",
				"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			],
			linkText: "View Source Code",
			link: "https://github.com/Mahir33/CF-oh-lets-chat",
			previewImg:
				"https://github.com/Mahir33/CF-Pokedex/blob/main/assets/main.png?raw=true",
			demoText: "View Live Demo",
			demoLink: "https://mahir33.github.io/CF-Pokedex/",
		},
		{
			title: "Metric/Imperial Unit Converter",
			description:
				"This App allows user to convert a single numerical value to metric and imperial units.",
			techLogo: [
				"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			],
			linkText: "View Source Code",
			demoText: "View Live Demo",
			link: "https://github.com/Mahir33/p-metric-imperial-unit-converter",
			demoLink:
				"https://mahir33.github.io/p-metric-imperial-unit-converter/",
			previewImg:
				"https://github.com/Mahir33/p-metric-imperial-unit-converter/blob/main/img/metric-imperial-unit-converter.png?raw=true",
		},

		{
			title: "Quote Generator App",
			description:
				"This App allows user to generate a random quote from API.",
			techLogo: [
				"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			],
			linkText: "View Source Code",
			demoText: "View Live Demo",
			link: "https://github.com/Mahir33/p-quote-generator",
			demoLink: "https://mahir33.github.io/p-quote-generator/",
			previewImg:
				"https://github.com/Mahir33/p-quote-generator/blob/main/images/quote-gen-app.png?raw=true",
		},
	],
};

export default INFO;
