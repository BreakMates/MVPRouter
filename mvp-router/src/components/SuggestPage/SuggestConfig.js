import React from 'react';
import FaceIcon from 'material-ui-icons/Face';
import PermContactCalendar from 'material-ui-icons/PermContactCalendar';
import TagFaces from 'material-ui-icons/TagFaces';

var config = {
	weights: [
		{
			weight: 100,
			name: "suggest"
		},
		{
			weight: 100,
			name: "alternate"
		}
	],
	suggest: {
		id: "SUG-1",
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
					icon: <FaceIcon/>,
					hook: "Activity Suggestions",
					text: "BreakMates makes planning easier by helping you decide what to do, with curated activity suggestions based on your interests."
				},
				{
					icon: <TagFaces/>,
					hook: "Suggested Locations",
					text: "Each activity includes a list of nearby places for you to visit with your friends."
				},
				{
					icon: <PermContactCalendar/>,
					hook: "Group Chat",
					text: "Keep all of the info in one place and chat with your friends."
				}
			]
		}
	},
	alternate: {
		id: "SUG-2",
		hook: {
			title: "Awesome activities, just for you",
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
					icon: <FaceIcon/>,
					hook: "Activity Suggestions",
					text: "BreakMates makes planning easier by helping you decide what to do, with curated activity suggestions based on your interests."
				},
				{
					icon: <TagFaces/>,
					hook: "Suggested Locations",
					text: "Each activity includes a list of nearby places for you to visit with your friends."
				},
				{
					icon: <PermContactCalendar/>,
					hook: "Group Chat",
					text: "Keep all of the info in one place and chat with your friends."
				}
			]
		}
	}
}

export default config
