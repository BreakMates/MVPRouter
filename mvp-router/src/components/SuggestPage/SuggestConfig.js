var config = {
	weights: [
		{
			weight: 100,
			name: "suggest"
		}
	],
	suggest: {
		id: "SUG-1",
		mocks: [
			"/images/sug-1.png",
			"/images/sug-2.png"
		],
		hook: {
			title: "Rediscover your free time",
			text: "Use BreakMates to find new activities nearby.",
			button: "Be the first to do so"
		},
		signuphook: {
			title: "Be the first to rediscover your free time",
		},
		register: {
			title: "Register to our mailing list",
			subtitle: "We'll notify you when we release our first beta",
			hint: "Email Address",
			button: "Signup for the beta now"
		},
		selling: {
			points: [
				{
					headline: "Activity Suggestions",
					details: "BreakMates makes planning easier by helping you decide what to do, with curated activity suggestions based on your interests.",
					imageUrl: "/images/features-1.png"
				},
				{
					headline: "Suggested Locations",
					details: "Each activity includes a list of places for you to visit with your friends.",
					imageUrl: "/images/features-2.png"
				},
				{
					headline: "Group Chat",
					details: "Make the plan, keep all the info in one place and chat with your friends.",
					imageUrl: "/images/features-3.png"
				}
			]
		}
	}
}

export default config
